const ImageRender = (props) => {
  const { img1, img2, side } = props;
  return (
    <div className="row__right">
      <img src={img1} alt="photo1" className={`photo photo__back--${side}`} />
      <img src={img2} alt="photo2" className={`photo photo__top--${side}`} />
    </div>
  );
};

export default ImageRender;
