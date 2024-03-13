document.addEventListener('DOMContentLoaded', () => {

	// responsive navbar

	// swiper

	// discount-swiper
	var swiper = new Swiper(".discount-swiper", {
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		speed: 1000
	});
	
	// discount-swiper-two
	var swiper = new Swiper(".discount-swiper-two", {
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		speed: 1000
	});

	// stock

	// Timer
	const deadline = '2024-03-25';

	function getTimeRemaining(endtime) {
		let days, hours, minutes;
		const timer = Date.parse(endtime) - Date.parse(new Date());

		if (timer <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
		} else {
			days = Math.floor(timer / (1000 * 60 * 60 * 24));
			hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
			minutes = Math.floor((timer / 1000 / 60) % 60);
		}

		return { timer, days, hours, minutes };
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			timeInterval = setInterval(updatClock, 1000);

		updatClock();

		function updatClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);

			if (t.timer <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadline);

})