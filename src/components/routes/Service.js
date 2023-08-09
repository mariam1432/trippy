import Navbar from "../Navbar";
import Hero from "../Hero";
import serviceImg from "../../assets/8.jpg";
import Footer from "../Footer";
import RecentTrips from "../RecentTrips";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        bgImg={serviceImg}
        title="Service"
        btnClass="show"
        url="/"
      />
      <RecentTrips />
      <Footer />
    </>
  );
}
export default Service;
