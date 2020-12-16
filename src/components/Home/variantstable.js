import React from 'react';
import mountain from '../../assets/mountain.png';

class VariantTable extends React.Component{
  render()
  {
    return (
      <div className="variantsDetails">
        <h4>Variant Details</h4>
        <table className="table">
        <thead style={{backgroundColor:'#dddddd',padding:10}}>
        <tr>
        <th>
          Variants
        </th>
        <th>
          Price
        </th>
        <th>
          Vendor
        </th>
        <th>
          Quantity
        </th>
        <th>
          SKU
        </th>
        </tr>
        </thead>

        <tbody>
        <tr>
        <td>
          <img style={{width:25,height:25,borderWidth:1}} src={mountain}/>
          <span>44</span>
        </td>
        <td>
          <input className="form-control"/>
        </td>
        <td>
          <input className="form-control"/>
        </td>
        <td>
          <div className="dropdown">
          <button data-toggle="dropdown" className="dropdown-toggle form-control"><i className="fa fa-chevron-down"></i></button>
          <ul className="dropdown-menu">
          <li></li>
          </ul>
          </div>
        </td>
        <td>
        <input className="form-control"/>

        </td>
        </tr>
        <tr>

        <td>
          <img style={{width:25,height:25,borderWidth:1}} src={mountain}/>
          <span>44</span>
        </td>
        <td>
          <input className="form-control"/>
        </td>
        <td>
          <input className="form-control"/>
        </td>
        <td>
          <div className="dropdown">
          <button data-toggle="dropdown" className="dropdown-toggle form-control"><i className="fa fa-chevron-down"></i></button>
          <ul className="dropdown-menu">
          <li></li>
          </ul>
          </div>
        </td>
        <td>
        <input className="form-control"/>

        </td>

        </tr>

        </tbody>

        </table>
      </div>
    );
  }
}

export default VariantTable;
