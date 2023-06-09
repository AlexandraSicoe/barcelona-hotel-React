import navbarBrandBg from "../../images/navbar brand.png";
import style from "./Navbar.style";

const Navbar = ({ setModalVisible }) => {
  const makeMyModalVisible = () => {
    setModalVisible(true);
  };
  return (
    <nav
      className="navbar navbar-expand-lg py-4 mt-4 mx-5"
      style={style.navbar}
    >
      <div className="container-fluid px-5">
        <ul className="d-flex p-0 m-0" style={style.iconList}>
          <li style={{ listStyleType: "none" }}>
            <a href="https://www.instagram.com/hotelpalacebarcelona/">
              <i className="bi bi-instagram " style={style.icon}></i>
            </a>
          </li>
          <li style={{ listStyleType: "none" }}>
            <i className="bi bi-facebook  ms-3" style={style.icon}></i>
          </li>
        </ul>
        <div className="d-flex justify-content-center">
          <a href="#" className="navbar-brand">
            <img
              src={navbarBrandBg}
              alt="El Palace Barcelona Logo"
              className="navImg"
              style={style.navImg}
            />
          </a>
        </div>

        <div className="d-flex">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" style={style.navItem}>
                <a className="nav-link" href="#" style={style.navLink}>
                  CONTACT
                </a>
              </li>
              <li
                className="nav-item"
                style={{ ...style.lang, ...style.navItem }}
              >
                <a className="nav-link" href="#" style={style.navLink}>
                  EN
                </a>
              </li>
              <li className="nav-item" style={style.navItem}>
                <a className="nav-link" href="#" style={style.navLink}>
                  MENU
                </a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            style={style.navButton}
            type="button"
            onClick={() => {
              makeMyModalVisible();
            }}
          >
            <span>
              <i className="bi bi-list"></i>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
