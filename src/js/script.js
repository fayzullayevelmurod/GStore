document.addEventListener("DOMContentLoaded", () => {
  // menu
  const menuBtn = document.querySelector(".menu-btn");
  const catalog = document.querySelector(".catalog");
  const closeBtn = document.querySelector(".close-btn");
  function catalogFunc() {
    menuBtn.classList.toggle("active");
    catalog.classList.toggle("active");
    // document.body.classList.toggle('overflow-hidden');
  }
  closeBtn.addEventListener("click", catalogFunc);
  menuBtn.addEventListener("click", catalogFunc);
  catalog.addEventListener("click", (e) => {
    if (e.target.classList.contains("catalog")) {
      catalogFunc();
    }
  });

  // dark mode
  const moonIcon = document.querySelector(".moon-icon");
  const sunIcon = document.querySelector(".sun-icon");
  const darkModeBtn = document.querySelector(".dark-mode__btn");
  const body = document.body;

  darkModeBtn.addEventListener("change", () => {
    if (darkModeBtn.checked) {
      body.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
      moonIcon.classList.add("hidden");
      sunIcon.classList.remove("hidden");
    } else {
      moonIcon.classList.remove("hidden");
      sunIcon.classList.add("hidden");
      body.classList.remove("dark");
      localStorage.removeItem("darkMode");
    }
  });

  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode === "enabled") {
    body.classList.add("dark");
    darkModeBtn.checked = true;
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  }

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

  // reviews-swiper
  var swiper = new Swiper(".reviews-swiper", {
    spaceBetween: 32,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button__next",
      prevEl: ".swiper-button__prev",
    },
    loop: true,
    grabCursor: true,
    speed: 1000,
    breakpoints: {
      1250: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      815: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      0: {
        spaceBetween: 15,
        slidesPerView: 1.144,
      },
    },
  });
  // reviews-swiper-two
  var swiper = new Swiper(".reviews-swiper-two", {
    spaceBetween: 16,
    slidesPerView: 1.2,
    grabCursor: false,
  });

  // Timer
  try {
    const deadline = "2024-03-25";

    function getTimeRemaining(endtime) {
      let days, hours, seconds;
      const timer = Date.parse(endtime) - Date.parse(new Date());

      if (timer <= 0) {
        days = 0;
        hours = 0;
        seconds = 0;
      } else {
        days = Math.floor(timer / (1000 * 60 * 60 * 24));
        hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
        seconds = Math.floor((timer / 1000) % 60);
      }

      return { timer, days, hours, seconds };
    }

    function setClock(selector, endtime) {
      const timer = document.querySelectorAll(selector);
      timer.forEach((el) => {
        const days = el.querySelector("#days");
        const hours = el.querySelector("#hours");
        const seconds = el.querySelector("#seconds");
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
          const t = getTimeRemaining(endtime);

          days.textContent = getZero(t.days);
          hours.textContent = getZero(t.hours);
          seconds.textContent = getZero(t.seconds);

          if (t.timer <= 0) {
            clearInterval(timeInterval);
          }
        }

        function getZero(num) {
          if (num >= 0 && num < 10) {
            return `0${num}`;
          } else {
            return num;
          }
        }
      });
    }

    setClock(".timer", deadline);
  } catch (error) {
    throw error;
  }

  // products
  try {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
      const productBtn = card.querySelectorAll("[data-product-btn]");
      const productBtnIcon = card.querySelector(".product-btn__icon");

      productBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          btn.classList.add("active");
          productBtnIcon.classList.add("active");
          productBtnIcon.innerHTML = `
					<path d="M7.41337 12.1667C7.28671 12.1667 7.16004 12.12 7.06004 12.02L6.06004 11.02C5.86671 10.8267 5.86671 10.5067 6.06004 10.3134C6.25337 10.12 6.57337 10.12 6.76671 10.3134L7.42671 10.9734L9.24004 9.30002C9.44004 9.11336 9.76004 9.12669 9.94671 9.32669C10.1334 9.52669 10.12 9.84669 9.92004 10.0334L7.75337 12.0334C7.66004 12.12 7.54004 12.1667 7.41337 12.1667Z" fill="#0F172A"/>
					<path d="M3.46025 4.25329C3.33358 4.25329 3.20025 4.19996 3.10691 4.10663C2.91358 3.91329 2.91358 3.59329 3.10691 3.39996L5.52691 0.979961C5.72025 0.786628 6.04025 0.786628 6.23358 0.979961C6.42691 1.17329 6.42691 1.49329 6.23358 1.68663L3.81358 4.10663C3.71358 4.19996 3.58691 4.25329 3.46025 4.25329Z" fill="#0F172A"/>
					<path d="M12.5404 4.25329C12.4137 4.25329 12.2871 4.20663 12.1871 4.10663L9.76707 1.68663C9.57374 1.49329 9.57374 1.17329 9.76707 0.979961C9.9604 0.786628 10.2804 0.786628 10.4737 0.979961L12.8937 3.39996C13.0871 3.59329 13.0871 3.91329 12.8937 4.10663C12.8004 4.19996 12.6671 4.25329 12.5404 4.25329Z" fill="#0F172A"/>
					<path d="M13.473 7.06657C13.4263 7.06657 13.3797 7.06657 13.333 7.06657H13.1797H2.66634C2.19967 7.07324 1.66634 7.07324 1.27967 6.68657C0.973008 6.38657 0.833008 5.9199 0.833008 5.23324C0.833008 3.3999 2.17301 3.3999 2.81301 3.3999H13.1863C13.8263 3.3999 15.1663 3.3999 15.1663 5.23324C15.1663 5.92657 15.0263 6.38657 14.7197 6.68657C14.373 7.03324 13.9063 7.06657 13.473 7.06657ZM2.81301 6.06657H13.3397C13.6397 6.07324 13.9197 6.07324 14.013 5.9799C14.0597 5.93324 14.1597 5.77324 14.1597 5.23324C14.1597 4.4799 13.973 4.3999 13.1797 4.3999H2.81301C2.01967 4.3999 1.83301 4.4799 1.83301 5.23324C1.83301 5.77324 1.93967 5.93324 1.97967 5.9799C2.07301 6.06657 2.35967 6.06657 2.65301 6.06657H2.81301Z" fill="#0F172A"/>
					<path d="M9.92683 15.1666H5.90683C3.52016 15.1666 2.98683 13.7466 2.78016 12.5133L1.84016 6.74662C1.7935 6.47329 1.98016 6.21996 2.2535 6.17329C2.52016 6.12663 2.78016 6.31329 2.82683 6.58663L3.76683 12.3466C3.96016 13.5266 4.36016 14.1666 5.90683 14.1666H9.92683C11.6402 14.1666 11.8335 13.5666 12.0535 12.4066L13.1735 6.57329C13.2268 6.29996 13.4868 6.11996 13.7602 6.17996C14.0335 6.23329 14.2068 6.49329 14.1535 6.76662L13.0335 12.6C12.7735 13.9533 12.3402 15.1666 9.92683 15.1666Z" fill="#0F172A"/>
		`;
        });
      });
    });
  } catch (error) {
    throw error;
  }

  // form validation
  try {
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.(?:com|net|org|ru)$/i;
      return emailRegex.test(email);
    }

    const warningText = document.querySelector(".warning-text");
    const emailField = document.querySelector("[data-benefits-input]");
    const validateCheckIcon = document.querySelector(".check-icon");

    if (emailField) {
      emailField.addEventListener("input", () => {
        const emailValue = emailField.value.trim();
        if (validateEmail(emailValue)) {
          warningText.classList.add("hidden");
          emailField.classList.remove("warning");
          emailField.classList.add("active");
          validateCheckIcon.classList.remove("hidden");
        } else {
          validateCheckIcon.classList.add("hidden");
          warningText.classList.remove("hidden");
          emailField.classList.remove("active");
          emailField.classList.add("warning");
        }
      });
    }
  } catch (error) {
    throw error;
  }

  try {
    function validatePhoneNumber(phoneNumber) {
      const phoneRegex = /^\+?[0-9\- ]{2,}$/;
      return phoneRegex.test(phoneNumber);
    }
    const phoneField = document.querySelector("[data-validate-number]");
    const validateCheckIcon = document.querySelector(".check-icon__tow");

    if (phoneField) {
      phoneField.addEventListener("input", () => {
        const phoneValue = phoneField.value.trim();
        if (validatePhoneNumber(phoneValue)) {
          phoneField.classList.remove("warning");
          phoneField.classList.add("active");
          validateCheckIcon.classList.remove("hidden");
        } else {
          validateCheckIcon.classList.add("hidden");
          phoneField.classList.remove("active");
          phoneField.classList.add("warning");
        }
      });
    }
  } catch (error) {
    throw error;
  }

  // select price
  try {
    const priceType = document.querySelector(".price-type");
    const selectPrice = document.querySelector(".select-price");
    const optionItems = document.querySelectorAll(".select-price__option");
    const optionBox = document.querySelector(".option-box");

    function show(value, priceType) {
      priceType.value = value;
    }

    if (selectPrice) {
      selectPrice.addEventListener("click", () => {
        optionBox.classList.toggle("active");
        selectPrice.classList.toggle("active");
      });

      optionItems.forEach((item) => {
        item.addEventListener("click", () => {
          optionItems.forEach((item) => {
            item.classList.remove("active");
          });
          show(item.textContent.trim(), priceType);
          item.classList.toggle("active");
          optionBox.classList.remove("active");
          selectPrice.classList.remove("active");
        });
      });
    }
  } catch (error) {
    throw error;
  }

  // information modal
  try {
    const informationModal = document.querySelector(".information-modal");
    const informationModalClose = document.querySelector(
      "[data-close-information-modal]"
    );
    const openInformationModalBtn = document.querySelector(
      "[data-open-information-modal]"
    );
    if (informationModal) {
      openInformationModalBtn.addEventListener("click", () => {
        informationModal.classList.add("active");
      });
      informationModalClose.addEventListener("click", () => {
        informationModal.classList.remove("active");
      });
      informationModal.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("information-modal")) {
          informationModal.classList.remove("active");
        }
      });
    }
  } catch (error) {
    throw error;
  }

  // modal
  try {
    const modal = document.querySelector(".modal");
    const closeModalBtn = document.querySelectorAll("[data-close-modal-btn]");
    const openModalBtn = document.querySelectorAll(".open-modal");
    const thanksModalContent = document.querySelector(".thanks-modal__content");
    const modalContent = document.querySelector(".modal-content");
    const modalForm = document.querySelector(".modal-form");

    function toggleModal() {
      modal.classList.toggle("scale-0");
    }

    if (modal) {
      modalForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formFields = ["name", "mail", "product-select"];
        const selectPrice = document.querySelector(".select-price");
        let allFieldsFilled = true;

        for (let i = 0; i < formFields.length; i++) {
          const field = document.getElementById(formFields[i]);
          const value = field.value.trim();
          if (value === "") {
            field.classList.add("warning");
            selectPrice.classList.add("warning");
            allFieldsFilled = false;
          } else {
            field.value = "";
            field.classList.remove("warning");
            selectPrice.classList.remove("warning");
          }
        }
        if (allFieldsFilled) {
          modalContent.classList.add("hidden");
          thanksModalContent.classList.remove("hidden");

          setTimeout(() => {
            modalContent.classList.remove("hidden");
            thanksModalContent.classList.add("hidden");
            toggleModal();
          }, 3000);
        }
      });

      closeModalBtn.forEach((btn) =>
        btn.addEventListener("click", toggleModal)
      );
      openModalBtn.forEach((btn) => btn.addEventListener("click", toggleModal));
      modal.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("modal")) {
          toggleModal();
        }
      });
    }
  } catch (error) {
    throw error;
  }

  // // counter
  // const counters = document.querySelectorAll(".counter");

  // counters.forEach((counter) => {
  //   const incrementBtn = counter.querySelector("[data-plus-btn]");
  //   const decrementBtn = counter.querySelector("[data-minus-btn]");
  //   const count = counter.querySelector(".count");
  // 	const oldPrice = counter.querySelector('.old-price');
  // 	const newPrice = counter.querySelector('.new-price');

  //   let currentCount = 1;
  // 	let currentOldPrice = 179900; // agarda increment btn bosilsa currentOldPrice 1 taga oshsin yani (179900+1), agarda decrement bosilsa 1taga kamaysin
  // 	let currentPrice = 145900; // // agarda increment btn bosilsa currentPrice 1 taga oshsin yani(145900+1), agarda decrement bosilsa 1taga kamaysin

  //   incrementBtn.addEventListener("click", () => {
  //     currentCount++;
  //     count.textContent = currentCount;
  //   });
  //   decrementBtn.addEventListener("click", () => {
  //     if (currentCount > 0) {
  //       currentCount--;
  //       count.textContent = currentCount;
  //     }
  //   });
  // });
  function formatNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  document.querySelectorAll(".counter").forEach((counter) => {
    const incrementBtn = counter.querySelector("[data-plus-btn]");
    const decrementBtn = counter.querySelector("[data-minus-btn]");
    const count = counter.querySelector(".count");
    const oldPrice = counter.querySelector(".old-price");
    const newPrice = counter.querySelector(".new-price");
    const usdt = counter.querySelector(".usdt");
    const productMoreBtns = counter.querySelector(".product-more__btns");
    const productBtnBox = counter.querySelector(".product-btns__box");

    productMoreBtns.addEventListener("click", () => {
      productBtnBox.classList.toggle("scale-y-0");
    });

    let currentCount = 1;
    let currentOldPrice = 179900;
    let currentPrice = 145900;
    let currentUsdt = 560;

    const updateCount = () => {
      count.textContent = currentCount;
    };

    const updatePrices = () => {
      oldPrice.textContent = formatNumberWithSpaces(currentOldPrice) + " ₽";
      newPrice.textContent = formatNumberWithSpaces(currentPrice) + " ₽";
      usdt.textContent = formatNumberWithSpaces(currentUsdt) + " $";
    };

    incrementBtn.addEventListener("click", () => {
      currentCount++;
      currentOldPrice += 179900;
      currentPrice += 145900;
      currentUsdt += 560;
      updateCount();
      updatePrices();
    });

    decrementBtn.addEventListener("click", () => {
      if (currentCount > 1) {
        currentCount--;
        currentOldPrice -= 179900;
        currentPrice -= 145900;
        currentUsdt -= 560;
        updateCount();
        updatePrices();
      }
    });

    updatePrices();
  });

  // range slider
  try {
    window.onload = function () {
      initSliders();
    };

    function initSliders() {
      const sliderOne = document.getElementById("slider-1");
      const sliderTwo = document.getElementById("slider-2");
      const displayValOne = document.getElementById("range1");
      const displayValTwo = document.getElementById("range2");
      const sliderTrack = document.querySelector(".slider-track");
      const maxSliderValue = parseInt(sliderOne.max);

      const minGap = 0;

      slideOne();
      slideTwo();

      sliderOne.addEventListener("input", slideOne);
      sliderTwo.addEventListener("input", slideTwo);

      function slideOne() {
        const valueOne = parseInt(sliderOne.value);
        const valueTwo = parseInt(sliderTwo.value);

        if (valueTwo - valueOne <= minGap) {
          sliderOne.value = valueTwo - minGap;
        }

        displayValOne.textContent = formatCurrency(valueOne);
        fillColor();
      }

      function slideTwo() {
        const valueOne = parseInt(sliderOne.value);
        const valueTwo = parseInt(sliderTwo.value);

        if (valueTwo - valueOne <= minGap) {
          sliderTwo.value = valueOne + minGap;
        }

        displayValTwo.textContent = formatCurrency(valueTwo);
        fillColor();
      }

      function fillColor() {
        const percent1 = (parseInt(sliderOne.value) / maxSliderValue) * 100;
        const percent2 = (parseInt(sliderTwo.value) / maxSliderValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #0F172A ${percent1}%, #0F172A ${percent2}%, #dadae5 ${percent2}%)`;
      }

      function formatCurrency(value) {
        return `от ${value} ₽`;
      }
    }
  } catch (error) {
    throw error;
  }

  // accordion
  try {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector(".accordion-header");
      const accordionContent = accordion.querySelector(".accordion-content");

      accordionHeader.addEventListener("click", () => {
        accordionContent.classList.toggle("hidden");
        accordionHeader.classList.toggle("active");
      });
    });
  } catch (error) {
    throw error;
  }

  try {
    const closeFilterBtn = document.querySelector(".close-filter__btn");
    const openFilterBtn = document.querySelector(".open-filter__btn");
    const filterContent = document.querySelector(".filter-content");
    const applyFilters = document.querySelector(".apply-filters");

    function showFilter() {
      filterContent.classList.add("active");
    }
    function hiddenFilter() {
      filterContent.classList.remove("active");
    }
    openFilterBtn.addEventListener("click", showFilter);
    closeFilterBtn.addEventListener("click", hiddenFilter);
    applyFilters.addEventListener("click", hiddenFilter);
  } catch (error) {}

  // filter
  try {
    const inputCheckBox = document.querySelectorAll('input[type="checkbox"]');
    const resetFiltersBtn = document.querySelector(".reset-filters__btn");

    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", () => {
        inputCheckBox.forEach((checkbox) => {
          if (checkbox.checked) {
            checkbox.checked = false;
          }
        });
      });
    }
  } catch (error) {
    throw error;
  }
});
