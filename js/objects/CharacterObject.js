// Character class


var Character = function( characterIndex, detailLevel, 
		gender, firstname, nickname, lastname, 
		shyness, selfishness, relations ) {
	"use strict";
	
	this.characterIndex = characterIndex;
	
	if ( detailLevel === 0 ) {
		
		// generate name
		this.gender = randomSelection( genders );
        
        if ( this.gender === MALE ) {

            var choice = randomUniqueIndex( maleNames, usedNames );

            this.firstname = maleNames[choice];
            this.nickname = maleNicknames[choice];
            
            this.title = "Mr.";

            this.lastname = randomUniqueSelection( lastNames, usedLastNames );

            usedNames.push( this.firstname );
            usedLastNames.push( this.lastname );

        }  else {

            var choice = randomUniqueIndex( femaleNames, usedNames );

            this.firstname = femaleNames[choice];
            this.nickname = femaleNicknames[choice];

            this.lastname = randomUniqueSelection( lastNames, usedLastNames );

            this.title = "Ms.";

            usedNames.push( this.firstname );
            usedLastNames.push( this.lastname );
        }
		
	} else {
		
        this.gender = gender;
        
        if ( this.gender === MALE) {        	
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
		
        this.shyness = randomInt( 10 );
        this.selfishness = randomInt( 10 );
		//this.relations = relations;
		
	    // Add relationships
	    this.relations = new Array();

	    //set the relationship values
	    for ( var i = 0; i < form.numberOfCharacters; i++ ) {
	    	
	    	if ( i !== this.characterIndex ) {
	    		this.relations.push( randomInt( 10 ) );
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
    this.interests.push( randomUniqueSelection( interests, this.interests ) );

    //pick some disinterests
    this.disinterests = new Array();
    this.disinterests.push( randomUniqueSelection( interests, this.disinterests.concat( this.interests )) );
    
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


