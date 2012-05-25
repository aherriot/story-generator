/**
 * Message namespace.
 * @function blah blah
 */
namespace.module('agherriot.story-generator.utilities', 
	function (exports, require) {
	"use strict";
	
	exports.extend({
		"getHeShe": getHeShe,
		"getHimHer": getHimHer,
		"getHisHers": getHisHers	
	});

	//subjective personal pronoun
	function getHeShe(gender) {
		if ( gender === lists.MALE ) {
			return "he";
	    } else if ( gender === lists.FEMALE ) {
			return "she";
		} else {
			console.log("ERROR: received incorrect gender parameter.")
			return "ERROR";
		}
	}
	
	//objective personal pronoun
	function getHimHer(gender) {
		if ( gender === lists.MALE ) {
			return "him";
	    } else if ( gender === lists.FEMALE ) {
			return "her";
		} else {
			console.log("ERROR: received incorrect gender parameter.")
			return "ERROR";
		}
	}
	
	//possessive personal pronoun
	function getHisHers(gender) {
		if ( gender === lists.MALE ) {
			return "his";
	    } else if ( gender === lists.FEMALE ) {
			return "hers";
		} else {
			console.log("ERROR: received incorrect gender parameter.")
			return "ERROR";
		}
	}
	
});


