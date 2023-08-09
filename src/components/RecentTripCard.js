import "./RecentTrips.css";
const RecentTripCard = ({ image, title, text }) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="cardImg" src={image} />
      </div>

      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};
export default RecentTripCard;
