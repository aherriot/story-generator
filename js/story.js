//Andrew Herriot, 2011

/**
 * story namespace
 * @namespace Contains functions that handle the creation of the objects.
 * @property {Character} characters The characters in the story.
 * @property {Setting} setting The setting for the story.
 * 
 */
var story = {};

/**
 * Appends a paragraph onto the end of the chapter text.
 * @static
 * @param {String} text The content to add.
 */
story.setStoryTitle = function( text ) {
	$("#storyTitle").text( text );
}

/**
 * Appends a paragraph onto the end of the chapter text.
 * @static
 *  * @param {int} chapter The chapter to add text to.
 * @param {String} text The content to add.
 */
story.setChapterTitle = function( chapter, text ) {
	$(".chapterTitle").eq(chapter-1).text();
}

/**
 * Appends a paragraph onto the end of the chapter text.
 * @static
 * @param {int} chapter The chapter to add text to.
 * @param {String} text The content to add.
 */
story.addParagraph = function( chapter, text ) {
	$(".chapterText").eq(chapter-1).append("<p>" + text + "</p>");
}

/**
 * Generates the characters for the story based of the information
 * collected in the form.
 * @static
 */
story.generateCharacters = function() {
	
	this.characters = new Array();
	
	for ( var i = 0; i < form.numberOfCharacters; i++ ) {
			
		this.characters[i] = new Character( i, form.detailLevel[i], 
			form.gender[i], form.firstname[i], form.nickname[i], 
			form.lastname[i], form.shyness[i], form.selfishness[i],
			form.relations[i]);
	}	
};

/**
 * Put the generated story into the HTML.
 * @static 
 */
story.display = function() {
	
	this.setStoryTitle("The Adventure of " + this.characters[0].firstname
    		+ " and " + this.characters[1].firstname );

    this.setChapterTitle(1, this.characters[0].firstname + " at the " 
    		+ this.setting.location );
    
    //clear the story.
    $(".chapterText").html("");
    
    this.addParagraph( 1, this.setting.initialDescription() );
    
    this.addParagraph( 1, this.characters[0].toString() );
    this.addParagraph( 1, this.characters[1].toString() );
    this.addParagraph( 1, this.characters[2].toString() );
    

};

/**
 * The main function to generate the story. 
 * @static
 */
story.generate = function() {

    this.generateCharacters();
    this.setting = new Setting();
    
    
    
    this.display();
   
};

