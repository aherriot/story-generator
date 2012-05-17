/**
 * Creates a new Subject.
 * @class The details of a message.
 * @param {String} name The name of the subject matter.
 * @param {int} type What classification of subject is it?
 * @param {Description} description How is it described?
 */ 
var Subject = function( name, type, description ) {
	
	this.name = name;
	this.type = type;
	this.description = discription;
}

/**
 * @static
 */
Subject.TYPE_BODY_PART = 0;
Subject.TYPE_INTEREST = 1;
Subject.TYPE_ENTITY = 2;
Subject.TYPE_CHARACTER = 3;