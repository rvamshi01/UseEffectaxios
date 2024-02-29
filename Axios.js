import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {
    const [pre, setPre] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(respon=>setPre(respon.data))
    },[])
  return (
    <div>
      {pre.map((prod)=>{
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

export default Axios