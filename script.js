var a = document.getElementById("input");
var b = document.getElementById("result");
var c = document.getElementById("guesscount");
var randomnumber = Math.floor(Math.random() * 10) + 1;
var no_of_guesses = 3;
if (randomnumber > 5) {
  randomnumber = randomnumber - 5;
}
//Event handler function
function numbercheck() {
  if (a.value == randomnumber) {
    alert("you are Right,Congratulations!");
    b.textContent = "You Are Right!";
  } else {
    no_of_guesses = no_of_guesses - 1;
    if (no_of_guesses == 0) {
      alert("You Lost,Generated Random Number is" + randomnumber);
    }

    c.textContent = "Available Guesses:" + no_of_guesses;
    b.textContent = "You are Wrong";
  }
}
