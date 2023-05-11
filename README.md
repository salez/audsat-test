# Projeto Teste de Desenvolvimento Audsat

Projeto de teste para a vaga de desenvolvedor front-end da Audsat! Este projeto consiste em uma aplicação SPA gerado com Angular 16.

Este é um projeto desenvolvido utilizando extensivamente componentes standalone e os recursos mais recentes disponíveis no framework e o Angular Material para a interface.

## Aplicação Online

https://audsat-test.vercel.app

## Objetivo

O objetivo deste projeto é demonstrar o uso avançado das tecnologias disponíveis para criar uma aplicação web robusta e eficiente com base no cenário proposto

## Requisitos e Funcionalidades

Requisitos obrigatórios desenvolvidos:
- Roteamento de módulos (lazy load)
- Uso do padrão Reactive Forms no filtro de busca
- Uso de Observables (RxJS) nos serviços REST e o adequado gerenciamento de eventEmitters para compartilhar dados nas classes de serviços e componentes;
- Estrutura do HTML semântica e limpa
- Uso de logo no header
- Uso de cores pré-estabelecidas

Além das funcionalidades obrigatórias, algumas outras funcionalidades foram desenvolvidas para uma melhor experiência geral:
- Uso extensivo dos componentes standalone do Angular;
- Uso das últimas ferramentas disponíveis no framework, como componentes standalone e o signal() trazendo um melhor aproveitamento da detecção de mudanças
- Codificação reativa com Rxjs e signal() em observância as melhores práticas (Clean Code, SOLID)
- Interface desenvolvida com o Angular Material;
- Navegação de tabela;
- Notificações;
- Animações via CSS e animations para uma experiência mais fluída do usuário.
- Separação do código em features (Clean Architeture)
- Criação de interfaces e types para melhor organização do código.
- Utilização de um loader shimmer para melhor experiência do usuário.
- Autenticação da área logada através de login
- Layout responsivo seguindo a prática "mobile first".

## APIs

A aplicação utiliza o jsonplaceholder para acessar e mostrar os recursos obrigatórios do desafio, e outra construida via mockapi.io para armazenar logs de utilização

## Estrutura da Aplicação

- Com base no cenário proposto, a estrutura da aplicação foi desenhada para ser escalável e rápida, trazendo uma experiência agradável para o usuário, a home da aplicação carrega apenas o mínimo necessário para a aplicação funcionar e as demais partes da aplicação são carregadas conforme a demanda.
- A estrutura foi inicialmente dividida em dois grandes blocos, a parte publica e a parte administrativa, sendo necessário fazer login para acessar as rotas da área administrativa

## Desafios

### Responsividade

 - para manter a responsividade da aplicação, foi utilizado um modelo de breakpoints simples via SCSS para realizar os ajustes somente quando necessário (xs, sm, md, lg, xl)

### Layout e Cores

- Separação dos estilos de forma escalável
- Utilização de variaveis, mixins e functions do SCSS para garantir uma experiência unificada com relação ao layout e facilitar o reuso.
- Desenvolvimento de um tema personalizado utilizando o Angular Material respeitando as cores propostas no layout (O header deve ter a cor de fundo #003040; Os botões devem ter a cor: #007839 e no :hover ele deve escurecer 6%) mantendo uma harmonia entre os componentes do Angular Material e o as cores Audisat

### Header e Footer

- O Header e Footer foram desenvolvidos de maneira responsiva para que os items sejam sempre apresentados

### Login

- O login da aplicação não acessa uma api real, os metódos simulam apenas a autenticação e verificam se o usuário tem o usuario admin@admin.com e senha admin. Sendo utilizado o localStorage para armazenar um token fake e autenticar automaticamente o usuário
- funcionalidade logoff com botão no header

### Listagem de usuários

- Com base no filtro proposto, foi desenvolvido um único componente de busca que realiza a busca automaticamente para uma melhor experiência do usuário, com base nos critérios:
- - Usuário parar de digitar por mais de 500ms e digitar 3 ou mais caracteres.
- - Usuário pressionar Enter.
- Filtro e Paginação do resultado via Angular Material Table e Paginator

### Módulo Histórico de Posts

- Loading dos items com shimmer
- Animações via CSS
- Exclusão (fake) dos post com notificação

## Observações

- Este projeto não possui foco em testes unitários e tratamento de erros (principalmente vindo das apis fake), sendo feito apenas o básico na verificação se o usuário já tinha uma sessão antes através de um token fake armazenado no localStorage.

## Instruções de Uso

1. Clone este repositório em sua máquina local.
2. Execute `npm install` para instalar as dependências.
3. Execute `ng serve` para iniciar o servidor de desenvolvimento.
5. Abra o navegador e acesse `http://localhost:4200` para acessar a aplicação.

## Tecnologias Utilizadas

- Angular 16
- Angular Material
- Rxjs
