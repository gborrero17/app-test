import React, { Component } from "react";
import background from "../img/initial.png";

class BackgroundBubbles extends Component {
  state = {};
  render() {
    const initialBack = {
      backgroundImage: `url(${background})`,
      minHeight: "75vh",
      marginTop: "-10rem",

      backgroundRepeat: "repeat-x",
      backgroundPosition: "center bottom",
    };
    return <div style={initialBack}></div>;
  }
}

export default BackgroundBubbles;
