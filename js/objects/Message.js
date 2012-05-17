/**
 * Creates a new Message.
 * @class This class represents a interaction between two or more
 * characters.  This includes speech and actions.
 * @param {int} messageType The kind of message.
 * @param {Subject} subject The subject of the message.
 */ 
var Message = function ( messageType, subject ) {
	
	
};

/** @constant */
Message.TYPE_SELF_INTEREST = 0;
/** @constant */
Message.TYPE_OTHER_INTEREST = 1
/** @constant */
Message.TYPE_ASK_INTEREST = 2;
/** @constant */
Message.TYPE_ASK_OTHER = 3;
/** @constant */
Message.TYPE_COMPLIMENT = 4;
/** @constant */
Message.TYPE_INSULT = 5;
/** @constant */
Message.TYPE_OBSERVE = 6;
/** @constant */
Message.TYPE_IGNORE = 7;

