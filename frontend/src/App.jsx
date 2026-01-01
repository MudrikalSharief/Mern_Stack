import { useState, useEffect } from 'react'
import {getAllPosts, getOnePost, createPost, editPost, deletePost} from './api.js'
import './App.css'

function App() {
  const [posts, setPosts] = useState()

  function generatePost(){
    let postData = {
      title:"This is from frontend testing 3",
      description:"This is testing 3 hehe",
      content:"Walay pa awda content",
      author:"bom bom  awdw pogi",
      dateCreated: new Date()
    }

    createPost(postData)
    .then((response) => {
      console.log("Post created successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
  }

  /*
  useEffect(() => {
    async function fetchPosts(){

      let posts = await getAllPosts() //fetch all posts from backend in api.js

      if (posts){
        setPosts(posts)
      }else{
        throw new Error("Error fetching posts")
      }
      
    }
 
    fetchPosts()
  }, [])
  */

  return (
    <>
        <button onClick={generatePost}>Create Post</button>
    </>
  )
}

export default App
