﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Concurrent;
using System.Net.Http;

namespace MyNamespace
{
	[ApiController]
	//[Route("[controller]")] do not use this, since the proeotypes of API functions are generated
	public partial class PetController : ControllerBase
	{
		public PetController()
		{
		}

		/// <summary>Add a new pet to the store</summary>
		/// <param name="accept_Language">The language you prefer for messages. Supported values are en-AU, en-CA, en-GB, en-US</param>
		/// <param name="cookieParam">Some cookie</param>
		[HttpPost, Route("pet")]
		public async Task<IActionResult> AddPet([FromBody] Pet body)//, [FromHeader(Name = "Accept-Language")] string accept_Language, long cookieParam)
		{
			long key = PetData.Instance.GetCurrentMax();
			body.Id = key;
			PetData.Instance.Dic.TryAdd(key, body);
			Response.Headers.Add("transaction-id", Request.Headers["transaction-id"]);
			return Ok(body.Name + " " + Request.Headers["transaction-id"]);
		}

		/// <summary>Update an existing pet</summary>
		/// <param name="accept_Language">The language you prefer for messages. Supported values are en-AU, en-CA, en-GB, en-US</param>
		/// <param name="cookieParam">Some cookie</param>
		[HttpPut, Route("pet")]
		public async Task<IActionResult> UpdatePet([FromBody] object body, [FromHeader(Name = "Accept-Language")] string accept_Language, long cookieParam)
		{
			throw new NotImplementedException();
		}

		/// <summary>Find pet by ID</summary>
		/// <param name="petId">ID of pet to return</param>
		/// <returns>successful operation</returns>
		[HttpGet, Route("pet/{petId}")]
		public async Task<ActionResult<Pet>> GetPetById(long petId)
		{
			if (PetData.Instance.Dic.TryGetValue(petId, out Pet p))
			{
				return p;
			}
			else
			{
				return NotFound();
			}
		}

		/// <summary>Updates a pet in the store with form data</summary>
		/// <param name="petId">ID of pet that needs to be updated</param>
		[HttpPost, Route("pet/{petId}")]
		public async Task<IActionResult> UpdatePetWithForm(long petId, Microsoft.AspNetCore.Http.IFormFile body)
		{
			throw new NotImplementedException();
		}

		/// <summary>Deletes a pet</summary>
		/// <param name="petId">Pet id to delete</param>
		[HttpDelete, Route("pet/{petId}")]
		public async Task<IActionResult> DeletePet(long petId)
		{
			if (PetData.Instance.Dic.TryGetValue(petId, out _)) //not to TryRemove for testing
			{
				return Ok();
			}
			else
			{
				return NotFound("NoSuchPet");
			}
		}

		/// <summary>uploads an image</summary>
		/// <param name="petId">ID of pet to update</param>
		/// <returns>successful operation</returns>
		[HttpPost, Route("pet/{petId}/uploadImage")]
		public async Task<ActionResult<ApiResponse>> UploadFile(long petId, Microsoft.AspNetCore.Http.IFormFile body)
		{
			throw new NotImplementedException();
		}

		/// <summary>Finds Pets by status</summary>
		/// <param name="status">Status values that need to be considered for filter</param>
		/// <returns>successful operation</returns>
		[HttpGet, Route("pet/findByStatus")]
		public async Task<ActionResult<System.Collections.Generic.ICollection<Pet>>> FindPetsByStatus([FromQuery] System.Collections.Generic.IEnumerable<PetStatus> status)
		{
			return PetData.Instance.Dic.Values.Where(d => status.Contains(d.Status)).ToArray();
		}

		/// <summary>Finds Pets by tags</summary>
		/// <param name="tags">Tags to filter by</param>
		/// <returns>successful operation</returns>
		[System.Obsolete]
		[HttpGet, Route("pet/findByTags")]
		public async Task<ActionResult<System.Collections.Generic.ICollection<Pet>>> FindPetsByTags([FromQuery] System.Collections.Generic.IEnumerable<string> tags)
		{
			return PetData.Instance.Dic.Values.Where(d => tags.Intersect(d.Tags.Select(k=>k.Name)).Count()>0).ToArray();
		}

		/// <summary>Returns pet inventories by status</summary>
		/// <returns>successful operation</returns>
		[HttpGet, Route("store/inventory")]
		public async Task<ActionResult<System.Collections.Generic.IDictionary<string, int>>> GetInventory()
		{
			throw new NotImplementedException();
		}

		/// <summary>Place an order for a pet</summary>
		/// <param name="body">order placed for purchasing the pet</param>
		/// <returns>successful operation</returns>
		[HttpPost, Route("store/order")]
		public async Task<ActionResult<Order>> PlaceOrder([FromBody] Order body)
		{
			throw new NotImplementedException();
		}

