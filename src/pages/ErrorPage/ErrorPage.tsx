import React from "react";
import { Link } from "react-router-dom";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div className="hero min-h-[calc(100vh-96px)] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{":("}</h1>
            <p className="py-6">
              Looks like you've made it to the danger zone. This is a <br /> 404
              ERROR.
            </p>
            <Link to="/">
              <button className="btn btn-primary">Head back home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
