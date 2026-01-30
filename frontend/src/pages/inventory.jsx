

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
                    <input className="search_bar" type="text" placeholder="Search inventory..." />
                </div>
            </div>
           
        </div>
    )
}

export default Inventory;