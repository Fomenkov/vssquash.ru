( document => {
	const dropdown = document.querySelectorAll('.js-dropdown');
	console.log(dropdown);

	for (let i = 0; i < dropdown.length; i++) {
		const dropdownButton = dropdown[i].querySelector('.js-dropdown-button');
		const dropdownContent = dropdown[i].querySelector('.js-dropdown-content');
		const dropdownButtonText = dropdown[i].querySelector('.js-dropdown-button-text');


		dropdownButton.addEventListener('click', function () {
			dropdown[i].classList.toggle('is-open');
			dropdownContent.classList.toggle('visually-hidden');

			switch (dropdownButtonText.innerHTML) {
				case 'Открыть':
					dropdownButtonText.innerHTML = 'Закрыть';
					break;
				case 'Закрыть':
					dropdownButtonText.innerHTML = 'Открыть';
			}

		})
	}

})(document);
