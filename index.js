$(document).ready(function() {
//AJAX request
	/*shows weather as soon as page loads*/
	$.getJSON('https://ipinfo.io/json', function(response) {

			var loc = response.loc.split(',');
    var coords = {
        latitude: loc[0],
        longitude: loc[1]
		};
		$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/17142f4f221651ca2e9f8af2c0fc8929/' + coords.latitude + ',' + coords.longitude, function(weather) {

      console.log(weather.minutely.summary);
/*shows weather icons as soon as page loads*/
			function icons() {
  if (weather.currently.icon == "partly-cloudy-night") {
    $('#forecast').html('</br><img                 src="https://dl.dropbox.com/s/qxfx1eroy12fzjc/Cloud-Moon.svg?dl=0" 				alt="cloudy-night">');
	}

  if (weather.currently.icon === 'clear-night') {
    $('body').css('background-image', 'url("clear-night.jpg")');
    $('h1').css('color', '#bb8ef2');
    $('.btn').css('background-color', '#bb8ef2').css('color', '#fff').css('box-shadow', '2px 2px 2px #fff');
      $('.btn').hover(function() {
        $(this).css('background-color', '#fff').css('color', '#bb8ef2');
      }, function() {
        $(this).css('background-color', '#bb8ef2').css('color', '#fff');
      });
  }

  if (weather.currently.icon === 'clear-day') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/lbygou8vsfofmd8/Sun.svg?dl=0" alt="clear-day">');
  }

    if (weather.currently.icon === 'rain') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/dbjis15dimuwt4u/Cloud-Drizzle.svg?dl=0" alt="rain">');
  }

    if (weather.currently.icon === 'snow') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/9ude4mnp0361x78/Cloud-Snow-Alt.svg?dl=0" alt="snow">');
  }

    if (weather.currently.icon === 'sleet') {
    $('#forecast').html('</br><img src="https://www.dropbox.com/s/ppk494opmun7kfc/Cloud-Snow.svg?dl=0" alt="sleet">');
  }

    if (weather.currently.icon === 'wind') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/chpsyrnxodd21ib/Cloud-Wind-Sun.svg?dl=0" alt="windy">');
  }

    if (weather.currently.icon === 'fog') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/q3db32y5qs8mcj0/Cloud-Fog.svg?dl=0" alt="fog">');
  }

    if (weather.currently.icon === 'partly-cloudy-day') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/4841jlihxw5j9ev/Cloud-Sun.svg?dl=0" alt="partly-cloudy-day">');
  }

    if (weather.currently.icon === 'partly-cloudy-night') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/qxfx1eroy12fzjc/Cloud-Moon.svg?dl=0" alt="partly-cloudy-night">');
  }
}
			icons();
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

			function icons() {
  if (weather.currently.icon == "partly-cloudy-night") {
    $('#forecast').html('</br><img                 src="https://dl.dropbox.com/s/qxfx1eroy12fzjc/Cloud-Moon.svg?dl=0" 				alt="cloudy-night">');
	}

  if (weather.currently.icon === 'clear-night') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/rs8u9up6335jrwp/Moon.svg?dl=0" alt="clear-night">');
  }

  if (weather.currently.icon === 'clear-day') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/lbygou8vsfofmd8/Sun.svg?dl=0" alt="clear-day">');
  }

    if (weather.currently.icon === 'rain') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/dbjis15dimuwt4u/Cloud-Drizzle.svg?dl=0" alt="rain">');
  }

    if (weather.currently.icon === 'snow') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/9ude4mnp0361x78/Cloud-Snow-Alt.svg?dl=0" alt="snow">');
  }

    if (weather.currently.icon === 'sleet') {
    $('#forecast').html('</br><img src="https://www.dropbox.com/s/ppk494opmun7kfc/Cloud-Snow.svg?dl=0" alt="sleet">');
  }

    if (weather.currently.icon === 'wind') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/chpsyrnxodd21ib/Cloud-Wind-Sun.svg?dl=0" alt="windy">');
  }

    if (weather.currently.icon === 'fog') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/q3db32y5qs8mcj0/Cloud-Fog.svg?dl=0" alt="fog">');
  }

    if (weather.currently.icon === 'partly-cloudy-day') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/4841jlihxw5j9ev/Cloud-Sun.svg?dl=0" alt="partly-cloudy-day">');
  }

    if (weather.currently.icon === 'partly-cloudy-night') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/qxfx1eroy12fzjc/Cloud-Moon.svg?dl=0" alt="partly-cloudy-night">');
  }
}
			icons();

			$('#forecast').prepend(Math.floor(weather.currently.temperature) + "&deg;F</>" + "</br>" + weather.minutely.summary);


		})
	})
});
/*click event for future forecast button*/
$("#future-forecast").click(function(event) {
		$('.future').removeClass('hide');

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

	function icons() {
  if (weather.currently.icon == "partly-cloudy-night") {
    $('#forecast').html('</br><img                 src="https://dl.dropbox.com/s/qxfx1eroy12fzjc/Cloud-Moon.svg?dl=0" 				alt="cloudy-night">');
	}

  if (weather.currently.icon === 'clear-night') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/rs8u9up6335jrwp/Moon.svg?dl=0" alt="clear-night">');
  }

  if (weather.currently.icon === 'clear-day') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/lbygou8vsfofmd8/Sun.svg?dl=0" alt="clear-day">');
  }

    if (weather.currently.icon === 'rain') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/dbjis15dimuwt4u/Cloud-Drizzle.svg?dl=0" alt="rain">');
  }

    if (weather.currently.icon === 'snow') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/9ude4mnp0361x78/Cloud-Snow-Alt.svg?dl=0" alt="snow">');
  }

    if (weather.currently.icon === 'sleet') {
    $('#forecast').html('</br><img src="https://www.dropbox.com/s/ppk494opmun7kfc/Cloud-Snow.svg?dl=0" alt="sleet">');
  }

    if (weather.currently.icon === 'wind') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/chpsyrnxodd21ib/Cloud-Wind-Sun.svg?dl=0" alt="windy">');
  }

    if (weather.currently.icon === 'fog') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/q3db32y5qs8mcj0/Cloud-Fog.svg?dl=0" alt="fog">');
  }

    if (weather.currently.icon === 'partly-cloudy-day') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/4841jlihxw5j9ev/Cloud-Sun.svg?dl=0" alt="partly-cloudy-day">');
  }

    if (weather.currently.icon === 'partly-cloudy-night') {
    $('#forecast').html('</br><img src="https://dl.dropbox.com/s/qxfx1eroy12fzjc/Cloud-Moon.svg?dl=0" alt="partly-cloudy-night">');
  }
}
	icons();

	$('#forecast').prepend(Math.floor((weather.currently.temperature - 32) * 5/9) + "&deg;C</></br>" + weather.minutely.summary);

		});
	});
	});
/*closes future forecast*/
$('#close').click(function() {
	$('.future').addClass('hide');
	console.log('poop');
})
});
