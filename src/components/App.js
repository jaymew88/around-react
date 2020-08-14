import React, {useState} from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupImage from './PopupImage';

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
   setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
   setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
   setIsAddPlacePopupOpen(true); 
  }

  function handleCardClick(card){
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setSelectedCard(null);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div>
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}  />
    <Footer />
    <PopupWithForm name="edit" title="Edit Profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <label className="popup__label" htmlFor="name-input">
        <input className="popup__field popup__field_name" name="name-input" id="name-input" type="text" placeholder="Name" pattern="[A-Za-z -]+" minLength={2} maxLength={40} required />
        <span className="popup__field-error" id="name-input-error" />
      </label>
      <label className="popup__label" htmlFor="job-input">
        <input className="popup__field popup__field_job" name="job-input" id="job-input" type="text" placeholder="About Me" minLength={2} maxLength={200} required />
        <span className="popup__field-error" id="job-input-error" />
      </label> 
    </PopupWithForm>
    <PopupWithForm name="edit-pic" title="Change Userpic" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
      <label className="popup__label">
        <input className="popup__field popup__field_edit-pic" name="edit-pic" id="edit-pic" type="url" placeholder="Image Link" required />
        <span className="popup__field-error" id="edit-pic-error" />
      </label>
    </PopupWithForm>
    <PopupWithForm name="add-place" title="New Place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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
    <PopupImage card={selectedCard} onClose={closeAllPopups} />
  </div>        
  );
}

export default App;
