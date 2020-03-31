import Axios from 'axios';
import { AxiosResponse } from 'axios';
export namespace My_Pet_Client {
	export interface ApiResponse {
		code?: number;
		type?: string;
		message?: string;
	}


	/**A representation of a cat */
	export interface Cat extends Pet {

		/**The measured skill for hunting */
		huntingSkill: CatHuntingSkill;
	}

	export enum CatHuntingSkill { clueless = 0, lazy = 1, adventurous = 2, aggressive = 3 }

	export interface Category {

		/**Category ID */
		id?: number;

		/**Category name */
		name?: string;

		/**Test Sub Category */
		sub?: string;
	}


	/**A representation of a dog */
	export interface Dog extends Pet {

		/**The size of the pack the dog is from */
		packSize: number;
	}


	/**A representation of a honey bee */
	export interface HoneyBee extends Pet {

		/**Average amount of honey produced per day in ounces */
		honeyPerDay: number;
	}

	export interface Order {

		/**Order ID */
		id?: number;

		/**Pet ID */
		petId?: number;
		quantity?: number;

		/**Estimated ship date */
		shipDate?: Date;

		/**Order Status */
		status?: OrderStatus;

		/**Indicates whenever order was completed or not */
		complete?: boolean;

		/**Unique Request Id */
		requestId?: string;
	}

	export enum OrderStatus { placed = 0, approved = 1, delivered = 2 }

	export interface Pet {

		/**Pet ID */
		id?: number;

		/**Categories this pet belongs to */
		category?: string;

		/**The name given to a pet */
		name: string;

		/**The list of URL to a cute photos featuring pet */
		photoUrls: Array<string>;
		friend?: string;

		/**Tags attached to the pet */
		tags?: Array<Tag>;

		/**Pet status in the store */
		status?: PetStatus;

		/**Type of a pet */
		petType?: string;
	}

	export enum PetStatus { available = 0, pending = 1, sold = 2 }

	export interface Tag {

		/**Tag ID */
		id?: number;

		/**Tag name */
		name?: string;
	}

	export interface User {
		id?: number;
		pet?: string;

		/**User supplied username */
		username?: string;

		/**User first name */
		firstName?: string;

		/**User last name */
		lastName?: string;

		/**User email address */
		email?: string;

		/**User password, MUST contain a mix of upper and lower case letters, as well as digits */
		password?: string;

		/**User phone number in international format */
		phone?: string;

		/**User status */
		userStatus?: number;
	}

