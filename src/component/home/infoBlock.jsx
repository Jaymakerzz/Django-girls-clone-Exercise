import React, { Component } from "react";
import sea from "../../assets/pictures/seableezzy.jpg";
import forest from "../../assets/pictures/forest-road.jpg";
import butterfly from "../../assets/pictures/butterfly.jpg";
import ButtonMain from "./../reusable/buttonMain";
import ImageRender from "../reusable/imageRender";

class InfoBlock extends Component {
  render() {
    return (
      <div>
        <section className="row">
          <div className="col row__left margin-top-big-extra">
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
              tenetur quo? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Praesentium veritatis consequuntur animi!
            </p>
          </div>
          <div className="col margin-top-big-extra">
            <ImageRender img1={forest} img2={sea} side={"right"} />
          </div>
        </section>
        <section className="row section__bottom margin-top-big-extra">
          <div className="row__side">
            <h2 className="heading__secondary margin-top-small">
              Join Us in Empowering Tanzanian Women through Technology!
            </h2>
            <p className="margin-bottom-small margin-top-small-exta">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              praesentium quod tempore excepturi iusto nisi quidem voluptatibus
              consequuntur esse iure, a, fugit fugiat ad omnis. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Totam, architecto.
              Nihil blanditiis vel facilis.
            </p>
            <ButtonMain color={"white"} />
          </div>
          <div className="side__photo">
            <img
              src={butterfly}
              alt="Butterfly Image"
              className="side__photo--round"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default InfoBlock;
