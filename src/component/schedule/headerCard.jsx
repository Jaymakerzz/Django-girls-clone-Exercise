import ItemRender from "../reusable/ItemsRender";

const HeaderCard = () => {
  const description = [
    { iconName: "icon-calendar", info: "10th--11th November 2026" },
    { iconName: "icon-location", info: "Dar es Salaam, Tanzania" },
    { iconName: "icon-user", info: "Free beginner friendly" },
  ];

  return (
    <div className="headerCard">
      <div className="program">
        <span className="small-circle "></span>
        &nbsp;Workshop programme · 10-11 Nov 2026
      </div>
      <h2 className="heading__headerCard margin-bottom-small">
        The two-day{" "}
        <span className="highlight__title--decorate">Django Girls</span>{" "}
        schedule
      </h2>
      <p className="headercard__paragraph margin-bottom-small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi
        perferendis, odit nisi, voluptas maxime sit rerum qui tenetur
        accusantium voluptates harum deleniti quod accusamus.
      </p>
      <ItemRender data={description} />
    </div>
  );
};

export default HeaderCard;
