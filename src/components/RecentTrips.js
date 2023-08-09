import "./RecentTrips.css";
import Card from "./RecentTripCard";
import img1 from "../assets/8.jpg";
import img2 from "../assets/11.jpg";
import img3 from "../assets/12.jpg";

const RecentTrips = () => {
  const data = [
    {
      image: img1,
      title: "Trip to Paris",
      text:
        'Known as the "City of Love," Paris is famous for its iconic landmarks such as the Eiffel Tower, the Louvre Museum, Notre-Dame Cathedral, and charming neighborhoods like Montmartre.'
    },
    {
      image: img2,
      title: "Trip to Tokyo",
      text:
        "Tokyo is a modern metropolis with a blend of traditional and futuristic attractions. It offers cultural experiences, high-tech districts, shopping centers, and historic sites."
    },
    {
      image: img3,
      title: "Trip to Cairo",
      text:
        "Home to the Pyramids of Giza and the Sphinx, Cairo is a historical and cultural hub with a rich heritage dating back to ancient times."
    }
  ];
  return (
    <div className="trip">
      <h2>Recent Trips</h2>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        {data.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTrips;
