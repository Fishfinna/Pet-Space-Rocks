import React from "react";
import "./adopt.scss";


export default class Adopt extends React.Component {

    render(){
        return (
            <div id="adopt">
            <h1>ADOPT</h1>

            <form>
                <h2>FiLTER FOR A FRiEND</h2>
                <label htmlFor="distance">Distance:</label>
                <input name="distance" type="range"></input>
                <div className="matching-list"></div>
                <button type="submit">ADOPT</button>
            </form>
            </div>
        );
    }
}