//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace My.Pet.Client
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Net.Http;
	using Newtonsoft.Json;
	using Fonlow.Net.Http;
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public class ApiResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="code")]
		public System.Nullable<System.Int32> Code { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// A representation of a cat
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public class Cat : Pet
	{
		
		/// <summary>
		/// The measured skill for hunting
		/// </summary>
		[System.ComponentModel.DefaultValue(CatHuntingSkill.lazy)]
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="huntingSkill")]
		public CatHuntingSkill HuntingSkill { get; set; } = CatHuntingSkill.lazy;
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public enum CatHuntingSkill
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		clueless = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		lazy = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		adventurous = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		aggressive = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public class Category
	{
		
		/// <summary>
		/// Category ID
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int64> Id { get; set; }
		
		/// <summary>
		/// Category name
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength=1)]
		public string Name { get; set; }
		
		/// <summary>
		/// Test Sub Category
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sub")]
		public CategorySub Sub { get; set; }
	}
	
	public class CategorySub
	{
		
		/// <summary>
		/// Dumb Property
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="prop1")]
		public string Prop1 { get; set; }
	}
	
	/// <summary>
	/// A representation of a dog
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public class Dog : Pet
	{
		
		/// <summary>
		/// The size of the pack the dog is from
		/// Minimum: 1
		/// </summary>
		[System.ComponentModel.DefaultValue(1)]
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="packSize")]
		[System.ComponentModel.DataAnnotations.Range(1, System.Int32.MaxValue)]
		public int PackSize { get; set; } = 1;
	}
	
	/// <summary>
	/// A representation of a honey bee
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public class HoneyBee : Pet
	{
		
		/// <summary>
		/// Average amount of honey produced per day in ounces
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="honeyPerDay")]
		public float HoneyPerDay { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public class Order
	{
		
		/// <summary>
		/// Order ID
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int64> Id { get; set; }
		
		/// <summary>
		/// Pet ID
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="petId")]
		public System.Nullable<System.Int64> PetId { get; set; }
		
		/// <summary>
		/// Minimum: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="quantity")]
		[System.ComponentModel.DataAnnotations.Range(1, System.Int32.MaxValue)]
		public System.Nullable<System.Int32> Quantity { get; set; }
		
		/// <summary>
		/// Estimated ship date
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="shipDate")]
		public System.Nullable<System.DateTimeOffset> ShipDate { get; set; }
		
		/// <summary>
		/// Order Status
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<OrderStatus> Status { get; set; }
		
		/// <summary>
		/// Indicates whenever order was completed or not
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="complete")]
		public System.Nullable<System.Boolean> Complete { get; set; }
		
		/// <summary>
		/// Unique Request Id
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="requestId")]
		public string RequestId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public enum OrderStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		placed = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		approved = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		delivered = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public class Pet
	{
		
		/// <summary>
		/// Pet ID
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int64> Id { get; set; }
		
		/// <summary>
		/// Categories this pet belongs to
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="category")]
		public Category Category { get; set; }
		
		/// <summary>
		/// The name given to a pet
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The list of URL to a cute photos featuring pet
		/// Maximum items: 20
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="photoUrls")]
		[System.ComponentModel.DataAnnotations.MaxLength(20)]
		public string[] PhotoUrls { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="friend")]
		public Pet Friend { get; set; }
		
		/// <summary>
		/// Tags attached to the pet
		/// Minimum items: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public Tag[] Tags { get; set; }
		
		/// <summary>
		/// Pet status in the store
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<PetStatus> Status { get; set; }
		
		/// <summary>
		/// Type of a pet
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="petType")]
		public string PetType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public class Tag
	{
		
		/// <summary>
		/// Tag ID
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int64> Id { get; set; }
		
		/// <summary>
		/// Tag name
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength=1)]
		public string Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public enum PetStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		available = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		pending = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		sold = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://pet.domain/2020/03")]
	public class User
	{
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int64> Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="pet")]
		public Pet Pet { get; set; }
		
		/// <summary>
		/// User supplied username
		/// Min length: 4
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="username")]
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength=4)]
		public string Username { get; set; }
		
		/// <summary>
		/// User first name
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="firstName")]
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength=1)]
		public string FirstName { get; set; }
		
		/// <summary>
		/// User last name
		/// Min length: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastName")]
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength=1)]
		public string LastName { get; set; }
		
		/// <summary>
		/// User email address
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// User password, MUST contain a mix of upper and lower case letters, as well as digits
		/// Min length: 8
		/// Pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="password")]
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength=8)]
		public string Password { get; set; }
		
		/// <summary>
		/// User phone number in international format
		/// Pattern: /^\+(?:[0-9]-?){6,14}[0-9]$/
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="phone")]
		public string Phone { get; set; }
		
		/// <summary>
		/// User status
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userStatus")]
		public System.Nullable<System.Int32> UserStatus { get; set; }
	}
	
	public partial class PetClient
	{
		
		private System.Net.Http.HttpClient client;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public PetClient(System.Net.Http.HttpClient client, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (client == null)
				throw new ArgumentNullException("Null HttpClient.", "client");

			if (client.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "client");

			this.client = client;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Add a new pet to the store
		/// Add new pet to the store inventory.
		/// AddPet pet
		/// </summary>
		/// <param name="requestBody">Pet object that needs to be added to the store</param>
		public async Task AddPetAsync(Pet requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "pet";
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
			}
		}
		
		/// <summary>
		/// Update an existing pet
		/// UpdatePet pet
		/// </summary>
		/// <param name="requestBody">Pet object that needs to be added to the store</param>
		public async Task UpdatePetAsync(Pet requestBody, System.Threading.CancellationToken cancellationToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "pet";
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Put, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage, cancellationToken);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
			}
		}
		
		/// <summary>
		/// Find pet by ID
		/// Returns a single pet
		/// GetPetById pet/{petId}
		/// </summary>
		/// <param name="petId">ID of pet to return</param>
		/// <returns>successful operation</returns>
		public async Task<Pet> GetPetByIdAsync(long petId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "pet/"+petId;
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<Pet>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Deletes a pet
		/// DeletePet pet/{petId}
		/// </summary>
		/// <param name="petId">Pet id to delete</param>
		public async Task DeletePetAsync(long petId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "pet/"+petId;
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Delete, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Finds Pets by status
		/// Multiple status values can be provided with comma separated strings
		/// FindPetsByStatus pet/findByStatus
		/// </summary>
		/// <param name="status">Status values that need to be considered for filter</param>
		/// <returns>successful operation</returns>
		public async Task<Pet[]> FindPetsByStatusAsync(PetStatus[] status, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "pet/findByStatus?"+String.Join("&", status.Select(z => $"status={z}"));
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<Pet[]>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Finds Pets by tags
		/// Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
		/// FindPetsByTags pet/findByTags
		/// </summary>
		/// <param name="tags">Tags to filter by</param>
		/// <returns>successful operation</returns>
		public async Task<Pet[]> FindPetsByTagsAsync(string[] tags, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "pet/findByTags?"+String.Join("&", tags.Select(z => $"tags={Uri.EscapeDataString(z.ToString())}"));
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<Pet[]>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Returns pet inventories by status
		/// Returns a map of status codes to quantities
		/// GetInventory store/inventory
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task<System.Collections.Generic.Dictionary<string, int>> GetInventoryAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "store/inventory";
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<System.Collections.Generic.Dictionary<string, int>>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Place an order for a pet
		/// PlaceOrder store/order
		/// </summary>
		/// <param name="requestBody">order placed for purchasing the pet</param>
		/// <returns>successful operation</returns>
		public async Task<Order> PlaceOrderAsync(Order requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "store/order";
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<Order>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
			}
		}
		
		/// <summary>
		/// Find purchase order by ID
		/// For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
		/// GetOrderById store/order/{orderId}
		/// </summary>
		/// <param name="orderId">ID of pet that needs to be fetched</param>
		/// <returns>successful operation</returns>
		public async Task<Order> GetOrderByIdAsync(long orderId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "store/order/"+orderId;
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<Order>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Delete purchase order by ID
		/// For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
		/// DeleteOrder store/order/{orderId}
		/// </summary>
		/// <param name="orderId">ID of the order that needs to be deleted</param>
		public async Task DeleteOrderAsync(string orderId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "store/order/"+ (orderId==null? "" : Uri.EscapeDataString(orderId));
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Delete, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Create user
		/// This can only be done by the logged in user.
		/// CreateUser user
		/// </summary>
		/// <param name="requestBody">Created user object</param>
		public async Task CreateUserAsync(User requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "user";
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
			}
		}
		
		/// <summary>
		/// Get user by user name
		/// GetUserByName user/{username}
		/// </summary>
		/// <param name="username">The name that needs to be fetched. Use user1 for testing. </param>
		/// <returns>successful operation</returns>
		public async Task<User> GetUserByNameAsync(string username, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "user/"+ (username==null? "" : Uri.EscapeDataString(username));
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<User>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Updated user
		/// This can only be done by the logged in user.
		/// UpdateUser user/{username}
		/// </summary>
		/// <param name="username">name that need to be deleted</param>
		/// <param name="requestBody">Updated user object</param>
		public async Task UpdateUserAsync(string username, User requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "user/"+ (username==null? "" : Uri.EscapeDataString(username));
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Put, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
			}
		}
		
		/// <summary>
		/// Delete user
		/// This can only be done by the logged in user.
		/// DeleteUser user/{username}
		/// </summary>
		/// <param name="username">The name that needs to be deleted</param>
		public async Task DeleteUserAsync(string username, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "user/"+ (username==null? "" : Uri.EscapeDataString(username));
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Delete, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Creates list of users with given input array
		/// CreateUsersWithArrayInput user/createWithArray
		/// </summary>
		/// <param name="requestBody">List of user object</param>
		public async Task CreateUsersWithArrayInputAsync(User[] requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "user/createWithArray";
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
			}
		}
		
		/// <summary>
		/// Creates list of users with given input array
		/// CreateUsersWithListInput user/createWithList
		/// </summary>
		/// <param name="requestBody">List of user object</param>
		public async Task CreateUsersWithListInputAsync(User[] requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "user/createWithList";
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri))
			{
			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
			}
		}
		
		/// <summary>
		/// Logs user into the system
		/// LoginUser user/login
		/// </summary>
		/// <param name="username">The user name for login</param>
		/// <param name="password">The password for login in clear text</param>
		/// <returns>successful operation</returns>
		public async Task<string> LoginUserAsync(string username, string password, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "user/login?username=" + (username==null? "" : Uri.EscapeDataString(username))+"&password=" + (password==null? "" : Uri.EscapeDataString(password));
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
				return jsonReader.ReadAsString();
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
		
		/// <summary>
		/// Logs out current logged in user session
		/// LogoutUser user/logout
		/// </summary>
		public async Task LogoutUserAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "user/logout";
			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, requestUri))
			{
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await client.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
			}
		}
	}
}

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}
