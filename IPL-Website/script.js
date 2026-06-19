// ======================
// FAN POLL
// ======================

function votePlayer() {
    alert("Thank you for supporting the Orange Army! 🧡");
}


// ======================
// QUIZ
// ======================

function checkQuiz() {

    let score = 0;

    if(document.getElementById("q1a").checked) score++;
    if(document.getElementById("q2a").checked) score++;
    if(document.getElementById("q3a").checked) score++;

    document.getElementById("quizResult").innerHTML =
        "🏏 Your Score: " + score + "/3";

}


// ======================
// FAN MESSAGE WALL
// ======================

function postMessage() {

    const input = document.getElementById("fanMessage");

    if(input.value.trim() === "") return;

    const container = document.getElementById("messages");

    const message = document.createElement("div");

    message.classList.add("fan-post");

    message.innerHTML =
        "🧡 " + input.value;

    container.prepend(message);

    input.value = "";

}


// ======================
// COUNTDOWN TIMER
// ======================

const matchDate =
new Date("March 28, 2027 19:30:00").getTime();

const countdown = setInterval(function() {

    const now = new Date().getTime();

    const distance = matchDate - now;

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
    );

    const seconds =
    Math.floor(
    (distance % (1000 * 60))
    / 1000
    );

    const countdownElement =
    document.getElementById("countdown");

    if(countdownElement){

        countdownElement.innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    }

    if(distance < 0){

        clearInterval(countdown);

        if(countdownElement){
            countdownElement.innerHTML =
            "🏏 Match Day Has Arrived!";
        }

    }

},1000);


// ======================
// SCROLL ANIMATION
// ======================

window.addEventListener("scroll", () => {

    const cards =
    document.querySelectorAll(
        ".match-card,.news-card,.fan-card"
    );

    cards.forEach(card => {

        const position =
        card.getBoundingClientRect().top;

        const screen =
        window.innerHeight;

        if(position < screen - 100){

            card.style.opacity = "1";
            card.style.transform =
            "translateY(0)";

        }

    });

});