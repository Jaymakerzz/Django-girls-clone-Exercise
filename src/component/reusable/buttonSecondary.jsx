const ButtonSecondary = (props) => {
  const { text, color } = props;
  return (
    <button className={`btn__secondary btn__secondary--${color}`}>
      {text}
    </button>
  );
};

export default ButtonSecondary;
