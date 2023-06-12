import { useState, useEffect } from "react";
import style from "./Promo.style";
import diningImg from "../../images/dining.jpg";

const Promo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize(); // Check initial screen width

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div
        className="row justify-content-center"
        style={
          isMobile
            ? {
                backgroundColor: "rgba(216, 216, 216, 0.15)",
                margin: 0,
                padding: "75px 0",
              }
            : style.middleSection
        }
      >
        <div
          className={isMobile ? "col-12" : "col-6"}
          style={style.imgContainer}
        >
          <div>
            <img
              src={diningImg}
              alt="dining"
              style={style.diningImage}
              className="img-fluid"
            ></img>
          </div>
        </div>
        <div
          className="col-12"
          style={
            isMobile
              ? {
                  backgroundColor: "white",
                  display: "block",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                  paddingTop: "50px",
                  paddingBottom: "50px",
                }
              : style.cocktailBarContainer
          }
        >
          <h2 style={style.preTitle}>UNMISSABLE</h2>
          <h2 style={style.title}>Bluesman Cocktail Bar</h2>
          <div style={style.textsContainer} className="textsContainer">
            <p style={style.cocktailText}>
              For three days a week, our unique and exclusive speakeasy in
              Barcelona, where you can enjoy the best drinks and cigars with
              discretion, privacy and comfort, becomes a nightclub where you can
              listen to live jazz, blues and soul concerts by bands from
              exceptional quality.
            </p>
            <p style={style.cocktailText}>
              After the concerts, a DJ will animate the rest of the night for
              the greatest enjoyment of the daring dancers.
            </p>
            <button style={style.textsButton}>See our program</button>
          </div>

          <button
            style={
              isMobile
                ? {
                    ...style.bookingButton,
                    ...{
                      width: "100%",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                    },
                  }
                : style.bookingButton
            }
          >
            BOOK YOUR TABLE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Promo;
