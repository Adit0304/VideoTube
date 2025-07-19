// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { fileURLToPath } from "url"; 
import { app } from "./app.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env from parent folder (/server/.env)
dotenv.config({ path: path.resolve(__dirname, "../.env") });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB Connection Failed", error);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();

*/
