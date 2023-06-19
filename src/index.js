import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/pages/Layout"
import Home from "../src/pages/Home";
import RooftopGarden from "./pages/rooftopGarden/RooftopGarden";
import Contact from "../src/pages/Contact";
import NoPage from "../src/pages/NoPage";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooftopgarden" element={<RooftopGarden />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);