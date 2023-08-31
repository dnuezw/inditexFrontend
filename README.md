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
- Playwright

## Requirements
### Using Docker

- Docker engine 19.03.0+
- Make 4.2.1 (optional)

### Not using Docker

- Node 18.14.0+
- npm 9.6.7+

## Project structure
### Global structure
    .
    ├── app                    # React project
    ├── e2e                    # Includes de playwright project for running e2e tests
    ├── mockServer             # The configuration needed for mock server to work correctly and the mocked requests
    ├── .gitingore             # Files and folders to be ignored by git
    ├── docker-compose.yml     # Contains the definition of the diferent services used by the project (app, mockServer and e2e)
    ├── Makefile               # Define commands to speed up the execution of more complex commands.
    ├── README.md

### App structure
    .
    ├── public                 # Includes application tab logo
    ├── src                    # Contains the React application
    ├── test                   # Test files
    ├── .dockeringore          # Files and folders to be ignored by docker
    ├── .eslintrc.json         # Eslint configuration file
    ├── .prettierrc            # Prettier configuration file
    ├── Dockerfile             # Configuration to create the Docker image for development
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.json          # Configuration file of typescript for the web application environment
    ├── tsconfig.node.json     # Configuration file of typescript for the vite environment
    └── vite.config.ts         # Vite and vitest configuration file

### Src structure
    .
    ├── actions                # Layer where the service returned data is transformed into the domain object
    ├── common                 # Has global information
    ├── components             # Contains the React components
    ├── context                # Encloses the React contexts
    ├── infraestructure        # Includes the configuration required for the application (in this case a settings file that should read from an env file)
    ├── repositories           # Connetors/ports to connect with external resources
    ├── services               # This layer prepares the data in order to be able to use the chosen repository
    ├── types                  # Contains the shared data types
    ├── utils                  # Includes utilities used by functions and classes
    ├── App.tsx                # Includes the application header and router
    └── ...

### Tests structure
    .
    ├── actions
    ├── components
    ├── context
    ├── fixtures               # Contains dummy data to facilitate test development and includes a builder.
    ├── repositories
    ├── services
    ├── stubs                  # Includes methods to mock and spy other functions
    ├── utils
    └── setupTests.ts

## Commands
### Using Docker
**It is highly recommended to use docker to run the project.**

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

To run the tests we will run the following command:
```
$ make test
```
```
$ docker compose run --rm app npm run test
```

Finally, to run the end to end tests we execute:
```
$ make e2e-test
```
```
$ docker compose run --rm e2e npm run e2e
```

### Not using Docker
In order to start the application, first we need to go to the app folder and install all the necessary dependencies using one of the following commands:
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

To run the tests we will run the following command:
```
$ npm run test
```

Finally, to run the end to end tests, we first go to the e2e folder and install all the necessary dependencies using one of the following commands:
```
$ npm ci
```
or
```
$ npm install
```
After that, depending on whether you already have playwright configured or not, it may be necessary to install some packages to make it work properly, run:
```
$ npx playwright install-deps
```
If the previous commands fails, it may be necessary to run it as root.

After that, we can run the e2e tests by executing:
```
$ npm run e2e
```