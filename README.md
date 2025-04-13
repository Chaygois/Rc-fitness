## Front-end

O front-end desta aplicação é construído utilizando [React](https://react.dev/) ou [Vue](https://vuejs.org/) (dependendo da sua escolha), uma biblioteca/framework JavaScript moderna e eficiente para a criação de interfaces de usuário dinâmicas e interativas.

### Funcionalidades da Interface do Usuário

O front-end oferece as seguintes funcionalidades para os usuários:

* **Autenticação:**
    * **Registro de Usuário:** Formulário intuitivo para novos usuários criarem suas contas, solicitando nome, e-mail e senha.
    * **Login:** Interface para usuários existentes fazerem login com suas credenciais e acessarem a aplicação.
    * **Redefinição de Senha:** Fluxo para usuários que esqueceram suas senhas, permitindo solicitar e definir uma nova senha através de um link enviado por e-mail.
* **Gerenciamento de Receitas:**
    * **Listagem de Receitas:** Exibição clara e organizada das receitas disponíveis, com opções de paginação e filtros por categoria e tempo de preparo.
    * **Criação de Receitas:** Formulário detalhado para adicionar novas receitas, incluindo título, descrição, ingredientes, instruções, tempo de preparo, categoria e upload de imagens.
    * **Edição de Receitas:** Interface para modificar receitas existentes, com feedback visual das alterações.
    * **Visualização de Receitas:** Página dedicada para exibir todos os detalhes de uma receita específica, incluindo ingredientes, instruções, imagem e avaliações.
* **Favoritos e Avaliações:**
    * **Lista de Favoritos:** Seção para os usuários visualizarem e gerenciarem suas receitas favoritas.
    * **Avaliação de Receitas:** Componente para os usuários avaliarem as receitas com estrelas (de 1 a 5) e deixarem comentários.
    * **Gerenciamento de Comentários:** Possibilidade para os usuários editarem ou removerem seus próprios comentários.
    * **Exibição de Avaliações:** Apresentação da média de avaliações e do número total de avaliações para cada receita.

### Tecnologias Específicas do Front-end

Além do framework principal ([React](https://react.dev/) ou [Vue](https://vuejs.org/)), o front-end utiliza as seguintes tecnologias:

* **Gerenciamento de Estado:** [Redux](https://redux.js.org/) ou [Context API](https://react.dev/learn/passing-data-deeply-with-context) (se estiver usando React) / [Vuex](https://vuex.vuejs.org/) ou [Pinia](https://pinia.vuejs.org/) (se estiver usando Vue) para gerenciar o estado da aplicação de forma eficiente.
* **Roteamento:** [React Router DOM](https://reactrouter.com/en/main) (para React) / [Vue Router](https://router.vuejs.org/) (para Vue) para navegação entre as diferentes páginas e funcionalidades da aplicação.
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (mencionado anteriormente, para estilização rápida e responsiva) ou outra biblioteca/framework de CSS de sua preferência.
* **Componentes de Interface:** Possivelmente bibliotecas de componentes UI como [Material UI](https://mui.com/) ou [Ant Design](https://ant.design/) (se você as utilizou).
* **Ícones:** [Lucide React](https://lucide.dev/) (pelo uso de `Eye` e `EyeOff` no código de registro).
* **Comunicação com a API:** `fetch` API ou bibliotecas como [Axios](https://axios-http.com/ptbr/docs/intro) para fazer requisições HTTP para o backend.
* **Testes:** [Cypress](https://www.cypress.io/) para testes end-to-end, simulando a interação do usuário com a interface.

### Como Rodar o Front-end Localmente

(Esta parte já foi coberta na seção "Como Rodar o Projeto", mas você pode referenciá-la aqui para maior clareza).

1.  Navegue para o diretório do frontend (`cd frontend`).
2.  Instale as dependências (`npm install` ou `yarn install`).
3.  Configure as variáveis de ambiente (especialmente a URL da API backend).
4.  Inicie o servidor de desenvolvimento (`npm start` ou `yarn serve`).

