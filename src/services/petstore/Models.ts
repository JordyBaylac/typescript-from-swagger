
export class Order implements IOrder {
    id?: number | null;
    petId?: number | null;
    quantity?: number | null;
    shipDate?: Date | null;
    /** Order Status */
    status?: OrderStatus | null;
    complete?: boolean | null;

    constructor(data?: IOrder) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.complete = false;
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"] !== undefined ? data["id"] : <any>null;
            this.petId = data["petId"] !== undefined ? data["petId"] : <any>null;
            this.quantity = data["quantity"] !== undefined ? data["quantity"] : <any>null;
            this.shipDate = data["shipDate"] ? new Date(data["shipDate"].toString()) : <any>null;
            this.status = data["status"] !== undefined ? data["status"] : <any>null;
            this.complete = data["complete"] !== undefined ? data["complete"] : false;
        }
    }

    static fromJS(data: any): Order {
        data = typeof data === 'object' ? data : {};
        let result = new Order();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["petId"] = this.petId !== undefined ? this.petId : <any>null;
        data["quantity"] = this.quantity !== undefined ? this.quantity : <any>null;
        data["shipDate"] = this.shipDate ? this.shipDate.toISOString() : <any>null;
        data["status"] = this.status !== undefined ? this.status : <any>null;
        data["complete"] = this.complete !== undefined ? this.complete : <any>null;
        return data;
    }
}

export interface IOrder {
    id?: number | null;
    petId?: number | null;
    quantity?: number | null;
    shipDate?: Date | null;
    /** Order Status */
    status?: OrderStatus | null;
    complete?: boolean | null;
}

export class User implements IUser {
    id?: number | null;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    password?: string | null;
    phone?: string | null;
    /** User Status */
    userStatus?: number | null;

    constructor(data?: IUser) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"] !== undefined ? data["id"] : <any>null;
            this.username = data["username"] !== undefined ? data["username"] : <any>null;
            this.firstName = data["firstName"] !== undefined ? data["firstName"] : <any>null;
            this.lastName = data["lastName"] !== undefined ? data["lastName"] : <any>null;
            this.email = data["email"] !== undefined ? data["email"] : <any>null;
            this.password = data["password"] !== undefined ? data["password"] : <any>null;
            this.phone = data["phone"] !== undefined ? data["phone"] : <any>null;
            this.userStatus = data["userStatus"] !== undefined ? data["userStatus"] : <any>null;
        }
    }

    static fromJS(data: any): User {
        data = typeof data === 'object' ? data : {};
        let result = new User();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["username"] = this.username !== undefined ? this.username : <any>null;
        data["firstName"] = this.firstName !== undefined ? this.firstName : <any>null;
        data["lastName"] = this.lastName !== undefined ? this.lastName : <any>null;
        data["email"] = this.email !== undefined ? this.email : <any>null;
        data["password"] = this.password !== undefined ? this.password : <any>null;
        data["phone"] = this.phone !== undefined ? this.phone : <any>null;
        data["userStatus"] = this.userStatus !== undefined ? this.userStatus : <any>null;
        return data;
    }
}

export interface IUser {
    id?: number | null;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    password?: string | null;
    phone?: string | null;
    /** User Status */
    userStatus?: number | null;
}

export class Category implements ICategory {
    id?: number | null;
    name?: string | null;

    constructor(data?: ICategory) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"] !== undefined ? data["id"] : <any>null;
            this.name = data["name"] !== undefined ? data["name"] : <any>null;
        }
    }

    static fromJS(data: any): Category {
        data = typeof data === 'object' ? data : {};
        let result = new Category();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["name"] = this.name !== undefined ? this.name : <any>null;
        return data;
    }
}

export interface ICategory {
    id?: number | null;
    name?: string | null;
}

export class Tag implements ITag {
    id?: number | null;
    name?: string | null;

    constructor(data?: ITag) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"] !== undefined ? data["id"] : <any>null;
            this.name = data["name"] !== undefined ? data["name"] : <any>null;
        }
    }

    static fromJS(data: any): Tag {
        data = typeof data === 'object' ? data : {};
        let result = new Tag();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["name"] = this.name !== undefined ? this.name : <any>null;
        return data;
    }
}

export interface ITag {
    id?: number | null;
    name?: string | null;
}

export class Pet implements IPet {
    id?: number | null;
    category?: Category | null;
    name!: string;
    photoUrls!: string[];
    tags?: Tag[] | null;
    /** pet status in the store */
    status?: PetStatus | null;

    constructor(data?: IPet) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.photoUrls = [];
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"] !== undefined ? data["id"] : <any>null;
            this.category = data["category"] ? Category.fromJS(data["category"]) : <any>null;
            this.name = data["name"] !== undefined ? data["name"] : <any>null;
            if (data["photoUrls"] && data["photoUrls"].constructor === Array) {
                this.photoUrls = [] as any;
                for (let item of data["photoUrls"])
                    this.photoUrls!.push(item);
            }
            if (data["tags"] && data["tags"].constructor === Array) {
                this.tags = [] as any;
                for (let item of data["tags"])
                    this.tags!.push(Tag.fromJS(item));
            }
            this.status = data["status"] !== undefined ? data["status"] : <any>null;
        }
    }

    static fromJS(data: any): Pet {
        data = typeof data === 'object' ? data : {};
        let result = new Pet();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["category"] = this.category ? this.category.toJSON() : <any>null;
        data["name"] = this.name !== undefined ? this.name : <any>null;
        if (this.photoUrls && this.photoUrls.constructor === Array) {
            data["photoUrls"] = [];
            for (let item of this.photoUrls)
                data["photoUrls"].push(item);
        }
        if (this.tags && this.tags.constructor === Array) {
            data["tags"] = [];
            for (let item of this.tags)
                data["tags"].push(item.toJSON());
        }
        data["status"] = this.status !== undefined ? this.status : <any>null;
        return data;
    }
}

export interface IPet {
    id?: number | null;
    category?: Category | null;
    name: string;
    photoUrls: string[];
    tags?: Tag[] | null;
    /** pet status in the store */
    status?: PetStatus | null;
}

export enum Status {
    Available = "available",
    Pending = "pending",
    Sold = "sold",
}

export enum OrderStatus {
    Placed = "placed",
    Approved = "approved",
    Delivered = "delivered",
}

export enum PetStatus {
    Available = "available",
    Pending = "pending",
    Sold = "sold",
}
