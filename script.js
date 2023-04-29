let header = document.querySelector("#main-header");
let homeButton = document.getElementById("home-button");
let aboutButton = document.getElementById("author-button");
let buyButton = document.getElementById("buy-button");
let artButton = document.getElementById("art-button");
let navbar = document.getElementById("navbar");
let photo = document.getElementById("test");
let pHeaders = document.querySelectorAll(".headers");
let paragraphs = document.querySelectorAll(".paragraphs");
let body = document.querySelector("body");
let content = document.getElementById("content");
let images = document.querySelectorAll("figure");
let animationSection = document.getElementById("animation-pause");

let stopButton = document.querySelector("#stop-button");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let timerLabel = document.getElementById("timer-label");

minutesCounter = 5;
secondsCounter = 0;
running = true;

// Timer Counter
function counter() {
  if (secondsCounter > 0 || minutesCounter > 0) {
    secondsCounter -= 1;
  }

  if (secondsCounter < 0) {
    minutesCounter -= 1;
    secondsCounter = 59;

    minutes.textContent = "0" + minutesCounter;
    seconds.textContent = secondsCounter;
  } else {
    minutes.textContent = "0" + minutesCounter;
    if (secondsCounter < 10) {
      seconds.textContent = "0" + secondsCounter;
    } else {
      seconds.textContent = secondsCounter;
    }
  }

  if (minutesCounter == 0 && secondsCounter == 0) {
    minutes.textContent = "00";
    seconds.textContent = "00";
    timerLabel.textContent = "Lights out...";
    stopButton.value = "You can't escape now...";
    running = null;
    setInterval(jumpscare, 10000);
  }
}

animationTimer = setInterval(counter, 1000);

function pauseTimer() {
  clearInterval(animationTimer);
  running = false;
  stopButton.value = "Resume Animation";
}

function resumeTimer() {
  animationTimer = setInterval(counter, 1000);
  stopButton.value = "Prevent Animation";
  running = true;
}

stopButton.addEventListener("click", () => {
  if (running == true) {
    pauseTimer();
  } else if (running == false) {
    resumeTimer();
  } else {
    alert("You've waited too long. \n He's coming");
  }
});

function jumpscare() {
  // var gЯiℵ々εr = [
  //   "What does 'die' mean?",
  //   "It's me.",
  //   "You can't escape.",
  //   "I'm everywhere",
  //   "You will face me.",
  //   "Don't cry, just scream.",
  //   "You look pretty without your skin.",
  //   "You have something I want.",
  //   "This person has what you want sir.",
  //   "I shall grind and collect.",
  //   "You can run but you can't hide.",
  // ];
  // gЯiℵ々εrCounter = 0;
  // for (var j = 0; j < 10000; j++) {
  //   console.log(gЯiℵ々εr[j]);
  //   if (gЯiℵ々εrCounter < gЯiℵ々εr.length - 1) {
  //     gЯiℵ々εrCounter++;
  //   } else {
  //     gЯiℵ々εrCounter = 0;
  //   }
  // }

  //Initial text change for main header
  header.textContent = "run.";

  //Text Changes for anchor elements
  setInterval(() => {
    homeButton.textContent = "hide.";
  }, 1000);
  setInterval(() => {
    aboutButton.textContent = "panic.";
  }, 2000);
  setInterval(() => {
    artButton.textContent = "scream.";
  }, 3000);
  setInterval(() => {
    buyButton.textContent = "die.";
  }, 4000);

  //Changes color for items to make them "disappear"
  setInterval(() => {
    header.style.color = "black";
  }, 5000);
  setInterval(() => {
    navbar.style.background = "black";
  }, 6000);
  setInterval(() => {
    homeButton.style.color = "black";
  }, 7000);
  setInterval(() => {
    aboutButton.style.color = "black";
  }, 8000);
  setInterval(() => {
    artButton.style.color = "black";
  }, 9000);
  setInterval(() => {
    buyButton.style.color = "black";
    animationSection.style.display = "none";
    // minutes.style.color = "black";
    // seconds.style.color = "black";
    // timerLabel.style.color = "black";
    // stopButton.style.color = "black";
    // stopButton.style.backgroundColor = "black";
  }, 10000);
  setInterval(() => {
    for (var i = 0; i < pHeaders.length; i++) {
      pHeaders[i].style.color = "black";
    }
  }, 11000);
  setInterval(() => {
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "black";
    }
  }, 12000);
  setInterval(() => {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
  }, 14000);
  setInterval(() => {
    content.style.display = "none";
  }, 16000);

  //Shows image
  setInterval(() => {
    photo.style.display = "block";
    body.style.overflow = "hidden";
  }, 17000);
  setInterval(() => {
    location.reload();
  }, 20000);
}
