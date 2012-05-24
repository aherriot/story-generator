//Andrew Herriot, 2011

/**
 * control namespace
 * @namespace Contains functions that handle the JQuery events in 
 * response to input from the user.
 */ 

var control = {};
	
control.currentChapter = 0;
control.totalChapters = 3;

//Set the chapter to be displayed (often used to display the first chapter).
control.setChapter = function( number ) {
    
    this.currentChapter = number;
    
    $(".chapter").hide().eq( this.currentChapter ).show();
        
    if ( this.currentChapter === 0 )
        $(".previousChapter").hide();
    else
        $(".previousChapter").show();


    if ( this.currentChapter === this.totalChapters-1 ) 
        $(".nextChapter").hide();
    else
        $(".nextChapter").show();
     
};

//display the previous chapter if it exists
control.previousChapter = function() {
    
    if( this.currentChapter > 0 ) {
        
    	var currentChapter = this.currentChapter;    	
        $(".chapter").eq( this.currentChapter ).fadeOut(function() {
        	$(".chapter").eq( currentChapter - 1 ).fadeIn();
        });  
        
        this.currentChapter--;
        
        if ( this.currentChapter === 0 )
            $(".previousChapter").hide();
        
        $(".nextChapter").show();
    }
        
};

control.nextChapter = function() {

    if ( this.currentChapter < this.totalChapters ) {

    	var currentChapter = this.currentChapter; 
        $(".chapter").eq( this.currentChapter ).fadeOut( function() {
            
            $(".chapter").eq(currentChapter+1 ).fadeIn();   
        });
        
        this.currentChapter++;

        if ( this.currentChapter === this.totalChapters-1 )
            $(".nextChapter").hide();

        $(".previousChapter").show();
    }

};

control.editSettings = function () {
	
    $("#disclaimer").slideUp();
    
    $("#story").slideUp(1000, function() { 
        
        $("#options").slideDown(1000);
        
        $("#create").show();
        $("#edit").hide();    
    });

};

//createStory
control.createStory = function () {
	
	//Only if the form is valid, do we create a story
    if ( form.validate() ) {
    	
        //hide the disclaimer
        $("#disclaimer").slideUp();
        
        
        var whatToHide = $("#story");
        
        if ( $("#options").is(":visible") )
            whatToHide = $("#options");
        

        // Hide either the story or the form, 
        // And then generate the new story and finally reveal it.
        whatToHide.slideUp( 1000, function() {

            story.generate( form.numberOfCharacters );

            $("#story").slideDown( 1500 );

            $("#edit").show();
            $("#create").text("Create New Story");

            control.currentChapter = 0;
            control.setChapter( control.currentChapter );

        });
    }
    
};

//Registers all the control events for JQuery
control.initialize = function() {
	
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
