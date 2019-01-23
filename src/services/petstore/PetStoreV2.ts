import { IPetStoreApi } from './IPetStoreApi';
import { Pet, Status, Order, User } from './Models';

export class PetStoreV2 implements IPetStoreApi {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : null;
        this.baseUrl = baseUrl ? baseUrl : "https://petstore.swagger.io/v2";
    }

    /**
     * Add a new pet to the store
     * @param body Pet object that needs to be added to the store
     */
    addPet(body: Pet): Promise<void> {
        let url_ = this.baseUrl + "/pet";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAddPet(_response);
        });
    }

    protected processAddPet(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 405) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * Update an existing pet
     * @param body Pet object that needs to be added to the store
     */
    updatePet(body: Pet): Promise<void> {
        let url_ = this.baseUrl + "/pet";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdatePet(_response);
        });
    }

    protected processUpdatePet(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status === 405) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * Finds Pets by status
     * @param status Status values that need to be considered for filter
     * @return successful operation
     */
    findPetsByStatus(status: Status[]): Promise<Pet[]> {
        let url_ = this.baseUrl + "/pet/findByStatus?";
        if (status === undefined || status === null)
            throw new Error("The parameter 'status' must be defined and cannot be null.");
        else
            status && status.forEach(item => { url_ += "status=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processFindPetsByStatus(_response);
        });
    }

    protected processFindPetsByStatus(response: Response): Promise<Pet[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Pet.fromJS(item));
            }
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Pet[]>(<any>null);
    }

    /**
     * Finds Pets by tags
     * @param tags Tags to filter by
     * @return successful operation
     * @deprecated
     */
    findPetsByTags(tags: string[]): Promise<Pet[]> {
        let url_ = this.baseUrl + "/pet/findByTags?";
        if (tags === undefined || tags === null)
            throw new Error("The parameter 'tags' must be defined and cannot be null.");
        else
            tags && tags.forEach(item => { url_ += "tags=" + encodeURIComponent("" + item) + "&"; });
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processFindPetsByTags(_response);
        });
    }

    protected processFindPetsByTags(response: Response): Promise<Pet[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Pet.fromJS(item));
            }
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Pet[]>(<any>null);
    }

    /**
     * Find pet by ID
     * @param petId ID of pet to return
     * @return successful operation
     */
    getPetById(petId: number): Promise<Pet> {
        let url_ = this.baseUrl + "/pet/{petId}";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetPetById(_response);
        });
    }

    protected processGetPetById(response: Response): Promise<Pet> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Pet.fromJS(resultData200) : new Pet();
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Pet>(<any>null);
    }

    /**
     * Updates a pet in the store with form data
     * @param petId ID of pet that needs to be updated
     * @param name (optional) Updated name of the pet
     * @param status (optional) Updated status of the pet
     */
    updatePetWithForm(petId: number, name: string | null | undefined, status: string | null | undefined): Promise<void> {
        let url_ = this.baseUrl + "/pet/{petId}";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (name !== null && name !== undefined)
            content_.append("name", name.toString());
        if (status !== null && status !== undefined)
            content_.append("status", status.toString());

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdatePetWithForm(_response);
        });
    }

    protected processUpdatePetWithForm(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 405) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * Deletes a pet
     * @param api_key (optional) 
     * @param petId Pet id to delete
     */
    deletePet(api_key: string | null | undefined, petId: number): Promise<void> {
        let url_ = this.baseUrl + "/pet/{petId}";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "api_key": api_key !== undefined && api_key !== null ? "" + api_key : "", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeletePet(_response);
        });
    }

    protected processDeletePet(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * uploads an image
     * @param petId ID of pet to update
     * @param additionalMetadata (optional) Additional data to pass to server
     * @param file (optional) file to upload
     * @return successful operation
     */
    uploadFile(petId: number, additionalMetadata: string | null | undefined, file: FileParameter | null | undefined): Promise<ApiResponse> {
        let url_ = this.baseUrl + "/pet/{petId}/uploadImage";
        if (petId === undefined || petId === null)
            throw new Error("The parameter 'petId' must be defined.");
        url_ = url_.replace("{petId}", encodeURIComponent("" + petId)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (additionalMetadata !== null && additionalMetadata !== undefined)
            content_.append("additionalMetadata", additionalMetadata.toString());
        if (file !== null && file !== undefined)
            content_.append("file", file.data, file.fileName ? file.fileName : "file");

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUploadFile(_response);
        });
    }

    protected processUploadFile(response: Response): Promise<ApiResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ApiResponse.fromJS(resultData200) : new ApiResponse();
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ApiResponse>(<any>null);
    }

    /**
     * Returns pet inventories by status
     * @return successful operation
     */
    getInventory(): Promise<{ [key: string] : number; }> {
        let url_ = this.baseUrl + "/store/inventory";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetInventory(_response);
        });
    }

    protected processGetInventory(response: Response): Promise<{ [key: string] : number; }> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200) {
                result200 = {} as any;
                for (let key in resultData200) {
                    if (resultData200.hasOwnProperty(key))
                        result200![key] = resultData200[key];
                }
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<{ [key: string] : number; }>(<any>null);
    }

    /**
     * Place an order for a pet
     * @param body order placed for purchasing the pet
     * @return successful operation
     */
    placeOrder(body: Order): Promise<Order> {
        let url_ = this.baseUrl + "/store/order";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPlaceOrder(_response);
        });
    }

    protected processPlaceOrder(response: Response): Promise<Order> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Order.fromJS(resultData200) : new Order();
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Order>(<any>null);
    }

    /**
     * Find purchase order by ID
     * @param orderId ID of pet that needs to be fetched
     * @return successful operation
     */
    getOrderById(orderId: number): Promise<Order> {
        let url_ = this.baseUrl + "/store/order/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetOrderById(_response);
        });
    }

    protected processGetOrderById(response: Response): Promise<Order> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Order.fromJS(resultData200) : new Order();
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Order>(<any>null);
    }

    /**
     * Delete purchase order by ID
     * @param orderId ID of the order that needs to be deleted
     */
    deleteOrder(orderId: number): Promise<void> {
        let url_ = this.baseUrl + "/store/order/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteOrder(_response);
        });
    }

    protected processDeleteOrder(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * Create user
     * @param body Created user object
     * @return successful operation
     */
    createUser(body: User): Promise<void> {
        let url_ = this.baseUrl + "/user";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCreateUser(_response);
        });
    }

    protected processCreateUser(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        {
            return response.text().then((_responseText) => {
            return;
            });
        }
    }

    /**
     * Creates list of users with given input array
     * @param body List of user object
     * @return successful operation
     */
    createUsersWithArrayInput(body: User[]): Promise<void> {
        let url_ = this.baseUrl + "/user/createWithArray";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCreateUsersWithArrayInput(_response);
        });
    }

    protected processCreateUsersWithArrayInput(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        {
            return response.text().then((_responseText) => {
            return;
            });
        }
    }

    /**
     * Creates list of users with given input array
     * @param body List of user object
     * @return successful operation
     */
    createUsersWithListInput(body: User[]): Promise<void> {
        let url_ = this.baseUrl + "/user/createWithList";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCreateUsersWithListInput(_response);
        });
    }

    protected processCreateUsersWithListInput(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        {
            return response.text().then((_responseText) => {
            return;
            });
        }
    }

    /**
     * Logs user into the system
     * @param username The user name for login
     * @param password The password for login in clear text
     * @return successful operation
     */
    loginUser(username: string, password: string): Promise<string> {
        let url_ = this.baseUrl + "/user/login?";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined and cannot be null.");
        else
            url_ += "username=" + encodeURIComponent("" + username) + "&"; 
        if (password === undefined || password === null)
            throw new Error("The parameter 'password' must be defined and cannot be null.");
        else
            url_ += "password=" + encodeURIComponent("" + password) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLoginUser(_response);
        });
    }

    protected processLoginUser(response: Response): Promise<string> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<string>(<any>null);
    }

    /**
     * Logs out current logged in user session
     * @return successful operation
     */
    logoutUser(): Promise<void> {
        let url_ = this.baseUrl + "/user/logout";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLogoutUser(_response);
        });
    }

    protected processLogoutUser(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        {
            return response.text().then((_responseText) => {
            return;
            });
        }
    }

    /**
     * Get user by user name
     * @param username The name that needs to be fetched. Use user1 for testing.
     * @return successful operation
     */
    getUserByName(username: string): Promise<User> {
        let url_ = this.baseUrl + "/user/{username}";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined.");
        url_ = url_.replace("{username}", encodeURIComponent("" + username)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetUserByName(_response);
        });
    }

    protected processGetUserByName(response: Response): Promise<User> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? User.fromJS(resultData200) : new User();
            return result200;
            });
        } else if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<User>(<any>null);
    }

    /**
     * Updated user
     * @param username name that need to be updated
     * @param body Updated user object
     */
    updateUser(username: string, body: User): Promise<void> {
        let url_ = this.baseUrl + "/user/{username}";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined.");
        url_ = url_.replace("{username}", encodeURIComponent("" + username)); 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json", 
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdateUser(_response);
        });
    }

    protected processUpdateUser(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * Delete user
     * @param username The name that needs to be deleted
     */
    deleteUser(username: string): Promise<void> {
        let url_ = this.baseUrl + "/user/{username}";
        if (username === undefined || username === null)
            throw new Error("The parameter 'username' must be defined.");
        url_ = url_.replace("{username}", encodeURIComponent("" + username)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteUser(_response);
        });
    }

    protected processDeleteUser(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 400) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }
}

export class ApiResponse implements IApiResponse {
    code?: number | null;
    type?: string | null;
    message?: string | null;

    constructor(data?: IApiResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.code = data["code"] !== undefined ? data["code"] : <any>null;
            this.type = data["type"] !== undefined ? data["type"] : <any>null;
            this.message = data["message"] !== undefined ? data["message"] : <any>null;
        }
    }

    static fromJS(data: any): ApiResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ApiResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code !== undefined ? this.code : <any>null;
        data["type"] = this.type !== undefined ? this.type : <any>null;
        data["message"] = this.message !== undefined ? this.message : <any>null;
        return data; 
    }
}

export interface IApiResponse {
    code?: number | null;
    type?: string | null;
    message?: string | null;
}

export interface FileParameter {
    data: any;
    fileName: string;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if(result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}