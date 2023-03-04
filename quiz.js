//let . = document.querySelector("._");

let experience = document.querySelector(".experience");
  let yes = document.querySelector("#yes1");
  let no = document.querySelector("#no1");

let goals = document.querySelector(".goals");
goals.style.display = "none";
  let goal1 = document.querySelector(".goal1");
  let goal2 = document.querySelector(".goal2");
  let goal3 = document.querySelector(".goal3");
  let goal4 = document.querySelector(".goal4");
  let goal5 = document.querySelector(".goal5");

let practice = document.querySelector(".practice");
practice.style.display = "none";
  let pr1 = document.querySelector(".pr1");
  let pr2 = document.querySelector(".pr2");
  let pr3 = document.querySelector(".pr3");


let music = document.querySelector(".music");
music.style.display = "none";
let enter = document.querySelector(".enterButton");

function nextQuestion(noneDiv, blockDiv) {
  noneDiv.style.display = "none";
  blockDiv.style.display = "block";
}

//experience
yes.onclick = function() {
   let current = document.querySelector(".experience");
  let next = document.querySelector(".goals");
  nextQuestion(current,next);
}

no.onclick = function() {
  
  let current = document.querySelector(".experience");
  let next = document.querySelector(".goals");
  nextQuestion(current, next);
}

//goals
goal1.onclick = function() {
  
   let current = document.querySelector(".goals");
  let next = document.querySelector(".practice");
  nextQuestion(current,next);
}

goal2.onclick = function() {
  
   let current = document.querySelector(".goals");
  let next = document.querySelector(".practice");
  nextQuestion(current,next);
}

goal3.onclick = function() {
  
   let current = document.querySelector(".goals");
  let next = document.querySelector(".practice");
  nextQuestion(current,next);
}

goal4.onclick = function() {
  
   let current = document.querySelector(".goals");
  let next = document.querySelector(".practice");
  nextQuestion(current,next);
}

goal5.onclick = function() {
 
   let current = document.querySelector(".goals");
  let next = document.querySelector(".practice");
  nextQuestion(current,next);
}

pr1.onclick = function() {
  let current = document.querySelector(".practice");
  let next = document.querySelector(".music");
  nextQuestion(current,next);
}

pr2.onclick = function() {
  let current = document.querySelector(".practice");
  let next = document.querySelector(".music");
  nextQuestion(current,next);
}

pr3.onclick = function() {
  let current = document.querySelector(".practice");
  let next = document.querySelector(".music");
  nextQuestion(current,next);
}


enter.onclick = function() {
let number = Number(document.querySelector (".userInput").value);
 if (number === 1) {
    window.location.href = "/piano.html";  
 } else if (number === 2) {
   window.location.href = "/guitar.html";
 } else if (number === 3) {
   window.location.href = "/guitar.html";
 } else if (number === 4) {
   window.location.href = "/piano.html";
 }
  
}



