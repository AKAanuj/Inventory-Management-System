import React from 'react';
import Inventory from './Inventory';
import Variants from "./variants";
import Details from "./moreDetails";
import AddPictures from "./AddPictures";
class AddProduct extends React.Component
{
  render()
  {
    return(
      <div>
      <div className="col-sm-8">
      <div style={{backgroundColor:"white",padding:10,borderRadius:5}}>
      <i style={{marginRight:10}} className="fa fa-angle-left"/>
      <span className="small font-weight-light">Product</span>
      <div></div>
      <h4>Add Product</h4>
      <p className="small font-weight-light">First Name</p>
      <input className="form-control input-sm" />
      <p className="small font-weight-light">Description</p>
      <textarea class="form-control"></textarea>
      </div>

      <div style={{backgroundColor:"white",marginTop:10,padding:10,borderRadius:5}}>
      <AddPictures />
      </div>

      <div style={{backgroundColor:"white",marginTop:10,padding:10,borderRadius:5}}>
      <Inventory />
      </div>

      <div style={{backgroundColor:"white",marginTop:10,padding:10,borderRadius:5}}>
      <Variants />
      </div>
      <div style={{backgroundColor:"white",marginBottom:40}}>
        <button className="pull-right btn btn-primary">Add Product</button>
        <button className="pull-right btn btn-default">Cancel</button>
      </div>
      </div>

      <div style={{backgroundColor:'white',paddingTop:10,borderRadius:5}} className="col-sm-4">
        <Details />
      </div>

      </div>
    );
  }
}

export default AddProduct;
