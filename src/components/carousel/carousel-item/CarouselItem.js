const CarouselItem = ({ isActive, innerTexts, imgURL }) => {
  return (
    <div class={isActive === true ? "carousel-item active" : "carousel-item"}>
      <div class="row justify-content-center">
        <div class="d-flex col-12 justify-content-center px-5 px-lg-0 col-lg-4 col-xxl-3">
          <div class="w-100 d-flex flex-column justify-content-start align-items-start">
            <h4 class="text-center text-md-start">
              WHAT IS NOW HAPPENING AT EL PALACE BARCELONA?
            </h4>
            <p class="clock">{innerTexts.clockText}</p>
            <hr />
            <h2>
              <span>{innerTexts.titleP1}</span>
              <br />
              {innerTexts.titleP2}
            </h2>
            <p class="text">{innerTexts.paragraph}</p>
            <button class="btn mt-3 mb-3 mt-lg-auto mb-lg-0">
              BOOK YOUR TABLE
            </button>
          </div>
        </div>
        <div class="d-flex col-12 justify-content-center px-5 px-lg-0 col-lg-4 col-xxl-3">
          <div class="w-100 d-flex justify-content-center justify-content-lg-end">
            <img src={imgURL} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselItem;
