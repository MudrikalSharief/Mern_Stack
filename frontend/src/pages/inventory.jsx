

export function Inventory() {
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
                                <th>Model Id</th>
                                <th>Quantity</th>
                                <th>Base Price</th>
                                <th>Status</th>
                                <th>Supllier</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Samsung Bat</td>
                                <td>Battery</td>
                                <td>TW1937D23</td>
                                <td>40</td>
                                <td>Php 150</td>
                                <td>In stock</td>
                                <td>Main Supllier</td>
                                <td>
                                    <button>update</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Samsung Bat</td>
                                <td>Battery</td>
                                <td>TW1a937D23</td>
                                <td>402</td>
                                <td>Php 1520</td>
                                <td>In stock</td>
                                <td>Main Suplawdalier</td>
                                <td>
                                    <button>update</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Samsung Bat</td>
                                <td>Battery</td>
                                <td>TW1937D23</td>
                                <td>40</td>
                                <td>Php 150</td>
                                <td>In stock</td>
                                <td>Main Supllier</td>
                                <td>
                                    <button>update</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>  
           
        </div>
    )
}

export default Inventory;