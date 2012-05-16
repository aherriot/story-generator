// Character class


var Character = function( characterIndex, detailLevel, 
		gender, firstname, nickname, lastname, 
		shyness, selfishness, relations ) {
	"use strict";

	if ( detailLevel === 0 ) {
		
	
        this.gender = randomSelection( genders );
        
        if ( this.gender === MALE ) {

            var choice = randomUniqueIndex( maleNames, usedNames );

            this.firstname = maleNames[choice];
            this.nickname = maleNicknames[choice];
            
            this.title = "Mr.";

            this.lastname = randomUniqueSelection( lastNames, usedLastNames );

            usedNames.push( this.firstname );
            usedLastNames.push( this.lastname );

        }  else if ( this.gender === FEMALE ) {

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
        

	if ( detailLevel === 2 ) {
		
    	this.shyness = shyness;
		this.selfishness = selfishness;
		this.relations = relations;
	
	} else {

        this.shyness = randomInt( 10 );
        this.selfishness = randomInt( 10 );
	}

    //pick some interests
    this.interests = new Array();
    this.interests.push( randomUniqueSelection( interests, this.interests ) );

    //pick some disinterests
    this.disinterests = new Array();
    this.disinterests.push( randomUniqueSelection( interests, this.disinterests.concat( this.interests )) );


    // Add relationships
    this.relations = new Array();

    //set the relationship values
    for ( var i = 0; i < story.characters.length; i++ ) {
    	this.relations.push( randomInt( 10 ) );
    	story.characters[i].relations.push( randomInt( 10 ) );
    }

    //The index of this character in the master character list
    this.characterIndex = this.relations.length;

    //-1 to indicate it has no feelings about itself
    this.relations.push(-1);
};

Character.prototype.toString = function () {
        
    var string =  this.name + " (" + this.nickname + ") "
        + this.lastname + " <br />"
        + "Shyness: " + this.shyness + "<br />"
        + "Interests: " + this.interests + "<br />"
        + "Disinterests: " + this.disinterests + "<br />"
        + "Relations: <br />";

    for ( i in this.relations.length ) {

        if ( this.characterIndex != i )
            string += "&nbsp;&nbsp;&nbsp;&nbsp;" + characters[i].name + ": "
            + this.relations[i] + "<br />";

    }

    return string;
};


