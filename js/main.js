/**
 * @function This function initializes the page when it has loaded.
 */ 
$(document).ready(function() {
	
	//Set up the controls events for JQuery actions
	control.initialize();
	
	//Generate the forms
	form.initialize();
	
	//Set up the form event controls
	form.setUpEventHandlers();
	
});