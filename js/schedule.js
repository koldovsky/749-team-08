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

    
})();