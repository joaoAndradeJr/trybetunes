# Boas-vindas ao repositório do projeto Trybetunes!

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu projeto você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Neste projeto você irá criar o TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação será capaz de:

  - Fazer login;
  - Pesquisar por uma banda ou artista;
  - Listar os álbuns disponíveis dessa banda ou artista;
  - Visualizar as músicas de um álbum selecionado;
  - Reproduzir uma prévia das músicas deste álbum;
  - Favoritar e desfavoritar músicas;
  - Ver a lista de músicas favoritas;
  - Ver o perfil da pessoa logada;
  - Editar o perfil da pessoa logada;

  Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre Git & GitHub no Course sempre que precisar!

  ### Protótipo do projeto
  Você pode acessar um protótipo no link abaixo:

  https://www.figma.com/file/BDQgAJvOe4KNUjmrYh5t68/TrybeTunes-Figma
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto, verificamos se você é capaz de:

  * Fazer requisições e consumir dados vindos de uma `API`;

  * Utilizar os ciclos de vida de um componente React;

  * Utilizar a função `setState` de forma a garantir que um determinado código só é executado após o estado ser atualizado
  
  * Utilizar o componente `BrowserRouter` corretamente;

  * Criar rotas, mapeando o caminho da URL com o componente correspondente, via `Route`;

  * Utilizar o `Switch` do `React Router`

  * Usar o componente `Redirect` pra redirecionar para uma rota específica;

  * Criar links de navegação na aplicação com o componente `Link`;
