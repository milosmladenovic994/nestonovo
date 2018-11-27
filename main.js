$( document ).ready(startAllLetters);
var kliknutaSlova = "";
var pokrenutaSlova = "";
var resenjeZadatka1 = "PAPIR";
var resenjeZadatka2 = "KAMEN";
var resenjeZadatka3 = "SLOVO";
var glavnoResenje = [resenjeZadatka1, resenjeZadatka2, resenjeZadatka3];
var looper;
var degrees = 0;



var drop = document.querySelector('div.zadataRec');
drop.onclick = function(e){

     idKliknutogSlova = e.target.id;
     kliknutoSlovo = e.target.innerHTML;
     kliknutaSlova = kliknutaSlova + kliknutoSlovo;
     brojKliknutih = kliknutaSlova.length;

     $("#" + idKliknutogSlova).stop();
     clearTimeout(looper);
     e.target.style.transform = "rotate(0deg)";
     newPosTop = $(window).height() - 50;
     newPosLeft = 20 + 60 * brojKliknutih;
     e.target.style.top = newPosTop + "px";
     e.target.style.left = newPosLeft + "px";
     console.log(kliknutaSlova);
     for (var i = 0; i< glavnoResenje.length; i++){
     if (brojKliknutih == glavnoResenje[i].length)
     {
     
          if (kliknutaSlova == glavnoResenje[i])
          {
               alert("Bravo! Sledeca rec.");
          }

          else
          {
               location.reload();
                alert('Pocni opet.');
          }
     }
   }
}





function startAllLetters()
{
     
     animateStart(document.getElementById('slovo1'));
     rotation('slovo1', 1);
     animateStart(document.getElementById('slovo2'));
     rotation('slovo2', 1);
     animateStart(document.getElementById('slovo3'));
     rotation('slovo3', 1);
     animateStart(document.getElementById('slovo4'));
     rotation('slovo4', 0.2);
     animateStart(document.getElementById('slovo5'));
     rotation('slovo5', 0.4);
      animateStart(document.getElementById('slovo6'));
     rotation('slovo6', 1);
     animateStart(document.getElementById('slovo7'));
     rotation('slovo7', 1);
     animateStart(document.getElementById('slovo8'));
     rotation('slovo8', 1);
     animateStart(document.getElementById('slovo9'));
     rotation('slovo9', 0.2);
     animateStart(document.getElementById('slovo10'));
     rotation('slovo10', 0.4);
     animateStart(document.getElementById('slovo11'));
     rotation('slovo11', 0.4);
      animateStart(document.getElementById('slovo12'));
     rotation('slovo12', 1);
     animateStart(document.getElementById('slovo13'));
     rotation('slovo13', 1);
     animateStart(document.getElementById('slovo14'));
     rotation('slovo14', 1);
     animateStart(document.getElementById('slovo15'));
     rotation('slovo15', 0.2);


}
function animateStart(a)
{

     idPokrenutogSlova = a.id;
     pokrenutoSlovo = a.innerHTML;

     var newq = makeNewPosition();
     var oldq = $('#' + idPokrenutogSlova).offset();
     var speed = calcSpeed([oldq.top, oldq.left], newq);
     $('#' + idPokrenutogSlova).animate({top: newq[0], left: newq[1]}, speed, function () {
          clearTimeout(looper);
     }); 

}

function makeNewPosition()
{
     var h = $(window).height() - 50;
     var w = $(window).width() - 50;
     var nh = Math.floor(Math.random() * h);
     var nw = Math.floor(Math.random() * w);
     return [nh, nw];
}
function calcSpeed(prev, next)
{
     var x = Math.abs(prev[1] - next[1]);
     var y = Math.abs(prev[0] - next[0]);
     var greatest = x > y ? x : y;
     var speedModifier = 0.1;
     var speed = Math.ceil(greatest / speedModifier);
     return speed;
}


function rotation(el, speed)
{
     var e = document.getElementById(el);
     e.style.transform = "rotate(" + degrees + "deg)";
     degrees++;
     if (degrees > 359)
     {
          degrees = 1;
     }
     looper = setTimeout('rotation(\'' + el + '\', ' + speed + ')', speed);
} 


var timer2 = "0:40"
var interval = setInterval(function() {


  var timer = timer2.split(':');
 
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes < 0) {clearInterval(interval)
  location.reload();};
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  
  $('.countdown').html(minutes + ':' + seconds);
  timer2 = minutes + ':' + seconds;
}, 1000);