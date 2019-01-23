import { PetStoreV2 } from '../services/petstore/PetStoreV2';
import {
    default as fetch,
    RequestInit as FetchRequestInit
} from 'node-fetch';

const awilix = require('awilix');

export const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
    lifeTime: awilix.Lifetime.SINGLETON,
    formatName: 'camelCase',
})

container.register({
    // Here we are telling Awilix how to resolve a
    // userController: by instantiating a class.
    petStoreApi: awilix.asFunction(() => new PetStoreV2(null,
        // {fetch: fetch as }
        {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response> {
                return new Promise((resolve, reject) => {
                    fetch(url.toString(), init as FetchRequestInit)
                        .then(res => resolve(res as any))
                        .catch(err => reject(err));
                });
            }
        }
    ))
})

