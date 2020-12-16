import React from 'react';
import "./sidenav.css";
import {Link} from 'react-router-dom';

class SideNav extends React.Component
{
  render()
  {
  return (
<nav className="nav h-100">
  <ul className="nav flex-column">
    <li className="nav-item">
      <Link className="nav-link" to={"/Home"}><i className="sidenav-icon fa fa-home"></i>Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/Home"}><i className="sidenav-icon fa fa-shopping-cart"></i>Order</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/Products"}><i className="sidenav-icon fa fa-box"></i>Product</Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" href={"#"}><i className="sidenav-icon fa fa-users"></i>Customers</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href={"#"}><i className="sidenav-icon fa fa-warehouse"></i>Warehouse</a>
    </li>
  </ul>
</nav>
);
}
}

export default SideNav;
