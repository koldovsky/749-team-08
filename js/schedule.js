(() => {
    const heading = document.querySelector('.schedule__title');
    let scale = 1;
    let isScalingUp = true;

    setInterval(() => {
        if (scale >= 1) {
            isScalingUp = false;
        } else if (scale <= 0.9) {
            isScalingUp = true;
        }

        if (isScalingUp) {
            scale += 0.01;
        } else {
            scale -= 0.01;
        }

        heading.style.transform = `scale(${scale})`;
    }, 50);


    const cloud = document.getElementById('cloud');
    let x = -150;

    function moveCloud() {
        x += 1;
        cloud.style.left = x + 'px';

        if (x > window.innerWidth) {
            x = -150;
        }
    }

    setInterval(moveCloud, 10);
})();