namespace.module('agherriot.story-generator.objects',
	function(exports, require) {
	"use strict";

	var utility = require('agherriot.story-generator.utilities');
	var lists = require('agherriot.story-generator.lists');
	var objects = require('agherriot.story-generator.objects');

	exports.extend({
		"World" : World
	});

	/**
	 * Creates a new World object.
	 * 
	 * @class This Object tracks the description of the world
	 *        and the sceneEntity that are contained within the
	 *        scene.
	 */
	function World(location) {

		var _location;
		var _sceneEntities = [];

		var locationNames = [ "Castle", "Desert island hut" ];

		if (location === undefined) {
			_location = utility.randomSelection(locationNames);
		} else {
			_location = location;
		}

		// descriptiveWords = new Array();
		// utility.addWordToList(this.descriptiveWords,
		// positiveAdjectives);

		_sceneEntities[0] = new objects.SceneEntity();
		_sceneEntities[1] = new objects.SceneEntity();
		
		this.getLocation = function() {
			return _location;
		};

		this.openingLine = function() {
			return utility.adlib([
				["It was a {0} and {1} night.",
					[ lists.visualAdjectives, lists.audioAdjectives ] ],

				["Once upon a time, there was a {0} " + _location + ".",
					[ lists.textureAdjectives ] ],

				["All was {0} in the " + _location + ", even the weather" +
				 " was {1}.",
					[ lists.audioAdjectives, lists.positiveAdjectives ] ]
				], [ lists.usedWords ]);
			// there live a ___
			// along time ago.
			
		};

		this.visualDescription = function() {
			
			return utility.adlib([
				["The {0} of the room was reminescient of a {1}, {2}.",
					[lists.fashionNouns, lists.visualAdjectives, 
					 lists.visualNouns]],
				["The {0} could best be described as {1} and {1}.",
					[lists.fashionNouns, lists.visualAdjectives]]
				
			]);
			// The styling of the room was reminescient of a
			// ___ ___.
			// The decor could be described as ___ and ___.
			
		};

		this.audioDescription = function() {
			
			return utility.adlib([
			    ["The {0} sounds of a {1} {2} throughout the room.",
			     [lists.audioAdjectives, lists.audioNouns, lists.audioVerbs]],
			    ["The sound could best be described as {0} and {0}",
			     [lists.audioAdjectives]] 
			]);
			// The faint sounds of ___ echoed throughout the
			// room.
			// The sound could best be described as __ and ____.
			// An echo of ___ could be heard ___.
			// The wisps of ____ and ___ were
		};

		this.smellDescription = function() {

			return utility.adlib([
				["The {0} room was filled with a {1} and {1} odour.",
					[ lists.visualAdjectives, lists.smellAdjectives ] ],

				[ "Upon entering the {0} room, you notice a {1}, {1} smell.",
					[ lists.positiveAdjectives, lists.smellAdjectives ] ],

				["There was a hint of {0} {1} {2} smell that hung in the " +
					"room, as well as a touch of {1} {2} to compliment it.",
					[ lists.neutralAdjectives, lists.smellAdjectives, 
					  lists.smellNouns ] ] 
			]);

		};

		this.initialDescription = function() {

			var paragraph = this.openingLine();

			var descriptions = [ this.visualDescription,
					this.audioDescription,
					this.smellDescription ];

			utility.shuffle(descriptions);

			paragraph += descriptions[0]();
			paragraph += descriptions[1]();
			paragraph += descriptions[2]();

			return paragraph;

		};
		
		this.equals = function(other) {
			return this.constructor === other.constructor &&
				_location === other.getLocation();
		};	
		
		this.toString = function() {
			return "World: " + _location;
		};

	}

});