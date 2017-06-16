// Scripts

// Get and store Geo Location lat/long coordinates
navigator.geolocation.getCurrentPosition( 
  
  function(position) {
  
  // wait a few seconds to receive location
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  
  console.log( lat, long); 
});

$('#city-1').on('click', function() {
     
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
    var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#three .temp').text(weather.temp);
      $('#three .city').text(weather.city);
      $('#three .currently').text(weather.currently);
          var iconCode = 'icon-' + weather.code;
      $('i').attr('class', iconCode );
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Oops! My wand broke.');
    }
  
  });
    
};
    

// Greeting Generator
// Behavioral
// Random Number Generator `~` '-'
var maxRand = 6;
var randNum = Math.floor(Math.random()*maxRand);
console.log(randNum);

var greeting0 = 'aloha!'
var greeting1 = 'howdy!';
var greeting2 = 'konnichiwa!';
var greeting3 = 'what happens to be hanging?';
var greeting4 = 'namaste!';
var greeting5 = 'heidely-ho, neighborino!';


// Concatenate Strings
//console.log('hi howdy' + ' ' + 'hey neighborito')

// Change Greeting
$('h3 span').text( eval('greeting' + randNum) );