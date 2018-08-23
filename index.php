<!DOCTYPE html>
<html lang ="en">
<?php
	shell_exec("java -jar /var/www/html/ZooqleTopsSeedstofile.jar");
?>
<head>
	<meta charset="utf-8">
	<meta http-equiv="refresh" content="600" URL="http://localhost">
	<link rel="stylesheet" href="css/index.css">
	
	<!-- Viewport sizing for all devices -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<title> php-boy </title>
</head>


<body>
	<div id="busnorth" class="busnorthbox">
	<p class="tittle">Buses to Colchester:</p>

	</div>
	
	<div id="bussouth" class="bussouthbox">
	<p class="tittle">Buses to Wivenhoe:</p>

	</div>
	<script src="getbustimes.js"> </script> 
	
	
	<div id="joke" class="dadjoke">

	</div>
	<script src="getdadjoke.js"> </script>
	
	
	<div id="torrentspane" class="torrents">
	</div>
	<script src="readtorrentscrape.js"></script>
	
	
	<div class="weatherpane">
	<div class="weathertitle">WEATHER</div>
	<div id="weather" class="weather">

	</div>
	</div>
	<script src="getweather.js"> </script>
	
	
	<div class="dateAndClock">
		<!-- Day of the week -->
		<div class="days">

			<div class="day">
				<p class="monday">monday</p>
			</div>

			<div class="day">
				<p class="tuesday">tuesday</p>
			</div>

			<div class="day">
				<p class="wednesday">wednesday</p>
			</div>

			<div class="day">
				<p class="thursday">thursday</p>
			</div>

			<div class="day">
				<p class="friday">friday</p>
			</div>

			<div class="day">
				<p class="saturday">saturday</p>
			</div>
			
			<div class="day">
				<p class="sunday">sunday</p>
			</div>

		</div>
		<!-- Clock -->
		<div class="clock">
			<!-- HOUR -->
			<div class="number">
				<p class="hours"></p>
				<p class="placeholder">88</p>
			</div>

			<div class="colon">
				<p>:</p>
			</div>

			<!-- MINUTE -->
			<div class="number">
				<p class="minutes"></p>
				<p class="placeholder">88</p>
			</div>

			<div class="colon">
				<p>:</p>
			</div>

			<!-- SECOND -->
			<div class="number">
				<p class="seconds"></p>
				<p class="placeholder">88</p>
			</div>
			
			<!-- AM or PM meridian-->
			<div class="meridian">

				<!-- AM -->
				<div>
					<p class="am">am</p>
				</div>

				<!-- PM -->
				<div>
					<p class="pm">pm</p>
				</div>
			</div>
		</div>
	<script src="clock.js"> </script>
	
	<div id="sunriseTime">  
	</div>
	<script src="GetSunRiseSet.js"></script>
	
	</div>
	
	<div id="news">
	</div>
	<script src="TopArticlesBBC.js"></script>
	
	<div id="collections">
	</div>
	<script src="CollectionDay.js"> </script>
	
	<div id="localIP">
	</div>
	<script src="GetLocalIP.js"></script>
	
</body>

</html>