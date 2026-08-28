import React, { Component } from "react";
import carImage from "../../assets/pictures/car.jpg";
import spritesvg from "../../assets/icons/spritesvg.svg";

class Highlight extends Component {
  render() {
    const circles = [
      { name: "circle1", score: "+75", comment: "Communities" },
      { name: "circle2", score: "+50", comment: "Chapter Leader" },
      { name: "circle3", score: "+15", comment: "Django Girls in Tanzania" },
    ];
    return (
      <section className="highlight">
        <div className="left highlight__item">
          <div className="line">
            <span className="line__circle line__circle-1"></span>
            <span className="line__circle line__circle-2"></span>
            <img src={carImage} alt="car photo" className="line__img" />
          </div>
          <div className="line__gradient line__gradient--1"></div>
          <div className="line__gradient line__gradient--2"></div>
        </div>
        <div className="right highlight__item">
          <div className="highlight__info">
            <div className="section__bar margin-bottom-small"></div>
            <h2 className="heading__secondary highlight__title">
              Lorem ipsum dolor
              <span className="highlight__title--decorate">
                &nbsp;Lorem, ipsum.
              </span>
              consectetur adipisicing&nbsp;
              <span className="highlight__title--decorate">elit.</span>
            </h2>
            <p className=" margin-top-small">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              consectetur doloremque facere animi ullam cum debitis ab ratione,
              tenetur quo?
            </p>
          </div>
          <div className="highlight__score">
            {circles.map((circle) => (
              <figure key={circle.score} className="highlight__stats">
                <div
                  className={`highlight__circle highlight__circle--top highlight__stats--${circle.name}`}
                >
                  <span className="highlight__circle--score">
                    {circle.score}
                  </span>
                </div>
                <div className="highlight__circle highlight__circle--back"></div>
                <p className="highlight__circle--comment">{circle.comment}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Highlight;
