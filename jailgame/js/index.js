function game() {
  
alert("Hello, are you ready to play?");
alert("Hello!");
prompt("How are you?");

var name=prompt("What is your name?");
alert("Hello " + name);
var question=prompt("You run into a monster, do you fight or run?");

if(question==="fight") {
  alert("You fight and win!");
}

else{
alert("You run away!");
}


var question2=prompt("You see a gun nearby and you see robbers coming, do you shoot or run?");

if(question2==="shoot") {
  alert("You shoot and escape.");
}

else{
  alert("You run and get robbed!");
}

var question3=prompt("You are about to go to jail because of murder, do you run or admit?");

if(question3==="run") {
  alert("You run and didn't get caught.");
}

else{
  alert("You get arrested but is known for honesty!");
}

var question4=prompt("You are in jail for 6 years cause of murder, do you escape or stay?");

if(question4==="stay") {
  alert("You got released in 6 years!");
}

else{
  alert("You get caught and is in jail for internity!");
}

var question5=prompt("You are release from jail, do you want to be a good guy or a bad guy?");

if(question5==="good guy") {
  alert("You become rich and famous because of your work!");
}

else{
  alert("You get caught again and also get the death penalty!");
}

var question6=prompt("You are rich, do you be greddy, or help people?");

if(question6==="be greddy") {
  alert("Everyone hates you and you become poor!");
}

else{
  alert("Everyone admires you!!!");
}

alert("Thanks for playing my game!");

}