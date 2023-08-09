import Navbar from "../Navbar";
import Hero from "../Hero";
import aboutImg from "../../assets/night.jpg";
import Footer from "../Footer";
import AboutUs from "../Aboutus";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        bgImg={aboutImg}
        title="About"
        btnClass="show"
        url="/"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
