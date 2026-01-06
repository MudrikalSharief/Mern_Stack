import { useState } from "react";
import { createPost } from "../api";

export function CreateBlog() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    
    async function handlesubmit(e){
        e.preventDefault(); // prevent the default form submission behavior

        const newBlog = {
            title: title,
            author: author,
            description: description,
            author: null,
            dateCreated: new Date()
        }

        const response = await createPost(newBlog);
        console.log("Blog created:", response);
    }
    

    return (
        <>  
            <form onSubmit={handlesubmit}>
                <label htmlFor="title">Blog Title</label>
                <input type="text" placeholder="Title" id="title" onChange={ (e) => setTitle(e.target.value)} maxLength={100} required/>

                <label htmlFor="author">Blog Author</label>
                <input type="text" placeholder="Author" id="author" onChange={ (e) => setAuthor(e.target.value)} maxLength={50} required />

                <label htmlFor="description">Blog Decription</label>
                <textarea placeholder="Description" id="description" onChange={ (e) => setDescription(e.target.value)} maxLength={5000} required/>

                <button type="submit">Create Blog Post</button>
            </form>
        </>
    )
}

export default CreateBlog;