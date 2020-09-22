<html>
<head>
	<title>Braverbs</title>
	<link rel="stylesheet" href="css/verbs.css">
	<link rel="icon" type="image/png" href="images/bravifav.png">
	<script src="js/jquery-1.11.0.min.js"></script>
	<script src="js/main.js"></script>
	<script src="js/custom/references.js"></script>
	<script src="js/custom/ui.js"></script>
	<script src="js/custom/controls.js"></script>

	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-51638186-1', 'bravi.com.br');
	  ga('send', 'pageview');

	</script>
</head>
<body>
	<header class="blackBox">
		<img src="images/braverbs.png" id="logo"/>
		<div id="menu">
			<a href="#" id="verbList"><span class="menuIcon"></span><div>Verb List</div></a>
			<a href="#" id="round"><span class="menuIcon r1"></span><div>Round</div></a>
			<a href="#" id="about"><span class="menuIcon"></span><div>About</div></a>
			<a href="https://github.com/gabrielsiedler/Braverbs" id="github" target="_blank"><span class="menuIcon"></span><div>Github</div></a>
		</div>
	</header>
	<div id="gap">
		<div id="subMenu">
			<div id="rounds">
				<a href="#" id="r1" class="active"><span class="roundIcon"></span>Round<div>[1~50]</div></a>
				<a href="#" id="r2"><span class="roundIcon"></span>Round<div>[51~100]</div></a>
				<a href="#" id="r3"><span class="roundIcon"></span>Round<div>[101~150]</div></a>
				<a href="#" id="r4"><span class="roundIcon"></span>Round<div>[151~200]</div></a>
				<a href="#" id="r5"><span class="roundIcon"></span>Round<div>[1~100]</div></a>
				<a href="#" id="r6"><span class="roundIcon"></span>Round<div>[101~200]</div></a>
				<a href="#" id="r7"><span class="roundIcon"></span>Round<div>[1~200]</div></a>
			</div>
			<div id="abouts">
				<div>
					<div>
						<img src="images/gabriel.png"/>
						<img src="images/pamela.png"/>
					</div>
					<div id="shortcuts">
						<div>Shortcuts:</div>
						<div>SPACE: Repeat voice</div>
						<div>ALT: Show meaning</div>
						<div>ENTER: Go to next mode/word</div>
					</div>
					<div id="description">
						<div>About</div>
						<div>This website has been developed with the single purpose of helping lazy students to automate the learning process of verb tenses.</div>
					</div>
					<div>
						<a href="http://tribalingua.wordpress.com" target="_blank"><img src="images/tribalingua.png"/></a>
						<a href="http://www.bravisoftware.com" target="_blank"><img src="images/bravi.png"/></a>
					</div>
				</div>
			</div>

		</div>
	</div>
	<div id="content">
		<div id="selectMode">
			<a id="switchLearning" class="mode-selected" title="Learning Mode">
				<img src="images/hat.png"/>
			</a>
			<a id="switchPracticing" class="mode-unselected" title="Practicing Mode">
				<img src="images/certificate.png"/>
			</a>
		</div>
		<div id="messages" class="blackBox">
			<div>word <span id="word">1</span>/<span id="totalWords">50</span></div>
			<div>score <span id="score">0</span>%</div>
			<div id="results">
				<a href="#" id="retry">Retry</a>
				<a href="#" id="retryMissed">Retry with words you missed</a>
			</div>
		</div>
		<div id="inputArea">
			<div id="learningVerb"></div>
			<div id="inputButtons">
				<a href="#" id="replay" class="blackBox"><img src="images/play.png"/></a>
				<a id="meaning" title="" class="whiteBox" href="#">?</a>
			</div>
			<div>
				<div id="command">
					<a id="cheat" title="" class="whiteBox" href="#"><img src="images/thumbsdown.png"/></a>
					<div></div>
				</div>
				<div id="userInput">
					<input></input>
				</div>
			</div>
		</div>
		<div class="historyBox">
			<div>Word History</div>
			<div>
				<ul id="verbTenses">
					<li>Infinitive</li>
					<li>Past Simple</li>
					<li>Past Participle</li>
				</ul>
				<div id="wordWrapper"></div>
			</div>
		</div>
	</div>

	<div id="blackLayer">
	</div>

	<div id="verbListLayer">
		<div id="verbListArea">
			<div id="closeVerbListArea"><a href="#" id="closeVerbListButton" title="Close Verb List"><img src="images/close.png"/></a></div>

			<div id="verbTitle"><span class="menuIcon"></span>Verb List</div>
			<div id="verbListBox">
				<a href="#" id="listround1-trigger"><div class="verbRound">First Round (1 - 50)</div></a>
				<div id="listround1" class="verbListItems"></div>
				<a href="#" id="listround2-trigger"><div class="verbRound">Second Round (51 - 100)</div></a>
				<div id="listround2" class="verbListItems"></div>
				<a href="#" id="listround3-trigger"><div class="verbRound">Third Round (101 - 150)</div></a>
				<div id="listround3" class="verbListItems"></div>
				<a href="#" id="listround4-trigger"><div class="verbRound">Fourth Round (151 - 200)</div></a>
				<div id="listround4" class="verbListItems"></div>
				<a href="#" id="listround5-trigger"><div class="verbRound">Fifth Round (1 - 100)</div></a>
				<div id="listround5" class="verbListItems"></div>
				<a href="#" id="listround6-trigger"><div class="verbRound">Sixth Round (101 - 200)</div></a>
				<div id="listround6" class="verbListItems"></div>
				<a href="#" id="listround7-trigger"><div class="verbRound">Seventh Round or more (1 - 200)</div></a>
				<div id="listround7" class="verbListItems"></div>
			</div>
		</div>
	</div>

	<footer>
		<div id="information" class="whiteBox">
			<div>
			</div>
		</div>
	</footer>

</body></html>