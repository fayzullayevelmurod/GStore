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
		speed: 1000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});

	// discount-swiper-two
	var swiper = new Swiper(".discount-swiper-two", {
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		speed: 1000,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
	});

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

	// products
	const productCards = document.querySelectorAll('.product-card');

	productCards.forEach(card => {
		const productBtn = card.querySelectorAll('[data-product-btn]');
		const productBtnIcon = card.querySelector('.product-btn__icon');

		productBtn.forEach(btn => {
			btn.addEventListener('click', (e) => {
				btn.classList.add('active');
				productBtnIcon.classList.add('active')
				productBtnIcon.innerHTML = `
					<path d="M7.41337 12.1667C7.28671 12.1667 7.16004 12.12 7.06004 12.02L6.06004 11.02C5.86671 10.8267 5.86671 10.5067 6.06004 10.3134C6.25337 10.12 6.57337 10.12 6.76671 10.3134L7.42671 10.9734L9.24004 9.30002C9.44004 9.11336 9.76004 9.12669 9.94671 9.32669C10.1334 9.52669 10.12 9.84669 9.92004 10.0334L7.75337 12.0334C7.66004 12.12 7.54004 12.1667 7.41337 12.1667Z" fill="#0F172A"/>
					<path d="M3.46025 4.25329C3.33358 4.25329 3.20025 4.19996 3.10691 4.10663C2.91358 3.91329 2.91358 3.59329 3.10691 3.39996L5.52691 0.979961C5.72025 0.786628 6.04025 0.786628 6.23358 0.979961C6.42691 1.17329 6.42691 1.49329 6.23358 1.68663L3.81358 4.10663C3.71358 4.19996 3.58691 4.25329 3.46025 4.25329Z" fill="#0F172A"/>
					<path d="M12.5404 4.25329C12.4137 4.25329 12.2871 4.20663 12.1871 4.10663L9.76707 1.68663C9.57374 1.49329 9.57374 1.17329 9.76707 0.979961C9.9604 0.786628 10.2804 0.786628 10.4737 0.979961L12.8937 3.39996C13.0871 3.59329 13.0871 3.91329 12.8937 4.10663C12.8004 4.19996 12.6671 4.25329 12.5404 4.25329Z" fill="#0F172A"/>
					<path d="M13.473 7.06657C13.4263 7.06657 13.3797 7.06657 13.333 7.06657H13.1797H2.66634C2.19967 7.07324 1.66634 7.07324 1.27967 6.68657C0.973008 6.38657 0.833008 5.9199 0.833008 5.23324C0.833008 3.3999 2.17301 3.3999 2.81301 3.3999H13.1863C13.8263 3.3999 15.1663 3.3999 15.1663 5.23324C15.1663 5.92657 15.0263 6.38657 14.7197 6.68657C14.373 7.03324 13.9063 7.06657 13.473 7.06657ZM2.81301 6.06657H13.3397C13.6397 6.07324 13.9197 6.07324 14.013 5.9799C14.0597 5.93324 14.1597 5.77324 14.1597 5.23324C14.1597 4.4799 13.973 4.3999 13.1797 4.3999H2.81301C2.01967 4.3999 1.83301 4.4799 1.83301 5.23324C1.83301 5.77324 1.93967 5.93324 1.97967 5.9799C2.07301 6.06657 2.35967 6.06657 2.65301 6.06657H2.81301Z" fill="#0F172A"/>
					<path d="M9.92683 15.1666H5.90683C3.52016 15.1666 2.98683 13.7466 2.78016 12.5133L1.84016 6.74662C1.7935 6.47329 1.98016 6.21996 2.2535 6.17329C2.52016 6.12663 2.78016 6.31329 2.82683 6.58663L3.76683 12.3466C3.96016 13.5266 4.36016 14.1666 5.90683 14.1666H9.92683C11.6402 14.1666 11.8335 13.5666 12.0535 12.4066L13.1735 6.57329C13.2268 6.29996 13.4868 6.11996 13.7602 6.17996C14.0335 6.23329 14.2068 6.49329 14.1535 6.76662L13.0335 12.6C12.7735 13.9533 12.3402 15.1666 9.92683 15.1666Z" fill="#0F172A"/>
		`
			})
		})
	})


})