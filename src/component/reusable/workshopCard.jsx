import spritesvg from "../../assets/icons/spritesvg.svg";
import ButtonSecondary from "./buttonSecondary";

const WorkshopCard = (props) => {
  const { data } = props;

  return (
    <div className="workshop__card--container margin-top-big">
      {data.map((item) => (
        <div key={item.message} className="workshop__card">
          <div className="workshop__img">
            <img src={item.img} alt="" />
          </div>
          <div className="workshop__title">{item.heading}</div>
          <div className="workshop__message">{item.message}</div>
          <div className="workshop__date">
            <svg className="workshop__icon">
              <use href={`${spritesvg}#icon-calendar1`} />
            </svg>
            {item.date}
          </div>
          <div className="workshop__location">
            <svg className="workshop__icon">
              <use href={`${spritesvg}#icon-location-pin`} />
            </svg>
            {item.location}
          </div>
          <div className="workshop__btn">
            <ButtonSecondary text={"Apply Now"} color={"orange"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkshopCard;
