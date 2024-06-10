
var randomNumber = Math.floor(Math.random() * 6) + 1;

var diceImage = "dice" + randomNumber + ".png";

var diceImageSource = "images/" + diceImage;


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImageSource);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage2 = "dice" + randomNumber2 + ".png";

var diceImageSource2 = "images/" + diceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImageSource2);


if (randomNumber > randomNumber2)
    {

    document.querySelector("h1").innerHTML = "Player 1 Wins!";
        
    }

else if (randomNumber < randomNumber2)
    {

    document.querySelector("h1").innerHTML = "Player 2 Wins!";

    }

else 
    {
        document.querySelector("h1").innerHTML = "Draw!";
    }