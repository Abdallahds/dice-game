function roll()
{
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById("left-image").src = "images/dice" + randomNumber1 + ".png";
  document.getElementById("right-image").src = "images/dice" + randomNumber2 + ".png";

  if (randomNumber1 == randomNumber2)
    document.getElementById("header").innerHTML = "🚩drow🚩";
  else if (randomNumber1 > randomNumber2)
    document.getElementById("header").innerHTML = "🚩player one wins";
  else
  document.getElementById("header").innerHTML = "player two wins🚩";
}


document.getElementById("start").addEventListener("click", roll);
