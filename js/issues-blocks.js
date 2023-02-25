(function () {

    const blocks = [
        {
            id: 1,
            character: '1,5 °C',
            info: 'is the increase of the average temperature around the world',
            time: 'in 30 years'
        }, {
            id: 2,
            character: '4',
            info: 'species of animals became extinct because of humans activity.',
            time: 'In XIX-XX centuries'
        }, {
            id: 3,
            character: '9 CM',
            info: 'is the rise of the global average sea level resulted in the melting ice.',
            time: 'Between 1901-2010'
        }, {
            id: 4,
            character: '60 000',
            info: 'of human deaths were caused by the natural disasters.',
            time: 'Per year, since 1960s.'
        }
    ];

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

    renderBlocks(blocks);

})();