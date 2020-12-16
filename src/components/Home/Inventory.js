import React from 'react';

class Inventory extends React.Component
{
  render()
  {
    return (
        <div>
        <h4>Inventory</h4>
        <p className="small font-weight-light">SKU (Stock Keeping Unit)</p>
        <input className="form-control" />
        <p className="small font-weight-light">Barcode (ISBN, UPC, GTIN, etc.)</p>
        <input className="form-control" />
        </div>
    );
  }
}

export default Inventory;
