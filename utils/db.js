import mongoose from "mongoose";
import "dotenv/config";

export default function db() {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Database is connected..."))
    .catch(err => console.error("Error while connecting to database:", err));
}
