import modalImg from "../../images/modal-bg.webp";

const Modal = ({ modalVisible, setModalVisible, titleText, setTextUnu }) => {
  return (
    <div
      class="modal modal-fullscreen-down bg-light"
      style={modalVisible == true ? { display: "block" } : { display: "none" }}
      id="exampleModal"
      tabindex="-1"
      role="dialog"
    >
      <div class="d-flex justify-content-center py-5 modal-header-container">
        <img src={modalImg} alt="" />
        <button
          type="button"
          class="btn-close close-button"
          onClick={() => {
            setModalVisible(false);
          }}
        ></button>
      </div>
      <div class="modal-content-container">
        <div class="container">
          <ul>
            <li>
              <a href="#">{titleText}</a>
            </li>
            <li>
              <a href="#">Rooms & Suites</a>
            </li>

            <li>
              <a href="#">Restaurants</a>
              <div>
                <ul class="d-flex flex-wrap">
                  <li>
                    <a href="#">Amar Barcelona</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="#">Rootop Garden</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="#">Bluesman Cocktail Bar</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="#">El Hall</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="#">El Jardin</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Experiences</a>
              <div>
                <ul class="d-flex flex-wrap">
                  <li>
                    <a href="#">All-day Menu</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="#">Afternoon Tea</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="#">Lazy Weekends</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="#">The Arros</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="#">Open-air Cinema</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="#">Bluesman's music program</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Meetings & Events</a>
            </li>
            <li>
              <a href="#">Mayan Luxury Spa</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="modal-footer-container py-5 mt-auto">
        <ul>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <p
              onClick={() => {
                setTextUnu("meow");
              }}
            >
              ·
            </p>
          </li>
          <li>
            <a href="#">GALLERY</a>
          </li>
          <li>
            <p>·</p>
          </li>
          <li>
            <a href="#">GIFT VOUCHERS</a>
          </li>
          <li>
            <p>·</p>
          </li>
          <li>
            <a href="#">PRESS RELEASES</a>
          </li>
          <li>
            <p>·</p>
          </li>
          <li>
            <a href="#">PARTNERSHIP</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Modal;
