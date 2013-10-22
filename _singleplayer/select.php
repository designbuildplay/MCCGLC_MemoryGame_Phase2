<?php
	$con = mysqli_connect("localhost","root","root","designbuildplay_client");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT * FROM mccglc_memorygame_leader");

while($row = mysqli_fetch_array($result))
  {
  echo $row['name'] . " " . $row['score'];
  echo "<br>";
  }

mysqli_close($con);
?>