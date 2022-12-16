const popUp = document.querySelector(".pop-up");
const openPopUp = document.querySelector(".profile__button-edit");
const closePopUp = document.querySelector(".pop-up__button-close");
const savePopUp = document.querySelector(".pop-up__button-save");
const form = document.querySelector(".form");
let nameInput = document.querySelector(".form__item_name");
let jobInput = document.querySelector(".form__item_job");
let formItemName = document.querySelector(".profile__title");
let formItemJob = document.querySelector(".profile__job");

openPopUp.addEventListener("click", () => {
  popUp.classList.add("pop-up_opened");
})

function HandleformSubmit(evt) {
  evt.preventDefault();

  formItemName.textContent = nameInput.value;
  formItemJob.textContent = jobInput.value;
}

openPopUp.addEventListener("click", () => {
  nameInput.value = formItemName.textContent;
  jobInput.value = formItemJob.textContent;
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("pop-up_opened");
});

savePopUp.addEventListener("click", () => {
  popUp.classList.remove("pop-up_opened");
});

form.addEventListener("submit", HandleformSubmit);