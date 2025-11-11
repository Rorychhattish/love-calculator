// Move to second input after Enter on first input
document.getElementById("name1").addEventListener("keyup", function (event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        document.getElementById("name2").focus();
    }
});

// Calculate after Enter on second input
document.getElementById("name2").addEventListener("keyup", function (event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        calculateLove();
    }
});

// Load history from localStorage
function loadHistory() {
    const historyBox = document.getElementById("history");
    const history = JSON.parse(localStorage.getItem("loveHistory")) || [];
    historyBox.innerHTML = "";
    history.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        historyBox.appendChild(p);
    });
}

// Calculate function
function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    // Generate random love percentage between 50-100
    const loveScore = Math.floor(Math.random() * 51) + 50;

    let message = "";
    if (loveScore > 90) {
        message = `${name1} ❤️ ${name2} are a perfect match with ${loveScore}% love! 💖`;
    } else if (loveScore > 80) {
        message = `${name1} 💞 ${name2} have a strong bond with ${loveScore}% love!`;
    } else if (loveScore > 70) {
        message = `${name1} 💞 ${name2} have a good bond with ${loveScore}% love!`;
    } else {
        message = `${name1} ❤️ ${name2} have ${loveScore}% love compatibility! Keep growing together!`;
    }

    document.getElementById("result").innerHTML = message;

    // Save to history
    let history = JSON.parse(localStorage.getItem("loveHistory")) || [];
    history.unshift(message); // Add to top
    if (history.length > 10) history.pop(); // Keep last 10 only
    localStorage.setItem("loveHistory", JSON.stringify(history));

    loadHistory();
}

// Load history on page load
window.onload = loadHistory;
