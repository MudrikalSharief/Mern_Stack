import axios from 'axios';

const URL = "http://localhost:3000"

export async function getAllPosts(){
    //remember if we use async we can unlock the wait keyword, 
    // this keyword will pause the execution until we get
    const response = await axios.get(`${URL}/posts`)

    if(response.status === 200){
        return response.data
    } else {
        throw new Error("Error fetching all posts")
    }
}

export async function getOnePost(id){

    const response = await axios.get(`${URL}/posts/${id}`)

     if(response.status === 200){
        return response.data
    } else {
        throw new Error("Error fetching the post")
    }

}

export function createPost(post){
    //use post method to create
    const response = axios.post(`${URL}/posts/create`, post)

    return response
}

export function editPost(id, post){
    //use put method to update
    const response = axios.put(`${URL}/posts/edit/${id}`, post)

    return response
}

export function deletePost(id){
    //remember if we use async we can unlock the wait keyword, 
    // this keyword will pause the execution until we get
    const response = axios.delete(`${URL}/posts/delete/${id}`)

    return response
}