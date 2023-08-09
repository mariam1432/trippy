import Navbar from "../Navbar";
import Hero from "../Hero";
import contactImg from "../../assets/2.jpg";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        bgImg={contactImg}
        title="Contact"
        btnClass="show"
        url="/"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
