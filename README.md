# Projeto Trybetunes 🎶

Boas-vindas ao repositório do projeto Trybetunes! Este projeto foi desenvolvido como parte do curso da Trybe, com o objetivo de criar uma aplicação para gerenciar músicas e álbuns de forma interativa. Abaixo, você encontrará orientações sobre como estruturar o desenvolvimento do seu projeto e as funcionalidades que devem ser implementadas.

## Tecnologias Utilizadas

- React
- JavaScript
- HTML
- CSS
- sweetalert2 (para alertas)

## Funcionalidades do Projeto

O projeto consiste na implementação das seguintes funcionalidades:

1. **Título da Aplicação**: Adicionar um título "Trybetunes" em uma tag `<h1>`.
2. **Componente Login**: Criar um componente `Login` com um formulário para que o usuário se identifique com um nome.
3. **Componente Search**: Criar um formulário para pesquisar álbuns de uma banda ou artista, contendo um input e um botão de pesquisa.
4. **Requisições de Álbuns**: Fazer uma requisição para receber a lista de álbuns da banda ou artista pesquisada ao clicar no botão de pesquisa.
5. **Componente Album**: Exibir a lista de músicas do álbum selecionado dentro do componente `Album`.
6. **Componente Header**: Criar um componente de cabeçalho chamado `Header`.
7. **Músicas Favoritas**: Implementar um mecanismo para marcar músicas como favoritas usando checkboxes no componente `MusicCard`.
8. **Componente Favorites**: Criar uma lista de músicas favoritas dentro do componente `Favorites`.
9. **Exibição de Perfil**: Criar um componente `Profile` para exibir informações do usuário.
10. **Edição de Perfil**: Criar um formulário de edição de perfil dentro do componente `ProfileEdit`.

### Requisitos Bônus

11. **Adicionar/Remover Favoritas**: Implementar requisições para adicionar ou remover músicas favoritas ao clicar no checkbox.
12. **Recuperar Músicas Favoritas**: Fazer uma requisição para atualizar a lista de músicas favoritas ao acessar a página do álbum.
13. **Exibição de Mensagens de Alerta**: Utilizar alertas para informar ações concluídas com sucesso.

## Instruções de Instalação e Uso

1. **Faça um Fork do Repositório**:
   - Acesse o [repositório original do projeto](https://github.com/JyojiTenguam/trybetunes) no GitHub e clique em **"Fork"** no canto superior direito para criar uma cópia do projeto na sua conta.

2. **Clone o Repositório Forkado**:
   - Após fazer o fork, copie o link do seu repositório forkado e clone-o para o seu computador:

    ```bash
    git clone git@github.com:seu-usuario/trybetunes.git
    ```

3. **Navegue até o Diretório do Projeto**:
    ```bash
    cd trybetunes
    ```

4. **Instale as Dependências do Projeto**:
    ```bash
    npm install
    ```

5. **Execute a Aplicação**:
    ```bash
    npm start
    ```

6. **Execute os Testes**:
   - Para verificar se tudo está funcionando corretamente:
    ```bash
    npm test
    ```

Lembre-se de substituir `"seu-usuario"` pelo seu nome de usuário no GitHub para que o link do fork seja correto.
