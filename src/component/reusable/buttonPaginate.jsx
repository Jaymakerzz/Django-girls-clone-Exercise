const ButtonPaginate = (props) => {
  const btnInfo = [
    { heading: "DAY1 . TUE 10 NOV", message: "Web Foundations", no: 1 },
    { heading: "DAY2 . WED 11 NOV", message: "Build & Deploy", no: 2 },
  ];
  const { onPageChange, currentPage } = props;
  return (
    <div className="btn__pagenate">
      {btnInfo.map((btn) => (
        <button
          key={btn.no}
          onClick={() => onPageChange(btn)}
          className={
            btn.no === currentPage
              ? "btn__pagenate--primary gradient-active"
              : "btn__pagenate--primary"
          }
        >
          <div className="btn__info">
            <h3
              className={
                btn.no === currentPage
                  ? "btn__heading white-active"
                  : "btn__heading"
              }
            >
              {btn.heading}
            </h3>
            <p
              className={
                btn.no === currentPage
                  ? "btn__info--text white-active"
                  : "btn__info--text"
              }
            >
              {btn.message}
            </p>
          </div>
          <div className="number--large">{btn.no} </div>
        </button>
      ))}
    </div>
  );
};

export default ButtonPaginate;
