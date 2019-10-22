import React from 'react';
import { Link } from "react-router-dom";

const MainPage = () => {

  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/registration">registration</Link></li>
      <li><Link to="/user">user</Link></li>
    </ul>
  );
};

export default MainPage;
