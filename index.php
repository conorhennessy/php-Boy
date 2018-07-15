<!DOCTYPE html>
<html lang ="en">
<head>
	<meta charset="utf-8">
	
	<link rel="stylesheet" href="css/index.css">
	
	<!-- Viewport sizing for all devices -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<title> php-boy </title>
</head>

<body>
<body>
	<div class="bus">
	<p class="tittle" >Busses from Wivenhoe...</p>
	<!-- script src=""></script -->
	<table class="busTimes">
	  <tr class="bus">
		<td class="bus" id="bus0">Bus 0</th>
		<td id="bus0time0">12:00</th>
		<td id="bus0time1">12:00</th>
		<td id="bus0time2">12:00</th>
	  </tr>
	  <tr class="bus">
		<td class="bus" id="bus1">Bus 1</td>
		<td id="bus1time0">12:00</td>
		<td id="bus1time1">12:00</td>
		<td id="bus1time2">12:00</td>
	  </tr>
	  <tr class="bus">
		<td class="bus" id="bus2">Bus 2</td>
		<td id="bus2time0">12:00</td>
		<td id="bus2time1">12:00</td>
		<td id="bus2time2">12:00</td>
	  </tr>
	  <tr class="bus">
		<td class="bus" id="bus3">Bus 3</td>
		<td id="bus2time0">12:00</td>
		<td id="bus2time1">12:00</td>
		<td id="bus2time2">12:00</td>
	  </tr>
	</table>
	<script src="getbustimes.js"> </script>
	
	</div>
	
	<div class="news">
	<p>Sorry BBC News can not be accessed right now :( </p>
	</div>
	
	<div class="weather">
	<p class="tittle">Weather in Wivenhoe...</p>
	</div>

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
	</div>
	


</body>

</html>