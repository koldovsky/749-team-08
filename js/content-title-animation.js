(function () {
    var textWrapper = document.querySelector('.content-title__animation .content-title__letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='content-title__letter'>$&</span>");
    anime.timeline({ loop: true })
        .add({
            targets: '.content-title__animation .content-title__letter',
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: (el, i) => 45 * (i + 1)
        }).add({
            targets: '.content-title__animation',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
})(); 