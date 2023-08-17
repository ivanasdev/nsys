import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <div>
        <Link to="/nutriologos">
        <button className="btn btnhomenutriologo">Soy nutriologo</button>
        </Link>
      </div>
      <div>
      <Link to="/perfiles">
        <button className="btn btnhome">Encuentra un nutriologo</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