</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />
  
  * Este projeto é individual;
  * São `X` dias de projeto;
  * Data para entrega final do projeto: `DD/MM/YYYY - 14:00h`.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/sd-0x-project-trybetunes.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-0x-project-trybetunes`

  2. Instale as dependências

  - `npm install`.
  
  3. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-sd-0x-project-trybetunes`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-project-trybetunes`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-trybetunes/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-trybetunes/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
  Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
  e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

  ```bash
    npm run lint
    npm run lint:styles
  ```

  ⚠️ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.
  ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

  Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Vamos utilizar [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes unitários.

  Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, uma dessas marcações é o atributo `data-testid` e faremos uso dele aqui.

  Na descrição dos requisitos (logo abaixo) será pedido que seja feita a adição de atributos `data-testid` nos elementos _HTML_. Vamos a um exemplo para deixar essa configuração nítida:

  Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode criar:

  ```html
  <button data-testid="my-action"></button>
  ```

  ou

  ```html
  <a data-testid="my-action"></a>
  ```

  Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library (RTL) identificar o elemento e, dessa forma, conseguiremos realizar testes unitários focados no comportamento da aplicação.

  **ATENÇÃO!** Muito cuidado com os nomes especificados nos requisitos! O conteúdo deve ser exatamente igual ao texto descrito no requisito.

  Para verificar a solução proposta, você pode executar todos os testes unitários localmente, basta executar:

  ```bash
  npm test
  ```

  ### Dica: desativando testes

  Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste:

  ```js
  it.skip('Será validado se existe uma página para rotas não mapeadas', () => {
    renderPath('/not-found');

    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
  });
  ```
  ![image](skip-image.png)

  Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

  Você também pode rodar apenas um arquivo de teste, por exemplo:

  ```bash
  npm test 01.LoginPage.test.js
  ```

  ou

  ```bash
  npm test 01.LoginPage
  ```

  Uma outra forma para driblar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

  ```js
  it.only('Será validado se existe uma página para rotas não mapeadas', () => {
    renderPath('/not-found');

    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
  });
  ```
  ![image](only-image.png)

  ⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**
</details>

<details>
  <summary><strong>:convenience_store: Desenvolvimento </strong></summary><br />

  Nos últimos projetos, por mais que o app tenha sido desenvolvido utilizando múltiplos componentes, o que é uma boa prática, todas as funcionalidades eram acessadas ao mesmo tempo, no mesmo lugar, utilizando apenas uma URL (`localhost:3000`, normalmente). A medida que seus apps se tornarem maiores e mais complexos, isso se tornará inviável. Desta vez, as funcionalidades do app serão agrupadas e organizadas em rotas.

  Uma rota define o que deve ser renderizado na página ao abrí-la. Cada rota está associada a um caminho. O caminho é a parte da URL após o domínio (nome do site, de forma simplificada). Por exemplo, em `www.site.com/projetos/meu-jogo`, o caminho é `/projetos/meu-jogo`. Até agora, todos os apps React que você desenvolveu possuíam somente uma rota, a raíz (`/`).

  Outra diferença importante neste projeto em relação aos anteriores é que você irá consumir e enviar dados para APIs para pesquisar a banda ou artista, recuperar as músicas de cada álbum e salvar as músicas favoritas, além de editar as informações da pessoa logada. Dessa forma, você terá que lidar com requisições assíncronas e promises. Também deverá fazer uso dos métodos de ciclo de vida (lifecycle methods) e de estados para controlar o que é renderizado por seus componentes dependendo do momento em que as requisições se encontram.

  ### Como desenvolver

  Este repositório já contém um template com um App React criado. Após clonar o projeto e instalar as dependências, você deverá completar este template implementando os requisitos listados na seção [Requisitos](#requisitos).

  Também já existe no projeto um diretório `src/services` que contém os arquivos `favoriteSongsAPI.js`, `searchAlbumsAPI.js`, `userAPI.js` e `musicsAPI.js`. Esses arquivos serão responsáveis por lidar com as requisições simuladas que serão usadas durante o desenvolvimento. Entenda mais sobre eles abaixo:

  <details><summary><strong> <code>userAPI.js</code></strong></summary>

  O arquivo `userAPI.js` será utilizado para manipular as informações da pessoa logada, dentro dele estarão as funções para recuperar e atualizar as informações da pessoa usuária, além de criar um novo perfil. Todas essas funções simulam o funcionamento de uma API.

  - Para recuperar as informações da pessoa usuária, utilize a função `getUser`. Ela retornará um objeto com as informações da pessoa logada caso exista.
  **Atenção:** caso não encontre nenhuma informação da banda ou artista, a API retornará um objeto vazio.

  - Para criar um novo perfil, utilize a função `createUser`, ela recebe como parâmetro o objeto que contém as informações da pessoa usuária. Esse objeto deverá conter a seguinte estrutura:

  ```
  {
    name: '',
    email: '',
    image: '',
    description: '',
  }
  ```

  Para atualizar as informações da pessoa logada, utilize a função `updateUser`. Assim como a função anterior, ela também recebe um objeto com as informações que serão atualizadas, esse objeto deve conter a mesma estrutura do anterior.
  </details>

  <details><summary><strong> <code>searchAlbumsAPI.js</code></strong></summary>

  O arquivo `searchAlbumsAPI.js` contém uma função que faz uma requisição à uma API e retorna os álbuns de uma banda ou artista. Para essa função funcionar, ela recebe como parâmetro uma string, que deve ser o nome da banda ou artista. O retorno dessa função, quando encontra as informações, é um array com cada álbum dentro de um objeto.
  **Atenção:** caso não encontre nenhuma informação da banda ou artista, a API retornará um array vazio.
  </details>
  <details><summary><strong> <code>favoriteSongsAPI.js</code></strong></summary>

  O arquivo `favoriteSongsAPI.js` é responsável por manipular as informações das músicas favoritas. Nele há as funções `getFavoriteSongs`, `addSong` e `removeSong`, que recuperam, adicionam e removem músicas dos favoritos, respectivamente. Assim como nos arquivos anteriores, todas as funções simulam o funcionamento de uma API.

  A função `getFavoriteSongs` retorna um array com as músicas favoritas ou um array vazio, caso não haja nenhuma música.

  A função `addSong` recebe um objeto que representa a música que você quer salvar como favorita e adiciona ao array já existente das músicas que já foram favoritadas.

  A função `removeSong` também recebe um objeto que representa a música que você deseja remover da lista de músicas favoritas. 

  **Atenção:** os objetos de música precisam ter a chave `trackId` para que as músicas sejam adicionadas e removidas corretamente.
  </details>
  <details><summary><strong> <code>musicsAPI.js</code></strong></summary>

  O arquivo `musicsAPI.js` contém uma função que faz uma requisição à uma API e retorna os as músicas de um álbum, ela recebe como parâmetro uma string, que deve ser o id do álbum. O retorno dessa função, quando encontra as informações, é um array onde o primeiro elemento é um objeto com informações do álbum e o restante dos elementos são as músicas do álbum.
  **Atenção:** caso não encontre nenhuma informação, a API retornará um array vazio.
  </details>
</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. 
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.
</details>

# Requisitos

:warning: **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.** :warning:

:warning: Os gifs são meramente ilustrativos para visualizar o fluxo da aplicação, os nomes devem seguir os requisitos e não o gif. :warning:

## 1. Crie as rotas necessárias para a aplicação
Você deve utilizar o `BrowserRouter` pra criar as rotas da sua aplicação e cada rota deverá renderizar um componente específico. Crie cada componente dentro da pasta `src/pages`, conforme o indicado abaixo:

<details><summary> Rota <code>/</code></summary>

- A rota `/` deve renderizar um componente chamado `Login`. Este componente deve ter uma `div` com o atributo `data-testid="page-login"` que envolva todo seu conteúdo;
</details>

<details><summary> Rota <code>/search</code></summary>

- A rota `/search` deve renderizar um componente chamado `Search`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-search"`;
</details>

<details><summary> Rota <code>/album/:id</code></summary>

- A rota `/album/:id` deve renderizar um componente chamado `Album`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-album"`;
</details>

<details><summary> Rota <code>/favorites</code></summary>

- A rota `/favorites` deve renderizar um componente chamado `Favorites`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-favorites"`;
</details>
<details><summary> Rota <code>/profile</code></summary>

- A rota `/profile` deve renderizar um componente chamado `Profile`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile"`;
</details>

<details><summary> Rota <code>/profile/edit</code></summary>

- A rota `/profile/edit` deve renderizar um componente chamado `ProfileEdit`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile-edit"`;
</details>

<details><summary> Para qualquer outra rota não mapeada</summary>

Para qualquer outra rota não mapeada, deve ser renderizado um componente chamado `NotFound`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-not-found"`;
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />
  
  - Será validado se a rota `/` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-login`;
  
  - Será validado se a rota `/search` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-search`;
  
  - Será validado se a rota `/album/:id` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-album`;
  
  - Será validado se a rota `/favorites` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-favorites`;
  
  - Será validado se a rota `/profile` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-profile`;
  
  - Será validado se a rota `/profile/edit` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-profile-edit`;
  
  - Será validado se existe uma página para rotas não mapeadas e que renderiza um componente com o `data-testid` com valor `page-not-found`;
</details>

---
