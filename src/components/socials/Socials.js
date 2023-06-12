import style from "./Socials.style";
import social1 from "../../images/social1.webp";
import social2 from "../../images/social2.webp";
import social3 from "../../images/social3.webp";
import social4 from "../../images/social4.webp";
import fb from "../../images/facebook-circle.svg";
import ig from "../../images/instagram-circle.svg";

const Socials = () => {
  return (
    <div className="container-fluid" style={style.socialsContainer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <p style={style.paragraph}>MINUTE BY MINUTE</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 style={style.title}>Hot off our social media</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center">
            <img
              src={social1}
              alt="sweets"
              className="img-fluid"
              style={style.socialImg}
            ></img>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center">
            <img
              src={social2}
              alt="sweets"
              className="img-fluid"
              style={style.socialImg}
            ></img>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center">
            <img
              src={social3}
              alt="sweets"
              className="img-fluid"
              style={style.socialImg}
            ></img>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center">
            <img
              src={social4}
              alt="sweets"
              className="img-fluid"
              style={style.socialImg}
            ></img>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center">
            <p style={style.paragraph}>Follow us</p>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center pb-5">
            <a href="https://www.instagram.com/hotelpalacebarcelona/">
              <img src={ig} alt="instagram" style={style.igMargin}></img>
            </a>

            <a href="https://es-es.facebook.com/elpalacebarcelona">
              <img src={fb} alt="facebook" style={style.fbMargin}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Socials;
