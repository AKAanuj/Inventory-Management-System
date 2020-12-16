import React from 'react';
import "./variants.css";
import VariantTable from "./variantstable";
class Variants extends React.Component{
  render()
  {
    return(
      <div>
      <div className="variantheader">
      <h4>Variants</h4>
      <span><input type="checkbox"/> This Product has multiple variants</span>
      </div>
      <div className="variantheader">
      <h6 style={{display:'inline'}}>Option 1</h6>
      <i className="fa fa-trash"></i>
      </div>

      <div className="variantsinfo">
      <span className="dropdown">
      <button style={{width:100}}className="dropdown-toggle form-control" data-toggle="dropdown">Size<i className="fa fa-chevron-down"></i></button>
      <ul className="dropdown-menu">
        <li style={{margin:5}}>Size</li>
      </ul>
      </span>
      <input type="text"className="form-control" style={{height:100,width:270}} />
      </div>

      <div className="variantsinfo">
      <span className="dropdown">
      <button style={{width:100}}className="dropdown-toggle form-control" data-toggle="dropdown">Size<i className="fa fa-chevron-down"></i></button>
      <ul className="dropdown-menu">
        <li style={{margin:5}}>Colour</li>
      </ul>
      </span>
      <input type="text"className="form-control" placeholder="separate option with comma"style={{width:270}} />
      </div>
      <VariantTable />
      </div>
    );
  }
}

export default Variants;
