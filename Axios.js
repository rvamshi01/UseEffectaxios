import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {
    const [preview, setPreview] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(respon=>setPreview(respon.data));
    },[])
  return (
    <div>
      {preview.map((pro)=>{
        return(
        <div>
            <h1>{pro.title}</h1>
            <h1>{pro.price}</h1>
            <h1>{pro.count}</h1>
        </div>
      )})}
    </div>
  )
}

export default Axios;
