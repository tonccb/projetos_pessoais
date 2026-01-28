# 🧪 Projeto de QA – Testes Manuais e Automação Cypress

**Aplicação testada:** To-do List (HTML, CSS, JavaScript)

Este projeto tem como objetivo demonstrar minhas habilidades em **Qualidade de Software (QA)**, incluindo criação de casos de teste, automação com Cypress e identificação de bugs reais.

---

## 📌 Visão Geral

- Criação de **casos de teste manuais**
- Automação de testes **end-to-end com Cypress**
- Validação de fluxos positivos e negativos
- Execução em modo **interativo e headless**
- Identificação e correção de **bug de UX**

---

## 🛠️ Tecnologias Utilizadas

- JavaScript
- Cypress
- HTML / CSS
- Node.js
- Git / GitHub

---

## 📂 Estrutura do Projeto

QA/
└── To-do List - Cases + Automation Cypress/
├── casos_de_teste.xlsx
├── cypress/
│ └── e2e/
│ └── to-do.cy.js
├── cypress.config.js
└── README.md


---

## 📋 Casos de Teste

Os casos de teste foram inicialmente definidos em planilha, contemplando:

- Cadastro de tarefas
- Validação de input vazio
- Edição de tarefas
- Exclusão
- Marcação como concluída
- Pesquisa
- Filtros

---

## 🤖 Automação com Cypress

### Executar os testes

```bash
npm install
npx cypress open

## 🐞 Bug Identificado Durante a Automação

Durante a automação do CT-05 – Edição de uma tarefa com input vazio, foi identificado um problema de UX.

### ❌ Problema

A mensagem de erro era exibida e ocultada imediatamente após o submit do formulário.

### 🔍 Causa

Um eventListener no evento focus ocultava o erro logo após o submit.

### ✅ Solução

A lógica foi ajustada para ocultar o erro apenas quando o usuário começa a digitar, utilizando o evento input.

editInput.addEventListener("input", () => {
    editError.style.display = "none";
});
