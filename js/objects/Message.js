/**
 * Message namespace.
 * @namespace blah blah
 */
namespace.module('agherriot.story-generator.objects', 
	function (exports, require) {
	"use strict";
	
	exports.extend({
		'Message': Message
	});

	/**
	 * Creates a new Message.
	 * @class This class represents a interaction between two or more
	 * characters.  This includes speech and actions.
	 * @param {Message.type} type The kind of message.
	 * @param {Subject} subject The subject of the message.
	 */ 
	function Message(type, subject) {
		var _type = type;
		var _subject = subject;
		
		/**
		 * Getter function for the type of the message. 
		 * @memberOf Message 
		 */
		this.getType = function() {
			return _type;
		};
		
		this.getSubject = function() {
			return _subject;
		};
	}
	 

	/** 
	 * These are the type flags for the {@link Message} objects
	 * used to indicate what type of message it is.
	 * @namespace Message type namespace.
	 * 
	 */
	Message.type = {};
	
	/** @constant */
	Message.type.SELF_INTEREST = 0;
	/** @constant */
	Message.type.OTHER_INTEREST = 1;
	/** @constant */
	Message.type.ASK_INTEREST = 2;
	/** @constant */
	Message.type.ASK_OTHER = 3;
	/** @constant */
	Message.type.COMPLIMENT = 4;
	/** @constant */
	Message.type.INSULT = 5;
	/** @constant */
	Message.type.OBSERVE = 6;
	/** @constant */
	Message.type.IGNORE = 7;
	
});

