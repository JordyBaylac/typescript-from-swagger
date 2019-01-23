## Auto-generated TypeScript Swagger client (TS)

We will create a basic API using the Koa framework. This API will then communicate with an external Pets API using an auto-generated TypeScript Client. The Client is based on a external Swagger API definition

This project is composed of:

- **src/app**: the NodeJS API using Koa. It exposes only one method (*find-pets*)
- **src/services**: interface and implementation of the auto-generated TypeScript Client.

## Swagger Pets API

The Swagger API for this example can be found [here](https://petstore.swagger.io/v2/swagger.json).

## Example

We wants to call a REST endping in the Pets API with the following structue:
```http://petstore.swagger.io/v2/pet/findByStatus?status=available```

The fact is that we can have type-safety and intellisense with the help of TypeScript.
We ended up having this code:
```const pets = await petStoreApi.findPetsByStatus([Status.Available]);```

## Autogenerating TypeScript from Swagger API

This process is pretty straight forward, you can find how this is achieved in next links:
- [https://github.com/RSuter/NSwag](https://github.com/RSuter/NSwag)
- [https://github.com/RSuter/NSwag/wiki/SwaggerToTypeScriptClientGenerator](https://github.com/RSuter/NSwag/wiki/SwaggerToTypeScriptClientGenerator)
- [https://github.com/RSuter/NSwag/wiki/NSwagStudio](https://github.com/RSuter/NSwag/wiki/NSwagStudio)