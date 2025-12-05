# LocaLixo: Landing Page

## 📝 Sobre o Projeto

Este é o repositório da Landing Page do LocaLixo, nosso projeto de desenvolvimento web. A página serve para apresentar o LocaLixo, que é uma plataforma focada em:

*   Organizar mutirões de limpeza.
*   Permitir a denúncia de lixo irregular por fotos.
*   Visualizar tudo em um mapa inteligente.
*   Conectar a comunidade com amigos e uma área de educação sobre reciclagem.

> **Status Atual:** Finalizado.

## 🔗 Links Importantes

| Recurso | Status | Link |
| :--- | :--- | :--- |
| **Protótipo (Figma)** | Visualização | [Acessar Protótipo](https://www.figma.com/design/z9z9cNPT7tuLpVkuTYgoAH/Prototipa%C3%A7%C3%A3o---Grupo-1?node-id=17-871&t=TMZzsOgfc6dxaOsr-1) |
| **Site Publicado** | Pendente | *Ainda não hospedado.* |

## ⚙️ Integração do Blog

O blog da nossa Landing Page é totalmente funcional e integrado a uma API externa para gerenciamento de posts.

### Como Funciona

A integração é feita via JavaScript (`js/blog.js`) que se comunica com a API para buscar e criar novas postagens.

### Endpoints Utilizados
| Ação | Método | Endpoint | Descrição |
| :--- | :--- | :--- | :--- |
| **Buscar Posts** | `GET` | `/api/posts` | Lista todos os posts do blog. |
| **Criar Novo Post** | `POST` | `/api/posts` | Envia um novo post para a API. |

## 💻 Tecnologias

A Landing Page é um projeto construído com:

*   HTML5
*   CSS3
*   JavaScript

## 🚀 Como Rodar Localmente

Basta descompactar o projeto e abrir o arquivo `index.html` no seu navegador. Não é necessário instalar dependências.
