namespace.module('agherriot.story-generator.testing', 
	function (exports, require) {
	"use strict";
	
	var objects = require('agherriot.story-generator.objects');
	var control = require('agherriot.story-generator.control');
	var utility = require('agherriot.story-generator.utilities');
	
	exports.extend({
		'Test': Test
	});
	
	/**
	 * test class
	 * @class Includes the test framework and the test cases for the whole 
	 * project.
	 */ 
	function Test() {
		
		var _testCount = 1;
		var _passedTests = 0;
		
		console.log("Testing Andrew's Story Generator");
		
		selfTest();
		testUtility();
		testControl();
		
		console.log("");
		console.log( _passedTests + " of " + (_testCount - 1) + 
			" tests passed.");
		
		// Prints outs a message as to whether the two values are equal
		//  Optionally can take a specified compare function
		// and an inner compare function to be passed to the compare function
		function assert( actual, expected, compareFunction, 
				innerCompareFunction ) {
			
			// default compare function
			if ( compareFunction === undefined ) {
				compareFunction = stringCompare;
			}
			
			//Compare and print results
			if ( compareFunction(actual, expected, innerCompareFunction)  ) {
				console.log("Test " + _testCount++ + ": Passed.");
				_passedTests++;
			} else {
				console.error("Test " + _testCount++ + ": Failed.");
				console.log("Expected: " + expected);
				console.log("Actual: " + actual);
				console.log("");
			}
		}
		
		//The string compare function
		//Also the default compare function for the assert function
		function stringCompare( a, b ) {
				return a === b;
		}

		function objectCompare(a, b) {
			return a.equals(b);
		}

		//Compares two arrays element by element
		// can also take an optional compare function for the elements
		function arrayCompare( a, b, compareFunction) {
			
			
			// default compare function
			if ( compareFunction === undefined ) {
				compareFunction = stringCompare;
			}
			
			if( a.length !== b.length ) {
				return false;
			}
			
			for ( var i in a ) {
				
				if ( !compareFunction( a[i], b[i] ) ) {
					return false;
				}
			}
			
			return true;
		}

		// true if a is an element of b
		// optional compare function.
		function containsCompare(a, b, compareFunction) {
			
			
			// default compare function
			if ( compareFunction === undefined ) {
				compareFunction = stringCompare;
			}
			
			var contains = false;
			for ( var i in b) {
				
				if( compareFunction( a, b[i] ) ) {
					contains = true;
					break;
				}
				
			}
			
			return contains;
			
		}

		function print( name ) {
			console.log("Test " + _testCount + ": " + name + ".");
		}

		function printHR() {
			
			console.log("----------------------------------------------------");
		}

		// Test the test.js file
		function selfTest() {
			
			
			printHR();
			console.log("Testing testing/test.js\n");
			console.log("");
			
			testArrayCompare();
			console.log("");
			testContainsCompare();
			
		}

		function testArrayCompare() {
			
			
			var a = [ 1, 2, 3];
			var b = [ 1, 2, 3];
			
			print("arrayCompare(): integer arrays are equal");	
			assert( arrayCompare(a, b), true );
			
			
			a = [1, 2];
			print("arrayCompare(): integer arrays are not equal");	
			assert( arrayCompare(a, b), false );
			
			a = ["test1", "test2"];
			b = ["test1", "test2"];
			print("arrayCompare(): string arrays are equal");	
			assert( arrayCompare(a, b), true );
			
			
			b = ["test1", "test2", "test3"];
			print("arrayCompare(): string arrays are not equal");	
			assert( arrayCompare(a, b), false );
			
			a = [new objects.SceneEntity(), new objects.SceneEntity()];
			b = a;
			print("arrayCompare(): object arrays are equal");	
			assert( arrayCompare(a, b, objectCompare), true );
			
		}

		function testContainsCompare() {
			
			
			var a = "test1";
			var b = ["test1", "test2", "test3"];
			
			print("containsCompare(): element in array");	
			assert( containsCompare(a, b), true );
			
			a = "test4";
			
			print("containsCompare(): element not in array");	
			assert( containsCompare(a, b), false );
			
		}


		// Test the utility.js package
		function testUtility() {
			
			printHR();
			console.log("Testing utility.js\n");
			console.log("");
			
			utilityReplaceWithRandomWords();
			utilityAdlib();
		}


		function utilityReplaceWithRandomWords() {
			
			print("replaceWithRandomWords(): Sentence word replacement");
			
			var sentence = "Testing a {0}, {1} sentence.";
			var usedWords = [];
			var wordList1 = [ "short" ];
			var wordList2 = [ "sample" ];
			
			sentence = utility.replaceWithRandomWords(sentence, wordList1, 0, 
				usedWords);
			sentence = utility.replaceWithRandomWords(sentence, wordList2, 1, 
				usedWords);	
			
			assert( sentence, "Testing a short, sample sentence." );
			
			print("replaceWithRandomWords(): Used word list updated");
			
			assert( usedWords, ["short", "sample"] , arrayCompare  );
			
		}

		function utilityAdlib() {
			
			
			print("adlib(): Sentence word replacement");
			
			var sentence = "Testing a {0}, {1} sentence.";
			var usedWords = ["small"];
			var wordList1 = [ "short", "small" ];
			var wordList2 = [ "sample" ];
			
			var array = [ [sentence, [wordList1, wordList2]] ];
			
			sentence = utility.adlib( array, usedWords);
			
			assert( sentence, "Testing a short, sample sentence.&nbsp;&nbsp;");
			
			print("adlib(): Used word list updated");
			assert( usedWords, ["small", "short", "sample"] , arrayCompare  );
			
		}


		// Test the control.js package
		function testControl() {
		
			printHR();
			console.log("Testing control.js\n");
			console.log("");
			
			controlSetChapter();
			controlPreviousChapter();
			controlNextChapter();
			
		}

		function controlSetChapter() {
			
			
			print("setChapter(): displays the right chapter");
			
			control.setChapter(2);
			assert( control.getCurrentChapter(), 2);
		}

		function controlPreviousChapter() {
			
			
			print("previousChapter(): move to previous chapter");
			control.previousChapter();
			assert( control.getCurrentChapter(), 1);
			
		}

		function controlNextChapter() {
			
			
			print("nextChapter(): move to next chapter");
			control.nextChapter();
			assert( control.getCurrentChapter(), 2);
			
		}

		
	}
	
});





