var mode = "stopwatch";

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

var timer = document.getElementById("stopwatch");
var btnStart = document.getElementById("btn-start");
var btnStop = document.getElementById("btn-stop");
var btnReset = document.getElementById("btn-reset");

var btnCountdown = document.getElementById("btn-countdown");
var btnStopWatch = document.getElementById("btn-stopwatch");

var durasiCountDown = document.getElementsByClassName("container2");

var countDownTimeOption = document.querySelectorAll("[id=btn-countdown-val]");

// var countDownManual = document.getElementById("input-countdown").value;

// console.log("------>", countDownManual);

btnStopWatch.addEventListener("click", () => {
  durasiCountDown[0].classList.add("hidden");

  btnStopWatch.style.background = "#50C878";
  btnCountdown.style.background = "#ffffff";

  mode = "stopwatch";
});

btnCountdown.addEventListener("click", () => {
  durasiCountDown[0].classList.remove("hidden");
  btnCountdown.style.background = "#50C878";
  btnStopWatch.style.background = "#ffffff";
  mode = "countdown";
});

countDownTimeOption.forEach((val, key) => {
  val.addEventListener("click", () => {
    var duration = countDownTimeOption[key].value;

    hr = Math.floor(duration / 3600);
    min = Math.floor((duration % 3600) / 60);
    sec = Math.floor(duration % 60);

    timer.innerHTML = hr + ":" + min + ":" + sec;
  });
});

btnStart.addEventListener("click", () => {
  startTimer();
});

btnStop.addEventListener("click", () => {
  stopTimer();
});

btnReset.addEventListener("click", () => {
  hr = 0;
  min = 0;
  sec = 0;
  stoptime = true;

  timer.innerHTML = `00` + ":" + `00` + ":" + `00`;
});

function startTimer() {
  if (stoptime == true) {
    stoptime = false;

    if (mode == "stopwatch") {
      timerCycle();
    } else {
      timerCountDown();
    }
  }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }

    if (min < 10 || min == 0) {
      min = "0" + min;
    }

    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function timerCountDown() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    if (sec > 0) {
      sec = sec - 1;
    } else if (min > 0) {
      min = min - 1;
      sec = 60;
    } else if (hr > 0) {
      hr = hr - 1;
      min = 59;
      sec = 60;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timerCountDown()", 1000);
  }
}
