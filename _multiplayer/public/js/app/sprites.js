/*********************************************************
/// Controls the screens, fading animations,
/// CHEAT Button can be enabled/disabled line 104
/********************************************************/

// Declar the ID Tags ///////
var cardList = document.getElementById("cardlist");
var txtMatch = document.getElementById("txt_matched");
var txtWinner = document.getElementById("txt_winner");
var txtLooser = document.getElementById("txt_looser");
var txtEnded = document.getElementById("txt_ended");
var screenLeader = document.getElementById("screen_leader");
var screenStart = document.getElementById("screen_start");
var screenUser = document.getElementById("screen_user");
var screenWait = document.getElementById("screen_wait");
var host = document.getElementById("host");
var replaybtn = document.getElementById("replaybtn");
var cheat = document.getElementById("cheat");
var winbar = document.getElementById("winbar");
var userWait = 4;

// TOUCH EVENT TO START THE GAME // ===============================================
var startTouch = $(screenStart).hammer();
var replayTouch = $(replaybtn).hammer();

replayTouch.on("touch", function(ev) {
		//REPLAY THE GAME!! // ====
		replayGame()

		// CALL THE RANDOM FUNCTION // ===
		randomizeList() // MIX UP THE LIST
});


startTouch.on("touch", function(ev) {
		//USER STARTS THE GAME!! // ====
		showUser();	
		console.log("START IT")

		// CALL THE RANDOM FUNCTION // ===
		randomizeList() // MIX UP THE LIST
});


function appInit(){
		//HIDE THE GAME INITALLY
		cardList.style.display = "none";
		cardList.style.opacity = 0;

		showStart()
		//startGame()
}

			
			// SPRITES GRAPHICS //////////////=================================================

			function txtMatched(){
				txtMatch.style.opacity = 1;
 				TweenLite.to(txtMatch, .5, {opacity:0, delay:.8});
			}

			function txtWin(){
				
				console.log("winner?  " + playerWinner)

				if (playerWinner == true){
					txtWinner.style.display = "inline";
					TweenLite.to(cardList, 1, {opacity:0 });
					TweenLite.to(txtWinner, .5, {opacity:1, delay:.8, onComplete: showLeader});
				}
				else if (playerWinner == "ended"){
					txtEnded.style.display = "inline";
					TweenLite.to(cardList, 1, {opacity:0 });
					TweenLite.to(txtEnded, .5, {opacity:1, delay:.8, onComplete: showLeader});
				}
				else{
					txtLooser.style.display = "inline";
					TweenLite.to(cardList, 1, {opacity:0 });
					TweenLite.to(txtLooser, .5, {opacity:1, delay:.8, onComplete: showLeader});
				}

				var clock = document.getElementById("clock");
				clock.style.display = "none";
				cheat.style.display = "none";
			}
			

			function showStart(){
				/// FORCE HIDE ALL THE END SCREENDS AND END BAR
				txtWinner.style.display = "none";
				txtLooser.style.display = "none";
				txtEnded.style.display = "none";
				txtEnded.style.display = "none";
				screenLeader.style.display = "none";
				leaderlist.style.display = "none";
				winbar.style.top = "-450px";
				screenWait.style.display = "none";

				screenStart.style.display = "inline";
				TweenLite.to(screenStart, 1, {opacity:1, delay:.3});
			}

			function showUser(){
				screenUser.style.display = "inline";
				screenWait.style.display = "inline";

				TweenLite.to(screenStart, .2, {opacity:0, onComplete:hideStrtBtn});
				TweenLite.to(screenUser, 1, {opacity:1, delay:.8});
				
				TweenLite.to(screenUser, .5, {opacity:0, delay:userWait});
				TweenLite.to(screenWait, 1, {opacity:1, delay:(userWait + .7), onComplete:checkPlayers});

				// CALL THE RANDOM FUNCTION // ===
				randomizeList() // MIX UP THE LIST
			}

			function hideStrtBtn(){
				screenStart.style.display = "none";
			}

			function checkPlayers(){

				console.log("CHECK FOR PLAYERS")
				// DEALY THE FUNC A SECOND
				screenWait.style.display = "inline";
				TweenLite.to(screenWait, 0, {opacity:1, delay:1, onComplete:playerStart});
				//playerStart()
			}

			function startGame(){
				screenStart.style.display = "none";
				cardList.style.display = "inline";
				cheat.style.display = "inline";  // ENABLES THE CHEAT BUTTON
				screenWait.style.display = "none";
				TweenLite.to(screenWait, 0, {opacity:0});
				TweenLite.to(cardList, 1, {opacity:1, delay:.8, onComplete: countdown()}); /// STARTS TIMER ONCE COMPLETE	

				// CALL THE RANDOM FUNCTION // ===
				randomizeList() // MIX UP THE LIST	
			}


			// LEADER BOARD FUNCTIONINITY // ==================================================

			function showLeader(){

				var leaderlist = document.getElementById("leaderlist");
				screenLeader.style.display = "inline";
				leaderlist.style.display = "inline";
				cardList.style.display = "none";
				screenWait.style.display = "none";
				
				TweenLite.to(txtWinner, .2, {opacity:0, delay:userWait});
				TweenLite.to(txtLooser, .2, {opacity:0, delay:userWait});
				TweenLite.to(txtEnded, .2, {opacity:0, delay:userWait});

				TweenLite.to(screenLeader, 0, {opacity:1,  delay:userWait, onComplete:showScores });
			}

			function showScores(){
				var host = document.getElementById("host");
				host.style.display = "inline";
			}

