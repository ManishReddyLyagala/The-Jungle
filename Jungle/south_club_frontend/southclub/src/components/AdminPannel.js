import React from "react";
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        
            <div className="h-screen flex flex-col bg-purple-300 py-5 space-y-4 w-1/5 font-serif"> 
                <h2 className="text-2xl mb-5 bg-white rounded-full py-2">Admin Pannel</h2>
                <Link className=" hover:border-2 text-lg m-4  bg-white font-bold  py-2 cursor-pointer border-black rounded-full" to="/" >Add Products</Link>
                <Link className="hover:border-2 text-lg m-4   bg-white font-bold py-2 cursor-pointer  border-black rounded-full" to="/Orders" >Orders</Link>
                <Link className="hover:border-2 text-lg m-4   bg-white font-bold py-2 cursor-pointer border-black rounded-full" to="/ManageProducts">Manage Products</Link>
           

            </div>
            
        
    );
}
export default Admin;