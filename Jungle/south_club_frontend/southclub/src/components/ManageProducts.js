import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ManageProducts= ()=>{
    const Navigate=useNavigate();
    let [productData,setData]=useState([]);
   
    useEffect(()=>{
        fetch('http://localhost:5000/api/southclub/products/')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch((err)=>{
                console.log(err);
            })
           
    },[])
     
    return(
        <div className="productCard">
           {
           productData && productData.map((data)=>{
            
            return(
                
                <div key={data._id} className="card">
                    
                    <img src={data.images[0]} alt="img"/><hr/>

                    <p>Product ID : {data._id}</p>
                    <p>Product Name : {data.name}</p>
                    <p>Product Brand : {data.brand}</p>
                    <p>Price : {data.price}</p>
                    <p>Category : {data.category}</p>
                    <p>Sub-Category : {data.subcategory}</p>
                    <p>Stock : {data.stock}</p>
                    <p>Reviews : {data.reviews}</p>
                    <p>Description : {data.description}</p>
                    <p>dateCreated : {data.dateCreated}</p>
                    <input type="button" value='EDIT' className="bg-green-500 border-slate border-2 rounded-lg hover:bg-green-600" onClick={()=>{Navigate(`/EditProduct/${data._id}`)}}/>
                    <input type="button" value='DELETE' className="bg-red-500 border-slate border-2 rounded-lg hover:bg-red-600" onClick={()=>{
                       fetch(`http://localhost:5000/api/southclub/products/${data._id}`,{
                        method:'DELETE'
                    })
                        .then(res=>res.json())
                        .catch(err=>console.log(err)) 
                    window.location.reload();
                    }}/>
                </div> 
            )
           })}
          
        </div>
    )
}
export default ManageProducts;