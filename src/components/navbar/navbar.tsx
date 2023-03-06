import "./navbar.scss"
import React from 'react';
import { Link } from 'react-router-dom';


export default class NavBar extends React.Component{
    render(){
        return (
        <nav>
              <Link to="/"><img src="/images/icon.png"/></Link>
              {/* <Link to="/"><button>Go to Home</button></Link> */}
        </nav>
        );
    }
}