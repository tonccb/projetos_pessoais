# 🧪 Projeto de QA – Testes Manuais e Automação Cypress

**Aplicação testada:** To-do List (HTML, CSS, JavaScript)

Este projeto tem como objetivo demonstrar minhas habilidades em **Qualidade de Software (QA)**, incluindo criação de casos de teste, automação com Cypress e identificação de bugs reais.

![Demonstração do Teste](./video.gif)
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
```

---

## 🐞 Bug Identificado Durante a Automação

Durante a automação do **CT-05 – Edição de uma tarefa com input vazio**, foi identificado um comportamento inconsistente na aplicação.

---

### ❌ Problema

Ao submeter o formulário de edição com o campo de título vazio:

- A mensagem de erro era exibida corretamente
- Porém era ocultada imediatamente após o submit
- O comportamento só era percebido durante a execução automatizada em modo **headless (`cypress run`)**

---

### 🔍 Causa Raiz

Foi identificado que um `eventListener` associado ao evento `focus` do campo de edição ocultava a mensagem de erro logo após o envio do formulário:

```js
editInput.addEventListener("focus", () => {
    editError.style.display = "none";
});

---

### ✅ Solução Aplicada

A lógica foi ajustada para ocultar a mensagem de erro apenas quando o usuário começa a digitar, utilizando o evento input:

```editInput.addEventListener("input", () => {
    editError.style.display = "none";
});

---

### 🎯 Resultado

Após a correção aplicada, o comportamento da aplicação passou a ser consistente tanto para o usuário final quanto para os testes automatizados:

- Mensagem de erro exibida corretamente ao tentar salvar uma tarefa com título vazio
- Mensagem de erro mantida visível até que o usuário inicie a digitação
- Fluxo de edição funcionando conforme esperado
- Teste automatizado do **CT-05** executando com sucesso em:
  - Modo interativo (`cypress open`)
  - Modo headless (`cypress run`)

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, foram consolidados os seguintes aprendizados:

- Validação de **estados visuais reais** em testes automatizados
- Importância da sincronização correta ao testar aplicações com DOM dinâmico
- Diferenças práticas entre execução interativa e headless no Cypress
- Identificação de flakiness causada por eventos de foco e renderização
- Atuação do QA como agente de melhoria de produto, além da validação funcional

---

## 📌 Considerações Finais

Este projeto representa meu primeiro trabalho estruturado unindo **testes manuais e automação com Cypress**, com foco em qualidade, estabilidade e melhoria contínua da aplicação.

Ele também evidencia a importância dos testes automatizados na detecção de comportamentos que podem passar despercebidos durante testes manuais.

---

## 👤 Autor

**Everton Bueno**  
QA | Automação de Testes | Front-End  
📍 Joinville – SC

