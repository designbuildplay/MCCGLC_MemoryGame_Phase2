// Declar the ID Tags ///////
var cardList = document.getElementById("cardlist");
var txtMatch = document.getElementById("txt_matched");
var txtWinner = document.getElementById("txt_winner");
var txtLooser = document.getElementById("txt_looser");
var screenLeader = document.getElementById("screen_leader");
var screenStart = document.getElementById("screen_start");
var screenUser = document.getElementById("screen_user");
var screenWait = document.getElementById("screen_wait");

var userWait = 4;

// TOUCH EVENT TO START THE GAME // ===============================================
var startTouch = $(screenStart).hammer();

startTouch.on("touch", function(ev) {
		//USER STARTS THE GAME!! // ====
		showUser();	
		console.log("START IT")
});


function appInit(){
		//HIDE THE GAME INITALLY
		cardList.style.display = "none";
		cardList.style.opacity = 0;

		//showStart()
		startGame()
}

			// SPRITES GRAPHICS //////////////=================================================

			function txtMatched(){
				txtMatch.style.opacity = 1;
 				TweenLite.to(txtMatch, .5, {opacity:0, delay:.8});
			}

			function txtWin(){
				txtWinner.style.display = "inline";
				TweenLite.to(cardList, 1, {opacity:0 });
				TweenLite.to(txtWinner, .5, {opacity:1, delay:.8, onComplete: showLeader});
			}

			function txtLose(){
				txtLooser.style.display = "inline";
				TweenLite.to(cardList, 1, {opacity:0 });
				TweenLite.to(txtLooser, .5, {opacity:1, delay:.8, onComplete: showLeader});
			}
			

			function showStart(){
				screenStart.style.display = "inline";
				TweenLite.to(screenStart, 1, {opacity:1, delay:1});
			}

			function showUser(){
				screenStart.style.display = "inline";
				screenUser.style.display = "inline";
				screenWait.style.display = "inline";

				TweenLite.to(screenStart, .5, {opacity:0});
				TweenLite.to(screenUser, 1, {opacity:1, delay:.8});
				
				TweenLite.to(screenUser, .5, {opacity:0, delay:userWait});
				TweenLite.to(screenWait, 1, {opacity:1, delay:(userWait + .7), onComplete:checkPlayers});

			}

			function checkPlayers(){
				console.log("CHECK FOR PLAYERS")
				startGame()
			}

			function startGame(){
				screenStart.style.display = "none";
				cardList.style.display = "inline";
				TweenLite.to(screenWait, .5, {opacity:0});
				TweenLite.to(cardList, 1, {opacity:1, delay:.8, onComplete: countdown()}); /// STARTS TIMER ONCE COMPLETE
				
			}

		



			// LEADER BOARD FUNCTIONINITY // ==================================================

			function showLeader(){
				screenLeader.style.display = "inline";
				TweenLite.to(txtWinner, .2, {opacity:0, delay:userWait});
				TweenLite.to(txtLooser, .2, {opacity:0, delay:userWait});

				TweenLite.to(screenLeader, 1, {opacity:1,  delay:userWait});
			}

