import "../index.css";
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
