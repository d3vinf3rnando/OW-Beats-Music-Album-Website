// Timer Implementation
let timer;
let countdownClock = 60;
function countdown() {
  countdownClock--;
  //modify inner html for each second
  document.getElementById(
    "timer"
  ).innerHTML = `${countdownClock} seconds remaining`;
  if (countdownClock == 0) {
    // if timer ends auto submit
    evaluateQuestion();
  }
  // change the color for last 10 seconds
  if (countdownClock == 10) {
    lastSecs();
  }
}
// change the color in to red in last 10 seconds
function lastSecs() {
  document.body.style.backgroundImage =
    "linear-gradient(to bottom right,rgb(255, 82, 82),rgb(241, 114, 114))";
}

//when clicked Start the Quiz
function startFunc() {
  // display the quiz
  document.querySelector(".form").style.display = "flex";
  document.querySelector(".timer").style.display = "block";
  //start the timer by calling the function every second
  timer = setInterval(countdown, 1000);
  //hide the buttons
  document.getElementById("startQuiz").style.display = "none";
  //remove the margin right after clicked
  document.querySelector(".startDiv").style.marginBottom = "40px";
}

//clear the timer once submitted
function countdownStop() {
  clearInterval(timer);
}

//scroll down to marks after submitting
function scrollWin() {
  window.scrollBy(0, 400);
}
4; // inner html text for wrong answers
let htmlSTR = "";

//once clicked submit
function evaluateQuestion() {
  let counter = 0;
  let correctAnswer = "";
  let selectedAnswer = "";
  let checkCorrect = true;
  let clicked = false;

  // check the answers
  for (let i = 0; i < 10; i++) {
    // pick the class name of question q1, q2, q3 using iterator variable
    let radioname = "q" + (i + 1);
    //select all elements for an array
    let radioNodeList = document.getElementsByName(radioname);
    //loop through answer array
    radioNodeList.forEach((element) => {
      // store the correct answer
      if (element.value != "wrong") {
        correctAnswer = element.parentElement.innerText;
      }
      // check whether the radio is checked
      if (element.checked) {
        // figure an answer is being ticked and store the selected answer
        clicked = true;
        selectedAnswer = element.parentElement.innerText;

        // if the answer is correct, increment 2 marks
        if (element.value != "wrong") {
          counter = counter + 2;
          // stores that user has given the correct answer
          checkCorrect = true;
        }
        // if the answer is wrong
        else {
          counter = counter - 1;
          //stores that user has given an wrong answer
          checkCorrect = false;
          //using template iterals, store the question by chainning through nodes in DOM tree
          //Then store the selected answer in the same string
          htmlSTR =
            htmlSTR +
            `<div class="corrections">
           <p class="question-correction">  
           ${element.parentElement.parentElement.firstElementChild.innerText} </p> 
            <p class="answer-clicked"> Your answer:  ${selectedAnswer} </p>`;
        }
      }
    });
    // if an answer has been chosen and answer is wrong, correct answer would be stored to the same previous string
    if (checkCorrect == false && clicked == true) {
      htmlSTR =
        htmlSTR +
        `<p class="answer-correct"> Correct Answer:  ${correctAnswer} </p> </div> `;
    }
    clicked = false;
  }
  //insert the stored the stored string to inner HTNL
  document.getElementById("correctionList").innerHTML = htmlSTR;
  document.getElementById("retake").style.display = "inline";
  document.getElementById("quit").style.display = "inline";

  // display marks
  document.getElementById("marks").style.display = "block";
  //hide the quiz
  document.getElementById("form").style.display = "none";
  //change the message according to marks
  if (counter > 0) {
    document.getElementById(
      "markspara"
    ).textContent = `🎉🎉Congratulations, your score is ${counter}`;
  } else {
    document.getElementById("markspara").textContent = `😲
      Oops!!!, your score is ${counter}`;
  }

  // insert vlaues to inner TEXT
  document.getElementById("quizheader").textContent = `Your Score`;
  //CALL scrolling function
  scrollWin();
  
  //change background color according to marks
  if (counter <= 0) {
    document.body.style.backgroundImage =
      "linear-gradient(to bottom right, #ff4444, rgb(255, 134, 134))";
    document.querySelector(".navbar").style.backgroundImage =
      "linear-gradient(to bottom right, #ff4444, rgb(255, 134, 134))";
  } else if (counter <= 10) {
    document.body.style.backgroundImage =
      "linear-gradient(to bottom right, #ffb649, #ffce85)";
    document.querySelector(".navbar").style.backgroundImage =
      "linear-gradient(to bottom right, #ffb649, #ffce85)";
  } else {
    document.body.style.backgroundImage =
      "linear-gradient(to bottom right, rgb(125, 255, 65), rgb(158, 255, 112))";
    document.querySelector(".navbar").style.backgroundImage =
      "linear-gradient(to bottom right, rgb(125, 255, 65), rgb(158, 255, 112))";
  }
  //stop the timer
  countdownStop();
  //display the time took
  if (countdownClock > 0) {
    document.getElementById("timer").innerHTML = `You completed the quiz in ${
      60 - countdownClock
    } seconds`;
  } else {
    document.getElementById("timer").innerHTML = `Time over`;
  }

}



// select all the answer selectors
let answerBoxes = document.querySelectorAll(".answerbox");

//Add addEventListener to pick the click with the target location
answerBoxes.forEach((element) => {
  element.addEventListener("click", changeBox);
});

function changeBox(e) {
// event bubbling happens since input and label both get selected
// but event.name is existing only  in label. So that event can be filtered in using if condiiton
  if (e.target.name) {
    //first make all the backgroundColors yellow
    document.getElementsByName(`${e.target.name}`).forEach((element) => {
      element.parentElement.style.backgroundColor = "#ffb72b";
    });
    //only clicked element will be red
    e.target.parentElement.style.backgroundColor = "red";
  }
}
