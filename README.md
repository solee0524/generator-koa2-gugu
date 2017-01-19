# generator-koa2-gugu
A yo generator with koa2 from gugutech.

<p align="left">
  <a href="https://npmjs.org/package/generator-koa2-gugu">
    <img src="https://img.shields.io/npm/v/generator-koa2-gugu.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/solee0524/generator-koa2-gugu">
    <img src="https://img.shields.io/coveralls/solee0524/generator-koa2-gugu.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/solee0524/generator-koa2-gugu">
    <img src="https://img.shields.io/travis/solee0524/generator-koa2-gugu.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/generator-koa2-gugu">
    <img src="http://img.shields.io/npm/dm/generator-koa2-gugu.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/solee0524/generator-koa2-gugu.svg">
    <img src="https://david-dm.org/solee0524/generator-koa2-gugu.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/solee0524/generator-koa2-gugu/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/generator-koa2-gugu.svg?style=flat-square"
         alt="License">
  </a>
</p>

## Installation

> We do not use babel to convert. So please make sure you use Node verdion > 7.3.0 to run generated project.


First, install [Yeoman](http://yeoman.io) and **generator-koa2-gugu** using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-koa2-gugu
```

Then generate your new project:

```bash
yo koa2-gugu
```
## What do you get?

Scaffolds out a complete generator directory structure for you:

```
.
├── .gitignore
├── .jshintrc
├── README.md
├── app.js
├── lib
│   ├── const
│   │   └── index.js
│   ├── controllers
│   │   └── index.js
│   ├── db
│   │   ├── mysql.js
│   │   └── redis.js
│   ├── index.js
│   ├── logger
│   │   └── index.js
│   ├── middlewares
│   │   ├── filter.js
│   │   ├── koa-log4js.js
│   │   ├── request-id.js
│   │   └── x-response-time.js
│   ├── models
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   ├── schemas
│   │   └── index.js
│   ├── services
│   │   └── index.js
│   └── utils
│       ├── helper.js
│       └── resp-code-handler.js
├── package.json
├── pm2.json
└── public
```

## Run the demo

After the installation, we could run script to start server (http://localhost:2017).

```bash
npm start
```

## Versions

### 1.0.0

The formal version of this generator. Works properly.

Will keep eyes on module update.

## Getting To Know Gugutech

[Gugutech](http://gugubang.cn/) is cool team.

## Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License
MIT © Bo Li ([solee.me](http://solee.me))
