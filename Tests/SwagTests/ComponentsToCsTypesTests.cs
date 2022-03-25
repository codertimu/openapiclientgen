using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System.IO;
using Xunit;

namespace SwagTests
{
	public class ComponentsToCsTypesTests
	{
		static OpenApiDocument ReadJson(string filePath)
		{
			using FileStream stream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
			return new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
		}

		static string TranslateJsonToCode(string filePath)
		{
			return TranslateJsonToCodeWithSettings(filePath, new Settings()
			{
				ClientNamespace = "MyNS",
				DataAnnotationsToComments = true
			});
		}

		static string TranslateJsonToCodeWithSettings(string filePath, Settings settings)
		{
			OpenApiDocument doc = ReadJson(filePath);
			System.CodeDom.CodeCompileUnit codeCompileUnit = new System.CodeDom.CodeCompileUnit();
			System.CodeDom.CodeNamespace clientNamespace = new System.CodeDom.CodeNamespace(settings.ClientNamespace);
			codeCompileUnit.Namespaces.Add(clientNamespace);//namespace added to Dom

			ComponentsToCsTypes gen = new ComponentsToCsTypes(settings, codeCompileUnit, clientNamespace);
			gen.CreateCodeDom(doc.Components);
			return gen.WriteToText();
		}

		[Fact]
		public void TestSimplePet()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Pet
	{
		
		/// <summary>
		/// The name given to a pet
		/// </summary>
		public string Name { get; set; }//;
		
		/// <summary>
		/// Type of a pet
		/// </summary>
		public string PetType { get; set; }//;
		
		public System.Nullable<System.DateOnly> BirthDate { get; set; }//;
	}
}
";
			string s = TranslateJsonToCode("SwagMock" + Path.DirectorySeparatorChar + "SimplePet.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestSimplePetWithInnerObjectShouldNotPrefixWithTypeNameByDefault()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Pet
	{
		
		public System.Nullable<System.Int64> Id { get; set; }//;
		
		public string Name { get; set; }//;
		
		public string Tag { get; set; }//;
		
		public Food Food { get; set; }//;
	}
	
	public class Food
	{
		
		public string Kind { get; set; }//;
		
		public string Note { get; set; }//;
	}
}
";
			string ssssssss = TranslateJsonToCodeWithSettings("SwagMock" + Path.DirectorySeparatorChar + "petStoreWithInnerObject.yaml", new Settings()
			{
				ClientNamespace = "MyNS",
				DataAnnotationsToComments = true,
				PrefixWithTypeName = false,
			});
			Assert.Equal(expected, ssssssss);
		}

		[Fact]
		public void TestSimplePetWithInnerObjectPrefixWithTypeName()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Pet
	{
		
		public System.Nullable<System.Int64> Id { get; set; }//;
		
		public string Name { get; set; }//;
		
		public string Tag { get; set; }//;
		
		public PetFood Food { get; set; }//;
	}
	
	public class PetFood
	{
		
		public string Kind { get; set; }//;
		
		public string Note { get; set; }//;
	}
}
";
			string ssssssss = TranslateJsonToCodeWithSettings("SwagMock" + Path.DirectorySeparatorChar + "petStoreWithInnerObject.yaml", new Settings
			{
				PrefixWithTypeName = true,
				ClientNamespace = "MyNS"
			});
			Assert.Equal(expected, ssssssss);
		}

		[Fact]
		public void TestSimplePetWithDataTypeDate()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Pet
	{
		
		/// <summary>
		/// The name given to a pet
		/// </summary>
		public string Name { get; set; }//;
		
		/// <summary>
		/// Type of a pet
		/// </summary>
		public string PetType { get; set; }//;
		
		[System.ComponentModel.DataAnnotations.DataTypeAttribute(System.ComponentModel.DataAnnotationsDataType.Date)]
		public System.Nullable<System.DateTimeOffset> BirthDate { get; set; }//;
	}
}
";
			string s = TranslateJsonToCodeWithSettings("SwagMock" + Path.DirectorySeparatorChar + "SimplePet.json", new Settings()
			{
				ClientNamespace = "MyNS",
				DateToDateOnly = false
			});
			Assert.Equal(expected, s);
		}


		[Fact]
		public void TestSimplePetCat()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Pet
	{
		
		/// <summary>
		/// The name given to a pet
		/// </summary>
		public string Name { get; set; }//;
		
		/// <summary>
		/// Type of a pet
		/// </summary>
		public string PetType { get; set; }//;
	}
	
	/// <summary>
	/// A representation of a cat
	/// </summary>
	public class Cat : Pet
	{
		
		/// <summary>
		/// The measured skill for hunting
		/// </summary>
		public string HuntingSkill { get; set; }//;
	}
}
";
			string s = TranslateJsonToCode("SwagMock\\SimplePetCat.json");
			Assert.Equal(expected, s);
		}


		[Fact]
		public void TestSimpleEnum()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	/// <summary>
	/// Phone types
	/// </summary>
	public enum PhoneType
	{
		
		Tel = 0,
		
		Mobile = 1,
		
		Skype = 2,
		
		Fax = 3,
	}
}
";
			string s = TranslateJsonToCode("SwagMock\\Enum.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestSimpleEnumPascalCase()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	/// <summary>
	/// Phone types
	/// </summary>
	public enum PhoneType
	{
		
		Tel = 0,
		
		Mobile = 1,
		
		Skype = 2,
		
		FaxModem = 3,
	}
}
";
			string s = TranslateJsonToCodeWithSettings("SwagMock" + Path.DirectorySeparatorChar + "EnumPascalCase.json", new Settings
			{
				UsePascalCase = true,
				ClientNamespace = "MyNS"
			});
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestSimpleIntEnum()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	/// <summary>
	/// Integer enum types
	/// </summary>
	public enum IntType
	{
		
		_1 = 1,
		
		_2 = 2,
		
		_3 = 3,
		
		_4 = 4,
	}
}
";
			string s = TranslateJsonToCode("SwagMock\\IntEnum.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestCasualEnum()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Pet
	{
		
		/// <summary>
		/// The name given to a pet
		/// </summary>
		public string Name { get; set; }//;
		
		/// <summary>
		/// Type of a pet
		/// </summary>
		public string PetType { get; set; }//;
		
		/// <summary>
		/// Pet status in the store
		/// </summary>
		public System.Nullable<PetStatus> Status { get; set; }//;
	}
	
	public enum PetStatus
	{
		
		available = 0,
		
		pending = 1,
		
		sold = 2,
	}
}
";
			string s = TranslateJsonToCode("SwagMock\\CasualEnum.json");
			Assert.Equal(expected, s);
		}


		[Fact]
		public void TestCasualEnumPascalCase()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Pet
	{
		
		/// <summary>
		/// The name given to a pet
		/// </summary>
		public string Name { get; set; }//;
		
		/// <summary>
		/// Type of a pet
		/// </summary>
		public string PetType { get; set; }//;
		
		/// <summary>
		/// Pet status in the store
		/// </summary>
		public System.Nullable<PetStatus> Status { get; set; }//;
	}
	
	public enum PetStatus
	{
		
		Available = 0,
		
		Pending = 1,
		
		Sold = 2,
	}
}
";
			string s = TranslateJsonToCodeWithSettings("SwagMock" + Path.DirectorySeparatorChar + "CasualEnum.json", new Settings
			{
				UsePascalCase = true,
				ClientNamespace = "MyNS"
			});
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestStringArray()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Pet
	{
		
		/// <summary>
		/// The name given to a pet
		/// </summary>
		public string Name { get; set; }//;
		
		/// <summary>
		/// Type of a pet
		/// </summary>
		public string PetType { get; set; }//;
		
		/// <summary>
		/// The list of URL to a cute photos featuring pet
		/// Maximum items: 20
		/// </summary>
		public string[] PhotoUrls { get; set; }//;
	}
}
";
			string s = TranslateJsonToCode("SwagMock\\StringArray.json");
			Assert.Equal(expected, s);
		}


		[Fact]
		public void TestCustomTypeArray()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Pet
	{
		
		/// <summary>
		/// The name given to a pet
		/// </summary>
		public string Name { get; set; }//;
		
		/// <summary>
		/// Type of a pet
		/// </summary>
		public string PetType { get; set; }//;
		
		/// <summary>
		/// Tags attached to the pet
		/// Minimum items: 1
		/// </summary>
		public Tag[] Tags { get; set; }//;
	}
	
	public class Tag
	{
		
		/// <summary>
		/// Tag ID
		/// </summary>
		public System.Nullable<System.Int64> Id { get; set; }//;
		
		/// <summary>
		/// Tag name
		/// Min length: 1
		/// </summary>
		public string Name { get; set; }//;
	}
}
";
			string s = TranslateJsonToCode("SwagMock\\CustomTypeArray.json");
			Assert.Equal(expected, s);
		}


		[Fact]
		public void TestSimpleOrder()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Order
	{
		
		/// <summary>
		/// Minimum: 1.0
		/// </summary>
		public System.Nullable<System.Int32> Quantity { get; set; }//;
		
		/// <summary>
		/// Estimated ship date
		/// </summary>
		public System.Nullable<System.DateTimeOffset> ShipDate { get; set; }//;
		
		/// <summary>
		/// Order Status
		/// </summary>
		public System.Nullable<OrderStatus> Status { get; set; }//;
		
		/// <summary>
		/// Indicates whenever order was completed or not
		/// </summary>
		public System.Nullable<System.Boolean> Complete { get; set; }//;
		
		/// <summary>
		/// Unique Request Id
		/// </summary>
		public string RequestId { get; set; }//;
	}
	
	public enum OrderStatus
	{
		
		placed = 0,
		
		approved = 1,
		
		delivered = 2,
	}
}
";
			string s = TranslateJsonToCode("SwagMock\\SimpleOrder.json");
			Assert.Equal(expected, s);
		}


		[Fact]
		public void TestTypeAlias()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Tag
	{
		
		/// <summary>
		/// Tag ID
		/// </summary>
		public System.Nullable<System.Int64> Id { get; set; }//;
		
		/// <summary>
		/// Tag name
		/// Min length: 1
		/// </summary>
		public string Name { get; set; }//;
	}
}
";
			string s = TranslateJsonToCode("SwagMock" + Path.DirectorySeparatorChar + "TypeAlias.json");
			Assert.Equal(expected, s);
		}

		[Fact]
		public void TestTypeAlias2()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Tag
	{
		
		/// <summary>
		/// Security Group ID
		/// </summary>
		public string SecurityGroupId { get; set; }//;
		
		public string[] Groups { get; set; }//;
	}
}
";
			string s = TranslateJsonToCode("SwagMock" + Path.DirectorySeparatorChar + "TypeAlias2.json");
			Assert.Equal(expected, s);
		}

		//[Fact]
		//public void TestArrayProperty()
		//{
		//    var doc = ReadJson("SwagMock" + Path.DirectorySeparatorChar + "StringArray.json");
		//    var property = doc.Components.Schemas["Pet"].Properties["photoUrls"];
		//    Assert.Equal("array", property.Type);
		//    Assert.Equal(20, property.MaxItems);
		//    Assert.NotNull(property.Items); //failed with 1.1.4 and 1.2.0 preview
		//}


		[Fact]
		public void TestRequired()
		{
			string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	
	
	public class Pet
	{
		
		/// <summary>
		/// The name given to a pet
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		public string Name { get; set; }//;
		
		/// <summary>
		/// Type of a pet
		/// </summary>
		public string PetType { get; set; }//;
	}
	
	/// <summary>
	/// A representation of a cat
	/// </summary>
	public class Cat : Pet
	{
		
		/// <summary>
		/// The measured skill for hunting
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		public string HuntingSkill { get; set; }//;
	}
}
";
			string s = TranslateJsonToCode("SwagMock\\Required.json");
			Assert.Equal(expected, s);
		}


		[Fact]
		public void TestGetNamespaces()
		{
			var ns = NameFunc.GetNamespaceOfClassName("myns.company.MyClass");
			Assert.Equal("myns.company", ns);
		}

		[Fact]
		public void TestGetNamespaces2()
		{
			var ns = NameFunc.GetNamespaceOfClassName("MyClass");
			Assert.Null(ns);
		}

		[Fact]
		public void TestFindNamespacesInClassNames()
		{
			var names = new string[] { "myns.company.MyClass", "another.company.MyClass", "myns.company.Someclass", "myns.company.gg", "myns.company.cc", "another.company.ggggg" };
			var nss = NameFunc.FindNamespacesInClassNames(names);
			Assert.Equal(2, nss.Length);
		}

		[Fact]
		public void TestFindNamespacesInClassNames2()
		{
			var names = new string[] { "c1", "c3", "c9" };
			var nss = NameFunc.FindNamespacesInClassNames(names);
			Assert.Empty(nss);
		}

	}
}