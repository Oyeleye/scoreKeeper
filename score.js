var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Update = document.querySelector("#p1Update");
var p2Update = document.querySelector("#p2Update");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var updatedMaxScore = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var youWon = false;

p1Button.addEventListener("click", function () {
	if(!youWon) {
	    p1Score++;
	    p1Update.textContent= p1Score;  
	    if(p1Score === maxScore) {
	    youWon=true;
		alert ("You won!");
		p1Update.classList.add ("winner");
	    }
	}
});


p2Button.addEventListener("click", function () {
	if(!youWon)  {
	   p2Score++;
	   p2Update.textContent= p2Score;
	   if(p2Score === maxScore) {
	   youWon=true;
	   alert ("You won!");
	   p2Update.classList.add("winner");
	   }
	}
});


resetButton.addEventListener("click", reset);
      


function reset() {
       p1Update.classList.remove ("winner");
       p2Update.classList.remove ("winner");
       youWon = false;
       p1Score = 0;
       p2Score = 0;
       p1Update.textContent = 0;
       p2Update.textContent = 0;
   }

numInput.addEventListener("change", function () {
       updatedMaxScore.textContent= this.value;
       maxScore= Number(this.value);
       reset();
	})
