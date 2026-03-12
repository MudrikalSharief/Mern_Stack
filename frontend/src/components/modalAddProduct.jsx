function AddProductModal({ isOpen, onClose }) {

  const handleSubmit = () => {
    // call API
  };

  if (!isOpen) return null;

  return (
    <div className="add_modal">
      <h2>Add Product</h2>

      <input placeholder="Product Name" />
      <input placeholder="Price" />

      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default AddProductModal;