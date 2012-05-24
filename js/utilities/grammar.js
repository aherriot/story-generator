var grammarUtility = {};

grammarUtility.getSubjectivePersonalPronoun = function( gender ) {
	if ( gender === lists.MALE ) {
		return "he";
    } else if ( gender === lists.FEMALE ) {
		return "she";
	} else {
		console.log("ERROR: received incorrect gender parameter.")
		return "ERROR";
	}
};

grammarUtility.getObjectivePersonalPronoun = function( gender ) {
	
	if ( gender === lists.MALE ) {
		return "him";
    } else if ( gender === lists.FEMALE ) {
		return "her";
	} else {
		console.log("ERROR: received incorrect gender parameter.")
		return "ERROR";
	}
};

grammarUtility.getPossessivePersonalPronoun = function( gender ) {
	
	if ( gender === lists.MALE ) {
		return "his";
    } else if ( gender === lists.FEMALE ) {
		return "hers";
	} else {
		console.log("ERROR: received incorrect gender parameter.")
		return "ERROR";
	}
};

