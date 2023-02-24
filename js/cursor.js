let cursor = document.querySelector('.cursor');
let a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
	let x = e.clientX;
	let y = e.clientY;
	cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

a.forEach(item => {
	item.addEventListener('mouseover', () => {
		cursor.classList.add('hover');
	});
	item.addEventListener('mouseleave', () => {
		cursor.classList.remove('hover');
	});
})

