

namespace.module('agherriot.story-generator.objects', 
	function (exports, require) {
	"use strict";
	
	var utility = require('agherriot.story-generator.utility');
	
	exports.extend({
		'SceneEntity': SceneEntity
	});
	
	function SceneEntity(type, name) {
		
		var _type;
		var _name;
		var _selection;
		
		var sceneEntityNames = [ 
		    ["couch", "armchair", "bar stool", "bean bag chair"], 
		    ["pizza", "stir fry", "egg rolls", "moose sausage", "chocolate"], 
		    ["slurpie", "milkshake", "beer", "martini", "chocolate milk"], 
		    ["finger painting", "ASCII art", "sculpture", "performance art"] ];
		
		var sceneEntityTypes = [ 
		    ["chair", "sits", "lounges", "lays", "relaxes"], 
		    ["food", "eats", "demolishes", "pigs-out", "nibbles", "licks", "smell"],
		    ["drink", "sips", "chugs", "drinks", "gulps", "gurgles"], 
		    ["art", "admires", "observes", "licks", "touches", "criticizes", "sniffs"] ];
	
		
		if ( type === undefined ) {
		    
			_selection = utility.randomIndex(sceneEntityTypes);
	        _type = sceneEntityTypes[_selection][0];
	        
	    } else {
	 
	        _type = type;
	        
	        //find if the type one from the list available.
	        _selection = -1;
	        for(var i = 0; i < sceneEntityTypes.length; i++) {	
				if ( sceneEntityTypes[i][0] === type ) {
					_selection = i;
					break;
				}
			}
	    }
		
		//If the object name is not defined, then find one from the list.
	    if ( name === undefined ) {
	        _name = utility.randomSelection( sceneEntityNames[_selection] );
	    } else {
	        _name = name;
	    }
	    //***********************************
	    // end of constructor.
	    
		this.getType = function() {
			return _type;
		};
		
		this.getName = function() {
			return _name;
		};
	    
		this.equals = function(other) {
			return this.constructor === other.constructor &&
				_type === other.getType() &&
				_name == other.getName();
		};
	    
		this.toString = function() {
			return _name + " (" + _type + ")";
		};
		
		
	}
	
});