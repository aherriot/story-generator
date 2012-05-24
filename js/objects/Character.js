/**
 * Creates a new Character.
 * @class Represents a Character. 
 * @property {int} characterIndex
 * @property {int} gender The gender.
 * @property {String} firstname The first name.
 * @property {String} nickname A nick name that the character is sometimes
 * referred to as.
 * @property {String} lastname The last name.
 * @property {int} shyness How shy a character is on the interval [0, 10].
 * @property {int} selfishness How selfish a character is on 
 * the interval [0, 10].
 * @property {int[]} relations An array on ints of how much this character
 * likes other characters which each value on the interval [0, 10]. 
 * 
 */ 
var Character = function( characterIndex, detailLevel, 
		gender, firstname, nickname, lastname, 
		shyness, selfishness, relations ) {
	"use strict";
	
	this.characterIndex = characterIndex;
	
	if (detailLevel === 0 ) {
		
		// generate name
		this.gender = utility.randomSelection( genders );
        
        if (this.gender === lists.MALE ) {

            var choice = utility.randomUniqueIndex( maleNames, usedNames );

            this.firstname = maleNames[choice];
            this.nickname = maleNicknames[choice];
            
            this.title = "Mr.";

            this.lastname = utility.randomUniqueSelection( lastNames, usedLastNames );

            usedNames.push( this.firstname );
            usedLastNames.push( this.lastname );

        }  else {

            var choice = utility.randomUniqueIndex( femaleNames, usedNames );

            this.firstname = femaleNames[choice];
            this.nickname = femaleNicknames[choice];

            this.lastname = utility.randomUniqueSelection( lastNames, usedLastNames );

            this.title = "Ms.";

            usedNames.push( this.firstname );
            usedLastNames.push( this.lastname );
        }
		
	} else {
		
        this.gender = gender;
        
        if (this.gender === lists.MALE) {        	
        	this.title = "Mr.";        	
        } else {        	
        	this.title = "Ms.";
        }
        
        this.firstname = firstname;
        this.nickname = nickname;
        this.lastname = lastname;
        
        usedNames.push( this.firstname );
        usedLastNames.push( this.lastname );
	}
	
	if ( detailLevel === 0 || detailLevel === 1 ) {
		
        this.shyness = utility.randomInt( 10 );
        this.selfishness = utility.randomInt( 10 );
		//this.relations = relations;
		
	    // Add relationships
	    this.relations = new Array();

	    //set the relationship values
	    for ( var i = 0; i < form.numberOfCharacters; i++ ) {
	    	
	    	if ( i !== this.characterIndex ) {
	    		this.relations.push( utility.randomInt( 10 ) );
	    	} else {
	    		this.relations.push( -1 );
	    	}
	    }
		
	} else {
		
    	this.shyness = shyness;
		this.selfishness = selfishness;
		
		for( var i = 0; i < form.numberOfCharacters; i++) {
			
			this.relations.push( relations[characterIndex][i] );
		}
		
	}        

	//regardless of the above info, pick some topics of interest
	
	
    //pick some interests
    this.interests = new Array();
    this.interests.push( utility.randomUniqueSelection( interests, this.interests ) );

    //pick some disinterests
    this.disinterests = new Array();
    this.disinterests.push( utility.randomUniqueSelection( interests, this.disinterests.concat( this.interests )) );
    
};

Character.prototype.getInitialDescription = function() {
	
}

/**
 * Opens the dialogue with the character of the given index
 * @param {int} characterIndex The character of the other person.
 * @returns {String} The output text.
 */
Character.prototype.startConversation = function( characterIndex ) {
	if ( this.characterIndex === characterIndex )
		return this.firstname + "begins talking to themselves.";
	
}

Character.prototype.getRelation = function( characterIndex ) {
	return this.relations[characterIndex];
	
};

Character.prototype.toString = function () {
        
    var string =  this.firstname + " (" + this.nickname + ") "
        + this.lastname + " <br />"
        + "Shyness: " + this.shyness + "<br />"
        + "Selfishness: " + this.selfishness + "<br />"
        + "Interests: " + this.interests + "<br />"
        + "Disinterests: " + this.disinterests + "<br />"
        + "Relations: <br />";

    for ( i in this.relations ) {

        if ( this.characterIndex != i )
            string += "&nbsp;&nbsp;&nbsp;&nbsp;" + story.characters[i].firstname + ": "
            + this.relations[i] + "<br />";

    }

    return string;
};


