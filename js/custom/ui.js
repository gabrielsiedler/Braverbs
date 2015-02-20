function UserInterface()
{
	this.meaning = null;

	this.clearWord = function()	{
		References.word.text(1);
	};

	this.incrementWord = function()	{
		References.word.text(parseInt(References.word.text()) + 1); 
	};

	this.clearScore = function() {
		References.score.text(0);
	};

	this.setScore = function(wordScore) {
		References.score.text(wordScore);
	};

	this.changeCurrentWord = function(newWord) {
		References.currentWord.text(newWord);
	};

	this.changeVerbTense = function(tense) {
		vTense = '';

		switch(tense) {
			case Step.Infinitive:
				vTense = 'Infinitive:';
				break;
			case Step.Simple:
				vTense = 'Past Simple:';
				break;
			case Step.Participle:
				vTense = 'Past Participle:';
				break;
		}

		References.verbTense.text(vTense);
	};

	this.clearUserInput = function() {
		References.userInput.val('');
	};

	this.getUserInput = function() {
		return References.userInput.val().toLowerCase();
	};

	this.setUserInput = function(newValue) {
		References.userInput.val(newValue);
	};

	this.userInputIsNotEmpty = function() {
		if(this.getUserInput().length === 0)
			return false;

		return true;
	};

	this.addVerbInVerbList = function(verb, wordScore, wordHistory, mode) {
		titleSimple = '';
		titleParticiple = '';
		titleInfinitive = '';

		classInfinitive = '';
		if(mode != Mode.Learning) {
			if(wordScore[0] == 1) {
				classInfinitive = ' class="correct"';
			} else {
				classInfinitive = ' class="wrong"';
				titleInfinitive = ' title="You typed: '+wordHistory[0]+'"';
			}
		}

		if(wordScore[1] == 1){
			classSimple = ' class="correct"';
		}
		else{
			classSimple = ' class="wrong"';
			titleSimple = ' title="You typed: '+wordHistory[1]+'"';
		}

		if(wordScore[2] == 1){
			classParticiple = ' class="correct"';
		}
		else{
			classParticiple = ' class="wrong"';
			titleParticiple = ' title="You typed: '+wordHistory[2]+'"';
		}

		newTag = '<ul><li'+classInfinitive+titleInfinitive+'>'+verb.infinitive+'</li><li'+classSimple+titleSimple+'>'+verb.simple+'</li><li'+classParticiple+titleParticiple+'>'+verb.participle+'</li></ul>';
		References.wordHistoryList.prepend(newTag);
	};

	this.resetWordCounter = function(vectorSize) {
		References.word.text(0);
		References.totalWords.text(vectorSize);
	};

	this.resetScore = function(vectorSize) {
		References.score.text(0);
	};

	this.resetWordHistory = function() {
		References.wordHistoryList.html('');
	};

	this.showDinamic = function() {
		References.dinamic.slideDown(1000);
	};

	this.hideDinamic = function() {
		References.dinamic.slideUp(1000);
	};

	this.showResults = function() {
		References.results.slideDown(1000);
	};

	this.hideResults = function() {
		References.results.slideUp(1000);
	};

	this.enableRetryMissed = function() {
		References.retryMissed.removeClass('disableRetryMissed');
		References.retryMissed.removeAttr('href');
	};

	this.disableRetryMissed = function() {
		References.retryMissed.addClass('disableRetryMissed');
		References.retryMissed.attr('href','#');
	};

	this.showSubMenu = function() {
		References.subMenu.slideDown(200);
	};

	this.showAbout = function() {
		References.subMenuRounds.hide();
		References.subMenuAbout.show(200);
		References.subMenu.slideDown(300);
	};

	this.showRound = function() {
		References.subMenuAbout.hide();
		References.subMenuRounds.show(200);
		References.subMenu.slideDown(300);
	};

	this.hideSubMenu = function() {
		References.subMenu.slideUp(200);
	};

	this.quickHideSubMenu = function() {
		References.subMenu.slideUp(100);
	};

	this.showMeaning = function(content, x, y) {
		if(this.meaning === null)
			this.meaning = this.buildMeaning(content);

		this.showInformation(this.meaning,x,y);
	};

	this.showCheat = function()	{
		References.cheat.show();
	};

	this.hideCheat = function()	{
		References.cheat.hide();
	};

	this.showInformation = function(content, x, y) {
		References.information.css('left',(x+10));
		References.information.css('top',(y+10));
		References.informationText.html(content);
		References.information.fadeIn(200);		
	};

	this.hideInformation = function() {
		References.information.fadeOut(200);
	};

	this.buildMeaning = function(meaningList) {
		var ulTag = '<ul>';
		for (meaning in meaningList)
			ulTag += '<li>'+meaningList[meaning]+'</li>';

		ulTag += '</ul>';

		return ulTag;
	};

	this.resetMeaning = function() {
		this.meaning = null;
	};

	this.changeRoundInMenu = function(round) {
		References.roundIcon.removeClass('r1 r2 r3 r4 r5 r6 r7');
		
		switch(round) {
			case Rounds.One:
				References.roundIcon.addClass('r1');
				break;
			case Rounds.Two:
				References.roundIcon.addClass('r2');
				break;
			case Rounds.Three:
				References.roundIcon.addClass('r3');
				break;
			case Rounds.Four:
				References.roundIcon.addClass('r4');
				break;
			case Rounds.Five:
				References.roundIcon.addClass('r5');
				break;
			case Rounds.Six:
				References.roundIcon.addClass('r6');
				break;
			case Rounds.Seven:
				References.roundIcon.addClass('r7');
				break;
		}
	};

	this.switchLearning = function() {
		this.learningSelection('enable');
		this.practicingSelection('disable');
	};

	this.switchPracticing = function() {
		this.learningSelection('disable');
		this.practicingSelection('enable');
	};

	this.learningSelection = function(selection) {
		if(selection === 'enable') {
			References.switchLearning.addClass('mode-selected');
			References.switchLearning.removeClass('mode-unselected');
		}
		else {
			References.switchLearning.removeClass('mode-selected');
			References.switchLearning.addClass('mode-unselected');
		}
	};

	this.practicingSelection = function(selection) {
		if(selection === 'enable') {
			References.switchPracticing.addClass('mode-selected');
			References.switchPracticing.removeClass('mode-unselected');
		}
		else {
			References.switchPracticing.removeClass('mode-selected');
			References.switchPracticing.addClass('mode-unselected');
		}
	};

	this.showLearningVerb = function() {
		References.learningVerb.show();
		this.makeButtonsSmall();
	};

	this.hideLearningVerb = function() {
		References.learningVerb.hide();
		this.makeButtonsBig();
	};

	this.setLearningVerb = function(word) {
		References.learningVerb.text(word);
	};

	this.makeButtonsSmall = function() {
		References.meaning.addClass('relativeMeaning');
		References.replay.addClass('smallPlay');
	};

	this.makeButtonsBig = function() {
		References.meaning.removeClass('relativeMeaning');
		References.replay.removeClass('smallPlay');
	};

	this.openList = function(round) {
		var referenceList = [References.listRound1,References.listRound2,References.listRound3,References.listRound4,References.listRound5,References.listRound6,References.listRound7];
		var toRemove = null;
		switch(round) {
			case 1:
				this.opencloseList(References.listRound1);
				toRemove = References.listRound1;
				break;
			case 2:
				this.opencloseList(References.listRound2);
				toRemove = References.listRound2;
				break;
			case 3:
				this.opencloseList(References.listRound3);
				toRemove = References.listRound3;
				break;
			case 4:
				this.opencloseList(References.listRound4);
				toRemove = References.listRound4;
				break;
			case 5:
				this.opencloseList(References.listRound5);
				toRemove = References.listRound5;
				break;
			case 6:
				this.opencloseList(References.listRound6);
				toRemove = References.listRound6;
				break;
			case 7:
				this.opencloseList(References.listRound7);
				toRemove = References.listRound7;
				break;
		}

		if(toRemove)
			removeItem(toRemove,referenceList);

		this.closeMass(referenceList);
	};

	this.closeMass = function(referenceList) {
		for(var i =0; i<6; i++)
			referenceList[i].hide();
	};

	this.opencloseList = function(reference) {
		if(reference.is(':visible'))
			reference.fadeOut(200);
		else
			reference.fadeIn(200);
	};
}

//This prototype function allows you to remove even array from array
removeItem = function(x, list) { 
    var i;
    for(i in list){
        if(list[i] === x)
            list.splice(i,1);
    }
};