import React from "react";
import BackgroundBubbles from "../components/backgroundBubbles";
import PrimaryButton from "../components/primaryButton";
import SecondaryOutlineButton from "../components/secondaryOutlineButton";
import MainTitle from "../components/mainTitle";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.StrictMode>
      <BackgroundBubbles />
      <MainTitle />
      <Link to="/SignUp">
        <div className="pt-3">
          <PrimaryButton text="Get Started" />
        </div>
      </Link>
      <div className="mt-3">
        <SecondaryOutlineButton text="Sign In" />
      </div>
    </React.StrictMode>
  );
};

export default Home;
