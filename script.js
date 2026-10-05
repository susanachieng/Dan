/* =========================
   CHANGE THE NAME HERE
========================= */

const birthdayPerson = "MR DARRIOL";


/* =========================
   PUT NAME ON PAGE
========================= */

document.getElementById("personName").textContent =
    birthdayPerson + " 🎂";


document.getElementById("finalName").textContent =
    birthdayPerson;



/* =========================
   OPEN GIFT
========================= */

function openGift() {

    document
        .getElementById("intro")
        .classList.add("hidden");


    document
        .getElementById("birthday")
        .classList.remove("hidden");


    createConfetti();

}



/* =========================
   SECOND PAGE
========================= */

function nextPage() {

    document
        .getElementById("birthday")
        .classList.add("hidden");


    document
        .getElementById("message")
        .classList.remove("hidden");

}



/* =========================
   PHOTO PAGE
========================= */

function showPhotos() {

    document
        .getElementById("message")
        .classList.add("hidden");


    document
        .getElementById("photos")
        .classList.remove("hidden");

}



/* =========================
   FINAL SURPRISE
========================= */

function finalSurprise() {

    document
        .getElementById("photos")
        .classList.add("hidden");


    document
        .getElementById("final")
        .classList.remove("hidden");


    createConfetti();

}



/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const emojis = [
        "🎉",
        "🎊",
        "✨",
        "🎈",
        "🥳",
        "💖"
    ];


    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");


        confetti.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 + "%";


        confetti.style.top =
            "-50px";


        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";


        confetti.style.zIndex =
            "9999";


        confetti.style.pointerEvents =
            "none";


        const duration =
            Math.random() * 3 + 3;


        confetti.style.animation =
            `confettiFall ${duration}s linear`;


        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, duration * 1000);

    }

}



/* =========================
   CONFETTI ANIMATION
========================= */

const confettiStyle =
    document.createElement("style");


confettiStyle.innerHTML = `

@keyframes confettiFall {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;

    }

    100% {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;

    }

}

`;


document.head.appendChild(
    confettiStyle
);