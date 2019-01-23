## Koa API + Auto-generated Swagger client (TS)

Koa API communicating with an external Pets API using a generated TypeScript Swagger client

This project is composed of:

- **src/app**: the NodeJS API using Koa framework. It exposes only one method (*find-pets*)
- **src/services**: an auto-generated TypeScript Swagger Client based on a swagger API definition. 

## Swagger Pets API

The Swagger API for this example can be found [here](https://petstore.swagger.io/v2/swagger.json).

## What we are doing

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