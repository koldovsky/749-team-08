(() => {
	const carousel = document.querySelector(".carousel__blocks");
	const firstImg = carousel.querySelectorAll("img")[0];
	const arrowIcons = document.querySelectorAll(".wrapper .btn");
	let isDragStart = false,
		prevPageX,
		prevScrollLeft,
		positionDiff;

	arrowIcons.forEach((icon) => {
		icon.addEventListener("click", () => {
			let firstImgWidth = firstImg.clientWidth + 14;
			carousel.scrollLeft +=
				icon.id == "perv" ? -firstImgWidth : firstImgWidth;
		});
	});
	const autoSlide = () => {
		positionDiff = Math.abs(positionDiff);
		let firstImgWidth = firstImg.clientWidth + 14;
		let valueDifference = firstImgWidth - positionDiff;
		if (carousel.scrollLeft > prevScrollLeft) {
			return (carousel.scrollLeft +=
				positionDiff > firstImgWidth / 3 ? valueDifference : -positionDiff);
		}
		carousel.scrollLeft -=
			positionDiff > firstImgWidth / 3 ? valueDifference : -positionDiff;
	};

	const dragStart = (e) => {
		isDragStart = true;
		prevPageX = e.pageX;
		prevScrollLeft = carousel.scrollLeft;
	};
	const dragging = (e) => {
		if (!isDragStart) return;
		e.preventDefault();
		positionDiff = e.pageX - prevPageX;
		carousel.scrollLeft = prevScrollLeft - positionDiff;
		carousel.classList.add("dragging");
	};
	const dragStop = () => {
		isDragStart = false;
		carousel.classList.remove("dragging");
		autoSlide();
	};
	carousel.addEventListener("mousedown", dragStart);
	carousel.addEventListener("mousemove", dragging);
	carousel.addEventListener("mouseup", dragStop);
})();
