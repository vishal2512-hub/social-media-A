import React from "react";
import Leftbar from "./component/leftbar/Leftbar";
import RightBar from "./component/rightbar/RIghtbar";
import Home from "./pages/home/Home";

const MainHome = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 6 }}>
        <Home/>
      </div>
      <RightBar />
    </div>
  );
};

export default MainHome;
