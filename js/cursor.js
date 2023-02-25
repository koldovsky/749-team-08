let cursor = document.querySelector('.cursor');
let a = document.querySelectorAll('a');
let buttons = document.querySelectorAll('button');

document.addEventListener('mousemove', function (e) {
	let x = e.clientX;
	let y = e.clientY;
	cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

const btn = document.querySelectorAll('button');

buttons.forEach(button => {
	button.style.cursor = 'none';
});

a.forEach(item => {
	item.addEventListener('mouseover', () => {
		cursor.classList.add('hover');
	});
	item.addEventListener('mouseleave', () => {
		cursor.classList.remove('hover');
	});
})

buttons.forEach(button => {
	button.addEventListener('mouseover', () => {
		cursor.classList.add('hover');
	});
	button.addEventListener('mouseleave', () => {
		cursor.classList.remove('hover');
	});
});
