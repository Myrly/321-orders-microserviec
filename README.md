# Orders Microservice API

## Notice

This API is intended to be part of a microservices application, it doesn't have routes because it assumes that the gateway which will send request to the microservice knows what part of the app it's triggering. 

## Notice 2
The exercise was about implementing 1 microservice. I was randomly assigned to this microservice, which actually needs the product price to calculate an order's total. This part uses a workaround where product price is replaced by the product id. This is done because I'm not going to implement the product CRUD microservice. And it made more sense to me to have this placeholder workaround rather than implementing a little bit of product management inside my own microservice, breaking the whole concept of microservices in the first place.

## Project setup

1. Copy the .env file that was lent to you at the root of the directory. Alternatively, you can create your own MongoDB Atlas cluster, and put the connexion string with your ids inside the .env file for the property `DATABASE_CREDENTIALS_URI`. Make sure to create a database named "efrogmmerce" with a collection named "orders".


2. Install dependencies.
```bash
$ npm install
```

## Compile and run the project

```bash
$ npm run start

# watch mode
$ npm run start:dev
```

## Swagger documentation
Can be accessed at http://localhost:3000/api/ once the application is running.