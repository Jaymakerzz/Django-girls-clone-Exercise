import spritesvg from "../../assets/icons/spritesvg.svg";
const ItemRender = (props) => {
  const { data } = props;
  return (
    <div className="items">
      {data.map((item) => (
        <div key={item.info} className="item__data">
          <svg className="card__icon card__icon--schedule">
            <use href={`${spritesvg}#${item.iconName}`} />
          </svg>{" "}
          <span>{item.info}</span>
        </div>
      ))}
    </div>
  );
};

export default ItemRender;
