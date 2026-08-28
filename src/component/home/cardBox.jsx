import React, { Component } from "react";
import sprite from "../../assets/icons/sprite.svg";

class CardBox extends Component {
  render() {
    const icons = [
      { name: "icon-modern-mic" },
      { name: "icon-slideshare" },
      { name: "icon-graduation-cap" },
      { name: "icon-suitcase" },
    ];
    return (
      <section className="section__card">
        <div className="top">
          <h2 className="heading__secondary margin-top-small">
            Why Join the Django Girls Community
          </h2>
        </div>
        <div className="container__card">
          {icons.map((card) => (
            <div key={card.name} className="card">
              <svg className="card__icon">
                <use
                  href={`${sprite}#${card.name}`}
                  className="card__icon--item"
                ></use>
              </svg>

              <h3 className="heading__tertiary--small">Lorem ipsum dolor.</h3>
              <p className="margin-top-small-exta">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium veniam consequuntur quasi ipsam animi beatae magnam
                sunt pariatur excepturi quia.
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default CardBox;
