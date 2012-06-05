/**
 * Creates a new Character.
 * 
 * @class Represents a Character.
 * @property {int} characterIndex
 * @property {int} gender The gender.
 * @property {String} firstname The first name.
 * @property {String} nickname A nick name that the character is sometimes
 *           referred to as.
 * @property {String} lastname The last name.
 * @property {int} shyness How shy a character is on the interval [0, 10].
 * @property {int} selfishness How selfish a character is on the interval [0,
 *           10].
 * @property {int[]} relations An array on ints of how much this character likes
 *           other characters which each value on the interval [0, 10].
 * 
 */ 

namespace.module('agherriot.story-generator.objects', 
	function (exports, require) {
	"use strict";
	
	var utility = require('agherriot.story-generator.utility');
	var lists = require('agherriot.story-generator.lists');
	var form = require('agherriot.story-generator.form');
	var story = require('agherriot.story-generator.story');
	
	exports.extend({
		'Character': Character
		
	});
	
	function Character (characterIndex, detailLevel, 
			gender, firstname, nickname, lastname, 
			shyness, selfishness, relations) {
		
		var _characterIndex = characterIndex;
		var _gender = gender;
		var _title;
		var _firstname = firstname;
		var _nickname = nickname;
		var _lastname = lastname;
		var _shyness = shyness;
		var _selfishness = selfishness;
		var _relations = [];
		var _interests = [];
		var _disinterests = [];
		
		var _patience;
		
		var choice, i;
		
		if (detailLevel === 0) {
			
			//console.log(lists.usedFirstnames);
			// generate name
			_gender = utility.randomSelection(lists.genders);
	        
			if (_gender === lists.GENDER_MALE) {
			
				choice = utility.randomUniqueIndex(lists.maleNames, 
					lists.usedFirstnames);

	            _firstname = lists.maleNames[choice];
	            _nickname = lists.maleNicknames[choice];
	            
	            _title = lists.TITLE_MALE;

				_lastname = utility.randomUniqueSelection(lists.lastnames, 
						lists.usedLastNames);

	            lists.usedFirstnames.push(_firstname);
	            lists.usedNicknames.push(_nickname);
	            lists.usedLastnames.push(_lastname);

	        } else if(_gender === lists.GENDER_FEMALE){

				choice = utility.randomUniqueIndex(lists.femaleNames, 
					lists.usedFirstnames);

	            _firstname = lists.femaleNames[choice];
	            _nickname = lists.femaleNicknames[choice];

				_lastname = utility.randomUniqueSelection(lists.lastnames, 
					lists.usedLastnames);

	            _title = lists.TITLE_FEMALE;

	            lists.usedFirstnames.push(_firstname);
	            lists.usedNicknames.push(_nickname);
	            lists.usedLastnames.push(_lastname);
			} else {
				console.error("Gender is not recognized:" + _gender);
			}
			
		} else {
			
	        _gender = gender;

			if (_gender === lists.MALE) {
				_title = lists.TITLE_MALE;
			} else {
				_title = lists.TITLE_MALE;
			}

	        _firstname = firstname;
	        _nickname = nickname;
	        _lastname = lastname;
	        
	        lists.usedNames.push(_firstname);
	        lists.usedLastNames.push(_lastname);
		}
		
		if (detailLevel === 0 || detailLevel === 1) {
			
	        _shyness = utility.randomInt(10);
	        _selfishness = utility.randomInt(10);

			// set the relationship values
			for (i = 0; i < form.getNumberOfCharacters(); i++) {
				
				if (i !== _characterIndex) {
					_relations.push(utility.randomInt(10));
				} else {
					_relations.push(-1);
				}
			}
			
		} else {
			
			_shyness = shyness;
			_selfishness = selfishness;
			
			for(i = 0; i < form.getNumberOfCharacters(); i++) {
				
				_relations.push(relations[characterIndex][i]);
			}
			
		}        

		// regardless of the above info, pick some topics of interest
		
	    // pick some interests
		_interests.push(utility.randomUniqueSelection(lists.interests, 
			_interests));

		// pick some disinterests
		_disinterests.push(utility.randomUniqueSelection(lists.interests, 
				_disinterests.concat(_interests)));	
		
		_patience = 5;
	    
	    
	    // **********************
	    // End of Constructor
	    

		this.getInitialDescription = function() {
			return "Charater's initial description";
		};

	    this.startConversation = function(other) {
			if (this === other) {
				return _firstname + " begins talking to themselves.";	
			}
			else {
				return "hola!";
			}
			
			other.updateSituation();
	    };
	    
		this.updateSituation = function() {
			_patience--;
		};
	    
		this.getFirstname = function() {
			return _firstname;
		};

	    this.getRelation = function(characterIndex) {
			return this.relations[characterIndex];
	    };
	    
		this.isDoneConversation = function() {
			if (_patience > 0) {
				return false;
			} else {
				return true;
			}
		};
	    
		this.equals = function(other) {
			return this.constructor === other.constructor &&
				_firstname === other.getFirstname();
		};

	    this.toString = function () {
	            
	        var string =  _firstname + " (" + _nickname + ") " +
	            _lastname + " <br />" +
	            "Shyness: " + _shyness + "<br />" +
	            "Selfishness: " + _selfishness + "<br />" +
	            "Interests: " + _interests + "<br />" +
	            "Disinterests: " + _disinterests + "<br />" +
	            "Relations: <br />";

	        for (var i in _relations) {

	            if (_characterIndex != i) {
					string += "&nbsp;&nbsp;&nbsp;&nbsp;" + 
						story.getCharacter(i).getFirstname() + ": " +
						_relations[i] + "<br />";
	            }

	        }

	        return string;
	    };
	    
	}
	
});