namespace.module('agherriot.story-generator.control', 
	function (exports, require) {
	"use strict";
	
	var form = require('agherriot.story-generator.form');
	var story = require('agherriot.story-generator.story');
	
	exports.extend({
		"setChapter": setChapter,
		"getCurrentChapter": getCurrentChapter,
		"previousChapter": previousChapter,
		"nextChapter": nextChapter,
		"editSettings": editSettings,
		"createStory": createStory,
		"initialize": initialize
	});
	
	var currentChapter = 0;
	var totalChapters = 3;
	
	function getCurrentChapter() {
		return currentChapter;
	}
	
	//Set the chapter to be displayed (often used to display the first chapter).
	function setChapter(number) {
	    currentChapter = number;
	    
	    $(".chapter").hide().eq(currentChapter).show();
	        
	    if (currentChapter <= 0) {
	        $(".previousChapter").hide();
	    } else {
	        $(".previousChapter").show();
	    }


	    if (currentChapter >= totalChapters-1) {
	        $(".nextChapter").hide();
	    } else {
	        $(".nextChapter").show();
	    }
	}
	
	//display the previous chapter if it exists
	function previousChapter() {
	    
	    if(currentChapter > 0) {

			$(".chapter").eq(currentChapter).fadeOut(function() {
				
				$(".chapter").eq(currentChapter-1).fadeIn();
				
		        currentChapter--;
		        
		        if (currentChapter <= 0)
		            $(".previousChapter").hide();
		        
		        $(".nextChapter").show();
			});  
	    } 
		console.log("currentChapter: " + currentChapter +
				", totalChapters: " + totalChapters);
	}
	
	//display the next chapter if it exists
	function nextChapter() {

	    if (currentChapter < totalChapters-1) {

	        $(".chapter").eq(currentChapter).fadeOut(function() {
	            
	            $(".chapter").eq(currentChapter+1).fadeIn();   
	            
		        currentChapter++;

		        if (currentChapter >= totalChapters-1)
		            $(".nextChapter").hide();

		        $(".previousChapter").show();
	        });
	        

	    }
	    console.log("currentChapter: " + currentChapter +
				", totalChapters: " + totalChapters);
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
	    if (form.validate()) {

	        //hide the disclaimer
	        $("#disclaimer").slideUp();
	        
	        
	        var whatToHide;
	        
			if ($("#options").is(":visible")) {
			    whatToHide = $("#options");
			} else {
				whatToHide = $("#story");
			}
	        
	        // Hide either the story or the form, 
	        // And then generate the new story and finally reveal it.
	        whatToHide.slideUp(1000, function() {

	            story.generate(form.getFormData());

	            $("#story").slideDown(1500);

	            $("#edit").show();
	            $("#create").text("Create New Story");

	            currentChapter = 0;
	            setChapter(currentChapter);
	        });
	    }   
	}
	
	//Registers all the control events for JQuery
	function initialize() {
		
		$(".previousChapter").click(function(event) {
	        
	        event.preventDefault();
	        previousChapter();  
	    
	    });

		$(".nextChapter").click(function(event) {
		    
		    event.preventDefault();
		    nextChapter();
		    
		});    
	     
	    //The edit link is pressed
	    $("#edit").click(function(event) {    
	        
	        event.preventDefault();
	        editSettings();

	     });


		// generate story button is pressed
		$("#create").click(function(event) { 
		
		    event.preventDefault();
		    createStory();
		});
	}
});
		







