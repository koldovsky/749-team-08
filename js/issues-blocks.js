(async function () {

    const responce = await fetch('api/blocks.json');
    const blocks = await responce.json();
    renderBlocks(blocks);

    function renderBlocks(blocks) {
        const blocksContainer = document.querySelector('.issues__blocks');
        blocksContainer.innerHTML = '';

        for (const block of blocks) {
            blocksContainer.innerHTML += `
            <div class="issues__item item">
					<span>${block.character}</span>
					<p class="item__info">${block.info}</p>
					<div class="divider"></div>
					<p class="item__info-time">${block.time}</p>
				</div>`;
        }
    }
})();