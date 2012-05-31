// Andrew Herriot, 2011

/**
 * @namespace Lists
 */
namespace.module('agherriot.story-generator.lists', 
	function (exports, require) {
	"use strict";
	
	function numberName(n) { 
		var names = ["Zero", "One", "Two", "Three", "Four", "Five", "Six",
		    "Seven", "Eight", "Nine", "Ten"];
		
		return function(n) {
			return names[n];
		};
	}
	
	/** @constant */
	var GENDER_MALE = 0;
	/** @constant */
	var GENDER_FEMALE = 1;
	var genders = [GENDER_MALE, GENDER_FEMALE];
	
	var TITLE_MALE = "Mr.";
	var TITLE_FEMALE = "Ms.";
	var titles = [TITLE_MALE, TITLE_FEMALE];
	
	var maleNames = ["Cornelius", "William", "George", "Abraham", 
	     "Bartholomew", "Richard", "Rosencrantz", "Guildenstern", 
	     "Lawrence", "Mortimer"];
	
    var maleNicknames = ["Corny", "Willy", "Big G", "Abe", "Bart", 
                          "Dick", "Crantz", "Stern", "Larry", "Mort"];
                      
    var femaleNames = ["Sophia", "Elizabeth", "Abigale", "Katherine", 
                        "Henrietta", "Winnifred"];

    var femaleNicknames = ["Sophie", "Liz", "Abby", "Kate", "Hettie", 
                            "Winnie"];
  
    var lastnames = ["Featherbottom", "Turbomax", "MacDonald"];

    var usedFirstnames = [];
    var usedNicknames = [];
    var usedLastnames = [];
	
    //Make the following symbols public:
	exports.extend({
		'numberName': numberName,
		'genders': genders,
		'titles': titles,
		'maleNames': maleNames,
		'maleNicknames': maleNicknames,
		'femaleNames': femaleNames,
		'femaleNicknames': femaleNicknames,
		'lastnames': lastnames,
		'usedFirstnames': usedFirstnames,
		'usedNicknames': usedNicknames,
		'usedLastnames': usedLastnames
	});

});