# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Aprenda a construir uma API REST usando o framework FastAPI, organizando endpoints, modelos de dados, validação de requisições e respostas HTTP.

## 📝 Tasks

### 🛠️ Criar uma API de itens

#### Descrição

Crie uma API FastAPI para gerenciar uma coleção de itens. A API deve permitir consultar todos os itens, consultar um item pelo identificador, criar um novo item, atualizar um item existente e removê-lo.

#### Requisitos

O programa concluído deve:

- Criar uma aplicação FastAPI executável localmente.
- Implementar `GET /items` para listar todos os itens.
- Implementar `GET /items/{item_id}` para consultar um item específico.
- Implementar `POST /items` para criar um item com os dados enviados no corpo da requisição.
- Implementar `PUT /items/{item_id}` para atualizar um item existente.
- Implementar `DELETE /items/{item_id}` para remover um item.
- Retornar o status HTTP `404` quando o identificador solicitado não existir.


### 🛠️ Adicionar modelos, validação e documentação

#### Descrição

Defina modelos Pydantic para os dados dos itens e use os recursos automáticos do FastAPI para validar requisições e documentar a API.

#### Requisitos

O programa concluído deve:

- Definir um modelo Pydantic para validar os dados enviados ao criar ou atualizar um item.
- Exigir os campos principais do item e rejeitar valores com tipos inválidos.
- Retornar respostas JSON com uma estrutura consistente.
- Usar códigos de status HTTP apropriados para criação, consulta, atualização e remoção.
- Disponibilizar a documentação interativa em `/docs` e a documentação alternativa em `/redoc`.
- Incluir pelo menos um exemplo de requisição e resposta na documentação ou no código da API.
