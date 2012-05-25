//Andrew Herriot, 2011

/**
 * story namespace
 * @namespace Contains functions that handle the creation of the objects.
 * @property {Character} characters The characters in the story.
 * @property {Setting} setting The setting for the story.
 * 
 */
namespace.module('agherriot.story-generator.story', 
	function (exports, require) {
	"use strict";
	
	exports.extend({
		'generate': generate
	});
	
	var characters;
	var setting;
	
	/**
	 * Appends a paragraph onto the end of the chapter text.
	 * @static
	 * @param {String} text The content to add.
	 */
	function setStoryTitle( text ) {
		$("#storyTitle").text( text );
	}
	
	/**
	 * Appends a paragraph onto the end of the chapter text.
	 * @static
	 *  * @param {int} chapter The chapter to add text to.
	 * @param {String} text The content to add.
	 */
	function setChapterTitle( chapter, text ) {
		$(".chapterTitle").eq(chapter-1).text();
	}
	
	/**
	 * Appends a paragraph onto the end of the chapter text.
	 * @static
	 * @param {int} chapter The chapter to add text to.
	 * @param {String} text The content to add.
	 */
	function addParagraph( chapter, text ) {
		$(".chapterText").eq(chapter-1).append("<p>" + text + "</p>");
	}
	
	/**
	 * Clears the story text from the paragraphs.
	 * @static
	 */
	function clear() {
	    $(".chapterText").html("");
	}
	
	/**
	 * Generates the characters for the story based of the information
	 * collected in the form.
	 * @static
	 */
	function createCharacters( numberOfCharacters ) {
		
		characters = new Array();
		
		for ( var i = 0; i < numberOfCharacters; i++ ) {
				
			characters[i] = new Character( i, form.detailLevel[i], 
				form.gender[i], form.firstname[i], form.nickname[i], 
				form.lastname[i], form.shyness[i], form.selfishness[i],
				form.relations[i]);
		}	
	}

	/**
	 * Put the generated story into the HTML.
	 * @static 
	 */
	function display() {

	    setChapterTitle(1, characters[0].firstname + " at the " 
	    		+ setting.location );
	    

	    addParagraph( 1, characters[1].toString() );
	    addParagraph( 1, characters[2].toString() );
	    
	}

	/**
	 * Generates the text for the first chapter of the story.
	 * @static
	 */
	function createChapter( currentChapter, lastChapters) {
	    addParagraph( 1, setting.initialDescription() );
	    
	    addParagraph( 1, characters[0].toString() );
	}

	/**
	 * The main function to generate the story. 
	 * @static
	 */
	function generate( numberOfCharacters ) {
		
		clear();
	    createCharacters( numberOfCharacters );
	    setting = new Setting();
	    
		setStoryTitle("The Adventure of " + characters[0].firstname
	    		+ " and " + characters[1].firstname );
	    
	    
		createChapter(); 
	    display(); 
	}
	
	
});


