import { getServices } from "../api"; //import the function that will fetch services from backend
import { useEffect, useState } from "react"; // to manage state and lifecycle methods
import { ServiceCard } from "../components/blogpostcard"; // import the BlogPostComponent to display each post

export function Services() {
    const [services, setServices] = useState([]); // state to hold the list of services

    useEffect(() => {

        async function fetchServices(){
            const services = await getServices();
            setServices(services); // update the state with fetched services
        }
        fetchServices(); // call the async function to fetch services
    }, []) // lifecycle method that runs after the component mounts
    
    return (
        
            <div className="page_container">
                <div className="page_header">
                    <div>
                        <div className="page_title">Services</div>
                        <div className="page_subtitle">Manage phone services</div>
                    </div>
                    <div>
                        <button className="add_button">Add Service</button>
                    </div>
                </div>

                <div className="page_body">
                    <div className="search_bar_container">
                        <div className="search_bar_and_logo_holder">
                            <input className="search_bar" type="text" placeholder="Search Services..." />
                        </div>
                    </div>

                    <div className="table_holder">
                        <table className="inventory_table">
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Contact</th>
                                    <th>Phone Model</th>
                                    <th>Service</th>
                                    <th>Cost</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Custmer una</td>
                                    <td>09090909090</td>
                                    <td>Poco 1d</td>
                                    <td>LCD</td>
                                    <td>294</td>
                                    <td>Pending</td>
                                    <td>Jan 12, 2026</td>
                                    <td>
                                        <select class="status-dropdown">
                                            <option>Available</option>
                                            <option>Out of Stock</option>
                                            <option>Discontinued</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>awkjdka una</td>
                                    <td>090902323290</td>
                                    <td>Oppo 2ws</td>
                                    <td>Battery</td>
                                    <td>2234</td>
                                    <td>Pending</td>
                                    <td>Jan 15 2026</td>
                                    <td>
                                        <select class="status-dropdown">
                                            <option>Available</option>
                                            <option>Out of Stock</option>
                                            <option>Discontinued</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>lnkfgb</td>
                                    <td>0909454645</td>
                                    <td>Realme a13</td>
                                    <td>Charging Pin</td>
                                    <td>134</td>
                                    <td>Pending</td>
                                    <td>Jan 12 2026</td>
                                    <td>
                                        <select class="status-dropdown">
                                            <option>Available</option>
                                            <option>Out of Stock</option>
                                            <option>Discontinued</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>


                {/* {services.map((eachservice) => {
                    return(
                        <ServiceCard key={eachservice.service_id} post={eachservice} />
                    )
                })} */}
            </div>
        
    )
}

export default Services;