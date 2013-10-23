 <?php

  if(isset($_POST['add']))
  {

      //DEV
      // $db = 'designbuildplay_client';
      // $table = ' mccglc_memorygame_leader';
      // $dbhost = 'localhost:8888';
      // $dbuser = 'root';
      // $dbpass = 'root';
      // $conn = mysql_connect($dbhost, $dbuser, $dbpass);

      // //LIVE Designbuildplay =========
      $db = 'designbuildplay_client';
      $table = ' mccglc_memorygame_leader';
      $dbhost = 'localhost';
      $dbuser = 'dbpadmin';
      $dbpass = 'd3sign!buildp1@y1320';
      $conn = mysql_connect($dbhost, $dbuser, $dbpass);


      if(! $conn )
      {
        die('Could not connect: ' . mysql_error());
      }

      $name = $_POST['name'];
      $score = $_POST['score'];

      if($name == ""){
         $name = "unnamed";
      }

      $sql = "INSERT INTO mccglc_memorygame_leader ".
             "(name, score, date) ".
             "VALUES('$name','$score', NOW())";

      mysql_select_db($db);
      $retval = mysql_query( $sql, $conn );

      if(! $retval )
      {
        die( '
         <div id="container"></div>
         <div id="error">Could not enter data:
          '. mysql_error());

        //header('Location: /projects/mccglc/memorygame/phase2/'); //live domain
        //header('Location: /work/MCCGLC/NODE Memorygame/BUILD PHASE2/'); 
        exit();
      }

      echo "added";
      header('Location: /projects/mccglc/memorygame/phase2/_singleplayer/leader.php'); //live domain
      //header('Location: /work/MCCGLC/NODE Memorygame/BUILD PHASE2/_singleplayer/leader.php'); //localhost

      mysql_close($conn);

  }
  else
  {
    echo "nothing to see here... move along.";
  }
?>

