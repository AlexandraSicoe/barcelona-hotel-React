import Carousel from "../carousel/Carousel";
import style from "./Rooms.style";

const Rooms = () => {
  return (
    <div className="container" style={style.innerContainer}>
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center text-center">
          <h2 className="fs-1" style={style.suitesTitle}>
            The Art Suites
          </h2>
          <p style={style.suitesP}>
            Ronnie Wood, Salvador Dalí, Josephine Baker, Joan Miró, César Ritz,
            and Carlos Ruiz Zafón have changed the world forever through their
            art. Inspired by their magic, we have designed our Art Suites.
          </p>
        </div>
      </div>
      <Carousel type="type2" />
    </div>
  );
};
export default Rooms;
