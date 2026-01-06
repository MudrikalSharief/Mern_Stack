import { getOnePost }   from "../api"; 
import { useEffect, useState } from "react"; // to manage state and lifecycle methods
import { useParams, useNavigate } from "react-router-dom";

export function ReadBlog() {
    const [post, setPost] = useState({}) // state to hold the post

    const params = useParams() // get the route parameters
    const id = params.id // extract the id parameter from the route
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchpost(){
            const post = await getOnePost(id);
            const date = new Date(post.dateCreated);
            post.dateCreated = date.toString()?.slice(4, 15);// format the date, ? optional chaining in case date is undefined
            setPost(post); // update the state with fetched post
        }

        fetchpost(); // call the async function to fetch post
    }, [])


    return (
        <div className="readpost">  
            {/* // navigate to previous page */}
            <button onClick={ () => navigate(-1) }>Go Back</button>
            <h1>{post.title}</h1>
            <h3>{post.author}</h3>
            <h4>{post.dateCreated}</h4>
            <p>{post.description}</p>
        </div>
    )
}

export default ReadBlog;