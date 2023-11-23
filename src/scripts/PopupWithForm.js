import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._formElement = this._popup.querySelector(".form");
    this._inputList = this._formElement.querySelectorAll(".form__input");
    this._submitFunction = submitFunction;
  }
  _getInputValue() {
    const _inputValue = {};
    this._inputList.forEach((input) => {
      if (input.value !== "") {
        _inputValue[input.name] = input.value;
      }
    });
    return _inputValue;
  }

  setEventListeners() {
    super.setEventListners();
    this._popup.addEventListener("submit", () => {
      const input = this._getInputValue();
      if (Object.keys(input).length !== 0) {
        this._submitFunction(input);
        this.close();
      }
    });
  }
  close() {
    super.close();
    this._formElement.reset();
  }
}
