//Andrew Herriot, 2011

/**
 * story namespace
 * @namespace Contains functions that handle the creation of the objects.
 */
var story = {};

/** 
 * Array containing the character objects
 * @private
 * @type
 */
story.characters = new Array();

/**
 * @function
 */
story.generateCharacters = function() {
	
	for ( var i = 0; i < form.numberOfCharacters; i++ ) {
			
		this.characters[i] = new Character( i, form.detailLevel[i], 
			form.gender[i], form.firstname[i], form.nickname[i], 
			form.lastname[i], form.shyness[i], form.selfishness[i],
			form.relations[i]);
	}	
};


/**
 * Pick the setting for the story.
 * @function
 */
story.generateSetting = function() {
	this.setting = new Setting();
};

/**
 * @function
 */
story.updateHTML = function() {
	$("#storyTitle").text("The Adventure of " + this.characters[0].firstname
    		+ " and " + this.characters[1].firstname );

    $(".chapterTitle").eq(0).text( this.characters[0].firstname + " at the " 
    		+ this.setting.location );
    

    //$(".chapterText").html("<p>"+ this.setting.initialDescription() +"</p>");
    
    $(".chapterText").eq(0).html("<p>"+ story.characters[0].toString() +"</p>");
    $(".chapterText").eq(1).html("<p>"+ story.characters[1].toString() +"</p>");
    $(".chapterText").eq(2).html("<p>"+ story.characters[2].toString() +"</p>");
};

/**
 * @function
 */
story.generate = function() {

    this.generateCharacters();
    this.generateSetting();
    
    this.updateHTML();
   
};

