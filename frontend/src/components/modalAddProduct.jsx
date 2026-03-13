function AddProductModal({ isOpen, onClose, categories, brands }) {

  const handleSubmit = () => {
    // call API
  };

  if (!isOpen) return null;

  return (
    <div className="add_modal_holder" onClick={onClose}>
      <div className="add_modal" onClick={(e) => e.stopPropagation()}>
        <h2>Add New Item</h2>

        <label>Product Name <span className="red">*</span></label>
        <input placeholder="e.g. iPhone 14, Galaxy S23" />

        <label>Category <span className="red">*</span></label>
        <select>
          {
            categories.length == 0? (<option key={0}>No Category Set</option>) :
            (
              categories.map((item)=>
                <option key={item.categoryid}>{item.name}</option>
              )
            )
          }
        </select>


        <label>Brand</label>
        <select>
          {
            brands.length == 0? (<option key={0}>No brand Set</option>) :
            (
              brands.map((item)=>
                <option key={item.id}>{item.bname}</option>
              )
            )
          }
        </select>

      
        <label>Quantity</label>
        <input type="number" placeholder="0" />
      

        <div className="form_row">
          <div>
            <label>Base Price (Php) <span className="red">*</span></label>
            <input type="number" placeholder="0.00" />
          </div>

          <div>
            <label>Selling Price (Php) <span className="red">*</span></label>
            <input type="number" placeholder="0.00" />
          </div>
        </div>

        <div className="modal_buttons">
          <button className="cancel_btn" onClick={onClose}>Cancel</button>
          <button className="save_btn">Add Part</button>
        </div>
      </div>
    </div>
    
  );
}

export default AddProductModal;