	export class PetClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Add a new pet to the store
		 * Add new pet to the store inventory.
		 * Post pet
		 * @param {Pet} requestBody Pet object that needs to be added to the store
		 * @return {void} 
		 */
		AddPet(requestBody: Pet): Promise<> {
			return Axios.post(this.baseUri + 'pet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data as );
		}

		/**
		 * Update an existing pet
		 * Put pet
		 * @param {Pet} requestBody Pet object that needs to be added to the store
		 * @return {void} 
		 */
		UpdatePet(requestBody: Pet): Promise<> {
			return Axios.put(this.baseUri + 'pet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data as );
		}

		/**
		 * Find pet by ID
		 * Returns a single pet
		 * Get pet/{petId}
		 * @param {number} petId ID of pet to return
		 * @return {Pet} successful operation
		 */
		GetPetById(petId: number): Promise<Pet> {
			return Axios.get(this.baseUri + 'pet/' + petId).then(d => d.data as Pet);
		}

		/**
		 * Deletes a pet
		 * Delete pet/{petId}
		 * @param {number} petId Pet id to delete
		 * @return {void} 
		 */
		DeletePet(petId: number): Promise<> {
			return Axios.delete(this.baseUri + 'pet/' + petId).then(d => d.data as );
		}

		/**
		 * Finds Pets by status
		 * Multiple status values can be provided with comma separated strings
		 * Get pet/findByStatus
		 * @param {string} status Status values that need to be considered for filter
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByStatus(status: string): Promise<Array<Pet>> {
			return Axios.get(this.baseUri + 'pet/findByStatus?status=' + encodeURIComponent(status)).then(d => d.data as Array<Pet>);
		}

		/**
		 * Finds Pets by tags
		 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
		 * Get pet/findByTags
		 * @param {string} tags Tags to filter by
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByTags(tags: string): Promise<Array<Pet>> {
			return Axios.get(this.baseUri + 'pet/findByTags?tags=' + encodeURIComponent(tags)).then(d => d.data as Array<Pet>);
		}

		/**
		 * Returns pet inventories by status
		 * Returns a map of status codes to quantities
		 * Get store/inventory
		 * @return {string} successful operation
		 */
		GetInventory(): Promise<string> {
			return Axios.get(this.baseUri + 'store/inventory', { responseType: 'text' }).then(d => d.data as string);
		}

		/**
		 * Place an order for a pet
		 * Post store/order
		 * @param {Order} requestBody order placed for purchasing the pet
		 * @return {Order} successful operation
		 */
		PlaceOrder(requestBody: Order): Promise<Order> {
			return Axios.post(this.baseUri + 'store/order', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data as Order);
		}

		/**
		 * Find purchase order by ID
		 * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
		 * Get store/order/{orderId}
		 * @param {number} orderId ID of pet that needs to be fetched
		 * @return {Order} successful operation
		 */
		GetOrderById(orderId: number): Promise<Order> {
			return Axios.get(this.baseUri + 'store/order/' + orderId).then(d => d.data as Order);
		}

		/**
		 * Delete purchase order by ID
		 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
		 * Delete store/order/{orderId}
		 * @param {string} orderId ID of the order that needs to be deleted
		 * @return {void} 
		 */
		DeleteOrder(orderId: string): Promise<> {
			return Axios.delete(this.baseUri + 'store/order/' + encodeURIComponent(orderId)).then(d => d.data as );
		}

		/**
		 * Create user
		 * This can only be done by the logged in user.
		 * Post user
		 * @param {User} requestBody Created user object
		 * @return {void} 
		 */
		CreateUser(requestBody: User): Promise<> {
			return Axios.post(this.baseUri + 'user', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data as );
		}

		/**
		 * Get user by user name
		 * Get user/{username}
		 * @param {string} username The name that needs to be fetched. Use user1 for testing. 
		 * @return {User} successful operation
		 */
		GetUserByName(username: string): Promise<User> {
			return Axios.get(this.baseUri + 'user/' + encodeURIComponent(username)).then(d => d.data as User);
		}

		/**
		 * Updated user
		 * This can only be done by the logged in user.
		 * Put user/{username}
		 * @param {string} username name that need to be deleted
		 * @param {User} requestBody Updated user object
		 * @return {void} 
		 */
		UpdateUser(username: string, requestBody: User): Promise<> {
			return Axios.put(this.baseUri + 'user/' + encodeURIComponent(username), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data as );
		}

		/**
		 * Delete user
		 * This can only be done by the logged in user.
		 * Delete user/{username}
		 * @param {string} username The name that needs to be deleted
		 * @return {void} 
		 */
		DeleteUser(username: string): Promise<> {
			return Axios.delete(this.baseUri + 'user/' + encodeURIComponent(username)).then(d => d.data as );
		}

		/**
		 * Creates list of users with given input array
		 * Post user/createWithArray
		 * @param {Array<User>} requestBody List of user object
		 * @return {void} 
		 */
		CreateUsersWithArrayInput(requestBody: Array<User>): Promise<> {
			return Axios.post(this.baseUri + 'user/createWithArray', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data as );
		}

		/**
		 * Creates list of users with given input array
		 * Post user/createWithList
		 * @param {Array<User>} requestBody List of user object
		 * @return {void} 
		 */
		CreateUsersWithListInput(requestBody: Array<User>): Promise<> {
			return Axios.post(this.baseUri + 'user/createWithList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } }).then(d => d.data as );
		}

		/**
		 * Logs user into the system
		 * Get user/login
		 * @param {string} username The user name for login
		 * @param {string} password The password for login in clear text
		 * @return {string} successful operation
		 */
		LoginUser(username: string, password: string): Promise<string> {
			return Axios.get(this.baseUri + 'user/login?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password), { responseType: 'text' }).then(d => d.data as string);
		}

		/**
		 * Logs out current logged in user session
		 * Get user/logout
		 * @return {void} 
		 */
		LogoutUser(): Promise<> {
			return Axios.get(this.baseUri + 'user/logout').then(d => d.data as );
		}
	}

}

