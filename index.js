$(document).ready(function() {


background = (image) => $('body').css('background-image', 'url("' + image + '")');


//AJAX request
	$.getJSON('https://ipinfo.io/json', function(response) {

			var loc = response.loc.split(',');
    var coords = {
        latitude: loc[0],
        longitude: loc[1]
		};
		$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/17142f4f221651ca2e9f8af2c0fc8929/' + coords.latitude + ',' + coords.longitude, function(weather) {

  if (weather.currently.icon == "partly-cloudy-night") {
    background('cloudy-night.jpg');
		$('h1').addClass('cloudy-night-h1');
		$('.btn').addClass('cloudy-night-buttons');
		$('#close').addClass('cloudy-night-close');
		$('.fa').addClass('cloudy-night-home');
	}

  if (weather.currently.icon === 'clear-night') {
    background('clear-night.jpg');
    $('h1').addClass('clear-night-h1');
    $('.btn').addClass('clear-night-buttons');
		$('.future').addClass('clear-night-future');
		$('#close').addClass('clear-night-close');
		$('.fa').addClass('clear-night-home');
  }

  if (weather.currently.icon === 'clear-day') {
    background('clear-sky.jpg');
		$('.btn').addClass('clear-day-buttons');
		$('.future').addClass('clear-day-future');
		$('#close').addClass('clear-day-close');
		$('.fa').addClass('clear-day-home');
  }

    if (weather.currently.icon === 'rain') {
    background('rain.jpg');
		$('#forecast').addClass('rain-forecast');
		$('.btn').addClass('rain-buttons');
		$('#close').addClass('rain-buttons-close');
		$('.future').addClass('rain-future');
		$('.fa').addClass('rain-home');
  }

    if (weather.currently.icon === 'snow') {
    background('snow.jpg');
		$('.btn').addClass('snow-buttons');
		$('#forecast').addClass('snow-forecast');
		$('.future').addClass('snow-future');
		$('#close').addClass('snow-close');
		$('.fa').addClass('snow-home');
  }

    if (weather.currently.icon === 'sleet') {
    background('sleet.jpg');
		$('.btn').addClass('sleet-buttons');
		$('#forecast').addClass('sleet-forecast');
		$('.future').addClass('sleet-future');
		$('#close').addClass('sleet-close');
		$('.fa').addClass('sleet-home');
  }

    if (weather.currently.icon === 'wind') {
    background('windy.jpg');
		$('.btn').addClass('windy-buttons');
		$('#forecast').addClass('windy-forecast');
		$('.future').addClass('windy-future');
		$('#close').addClass('windy-close');
		$('.fa').addClass('windy-home');
  }

    if (weather.currently.icon === 'fog') {
    background('fog.jpg');
		$('.btn').addClass('fog-buttons');
		$('#forecast').addClass('fog-forecast');
		$('.future').addClass('fog-future');
		$('.fa').addClass('fog-home');
		$('#close').addClass('fog-close');
  }

    if (weather.currently.icon === 'partly-cloudy-day') {
    background('cloudy-day.jpg');
		$('.btn').addClass('cloudy-day-buttons');
		$('#forecast').addClass('cloudy-day-forecast');
		$('.future').addClass('cloudy-day-future');
		$('#close').addClass('cloudy-day-close');
		$('.fa').addClass('cloudy-day-home');
  }


	/* shows current forecast as soon as page loads*/
$('#forecast').prepend(Math.floor(weather.currently.temperature) + "&deg;F</>" + "</br>" + weather.minutely.summary);


		})
	})

/*click event for fahrenheit button*/
$("#f").click(function(event) {
	$.getJSON('https://ipinfo.io/json', function(response) {

			var loc = response.loc.split(',');
    var coords = {
        latitude: loc[0],
        longitude: loc[1]
		};
		$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/17142f4f221651ca2e9f8af2c0fc8929/' + coords.latitude + ',' + coords.longitude, function(weather) {

		$('#forecast').html(Math.floor(weather.currently.temperature) + "&deg;F</>" + "</br>" + weather.minutely.summary);
		})
	})
});

