$(document).ready(function() {
  var thermostat = new Thermostat

  $("#currentTemp").text(thermostat.temp() + " °C");
  $("#ecoMode").text("EcoMode: On");

  $('#up').on('click', function() {
    thermostat.up();
    $("#currentTemp").text(thermostat.temp() + " °C");
  });

  $("#down").on('click', function() {
    thermostat.down();
    $("#currentTemp").text(thermostat.temp() + " °C");
  });

  $("#psmSwitch").on('click', function() {
    thermostat.psmSwitch();
    if (thermostat.powerSavingMode()) {
    $("#ecoMode").text("EcoMode: On")
  } else {
    $("#ecoMode").text("EcoMode: Off")
  }
  });

  $("#reset").on('click', function() {
    thermostat.reset();
    $("#currentTemp").text(thermostat.temp() + " °C");
  });

  $("#city").on('click', function() {
    var londonWeatherTemp = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric"
    $.get(londonWeatherTemp, function(data) {
      $("#londonWeather").text(data.main.temp);
    });
  });

})
