# Angular Blog - DIO 🚀

Este é um projeto de blog desenvolvido durante o curso da [Digital Innovation One (DIO)](https://www.dio.me/), utilizando o framework Angular. O objetivo é demonstrar a criação de um blog simples, com listagens de posts e design responsivo, baseado em um layout inspirado no Dribbble.

---

## ✨ Principais Funcionalidades

- **Listagem de Posts:** Exibe os posts do blog em um layout atraente.
- **Detalhes de Posts:** Mostra informações detalhadas de cada post ao clicar.
- **Layout Responsivo:** Interface adaptada para diferentes dispositivos e tamanhos de tela.
- **Modularidade:** Código organizado em componentes reutilizáveis.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** Angular
- **Linguagens:** TypeScript

---

## 📂 Estrutura do Projeto

```plaintext
angular-blog/
│-- src/
│   ├── app/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── big-card/    # Componente de destaque
│   │   │   ├── medium-card/ # Componente médio de listagem
│   │   ├── pages/           # Páginas principais do blog
│   │   ├── services/        # Serviços para manipulação de dados
│   │   ├── app.module.ts    # Módulo principal do Angular
│   ├── assets/              # Imagens e arquivos estáticos
│   ├── index.html           # Arquivo principal HTML
│   ├── styles.css           # Estilos globais
│-- angular.json             # Configuração do Angular
│-- package.json             # Dependências do projeto
│-- README.md                # Documentação do projeto
```

---

## ▶️ Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado:
- Node.js (versão 14 ou superior)
- Angular CLI (caso não tenha, instale com `npm install -g @angular/cli`)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Lucassml-boop/angular-blog-dio.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd angular-blog-dio
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   ng serve
   ```

5. **Acesse o projeto no navegador:**
   ```
   http://localhost:4200/
   ```

---

## 🌟 Funcionalidades Futuras

- **Backend para Persistência de Dados:** Implementar um backend para salvar e gerenciar os posts.
- **Sistema de Autenticação:** Adicionar login e cadastro de usuários.
- **Melhorias no Design:** Refinar o layout e adicionar mais elementos visuais.
- **Comentários nos Posts:** Permitir que usuários comentem nos posts.
- **Paginador:** Implementar paginação na listagem de posts.

---

## 🛠️ Como Contribuir

Quer contribuir com melhorias ou correções para este projeto? Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Faça o commit das mudanças:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie as mudanças para o repositório remoto:
   ```bash
   git push origin feature/nome-da-feature
   ```
5. Abra um Pull Request.

---
