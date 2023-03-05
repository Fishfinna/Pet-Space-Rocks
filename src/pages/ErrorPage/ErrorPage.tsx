import React from 'react';
import { Link } from 'react-router-dom';


export default class ErrorPage extends React.Component{
    render(){
        return (
        <div>
            <h1>ERROR: 404</h1>
            <p>Page Not Found</p>
              <Link to="/"><button>Go to Home</button></Link>
        </div>
        );
    }
}