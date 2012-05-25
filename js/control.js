namespace.module('agherriot.story-generator.control', 
	function (exports, require) {
	"use strict";
	
	var form = require('agherriot.story-generator.form');
	
	exports.extend({
		"setChapter": setChapter,
		"previousChapter": previousChapter,
		"nextChapter": nextChapter,
		"editSettings": editSettings,
		"createStory": createStory,
		"initialize": initialize
	});
	
	var currentChapter = 0;
	var totalChapters = 3;
	
	//Set the chapter to be displayed (often used to display the first chapter).
	function setChapter(number) {
	    currentChapter = number;
	    
	    $(".chapter").hide().eq( currentChapter ).show();
	        
	    if ( currentChapter === 0 )
	        $(".previousChapter").hide();
	    else
	        $(".previousChapter").show();


	    if ( currentChapter === totalChapters-1 ) 
	        $(".nextChapter").hide();
	    else
	        $(".nextChapter").show();
	}
	
	//display the previous chapter if it exists
	function previousChapter() {
	    
	    if( currentChapter > 0 ) {
	        
	    	currentChapter = currentChapter;    	
	        $(".chapter").eq( currentChapter ).fadeOut( function() {
	        	$(".chapter").eq( currentChapter - 1 ).fadeIn();
	        });  
	        
	        currentChapter--;
	        
	        if ( currentChapter === 0 )
	            $(".previousChapter").hide();
	        
	        $(".nextChapter").show();
	    }       
	}
	
	//display the next chapter if it exists
	function nextChapter() {

	    if ( currentChapter < totalChapters ) {

	        $(".chapter").eq( currentChapter ).fadeOut( function() {
	            
	            $(".chapter").eq(currentChapter+1 ).fadeIn();   
	        });
	        
	        currentChapter++;

	        if ( currentChapter === totalChapters-1 )
	            $(".nextChapter").hide();

	        $(".previousChapter").show();
	    }
	}
	
	function editSettings() {
		$("#disclaimer").slideUp();
		
		$("#story").slideUp(1000, function() { 
		    
		    $("#options").slideDown(1000);
		    
		    $("#create").show();
		    $("#edit").hide();    
		});
	}
	
	//createStory
	function createStory() {
		
		//Only if the form is valid, do we create a story
	    if ( form.validate() ) {
	    	
	        //hide the disclaimer
	        $("#disclaimer").slideUp();
	        
	        
	        var whatToHide;
	        
	        if ( $("#options").is(":visible") ) {
	            whatToHide = $("#options");
	        } else {
	        	 whatToHide = $("#story");
	        }
	        
	        // Hide either the story or the form, 
	        // And then generate the new story and finally reveal it.
	        whatToHide.slideUp( 1000, function() {

	            story.generate( form.getNumberOfCharacters() );

	            $("#story").slideDown( 1500 );

	            $("#edit").show();
	            $("#create").text("Create New Story");

	            control.currentChapter = 0;
	            control.setChapter( control.currentChapter );
	        });
	    }   
	}
	
	//Registers all the control events for JQuery
	function initialize() {
		
		$(".previousChapter").click( {control: this}, function(event) {
	        
	        event.preventDefault();
	        event.data.control.previousChapter();  
	    
	    });

	    $(".nextChapter").click( {control: this}, function(event) {
	        
	        event.preventDefault();
	        event.data.control.nextChapter();
	        
	    });    
	     
	    //The edit link is pressed
	    $("#edit").click( {control: this}, function(event) {    
	        
	        event.preventDefault();
	        event.data.control.editSettings();

	     });


	    // generate story button is pressed
	    $("#create").click( {control: this}, function(event) { 
	    	
	        event.preventDefault();
	        event.data.control.createStory();
	      
	    });   	
	}
	

});
		







