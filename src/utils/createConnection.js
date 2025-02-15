import mongoose from "mongoose";

let dbInstance = null;

const createDBConnection = async () => {
    if (!dbInstance) {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("Database connected");
        } catch (error) {
            console.log("Unable to connect with database");
        }
    }
    return dbInstance;
}

export default createDBConnection;