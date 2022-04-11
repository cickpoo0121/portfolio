import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Button } from "react-bootstrap";

import Profile from "./components/Home/Profile";
import Navbar from "./components/Home/Navbar";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import ContractMe from "./components/ContactMe/ContractMe";

function App() {
  return (
    <div className="App" id="home-content">
      <Navbar />
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="my-5">
          <Profile />
        </div>
        <div id="resume-content"></div>
        <div style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Resume />
        </div>
        <div id="contactMe-content">
          <ContractMe />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
