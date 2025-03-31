import express from "express";
import cors from "cors";
import "dotenv/config";
import db from"./utils/db.js"
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

const port = process.env.PORT || 3000;


//midellware
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Run database 
db();

//routes
app.use("/books", bookRoutes);
//conctions
app.listen(port,()=>{
    console.log(`server is running on port ${port}...`);

})
