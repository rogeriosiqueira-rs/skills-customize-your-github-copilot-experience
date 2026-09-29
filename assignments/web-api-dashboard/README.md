# 📘 Assignment: Interactive Web Interfaces with JavaScript

## 🎯 Objective

Aprenda a transformar dados de uma API REST em uma interface web interativa usando HTML, CSS e JavaScript nativos. Ao final, você terá um painel que carrega, exibe e filtra uma lista de atividades sem usar bibliotecas externas.

## 📝 Tasks

### 🛠️ Estruturar o painel de atividades

#### Descrição

Complete a estrutura HTML do painel para apresentar o título da página, um campo de busca, uma área para mensagens de estado e uma lista de atividades.

#### Requisitos

O programa concluído deve:

- Usar elementos HTML semânticos, como `header`, `main`, `form` e `section`.
- Incluir um campo de busca com `label` associado.
- Reservar uma área para mostrar carregamento, erros e resultados vazios.
- Conter uma lista vazia que será preenchida pelo JavaScript.

### 🛠️ Carregar e renderizar dados da API

#### Descrição

Use `fetch()` para obter as atividades de uma API REST. Para desenvolvimento local, você pode usar o endpoint `http://localhost:8000/activities` ou um arquivo JSON de exemplo com a mesma estrutura.

#### Requisitos

O programa concluído deve:

- Fazer uma requisição `GET` ao carregar a página.
- Converter a resposta para JSON e criar um elemento visual para cada atividade.
- Exibir o nome, a descrição e o horário de cada atividade.
- Mostrar uma mensagem clara enquanto os dados são carregados.
- Tratar erros de rede ou respostas não aprovadas sem quebrar a página.

### 🛠️ Adicionar busca e estados de interface

#### Descrição

Permita que o usuário filtre as atividades pelo nome ou pela descrição e deixe a interface preparada para diferentes estados de uso.

#### Requisitos

O programa concluído deve:

- Atualizar os resultados conforme o usuário digita no campo de busca.
- Ignorar diferenças entre letras maiúsculas e minúsculas na busca.
- Informar quando nenhum resultado corresponder ao texto pesquisado.
- Exibir uma mensagem de erro com uma ação para tentar carregar os dados novamente.
- Adaptar o layout para telas pequenas e grandes sem sobreposição de conteúdo.
- Não usar bibliotecas ou frameworks externos.
