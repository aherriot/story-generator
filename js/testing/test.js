var testCount = 1;
var passedTests = 0;

// Prints outs a message as to whether the two values are equal
//  Optionally can take a specified compare function
// and an inner compare function to be passed to the compare function
function assert( actual, expected, compareFunction, innerCompareFunction ) {
	"use strict";
	
	// default compare function
	if ( compareFunction === undefined ) {
		compareFunction = stringCompare;
	}
	
	//Compare and print results
	if ( compareFunction(actual, expected, innerCompareFunction)  ) {
		console.log("Test " + testCount++ + ": Passed.");
		passedTests++;
	} else {
		console.log("");
		console.log("########Test " + testCount++ + ": Failed.########");
		console.log("Expected: " + expected);
		console.log("Actual: " + actual);
		console.log("");
	}
}

//The string compare function
//Also the default compare function for the assert function
function stringCompare( a, b ) {
	"use strict";
	return a === b;
}

function objectCompare(a, b) {
	"use strict";
	
	return a.equals(b);
}

//Compares two arrays element by element
// can also take an optional compare function for the elements
function arrayCompare( a, b, compareFunction) {
	"use strict";
	
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
	"use strict";
	
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

// Run all the tests in the test suite.
function test() {
	"use strict";
	
	console.log("Testing Andrew's Story Generator");
	
	testTest();
	testUtility();
	testControl();
	
	console.log("");
	console.log( passedTests + " of " + (testCount - 1) + " tests passed.");
	
}

function printTest( name ) {
	"use strict";
	console.log("Test " + testCount + ": " + name + ".");
}

function hr() {
	"use strict";
	console.log("----------------------------------------------------");
}



// Test the test.js file
function testTest() {
	"use strict";
	
	hr();
	console.log("Testing testing/test.js\n");
	console.log("");
	
	testArrayCompare();
	console.log("");
	testContainsCompare();
	
}

function testArrayCompare() {
	"use strict";
	
	var a = [ 1, 2, 3];
	var b = [ 1, 2, 3];
	
	printTest("arrayCompare(): integer arrays are equal");	
	assert( arrayCompare(a, b), true );
	
	
	a = [1, 2];
	printTest("arrayCompare(): integer arrays are not equal");	
	assert( arrayCompare(a, b), false );
	
	a = ["test1", "test2"];
	b = ["test1", "test2"];
	printTest("arrayCompare(): string arrays are equal");	
	assert( arrayCompare(a, b), true );
	
	
	b = ["test1", "test2", "test3"];
	printTest("arrayCompare(): string arrays are not equal");	
	assert( arrayCompare(a, b), false );
	
	a = [new SceneEntity(), new SceneEntity()];
	b = a;
	printTest("arrayCompare(): object arrays are equal");	
	assert( arrayCompare(a, b, objectCompare), true );
	
}

function testContainsCompare() {
	"use strict";
	
	var a = "test1";
	var b = ["test1", "test2", "test3"];
	
	printTest("containsCompare(): element in array");	
	assert( containsCompare(a, b), true );
	
	a = "test4";
	
	printTest("containsCompare(): element not in array");	
	assert( containsCompare(a, b), false );
	
	
	
}


// Test the utility.js package
function testUtility() {
	"use strict";
	
	hr();
	console.log("Testing utility.js\n");
	console.log("");
	
	testUtilityReplaceWithRandomWords();
	testAdlib();
}


function testUtilityReplaceWithRandomWords() {
	"use strict";
	printTest("replaceWithRandomWords(): Sentence word replacement");
	
	var sentence = "Testing a {0}, {1} sentence.";
	var usedWords = [];
	var wordList1 = [ "short" ];
	var wordList2 = [ "sample" ];
	
	sentence = utility.replaceWithRandomWords(sentence, wordList1, 0, usedWords);
	sentence = utility.replaceWithRandomWords(sentence, wordList2, 1, usedWords);	
	
	assert( sentence, "Testing a short, sample sentence." );
	
	printTest("replaceWithRandomWords(): Used word list updated");
	
	assert( usedWords, ["short", "sample"] , arrayCompare  );
	
}

function testAdlib() {
	"use strict";
	
	printTest("adlib(): Sentence word replacement");
	
	var sentence = "Testing a {0}, {1} sentence.";
	var usedWords = ["small"];
	var wordList1 = [ "short", "small" ];
	var wordList2 = [ "sample" ];
	
	var array = [ [sentence, [wordList1, wordList2]] ];
	
	sentence = utility.adlib( array, usedWords);
	
	assert( sentence, "Testing a short, sample sentence.  ");
	
	
	printTest("adlib(): Used word list updated");
	assert( usedWords, ["small", "short", "sample"] , arrayCompare  );
	
}


// Test the control.js package
function testControl() {
	"use strict";
	
	hr();
	console.log("Testing control.js\n");
	console.log("");
	
	testControlSetChapter();
	testControlPreviousChapter();
	testControlNextChapter();
	
}

function testControlSetChapter() {
	"use strict";
	
	printTest("setChapter(): displays the right chapter");
	
	control.setChapter(2);
	assert( control.currentChapter, 2);
}

function testControlPreviousChapter() {
	"use strict";
	
	printTest("previousChapter(): move to previous chapter");
	control.previousChapter();
	assert( control.currentChapter, 1);
	
}

function testControlNextChapter() {
	"use strict";
	
	printTest("nextChapter(): move to next chapter");
	control.nextChapter();
	assert( control.currentChapter, 2);
	
}
