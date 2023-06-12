import style from "./Accommodation.style";
const Accommodation = () => {
  return (
    <div className="container-fluid mb-5">
      <div className="row  justify-content-center ">
        <div className="col-12 d-flex justify-content-center ">
          <p style={style.paragraph}>rooms & suits</p>
        </div>
      </div>
      <div className="row  justify-content-center">
        <div className="col-12 mx-5 d-flex justify-content-center text-center">
          <h2 className="fs-1" style={style.title}>
            Stay in guest rooms touched by history
          </h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-sm-12 text-center px-5 text-lg-start col-lg-6"
            style={style.accommodationP}
          >
            <p>
              With a total of 120 rooms and suites, El Palace Barcelona is able
              to offer its guests the newest technology while retaining the
              classic elegance that has been its trademark since it was born as
              the former Ritz of Barcelona.
            </p>
          </div>
          <div
            className="col-sm-12 text-center px-5 text-lg-start col-lg-6"
            style={style.accommodationP}
          >
            <p>
              Our rooms come in many different styles and sizes. All of them
              have been carefully furnished for maximum comfort, to ensure that
              the perfect room awaits you. All that is left is to choose.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <a href="#" style={{ ...style.learnMore, ...style.borderBottom }}>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accommodation;