/*click event for future forecast button*/
$("#future-forecast").click(function(event) {
		$('.future').removeClass('hide');
		$('#forecast').addClass('hide');
		$('.btn').addClass('hide');

		$.getJSON('https://ipinfo.io/json', function(response) {

			var loc = response.loc.split(',');
    var coords = {
        latitude: loc[0],
        longitude: loc[1]
		};
		$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/17142f4f221651ca2e9f8af2c0fc8929/' + coords.latitude + ',' + coords.longitude, function(weather) {

	  var week = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
    }
  var arr = [];
	var newArr = [];
    for (var i = 0; i < weather.daily.data.length; i++) {
      arr.push(weather.daily.data[i].time);
    }

	for (var k = 0; k < arr.length; k++) {
		arr[k] = arr[k] * 1000;
	}

	for (var b = 0; b < arr.length; b++) {
		arr[b] = new Date(arr[b]);
		newArr.push(arr[b].getDay());
	}

//display seven day forecast
			$('#zero').html(week[newArr[0]] + ": " + weather.daily.data[0].summary + "</br>High: " + Math.floor(weather.daily.data[0].apparentTemperatureHigh) + " Low: " + Math.floor(weather.daily.data[0].apparentTemperatureLow));
			$('#one').html(week[newArr[1]] + ": " + weather.daily.data[1].summary + "</br>High: " + Math.floor(weather.daily.data[1].apparentTemperatureHigh) + " Low: " + Math.floor(weather.daily.data[1].apparentTemperatureLow));
			$('#two').html(week[newArr[2]] + ": " + weather.daily.data[2].summary + "</br>High: " + Math.floor(weather.daily.data[2].apparentTemperatureHigh) + " Low: " + Math.floor(weather.daily.data[2].apparentTemperatureLow));
			$('#three').html(week[newArr[3]] + ": " + weather.daily.data[3].summary + "</br>High: " + Math.floor(weather.daily.data[3].apparentTemperatureHigh) + " Low: " + Math.floor(weather.daily.data[3].apparentTemperatureLow));
			$('#four').html(week[newArr[4]] + ": " + weather.daily.data[4].summary + "</br>High: " + Math.floor(weather.daily.data[4].apparentTemperatureHigh) + " Low: " + Math.floor(weather.daily.data[4].apparentTemperatureLow));
			$('#five').html(week[newArr[5]] + ": " + weather.daily.data[5].summary + "</br>High: " + Math.floor(weather.daily.data[5].apparentTemperatureHigh) + " Low: " + Math.floor(weather.daily.data[5].apparentTemperatureLow));
			$('#six').html(week[newArr[6]] + ": " + weather.daily.data[6].summary + "</br>High: " + Math.floor(weather.daily.data[6].apparentTemperatureHigh) + " Low: " + Math.floor(weather.daily.data[6].apparentTemperatureLow));
			$('#seven').html(week[newArr[7]] + ": " + weather.daily.data[7].summary + "</br>High: " + Math.floor(weather.daily.data[7].apparentTemperatureHigh) + " Low: " + Math.floor(weather.daily.data[7].apparentTemperatureLow));
    });
		});
	});

/*click event for celsius button*/
$("#c").click(function(event) {
	$.getJSON('https://ipinfo.io/json', function(response) {

		var loc = response.loc.split(',');
    var coords = {
        latitude: loc[0],
        longitude: loc[1]
		};
		$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/17142f4f221651ca2e9f8af2c0fc8929/' + coords.latitude + ',' + coords.longitude, function(weather) {

	$('#forecast').html(Math.floor((weather.currently.temperature - 32) * 5/9) + "&deg;C</></br>" + weather.minutely.summary);
		});
	});
	});

/*closes future forecast*/
$('#close').click(function() {
	$('.future').addClass('hide');
	$('#forecast').removeClass('hide');
	$('.btn').removeClass('hide');
})


});
