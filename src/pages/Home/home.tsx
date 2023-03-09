import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="hero min-h-[calc(100vh-96px)] bg-[url('/images/space.jpg')] backdrop-filter">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">PET SPACE ROCKS</h1>
            <p className="py-6">Meet your new best friend, out in the stars.</p>
            <Link to="/adopt">
              <button className="btn btn-primary">ADOPT NOW</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
