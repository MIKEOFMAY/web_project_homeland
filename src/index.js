import css from "./pages/index.css";

import { initialCards, validationConfig } from "./scripts/data.js";

import Card from "./scripts/Card.js";

import Section from "./scripts/Section.js";

import PopupWithForm from "./scripts/PopupWithForm.js";

import PopupWithImage from "./scripts/PopupWithImage.js";

import FormValidator from "./scripts/FormValidator.js";
import {
  handleProfileEditClick,
  handleProfileFormSubmit
} from "./scripts/utils.js";

/** Popup event listeners */

/** Card Functions */
const popupWithImage = new PopupWithImage("#photo-popup");
const cardSection = new Section(
  {
    items: initialCards,
    itemRenderer: (item) => {
      const card = new Card({
        cardData: item,
        templateSelector: "#card",
        handleCardClick: (name, link) => {
          popupWithImage.open(name, link);
        }
      });
      const cardElement = card.createCard();
      return cardElement;
    }
  },
  ".elements"
);

/*
 
const cardSection = new Section(
    {
      items: initialCards,
      itemRenderer: (item) => {
        const card = new Card({cardData:item, handleCardClick: (name, src) => {
              imagePreviewPopup.open(name, src);
            },
          },
          "#photo-popup"
        );
        const cardElement = photo-popup.createCard();
        placeCards.setItems(cardElement);
      },
    },
    placesContainer
    );
    
    placeCards.renderItems();*/

/** Profile edit form popup */
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditForm = document.querySelector("#profile_edit_form");

profileEditButton.addEventListener("click", function () {
  profileEditForm.reset();
  formValidators["profile_edit_form"].resetValidation();
  handleProfileEditClick();
  const profileEditPopup = new PopupWithForm(
    "#profile-edit-popup",
    handleProfileFormSubmit
  );

  profileEditPopup.open();
  profileEditPopup.setEventListeners();
});

/** Add card form popup */
const newCardButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#add-card-popup");
const newCardForm = newCardPopup.querySelector("#add-photo-form");

function handleAddCardFormSubmit(input) {
  const card = new Card({
    cardData: { name: input.title, link: input.link },
    templateSelector: "#card",
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    }
  });

  cardSection.addItem(card.createCard());
}

newCardButton.addEventListener("click", function () {
  newCardForm.reset();
  formValidators["add-photo-form"].resetValidation();
  const profileEditPopup = new PopupWithForm(
    "#add-card-popup",
    handleAddCardFormSubmit
  );
  profileEditPopup.open();
  profileEditPopup.setEventListeners();
});

/** Form validation */
const formValidators = {};

function validateForms(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}

validateForms(validationConfig);

/* const card = new Card({
  cardData: item,
  templateSelector: "#card",
  handleCardClick: (cardImage) => {
    popupWithImage.open(cardImage);
  },
  popupWithImage: popupWithImage
});*/
