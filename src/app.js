import express from "express";
import bodyParser from "body-parser";
import studentRoute from "./routes/createUserRoutes.js";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use("/api", studentRoute);

export default app;