let submit = document.getElementById("submit");
let answer1 = document.getElementById("Ans1");
let answer2 = document.getElementById("Ans4");
let answer3 = document.getElementById("Ans6");
let answer4 = document.getElementById("Ans7");
let answer5 = document.getElementById("Ans9");
let answer6 = document.getElementById("Ans11");
let answer7 = document.getElementById("Ans13");
let answer8 = document.getElementById("Ans16");
let answer9 = document.getElementById("Ans17");
let answer10 = document.getElementById("Ans19");
submit.addEventListener('click', function(){
    let correctAnswers = 0;
    if (answer1.checked) correctAnswers++;
    if (answer2.checked) correctAnswers++;
    if (answer3.checked) correctAnswers++;
    if (answer4.checked) correctAnswers++;
    if (answer5.checked) correctAnswers++;
    if (answer6.checked) correctAnswers++;
    if (answer7.checked) correctAnswers++;
    if (answer8.checked) correctAnswers++;
    if (answer9.checked) correctAnswers++;
    if (answer10.checked) correctAnswers++;
    let percentage = (correctAnswers/10) *100;
    alert(`Your percentage is ${percentage}%`);
});



