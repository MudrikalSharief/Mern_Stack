import { useState } from "react";


function AddProductModal({ isOpen, onClose, onSubmit, categories = [], brands =[] }) {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      categoryId: Number(categoryId),
      brandId: Number(brandId),
      quantity: Number(quantity),
      basePrice: Number(basePrice),
      sellingPrice: Number(sellingPrice)
    };

    onSubmit(payload);
  };

  if (!isOpen) return null;

  return (
    <div className="add_modal_holder" onClick={onClose}>
      <form className="add_modal" 
        onSubmit={handleSubmit} 
        onClick={(e) => e.stopPropagation()}
      >

        <h2>Add New Item</h2>

        <label>Product Name <span className="red">*</span></label>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of the Item" 
        />

        <label>Category <span className="red">*</span></label>
        <select 
          value={categoryId}
          onChange={e => setCategoryId(e.target.value)}
        >
          {
            categories.length == 0? (<option key={0} value={""}>No Category Set</option>) :
            ( 
              <>
                <option value="" disabled selected>Select Category</option>
                {
                  categories.map((item)=>
                    <option key={item.categoryid} value={item.categoryid}>{item.name}</option>
                  )
                }
              </>
            )
          }
        </select>


        <label>Brand</label>
        <select
          value={brandId}
          onChange={e => setBrandId(e.target.value)}
        >
          {
            brands.length == 0? (<option key={0} value={""}>No brand Set</option>) :
            (
              <>
                <option value="" disabled selected>Select Brand</option>
                {
                  brands.map((item)=>
                    <option key={item.id} value={item.id}>{item.bname}</option>
                  )
                }
              </> 
            )
          }
        </select>

      
        <label>Quantity</label>
        <input 
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          type="number" placeholder="0" 
        />
      

        <div className="form_row">
          <div>
            <label>Base Price (Php) <span className="red">*</span></label>
            <input 
              value={basePrice}
              onChange={e => setBasePrice(e.target.value)}
              type="number" placeholder="0.00" 
            />
          </div>

          <div>
            <label>Selling Price (Php) <span className="red">*</span></label>
            <input 
              value={sellingPrice}
              onChange={e => setSellingPrice(e.target.value)}
              type="number" placeholder="0.00" 
            />
          </div>
        </div>

        <div className="modal_buttons">
          <button type="button" className="cancel_btn" onClick={onClose}>Cancel</button>
          <button type="submit" className="save_btn" >Add Part</button>
        </div>
      </form>
    </div>
    
  );
}

export default AddProductModal;