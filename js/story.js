//Andrew Herriot, 2011


var story = {};

//Array containing the character objects
story.characters = new Array();

story.generateCharacters = function() {
	
	for ( var i = 0; i < form.numberOfCharacters; i++ ) {
			
		this.characters[i] = new Character( i, form.detailLevel[i], 
			form.gender[i], form.firstname[i], form.nickname[i], 
			form.lastname[i], form.shyness[i], form.selfishness[i],
			form.relations[i]);
	}	
}

//Pick the setting for the story
story.generateSetting = function() {
	this.setting = new SettingObject();
}

story.generate = function() {

    this.generateCharacters();
    
    this.generateSetting();
    
    $("#storyTitle").text("The Adventure of " + this.characters[0].firstname
    		+ " and " + this.characters[1].firstname );

    $(".chapterTitle").eq(0).text( this.characters[0].firstname + " at the " 
    		+ this.setting.location );
    

    //$(".chapterText").html("<p>"+ this.setting.initialDescription() +"</p>");
    
    $(".chapterText").eq(0).html("<p>"+ story.characters[0].toString() +"</p>");
    $(".chapterText").eq(1).html("<p>2</p>");
    $(".chapterText").eq(2).html("<p>3</p>");


}

