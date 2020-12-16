import React from 'react';
import {Link} from 'react-router-dom';
import "./productstable.css";

class ProductTable extends React.Component{
  render()
  {
    return(
      <div style={{backgroundColor:'white',padding:10,borderRadius:5}}>
        <div>
        <h4>Products</h4>
        <Link to="/Home"><span className="btn-link pull-right">+Add Product</span></Link>
        <button style={{margin:10}} className="pull-right btn btn-default">Sort<i className="fa fa-sort"></i></button>
        <button style={{margin:10}} className="pull-right btn btn-default">Filter<i className="fa fa-filter"></i></button>

        </div>
        <table className="table">
        <thead style={{backgroundColor:'#dddddd',fontSize:12}}>
        <tr>
        <th><input type="checkbox"/></th>
        <th>Product Name</th>
        <th>Inventory</th>
        <th>Type</th>
        <th>Brand</th>
        <th>Date Added</th>
        <th>Selling Price</th>
        <th>Vendor</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody style={{fontSize:10}}>
        <tr>
        <td><input type="checkbox"/></td>
        <td>Puma Sport Shoe White#2000312</td>
        <td>30 in stock4 Variant</td>
        <td>Shoe</td>
        <td>Puma</td>
        <td>12 Aug 2020</td>
        <td>200 Rs</td>
        <td>Swasth India</td>
        <td><i className="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
        <td><input type="checkbox"/></td>
        <td>Puma Sport Shoe White#2000312</td>
        <td>30 in stock4 Variant</td>
        <td>Shoe</td>
        <td>Puma</td>
        <td>12 Aug 2020</td>
        <td>200 Rs</td>
        <td>Swasth India</td>
        <td><i className="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
        <td><input type="checkbox"/></td>
        <td>Puma Sport Shoe White#2000312</td>
        <td>30 in stock4 Variant</td>
        <td>Shoe</td>
        <td>Puma</td>
        <td>12 Aug 2020</td>
        <td>200 Rs</td>
        <td>Swasth India</td>
        <td><i className="fa fa-ellipsis-v"></i></td>
        </tr>
        <tr>
        <td><input type="checkbox"/></td>
        <td>Puma Sport Shoe White#2000312</td>
        <td>30 in stock4 Variant</td>
        <td>Shoe</td>
        <td>Puma</td>
        <td>12 Aug 2020</td>
        <td>200 Rs</td>
        <td>Swasth India</td>
        <td><i className="fa fa-ellipsis-v"></i></td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
