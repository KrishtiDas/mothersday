/* =========================
   CARDS
========================= */

const cards = document.querySelectorAll(".card");

let current = 0;

/* =========================
   TYPEWRITER EFFECT
========================= */

function typeWriter(element, text, speed = 35) {

    if (!element) return;

    if (element.dataset.done === "true") return;

    element.dataset.done = "true";

    element.classList.add("typing");

    let i = 0;

    function typing() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        } else {

            element.classList.remove("typing");

        }
    }

    typing();
}

/* =========================
   FIRST CARD FRONT TEXT
========================= */

window.addEventListener("load", () => {

    typeWriter(
        document.getElementById("text1"),
        "To the most wonderful Maa in the world 🌸"
    );

});

/* =========================
   CARD CLICK LOGIC
========================= */

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        /* LAST CARD */

        if (index === 2) {

            card.classList.remove("active");

            setTimeout(() => {

                current = 0;

                cards[0].classList.add("active");

            }, 500);

            return;
        }

        /* FIRST CLICK = FLIP */

        if (!card.classList.contains("flipped")) {

            card.classList.add("flipped");

            /* CARD 1 MESSAGE */

            if (index === 0) {

                typeWriter(
                    document.getElementById("text2"),
                    "Thank you for your endless love, sacrifices and care. You are my strength, my happiness and my biggest blessing. 💖"
                );
            }

            /* CARD 2 MESSAGE */

            if (index === 1) {

                typeWriter(
                    document.getElementById("text3"),
                    "Every success of mine carries your blessings. Every smile of mine begins because of you. Thank you for always believing in me. 🌷✨"
                );
            }

        }

        /* SECOND CLICK = NEXT CARD */

        else {

            card.classList.add("hide");

            setTimeout(() => {

                card.classList.remove("active");
                card.classList.remove("flipped");
                card.classList.remove("hide");

                current = (current + 1) % cards.length;

                cards[current].classList.add("active");

                /* LAST CARD MESSAGE */

                if (current === 2) {

                    typeWriter(
                        document.getElementById("text4"),
                        "No matter how much I grow, I will always be your little child. Thank you for every sacrifice, every prayer and every smile. Love you forever Maa ❤️"
                    );
                }

            }, 700);
        }
    });
});


/* =========================
   MOBILE SUPPORT
========================= */

document.addEventListener(
    "click",
    () => {

        if (!isPlaying) {

            bgMusic.volume = 0.2;

        }

    },
    { once: true }
);