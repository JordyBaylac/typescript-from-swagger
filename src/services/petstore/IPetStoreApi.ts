import { Pet, Status, Order, User } from "./Models";
import { FileParameter, ApiResponse } from "./PetStoreV2";

export interface IPetStoreApi {
    /**
     * Add a new pet to the store
     * @param body Pet object that needs to be added to the store
     */
    addPet(body: Pet): Promise<void>;
    /**
     * Update an existing pet
     * @param body Pet object that needs to be added to the store
     */
    updatePet(body: Pet): Promise<void>;
    /**
     * Finds Pets by status
     * @param status Status values that need to be considered for filter
     * @return successful operation
     */
    findPetsByStatus(status: Status[]): Promise<Pet[]>;
    /**
     * Finds Pets by tags
     * @param tags Tags to filter by
     * @return successful operation
     * @deprecated
     */
    findPetsByTags(tags: string[]): Promise<Pet[]>;
    /**
     * Find pet by ID
     * @param petId ID of pet to return
     * @return successful operation
     */
    getPetById(petId: number): Promise<Pet>;
    /**
     * Updates a pet in the store with form data
     * @param petId ID of pet that needs to be updated
     * @param name (optional) Updated name of the pet
     * @param status (optional) Updated status of the pet
     */
    updatePetWithForm(petId: number, name: string | null | undefined, status: string | null | undefined): Promise<void>;
    /**
     * Deletes a pet
     * @param api_key (optional) 
     * @param petId Pet id to delete
     */
    deletePet(api_key: string | null | undefined, petId: number): Promise<void>;
    /**
     * uploads an image
     * @param petId ID of pet to update
     * @param additionalMetadata (optional) Additional data to pass to server
     * @param file (optional) file to upload
     * @return successful operation
     */
    uploadFile(petId: number, additionalMetadata: string | null | undefined, file: FileParameter | null | undefined): Promise<ApiResponse>;
    /**
     * Returns pet inventories by status
     * @return successful operation
     */
    getInventory(): Promise<{ [key: string] : number; }>;
    /**
     * Place an order for a pet
     * @param body order placed for purchasing the pet
     * @return successful operation
     */
    placeOrder(body: Order): Promise<Order>;
    /**
     * Find purchase order by ID
     * @param orderId ID of pet that needs to be fetched
     * @return successful operation
     */
    getOrderById(orderId: number): Promise<Order>;
    /**
     * Delete purchase order by ID
     * @param orderId ID of the order that needs to be deleted
     */
    deleteOrder(orderId: number): Promise<void>;
    /**
     * Create user
     * @param body Created user object
     * @return successful operation
     */
    createUser(body: User): Promise<void>;
    /**
     * Creates list of users with given input array
     * @param body List of user object
     * @return successful operation
     */
    createUsersWithArrayInput(body: User[]): Promise<void>;
    /**
     * Creates list of users with given input array
     * @param body List of user object
     * @return successful operation
     */
    createUsersWithListInput(body: User[]): Promise<void>;
    /**
     * Logs user into the system
     * @param username The user name for login
     * @param password The password for login in clear text
     * @return successful operation
     */
    loginUser(username: string, password: string): Promise<string>;
    /**
     * Logs out current logged in user session
     * @return successful operation
     */
    logoutUser(): Promise<void>;
    /**
     * Get user by user name
     * @param username The name that needs to be fetched. Use user1 for testing.
     * @return successful operation
     */
    getUserByName(username: string): Promise<User>;
    /**
     * Updated user
     * @param username name that need to be updated
     * @param body Updated user object
     */
    updateUser(username: string, body: User): Promise<void>;
    /**
     * Delete user
     * @param username The name that needs to be deleted
     */
    deleteUser(username: string): Promise<void>;
}