// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const filterSelect = document.querySelector("#filter-select")

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
    doneBtn.innerHTML=`<i class="fa-solid fa-check"></i>`
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML=`<i class="fa-solid fa-pen"></i>`
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value=''
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

        if(todoTitle.innerText === oldinputValue) {
            todoTitle.innerText = text
        }
        })
    }

    const filterTodos = (filterValue) => {
        const todos = document.querySelectorAll(".todo");

        todos.forEach((todo) => {
        const isDone = todo.classList.contains("done");

        if(filterValue === "all") {
            todo.style.display = "flex";
        } else if(filterValue === "done" && isDone) {
            todo.style.display = "flex";
        } else if (filterValue ==="todo" && !isDone) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }        
    })
    }
        filterSelect.addEventListener("change", (e) => {
            const filterValue = e.target.value;
            filterTodos(filterValue);
    });

// Eventos

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); //Isso impede que o formulário recarregue a página, que é o comportamento padrão do submit em HTML.

    const inputValue = todoInput.value

    if(inputValue) {
        saveTodo(inputValue)
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div") //as ações do Target são aplicadas no elemento Pai, então devemos criar uma variável resgatando a div mais próxima, que é a que sofrerá alteração promovida pelo evento.
    let todoTitle

    if(parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText
    }   
    
    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done") //recurso toggle utilizado ao invés de add: com toggle, ele executa a ação se ainda não feita, e se já feita, ele desfaz (tira ou coloca o "done")
    }


    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }

    if(targetEl.classList.contains("edit-todo")) {
        toggleForms()
 
    editInput.value = todoTitle
    oldinputValue = todoTitle
    }
})

    cancelEditBtn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleForms()
    })

    editForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const editInputvalue = editInput.value

        if(editInputvalue) {
            updateTodo(editInputvalue)
        }

        toggleForms()
    })

    const searchInput = document.querySelector("#search-input") //quando eu uso # significa que estou selecionando um elemento pelo ID. Se fosse uma Classe, selecionariamos usando "." antes do nome

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase() //converte para Minúscula
        const todos = document.querySelectorAll(".todo")

        todos.forEach((todo) => {
            const title = todo.querySelector("h3").innerText.toLowerCase()

            if(title.includes(searchTerm)) {
                todo.style.display = "flex" ;  //mostra a tarefa
            }else {
                todo.style.display = "none" ;  //oculta a tarefa
            }
            }
    )})


    const eraseBtn = document.querySelector("#erase-button")

    eraseBtn.addEventListener("click", (e) => {
        e.preventDefault()

        searchInput.value = ""

        const todos = document.querySelectorAll(".todo")

        todos.forEach((todo) => {
            todo.style.display = "flex" //exibe todas as tarefas novamente
        })
    })

