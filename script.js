// get random number for player 1 
rn1 = Math.random() 
rn1 = rn1*6 + 1
rn1 = Math.floor(rn1)

// get random number for player 2
rn2 = Math.random(); 
rn2 = rn2 * 6 + 1
rn2 = Math.floor(rn2) 

// connect player 1 image to player one random number 
diceImage = "./images/dice" + rn1 + ".png"

// connect player 2 image to player 2 random number 
diceImage2 = "./images/dice" + rn2 + ".png"

// test to see if string matches
//console.log(diceImage)

// change player 1 image
let img1 = document.querySelectorAll("img")[0] 
img1.setAttribute("src" , diceImage) 

// change player 2 image 
let img2 = document.querySelectorAll("img")[1] 
img2.setAttribute("src", diceImage2) 

// show winner by changing the h1 tag on index.html 
if(rn1>rn2){
    document.querySelector("h1").textContent = "Player 1 Wins"
}else{
    document.querySelector("h1").textContent = "Player 2 Wins"
}

