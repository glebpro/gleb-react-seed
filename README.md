# gleb-react-seed

A react webapp seed in case I ever need one.
Includes React static frontend and node/express backend server if needed.

## Setup

```
$ git clone this that/
$ npm install
```

## Run frontend

```
$ npm run front
```

Visit `http://localhost:3000/`
Server is visible from the local network as well.

## Run backend
```
$ npm run back
```

Visit `http://localhost:3001/`

## Run both

```
$ npm run both
```

## Build (production)

Build will be placed in the `build` folder.
### TODO: this will only build frontend

```
$ npm run build
```

## Running frontend in preview production mode

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
