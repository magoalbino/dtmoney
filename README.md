# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Aprendizagem

export function vs export default
- export default faz com que o arquivo que está importando o componente possa escolher o nome, isso pode deixar o projeto um pouco confuso.
- o export function direto não permite que o nome dessa função seja redefinido, trazendo mais integridade para o código. Desta forma o autoimport funciona melhor também. (ctrl + . no vscode)

É interessante lembrar de tirar as dependências automáticas do create react-app de testes e tipagem, junto com typescript, e colocar todas elas nas dependências de desenvolvimento.

A principal vantagem do styled components é modularizar o estilo da aplicação, tendo mais controle sobre o css.

O input, textarea e button por padrão não pegam a fonte do body, por isso na aplicação eles são setados junto com a fonte padrão do body.