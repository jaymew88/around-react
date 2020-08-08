import React from 'react';

function Main() {

  function handleEditAvatarClick(e) {
    e.preventDefault();
    document.querySelector('.popup_type_edit-pic').classList.add('popup_opened');
  }
  function handleEditProfileClick(e) {
    e.preventDefault();
    document.querySelector('.popup_type_edit').classList.add('popup_opened');
  }
  function handleAddPlaceClick(e) {
    e.preventDefault();
    document.querySelector('.popup_type_add-place').classList.add('popup_opened');
  }

  return (
    <main className="content">
    {/* Profile Section */}
    <section className="profile">
      <div className="profile__avatar">
        <img className="profile__avatar-img" src="#" alt="profile avatar" />
        <button onClick={handleEditAvatarClick} className="button profile__button_role_edit-avatar">
        </button></div>
      <div className="profile__info">
        <h1 className="profile__title">Jacques Cousteau</h1>
        <button onClick={handleEditProfileClick} className="button profile__button profile__button_role_edit" />
        <p className="profile__job">Explorer</p>
      </div> 
      <button onClick={handleAddPlaceClick} className="button profile__button profile__button_role_add" />
    </section>
    {/* Cards Section with Template */}
    <section className="cards">
      <ul className="cards__list" />
    </section>
  </main>
  );
}

export default Main;

