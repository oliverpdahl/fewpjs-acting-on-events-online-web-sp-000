// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerDirection(direction) {
  let Numbers = dodger.style.direction.replace("px", "");
  let directionInt = parseInt(leftNumbers, 10);

  if (directionInt > 0) {
    dodger.style.direction = `${directionInt - 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
