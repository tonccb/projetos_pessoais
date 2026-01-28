🧪 Projeto de QA – Testes Manuais + Automação Cypress

Aplicação: To-do List (HTML, CSS, JavaScript)

📌 Visão Geral

Este projeto tem como objetivo demonstrar minhas habilidades em Qualidade de Software (QA), abrangendo:

Criação de casos de teste manuais

Automação de testes end-to-end com Cypress

Validação de fluxos positivos e negativos

Identificação e correção de bug real de UX

Execução estável em modo headless (cypress run)

A aplicação testada é uma To-do List desenvolvida em HTML, CSS e JavaScript puro.

🛠️ Tecnologias Utilizadas

JavaScript

Cypress

HTML / CSS

Node.js

Git / GitHub

📂 Estrutura do Projeto
QA/
 └── To-do List - Cases + Automation Cypress/
     ├── casos_de_teste.xlsx
     ├── cypress/
     │   └── e2e/
     │       └── to-do.cy.js
     ├── cypress.config.js
     └── README.md

📋 Casos de Teste

Os casos de teste foram inicialmente definidos em planilha, contemplando:

Cadastro de tarefas

Validação de input vazio

Edição de tarefas

Exclusão

Marcação como concluída

Pesquisa

Filtros (Todas / A Fazer / Concluídas)

Cada caso de teste manual foi posteriormente automatizado com Cypress.

🤖 Automação com Cypress

Os testes automatizados validam:

Interações reais do usuário

Estados visuais da aplicação

Fluxos negativos (validações)

Comportamento em execução interativa (cypress open)

Comportamento em execução headless (cypress run)

Execução dos testes
npm install
npx cypress open


ou

npx cypress run

🐞 Bug Identificado Durante a Automação

Durante a automação do CT-05 – Edição de uma tarefa com input vazio, foi identificado um comportamento inconsistente:

❌ Problema

A mensagem de erro era exibida e ocultada imediatamente após o submit do formulário.

Causa raiz:
Um eventListener no evento focus do input de edição ocultava o erro logo após o submit.

✅ Solução Aplicada

A lógica foi ajustada para ocultar a mensagem de erro apenas quando o usuário começa a digitar, utilizando o evento input em vez de focus.

editInput.addEventListener("input", () => {
    editError.style.display = "none";
});

🎯 Resultado

UX melhorada

Comportamento consistente

Teste automatizado estável

Execução confiável em modo headless

🧠 Aprendizados

Importância de validar estado visual real, não suposições

Diferença entre execução interativa e headless no Cypress

Identificação de flakiness causada por eventos de DOM

Papel do QA na melhoria do produto, não apenas na validação

👤 Autor

Everton Bueno
QA / Automação de Testes / Desenvolvimento Front-End
📍 Joinville – SC

💡 Este projeto faz parte do meu portfólio de Qualidade de Software.
