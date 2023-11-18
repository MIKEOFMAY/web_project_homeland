// PopupWithImage class
//import Popup from "./Popup.js";

/*export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._photo = this._popup.querySelector(".popup__photo .popup__image");
        this._caption = this._popup.querySelector(".popup__caption");
    }

    open(photo_name, photo_src) {
        this._photo.src = photo_src;
        this._photo.alt = photo_name;
        this._caption.textContent = photo_name;
        super.open();

    }

    close(){
        super.close();
        this._formElement.reset();
    }
}*/









// PopupWithImage class 
import Popup from "./Popup.js";

class PopupWithImage extends Popup {
	constructor(popupSelector) {
    super(popupSelector);
    this._photo = this._popup.querySelector(".popup__image");
    this._caption = this._popup.querySelector(".popup__caption"); 
  }

  // Adds an image to the popup and the corresponding image src attribute along with a caption for the image.
  open(photo_name, photo_src) {
    this._photo.src = photo_src;
    this._photo.alt = photo_name.replace(/\s+/g, '-').toLowerCase();
    this._caption.textContent = photo_name;
    super.open();
    } 

}





export default PopupWithImage;




