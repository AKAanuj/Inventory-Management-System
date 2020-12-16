import React from 'react';
import "./navbar.css";
class Navbar extends React.Component
{
  render()
  {
      return (
        <nav className="nav">
        <div className="navbar-brand">
          InventSuite
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link active">
              <form className="form-inline has-feedback">
              <div className="form-group form-group-sm">
                  <input className="form-control" type="text"/>
                  <i class="input-icon fa fa-search form-control-feedback" />
              </div>
              </form>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link">

            <div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Tutorials
  <span class="caret"></span></button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation"><a role="menuitem" href="#">HTML</a></li>
    <li role="presentation"><a role="menuitem" href="#">CSS</a></li>
    <li role="presentation"><a role="menuitem" href="#">JavaScript</a></li>
    <li role="presentation" class="divider"></li>
    <li role="presentation"><a role="menuitem" href="#">About Us</a></li>
  </ul>
</div>

            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="fa fa-bell"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <image className="img-circle" src={require("../assets/Anuj.png")}/>
            </a>
          </li>
        </ul>
        </nav>
);
  }
}

export default Navbar;
