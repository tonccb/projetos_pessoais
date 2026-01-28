//Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const todoError = document.querySelector("#todo-error");
const editError = document.querySelector("#edit-error");
const filterSelect = document.querySelector("#filter-select");
const searchInput = document.querySelector("#search-input");
const eraseButton = document.querySelector("#erase-button");

let oldinputValue;

// Funções
const saveTodo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = ''
    todoInput.focus()
}
const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3")

        if (todoTitle.innerText === oldinputValue) {
            todoTitle.innerText = text
        }
    })
}

// Eventos

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); //Isso impede que o formulário recarregue a página, que é o comportamento padrão do submit em HTML.

    const inputValue = todoInput.value

    if (!inputValue.trim()) {
        todoError.innerText = "Digite um título para a tarefa!";
        todoError.style.display = "block";
        return;
    }

    todoError.style.display = "none";
    saveTodo(inputValue);
});

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div") //as ações do Target são aplicadas no elemento Pai, então devemos criar uma variável resgatando a div mais próxima, que é a que sofrerá alteração promovida pelo evento.
    let todoTitle

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText
    }

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done") //recurso toggle utilizado ao invés de add: com toggle, ele executa a ação se ainda não feita, e se já feita, ele desfaz (tira ou coloca o "done")
        applyFilters();
    }


    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }

    if (targetEl.classList.contains("edit-todo")) {
        toggleForms()

        editInput.value = todoTitle
        oldinputValue = todoTitle
        editError.style.display = "none";
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms()
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const editInputvalue = editInput.value

    if (!editInputvalue.trim()) {
        editError.innerText = "O título não pode estar vazio";
        editError.style.display = "block";
        return;
    }

    editError.style.display = "none";
    updateTodo(editInputvalue);
    toggleForms();
})

// Remove erro ao focar no input de nova tarefa
todoInput.addEventListener("focus", () => {
    todoError.style.display = "none";
});

// Remove erro ao focar no input de edição
editInput.addEventListener("input", () => {
    editError.style.display = "none";
});

filterSelect.addEventListener("change", (e) => {
    const filterValue = e.target.value;
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        switch (filterValue) {
            case "all":
                todo.style.display = "flex";
                break;

            case "done":
                todo.classList.contains("done")
                    ? todo.style.display = "flex"
                    : todo.style.display = "none";
                break;

            case "todo":
                !todo.classList.contains("done")
                    ? todo.style.display = "flex"
                    : todo.style.display = "none";
                break;
        }
    });
});
searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        const todoTitle = todo.querySelector("h3").innerText.toLowerCase();

        if (todoTitle.includes(searchValue)) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
});

eraseButton.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("input"));
});

const applyFilters = () => {
    const searchValue = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        const title = todo.querySelector("h3").innerText.toLowerCase();
        const isDone = todo.classList.contains("done");

        // 1. Verifica search
        const matchesSearch = title.includes(searchValue);

        // 2. Verifica filtro
        let matchesFilter = true;

        if (filterValue === "done") {
            matchesFilter = isDone;
        } else if (filterValue === "todo") {
            matchesFilter = !isDone;
        }

        // 3. Aplica ambos
        if (matchesSearch && matchesFilter) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
};

filterSelect.addEventListener("change", () => {
    applyFilters();
});
