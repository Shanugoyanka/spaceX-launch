# SpaceX
[Author-Shanu Goyanka](https://www.linkedin.com/in/shanu-goyanka/)

A React server side rendering application which would help users list and browse all launches by SpaceX program with some filters for the years of launches and successfull landing and launches as well.
[Demo](https://spacex-launch-2020.herokuapp.com/) of this repo.

## Getting started

This is a basic API skeleton written in NodeJs-Express framework.

This project is **Server side rendering application** using **React-ssr-scripts** as framework. I had tried to maintain the code
structure easy to understand & maintain. Project is open for suggestions & bugs can be reports as well.

## Prerequisties

[NodeJS](https://nodejs.org/en/)

## Build and Run

Install node packages required for this project

```bash
$ yarn
```
To start the app on localhost fr hot reloading at http://localhost:3000

```bash
$ yarn start
```

To use it on production environment 

```bash
$ yarn run build
$ node build
```

## Run Test Cases

Install node packages required for this project

```bash
$ yarn test
```
## Features

-   Selected filter should change to selected state as shown in the visual comp (and should mimic
the toggle behavior).
-   Applied filters should change the URL and update the Page with latest records without
refreshing the page.
-   If the page is refreshed with the applied filters in the URL – the resulting page should be server
side rendered &amp; subsequent filters should again be client side rendered.
-   Light-weight & well documented project.
-   Test cases with [Jest].
-   Linting `(100% covered)` with [Eslint](https://eslint.org/) & [Prettier-vscode].
-   Build and Packaging with [webpack].

## Deployment

Integrate CI/CD setup to automatically deploy on heroku over master branch.
Used [CircleCi](https://circleci.com/) for automatic deployments and [CodeClimate](https://codeclimate.com/) for the test coverage and code quality.

## Lighthouse Score (97.75 out of 100)

### Idividual Scores
```bash
Performance: 98
Accessibility: 100
Best Practices: 93
SEO: 100
```
<img src="assets/lighthouse.png" />

## Project Structure
```sh
├── .circleci
│   └── config.yml
├── assets 
├── build (production reaqdy code will be here)
├── Public
├── src
│   ├── client
│   │   └── index.js
│   │   └── index.css
│   │   └── serviceWorker.js
│   ├── components
│   │   ├── card
│   │   │   ├── __test__
│   │   │   ├── index.js
│   │   │   ├── style.css
│   │   ├── filters
│   │   │   ├── __test__
│   │   │   ├── index.js
│   │   │   ├── filter.css
│   │   └── launch-list
│   │   │   ├── __test__
│   │   │   ├── index.js
│   │   │   ├── style.css
│   │   └── result
│   │   │   ├── __test__
│   │   │   ├── index.js
│   │   │   ├── style.css
│   ├── server
│   │   └── middleware
│   │   │   ├── html.js
│   │   │   ├── render.js
│   │   └── index.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── logo.svg
│   ├── mock.json
│   ├── serviceWorker.js
├── .yarn.lock
├── .babelrc
├── .gitignore
├── webpack.ssr.config.js
├── package.json
└── README.md
```