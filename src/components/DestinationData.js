import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.cName}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="images">
          <img alt="img1" src={this.props.img1} />
          <img alt="img2" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
