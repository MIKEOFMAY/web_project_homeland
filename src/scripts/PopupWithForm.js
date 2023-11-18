import Popup from "./Popup.js"; 

export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitFunction){
        super(popupSelector);
        this._formElement = this._popup.querySelector('.form');
        this._inputList = this._formElement.querySelectorAll('.form__input');
        this._submitFunction = submitFunction;  
        
        
    }
    _getInputValue(){
        const _inputValue = {};
        this._inputList.forEach(input => _inputValue[input.name]=input.value);
        return _inputValue; 
    }

    setEventListeners(){  
        super.setEventListners();
        this._popup.addEventListener ("submit",  ()=> {
            let input = this._getInputValue();
            this._submitFunction(input);
            this.close();
        } );

         
    }
    close(){
        super.close();
        this._formElement.reset();
    }


}          