( document => {
	let basePrice = 1000;

	const clubBlock = document.getElementById('block-club');
	const dayBlock = document.getElementById('block-day');
	const ageBlock = document.getElementById('block-age');
	const durationBlock = document.getElementById('block-duration');
	const playersBlock = document.getElementById('block-players');

	const club = clubBlock.querySelectorAll('input');
	const day = dayBlock.querySelectorAll('input');
	const age = ageBlock.querySelectorAll('input');
	const duration = durationBlock.querySelectorAll('input');
	const players = playersBlock.querySelectorAll('input');

	const buttonChildren = document.querySelector('input[value = "children"]');
	const buttonTwoHours = document.querySelector('input[value = "two-hours"]');

	const buttonReset = document.getElementById('reset');
	const form = buttonReset.closest('form');
	const allLabels = form.querySelectorAll('label');
	buttonReset.addEventListener('click', resetCalculator);


	let clubValue;
	let dayValue;
	let ageValue;
	let durationValue;
	let playersValue;


	let clubMarkup = 0;
	let dayMarkup = 0;
	let ageMarkup = 0;
	let durationMarkup = 1;
	let playersMarkup = 0;

	let price = document.querySelector('.js-price');
	let priceValue;

	// Функция получает массив с кнопками и присваивает соответствующей переменной значение нажатой кнопки

	function getClubValue() {
		for (let i = 0; i < club.length; i++) {
			club[i].addEventListener('click', function () {
				clubValue = this.value;
				if (clubValue === 'golf') {
					clubMarkup = 650;
					dayBlock.classList.remove('hidden');
				} else {
					clubMarkup = 0;
					dayBlock.classList.add('hidden');
					dayValue = null;
					cancelChecked(day);
					ageBlock.classList.remove('hidden');
				}
				clubBlock.classList.add('blocked');
				madeButtonActive(this);
				priceUpdate ();
			})
		}

	}

	function getDayValue() {
		for (let i = 0; i < day.length; i++) {
			day[i].addEventListener('click', function () {
				dayValue = this.value;
				if (dayValue === 'weekend') {
					dayMarkup = 400;
				} else {
					dayMarkup = 0;
				}
				dayBlock.classList.add('blocked');
				madeButtonActive(this);
				priceUpdate ();
				ageBlock.classList.remove('hidden');
			})
		}

	}

	function getAgeValue() {
		for (let i = 0; i < age.length; i++) {
			age[i].addEventListener('click', function () {
				ageValue = this.value;
				if (ageValue === 'adults') {
					ageMarkup = 500;
				} else {
					ageMarkup = 0;
					durationValue = null;
					cancelChecked(duration);
				}
				ageBlock.classList.add('blocked');
				madeButtonActive(this);
				priceUpdate ();
				durationBlock.classList.remove('hidden');
			})
		}
	}

	function getDurationValue() {
		for (let i = 0; i < duration.length; i++) {
			duration[i].addEventListener('click', function () {
				durationValue = this.value;
				if (durationValue === 'two-hours') {
					durationMarkup = 2;
					console.log(durationMarkup);
				} else {
					durationMarkup = 1;
					console.log(durationMarkup);
				}
				durationBlock.classList.add('blocked');
				madeButtonActive(this);
				priceUpdate ();
				playersBlock.classList.remove('hidden');
			})
		}
	}

	function getPlayersValue() {
		for (let i = 0; i < players.length; i++) {
			players[i].addEventListener('click', function () {
				playersValue = this.value;

				switch (ageValue) {
					case 'children':
						if (playersValue === 'two-players') {
							playersMarkup = 400;
						} else if (playersValue === 'three-players') {
							playersMarkup = 800;
						} else {
							playersMarkup = 0;
						}
						break;

					case 'adults':
						if (playersValue === 'two-players') {
							playersMarkup = 300;
						} else if (playersValue === 'three-players') {
							playersMarkup = 500;
						} else {
							playersMarkup = 0;
						}
						break;
				}
				playersBlock.classList.add('blocked');
				madeButtonActive(this);
				priceUpdate ();
				price.innerHTML = priceValue;
			})
		}
	}

	// Вызываем функцию присваивания значения для всех массивов с кнопками

	getClubValue();
	getDayValue();
	getAgeValue();
	getDurationValue();
	getPlayersValue();

	// Если нажата кнопка дети - скрываем кнопку 2 часа

	function hiddenButtonHours() {
		console.log('Функция сработала (возраст изменился)');
		if (buttonChildren.checked) {
			console.log('Кнопка Дети нажата');
			buttonTwoHours.disabled = true;
			buttonTwoHours.parentElement.classList.add('disabled');
		} else {
			console.log('Кнопка Взрослые нажата');
			buttonTwoHours.disabled = false;
			buttonTwoHours.parentElement.classList.remove('disabled');
		}
	}

	for (let i = 0; i < age.length; i++) {
		age[i].addEventListener('change', hiddenButtonHours);
	}

	//
	function priceUpdate () {
		priceValue = (basePrice + clubMarkup + dayMarkup + ageMarkup + playersMarkup) * durationMarkup;
		console.log(`Прайс обновился, стало ${priceValue}`);
	}

	function cancelChecked(array) {
		for (let i = 0; i < array.length; i++) {
			array[i].checked = false;
			array[i].parentElement.classList.remove('active');
		}
	}

	function madeButtonActive(input) {
		const block = input.closest('fieldset');
		const labels = block.querySelectorAll('label');
		for (let i = 0; i < labels.length; i++) {
			labels[i].classList.remove('active');
		}
		input.parentElement.classList.add('active');
	}

	function resetCalculator() {
		clubMarkup = 0;
		dayMarkup = 0;
		ageMarkup = 0;
		durationMarkup = 1;
		playersMarkup = 0;
		priceValue = 0;
		price.innerHTML = priceValue;

		for (let i = 0; i < allLabels.length; i++) {
			allLabels[i].classList.remove('active');
		}

		clubBlock.className = '';
		dayBlock.className = 'hidden';
		ageBlock.className = 'hidden';
		durationBlock.className = 'hidden';
		playersBlock.className = 'hidden';

		document.body.scrollTop = 0;
	}

})(document);
