// Andrew Herriot, 2011

/**
 * @namespace Lists
 */
namespace.module('agherriot.story-generator.lists', 
	function (exports, require) {
	"use strict";
	
	var interests = ["castle", "boat", "Australian football"];

    var positiveAdjectives = ["admirable", "adorable", "amazing", "appealing", 
         "astonishing", "astounding", "awesome", "beautiful", "brilliant", 
         "charming", "cute", "elegant", "excellent", "extraordinary", 
         "fabulous", "fantastic", "fine", "graceful", "great", "incredible", 
         "lovely", "magnificent", "marvellous", "neat", "nice", "outstanding", 
         "phenomenal", "pleasing", "remarkable", "sensational", "smashing", 
         "stupendous", "super", "superb", "terrific", "trustworthy", 
         "wonderful"];


    var negativeAdjectives = ["abomidable", "bad", "despicable", "detestable",
         "dirty", "disgusting", "dumb", "evil", "filthy", "foggy", "foul", 
         "fraudulent", "gross", "heinous", "indecent", "nasty", "nauseating", 
         "obnoxious", "polluted", "putrid", "shady", "smelly", "stupid", "ugly", 
         "unclean", "unsportsmanlike", "venomous", "vile", "vulgar", "wicked"];
    
    var neutralAdjectives = ["acceptable", "bland", "fine", "normal", 
         "satistfactory", "so-so"];
    
    var positiveCompareAdjectives = ["alike", "the same", "similar", "resemble",
        "match", "reminescient"];
    var negativeCompareAdjectives = ["different", "opposite", "unlike"];

    var textureAdjectives = ["rough", "slimy", "slippery", "smooth"];
    var textureNouns = [];

    var visualAdjectives = ["blue", "foggy", "red", "shinny", "tall" ];
    var visualNouns = ['styling'];

    var shapeAdjectives = ["big", "broad", "chubby", "colossal", "crooked", 
         "curved", "deep", "fat", "flat", "gigantic", "hollow", "round", 
         "square", "straight", "wiggly"];

    var audioAdjectives = [ "harsh", "loud", "quiet" ];
    var audioNouns = ["bang", "bark", "clink"];
    var audioVerbs = ["echoed", "spread", "clinked"];

    var tasteAdjectives = ["bitter", "salty", "savoury", "smooth", "sour", 
         "sugary", "sweet"];
    var tasteNouns = ["taste", "flavour"];

    var smellAdjectives = ["foul", "fragrant", "fruity", "putrid", "smoky", 
         "strong", "sweet"];
    var smellNouns = ["bakery", "cinnamon", "death", "lemon", "locker room", 
         "McDonald's"];
    
    var fashionNouns = ["styling", "look", "feel", "motif"];

    var adverbs = ["mildly", "mostly", "slightly", "somewhat", "very"];
    
    var usedWords;
    
	//Make the following symbols public:
	exports.extend({
		'interests': interests,
		'positiveAdjectives': positiveAdjectives,
		'negativeAdjectives': negativeAdjectives,
		'neutralAdjectives': neutralAdjectives,
		
		'positiveCompareAdjectives': positiveCompareAdjectives,
		'negativeCompareAdjectives': negativeCompareAdjectives,
		
		'textureAdjectives': textureAdjectives,
		'textureNouns': textureNouns,
		
		'visualAdjectives': visualAdjectives,
		'visualNouns': visualNouns,
		
		'shapeAdjectives': shapeAdjectives,
		
		'audioAdjectives': audioAdjectives,
		'audioNouns': audioNouns,
		'audioVerbs': audioVerbs,
		
		'tasteAdjectives': tasteAdjectives,
		'tasteNouns': tasteNouns,
		
		'smellAdjectives': smellAdjectives,
		'smellNouns': smellNouns,
		
		'fashionNouns': fashionNouns,
		
		'adverbs': adverbs,
		
		'usedWords': usedWords
	});

});
