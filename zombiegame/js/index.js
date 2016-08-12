$(document).ready(function() {

  var score=0;
  $('.normalzombie').hide();
  $('.spearzombie').hide();
  $("#scorebox").hide();
  $("#girl").hide();
  $("#girl1").hide();

 //What happens when you press 'Play' button
$('#playbutton').click(function() {
  $('#gametitle').hide(); 
  $("#pic1").hide();
  $("#pic2").hide();
  $("#pic3").hide();
  $("#playbutton").hide();
  $("#instructions").hide();
  $("#name1").hide();
  $(".normalzombie").show();
  $(".spearzombie").show();
  $("#scorebox").show();
  $("#girl").show();
  $("#girl1").show();
}); 
  
//What happens when you shoot normal zombie 1
  $('#normalzombie1').click(function(){ 
   $(this).toggle("explode");
  score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
  //What happens when you shoot normal zombie 2
  $('#normalzombie2').click(function(){ 
   $(this).toggle("explode");
   score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
   //What happens when you shoot normal zombie 3
  $('#normalzombie3').click(function(){ 
   $(this).toggle("explode");
    score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
   //What happens when you shoot normal zombie 4
  $('#normalzombie4').click(function(){ 
   $(this).toggle("explode");
    score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
   //What happens when you shoot spear zombie 1
  $('#spearzombie1').click(function(){ 
   $(this).toggle("explode");
    score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
  //What happens when you shoot spear zombie 2
  $('#spearzombie2').click(function(){ 
   $(this).toggle("explode");
    score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
  //What happens when you shoot normal zombie 4
  $('#normalzombie4').click(function(){ 
   $(this).toggle("explode");
    score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
  //What happens when you shoot normal zombie 5
  $('#normalzombie5').click(function(){ 
   $(this).toggle("explode");
    score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
  //What happens when you shoot normal zombie 6
  $('#normalzombie6').click(function(){ 
   $(this).toggle("explode");
    score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
 
 //What happens when you shoot spear zombie 3
  $('#spearzombie3').click(function(){ 
   $(this).toggle("explode");
    score = score + 300;
  document.getElementById("points").innerHTML = score;
  }); 
  
   //What happens when you shoot normal zombie 7
  $('#normalzombie7').click(function(){ 
   $(this).toggle("explode");
    score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
   //What happens when you shoot normal zombie 8
  $('#normalzombie8').click(function(){ 
   $(this).toggle("explode");
    score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
   //What happens when you shoot normal zombie 9
  $('#normalzombie9').click(function(){ 
   $(this).toggle("explode");
    score = score + 100;
  document.getElementById("points").innerHTML = score;
  });
  
  //What happens when you shoot spear zombie 4
  $('#spearzombie4').click(function(){ 
   $(this).toggle("explode");
    score = score + 300;
  document.getElementById("points").innerHTML = score;
  });
  
  //What happens when you shoot girl
  $('#girl').click(function(){ 
   $(this).toggle("explode");
     score = score - 300;
  document.getElementById("points").innerHTML = score;
  });
  
   //What happens when you shoot girl1
  $('#girl1').click(function(){ 
   $(this).toggle("explode");
     score = score - 300;
  document.getElementById("points").innerHTML = score;
  });
 
  //Move normalzombie1
   function movenormalzombie1Right() {
    $("#normalzombie1").animate({left: "+=450"}, 2000, movenormalzombie1Left);
  }
  
   function movenormalzombie1Left() { 
    $("#normalzombie1").animate({left: "-=400"}, 2000, movenormalzombie1Right);  
  }
  
  movenormalzombie1Right();
  
  
    //Move normalzombie2
   function movenormalzombie2Right() {
    $("#normalzombie2").animate({left: "+=500"}, 2000, movenormalzombie2Left);
  }
  
   function movenormalzombie2Left() { 
    $("#normalzombie2").animate({left: "-=500"}, 2000, movenormalzombie2Right);  
  }
  
  movenormalzombie2Right();
  
  //Move normalzombie3
   function movenormalzombie3Right() {
    $("#normalzombie3").animate({left: "+=800"}, 2000, movenormalzombie3Left);
  }
  
   function movenormalzombie3Left() { 
    $("#normalzombie3").animate({left: "-=600"}, 2000, movenormalzombie3Right);  
  }
  
  movenormalzombie3Right();
  
  
 //Move normalzombie4
   function movenormalzombie4Right() {
    $("#normalzombie4").animate({left: "+=800"}, 2000, movenormalzombie4Left);
  }
  
   function movenormalzombie4Left() { 
    $("#normalzombie4").animate({left: "-=650"}, 2000, movenormalzombie4Right);  
  }
  
  movenormalzombie4Right(); 
  
  //Move normalzombie5
   function movenormalzombie5Right() {
    $("#normalzombie5").animate({left: "+=800"}, 2000, movenormalzombie5Left);
  }
  
   function movenormalzombie5Left() { 
    $("#normalzombie5").animate({left: "-=600"}, 2000, movenormalzombie5Right);  
  }
  
  movenormalzombie5Right();
  
 //Move normalzombie6
   function movenormalzombie6Right() {
    $("#normalzombie6").animate({left: "+=800"}, 2000, movenormalzombie6Left);
  }
  
   function movenormalzombie6Left() { 
    $("#normalzombie6").animate({left: "-=700"}, 2000, movenormalzombie6Right);  
  }
  
  movenormalzombie6Right(); 
  
//Move normalzombie7
   function movenormalzombie7Right() {
    $("#normalzombie7").animate({left: "+=800"}, 2000, movenormalzombie7Left);
  }
  
   function movenormalzombie7Left() { 
    $("#normalzombie7").animate({left: "-=500"}, 2000, movenormalzombie7Right);  
  }
  
  movenormalzombie7Right();  
  
 //Move normalzombie8
   function movenormalzombie8Right() {
    $("#normalzombie8").animate({left: "+=400"}, 2000, movenormalzombie8Left);
  }
  
   function movenormalzombie8Left() { 
    $("#normalzombie8").animate({left: "-=200"}, 2000, movenormalzombie8Right);  
  }
  
  movenormalzombie8Right(); 
  
  //Move normalzombie9
   function movenormalzombie9Right() {
    $("#normalzombie9").animate({left: "+=800"}, 2000, movenormalzombie9Left);
  }
  
   function movenormalzombie9Left() { 
    $("#normalzombie9").animate({left: "-=900"}, 2000, movenormalzombie9Right);  
  }
  
  movenormalzombie9Right();
  
  
   //Move spearzombie1
   function movespearzombie1Right() {
    $("#spearzombie1").animate({left: "+=800"}, 2000, movespearzombie1Left);
  }
  
   function movespearzombie1Left() { 
    $("#spearzombie1").animate({left: "-=800"}, 2000, movespearzombie1Right);  
  }
  
  movespearzombie1Right();
  
   //Move spearzombie2
   function movespearzombie2Right() {
    $("#spearzombie2").animate({left: "+=800"}, 2000, movespearzombie2Left);
  }
  
   function movespearzombie2Left() { 
    $("#spearzombie2").animate({left: "-=800"}, 2000, movespearzombie2Right);  
  }
  
  movespearzombie2Right();
  
//Move spearzombie3
   function movespearzombie3Right() {
    $("#spearzombie3").animate({left: "+=800"}, 2000, movespearzombie3Left);
  }
  
   function movespearzombie3Left() { 
    $("#spearzombie3").animate({left: "-=800"}, 2000, movespearzombie3Right);  
  }
  
  movespearzombie3Right();  
  
 //Move spearzombie4
   function movespearzombie4Right() {
    $("#spearzombie4").animate({left: "+=800"}, 2000, movespearzombie4Left);
  }
  
   function movespearzombie4Left() { 
    $("#spearzombie4").animate({left: "-=800"}, 2000, movespearzombie4Right);  
  }
  
  movespearzombie2Right();  

//Move girl
   function movegirlRight() {
    $("#girl").animate({left: "+=800"}, 2000, movegirlLeft);
  }
  
   function movegirlLeft() { 
    $("#girl").animate({left: "-=800"}, 2000, movegirlRight);  
  }
  
  movegirlRight();


//Move girl1
   function movegirl1Right() {
    $("#girl1").animate({left: "+=600"}, 2000, movegirl1Left);
  }
  
   function movegirl1Left() { 
    $("#girl1").animate({left: "-=600"}, 2000, movegirl1Right);  
  }
  
  movegirl1Right();
});