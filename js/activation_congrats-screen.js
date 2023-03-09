(function () {
    const buttonSurprize = document.querySelector(".accept-button");
    const surprizeBody = document.querySelector(".congrats-screen");
    const balloon = document.querySelector("#confetti-btn");
    const flyingBalloon = document.querySelector(".flying-balloon");
    let audio = new Audio('../audio/audiobg.mp3');
    const gratitudeBox = document.querySelector(".congrats-screen__gratitude-box");

    buttonSurprize.addEventListener("click", function (e) {
        document.body.classList.toggle("lock");
        surprizeBody.classList.toggle("pushed__box");
        gratitudeBox.style.backdropFilter = "blur(5px)";
        flyingBalloon.style.animationPlayState = "running";
        balloon.style.display = "inherit";
        audio.volume = 0.5;
        audio.play();
    });

    balloon.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    gratitudeBox.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    surprizeBody.addEventListener("click", function (e) {
        document.body.classList.toggle("lock");
        surprizeBody.classList.toggle("pushed__box");
        balloon.style.display = "none";
        flyingBalloon.style.animationPlayState = "paused";
        audio.pause();
    });

    audio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
})();