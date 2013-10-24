<?php

$con = mysqli_connect("localhost","root","root","designbuildplay_client");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to leaderboard: " . mysqli_connect_error();
  }

// Check connection
if (mysqli_connect_errno())
  {
  	echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT * FROM mccglc_memorygame_leader ORDER BY score LIMIT 10" );

echo "<table border='0' width='400px'>";

$idCount = 0;

while($row = mysqli_fetch_array($result))
  {
  echo "<tr style='text-align:center'>";
	  echo "<td style='text-align:right; '>" . $row['name'] . "</td>";
	  echo "<td id='" ;
	  $idCount = $idCount + 1;
	  echo $idCount;
	  echo "' style='text-align:right; ''>" . $row['score'] . "</td>";
	  echo "<td style='text-align:left; font-size:12px'>seconds</td>";
  echo "</tr>";
  }
echo "</table>";

mysqli_close($con);

?>