export default class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector(".popup__close-button");

    }  
  
    open(){
        this._popup.classList.add('popup_opened')
        //document.addEventListener('keydown',
        //this._handleEscClose); 
        this._closeButton.addEventListener("click", this._handleCloseButton)

         
    }
    _handleCloseButton = (evt)=>{
        evt.preventDefault(); 
        this.close();
        };



    close(){
        
        
        this._popup.classList.remove('popup_opened'); 
    }
    _handleEscClose = (evt)=>{
        evt.preventDefault(); 
        if(evt.key === 'Escape'){ 
            this.close();
        };
    }

    setEventListners(){ 
        this._popup.addEventListener('click',(evt)=>{
            if(evt.target.classList.contains('popup__close-button')){
                this.close()
            }
            else if (evt.target === this._popup){
                this.close();
            }
        })
    }

}    



 