

/* First section get a random dice image within the specific range  */
/* get random number */
var randomNumber = Math.floor(Math.random() * 6) + 1;
/* create image name using random number */
var diceImage = "dice" + randomNumber + ".png";
/* assign dice image to the correct pathway */
var diceImageSource = "images/" + diceImage;

/* Query the document for the image tags, change the image src to the newly create image source */
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImageSource);



/* repeat the process again for the second image */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage2 = "dice" + randomNumber2 + ".png";

var diceImageSource2 = "images/" + diceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImageSource2);


/* Check which number is bigger than the other, that number wins */
if (randomNumber > randomNumber2)
    {
    /* change the inner HTML text to the player that has won */
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
        
    }

else if (randomNumber < randomNumber2)
    {

    document.querySelector("h1").innerHTML = "Player 2 Wins!";

    }
/* account for draws  */
else 
    {
        document.querySelector("h1").innerHTML = "Draw!";
    }