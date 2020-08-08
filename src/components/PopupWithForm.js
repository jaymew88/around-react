import React from 'react';

function PopupWithForm() {
  



  return (
    <>
      {/* Popup for Edit Profile Section */}
      <div className="popup popup_type_edit">
        <div className="popup__container popup__container_form">
          <button className="button popup__button popup__button_role_close" />
          <form className="popup__form" action="#" name="profile-edit" noValidate>
            <h2 className="popup__title">Edit Profile</h2>
            <label className="popup__label" htmlFor="name-input">
              <input className="popup__field popup__field_name" name="name-input" id="name-input" type="text" placeholder="Name" pattern="[A-Za-z -]+" minLength={2} maxLength={40} required />
              <span className="popup__field-error" id="name-input-error" />
            </label>
            <label className="popup__label" htmlFor="job-input">
              <input className="popup__field popup__field_job" name="job-input" id="job-input" type="text" placeholder="About Me" minLength={2} maxLength={200} required />
              <span className="popup__field-error" id="job-input-error" />
            </label> 
            <button className="button popup__button popup__button_role_save" type="submit">Save</button>
          </form>
        </div> 
      </div>
      {/* Popup for Edit Profile Picture Section */}
      <div className="popup popup_type_edit-pic">
        <div className="popup__container popup__container_form">
          <button className="button popup__button popup__button_role_close" />
          <form className="popup__form" action="#" name="profile-edit-pic">
            <h2 className="popup__title">Change Userpic</h2>
            <label className="popup__label">
              <input className="popup__field popup__field_edit-pic" name="edit-pic" id="edit-pic" type="url" placeholder="Image Link" required />
              <span className="popup__field-error" id="edit-pic-error" />
            </label>
            <button className="button popup__button popup__button_role_save" type="submit">Save</button>
          </form>
        </div> 
      </div>
      {/* Popup for Add Place Section */}
      <div className="popup popup_type_add-place">
        <div className="popup__container popup__container_form">
          <button className="button popup__button popup__button_role_close" />
          <form className="popup__form" action="#" name="add-place">
            <h2 className="popup__title">New Place</h2>
            <label className="popup__label">
              <input className="popup__field popup__field_place_name" id="place-input" name="place-input" type="text" placeholder="Title" minLength={1} maxLength={30} required />
              <span className="popup__field-error" id="place-input-error" />
            </label>
            <label className="popup__label">
              <input className="popup__field popup__field_place_image" name="image-input" id="image-input" type="url" placeholder="Image Link" required />
              <span className="popup__field-error" id="image-input-error" />
            </label>
            <button className="button popup__button popup__button_role_save" type="submit">Create</button>
          </form>
        </div> 
      </div> 
      {/* Popup for Image */}
      <div className="popup popup_type_image">
        <div className="popup__container">
          <img className="popup__img" alt=""/>
          <p className="popup__img-title" />
          <button className="button popup__button popup__button_role_close" aria-label="Close Image" />
        </div> 
      </div> 
      {/* Popup for Delete Card */}
      <div className="popup popup_type_delete">
        <div className="popup__container popup__container_form">
          <button className="button popup__button popup__button_role_close" />
          <form className="popup__form" action="#" noValidate>
            <h2 className="popup__title">Are you sure?</h2>
            <button className="button popup__button popup__button_role_save" type="submit">Yes</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;