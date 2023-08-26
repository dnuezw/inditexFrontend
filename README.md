# Acid Tango Inditex
## Frontend Tools Case Study

This project contains an application that allows to visualise products organised in different rows, allowing you to interact with them by doing drag and drop.

## Technologies used

- React
- Typescript
- CSS
- Vite
- Vitest
- React Testing Library
- Docker and Docker Compose
- Make

## Requirements
### Using Docker

- Docker engine 19.03.0+
- Make 4.2.1 (optional)

### Not using Docker

- Node 18.14.0+
- npm 9.6.7+

## Project structure

## Commands
### Using Docker
**Use the correct command depending on whether you are using Make.**

In order to start the application, first build the Docker image using the following command:
```
$ make build
```
```
$ docker compose build
```

Once the build is completed, run the application by executing:
```
$ make up
```
```
$ docker compose up
```

When we want to end the execution of the application, we must run:
```
$ make down
```
```
$ docker compose down
```

### Not using Docker
In order to start the application, first install all the necessary dependencies using one of the following commands:
```
$ npm ci
```
or
```
$ npm install
```

Once the installation is completed, run the application by executing:
```
$ npm run dev
```