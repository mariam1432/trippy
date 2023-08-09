import Navbar from "../Navbar";
import Hero from "../Hero";
import homeImg from "../../assets/1.jpg";
import Destination from "../Destination";
import RecentTrips from "../RecentTrips";
import Footer from "../Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        description="Choose your Favorite Destination"
        cName="hero"
        bgImg={homeImg}
        title="Your Journey Your Story"
        btnClass="show"
        btnText="Travel Plan"
        url="/"
      />
      <Destination />
      <RecentTrips />
      <Footer />
    </>
  );
}
export default Home;
