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
                {services.map((eachservice) => {
                    return(
                        <ServiceCard key={eachservice.service_id} post={eachservice} />
                    )
                })}
            </div>
        
    )
}

export default Services;