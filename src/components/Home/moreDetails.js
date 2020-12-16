import React from 'react';
import "./moreDetails.css";
class Details extends React.Component{
  render()
    {
      return(
        <div>
        <h4>Quantity</h4>
        <h6 class="small">Available</h6>
        <input className="form-control" />
        <h4>Pricing</h4>
        <h6 class="small">Price</h6>
        <input className="form-control" />
        <h6 class="small">Cost per item</h6>
        <input type="text" className="form-control" />
        <input type="checkbox" /><label style={{marginLeft:4,fontSize:10,fontWeight:'normal'}}>Charge Tax on this product</label>

        <h4 className="detailsHeading">Product Details</h4>
        <h6 className="small">Product Type</h6>
        <div style={{marginBottom:20}} className="dropdown">
          <button data-toggle="dropdown" className="productbutton form-control dropdown-toggle">Redmi Note 7<i className="fa fa-caret-down"></i></button>
          <ul className="dropdown-menu">
            <li style={{padding:2}}className="productmenuitem">Redmi Note 7<i style={{color:'green'}} className="fa fa-plus-circle push-right"></i></li>
          </ul>
        </div>
        <h4 className="detailsHeading">Tags</h4>
        <h6 className="small">Type Tags</h6>
        <input style={{marginBottom:10}} type="text" value="" data-role="tagsinput" id="tags" className="form-control"/>
        </div>
      );
    }
}

export default Details;
