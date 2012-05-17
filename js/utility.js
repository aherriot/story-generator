
var utility = {};

// Returns a random integer in the range [0, max].
utility.randomInt = function( max ) {
	"use strict";
    
	return Math.floor( Math.random() * (max + 1)  );

};

//Takes an list and returns one element at random
utility.randomSelection = function( list ) {
	"use strict";
	
    return list[ this.randomInt( list.length - 1 ) ];
};


// Returns the index of an element from the list
utility.randomIndex = function( list ) {
	"use strict";
	
    return this.randomInt( list.length - 1 );
};

//Randomizes the order of a list;
utility.shuffle = function( list ) {
	"use strict";
	
	return list.sort( function() { return Math.random() - 0.5 } );
};


//Returns a random selection from the list not on alreadyUsed
utility.randomUniqueSelection = function( list, alreadyUsed ) {
	"use strict";

    var newList = list.slice();

    for ( var i in alreadyUsed ) {

        var index = newList.indexOf( alreadyUsed[i] );

        if ( index >= 0 )

            newList.splice( index, 1 );

    }

    return this.randomSelection( newList );

};

// Gets the index of an element of list, that isn't in alreadUsed
utility.randomUniqueIndex = function( list, alreadyUsed ) {
	"use strict";

    var selection = this.randomUniqueSelection( list, alreadyUsed );

    return list.indexOf(selection);

};

// Adds a new element to the list from the list of possible choices
utility.addWordToList = function( currentList, possibleList ) {
	"use strict";
	
	currentList.push( this.randomUniqueSelection( possibleList, currentList ) );
};

// replaces each instance of "{listNumber}" with a random word from
// the corresponding list.
utility.replaceWithRandomWords = function (string, list, listNumber, usedWords) {
	"use strict";
	
	if ( list !== undefined ) {
		
		while ( string.indexOf("{" + listNumber + "}") >= 0) {
			
			var word = this.randomUniqueSelection( list, usedWords);
			usedWords.push(word);
			
			string = string.replace("{" + listNumber + "}", word);
		}
	}
	
	return string;
};

// Usage:

// utility.adlib(
//    [ [sentence1, [list1, list2, list3, ...] ], 
//    [sentence2, [list1, list2, list3, ...] ],
//    []...], usedWords
//	);
utility.adlib = function( array, usedWords ) {
	"use strict";
	
	if ( usedWords === undefined ) {
		var usedWords = [];
	}
	
	var choice = this.randomInt(array.length - 1);
	var string = array[choice][0];

	var wordLists = array[choice][1];
	
	for( var i in array[choice][1] ) {
		string = this.replaceWithRandomWords( string, wordLists[i], i, usedWords );	
	}
	
	return string + "  ";
};

