/**************************************************
** GAME VARIABLES
**************************************************/
var localPlayer,	// Local player
	remotePlayers,	// Remote players
	playerTimes,
	playersNum,
	playaNum,
	playerID,
	setPlaya,
	playersReady,
	thisReady,
	totalSeconds,
	playerWinner,
	host,			// Host player Var
	socket;			// Socket connection


/**************************************************
** GAME INITIALISATION
**************************************************/
function init() {


	// Setup array to store game times ///
	//var gameTime = 0; //set game Timer
	playerTimes = [0,0,0,0];
	playersReady = []
	thisReady = false;
	setPlaya = false;
	playerWinner = true;
	host = false;

	// Initialise the local player
	localPlayer = new Player(playerTimes, thisReady);

	// Initialise socket connection
	 //socket = io.connect("http://192.168.168.100", {port: 8000, transports: ["websocket"]});
	socket = io.connect("http://localhost", {port: 8000, transports: ["websocket"]}); /// LOCALHOST

	// Initialise remote players array
	remotePlayers = [];

	// set value for the number of players
	playersNum = remotePlayers.length + 1
	localPlayer.setPos(playersNum)
	console.log ("player Pos is " + localPlayer.getPos())
	// Start listening for events
	setEventHandlers();


};


/**************************************************
** GAME EVENT HANDLERS
**************************************************/
var setEventHandlers = function() {

	// Socket connection successful
	socket.on("connect", onSocketConnected );
	// Socket disconnection
	socket.on("disconnect", onSocketDisconnect);
	// Listen for this player
	socket.on("this player", thisPlayer);
	// New player message received
	socket.on("new player", onNewPlayer);
	// Player removed message received
	socket.on("remove player", onRemovePlayer);
	// Players ready message received
	socket.on("players ready", onPlayersReady);
	// Players ready message received
	socket.on("all ready", allReady);
	// Players ready message received
	socket.on("game over", endGame);
	// All finished message
	socket.on("all over", allOver);
	// Restart game message
	socket.on("restart", restart);
	//End position of the leaderboard
	socket.on("end count", endPosition);
	// Force all games to stop
	socket.on("end all", endAllGames )
};


// Socket connected
function onSocketConnected() {

	console.log("Connected to socket server " + localPlayer.getId() );
	$("#playersNum").html( localPlayer.getId() ); // ALL PLAYERS IN LIST
	$("#playerNum").html( localPlayer.getId() );	// INDIVIDUAL PLAYER

	// Send local player data to the game server
	socket.emit("new player", {id: localPlayer.getId() });


};

// Socket disconnected
function onSocketDisconnect() {
	console.log("Disconnected from socket server");
};

// New player
function onNewPlayer(data) {
	console.log("New player connected: "+data.id);

	//UPDATE the player list
	$("#playerlist").append("<li>new player joined party <span style=color:black>" + data.id + "</span></li>");

	// Initialise the new player
	var newPlayer = new Player(data.id);
	newPlayer.id = data.id;

	// Add new player to the remote players array
	remotePlayers.push(newPlayer);

	//Set the position of player
	playaNum = remotePlayers.indexOf(localPlayer.getId())

	// set value for the number of players
	playersNum = remotePlayers.length + 1
	$("#playersNum").html( playersNum ); // UPDATE the player list ALL PLAYERS IN LIST

	
	//console.log("play num = " +playaNum + " " + localPlayer.getId())
 };


function updateList(){

}

// Remove player
function onRemovePlayer(data) {
	var removePlayer = playerById(data.id);

	// Player not found
	if (!removePlayer) {
		console.log("Player not found: "+data.id);
		return;
	};

	// Remove player from array
	remotePlayers.splice(remotePlayers.indexOf(removePlayer), 1);
};


/**************************************************
** GAME HELPER FUNCTIONS
**************************************************/

function thisPlayer(data){
	if(setPlaya == false){
		playerID = data.id;
		localPlayer.setId(playerID)

		console.log("This player is: " + playerID);

		playaNum = data.length
		localPlayer.setPos(playaNum) 
		$("#screen_user").html( localPlayer.getPos() );
		$("#user_head").html( "USER " + localPlayer.getPos() );

		setPlaya = true;

		// Display if ready to play
		$("#playerReady").html( thisReady );

	}
	
	//localPlayer.setPos()
	
	console.log("localplayer id " + localPlayer.getId() )
	console.log("localplayer pos " + localPlayer.getPos() )
	console.log("players length " + ( data.length ) )

	/**************************************************==========================
	 ///////THE 5th PLAYER IS THE HOST! CHECK IF ITS HIM AND SHOW THE LEADERBOARD
	 ***************************************************************************/
	
	if(localPlayer.getPos() >= 5){
			var playerImg = document.getElementById("players");
			var clock = document.getElementById("clock");
			var leader = document.getElementById("screen_leader");
			var leaderlist = document.getElementById("leaderlist");
			var hostScn = document.getElementById("host");
			var btnEndall = document.getElementById("endgame");
			var btnKill = document.getElementById("serverkill");

			playerImg.style.display = "none"
			clock.style.display = "none";
			leaderlist.style.display = "inline";
			leader.style.display = "inline";
			leader.style.opacity = 1;
			hostScn.style.display = "inline";
			btnKill.style.display = "inline";
			
			btnEndall.style.top = "540px";
			btnEndall.style.left = "375px";

			host = true;

	}

}

