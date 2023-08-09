import "./DestinationStyles.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/5.jpg";
import img4 from "../assets/6.jpg";
import DestinationData from "./DestinationData";
function Destination() {
  return (
    <div className="destination">
      <h1> Popular Destinations</h1>
      <p>
        Tours give you the opportunity to see alot within a limited time frame
      </p>
      <DestinationData
        cName="first-des"
        heading="Taal Volcano, Batangas"
        text={` Taal Volcano is a complex and potentially active stratovolcano
          located on the island of Luzon in the Philippines. It is situated in
          the province of Batangas and is known for its picturesque setting
          within Taal Lake. Taal Volcano is one of the most well-known and
          historically active volcanoes in the Philippines and has had a
          significant impact on the surrounding region due to its frequent
          eruptions.`}
        img1={img1}
        img2={img2}
      />
      <DestinationData
        cName="first-des-reverse"
        heading="Machu Picchu, Peru"
        text={` Machu Picchu is an ancient Incan citadel located in the Andes Mountains of Peru. It is one of the most iconic and well-preserved archaeological sites in the world, often referred to as the "Lost City of the Incas.`}
        img1={img3}
        img2={img4}
      />
    </div>
  );
}
export default Destination;
