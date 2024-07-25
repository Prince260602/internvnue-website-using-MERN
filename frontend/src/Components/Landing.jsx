import Admin from "./Admin.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";

//This is the main page
const Landing = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
      <Admin />
    </div>
  );
};

export default Landing;
