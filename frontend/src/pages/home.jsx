import { getAllPosts }   from "../api"; 
import { useEffect, useState } from "react"; // to manage state and lifecycle methods
import { BlogPostCard } from "../components/blogpostcard"; // import the BlogPostComponent to display each post

export function Home() {

    const [posts, setPosts] = useState([]); // state to hold the list of posts

    useEffect(() =>{ // lifecycle method that runs after the component mounts
        async function fetchposts(){
            const posts = await getAllPosts();
            setPosts(posts); // update the state with fetched posts
        }

        fetchposts(); // call the async function to fetch posts

    }, [])

    return (
        <div className="posts_container">  
            {posts.map((eachpost) =>{
                return(
                    <BlogPostCard post={eachpost}  key={eachpost._id}/>
                )
            })}
        </div>
    )
}

export default Home;