/*********************************************************
/// This monster is the game logic for the game flipping
// Also contains the end game controlling function
/********************************************************/

	// declar the game vars ==================================================================

			var card1flipped = false,
			 	card2flipped = false,
			  	card3flipped = false,
			  	card4flipped = false,
			  	card5flipped = false,
			  	card6flipped = false,
			  	card7flipped = false,
			  	card8flipped = false,
			  	card9flipped = false;
			  	card10flipped = false,
			  	card11flipped = false,
			  	card12flipped = false;

			var match1 = false,
				match2 = false,
				match3 = false,
				match4 = false,
				match5 = false,
				match6 = false;

			var touchCount = 0;
			var fadeMatch = 1;
			var fadeTime = 1;
			var hangTime = .5;
			var gamePlaying = false;

//$(document).ready(function(){

			//ASSIGN THE HAMMER TOUCH EVENTS ===============================================

			var card1Flip = $("#card1").hammer();
			var card2Flip = $("#card2").hammer();
			var card3Flip = $("#card3").hammer();
			var card4Flip = $("#card4").hammer();
			var card5Flip = $("#card5").hammer();
			var card6Flip = $("#card6").hammer();
			var card7Flip = $("#card7").hammer();
			var card8Flip = $("#card8").hammer();
			var card9Flip = $("#card9").hammer();
			var card10Flip = $("#card10").hammer();
			var card11Flip = $("#card11").hammer();
			var card12Flip = $("#card12").hammer();


			card1Flip.on("touch", function(ev) {
				
				++ touchCount;
				flipbackAll()

			   	if(card1flipped == false){
			   		card1flipped = true;
				    $(this).addClass('image1');
					$(this).addClass('flip');

					//check of made the pair ==// ====================================
				   	if(card2flipped == true){
				   		match1 = true
				   		txtMatched();
				   		console.log("pair1 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			   	}
			});

			card2Flip.on("touch", function(ev) {
				++ touchCount;
				flipbackAll()

			   	if(card2flipped == false){
			   		card2flipped = true;
				    $(this).addClass('image1');
					$(this).addClass('flip');

					//check of made the pair ==// ====================================
				   	if(card1flipped == true){
				   		match1 = true
				   		txtMatched();
				   	    console.log("pair1 matched")
				   	    gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			   	}

			});




			card3Flip.on("touch", function(ev) {
				++ touchCount;
				flipbackAll()

			   	if(card3flipped == false){
			   		card3flipped = true;
				    $(this).addClass('image2');
					$(this).addClass('flip');
				   	
				   	//check of made the pair ==// ====================================
				   	if(card4flipped == true){
				   		match2 = true
				   		txtMatched();
				   		console.log("pair2 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			   	}

			});


			card4Flip.on("touch", function(ev) {

				++ touchCount;
				flipbackAll()

			   	if(card4flipped == false){
			   		card4flipped = true;
				    $(this).addClass('image2');
					$(this).addClass('flip');
			   	
				   	//check of made the pair ==// ====================================
				   	if(card3flipped == true){
				   		match2 = true
				   		txtMatched();
				   		console.log("pair2 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			   	}

			});



			card5Flip.on("touch", function(ev) {
				++ touchCount;
				flipbackAll()

			   	if(card5flipped == false){
			   		card5flipped = true;
				    $(this).addClass('image3');
					$(this).addClass('flip');
			   	
				   	//check of made the pair ==// ====================================
				   	if(card6flipped == true){
				   		match3 = true
				   		txtMatched();
				   		console.log("pair3 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			   	}
			});

			card6Flip.on("touch", function(ev) {
				++ touchCount;
				flipbackAll()

			   	if(card6flipped == false){
			   		card6flipped = true;
				    $(this).addClass('image3');
					$(this).addClass('flip');
			   		
			   		//check of made the pair ==// ====================================
				   	if(card5flipped == true){
				   		match3 = true
				   		txtMatched();
				   		console.log("pair3 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			   	}

			});



			card7Flip.on("touch", function(ev) {

				++ touchCount;
				flipbackAll()

			   	if(card7flipped == false){
			   		card7flipped = true;
				    $(this).addClass('image4');
					$(this).addClass('flip');
				  
				    //check of made the pair ==// ====================================
				   	if(card8flipped == true){
				   		match4 = true
				   		txtMatched();
				   		console.log("pair4 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			   	}			   

			});

			card8Flip.on("touch", function(ev) {

				++ touchCount;
				flipbackAll()

			   	if(card8flipped == false){
			   		card8flipped = true;
				    $(this).addClass('image4');
					$(this).addClass('flip');
			   
				   //check of made the pair ==// ====================================
				   	if(card7flipped == true){
				   		match4 = true
				   		txtMatched();
				   		console.log("pair4 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			   	}			 

			});



			card9Flip.on("touch", function(ev) {

				++ touchCount;
				flipbackAll()

			   	if(card9flipped == false){
			   		card9flipped = true;
				    $(this).addClass('image5');
					$(this).addClass('flip');
			   		
			   		//check of made the pair ==// ====================================
				   	if(card10flipped == true){
				   		match5 = true
				   		txtMatched();
				   		console.log("pair5 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			   	}

			});

			card10Flip.on("touch", function(ev) {

				++ touchCount;
				flipbackAll()
			   	console.log("hit " + card10flipped)
			   	if(card10flipped == false){
			   		
				    $(this).addClass('image5');
					$(this).addClass('flip');
					card10flipped = true;
			   		
			   		//check of made the pair ==// ====================================
				   	if(card9flipped == true){
				   		match5 = true
				   		txtMatched();
				   		console.log("pair5 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			    }

			});



			card11Flip.on("touch", function(ev) {

				++ touchCount;
				flipbackAll()

			   	if(card11flipped == false){
			   		card11flipped = true;
				    $(this).addClass('image6');
					$(this).addClass('flip');
			   		
			   		//check of made the pair ==// ====================================
				   	if(card12flipped == true){
				   		match6 = true
				   		txtMatched();
				   		console.log("pair6 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}
			   	}
			   
			});

			card12Flip.on("touch", function(ev) {

				++ touchCount;
				flipbackAll()

			   	if(card12flipped == false){
			   		card12flipped = true;
				    $(this).addClass('image6');
					$(this).addClass('flip');
			   		
			   		//check of made the pair ==// ====================================
				   	if(card11flipped == true){
				   		match6 = true;
				   		txtMatched();
				   		console.log("pair6 matched")
				   		gameComplete()
				   	}
				   	else{
				   		// IF NOT A MATCHED WILL FLIP BACK ROUND
				   		if(touchCount == 2){
				   			TweenLite.to($(this), 0, {opacity:1, delay:hangTime, onComplete:noMatch});
				   		}
				   	}

			   	} 
  
			});

			// ============================================================================

			function checkMatch1(){
					switch(match1)
					{
					case true:
						console.log("leave pair 1")
						
						$('#card1').fadeTo(fadeTime, fadeMatch);
						$('#card2').fadeTo(fadeTime, fadeMatch);

						card1flipped = true;
						card2flipped = true;
						$('#card1').addClass('flip');
						$('#card2').addClass('flip');
					}
			}

			function checkMatch2(){
					switch(match2)
					{
					
					case true:
						console.log("leave pair 2")
						$('#card3').fadeTo(fadeTime, fadeMatch);
						$('#card4').fadeTo(fadeTime, fadeMatch);

						card3flipped = true;
						card4flipped = true;
						$('#card3').addClass('flip');
						$('#card4').addClass('flip');
					}
			}

			function checkMatch3(){
					switch(match3)
					{
					case true:
						console.log("leave pair 3")
						$('#card5').fadeTo(fadeTime, fadeMatch);
						$('#card6').fadeTo(fadeTime, fadeMatch);

						card5flipped = true;
						card6flipped = true;
						$('#card5').addClass('flip');
						$('#card6').addClass('flip');
					}
			}

			function checkMatch4(){
					switch(match4)
					{
					case true:
						console.log("leave pair 4")
						$('#card7').fadeTo(fadeTime, fadeMatch);
						$('#card8').fadeTo(fadeTime, fadeMatch);

						card7flipped = true;
						card8flipped = true;
						$('#card7').addClass('flip');
						$('#card8').addClass('flip');
					}
			}

			function checkMatch5(){
					switch(match5)
					{
					
					case true:
						console.log("leave pair 5")
						$('#card9').fadeTo(fadeTime, fadeMatch);
						$('#card10').fadeTo(fadeTime, fadeMatch);

						card9flipped = true;
						card10flipped = true;
						$('#card9').addClass('flip');
						$('#card10').addClass('flip');
					}
			}

			function checkMatch6(){
					switch(match6)
					{
					
					case true:
						console.log("leave pair 6")
						$('#card11').fadeTo(fadeTime, fadeMatch);
						$('#card12').fadeTo(fadeTime, fadeMatch);

						card11flipped = true;
						card12flipped = true;
						$('#card11').addClass('flip');
						$('#card12').addClass('flip');
					}
			}


			function flipbackAll(){
				console.log("touches " + touchCount)
				//check if this is the users touch number 3
				if (touchCount == 3){

					 touchCount = 1;

					// //Check if cards fliiped and Matched
					// // If there matches not made then flip them back
					console.log("match1 is " + match1)
					console.log("match2 is " + match2)
					console.log("match3 is " + match3)
					console.log("match4 is " + match4)
					console.log("match5 is " + match5)
					console.log("match6 is " + match6)

					$('.card1').removeClass('flip');
					$('.card2').removeClass('flip');
					$('.card3').removeClass('flip');
					$('.card4').removeClass('flip');
					$('.card5').removeClass('flip');
					$('.card6').removeClass('flip');
					$('.card7').removeClass('flip');
					$('.card8').removeClass('flip');
					$('.card9').removeClass('flip');
					$('.card10').removeClass('flip');
					$('.card11').removeClass('flip');
					$('.card12').removeClass('flip');

					card1flipped = false;
					card2flipped = false;
					card3flipped = false;
					card4flipped = false;
					card5flipped = false;
					card6flipped = false;
					card7flipped = false;
					card8flipped = false;
					card9flipped = false;
					card10flipped = false;
					card11flipped = false;
					card12flipped = false;

					checkMatch1()
					checkMatch2()
					checkMatch3()
					checkMatch4()
					checkMatch5()
					checkMatch6()		    

					console.log("flip them back check")
				}	
			}

			function noMatch(){
					$('.card1').removeClass('flip');
					$('.card2').removeClass('flip');
					$('.card3').removeClass('flip');
					$('.card4').removeClass('flip');
					$('.card5').removeClass('flip');
					$('.card6').removeClass('flip');
					$('.card7').removeClass('flip');
					$('.card8').removeClass('flip');
					$('.card9').removeClass('flip');
					$('.card10').removeClass('flip');
					$('.card11').removeClass('flip');
					$('.card12').removeClass('flip');

					card1flipped = false;
					card2flipped = false;
					card3flipped = false;
					card4flipped = false;
					card5flipped = false;
					card6flipped = false;
					card7flipped = false;
					card8flipped = false;
					card9flipped = false;
					card10flipped = false;
					card11flipped = false;
					card12flipped = false;

					checkMatch1()
					checkMatch2()
					checkMatch3()
					checkMatch4()
					checkMatch5()
					checkMatch6()	

					console.log("NO MATCH!")
			}


			//=================================================================================
			// THE ON COMPLETE GAME FUNCTION //================================================
			//=================================================================================

			function gameComplete(){
				if ( (match1 == true)&& (match2 == true)&& (match3 == true)&& (match4 == true)&& (match5 == true)&& (match6 == true)){
					console.log("GAME COMPLETE")
					
					clearInterval(timerCount);

					playerEnd()

					// DISPLAY THE WIN OR WELL DONE MSG ACCORDING TO THE TIME COMPETING with DELAY
					TweenLite.to($('#container'), 0, {opacity:1, delay:.5, onComplete:txtWin });
					// restart the flips ready for next game
					TweenLite.to($('#container'), 0, {opacity:1, delay:2, onComplete:restartFlips });

					match1 = false;
					match2 = false;
					match3 = false;
					match4 = false;
					match5 = false;
					match6 = false;


				} 
			}

//});

//=================================================================================
// CHEAT FUNCTION TO SKIP THE GAME //==============================================
//=================================================================================

function cheatGame(){
					
					//stop the timer
					clearInterval(timerCount);

					// DISPLAY THE WIN OR WELL DONE MSG ACCORDING TO THE TIME COMPETING with DELAY
					TweenLite.to($('#container'), 0, {opacity:1, delay:.5, onComplete:txtWin });
					
					// restart the flips ready for next game
					TweenLite.to($('#container'), 0, {opacity:1, delay:2, onComplete:restartFlips });
					
					//flipbackAll()
					match1 = false;
					match2 = false;
					match3 = false;
					match4 = false;
					match5 = false;
					match6 = false;
					touchCount = 3;

					//hide btn
					var cheat = document.getElementById("cheat");
					cheat.style.display = "none";

					console.log("Game Cheated / Ended")

					playerEnd()
}


function restartFlips(){

					//MIXUP THE CARDS FOR NEXT GO
					randomizeList() // MIX UP THE LIST

					console.log("restart the flip cards");

					touchCount = 0;

					$('.card1').removeClass('flip');
					$('.card2').removeClass('flip');
					$('.card3').removeClass('flip');
					$('.card4').removeClass('flip');
					$('.card5').removeClass('flip');
					$('.card6').removeClass('flip');
					$('.card7').removeClass('flip');
					$('.card8').removeClass('flip');
					$('.card9').removeClass('flip');
					$('.card10').removeClass('flip');
					$('.card11').removeClass('flip');
					$('.card12').removeClass('flip');

					card1flipped = false;
					card2flipped = false;
					card3flipped = false;
					card4flipped = false;
					card5flipped = false;
					card6flipped = false;
					card7flipped = false;
					card8flipped = false;
					card9flipped = false;
					card10flipped = false;
					card11flipped = false;
					card12flipped = false;

					match1 = false;
					match2 = false;
					match3 = false;
					match4 = false;
					match5 = false;
					match6 = false;

					console.log("match1 is " + match1)
					console.log("match2 is " + match2)
					console.log("match3 is " + match3)
					console.log("match4 is " + match4)
					console.log("match5 is " + match5)
					console.log("match6 is " + match6)
				
}


//=================================================================================
// START THE FLIP LOGIC //=========================================================
//=================================================================================

// CALL THE RANDOM FUNCTION // ===
randomizeList() // MIX UP THE LIST
appInit()

console.log("flip logic loaded.. ")
// STOP THE IPAD AOO FROM SCROLLING ///
$(document).bind('touchmove', false);

