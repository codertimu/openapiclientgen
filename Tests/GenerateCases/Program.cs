﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace GenerateCases
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Read a text file in args1 to generate cases into file in args2.");
			if (args.Length < 2)
			{
				Console.WriteLine("Need a text file path and an output file path.");
				return;
			}

			var filePath = args[0];
			var outputPath = args[1];
			var fileNames = File.ReadAllLines(filePath);
			//baseName is used to path manipulation from the arg1 file contents
			var baseName = @"openapi-directory\APIs\";
			var testFileNames = fileNames.Select(fileName => fileName[(fileName.IndexOf(baseName, StringComparison.InvariantCultureIgnoreCase) + baseName.Length)..]).ToList();

			File.WriteAllLines(outputPath, testFileNames.Select(d =>
			{
				var funcNameSuffix = d.Replace('.', '_').Replace('\\', '_').Replace('-', '_');
				return $@"
		[Fact]
		public void Test_{funcNameSuffix}()
		{{
			helper.GenerateFromOpenApiAndBuild(@""..\..\..\..\openapi-directory\APIs\{d}"");
		}}

		[Fact]
		public void Test_{funcNameSuffix}_SystemTextJson()
		{{
			helper.GenerateFromOpenApiAndBuild(@""..\..\..\..\openapi-directory\APIs\{d}"", new Settings(){{UseSystemTextJson = true}});
		}}";
			}));
		}
	}
}