		/// <summary>Find purchase order by ID</summary>
		/// <param name="orderId">ID of pet that needs to be fetched</param>
		/// <returns>successful operation</returns>
		[HttpGet, Route("store/order/{orderId}")]
		public async Task<ActionResult<Order>> GetOrderById(long orderId)
		{
			throw new NotImplementedException();
		}

		/// <summary>Delete purchase order by ID</summary>
		/// <param name="orderId">ID of the order that needs to be deleted</param>
		[HttpDelete, Route("store/order/{orderId}")]
		public async Task<IActionResult> DeleteOrder(string orderId)
		{
			throw new NotImplementedException();
		}

		/// <summary>Create user</summary>
		/// <param name="body">Created user object</param>
		/// <returns>successful operation</returns>
		[HttpPost, Route("user")]
		public async Task<IActionResult> CreateUser([FromBody] User body)
		{
			throw new NotImplementedException();
		}

		/// <summary>Get user by user name</summary>
		/// <param name="username">The name that needs to be fetched. Use user1 for testing.</param>
		/// <returns>successful operation</returns>
		[HttpGet, Route("user/{username}")]
		public async Task<ActionResult<User>> GetUserByName(string username)
		{
			throw new NotImplementedException();
		}

		/// <summary>Updated user</summary>
		/// <param name="username">name that need to be deleted</param>
		/// <param name="body">Updated user object</param>
		[HttpPut, Route("user/{username}")]
		public async Task<IActionResult> UpdateUser(string username, [FromBody] User body)
		{
			throw new NotImplementedException();
		}

		/// <summary>Delete user</summary>
		/// <param name="username">The name that needs to be deleted</param>
		[HttpDelete, Route("user/{username}")]
		public async Task<IActionResult> DeleteUser(string username)
		{
			throw new NotImplementedException();
		}

		/// <summary>Creates list of users with given input array</summary>
		/// <returns>successful operation</returns>
		[HttpPost, Route("user/createWithArray")]
		public async Task<IActionResult> CreateUsersWithArrayInput([FromBody] object body)
		{
			throw new NotImplementedException();
		}

		/// <summary>Creates list of users with given input array</summary>
		/// <returns>successful operation</returns>
		[HttpPost, Route("user/createWithList")]
		public async Task<IActionResult> CreateUsersWithListInput([FromBody] object body)
		{
			throw new NotImplementedException();
		}

		/// <summary>Logs user into the system</summary>
		/// <param name="username">The user name for login</param>
		/// <param name="password">The password for login in clear text</param>
		/// <returns>successful operation</returns>
		[HttpGet, Route("user/login")]
		public async Task<ActionResult<string>> LoginUser([FromQuery] string username, [FromQuery] string password)
		{
			throw new NotImplementedException();
		}

		/// <summary>Logs out current logged in user session</summary>
		/// <returns>successful operation</returns>
		[HttpGet, Route("user/logout")]
		public async Task<IActionResult> LogoutUser()
		{
			throw new NotImplementedException();
		}

	}

