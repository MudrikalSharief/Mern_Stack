import { useState } from "react";


function AddProductModal({ isOpen, onClose, onSubmit, categories = [], brands =[] }) {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("0");
  const [brandId, setBrandId] = useState("0");
  const [quantity, setQuantity] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !categoryId || !brandId || !quantity || !basePrice || !sellingPrice){
      setShowError(true);
    }else{
      setShowError(false);
      const payload = {
        name,
        categoryId: Number(categoryId),
        brandId: Number(brandId),
        quantity: Number(quantity),
        basePrice: Number(basePrice),
        sellingPrice: Number(sellingPrice)
      };
  
      onSubmit(payload);
    }
  };

  if (!isOpen) return null;

  // helper (in the component)
  function isValid(value) {
    return value !== null && value !== "" && Number(value) !== 0;
  }
  function statusClass(value) {
    return isValid(value) ? "green" : "red";
  }
  function statusLabel(value) {
    return isValid(value) ? "✔" : "*";
  }

  return (
    <div className="add_modal_holder" onClick={onClose}>
      <form className="add_modal" 
        onSubmit={handleSubmit} 
        onClick={(e) => e.stopPropagation()}
      >

        <h2>Add New Item</h2>

        <label>Product Name <span className={statusClass(name)}>{statusLabel(name)}</span></label>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of the Item" 
        />

        <label>Category <span className={statusClass(categoryId)}>{statusLabel(categoryId)}</span></label>
        <select 
          value={categoryId}
          onChange={e => setCategoryId(e.target.value)}
        >
          {
            categories.length == 0? (<option key={0} value={"0"}>No Category Set</option>) :
            ( 
              <>
                <option value="0" disabled defaultValue={0}>Select Category</option>
                {
                  categories.map((item)=>
                    <option key={item.categoryid} value={item.categoryid}>{item.name}</option>
                  )
                }
              </>
            )
          }
        </select>


        <label>Brand <span className={statusClass(brandId)}>{statusLabel(brandId)}</span></label>
        <select
          value={brandId}
          onChange={e => setBrandId(e.target.value)}
        >
          {
            brands.length == 0? (<option key={0} value={"0"}>No brand Set</option>) :
            (
              <>
                <option value="0" disabled defaultValue={0}>Select Brand</option>
                {
                  brands.map((item)=>
                    <option key={item.id} value={item.id}>{item.bname}</option>
                  )
                }
              </> 
            )
          }
        </select>

      
        <label>Quantity <span className={statusClass(quantity)}>{statusLabel(quantity)}</span></label>
        <input 
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          type="number" placeholder="0" 
        />
      

        <div className="form_row">
          <div>
            <label>Base Price (Php) <span className={statusClass(basePrice)}>{statusLabel(basePrice)}</span></label>
            <input 
              value={basePrice}
              onChange={e => setBasePrice(e.target.value)}
              type="number" placeholder="0.00" 
            />
          </div>

          <div>
            <label>Selling Price (Php) <span className={statusClass(sellingPrice)}>{statusLabel(sellingPrice)}</span></label>
            <input 
              value={sellingPrice}
              onChange={e => setSellingPrice(e.target.value)}
              type="number" placeholder="0.00" 
            />
          </div>
        </div>

        {showError && (
          <div>
            <span className="red">Please fill up all input with *</span>
          </div>
        )}

        <div className="modal_buttons">
          <button type="button" className="cancel_btn" onClick={onClose}>Cancel</button>
          <button type="submit" className="save_btn" >Add Part</button>
        </div>
      </form>
    </div>
    
  );
}

export default AddProductModal;