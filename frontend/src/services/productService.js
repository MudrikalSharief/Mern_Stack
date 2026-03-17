import axios from 'axios';

const URL = "http://localhost:3000"

export async function createProduct(payload) {
  const response = await axios.post(`${URL}/products/create`, payload)

    if(response.status === 200){
        return response.data
    }else{
        throw new Error("Error creating product")
    }
}