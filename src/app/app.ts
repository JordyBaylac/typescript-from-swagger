import * as Koa from 'koa';
import * as Router from 'koa-router';
import { IPetStoreApi } from '../services/petstore/IPetStoreApi';
import { container } from './ioc';
import { Status } from '../services/petstore/Models';

const app = new Koa();
const router = new Router();

// middleware
app.use(async (ctx, next) => {
    // Log the request to the console
    console.log('Url:', ctx.url);
    // Pass the request to the next middleware function
    await next();
});

const petStoreApi: IPetStoreApi = container.resolve('petStoreApi')

router.get('/find-pets', async (ctx) => {
    const pets = await petStoreApi.findPetsByStatus([Status.Available]);    
    ctx.body = { ...pets.slice(0,5) };
});

app.use(router.routes());

app.listen(3000);
console.log('Server running on port 3000');