var randomNumber1=Math.floor(Math.random()*6)+1;

var randomdice="dice"+randomNumber1+".png";

var randominagesource="images/"+randomdice;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randominagesource);


var randomNumber2=Math.floor(Math.random()*6)+1;


var randominagesource2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randominagesource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Hurray!!player1 wins";
}else if(randomNumber2>randomNumber1){
     document.querySelector("h1").innerHTML="yippe!!player2 wins";
}else{
    document.querySelector("h1").innerHTML="Draw";
}