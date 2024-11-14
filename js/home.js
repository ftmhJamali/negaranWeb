jalaliDatepicker.startWatch();
const flightOptionsDIV = document.querySelectorAll(
    ".top-search-box .flights-options > div"
  ),
  flightOptionsBtns = document.querySelectorAll(
    ".top-search-box .flights-options > div button"
  ),
  flightOptionsDropDownsLabel = document.querySelectorAll(
    ".top-search-box .flights-options-drop-down label"
  ),
  listOptions = document.querySelectorAll(
    ".search-box-container .input-group .drop-down-container ul li"
  ),
  searchDropDowns = document.querySelectorAll(
    ".bottom-search-box .input-group input"
  ),
  reverseLocationBtns = document.querySelectorAll(".reverse-btn.flex-hz"),
  increaseAdultsBtn = document.getElementById("adult-increase"),
  decreaseAdultsBtn = document.getElementById("adult-decrease"),
  passengerInput = document.getElementById("number-of-passengers"),
  adultCountSpan = document.getElementById("adults-count"),
  commonQuestions = document.querySelectorAll(
    ".common-questions-container .questions-box-container .q-box-item"
  );

flightOptionsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.parentElement.classList.contains("active")) {
      btn.parentElement.classList.remove("active");
      btn.parentElement.parentElement.style.zIndex = "1";
    } else {
      btn.parentElement.classList.add("active");
      btn.parentElement.parentElement.style.zIndex = "2";
    }
  });
});

flightOptionsDropDownsLabel.forEach((label, labelIndex) => {
  label.addEventListener("click", () => {
    label.parentElement.parentElement.parentElement.classList.remove("active");
    label.parentElement.parentElement.previousElementSibling.querySelector(
      "span"
    ).innerText = label.innerText;
    label.parentElement.parentElement
      .querySelectorAll("input")
      .forEach((input) => {
        try {
          input.checked = false;
          input[labelIndex].checked = true;
        } catch (e) {
          console.log(e);
        }
      });
    label.parentElement.parentElement.parentElement.parentElement.style.zIndex =
      "1";
  });
});

listOptions.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    listItem.parentElement.parentElement.previousElementSibling.value =
      listItem.innerText;
    listItem.parentElement.parentElement.parentElement.classList.remove("open");
    listItem.parentElement.parentElement.previousElementSibling.previousElementSibling.value =
      listItem.getAttribute("data_value");
  });
});
searchDropDowns.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.parentElement.classList.contains("open")) {
      item.parentElement.classList.remove("open");
    } else {
      item.parentElement.classList.add("open");
    }
  });
});
commonQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("open")) {
      item.classList.remove("open");
    } else {
      item.classList.add("open");
    }
  });
});
reverseLocationBtns.forEach((reverseBtn) => {
  reverseBtn.addEventListener("click", () => {
    let inputHidden1Value = reverseBtn.previousElementSibling.querySelector(
        "input[type='hidden']"
      ).value,
      inputHidden2Value = reverseBtn.nextElementSibling.querySelector(
        "input[type='hidden']"
      ).value,
      input1Value =
        reverseBtn.previousElementSibling.querySelector(
          "input[type='text']"
        ).value,
      input2Value =
        reverseBtn.nextElementSibling.querySelector("input[type='text']").value;

    reverseBtn.previousElementSibling.querySelector(
      "input[type='text']"
    ).value = input2Value;
    reverseBtn.nextElementSibling.querySelector("input[type='text']").value =
      input1Value;
    reverseBtn.previousElementSibling.querySelector(
      "input[type='hidden']"
    ).value = inputHidden2Value;
    reverseBtn.nextElementSibling.querySelector("input[type='hidden']").value =
      inputHidden1Value;
  });
});

let adults = 1;
adultCountSpan.innerText = adults;
passengerInput.value = `${adults}بزرگسال`;
increaseAdultsBtn.addEventListener("click", () => {
  adults++;
  adultCountSpan.innerText = adults;
  passengerInput.value = `${adults}بزرگسال`;
  if (1 <= adults && adults < 5) {
    increaseAdultsBtn.disabled = false;
    decreaseAdultsBtn.disabled = false;
  } else {
    increaseAdultsBtn.disabled = true;
  }
});
decreaseAdultsBtn.addEventListener("click", () => {
  adults--;
  adultCountSpan.innerText = adults;
  passengerInput.value = `${adults}بزرگسال`;
  if (1 < adults) {
    decreaseAdultsBtn.disabled = false;
    increaseAdultsBtn.disabled = false;
  } else {
    decreaseAdultsBtn.disabled = true;
  }
});
const optionalSpaceValue = window.innerWidth > 650 ? 15 : 8,
  optionalInitialSlideValue = window.innerWidth > 650 ? 2 : 0;
let swiper1 = new Swiper(".toursSlider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  initialSlide: optionalInitialSlideValue,
  spaceBetween: optionalSpaceValue,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  keyboard: {
    enabled: true,
  },
});
document.body.addEventListener("click", (e) => {
  searchDropDowns.forEach((inputGroup) => {
    if (!inputGroup.parentElement.contains(e.target)) {
      inputGroup.parentElement.classList.remove("open");
    }
  });
  flightOptionsDIV.forEach((DIV) => {
    if (!DIV.contains(e.target)) {
      DIV.classList.remove("active");
    }
    if (!DIV.parentElement.contains(e.target)) {
      DIV.parentElement.style.zIndex = "1";
    }
  });
  if (adults === 1) {
    decreaseAdultsBtn.disabled = true;
  }
});
