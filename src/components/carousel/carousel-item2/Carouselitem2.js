import style from "./Carouselitem2.style";
const Carouselitem2 = ({ counter, nrOfItems, title, description, urls }) => {
  return (
    <div className={counter === 1 ? "carousel-item active" : "carousel-item"}>
      <div className="row">
        <div class="d-flex col-12 flex-column align-items-center">
          <p style={style.counter}>
            {counter}/{nrOfItems}
          </p>
          <h3 className="fs-2" style={style.roomPresentationTitle}>
            {title}
          </h3>
          <p style={style.descriptionParagraph} className="text-center">
            {description}
          </p>
          <button class="btn mb-3 mt-lg-auto mb-lg-5">VIEW DETAILS</button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mb-3 col-lg-3 mb-lg-0">
          <img src={urls[0]} alt="suite room" />
        </div>
        <div className="col-12 text-center mb-3 col-lg-6 mb-lg-0">
          <img src={urls[1]} alt="suite room" />
        </div>
        <div className="col-12 text-center mb-3 col-lg-3 mb-lg-0">
          <img src={urls[2]} alt="suite room" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <button style={style.bookingButton}>book</button>
        </div>
      </div>
    </div>
  );
};
export default Carouselitem2;
