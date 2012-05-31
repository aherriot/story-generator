/**
 * @class This class contains all the methods for generating, parsing,
 *        validating, and retrieving the form data.
 */
namespace.module('agherriot.story-generator.form',
	function(exports, require) {
	"use strict";

	var lists = require('agherriot.story-generator.lists');

	exports.extend({
		'getNumberOfCharacters' : getNumberOfCharacters,
		'getFormData': getFormData,
		'initialize' : initialize,
		'setUpEventHandlers' : setUpEventHandlers,
		'validate' : validate
	});

	/** @constant */
	var FIRST_NAME_PROMPT = "First Name";
	/** @constant */
	var NICKNAME_PROMPT = "Nickname";
	/** @constant */
	var LAST_NAME_PROMPT = "Last Name";

	/** @constant */
	var MAX_NUMBER_OF_CHARACTERS = 4;

	/** @static */
	var numberOfCharacters = 3;

	/** @static */
	var detailLevel = [ 0, 0, 0, 0 ];
	/** @static */
	var gender = [ 0, 0, 0, 0 ];
	/** @static */
	var firstname = [ "", "", "", "" ];
	/** @static */
	var nickname = [ "", "", "", "" ];
	/** @static */
	var lastname = [ "", "", "", "" ];

	/** @static */
	var shyness = [ 5, 5, 5, 5 ];
	/** @static */
	var selfishness = [ 5, 5, 5, 5 ];
	/** @static */
	var relations = [ [ -1, 5, 5, 5 ], [ 5, -1, 5, 5 ],
			[ 5, 5, -1, 5 ], [ 5, 5, 5, -1 ] ];

	//returns the number of characters
	function getNumberOfCharacters() {
		return numberOfCharacters;
	}
	
	function getFormData() {
		return {
			'numberOfCharacters': numberOfCharacters,
			'detailLevel': detailLevel,
			'gender': gender,
			'firstname': firstname,
			'nickname': nickname,
			'lastname': lastname,
			'shyness': shyness,
			'selfishness': selfishness,
			'relations': relations		
		};
	}
	
	

	/**
	 * Generates html for a select dropdown menu.
	 * 
	 * @param {String}
	 *            name The name of the select HTML element.
	 * @param {int}
	 *            maxNumber The largest number of the drop down
	 *            box.
	 */
	function generateSelectText(name, maxNumber) {

		var selectText = '<select name="' + name + '">\n';

		for (var j = 0; j <= maxNumber; j++) {

			if (j === Math.floor(maxNumber / 2)) {
				selectText += '\t<option value="' + j +
					'" selected="selected">' + lists.numberName(j) +
					'</option>\n';
			} else {
				selectText += '\t<option value="' + j + '" >' +
					lists.numberName(j) + '</option>\n';
			}
		}

		return selectText + '</select>\n';

	}

	/**
	 * Generates text for a like HTML input.
	 * 
	 * @param {int}
	 *            characterIndex The index number for the
	 *            character.
	 */
	function generateLikeRatingText(characterIndex) {

		var ratingText = "";

		for (var i = 0; i < MAX_NUMBER_OF_CHARACTERS; i++) {

			if (i !== characterIndex) {
				ratingText += '<div class="like' + i +
					'" >How much does ' +
					'<span class="name' + characterIndex +
					'" >' + getFirstName(characterIndex) +
					'</span>' + ' like <span class="name' +
					i + '" >' + getFirstName(i) +
					'</span>: ' +
					generateSelectText("like" + i, 10) +
					'<br /></div>';
			}
		}

		return ratingText;
	}

	/**
	 * Get a string of the entire character name.
	 * 
	 * @param {int}
	 *            characterIndex The index of the character in
	 *            question.
	 */
	function getFullName(characterIndex) {

		var textBox = $("input[name=firstname]").eq(
				characterIndex);
		var textBoxValue = textBox.val();
		var name = textBoxValue;

		// If not name has been defined, return default name for
		// character
		if (textBoxValue === FIRST_NAME_PROMPT || 
				textBoxValue === "" || 
				textBoxValue === undefined)

			return "Character " + lists.numberName(characterIndex + 1);

		textBox = textBox.next();
		textBoxValue = textBox.val();

		// If only the first name is defined, return just the
		// first name
		if (textBoxValue !== NICKNAME_PROMPT && textBoxValue !== "")
			name += ' (' + textBoxValue + ')';

		textBox = textBox.next();
		textBoxValue = textBox.val();

		// If the last name is not defined, return the first +
		// nickname
		if (textBoxValue === LAST_NAME_PROMPT || textBoxValue === "")
			return name;
		else
			// Otherwise return the whole name
			return name + ' ' + textBoxValue;
	}

	/**
	 * Returns the first name of the character
	 * 
	 * @param {int}
	 *            characterIndex The index of the character in
	 *            question.
	 */
	function getFirstName(characterIndex) {

		var name = $("input[name=firstname]")
				.eq(characterIndex).val();

		if (name === FIRST_NAME_PROMPT || name === "" || name === undefined)
			return "Character " + lists.numberName(characterIndex + 1);
		else
			return name;
	}

	/**
	 * Generates the text to edit the character in the form.
	 * 
	 * @param {int}
	 *            number The index of the character in question.
	 */
	function generateCharacterFormText(number) {

		return '<div class="character">' +
			'<input type="hidden" name="characterNumber' +
			number +
			'"' +
			'class="characterNumber" value="' +
			number +
			'" />' +
			'<hr />' +
			'<h3> Character ' +
			lists.numberName(number + 1) +
			'</h3>' +
			
			'<input type="radio" name="detailLevel' +
			number +
			'" value="0"' +
			'class="detailLevel" checked="checked"/> Totally Random' +
			
			'<input type="radio" name="detailLevel' +
			number +
			'" value="1"' +
			'class="detailLevel"/> Choose Name' +
			
			'<input type="radio" name="detailLevel' +
			number +
			'" value="2"' +
			'class="detailLevel" /> Choose Name and Personality' +
			
			'<br />' +
			'<br />' +
			'<div class="detailLevel1">' +
			'<input type="radio" name="gender' +
			number +
			'" value="0"' +
			'class="gender" checked="checked"/> Male' +
			
			'<input type="radio" name="gender' +
			number +
			'" value="1"' +
			'class="gender" /> Female' +
			'<br />' +
			
			'<input type="text" size="10" name="firstname" />' +
			'<input type="text" size="10" name="nickname" />' +
			'<input type="text" size="10" name="lastname" />' +
			'<br /> <br /> ' +
			
			'</div>' +
			'<div class="detailLevel2">' +
			'Shyness:' +
			generateSelectText("shyness", 10) +
			
			'&nbsp;&nbsp; Selfishness: ' +
			generateSelectText("selfishness", 10) +
			
			'<br />' +
			generateLikeRatingText(number) +
			'</div><br />' +
			
			'</div>';
	}

	/**
	 * Sets the prompt for the name text boxes if they are left
	 * empty.
	 * 
	 * @param {String}
	 *            textBoxName The name of the textbox.
	 * @param {String}
	 *            promptString The text to be filled in.
	 */
	function setTextBoxPromptEvent(textBoxName, promptString) {

		$("input[type=text][name=" + textBoxName + "]").blur(
				function() {

					// alert("test");

					if ($(this).val() === "") {
						$(this).val(promptString);

						// if we have defined a name for the
						// character, update it throughout form
					} else if ($(this).val() !== promptString) {

						var characterNumber = $(this).parent()
								.siblings(".characterNumber")
								.val();

						$(this).parent().siblings().eq(2).text(
								getFullName(characterNumber));

						$(".name" + characterNumber).text(
								getFirstName(characterNumber));

					}

				}).focus(function() {
			if ($(this).val() === promptString)
				$(this).val("");
		});
	}

	/**
	 * Check the form for errors and store the data in the local
	 * variables.
	 * 
	 * @returns Returns true if there are no errors in the form
	 *          data.
	 */
	function validate() {

		for (var i = 0; i < MAX_NUMBER_OF_CHARACTERS; i++) {

			detailLevel[i] = parseInt($(
					"input[name=detailLevel" + i + "]:checked")
					.val(), 10);

			gender[i] = parseInt($(
					"input[name=gender" + i + "]:checked")
					.val(), 10);
			firstname[i] = $("input[name=firstname]").eq(i)
					.val();
			nickname[i] = $("input[name=nickname]").eq(i).val();
			lastname[i] = $("input[name=lastname]").eq(i).val();

			shyness[i] = parseInt($("select[name=shyness]").eq(
					i).val(), 10);

			selfishness[i] = parseInt($(
					"select[name=selfishness]").eq(i).val(), 10);

			for (var j = 0; j < MAX_NUMBER_OF_CHARACTERS - 1; j++) {

				if (i < j) {

					relations[i][j] = parseInt($(
							"select[name=like" + j + "]").eq(i)
							.val(), 10);

				} else if (i > j) {

					relations[i][j] = parseInt($(
							"select[name=like" + j + "]").eq(
							i - 1).val(), 10);

				} else {

					relations[i][j] = -1;
				}
			}

		}

		return true;
	}

	/**
	 * Set the default values for variables and hides parts of
	 * the form.
	 */
	function initialize() {

		for (var i = MAX_NUMBER_OF_CHARACTERS - 1; i >= 0; i--) {

			$("#numberOfCharacters").after(
					generateCharacterFormText(i));

		}

		$(".detailLevel1").hide();
		$(".detailLevel2").hide();

		$(".character:eq(3)").hide();
		$(".like3").hide();

		$("#options").hide();
		$("#story").hide();
		$("#previous").hide();

		$("input[type=text][name=firstname]").val(
				FIRST_NAME_PROMPT);
		$("input[type=text][name=nickname]").val(
				NICKNAME_PROMPT);
		$("input[type=text][name=lastname]").val(
				LAST_NAME_PROMPT);
	}

	/**
	 * Sets up the events for when different form elements are
	 * changed.
	 */
	function setUpEventHandlers() {

		/**
		 * @inner Event for when a level of detail radio button
		 *        is changed.
		 */
		$(".detailLevel").change(function(event) {

			var detailLevel = parseInt($(this).val(), 10);
			if (detailLevel === 0) {

				$(this).siblings(".detailLevel1").slideUp();
				$(this).siblings(".detailLevel2").slideUp();

			} else if (detailLevel === 1) {

				$(this).siblings(".detailLevel1").slideDown();
				$(this).siblings(".detailLevel2").slideUp();

			} else if (detailLevel === 2) {

				$(this).siblings(".detailLevel1").slideDown();
				$(this).siblings(".detailLevel2").slideDown();

			}

		});

		/**
		 * @inner Event for when the number of characters
		 *        changes
		 */
		$("select[name=numberOfCharacters]").change(function(event) {

			numberOfCharacters = parseInt($(this).val(), 10);

			if (numberOfCharacters === 2) {

				$(".character:eq(2)").slideUp();
				$(".character:eq(3)").slideUp();

				$(".like2").slideUp(function() {
					$(this).hide();
				});

				$(".like3").slideUp(function() {
					$(this).hide();
				});
			} else if (numberOfCharacters === 3) {

				$(".character:eq(2)")
						.slideDown();
				$(".character:eq(3)").slideUp();
				$(".like2").slideDown();
				$(".like3").slideUp(function() {
					$(this).hide();
				});

			} else if (numberOfCharacters === 4) {

				$(".character:eq(2)")
						.slideDown();
				$(".character:eq(3)")
						.slideDown();
				$(".like2").slideDown();
				$(".like3").slideDown();
			}
		});

		setTextBoxPromptEvent("firstname", FIRST_NAME_PROMPT);
		setTextBoxPromptEvent("nickname", NICKNAME_PROMPT);
		setTextBoxPromptEvent("lastname", LAST_NAME_PROMPT);
	}
});