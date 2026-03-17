import { getInventory, getCategory, getBrand } from "../api";
import AddProductModal from "../components/modalAddProduct";
import { useState, useEffect } from "react";
import { createProduct } from "../services/productService";

export function Inventory() {

    const [inventory, setInventory] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);

    useEffect(() => {
        async function fetchData(){

            try{
                const [inventory,category,brand] = await Promise.all([
                    getInventory(),
                    getCategory(),
                    getBrand()
                ]);

                setInventory(inventory);
                setCategory(category);
                setBrand(brand);

            }catch(error){
                 console.error("Failed to load data:", error);
            }
        }

        fetchData();
        
    }, [])

    function status(quantity){
        if(quantity > 15) return "In Stock"
        if(quantity > 0 ) return "Low Stock"
        return "Out of Stock"
    }

    function stockClass(quantity){
        if (quantity > 15) return "status in-stock";
        if (quantity > 0) return "status low-stock";
        return "status out-stock";
    }
    
    async function handleAddProduct(productData) {
        try {
            const response= await createProduct(productData);
            const newProduct = {
                pid: response.productId,
                pname: productData.name,
                base_price: productData.basePrice,
                selling_price: productData.sellingPrice,
                quantity: productData.quantity,
                category: category.find(c => Number(c.categoryid) === Number(productData.categoryId))?.name || "",
                brand: brand.find(b => Number(b.id) === Number(productData.brandId))?.bname || ""
                };
            setInventory((prev) => [...prev, newProduct]);

            // close modal
            setAddModal(false);

        } catch (error) {
            console.error("Failed to add product:", error);
        }
    }

    return (
        <div className="page_container">  
            <div className="page_header">
                <div>
                    <div className="page_title">Inventory Page</div>
                    <div className="page_subtitle">This is where inventory details will be displayed.</div>
                </div>
                <div>
                    <button className="add_button" onClick={() => setAddModal(true)}>Add Item</button>

                    <AddProductModal 
                        isOpen={addModal}
                        onClose={() => setAddModal(false)}
                        categories={category}
                        brands={brand}
                        onSubmit={handleAddProduct}
                    />
                </div>
            </div>

            <div className="page_body">
                <div className="search_bar_container">
                    <div className="search_bar_and_logo_holder">
                        <input className="search_bar" type="text" placeholder="Search inventory..." />
                    </div>
                </div>

                <div className="table_holder">
                    <table className="inventory_table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Item Name</th>
                                <th>Base Price</th>
                                <th>Selling Price</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                inventory.length === 0 ? (<tr><td colSpan="8"> No Items</td></tr>    
                                ) : (
                                    inventory.map((item) => (
                                        <tr key={item.pid}>
                                            <td>{item.category}</td>
                                            <td>{item.brand}</td>
                                            <td>{item.pname}</td>
                                            <td>{item.base_price}</td>
                                            <td>{item.selling_price}</td>
                                            <td>{item.quantity}</td>
                                            <td className={stockClass(item.quantity)}>{status(item.quantity)}</td>
                                            <td>
                                                <button>update</button>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
                            
                            
                        </tbody>
                    </table>
                </div>


            </div>  
           
        </div>
    )
}

export default Inventory;