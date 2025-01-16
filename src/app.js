import express from "express";
import bodyParser from "body-parser";
import studentRoute from "./routes/createUserRoutes.js";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Remove trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow necessary HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    optionsSuccessStatus: 200 // For legacy browsers
};

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use("/api", studentRoute);

export default app;