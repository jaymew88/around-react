import React from 'react';

function PopupImage() {
  return (
    <>
      {/* Popup for Image */}
      <div className="popup popup_type_image">
        <div className="popup__container">
          <img className="popup__img" alt=""/>
          <p className="popup__img-title" />
          <button className="button popup__button popup__button_role_close" aria-label="Close Image" />
        </div> 
      </div> 
    </>
  );
}

export default PopupImage;