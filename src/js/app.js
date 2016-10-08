// Your code goes here

// var vinElem = document.getElementById('vin');
// gm.info.getVehicleConfiguration(function(data) {
//   vinElem.innerHTML = gm.info.getVIN();
// });

var navigationButton = document.getElementById('navigationButton');

var dest = {
  address: '400 Renaissance Center Drive, Detroit, Michigan 48243'
}

function navigateTest() {
  gm.nav.setDestination(navigateSuccess, dest, true);
  document.getElementById("navigationButton").innerHTML = "in progress";
}

function navigateSuccess() {
  console.log("success");
  var id = gm.voice.startTTS(ttsEnd, 'Keep your eyes on the road, your hands up on the wheel');
  navigationButton.hidden = true;
  document.getElementById("result").innerHTML = "success";
  //TODO: voice "starting navigation"
}

// function navigateError(err) {
//   //var id = gm.voice.startTTS(ttsEnd, 'Navigation Failed.');
//   document.getElementById("result").innerHTML = "Failed";
// }

function ttsEnd() {
  //TODO: tts finished callback
}
