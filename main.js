const attackNum = [0, 1, 2, 3, 4, 10, 11, 12, 13, 14];
let openCountDown = 5;
let timerCountDown = 10;
let topBox = document.getElementById("top_box");
let titleText = document.getElementById("title_text");
let titleImage = document.getElementById("cat");
let startBox = document.getElementById("start");
let startBtn = document.getElementById("startBtn");
let timer = document.getElementById("timer");
let timerEnd = document.getElementById("timer_end");
let playArea = document.getElementById("play_area");
let animationArea = document.getElementById("animation_area");
let timerArea = document.getElementById("timer_area");
let buttonArea = document.getElementById("button_area");
let mouse = document.getElementById("mouse");
let mouse2 = document.getElementById("mouse2");
let mouse3 = document.getElementById("mouse3");
let runcat = document.getElementById("runcat");
let runcat2 = document.getElementById("runcat2");
let runcat3 = document.getElementById("runcat3");
let successFlag = false;

playArea.style.display = "none";
mouse3.style.display = "none";
runcat3.style.display = "none";
buttonArea.style.display ="none";

const startButton = () => {
    successFlag = false;
    timerArea.classList.add('open');
    timerEnd.style.display = "none";
    timer.style.display = "block";
    timerArea.style.backgroundColor = "";
    playArea.style.display = "flex";
    animationArea.style.display = "none"
    topBox.style.display = "none";
    buttonArea.style.display ="flex";
    reset();
    timerStart();
    setTimeout(startGame, 5000);
};

const timerStart = () => {
    if (successFlag == false) {
        timer.textContent = `${openCountDown}`;
        if (!openCountDown == 0) {
            setTimeout(() => {
                openCountDown = openCountDown - 1;
                timerStart();
            }, 1000);
        } else {
            timer.textContent = `${timerCountDown}秒`;
            setTimeout(() => {
                timerCountDown = timerCountDown - 1;
                timerStart();
                catAttack();
                attackMove();
            }, 1000);
        } if (timerCountDown == 0) {
            endGmame();
        }
    }
};

const endGmame = () => {
    timerArea.classList.add('open');
    timerArea.style.backgroundImage = "url(./imgage/goal.jpg)";
    timerEnd.textContent = "";
    timerArea.style.backgroundSize = "cover";
    timerArea.style.backgroundPosition = "bottom";
    timer.style.display = "none";
    timerEnd.style.display = "block";
    animationArea.style.display = "none"
    topBox.style.display = "flex";
    titleText.style.display = "none";
    titleImage.style.display = "none";
    startBox.style.top = "64%";
    startBox.style.right = "41%";
    buttonArea.style.display = "none";
    successFlag = true;
    runcatPosition();
    notButton();
    setTimeout(activeButton, 5000);
};

const startGame = () => {
    timerArea.classList.remove('open');
    timer.textContent = `${timerCountDown}秒`;
    animationArea.style.display = "inline-block";
};

const topButton = () => {
    mouse.style.top = "10%";
    mouse2.style.top = "10%";
};

const mousePosition = () => {
    mouse.style.top = "50%";
    mouse2.style.top = "50%";
};

const catAttack = () => {
    let num = Math.floor(Math.random() * 10);
    if (num == attackNum[num]) {
        runcat.style.left = "50%";
        runcat2.style.left = "50%";
    }
};

const runcatPosition = () => {
    runcat.style.left = "9%";
    runcat2.style.left = "9%";
};

const attackMove = () => {
    let mouseP = mouse.style.top;
    let runcatP = runcat.style.left;
    if (mouseP == runcatP) {
        mouse3.style.display = "block";
        runcat3.style.display = "block";
        runcat.style.display = "none";
        runcat2.style.display = "none";
        mouse.style.display = "none";
        mouse2.style.display = "none";
        successFlag = true;
        setTimeout(gameOver, 500);
    } else {
        setTimeout(mousePosition, 500);
        setTimeout(runcatPosition, 500);
    }
};

const gameOver = () => {
    endGmame();
    timerEnd.textContent = "GAME OVER";
    topBox.style.display = "flex";
    titleText.style.display = "none";
    titleImage.style.display = "none";
    timerArea.style.backgroundImage = "url(./imgage/gameover.jpg)";
    timerArea.style.backgroundSize = "cover";
    timerArea.style.backgroundPosition = "bottom";
};

const reset = () => {
    timerCountDown = 10;
    openCountDown = 5;
    runcatPosition();
    mousePosition();
    timer.textContent = "";
    mouse3.style.display = "none"
    runcat3.style.display = "none"
    runcat.style.display = "block";
    runcat2.style.display = "block";
    mouse.style.display = "block";
    mouse2.style.display = "block";
    buttonArea.style.display = "flex";
    timerArea.style.backgroundImage = "";
};

const notButton = () => {
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "black";
};

const activeButton = () => {
    startBtn.disabled = false;
    startBtn.style.backgroundColor = "";
};