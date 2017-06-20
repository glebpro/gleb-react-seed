# gleb-react-seed

A react webapp seed in case I ever need one.

## Setup

```
$ npm install
```

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

## Build (production)

Build will be placed in the `build` folder.

```
$ npm run build
```

## Running in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run preview
```

## Icons
Use [realfavicongenerator](http://realfavicongenerator.net/)

## Deploy

Run a build a deploy it to s3 bucket, create a `.aws.json` from `aws-example.json`

```
gulp deploy
```

Based off [Marvin Boilerplate](https://github.com/workco/marvin)
