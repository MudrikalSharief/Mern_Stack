import { getInventory } from "../api";
import { useState, useEffect } from "react";

export function Inventory() {

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        async function fetchInventory(){
            const inventory = await getInventory();
            setInventory(inventory);
        }

        fetchInventory();
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
    
    return (
        <div className="page_container">  
            <div className="page_header">
                <div>
                    <div className="page_title">Inventory Page</div>
                    <div className="page_subtitle">This is where inventory details will be displayed.</div>
                </div>
                <div>
                    <button className="add_button">Add Item</button>
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
                                <th>Item Name</th>
                                <th>Category</th>
                                <th>Base Price</th>
                                <th>Selling Price</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Supllier</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                inventory.length === 0 ? (<tr><td colSpan="8"> No Items</td></tr>    
                                ) : (
                                    inventory.map((item) => (
                                        <tr key={item.pid}>
                                            <td>{item.pname}</td>
                                            <td>{item.category}</td>
                                            <td>{item.base_price}</td>
                                            <td>{item.selling_price}</td>
                                            <td>{item.quantity}</td>
                                            <td className={stockClass(item.quantity)}>{status(item.quantity)}</td>
                                            <td>{item.supplier}</td>
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

                <div className="add_modal_holder">
                    <div>
                        <form action="">
                            <label htmlFor="name">Product Name</label>
                            <input name="name" type="text" />

                            <label htmlFor="name">Product Name</label>
                            <input name="name" type="text" />

                            <label htmlFor="name">Product Name</label>
                            <input name="name" type="text" />

                            <label htmlFor="name">Product Name</label>
                            <input name="name" type="text" />

                            <label htmlFor="name">Product Name</label>
                            <input name="name" type="text" />

                            <label htmlFor="name">Product Name</label>
                            <input name="name" type="text" />
                            
                        </form>
                    </div>
                </div>

            </div>  
           
        </div>
    )
}

export default Inventory;