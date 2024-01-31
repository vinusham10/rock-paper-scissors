let rockUser = document.getElementById("rock-user");
let paperUser = document.getElementById("paper-user");
let scissorsUser = document.getElementById("scissors-user");

let rockComp = document.getElementById("rock-comp");
let paperComp = document.getElementById("paper-comp");
let scissorsComp = document.getElementById("scissors-comp");

let rockButtonUser = document.getElementById("rockButtonUser");
let paperButtonUser = document.getElementById("paperButtonUser");
let scissorsButtonUser = document.getElementById("scissorsButtonUser");

let userScoreDisplay = document.getElementById("userScore");
let computerScoreDisplay = document.getElementById("computerScore");

let restartButton = document.getElementById("restartButton");

let userScore = 0;
let computerScore = 0;
let randomNum = 0;

function generateRandom() {
    return Math.floor(Math.random() * 3) + 1;
}

function computerPlays() {
    randomNum = generateRandom();
    if (randomNum === 1) {
        rockComp.style.display = 'block';
        paperComp.style.display = 'none';
        scissorsComp.style.display = 'none';
    } else if (randomNum === 2) {
        rockComp.style.display = 'none';
        paperComp.style.display = 'block';
        scissorsComp.style.display = 'none';
    } else if (randomNum === 3) {
        rockComp.style.display = 'none';
        paperComp.style.display = 'none';
        scissorsComp.style.display = 'block';
    }
}

function checkGameOutcome() {
    if (userScore === 5 || computerScore === 5) {
        // Game ends
        let resultText = document.createElement("div");
        resultText.textContent = userScore === 5 ? "You won the game!" : "Computer won the game!";
        resultText.classList.add("resultText");

        // Hide hand images and buttons
        hideElements([rockUser, paperUser, scissorsUser, rockButtonUser, paperButtonUser, scissorsButtonUser]);

        // Append result text and restart button to a container
        let resultContainer = document.createElement("div");
        resultContainer.classList.add("resultContainer");
        resultContainer.appendChild(resultText);
        resultContainer.appendChild(restartButton);

        // Append the container to the body
        document.body.appendChild(resultContainer);
    }
}

function hideElements(elements) {
    elements.forEach(element => {
        element.style.display = 'none';
    });
}

rockButtonUser.onclick = () => {
    computerPlays();
    rockUser.style.display = 'block';
    scissorsUser.style.display = 'none';
    paperUser.style.display = 'none';

    if (randomNum === 2) {
        computerScore += 1;
    } else if (randomNum === 3) {
        userScore += 1;
    }
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    checkGameOutcome();
};

scissorsButtonUser.onclick = () => {
    computerPlays();
    scissorsUser.style.display = 'block';
    rockUser.style.display = 'none';
    paperUser.style.display = 'none';

    if (randomNum === 1) {
        computerScore += 1;
    } else if (randomNum === 2) {
        userScore += 1;
    }
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    checkGameOutcome();
};

paperButtonUser.onclick = () => {
    computerPlays();
    paperUser.style.display = 'block';
    scissorsUser.style.display = 'none';
    rockUser.style.display = 'none';

    if (randomNum === 3) {
        computerScore += 1;
    } else if (randomNum === 1) {
        userScore += 1;
    }
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    checkGameOutcome();
};

restartButton.onclick = () => {
    window.location = 'game.html';
};