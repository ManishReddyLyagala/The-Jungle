import './App.css';
import Admin from './components/AdminPannel';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Products from "./components/Products";
import Orders from "./components/Orders";
import EditProduct from './components/Editproduct';
import ManageProducts from './components/ManageProducts';
function App() {
  return (
    <div className="App">
     <h1 className="text-5xl bg-yellow-200 font-serif">
      Wellcome Admin
    </h1>
   
    <BrowserRouter>
   <div className='flex '> <Admin/>
                    <Routes>
                        <Route path="/" element={<Products />}/>
                        <Route path="/Orders" element={<Orders />} />
                        <Route path="/ManageProducts" element={<ManageProducts />} />
                        <Route path='/EditProduct/:id' element={<EditProduct/>}/>
                       
                    </Routes>
                    </div>
                </BrowserRouter>
    </div>
  );
}

export default App;
