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
	
	var objects = require('agherriot.story-generator.objects');
	
	exports.extend({
		'generate': generate
	});
	
	var characters;
	var world;
	
	/**
	 * Appends a paragraph onto the end of the chapter text.
	 * @static
	 * @param {String} text The content to add.
	 */
	function setStoryTitle(text) {
		$("#storyTitle").text(text);
	}
	
	/**
	 * Appends a paragraph onto the end of the chapter text.
	 * @static
	 *  * @param {int} chapter The chapter to add text to.
	 * @param {String} text The content to add.
	 */
	function setChapterTitle(chapter, text) {
		$(".chapterTitle").eq(chapter-1).text();
	}
	
	/**
	 * Appends a paragraph onto the end of the chapter text.
	 * @static
	 * @param {int} chapter The chapter to add text to.
	 * @param {String} text The content to add.
	 */
	function addParagraph(chapter, text) {
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
	function createCharacters(formData) {
		
		characters = [];
		
		for (var i = 0; i < formData.numberOfCharacters; i++) {
				
			characters[i] = new objects.Character(i, formData.detailLevel[i], 
				formData.gender[i], formData.firstname[i], formData.nickname[i], 
				formData.lastname[i], formData.shyness[i], 
				formData.selfishness[i], formData.relations[i]);
		}	
	}

	/**
	 * Put the generated story into the HTML.
	 * @static 
	 */
	function display() {

		setChapterTitle(1, characters[0].firstname + " at the " + 
			world.location);
	    

	    addParagraph(1, characters[1].toString());
	    addParagraph(1, characters[2].toString());
	    
	}

	/**
	 * Generates the text for the first chapter of the story.
	 * @static
	 */
	function createChapter(currentChapter, lastChapters) {
	    addParagraph(1, world.initialDescription());
	    
	    addParagraph(1, characters[0].toString());
	}

	/**
	 * The main function to generate the story. 
	 * @static
	 */
	function generate(formData) {
		
		clear();
	    createCharacters(formData);
	    world = new objects.World();
	    
		setStoryTitle("The Adventure of " + characters[0].getFirstname() + 
			" and " + characters[1].getFirstname());
	    
	    
		createChapter(); 
	    display(); 
	}
	
	
});


