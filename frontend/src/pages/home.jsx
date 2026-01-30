import { getServices }   from "../api"; 
import { useEffect, useState } from "react"; // to manage state and lifecycle methods
import { ServiceCard } from "../components/blogpostcard"; // import the BlogPostComponent to display each post

export function Home() {

    const [service, setService] = useState([]); // state to hold the list of posts

    useEffect(() =>{ // lifecycle method that runs after the component mounts
        async function fetchservices(){
            const services = await getServices();
            setService(services); // update the state with fetched posts
        }

        fetchservices(); // call the async function to fetch posts

    }, [])

    return (
        <div className="posts_container">  
            {service.map((eachservice) =>{
                return(
                    <ServiceCard post={eachservice}  key={eachservice.service_id}/>
                )
            })}
        </div>
    )
}

export default Home;