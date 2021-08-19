# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Layout do projeto
https://www.figma.com/file/0xmu9mj2TJYoIOubBFWsk5/dtmoney-Ignite-(Copy)?node-id=35212%3A460


## Aprendizagem

export function vs export default
- export default faz com que o arquivo que está importando o componente possa escolher o nome, isso pode deixar o projeto um pouco confuso.
- o export function direto não permite que o nome dessa função seja redefinido, trazendo mais integridade para o código. Desta forma o autoimport funciona melhor também. (ctrl + . no vscode)

É interessante lembrar de tirar as dependências automáticas do create react-app de testes e tipagem, junto com typescript, e colocar todas elas nas dependências de desenvolvimento.

A principal vantagem do styled components é modularizar o estilo da aplicação, tendo mais controle sobre o css.
pode-se passar propriedades para os componentes do styledcomponents, um exemplo está no arquivo components/NewTransactionModal/index.tsx

O input, textarea e button por padrão não pegam a fonte do body, por isso na aplicação eles são setados junto com a fonte padrão do body.

APIs fakes para desenvolvimento: 
- jsonServer (não tão interessante pois precisa rodar a parte da aplicação)
- [mirage js](https://miragejs.com) é o utilizado no projeto pois roda dentro da própria apliacação. yarn add miragejs

[react modal](https://github.com/reactjs/react-modal) já traz várias coisas prontas para construção de modal. yarn add react-modal

Componente: polished - yarn add polished
- Complemento para o styled components, que utiliza funções javascript para alterações de estilo (no caso foi usado para escurecer a cor da borda do botão). A diferença aqui é que se torna possível alterar os efeitos de uma propriedade específica do css, e não do elemento inteiro como acontece com 'opacity'.

Intl.NumberFormat é uma api nativa do browser.
