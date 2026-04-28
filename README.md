# Product Management API

Esta é uma API RESTful desenvolvida em **Node.js** e **Express** para gerenciamento de produtos. O projeto utiliza um sistema de persistência simples baseado em um arquivo JSON local, ideal para estudos de CRUD e manipulação de arquivos com o módulo `fs`.

## Funcionalidades

- **Listar Produtos:** Retorna todos os produtos ou filtra por categoria via Query Params.
- **Criar Produto:** Adiciona um novo produto com ID gerado automaticamente.
- **Atualizar Produto:** Modifica informações de um produto existente.
- **Remover Produto:** Exclui um produto do sistema.

## Tecnologias Utilizadas

- [Node.js] - Ambiente de execução JavaScript.
- [Express] - Framework web para Node.js.
- [CORS] - Middleware para habilitar requisições de diferentes origens.
