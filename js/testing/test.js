/**
 * test class
 * @class Includes the test framework and the test cases for the whole project.
 */ 
var test = function() { 
	"use strict";
	
	console.log("Testing Andrew's Story Generator");
	
	test.selfTest();
	test.utility();
	test.control();
	
	console.log("");
	console.log( test.passedTests + " of " + (test.testCount - 1) + " tests passed.");
	
};


test.testCount = 1;
test.passedTests = 0;

// Prints outs a message as to whether the two values are equal
//  Optionally can take a specified compare function
// and an inner compare function to be passed to the compare function
test.assert = function( actual, expected, compareFunction, innerCompareFunction ) {
	"use strict";
	
	// default compare function
	if ( compareFunction === undefined ) {
		compareFunction = test.stringCompare;
	}
	
	//Compare and print results
	if ( compareFunction(actual, expected, innerCompareFunction)  ) {
		console.log("Test " + test.testCount++ + ": Passed.");
		test.passedTests++;
	} else {
		console.log("");
		console.log("########Test " + test.testCount++ + ": Failed.########");
		console.log("Expected: " + expected);
		console.log("Actual: " + actual);
		console.log("");
	}
};

//The string compare function
//Also the default compare function for the assert function
test.stringCompare = function( a, b ) {
	"use strict";
	return a === b;
};

test.objectCompare = function(a, b) {
	"use strict";
	
	return a.equals(b);
};

//Compares two arrays element by element
// can also take an optional compare function for the elements
test.arrayCompare = function( a, b, compareFunction) {
	"use strict";
	
	// default compare function
	if ( compareFunction === undefined ) {
		compareFunction = test.stringCompare;
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
};

// true if a is an element of b
// optional compare function.
test.containsCompare = function(a, b, compareFunction) {
	"use strict";
	
	// default compare function
	if ( compareFunction === undefined ) {
		compareFunction = test.stringCompare;
	}
	
	var contains = false;
	for ( var i in b) {
		
		if( compareFunction( a, b[i] ) ) {
			contains = true;
			break;
		}
		
	}
	
	return contains;
	
};

test.print = function( name ) {
	"use strict";
	console.log("Test " + test.testCount + ": " + name + ".");
};

test.printHR = function() {
	"use strict";
	console.log("----------------------------------------------------");
};



// Test the test.js file
test.selfTest = function() {
	"use strict";
	
	test.printHR();
	console.log("Testing testing/test.js\n");
	console.log("");
	
	test.testArrayCompare();
	console.log("");
	test.testContainsCompare();
	
};

test.testArrayCompare = function() {
	"use strict";
	
	var a = [ 1, 2, 3];
	var b = [ 1, 2, 3];
	
	test.print("arrayCompare(): integer arrays are equal");	
	test.assert( test.arrayCompare(a, b), true );
	
	
	a = [1, 2];
	test.print("arrayCompare(): integer arrays are not equal");	
	test.assert( test.arrayCompare(a, b), false );
	
	a = ["test1", "test2"];
	b = ["test1", "test2"];
	test.print("arrayCompare(): string arrays are equal");	
	test.assert( test.arrayCompare(a, b), true );
	
	
	b = ["test1", "test2", "test3"];
	test.print("arrayCompare(): string arrays are not equal");	
	test.assert( test.arrayCompare(a, b), false );
	
	a = [new SceneEntity(), new SceneEntity()];
	b = a;
	test.print("arrayCompare(): object arrays are equal");	
	test.assert( test.arrayCompare(a, b, test.objectCompare), true );
	
};

test.testContainsCompare = function() {
	"use strict";
	
	var a = "test1";
	var b = ["test1", "test2", "test3"];
	
	test.print("containsCompare(): element in array");	
	test.assert( test.containsCompare(a, b), true );
	
	a = "test4";
	
	test.print("containsCompare(): element not in array");	
	test.assert( test.containsCompare(a, b), false );
	
};


// Test the utility.js package
test.utility = function() {
	"use strict";
	
	test.printHR();
	console.log("Testing utility.js\n");
	console.log("");
	
	test.utilityReplaceWithRandomWords();
	test.utilityAdlib();
};


test.utilityReplaceWithRandomWords = function() {
	"use strict";
	test.print("replaceWithRandomWords(): Sentence word replacement");
	
	var sentence = "Testing a {0}, {1} sentence.";
	var usedWords = [];
	var wordList1 = [ "short" ];
	var wordList2 = [ "sample" ];
	
	sentence = utility.replaceWithRandomWords(sentence, wordList1, 0, usedWords);
	sentence = utility.replaceWithRandomWords(sentence, wordList2, 1, usedWords);	
	
	test.assert( sentence, "Testing a short, sample sentence." );
	
	test.print("replaceWithRandomWords(): Used word list updated");
	
	test.assert( usedWords, ["short", "sample"] , test.arrayCompare  );
	
};

test.utilityAdlib = function() {
	"use strict";
	
	test.print("adlib(): Sentence word replacement");
	
	var sentence = "Testing a {0}, {1} sentence.";
	var usedWords = ["small"];
	var wordList1 = [ "short", "small" ];
	var wordList2 = [ "sample" ];
	
	var array = [ [sentence, [wordList1, wordList2]] ];
	
	sentence = utility.adlib( array, usedWords);
	
	test.assert( sentence, "Testing a short, sample sentence.  ");
	
	test.print("adlib(): Used word list updated");
	test.assert( usedWords, ["small", "short", "sample"] , test.arrayCompare  );
	
};


// Test the control.js package
test.control = function() {
	"use strict";
	
	test.printHR();
	console.log("Testing control.js\n");
	console.log("");
	
	test.controlSetChapter();
	test.controlPreviousChapter();
	test.controlNextChapter();
	
};

test.controlSetChapter = function() {
	"use strict";
	
	test.print("setChapter(): displays the right chapter");
	
	control.setChapter(2);
	test.assert( control.currentChapter, 2);
};

test.controlPreviousChapter = function() {
	"use strict";
	
	test.print("previousChapter(): move to previous chapter");
	control.previousChapter();
	test.assert( control.currentChapter, 1);
	
};

test.controlNextChapter = function() {
	"use strict";
	
	test.print("nextChapter(): move to next chapter");
	control.nextChapter();
	test.assert( control.currentChapter, 2);
	
};
