const popUp = document.querySelector(".popup");
const openPopUp = document.querySelector(".profile__button-edit");
const closePopUp = document.querySelector(".popup__button-close");
const savePopUp = document.querySelector(".popup__button-save");
const form = document.querySelector(".form");
let nameInput = document.querySelector(".form__item_name");
let jobInput = document.querySelector(".form__item_job");
let formItemName = document.querySelector(".profile__title");
let formItemJob = document.querySelector(".profile__job");
let buttonHeart = document.querySelector(".place__button-heart");

function HandleformSubmit(evt) {
  evt.preventDefault();

  formItemName.textContent = nameInput.value;
  formItemJob.textContent = jobInput.value;
}

openPopUp.addEventListener("click", () => {
  popUp.classList.add("popup_opened");
})

openPopUp.addEventListener("click", () => {
  nameInput.value = formItemName.textContent;
  jobInput.value = formItemJob.textContent;
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("popup_opened");
});

savePopUp.addEventListener("click", () => {
  popUp.classList.remove("popup_opened");
});

form.addEventListener("submit", HandleformSubmit);
