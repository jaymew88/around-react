import React from 'react';

function Main(props) {
  return (
    <main className="content">
    {/* Profile Section */}
    <section className="profile">
      <div className="profile__avatar">
        <img className="profile__avatar-img" src="#" alt="profile avatar" />
        <button onClick={props.onEditAvatar} className="button profile__button_role_edit-avatar">
        </button></div>
      <div className="profile__info">
        <h1 className="profile__title">Jacques Cousteau</h1>
        <button onClick={props.onEditProfile} className="button profile__button profile__button_role_edit" />
        <p className="profile__job">Explorer</p>
      </div> 
      <button onClick={props.onAddPlace} className="button profile__button profile__button_role_add" />
    </section>
    {/* Cards Section with Template */}
    <section className="cards">
      <ul className="cards__list" />
    </section>
  </main>
  );
}

export default Main;

