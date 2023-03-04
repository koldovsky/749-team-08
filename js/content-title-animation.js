(function () {
    var textWrapper = document.querySelector('.animation .title__letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='title__letters'>$&</span>");
    anime.timeline({ loop: true })
        .add({
            targets: '.animation .title__letters',
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: (el, i) => 45 * (i + 1)
        })
        .add({
            targets: '.animation',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
})(); 