import React, { useState } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((currentProfile) => {
      setUserName(currentProfile.name);
      setUserDescription(currentProfile.about);
      setUserAvatar(currentProfile.avatar);
    }).catch((err) => console.log(err));
  }, [userName, userDescription, userAvatar]);

  React.useEffect(() => {
    api.getInitialCards().then((cards) => {
      cards.forEach((card) => {
        setCards([...cards, card]);
      });
    }).catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
    {/* Profile Section */}
    <section className="profile">
      <div className="profile__avatar">
        <img className="profile__avatar-img" src={userAvatar} alt="profile avatar" />
        <button onClick={props.onEditAvatar} className="button profile__button_role_edit-avatar">
        </button></div>
      <div className="profile__info">
        <h1 className="profile__title">{userName}</h1>
        <button onClick={props.onEditProfile} className="button profile__button profile__button_role_edit" />
        <p className="profile__job">{userDescription}</p>
      </div> 
      <button onClick={props.onAddPlace} className="button profile__button profile__button_role_add" />
    </section>
    {/* Cards Section with Template */}
    <section className="cards">
      <ul className="cards__list">
        {cards.map((card, index) => (
          <Card key={index} card={card} onCardClick={props.onCardClick} />
          )  
        )}
      </ul>
    </section>
  </main>
  );
}

export default Main;

