![Screenshot_1](https://github.com/user-attachments/assets/66e66d23-e0f6-471d-b480-e3210ca9eddf)
![Screenshot_2](https://github.com/user-attachments/assets/e9190678-a461-4e65-a517-7ce3fc863613)
![Screenshot_6](https://github.com/user-attachments/assets/4d294fc2-01c0-4091-b14b-3430bdcc98ee)
![Screenshot_5](https://github.com/user-attachments/assets/c2673cf2-55f9-4cfd-b602-154c5d699cc8)
![Screenshot_4](https://github.com/user-attachments/assets/2524de86-8149-4345-a952-80e231365c40)

O front-end desta aplicação é construído utilizando [React](https://react.dev/), uma biblioteca JavaScript popular para a criação de interfaces de usuário dinâmicas e interativas, e [Vite](https://vitejs.dev/), um construtor de frontend rápido e moderno que oferece uma excelente experiência de desenvolvimento. A estilização da aplicação é feita com [Tailwind CSS](https://tailwindcss.com/), um framework CSS utilitário que permite construir interfaces personalizadas de forma rápida e eficiente diretamente no HTML, complementado por [tailwindcss-animate](https://tailwindcss.com/docs/animation) para adicionar animações suaves. Ícones vetoriais são facilmente integrados usando a biblioteca [lucide-react](https://lucide.dev/). O roteamento da aplicação é gerenciado por [react-router-dom](https://reactrouter.com/en/main).

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

* **Framework:** [React](https://react.dev/) para a estrutura e a lógica da interface do usuário.
* **Construtor de Módulos:** [Vite](https://vitejs.dev/) para um desenvolvimento rápido e eficiente, com hot module replacement (HMR) instantâneo.
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) para estilização utilitária, permitindo a criação de designs complexos diretamente nas classes HTML, com animações utilizando [tailwindcss-animate](https://tailwindcss.com/docs/animation).
* **Gerenciamento de Estado:** [Redux](https://redux.js.org/) ou [Context API](https://react.dev/learn/passing-data-deeply-with-context) para gerenciar o estado da aplicação de forma eficiente (a escolha dependerá da implementação).
* **Roteamento:** [React Router DOM](https://reactrouter.com/en/main) para navegação entre as diferentes páginas e funcionalidades da aplicação.
* **Ícones:** [lucide-react](https://lucide.dev/) para a utilização de ícones vetoriais de forma fácil em componentes React.
* **Comunicação com a API:** `fetch` API ou bibliotecas como [Axios](https://axios-http.com/ptbr/docs/intro) para realizar requisições HTTP para o backend.
* **Testes:** [Cypress](https://www.cypress.io/) para testes end-to-end, simulando a interação do usuário com a interface.
* **Formatação e Linting:** [Biome](https://biomejs.dev/) para linting e formatação de código, garantindo a consistência do estilo.
* **TypeScript:** [TypeScript](https://www.typescriptlang.org/) para adicionar tipagem estática ao JavaScript, melhorando a manutenção e prevenindo erros.

### Como Rodar o Front-end Localmente

1.  Navegue para o diretório do frontend (`cd frontend`).
2.  Instale as dependências (`npm install` ou `yarn install`).
3.  Configure as variáveis de ambiente (especialmente a URL da API backend, geralmente no arquivo `.env.local` ou similar).
4.  Inicie o servidor de desenvolvimento utilizando o script `dev` definido no `package.json`:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```
