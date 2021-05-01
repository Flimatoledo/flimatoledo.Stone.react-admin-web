# FaciliStone.

## Descrição do Projeto

FaciliStone é um sistema para transformar a vida de quem o utiliza!
Nele você consegue consultar os <strong>clientes</strong>, <strong>cartões</strong> e a <strong>auditoria</strong>.
Nele é possivel aprovar e rejeitar pedidos de cartões e toda alteração é salva e disponível na página de auditoria.

# Sumário

<!--ts-->

- [FaciliStone.](#facilistone)
  - [Descrição do Projeto](#descrição-do-projeto)
- [Sumário](#sumário)
- [Features](#features)
- [Tecnologias](#tecnologias)
- [Requesitos](#requesitos)
- [Como Iniciar](#como-iniciar)
- [Rotas](#rotas)
<!--te-->

# Features

- [x] Visualizar usuários da base.
- [x] Visualizar cartoes disponíveis.
- [x] Visualizar Auditoria. Esta deve conter o histórico de ações do operador.
- [x] Aprovar e rejeitar um pedido de cartão. Essas ações alteram o status do pedido e devem gerar logs em auditoria.
- [x] Logar e Deslogar na aplicação com email e senha.
- [ ] Excluir e Criar um pedido de cartão.
- [ ] Atualizar o "nome impresso" do usuário de um pedido de cartão.

# Tecnologias

- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [React-Router-Dom](https://reactrouter.com/web/guides/quick-start)

# Requesitos

- [Git](https://git-scm.com/) installed
- [Node](https://node.js.org/) installed
- Npm or [Yarn](https://yarnpkg.com/) installed

# Como Iniciar

`1- yarn build`
`2- yarn dev`

ou

`npm run build`
`npm run start `

# Rotas

// CRA - Acessar pelo navegador
http://localhost:3000/

// Api
Resources:
http://localhost:3001/api/users
http://localhost:3001/api/analysts
http://localhost:3001/api/cards
http://localhost:3001/api/features
http://localhost:3001/api/audits
