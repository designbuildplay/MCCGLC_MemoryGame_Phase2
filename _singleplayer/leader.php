<!DOCTYPE html>
<html lang="en"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>EXELON PATCH : Leaderboard</title>
	
	<meta name="viewport" content="user-scalable=no, width=device-width, height=768, initial-scale=1, maximum-scale=2">
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
<div id="portrait">PLEASE ROTATE THE DEVICE TO LANDSCAPE</div>
	<div id="container">

		<!-- main menu nav -->
		<div id="nav"><a href="../">BACK TO MENU</a></div>
		

		<!-- LEADERBOARD SCREEN ===========================    -->
		<div id="screen_leader_display">
				<div id="finaltime"></div>
				
				<a href="../_singleplayer"><div id="btn_replay" style="top:570px">CHALLENGE AGAIN</div></a>

				<div id="board">
					<?php include 'select.php'; ?>
				</div>
		</div>

	</div>

</div>


<!-- LOAD IN THE APP SCRIPTS ====================== -->

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