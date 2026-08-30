import ImageRender from "./imageRender";
import photo1 from "../../assets/pictures/sunflower.jpg";
import photo2 from "../../assets/pictures/butterfly.jpg";

const InfoImageBlock = (props) => {
  const { side } = props;
  const data = {
    heading: "Lorem ipsum dolor sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totameligendi voluptatum voluptatem quia ab pariatur deserunt quidem. Quia ratione veritatis illo ipsam molestias at nulla inventore obcaecati quis qui! Facilis pariatur temporibus numquam, earum mollitia quidem. Nemo, cumque itaque.",
    photo1: photo1,
    photo2: photo2,
    side: side,
  };

  return (
    <div className="caption">
      <div className="caption__item">
        <div className="section__bar--small"></div>
        <h3 className="heading__section--small"> {data.heading}.</h3>
        <p className="caption__paragraph">{data.paragraph}</p>
      </div>
      <div
        className={
          data.side === "right"
            ? "caption__item caption__item--right"
            : "caption__item"
        }
      >
        <ImageRender img1={data.photo1} img2={data.photo2} side={data.side} />
      </div>
    </div>
  );
};

export default InfoImageBlock;
