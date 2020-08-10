import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupImage from './PopupImage';

function App() {
  
  function onEditAvatar(e) {
    e.preventDefault();
    document.querySelector('.popup_type_edit-pic').classList.add('popup_opened');
  }
  function onEditProfile(e) {
    e.preventDefault();
    document.querySelector('.popup_type_edit').classList.add('popup_opened');
  }
  function onAddPlace(e) {
    e.preventDefault();
    document.querySelector('.popup_type_add-place').classList.add('popup_opened');
  }

  return (
    <div>
    <Header />
    <Main />
    <Footer />
    <PopupWithForm name="edit" title="Edit Profile">
      <label className="popup__label" htmlFor="name-input">
        <input className="popup__field popup__field_name" name="name-input" id="name-input" type="text" placeholder="Name" pattern="[A-Za-z -]+" minLength={2} maxLength={40} required />
        <span className="popup__field-error" id="name-input-error" />
      </label>
      <label className="popup__label" htmlFor="job-input">
        <input className="popup__field popup__field_job" name="job-input" id="job-input" type="text" placeholder="About Me" minLength={2} maxLength={200} required />
        <span className="popup__field-error" id="job-input-error" />
      </label> 
    </PopupWithForm>
    <PopupWithForm name="edit-pic" title="Change Userpic">
      <label className="popup__label">
        <input className="popup__field popup__field_edit-pic" name="edit-pic" id="edit-pic" type="url" placeholder="Image Link" required />
        <span className="popup__field-error" id="edit-pic-error" />
      </label>
    </PopupWithForm>
    <PopupWithForm name="add-place" title="New Place">
      <label className="popup__label">
        <input className="popup__field popup__field_place_name" id="place-input" name="place-input" type="text" placeholder="Title" minLength={1} maxLength={30} required />
        <span className="popup__field-error" id="place-input-error" />
      </label>
      <label className="popup__label">
        <input className="popup__field popup__field_place_image" name="image-input" id="image-input" type="url" placeholder="Image Link" required />
        <span className="popup__field-error" id="image-input-error" />
      </label>
    </PopupWithForm>
    <PopupWithForm name="delete" title="Are you sure?" />
    <PopupImage />
    {/* Cards Template */}
    <template className="template-card" />
  </div>        
  );
}

export default App;
