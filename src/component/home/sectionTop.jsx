import React, { Component } from "react";
import carImage from "../../assets/pictures/car.jpg";
import cameraImage from "../../assets/pictures/camera.jpg";
import roadImage from "../../assets/pictures/road.jpg";

class SectionTop extends Component {
  importImg = (r) => {
    return r.keys().map(r);
  };
  render() {
    const img = [
      { id: "--camera", photo: cameraImage },
      { id: "--car", photo: carImage },
      { id: "--road", photo: roadImage },
    ];

    return (
      <section className="container--top">
        <div className="heading__section">
          <h1 className="heading__primary heading__primary--lg heading__section--item">
            Empowering Woman Software Devs
          </h1>
          <p className="main__text heading__section--item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            dolore architecto nesciunt deleniti vero eveniet quos aliquam
            quisquam consequatur placeat!
          </p>
        </div>

        <div className="row margin-top-big">
          {img.map((img) => (
            <figure key={img.id} className={`row__item row__item${img.id}`}>
              <img
                key={img.id}
                src={img.photo}
                alt={`img${img.id}`}
                className={`img__item${img.id} img__item`}
              />
            </figure>
          ))}
        </div>
      </section>
    );
  }
}

export default SectionTop;
