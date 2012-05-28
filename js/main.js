namespace.module('agherriot.story-generator', 
	function (exports, require) {
	"use strict";
	
	var control = require('agherriot.story-generator.control');
	var form = require('agherriot.story-generator.form');

	/**
	 * @function This function initializes the page when it has loaded.
	 */ 
	$(function() {
		
		//Set up the controls events for JQuery actions
		control.initialize();
		
		//Generate the forms
		form.initialize();
		
		//Set up the form event controls
		form.setUpEventHandlers();
		
	});

});