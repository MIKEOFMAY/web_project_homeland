import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitFunction){
        super(popupSelector);
        this._formElement = this._popup.querySelector('.form');
        this._inputList = this._formElement.querySelectorAll('.form__input');
        this._submitFunction = submitFunction;
    }
    _getInputValue(){
        this._inputValue = {};
        this._inputList.forEach(input => this.inputValues[input.name]=input.value);
        return this._inputValue;
    }

    setEventListners(){
        super.setEventListners();
        this._popup.addEventListener("submit", this._submitFunction);
    }
    close(){
        super.close();
        this._formElement.reset();
    }
}