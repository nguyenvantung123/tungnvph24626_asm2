import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";

//config
const app = express();
const API_DB = process.env.API_DB;
dotenv.config();

// middleware
app.use(cors({
    origin: "http://localhost:3001"
}));
app.use(express.json());

// router
app.use("/api", router);

// database config
mongoose.connect(API_DB);
export const viteNodeApp = app;

