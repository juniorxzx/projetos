import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
const index = () => {
  return (
    <nav>
      <h1>ARJ</h1>
      <ul>
        <li className="item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="item">
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default index;
