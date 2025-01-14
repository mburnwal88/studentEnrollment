import dotenv from "dotenv";
import app from "./app.js";
import createDBConnection from "./utils/createConnection.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
await createDBConnection();

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})