//This class represents an object that is in the story
// scene and can be interacted with.

var SceneEntity = function ( type, name) {
	"use strict";
	
	var sceneEntityNames = [ 
	    ["couch", "armchair", "bar stool", "bean bag chair"], 
	    ["pizza", "stir fry", "egg rolls", "moose sausage", "chocolate"], 
	    ["slurpie", "milkshake", "beer", "martini", "chocolate milk"], 
	    ["finger painting", "ASCII art", "sculpture", "performance art"] ];
	
	var sceneEntityTypes = [ 
	    ["chair", "sits", "lounges", "lays", "relaxes"], 
	    ["food", "eats", "demolishes", "pigs-out", "nibbles", "licks", "smell"],
	    ["drink", "sips", "chugs", "drinks", "gulps", "gurgles"], 
	    ["art", "admires", "observes", "licks", "touches", "criticizes", "sniffs"] ];

	
    if ( type === undefined ) {
    
    	this.selection = utility.randomIndex(sceneEntityTypes);
        this.type = sceneEntityTypes[this.selection][0];
        
    } else {
 
        this.type = type;
        
        //find if the type one from the list available.
        this.selection = -1;
        for( i in sceneEntityTypes ) {        	
        	if ( sceneEntityTypes[i][0] === type ) {
        		this.selection = i;
        		break;
        	}
        }
    }
    
    //if the object name is not defined, then find one from the list.
    if ( name === undefined ) {
        this.name = utility.randomSelection( sceneEntityNames[this.selection] );
    } else {
        this.name = name;
    }

    this.descriptiveWords = new Array();
    utility.addWordToList(this.descriptiveWords, adjectives);
    
};

SceneEntity.prototype.equals = function ( otherObject ) {
	return  otherObject === this;
}

SceneEntity.prototype.toString = function() {
	
    var text = this.name + " (" + this.type + "): " 
    	+ this.descriptiveWords;
    
    return text;

};