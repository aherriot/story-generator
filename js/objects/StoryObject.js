//This class represents an object that is in the story
// scene and can be interacted with.

var StoryObject = function ( type, name) {
	"use strict";
	
	var storyObjectNames = [ 
	    ["couch", "armchair", "bar stool", "bean bag chair"], 
	    ["pizza", "stir fry", "egg rolls", "moose sausage", "chocolate"], 
	    ["slurpie", "milkshake", "beer", "martini", "chocolate milk"], 
	    ["finger painting", "ASCII art", "sculpture", "performance art"] ];
	
	var storyObjectTypes = [ 
	    ["chair", "sits", "lounges", "lays", "relaxes"], 
	    ["food", "eats", "demolishes", "pigs-out", "nibbles", "licks", "smell"],
	    ["drink", "sips", "chugs", "drinks", "gulps", "gurgles"], 
	    ["art", "admires", "observes", "licks", "touches", "criticizes", "sniffs"] ];

	
    if ( type === undefined ) {
    
    	this.selection = randomIndex(storyObjectTypes);
        this.type = storyObjectTypes[this.selection][0];
        
    } else {
 
        this.type = type;
        
        //find if the type one from the list available.
        this.selection = -1;
        for( i in storyObjectTypes ) {        	
        	if ( storyObjectTypes[i][0] === type ) {
        		this.selection = i;
        		break;
        	}
        }
    }
    
    //if the object name is not defined, then find one from the list.
    if ( name === undefined ) {
        this.name = randomSelection( storyObjectNames[this.selection] );
    } else {
        this.name = name;
    }

    this.descriptiveWords = new Array();
    addWordToList(this.descriptiveWords, adjectives);
    
};

StoryObject.prototype.toString = function() {
	
    var text = this.name + " (" + this.type + "): " 
    	+ this.descriptiveWords;
    
    return text;

};