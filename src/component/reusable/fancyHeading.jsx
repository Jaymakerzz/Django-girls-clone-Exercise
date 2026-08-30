const FancyHeading = () => {
  return (
    <div>
      {" "}
      <div className="section__bar margin-top-big"></div>
      <h2
        className="heading__secondary highlight__title margin-top-small-exta"
        style={{
          fontSize: "6rem",
        }}
      >
        Lorem ipsum dolor
        <span className="highlight__title--decorate">&nbsp;Lorem,</span>
        <div>
          adipisicing&nbsp;
          <span className="highlight__title--decorate">elit.</span>
        </div>
      </h2>
    </div>
  );
};

export default FancyHeading;
