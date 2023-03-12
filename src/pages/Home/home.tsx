import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="hero min-h-screen bg-[url('/images/space.jpg')] backdrop-filter">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="text-7xl font-bold">PET SPACE ROCKS</h1>
            <p className="py-3 pb-10 text-xl">
              Meet your new best friend, out in the stars.
            </p>
            <Link to="/adopt">
              <button className="btn btn-primary">ADOPT NOW</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
