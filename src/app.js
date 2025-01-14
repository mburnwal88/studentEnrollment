import express from "express";
import bodyParser from "body-parser";
import studentRoute from "./routes/createUserRoutes.js"
const app = express();

app.use(bodyParser.json());
app.use("/api", studentRoute);

export default app;