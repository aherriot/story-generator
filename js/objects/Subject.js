namespace.module('agherriot.story-generator.objects', 
	function (exports, require) {
	"use strict";
	
	exports.extend({
		'Subject': Subject
	});
	
	/**
	 * Creates a new Subject.
	 * @class The details of a message.
	 * @param {String} name The name of the subject matter.
	 * @param {Subject.type} type What classification of subject is it?
	 * @param {Description} description How is it described?
	 */ 
	function Subject(name, type, description) {
		
		var _name = name;
		var _type = type;
		var _description = discription;
		
		/** 
		 * These are the type flags for the Subject objects
		 * used to indicate what classification of Subject it is.
		 * @namespace Subject type namespace.
		 */
		Subject.type = {};

		/** @constant */
		Subject.type.BODY_PART = 0;
		/** @constant */
		Subject.type.INTEREST = 1;
		/** @constant */
		Subject.type.ENTITY = 2;
		/** @constant */
		Subject.type.CHARACTER = 3;
	}
	
});


