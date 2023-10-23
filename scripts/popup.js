const profileEdit = document.querySelector(".profile__edit-button");
const popupContainer = document.querySelector(".popup");

const popupClose = popupContainer.querySelector(".popup__close-button");
const profileEditFormSave = popupContainer.querySelector(".popup__save-button");
const username = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__subheading");
const nameInput = popupContainer.querySelector("#popup__form_username");
const jobInput = popupContainer.querySelector("#popup__form_about-me");

function togglePopup() {
    popupContainer.classList.toggle("popup_opened");
}

function handleProfileEditClick() {
    nameInput.value = username.textContent;
    jobInput.value = userDescription.textContent;
    togglePopup();
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    username.textContent = nameInput.value;
    userDescription.textContent = jobInput.value;
    togglePopup();
}

profileEdit.addEventListener("click", handleProfileEditClick);
popupClose.addEventListener("click", togglePopup);
// Use the submit event on the form element to handle submissions by pressing Enter.
document.getElementById("profile_edit_form").addEventListener("submit", handleProfileFormSubmit);
