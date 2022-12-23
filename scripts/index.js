const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__button-edit');
const closePopup = document.querySelector('.popup__button-close');
const form = document.querySelector('.form');
let nameInput = document.querySelector('.popup__input_data_name');
let jobInput = document.querySelector('.popup__input_data_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__job');

function handleformSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

openPopup.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
});

closePopup.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});

form.addEventListener('submit', handleformSubmit);
