<!DOCTYPE html>
<html dir="ltr" lang="en-us"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>EXELON PATCH</title>
	
	<meta name="viewport" content="user-scalable=no, width=device-width, height=device-height, initial-scale=1, maximum-scale=2">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="apple-touch-icon-precomposed" href="imgs/appico.png"/> 
    <link rel="apple-touch-startup-image" sizes="1024x748" href="imgs/splash.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio: 1)" />
    <link rel="icon"  type="image/png" href="imgs/favico.png">
	<link rel="stylesheet" href="css/flip.css">
	<link rel="stylesheet" href="css/sprites.css">
	<script src="js/lib/jquery.js"></script>
	<script type="text/javascript" src="js/lib/jquery-1.10.2.min.js"></script>
	<script type="text/javascript" src="js/lib/hammer.js"></script>
    <script type="text/javascript" src="js/lib/jquery.hammer.js"></script>
	
	<script type="text/javascript" src="js/lib/gs/plugins/CSSPlugin.min.js"></script>
    <script type="text/javascript" src="js/lib/gs/easing/EasePack.min.js"></script>
    <script type="text/javascript" src="js/lib/gs/TweenLite.min.js"></script>
    <script type="text/javascript" src="js/lib/gs/TimelineLite.min.js"></script>

</head>

<body>

<div id="wrapper">EXELON PATCH

		<div id="container">

		<!-- main menu nav -->
		<div id="nav"><a href="../">BACK TO MENU</a></div>
		<!-- START SCREEN ===========================    -->
		<div id="screen_start"></div>

		<!-- USER SCREEN ===========================    -->
		<div id="screen_user"></div>

		<!-- LOADING PLAYERS SCREEN ===========================    -->
		<div id="screen_wait"></div>

		<!-- LEADERBOARD SCREEN ===========================    -->
		<div id="screen_leader">
				<div id="finaltime"></div>
				 <form id="form1" method="post" action="submit.php" > 
				 	<input type="hidden" id="scoreHidden" name="score" value="" >
					<input type="text" id="nametxt" name="name" placeholder="ENTER YOUR NAME">
					<input name="add" type="submit" id="btn_score" value="SUBMIT TIME" >
				</form>
				<!-- <a href="leader.php"><div id="btn_score">SUBMIT TIME</div></a> -->
				<a href="../_singleplayer"><div id="btn_replay">CHALLENGE AGAIN</div></a>


		</div>

		<!-- clock counter ==== -->
		<div id="clock"></div>

		<!-- game countdown === -->
		<div id="count_num">3</div>

		<ul id="cardlist"> 

			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card1 click panel circle" id="card1" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>

			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card1 click panel circle" id="card2"  >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>

			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card2 click panel circle" id="card3" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>

			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card2 click panel circle"  id="card4" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>



			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card3 click panel circle"  id="card5" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>

			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card3 click panel circle"  id="card6" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>

			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card4 click panel circle"  id="card7" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>

			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card4 click panel circle"  id="card8" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>


			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card5 click panel circle"  id="card9" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>

			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card5 click panel circle"  id="card10" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>

			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card6 click panel circle"  id="card11" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>


			<li>
				<!-- CARD ELEMENT ===========================    -->
				<div class="card6 click panel circle"  id="card12" >
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</li>

		</ul>

		<div id="txt_matched"></div>
		<div id="txt_winner"></div>
		<div id="txt_looser"></div>

		</div>
</div>

<!-- LOAD IN THE APP SCRIPTS ====================== -->

<script src="js/app/random_li.js"></script>
<script src="js/app/clock.js"></script>
<script src="js/app/sprites.js"></script>
<script src="js/app/flip.js"></script>


<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-3498809-19', 'memoryactivity.net');
  ga('send', 'pageview');

</script>

</body>

</html>