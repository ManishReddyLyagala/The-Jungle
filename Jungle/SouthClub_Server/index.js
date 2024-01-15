const express= require('express');
const app=express();
const {connectDB}=require('./DB/connectdb');
const cors=require('cors');
require('dotenv/config');
connectDB();

//middleware
app.use(cors());
app.use(express.json());

const api=process.env.API_URL;

//Routes
const productRouter=require('./routes/Product');
const OrderRouter=require('./routes/Order');

app.use(`${api}/products`,productRouter);
app.use(`${api}/orders`,OrderRouter);




app.listen(5000,()=>{
console.log('server is running');
});