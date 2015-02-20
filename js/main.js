var Step = {
	Infinitive: 0,
	Simple: 1,
	Participle: 2
};

var Rounds = {
	One: 1,
	Two: 2,
	Three: 3,
	Four: 4,
	Five: 5,
	Six: 6,
	Seven: 7
};

var Tabs = {
	None: 0,
	About: 1,
	Round: 2,
	VerbsList: 3
}

var Mode = {
	Learning: 0,
	Practicing: 1
}

$(function(){
	verbBucket = new Array();
	loadVerbs(verbBucket);
});

References = null;
webpageInterface = null;
verbsControls = null;

function afterLoad()
{
	References = new ElementsReferences();
	userInterface = new UserInterface();
	controls = new Controls();
	controls.startControls();
}
