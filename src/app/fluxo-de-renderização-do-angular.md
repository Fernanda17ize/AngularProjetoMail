INSTRUÇÕES DO PROFESSOR MARIO SOUTO

Acessou uma página - /login
- index.html
  - Carrega todos os scripts da aplicação
- app.module.ts (registramos os componentes)
  - Registra todos os componentes da aplicação
  - Registra todos os modulos
  - Analisa o que precisa ser injetado via "Injeção de Dependência"
  - Por último, ele tenta renderizar o componente definido em "bootstrap"
- app.component.ts (declaramos um componente)
  - <router-outlet></router-outlet>
    - Esse cara, faz um if
      - Pega URL atual
        - window.location.pathname.replace('/', '') // "/teste/seila" vira "teste/seila"
        - Faz um loop em cima de todas as rotas em app.routes.ts 
          - if(path === window.location.pathname.replace('/', ''))
          - Pega o component e renderiza
- Acessamos /login
  - Carrega o src/app/modules/login/login.component.ts
    - Olha o template que ele usa
      - se é via "template" com representando o markup/html da página
      - se é via "templateUrl" com um arquivo
    - O angular pega o texto, indepennte de como vc pediu pra carregar
      - Analisa o texto inteiro
      - Descobre as variáveis de tags
        - Se debugarmos elas, ela vem como [object HTMLInputElement]
          - Quer é mesmo que fazer via JS Puro com document.querySelector('input').toString()
    - 
