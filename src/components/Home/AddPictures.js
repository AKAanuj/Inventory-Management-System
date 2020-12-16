import React from 'react';
import {Link} from 'react-router-dom';
import images from '../../assets/images.jpg';
class AddPictures extends React.Component
{
  render(){
    return (
      <div>
      <h4>Add Product</h4>
      <div></div>
      <img style={{marginLeft:10,width:100,height:100}} src={images}/>
      <img style={{marginLeft:10,width:100,height:100}} src={images}/>
      <img style={{marginLeft:10,width:100,height:100}} src={images}/>
      <img style={{marginLeft:10,width:100,height:100}} src={images}/>
      <img style={{marginLeft:10,width:100,height:100}} src={images}/>

      <button style={{marginLeft:10,width:100,height:100,borderStyle:'dotted'}} >Add Image</button>
      </div>
    );
  }
}

export default AddPictures;