function onPlayersReady(data){
	console.log("players ready " + data.ready)
}


function playerStart(){

	localPlayer.playerReady = true;
	console.log("this player is ready!" + localPlayer.playerReady);
	$("#playerReady").html( localPlayer.playerReady );

	// Send ready state to the game server
	socket.emit("players ready", {ready: localPlayer.playerReady });

	playersReady.push(localPlayer.playerReady);
	console.log(playersReady)

}

function allReady(){
	console.log("START THE GAME")
	var btnEndall = document.getElementById("endgame");

	// ******************************************************************
	//start the game // ************************************************
	startGame()



	// Show the End Game button
	if(localPlayer.getPos() >= 5){
		btnEndall.style.display = "inline";
		btnEndall.style.opacity = 0;
		TweenLite.to($(btnEndall), .5, {opacity:1, delay:4});
	}
}

function playerEnd(){

	localPlayer.playerReady = false;
	console.log("this player is ready! " + localPlayer.playerReady);
	$("#playerReady").html( localPlayer.playerReady );

	//stop the clock 
	clearInterval(timerCount);

	localPlayer.setTime(totalSeconds);

	console.log("players time is : " + localPlayer.getTime() )

	//Send the game server the game time
	socket.emit("game over", {id:localPlayer.getId(), pos:localPlayer.getPos(), gameTime: localPlayer.getTime() });


}

function endGame(data){

	console.log("FORCE END ** ")
	var winner = data.winner
	var txtwin = document.getElementById("winner");
	var cardlist = document.getElementById("cardlist");
	var userTime = data.time;


	if(winner == true){
			console.log("YOU WON YOUR GREAT FLIPPER")
			//UPDATE the leaders list
			$("#leaderlist").append("<li><span style='color:#f8b787;'> USER " + data.id + "</span> <span style='padding-left:40px'>TIME: " + userTime + "</span><span style='font-size:20px'> SECONDS </span></li>");
			playerWinner = true;	
			txtwin.style.display = "inline";
	}
	else{
			//UPDATE the leaders list
			$("#leaderlist").append("<li><span style='color:#f8b787;'> USER " + data.id + "</span> <span style='padding-left:40px'>TIME: " + userTime + "</span><span style='font-size:20px'> SECONDS </span></li>");
			playerWinner = false;
		}

	if(totalSeconds == "-"){
		playerWinner = "ended";
	}


}

function endPosition(data){
	var winbar = document.getElementById("winbar");
	var endCountNum = data.endpos;

	switch (endCountNum)
	{
		case 1:
	 		//  PLAYER WINS
	 		winbar.style.top = "285px";
	 		winbar.style.display = "inline";
	 	break;

	 	case 2: 		
	 		winbar.style.top = "340px";
	 		winbar.style.display = "inline";
	 	break;

	 	case 3:
	 		winbar.style.top = "395px";
	 		winbar.style.display = "inline";
	 	break;

	 	case 4:
	 		winbar.style.top = "450px";
	 		winbar.style.display = "inline";
	 	break;
	}
}

// END OF THE GAME AND REPLAY FUNCTIONS ///=========================================================================
function allOver(){
	var replay = document.getElementById("replaybtn");
	var btnEndall = document.getElementById("endgame");
	var cardlist = document.getElementById("cardlist");

	replay.style.display = "inline";
	btnEndall.style.display = "none";

	//SHOW THE BUTTON
	TweenLite.to($(replay), .5, {opacity:1, delay:6 });

	// CALL THE RANDOM FUNCTION // ===
	cardlist.style.opacity = 0;
	randomizeList() // MIX UP THE LIST
}

function replayGame(){
	// RESETS ALL GAME VARIABLES AND USERS PLAY AGAIN
	 socket.emit("restart" );
}

function restart(){
	 var hostScrn = document.getElementById("host");
	 var btn = document.getElementById("replaybtn");
	 var wintxt = document.getElementById("winner");

	 // RESETS ALL GAME VARIABLES AND USERS PLAY AGAIN
	 totalSeconds = 0;
	 localPlayer.setTime(totalSeconds);
	 
	 wintxt.style.display = "none";
	 btn.style.display = "none";
	 btn.style.opacity = 0;

	 if(host != true ){
	 	hostScrn.style.display = "none";
	 }

	 //SHOW start screen
	 screenStart.style.display = "inline";
	 TweenLite.to(screenStart, 1, {opacity:1, delay:.3});

	 //Clear the leaderboard
	 $('#leaderlist').empty();

}


function serverKill(){
		socket.emit("kill");
		console.log("close the server")
}

function endGameCall(){
	console.log("END THE GAME!")
	endAllGames();
	// send msg to server for other users
	socket.emit("end all");
}

function endAllGames(){
	console.log("game forced to END.")

	//if(localPlayer.playerReady == true){ //checks if game var in progress
		totalSeconds = "-"; //sets the time none
		cheatGame();
	//}
}

// Find player by ID
function playerById(id) {
	var i;
	for (i = 0; i < remotePlayers.length; i++) {
		if (remotePlayers[i].id == id)
			return remotePlayers[i];
	};
	
	return false;
};