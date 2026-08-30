const ImageCard = (props) => {
  const { data } = props;

  return (
    <div
      className={
        data.id === 1 ? "img__card img__card--1" : "img__card img__card--2"
      }
    >
      <div className="img__items">
        <h3 className="img__heading">
          Home &gt;{" "}
          <span className="highlight__title--decorate">{data.task}</span>
        </h3>
      </div>
      <div className="img__items ">
        <span className="img__subheading">{data.heading} </span>
      </div>
      <div className="img__items">
        <span className="img__message">{data.message}</span>
      </div>
    </div>
  );
};

export default ImageCard;
