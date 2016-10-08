// Your code goes here

// var vinElem = document.getElementById('vin');
// gm.info.getVehicleConfiguration(function(data) {
//   vinElem.innerHTML = gm.info.getVIN();
// });
var navigationButton = document.getElementById('navigationButton');

var hospital_name = "Hospital";
var hospital_lat = 0.0;
var hospital_lon = 0.0;

// first, get the vehicle location.
var signals = ['gps_lat', 'gps_long'];
gm.info.getVehicleData(calculateNearestHospital, signals);

// upon callback, iterate through the list of hospitals and find the one nearest (euclidean distance)
function calculateNearestHospital(data) {
  var latitude = data['gps_lat'];
  var longitude = data['gps_long'];
  console.log(latitude);
  console.log(longitude);
  // TODO: calculate nearest
  // TODO: save nearest info to global vars
  // TODO: displayNearestHospital
}

function displayNearestHospital() {
  //TODO: display the nearest hospital on screen
}

var dest = {
  address: '400 Renaissance Center Drive, Detroit, Michigan 48243'
}

function navigateTest() {
  gm.nav.setDestination(navigateSuccess, dest, true);
  navigationButton.innerHTML = "in progress";
}

function navigateSuccess() {
  console.log("success");
  var id = gm.voice.startTTS(ttsEnd, 'Starting Navigation to' + hospital_name);
  navigationButton.hidden = true;
  navigationButton.innerHTML = "success";
}

// function navigateError(err) {
//   //var id = gm.voice.startTTS(ttsEnd, 'Navigation Failed.');
//   document.getElementById("result").innerHTML = "Failed";
// }

function ttsEnd() {
  //TODO: tts finished callback
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
