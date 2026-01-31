import { getServices }   from "../api"; 
import { useEffect, useState } from "react"; // to manage state and lifecycle methods
import { ServiceCard } from "../components/blogpostcard"; // import the BlogPostComponent to display each post

export function Dashboard() {

    const [service, setService] = useState([]); // state to hold the list of posts

    useEffect(() =>{ // lifecycle method that runs after the component mounts
        async function fetchservices(){
            const services = await getServices();
            setService(services); // update the state with fetched posts
        }

        fetchservices(); // call the async function to fetch posts

    }, [])

    return (
        <div className="page_container">  
            <div>
                <div className="page_title">Dashboard</div>
                <div className="page_subtitle">Overview of Services and Inventory status</div>
            </div>

            <div className="metric_holder">
                <div className="metric">
                    <div className="metric_info">
                        <p className="metric_name">Total Services</p>
                        <p className="metric_value">0</p>
                    </div>
                    <div className="metric_icon_holder">
                        <span className="material-symbols-outlined metric_icon">
                            icon
                        </span>
                    </div>
                </div>

                <div className="metric">
                    <div className="metric_info">
                        <p className="metric_name">Pending</p>
                        <p className="metric_value">0</p>
                    </div>
                    <div className="metric_icon_holder">
                        <span className="material-symbols-outlined metric_icon">
                            icon
                        </span>
                    </div>
                </div>
                <div className="metric">
                    <div className="metric_info">
                        <p className="metric_name">In Progress</p>
                        <p className="metric_value">0</p>
                    </div>
                    <div className="metric_icon_holder">
                        <span className="material-symbols-outlined metric_icon">
                            icon
                        </span>
                    </div>
                </div>
                <div className="metric">
                    <div className="metric_info">
                        <p className="metric_name">Completed</p>
                        <p className="metric_value">0</p>
                    </div>
                    <div className="metric_icon_holder">
                        <span className="material-symbols-outlined metric_icon">
                            icon
                        </span>
                    </div>
                </div>
                <div className="metric">
                    <div className="metric_info">
                        <p className="metric_name">Inventory Items</p>
                        <p className="metric_value">0</p>
                    </div>
                    <div className="metric_icon_holder">
                        <span className="material-symbols-outlined metric_icon">
                            icon
                        </span>
                    </div>
                </div>
                <div className="metric">
                    <div className="metric_info">
                        <p className="metric_name">Low Stock</p>
                        <p className="metric_value">0</p>
                    </div>
                    <div className="metric_icon_holder">
                        <span className="material-symbols-outlined metric_icon">
                            icon
                        </span>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Dashboard;