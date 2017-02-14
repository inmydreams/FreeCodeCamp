var gameSequence = [];
var showCount = 0;
var gameTakenSequence = [];
var strict = false;
var WIN = 20;
var NAME = "Simon";

function getStep(color) {
  switch (color) {
    case "green":
      return 0;
    case "red":
      return 1;
    case "blue":
      return 2;
    case "yellow":
      return 3;
  }
}

function audioGameButton(color) {
  switch (color) {
    case 0:
      $("#greenSound")[0].play();
      break;
    case 1:
      $("#redSound")[0].play();
      break;
    case 2:
      $("#blueSound")[0].play();
      break;
    case 3:
      $("#yellowSound")[0].play();
      break;
  }
}

function addStep() {
  gameSequence.push(Math.floor(Math.random() * (3 + 1)));
  $(".game-screen").text(gameSequence.length);
}

function getButtonElement(button) {
  switch (button) {
    case 0:
      return $("#green");
    case 1:
      return $("#red");
    case 2:
      return $("#blue");
    case 3:
      return $("#yellow");
  }
}

function setGameButtonTo(button, push) {

  var buttonElement = getButtonElement(button);
  if (push) {
    console.log("b", button);
    buttonElement.removeClass("unpushed").addClass("pushed");
  } else {
    console.log("a", button);
    buttonElement.removeClass("pushed").addClass("unpushed");
  }

}

function setTo(button, playable) {
  var buttonElement = getButtonElement(button);
  if (playable) {
    buttonElement.removeClass("nonplayable").addClass("playable");
  } else {
    buttonElement.removeClass("playable").addClass("nonplayable");
  }
}

function show() {
  setTo(0, false);
  setTo(1, false);
  setTo(2, false);
  setTo(3, false);

  setGameButtonTo(gameSequence[showCount], true);
  audioGameButton(gameSequence[showCount]);

  window.setTimeout(function() {
    setGameButtonTo(gameSequence[showCount], false);
    if (showCount < gameSequence.length - 1) {
      showCount++;
      show();
    } else {
      showCount = 0;
      setTo(0, true);
      setTo(1, true);
      setTo(2, true);
      setTo(3, true);
    }
  }, 2000);
}

function showGameSteps() {
  console.log("gameSequence");
  show();
  console.log(gameSequence);
}

function isCorrectStep(color) {
  return gameSequence[gameTakenSequence.length] === color;
}

function isSequenceDone() {
  return gameSequence.length === gameTakenSequence.length;
}

function resetGame() {
  NAME = "Simon";
  $(".game-name").text(NAME);
  gameSequence = [];
  addStep();
}

function resetGamersSteps() {
  gameTakenSequence = [];
}

$(document).ready(function() {
  resetGame();

  $(".game-button").on("click", function() {
    var color = getStep($(this).attr("id"));
    audioGameButton(color);

    if (isCorrectStep(color)) {
      gameTakenSequence.push(color);
    } else {
      $(".game-name").text("ERROR");
      window.setTimeout(function() {
        $(".game-name").text(NAME);
      }, 1000);
      if (strict) {
        resetGamersSteps();
        resetGame();
      } else {
        resetGamersSteps();
      }
      window.setTimeout(function() {
        showGameSteps();
      }, 1000);
    }

    if (isSequenceDone()) {
      console.log("DONE");
      if (WIN <= gameSequence.length) {
        NAME = "WIN";
        $(".game-name").text(NAME);
      }
      window.setTimeout(function() {
        resetGamersSteps();
        addStep();
        showGameSteps();
      }, 1000);
    }

  });

  $("#game-start").on("click", function() {
    resetGamersSteps();
    resetGame();
    showGameSteps();
  });

  $("#game-strict").on("click", function() {
    if (strict) {
      strict = false;
    } else {
      strict = true;
    }
    console.log("strict", strict)
  });
});