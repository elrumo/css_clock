

function rClock(){
	clock();
	setInterval(clock, 1000);
}

function clock(){
  var date= new Date();
  var time=[date.getHours(), date.getMinutes(), date.getSeconds()];
  var clockDivs=[document.getElementById("hour"), document.getElementById("min"),document.getElementById("sec")];

  console.log("hey");

  var hour=time[1]/2+time[0]*30;

  clockDivs[0].style.transform="rotate("+hour +"deg)";
  clockDivs[1].style.transform="rotate("+ time[1]*6 +"deg)";
  clockDivs[2].style.transform="rotate("+ time[2]*6 +"deg)";
}

window.onload = function(){
  rClock();
}

// function localTime() {
//
//   //Get local time
//   var date = new Date;
//   var seconds = date.getSeconds();
//   var minutes = date.getMinutes();
//   var hours = date.getHours();
//
//   var hands = [
//       {
//         hand: 'hours',
//         angle: (hours * 30) + (minutes / 2)
//       },
//       {
//         hand: 'minutes',
//         angle: (minutes * 6)
//       },
//       {
//         hand: 'seconds',
//         angle: (seconds * 6)
//       }
//     ];
//     // Loop through each of these hands to set their angle
//     for (var j = 0; j < hands.length; j++) {
//       var elements = document.querySelectorAll('.' + hands[j].hand);
//       for (var k = 0; k < elements.length; k++) {
//           elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
//           elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
//           // If this is a minute hand, note the seconds position (to calculate minute position later)
//           if (hands[j].hand === 'minutes') {
//             elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
//           }
//       }
//     }
//   }
//
//   localTime()
