import React, {useContext} from 'react'
import { Link } from 'react-router-dom'; 
import {GlobalContext} from '../context/GlobalState';

export const Navbar = () =>{
const {loggedIn, logIn} = useContext(GlobalContext);
const show=loggedIn? "inline-block" : "none";
const show2=loggedIn? "none" : "inline-block";

    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor: "#020024"}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
  <Link to="/" className="navbar-brand">Navbar</Link>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
    <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="profile" className="nav-link" style={{display:show}}>Profile</Link>
      </li>
    </ul>
      <button className="btn btn-outline-light my-2 my-sm-0" onClick={logIn} style={{display:show2}}>Login</button>
  </div>
</nav>
    );
}
