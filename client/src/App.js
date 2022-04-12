import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Button } from "react-bootstrap";

import Profile from "./components/Home/Profile";
import Navbar from "./components/Home/Navbar";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import Interests from "./components/Interests/Interests";
// import ContractMe from "./components/ContactMe/ContractMe";

function App() {
  return (
    <div className="App" id="home-content">
      <div className="container" style={{ marginTop: "3%" }}>
        <Navbar />
        <div className="my-5">
          <Profile />
        </div>
        <div id="resume-content"></div>
        <div style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Resume />
        </div>
        {/* <div id="contactMe-content"></div>
        <div style={{ marginTop: "7%", marginBottom: "5%" }}>
          <ContractMe />
        </div> */}
        <div id="interests-content"></div>
        <div style={{ marginTop: "7%", marginBottom: "5%" }}>
          <Interests />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