	[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
	public partial class ApiResponse
	{
		[Newtonsoft.Json.JsonProperty("code", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
		public int Code { get; set; }

		[Newtonsoft.Json.JsonProperty("type", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
		public string Type { get; set; }

		[Newtonsoft.Json.JsonProperty("message", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
		public string Message { get; set; }

		private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

		[Newtonsoft.Json.JsonExtensionData]
		public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
		{
			get { return _additionalProperties; }
			set { _additionalProperties = value; }
		}


	}



	[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
	[System.AttributeUsage(System.AttributeTargets.Class, AllowMultiple = true)]
	internal class JsonInheritanceAttribute : System.Attribute
	{
		public JsonInheritanceAttribute(string key, System.Type type)
		{
			Key = key;
			Type = type;
		}

		public string Key { get; }

		public System.Type Type { get; }
	}

	[System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
	internal class JsonInheritanceConverter : Newtonsoft.Json.JsonConverter
	{
		internal static readonly string DefaultDiscriminatorName = "discriminator";

		private readonly string _discriminator;

		[System.ThreadStatic]
		private static bool _isReading;

		[System.ThreadStatic]
		private static bool _isWriting;

		public JsonInheritanceConverter()
		{
			_discriminator = DefaultDiscriminatorName;
		}

		public JsonInheritanceConverter(string discriminator)
		{
			_discriminator = discriminator;
		}

		public override void WriteJson(Newtonsoft.Json.JsonWriter writer, object value, Newtonsoft.Json.JsonSerializer serializer)
		{
			try
			{
				_isWriting = true;

				var jObject = Newtonsoft.Json.Linq.JObject.FromObject(value, serializer);
				jObject.AddFirst(new Newtonsoft.Json.Linq.JProperty(_discriminator, GetSubtypeDiscriminator(value.GetType())));
				writer.WriteToken(jObject.CreateReader());
			}
			finally
			{
				_isWriting = false;
			}
		}

		public override bool CanWrite
		{
			get
			{
				if (_isWriting)
				{
					_isWriting = false;
					return false;
				}
				return true;
			}
		}

		public override bool CanRead
		{
			get
			{
				if (_isReading)
				{
					_isReading = false;
					return false;
				}
				return true;
			}
		}

		public override bool CanConvert(System.Type objectType)
		{
			return true;
		}

		public override object ReadJson(Newtonsoft.Json.JsonReader reader, System.Type objectType, object existingValue, Newtonsoft.Json.JsonSerializer serializer)
		{
			var jObject = serializer.Deserialize<Newtonsoft.Json.Linq.JObject>(reader);
			if (jObject == null)
				return null;

			var discriminator = Newtonsoft.Json.Linq.Extensions.Value<string>(jObject.GetValue(_discriminator));
			var subtype = GetObjectSubtype(objectType, discriminator);

			var objectContract = serializer.ContractResolver.ResolveContract(subtype) as Newtonsoft.Json.Serialization.JsonObjectContract;
			if (objectContract == null || System.Linq.Enumerable.All(objectContract.Properties, p => p.PropertyName != _discriminator))
			{
				jObject.Remove(_discriminator);
			}

			try
			{
				_isReading = true;
				return serializer.Deserialize(jObject.CreateReader(), subtype);
			}
			finally
			{
				_isReading = false;
			}
		}

		private System.Type GetObjectSubtype(System.Type objectType, string discriminator)
		{
			foreach (var attribute in System.Reflection.CustomAttributeExtensions.GetCustomAttributes<JsonInheritanceAttribute>(System.Reflection.IntrospectionExtensions.GetTypeInfo(objectType), true))
			{
				if (attribute.Key == discriminator)
					return attribute.Type;
			}

			return objectType;
		}

		private string GetSubtypeDiscriminator(System.Type objectType)
		{
			foreach (var attribute in System.Reflection.CustomAttributeExtensions.GetCustomAttributes<JsonInheritanceAttribute>(System.Reflection.IntrospectionExtensions.GetTypeInfo(objectType), true))
			{
				if (attribute.Type == objectType)
					return attribute.Key;
			}

			return objectType.Name;
		}
	}

	/// <summary>
	/// A representation of a cat
	/// </summary>
	public class Cat : Pet
	{

		/// <summary>
		/// The measured skill for hunting
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		public CatHuntingSkill HuntingSkill { get; set; } = CatHuntingSkill.lazy;
	}

	public enum CatHuntingSkill
	{

		clueless = 0,

		lazy = 1,

		adventurous = 2,

		aggressive = 3,
	}

	public class Category
	{

		/// <summary>
		/// Category ID
		/// </summary>
		public System.Nullable<System.Int64> Id { get; set; }

		/// <summary>
		/// Category name
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 1)]
		public string Name { get; set; }

		/// <summary>
		/// Test Sub Category
		/// </summary>
		public string Sub { get; set; }
	}

	/// <summary>
	/// A representation of a dog
	/// </summary>
	public class Dog : Pet
	{

		/// <summary>
		/// The size of the pack the dog is from
		/// Minimum: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.ComponentModel.DataAnnotations.Range(1, System.Int32.MaxValue)]
		public int PackSize { get; set; } = 1;
	}

	/// <summary>
	/// A representation of a honey bee
	/// </summary>
	public class HoneyBee : Pet
	{

		/// <summary>
		/// Average amount of honey produced per day in ounces
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		public float HoneyPerDay { get; set; }
	}

	public class Order
	{

		/// <summary>
		/// Order ID
		/// </summary>
		public System.Nullable<System.Int64> Id { get; set; }

		/// <summary>
		/// Pet ID
		/// </summary>
		public System.Nullable<System.Int64> PetId { get; set; }

		/// <summary>
		/// Minimum: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Range(1, System.Int32.MaxValue)]
		public System.Nullable<System.Int32> Quantity { get; set; }

		/// <summary>
		/// Estimated ship date
		/// </summary>
		public System.Nullable<System.DateTimeOffset> ShipDate { get; set; }

		/// <summary>
		/// Order Status
		/// </summary>
		public OrderStatus Status { get; set; }

		/// <summary>
		/// Indicates whenever order was completed or not
		/// </summary>
		public System.Nullable<System.Boolean> Complete { get; set; }

		/// <summary>
		/// Unique Request Id
		/// </summary>
		public string RequestId { get; set; }
	}

	public enum OrderStatus
	{

		placed = 0,

		approved = 1,

		delivered = 2,
	}

	public class Pet
	{

		/// <summary>
		/// Pet ID
		/// </summary>
		public System.Nullable<System.Int64> Id { get; set; }

		/// <summary>
		/// Categories this pet belongs to
		/// </summary>
		public string Category { get; set; }

		/// <summary>
		/// The name given to a pet
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		public string Name { get; set; }

		/// <summary>
		/// The list of URL to a cute photos featuring pet
		/// Maximum items: 20
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.ComponentModel.DataAnnotations.MaxLength(20)]
		public string[] PhotoUrls { get; set; }

		public string Friend { get; set; }

		/// <summary>
		/// Tags attached to the pet
		/// Minimum items: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public Tag[] Tags { get; set; }

		/// <summary>
		/// Pet status in the store
		/// </summary>
		public PetStatus Status { get; set; }

		/// <summary>
		/// Type of a pet
		/// </summary>
		public string PetType { get; set; }
	}

	public enum PetStatus
	{

		available = 0,

		pending = 1,

		sold = 2,
	}

	public class Tag
	{

		/// <summary>
		/// Tag ID
		/// </summary>
		public System.Nullable<System.Int64> Id { get; set; }

		/// <summary>
		/// Tag name
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 1)]
		public string Name { get; set; }
	}

	public class User
	{

		public System.Nullable<System.Int64> Id { get; set; }

		public string Pet { get; set; }

		/// <summary>
		/// User supplied username
		/// Min length: 4
		/// </summary>
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 4)]
		public string Username { get; set; }

		/// <summary>
		/// User first name
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 1)]
		public string FirstName { get; set; }

		/// <summary>
		/// User last name
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 1)]
		public string LastName { get; set; }

		/// <summary>
		/// User email address
		/// </summary>
		public string Email { get; set; }

		/// <summary>
		/// User password, MUST contain a mix of upper and lower case letters, as well as digits
		/// Min length: 8
		/// Pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
		/// </summary>
		[System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 8)]
		public string Password { get; set; }

		/// <summary>
		/// User phone number in international format
		/// Pattern: /^\+(?:[0-9]-?){6,14}[0-9]$/
		/// </summary>
		public string Phone { get; set; }

		/// <summary>
		/// User status
		/// </summary>
		public System.Nullable<System.Int32> UserStatus { get; set; }
	}

	[System.CodeDom.Compiler.GeneratedCode("NSwag", "13.3.0.0 (NJsonSchema v10.1.11.0 (Newtonsoft.Json v12.0.0.0))")]
	public partial class FileParameter
	{
		public FileParameter(System.IO.Stream data)
			: this(data, null)
		{
		}

		public FileParameter(System.IO.Stream data, string fileName)
			: this(data, fileName, null)
		{
		}

		public FileParameter(System.IO.Stream data, string fileName, string contentType)
		{
			Data = data;
			FileName = fileName;
			ContentType = contentType;
		}

		public System.IO.Stream Data { get; private set; }

		public string FileName { get; private set; }

		public string ContentType { get; private set; }
	}

	public sealed class PetData
	{
		private static readonly Lazy<PetData> lazy =
			new Lazy<PetData>(() => new PetData());

		public static PetData Instance { get { return lazy.Value; } }

		private PetData()
		{
			Dic = new ConcurrentDictionary<long, Pet>(new KeyValuePair<long, Pet>[] {
				new KeyValuePair<long, Pet>(11, new Pet {Id=11, Name="Nice" }),
				new KeyValuePair<long, Pet>(12, new Pet {Id=12, Name="Narco", Status= PetStatus.sold }),
				new KeyValuePair<long, Pet>(13, new Pet {Id=13, Name="Bombasto" }),
				new KeyValuePair<long, Pet>(14, new Pet {Id=14, Name="Celeritas" }),
				new KeyValuePair<long, Pet>(15, new Pet {Id=15, Name="Magneta", Status= PetStatus.sold }),
				new KeyValuePair<long, Pet>(16, new Pet {Id=16, Name="RubberMan" }),
				new KeyValuePair<long, Pet>(17, new Pet {Id=17, Name="Dynama" }),
				new KeyValuePair<long, Pet>(18, new Pet {Id=18, Name="IQ", Status= PetStatus.sold}),
				new KeyValuePair<long, Pet>(19, new Pet {Id=19, Name="Magma" }),
				new KeyValuePair<long, Pet>(20, new Pet {Id=29, Name="Tornado" }),

				});
		}

		public ConcurrentDictionary<long, Pet> Dic { get; private set; }

		public long GetCurrentMax()
		{
			return Dic.Keys.Max();
		}
	}
}

