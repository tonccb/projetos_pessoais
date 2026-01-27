describe('To-do Test Cases', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.visit('http://127.0.0.1:5500/projetos_pessoais/HTML-CSS-JS/3%20-%20To-do%20List/to-do%20list.html') 
    })

    it('CT 01 - Cadastro com um input válido', () => {
        cy.get("#todo-input").type("Estudar Automação")
        cy.get("#add-btn").click()

        cy.get(".todo").should('contain.text', 'Estudar Automação')
    })

    it('CT 02 - Cadastro com um input válido (com ENTER)', () => {
        cy.get("#todo-input").type("Estudar Automação{enter}")

        cy.get(".todo").should('contain.text', 'Estudar Automação')
    })

    it('CT 03 - Cadastro com um input vazio', () => {
        cy.get("#todo-input").type("   ")
        cy.get("#add-btn").click()

        cy.get("#todo-error").should('be.visible').and('contain.text', 'Digite um título para a tarefa!')
    })

    it('CT 04 - Edição de uma tarefa', () => {
        criarTarefa("Estudar Automação")
    
        cy.get(".edit-todo").click()
        cy.get("#edit-input").should('be.visible').clear().type("Estudar Cypress{enter}")
        cy.get(".todo").should('contain.text', 'Estudar Cypress')
    })

    it('CT 05 - Edição de uma tarefa com input vazio', () => {
        criarTarefa("Estudar Automação")

        cy.get(".edit-todo").click()
        cy.get("#edit-input").should('be.visible').clear().type("   ")
        cy.get("#save-btn").click()

        cy.get("#edit-error").should('be.visible').and('contain.text', 'O título não pode estar vazio')
    })

    it('CT 06 - Marcar uma tarefa como concluída', () => {

        criarTarefa("Estudar Automação")

        cy.get(".finish-todo").click()
        cy.get(".todo").should('have.class', 'done')
    })

    it('CT 07 - Remover uma tarefa (A Fazer)', () => {

        criarTarefa("Estudar Automação")

        cy.get(".remove-todo").click()
        cy.get(".todo").should('not.exist')
    })

    it('CT 08 - Remover uma tarefa (Concluída)', () => {

        criarTarefa("Estudar Automação")
        concluirTarefa("Estudar Automação")

        cy.get(".remove-todo").click()
        cy.get(".todo").should('not.exist')
    })

    it('CT 09 - Pesquisa de uma tarefa existente', () => {

        criarTarefa("Estudar Automação")

        cy.get("#search-input").type("Automação")
        cy.get(".todo").should('contain.text', 'Estudar Automação')
    })

    it('CT 10 - Pesquisa (Limpeza do termo de busca)', () => {
        criarTarefa("Estudar Automação")

        cy.get("#search-input").type("Automação")
        cy.get("#erase-button").click()

        cy.get("#search-input").should('have.value', '')
    })

    it('CT 11 - Pesquisa (Busca  + Filtro selecionado)', () => {
        criarTarefa("Estudar Automação")
        criarTarefa("Fazer Exercícios")
        concluirTarefa("Estudar Automação")

        cy.get("#search-input").type("Estudar")
        cy.get("#filter-select").select("done")

        cy.get(".todo").should('have.class', 'done').and('contain.text', 'Estudar Automação')
    })

    it('CT 12 - Filtrar tarefas (A Fazer)', () => {
        criarTarefa("Estudar Automação")
        criarTarefa("Fazer Exercicios")
        concluirTarefa("Estudar Automação")

        cy.get("#filter-select").select("todo")
        cy.get(".todo").should('contain.text', 'Fazer Exercicios')
    })

    it('CT 13 - Filtrar tarefas (Concluídas)', () => {
        criarTarefa("Estudar Automação")
        criarTarefa("Fazer Exercicios")
        concluirTarefa("Estudar Automação")

        cy.get("#filter-select").select("done")
        cy.get(".todo").should('have.class', 'done').and('contain.text', 'Estudar Automação')
    })


    function criarTarefa(titulo) {
        cy.get("#todo-input").type(titulo)
        cy.get("#add-btn").click()
        cy.get(".todo").should('contain.text', titulo)
    }

    function concluirTarefa(titulo) {
        cy.contains(".todo", titulo).within(() => {
            cy.get(".finish-todo").click()
        })
    }

});