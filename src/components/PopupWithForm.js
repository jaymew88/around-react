import React from 'react';

function PopupWithForm(props) {
  return (
    <>
      {/* Popup for Edit Profile Section */}
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container popup__container_form">
          <button className="button popup__button popup__button_role_close" />
          <form className="popup__form" action="#" name="profile-edit" noValidate>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button className="button popup__button popup__button_role_save" type="submit">Save</button>
          </form>
        </div> 
      </div>
      {/* Popup for Edit Profile Picture Section */}
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container popup__container_form">
          <button className="button popup__button popup__button_role_close" />
          <form className="popup__form" action="#" name="profile-edit-pic">
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button className="button popup__button popup__button_role_save" type="submit">Save</button>
          </form>
        </div> 
      </div>
      {/* Popup for Add Place Section */}
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container popup__container_form">
          <button className="button popup__button popup__button_role_close" />
          <form className="popup__form" action="#" name="add-place">
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button className="button popup__button popup__button_role_save" type="submit">Create</button>
          </form>
        </div> 
      </div> 
      {/* Popup for Delete Card */}
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container popup__container_form">
          <button className="button popup__button popup__button_role_close" />
          <form className="popup__form" action="#" noValidate>
            <h2 className="popup__title">{props.title}</h2>
            <button className="button popup__button popup__button_role_save" type="submit">Yes</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;