import "../App.css";
import Navbar from "../components/navbar/Navbar";
import BookingForm from "../components/booking/BookingForm";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import Carousel from "../components/carousel/Carousel";
import Promo from "../components/promo-section/Promo";
import Socials from "../components/socials/Socials";
import Accommodation from "../components/accommodation/Accommodation";
import Rooms from "../components/rooms/Rooms";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textUnu, meowmeow] = useState("The Hotel");

  return (
    <div className="Home">
      <div class="content-container">
        <div class="d-flex align-self-center flex-column justify-content-between h-100">
          <Navbar setModalVisible={setModalVisible} />
          <div class="title-container d-flex align-items-center flex-column py-5">
            <h1 class="title">Timeless</h1>
            <h2>Hotel El Palace Barcelona 5*GL</h2>
          </div>
          <BookingForm />
        </div>

        <iframe
          src="https://www.youtube.com/embed/B_VL_2DWJtU?version=3&rel=0&playlist=B_VL_2DWJtU&modestbranding=1&loop=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
          frameborder="0"
          title="bgvideo"
        />
      </div>
      <Carousel type={"type1"} />
      <Promo />
      <Socials />
      <Accommodation />
      <Rooms />

      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        titleText={textUnu}
        setTextUnu={meowmeow}
      />
    </div>
  );
};

export default Home;
