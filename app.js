// ===============================
// TYPEWRITER EFFECT
// ===============================
const typingElement = document.getElementById("typing-text");

if (typingElement) {
    const text = "Captain Mayank Attri";
    let index = 0;

    typingElement.textContent = "";

    function typeWriter() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
}

// ===============================
// LIVE CLOCK
// ===============================
const clock = document.getElementById("clock");

function updateClock() {
    const now = new Date();

    if (clock) {
        clock.textContent = now.toLocaleTimeString();
    }
}

setInterval(updateClock, 1000);
updateClock();

// ===============================
// CURRENT DATE
// ===============================
const currentDate = document.getElementById("currentDate");

if (currentDate) {
    const today = new Date();

    currentDate.textContent =
        today.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}

// ===============================
// VISITOR COUNTER
// ===============================
const visitorCount = document.getElementById("visitorCount");

let visits = localStorage.getItem("visits") || 0;
visits++;

localStorage.setItem("visits", visits);

if (visitorCount) {
    visitorCount.textContent = visits;
}

// ===============================
// PROFILE IMAGE ZOOM
// ===============================
const profileImg = document.getElementById("profile-img");

if (profileImg) {
    profileImg.addEventListener("click", () => {
        profileImg.classList.toggle("zoom");
    });
}

// ===============================
// THEME SWITCHER
// ===============================
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const armyBtn = document.getElementById("armyBtn");

function setTheme(theme) {
    document.body.classList.remove(
        "dark-mode",
        "army-mode"
    );

    if (theme) {
        document.body.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
}

if (lightBtn) {
    lightBtn.addEventListener("click", () => {
        setTheme("");
    });
}

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        setTheme("dark-mode");
    });
}

if (armyBtn) {
    armyBtn.addEventListener("click", () => {
        setTheme("army-mode");
    });
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.add(savedTheme);
}

// ===============================
// QUOTE GENERATOR
// ===============================
const quotes = [
    "Service Before Self.",
    "Discipline is the soul of an army.",
    "Victory belongs to the most persevering.",
    "Lead from the front.",
    "Nation First, Always and Every Time.",
    "Courage is knowing what not to fear.",
    "Bravery never goes out of fashion."
];

const quoteElement = document.getElementById("quote");
const quoteBtn =
    document.getElementById("newQuote") ||
    document.getElementById("quoteBtn");

if (quoteBtn && quoteElement) {
    quoteBtn.addEventListener("click", () => {
        const random =
            Math.floor(Math.random() * quotes.length);

        quoteElement.textContent =
            `"${quotes[random]}"`;
    });
}

// ===============================
// EXPLORE JOURNEY BUTTON
// ===============================
const exploreBtn =
    document.getElementById("exploreBtn");

const journey =
    document.getElementById("journey");

if (exploreBtn && journey) {
    exploreBtn.addEventListener("click", () => {
        journey.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// ===============================
// ANIMATED COUNTERS
// ===============================
const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const count =
            +counter.innerText;

        const increment =
            Math.ceil(target / 100);

        if (count < target) {

            counter.innerText =
                count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();
});

// ===============================
// CONTACT FORM
// ===============================
const form =
    document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "✅ Message Sent Successfully!"
        );

        form.reset();
    });
}

// ===============================
// SCROLL TO TOP BUTTON
// ===============================
const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ===============================
// ACHIEVEMENT CARD EFFECT
// ===============================
const achievements =
    document.querySelectorAll(
        ".achievement-card"
    );

achievements.forEach(card => {

    card.addEventListener("click", () => {

        alert(
            "🏅 Achievement Unlocked!"
        );
    });
});

// ===============================
// EASTER EGG
// Type INDIA
// ===============================
let secret = "";

document.addEventListener(
    "keydown",
    (e) => {

        secret += e.key.toUpperCase();

        if (
            secret.includes("INDIA")
        ) {

            alert("🇮🇳 JAI HIND!");

            secret = "";
        }

        if (secret.length > 20) {
            secret = "";
        }
    }
);

// ===============================
// AUTO QUOTE CHANGE
// ===============================
setInterval(() => {

    if (!quoteElement) return;

    const random =
        Math.floor(
            Math.random() *
            quotes.length
        );

    quoteElement.textContent =
        `"${quotes[random]}"`;

}, 10000);

