function q1() {
  const right_answer = "ashe";
  let text = document.getElementById("ashe").value;
  if (text.toLowerCase() == right_answer) {
    document.getElementById("q1").innerHTML = "Who is this champion? (1/1)";
    console.log("Q1: Correct");
    return 1;
  } else {
    document.getElementById("q1").innerHTML = "Who is this champion? (0/1)";
    console.log("Q1: Incorrect");
    return 0;
  }
}

function q2() {
  const right_answer = "jhin";
  let text = document.getElementById("jhin").value;
  if (text.toLowerCase() == right_answer) {
    document.getElementById("q2").innerHTML = "Who is this champion? (1/1)";
    console.log("Q2: Correct");
    return 1;
  } else {
    document.getElementById("q2").innerHTML = "Who is this champion? (0/1)";
    console.log("Q2: Incorrect");
    return 0;
  }
}

function q3() {
  const right_answer = "caitlyn";
  let text = document.getElementById("caitlyn").value;
  if (text.toLowerCase() == right_answer) {
    document.getElementById("q3").innerHTML = "Who is this champion? (1/1)";
    console.log("Q3: Correct");
    return 1;
  } else {
    document.getElementById("q3").innerHTML = "Who is this champion? (0/1)";
    console.log("Q3: Incorrect");
    return 0;
  }
}

function q4() {
  const right_answer = "zed";
  let text = document.getElementById("zed").value;
  if (text.toLowerCase() == right_answer) {
    document.getElementById("q4").innerHTML = "Who is this champion? (1/1)";
    console.log("Q4: Correct");
    return 1;
  } else {
    document.getElementById("q4").innerHTML = "Who is this champion? (0/1)";
    console.log("Q4: Incorrect");
    return 0;
  }
}

function q5() {
  let right_answer = document.getElementById("janna");
  if (right_answer.checked == true) {
    document.getElementById("q5").innerHTML = "Which one of these are champions? (1/1)";
    console.log("Q5: Correct");
    return 1;
  } else {
    document.getElementById("q5").innerHTML = "Which one of these are champions? (0/1)";
    console.log("Q5: Incorrect");
    return 0;
  }
}

function q6() {
  let counter = 0;
  let right_answers = document.getElementsByClassName("correct");
  for (let i=0; i<right_answers.length; i++) {
    if (right_answers[i].checked == true) {
      counter++;
    }
  }
  document.getElementById("q6").innerHTML = "Which of these are champions? (" + counter + "/2)";
  console.log("Q6: " + counter + " correct");
  return counter;
}

function submit() {
  let score = 0;
  let pointsArray = [
    q1(),
    q2(),
    q3(),
    q4(),
    q5(),
    q6(),
  ];
  for (let i=0; i<pointsArray.length; i++) {
    score += pointsArray[i];
  }
  document.getElementById("header").innerHTML = "League of Legends Quiz Total Mark (" + score + "/7)";
  console.log(score + " Correct");
  return score;
}

function message() {
  let total_score = submit();
  if (total_score == 7) {
    document.getElementById("display_message").innerHTML = "Perfect Score!";
  }
  if (total_score == 4 || total_score == 5 || total_score == 6) {
    document.getElementById("display_message").innerHTML = "Very Good";
  }
  if (total_score == 1 || total_score == 2 || total_score == 3) {
    document.getElementById("display_message").innerHTML = "So Bad!";
  }
  if (total_score == 0) {
    document.getElementById("display_message").innerHTML = "You Failed...";
  }
}

function show_answers() {
  document.getElementById("q1_answer").innerHTML = "Ashe";
  document.getElementById("q2_answer").innerHTML = "Jhin";
  document.getElementById("q3_answer").innerHTML = "Caitlyn";
  document.getElementById("q4_answer").innerHTML = "Zed";
  document.getElementById("q5_answer").innerHTML = "Janna";
  document.getElementById("q6_answer").innerHTML = "Darius & Anivia";
}

function main() {
  submit();
  show_answers();
  message();
}
