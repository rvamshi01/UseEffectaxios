import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {
    const [preview, setPreview] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(respon=>setPreview(respon.data))
    },[])
  return (
    <div>
      {preview.map((pro)=>{
        return(
        <div>
            <h1>{prod.title}</h1>
            <h1>{prod.price}</h1>
            <h1>{prod.count}</h1>
        </div>
      )})}
    </div>
  )
}

export default Axios;
