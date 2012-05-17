// This Object tracks the description of the setting
// and the storyObjects that are contained within the scene

var Setting = function ( location ) {
	"use strict";
	
	var locationNames = ["Castle", "Desert island hut"];

    if ( location === undefined ) {
        this.location = randomSelection( locationNames );
    } else {
        this.location = location;
    }
    
    this.descriptiveWords = new Array();
//    addWordToList(this.descriptiveWords, positiveAdjectives);
    
    this.sceneEntities = new Array();
    this.sceneEntities[0] = new SceneEntity();
    this.sceneEntities[1] = new SceneEntity();
    
};

Setting.prototype.toString = function() {
	
    var text = this.name + " (" + this.type + "): " 
    	+ this.descriptiveWords;
    
    return text;

};

Setting.prototype.equals = function( other ) {
	
	return ( this.location === other.location );

};

Setting.prototype.openingLine = function() {
	
	return adlib([ 
	    ["It was a {0} and {1} night!", 
	     	[visualAdjectives, audioAdjectives] ],
	     	
	    ["Once upon a time, there was a {0} " + this.location + ".", 
	     	[textureAdjectives]],
	     	
	    ["All was {0} in the " + this.location + ", even the weather was {1}.", 
	     	[audioAdjectives, positiveAdjectives]],
	     	
	     [""]
	    //there live a ___
	    // along time ago.
	]);	

};

Setting.prototype.visualDescription = function() {
	return "It looked nice.  ";
	// The styling of the room was reminesciennt of a ___ ___.
	// The decor could be described as ___ and ___.
	// 
}

Setting.prototype.audioDescription = function() {
	return "It sounded quiet.  ";
	// The faint sounds of ___ echoed throughout the room.
	// The sound could best be described as __ and ____.
	// An echo of ___ could be heard ___.
	// The wisps of ____ and ___ were 
}

Setting.prototype.smellDescription = function() {
	
	return adlib([ 
  	    ["The {0} room was filled with a {1} and {1} odour.", 
  	     	[visualAdjectives, smellAdjectives] ],
  	     	
  	    ["Upon entering the {0} room, you notice a {1}, {1} smell.", 
  	     	[positiveAdjectives, smellAdjectives]],
  	     	
  	    ["There was a hint of {0} {1} {2} smell that hung in the room, "
  	     + "as well as a touch of {1} {2} to compliment it.", 
  	     	[neutralAdjectives, smellAdjectives, smellNouns] ]
	]);	
	
	// A smell of ___ hung in the hair as if a had recently been there.
	
}

Setting.prototype.initialDescription = function() {
	
	var paragraph = this.openingLine();
	
	var descriptions = [this.visualDescription, 
	                    this.audioDescription,
	                    this.smellDescription];
	
	shuffle( descriptions );
	
	paragraph += descriptions[0]();
	paragraph += descriptions[1]();	
	paragraph += descriptions[2]();
	
	return paragraph;

};