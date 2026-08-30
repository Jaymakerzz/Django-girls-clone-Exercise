import React, { Component } from "react";
import ImageCard from "../reusable/imageCard";
import FancyHeading from "../reusable/fancyHeading";
import WorkshopCard from "../reusable/workshopCard";
import { getCard } from "./../../workshopeCard";
import InfoImageBlock from "../reusable/infoImageBlock";

class Workshop extends Component {
  state = {
    imgCard: {
      id: 1,
      task: "Workshops",
      heading: "Learn to Code with Confidence",
      message:
        "Join our free, beginner-friendly workshops and start building real web applications with guidance from supportive mentors",
    },
    Workshop: getCard(),
  };
  render() {
    const { imgCard, Workshop } = this.state;

    return (
      <div>
        <ImageCard data={imgCard} />
        <FancyHeading />
        <WorkshopCard data={Workshop} />
        <div className="section__bar margin-top-big"></div>
        <h3 className="heading__secondary highlight__title margin-top-small-exta">
          What to Expect
        </h3>
        <InfoImageBlock />
      </div>
    );
  }
}

export default Workshop;
