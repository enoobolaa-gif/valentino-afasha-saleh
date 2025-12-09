const fades = document.querySelectorAll(".fade-in");

function checkFade() {
    fades.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);
let A = [];
let B = [];
let result = [];

function generateMatrix() {
    A = [];
    B = [];
    result = [];

    for (let i = 0; i < 4; i++) {
        let a = Math.floor(Math.random() * 9) + 1;
        let b = Math.floor(Math.random() * 9) + 1;

        A.push(a);
        B.push(b);
        result.push(a + b);
    }

    const matrixA = document.getElementById("matrixA");
    const matrixB = document.getElementById("matrixB");
    const inputBox = document.getElementById("matrixInput");

    matrixA.innerHTML = "";
    matrixB.innerHTML = "";
    inputBox.innerHTML = "";

    A.forEach(val => {
        let div = document.createElement("div");
        div.textContent = val;
        matrixA.appendChild(div);
    });

    B.forEach(val => {
        let div = document.createElement("div");
        div.textContent = val;
        matrixB.appendChild(div);
    });

    for (let i = 0; i < 4; i++) {
        let input = document.createElement("input");
        input.type = "number";
        inputBox.appendChild(input);
    }
}

function checkAnswer() {
    const inputs = document.querySelectorAll("#matrixInput input");
    let correct = true;

    inputs.forEach((input, i) => {
        if (parseInt(input.value) !== result[i]) {
            correct = false;
        }
    });

    const text = document.getElementById("gameResult");
    if (correct) {
        text.textContent = "✅ Jawaban Benar! Hebat!";
        text.style.color = "green";
        generateMatrix();
    } else {
        text.textContent = "❌ Jawaban Salah! Coba Lagi.";
        text.style.color = "red";
    }
}

generateMatrix();
