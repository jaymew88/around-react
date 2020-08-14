import React from 'react'

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card" data-id="#">
      <button type="button" className="button card__delete-button" aria-label="Delete Button" />
      <img className="card__img" alt={props.card.name} src={props.card.link} onClick={handleCardClick} />
      <div className="card__wrapper">
        <h3 className="card__name">{props.card.name}</h3>
        <div className="card__like">
          <button type="button" className="button card__like-button" aria-label="Like Button" />
          <span className="card__like-count">1</span>
        </div>
      </div>
    </li>
  );
}

export default Card;