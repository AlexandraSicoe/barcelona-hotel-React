import style from "./Accommodation.style";
const Accommodation = () => {
  return (
    <div className="container-fluid">
      <div className="row  justify-content-center">
        <div className="col-12 d-flex justify-content-center ">
          <p style={style.paragraph}>rooms & suits</p>
        </div>
      </div>
      <div className="row  justify-content-center">
        <div className="col-12 d-flex justify-content-center text-center">
          <h2 style={style.title}>Stay in guest rooms touched by history</h2>
        </div>
      </div>
    </div>
  );
};
export default Accommodation;
