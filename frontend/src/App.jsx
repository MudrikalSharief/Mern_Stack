import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState()

  function createPost(){
    let postData = {
      title:"This is from frontend",
      description:"this is added though fronend amazung",
      content:"Thesrno content nuyenye",
      author:"Bombom",
      dateCreated: new Date()
    }

    axios.post("http://localhost:3000/posts/create", postData)
    .then((response) => {
      console.log("Post created successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
  }

  /*
  useEffect(() => {
    async function grabData(){
      const response = await axios.get("http://localhost:3000/posts/694e596025609f0b40f603b6")
      if(response.status === 200){
        setData(response.data)
        console.log(response.data);
      }else{
        console.error("Error fetching data:", response.status);
      }
    }
    
    grabData()
  }, [])
  */

  return (
    <>
      
      <button onClick={createPost}>Create Post Now </button>
    </>
  )
}

export default App
