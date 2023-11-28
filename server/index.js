import { config } from "dotenv";
import express from "express";
import connectDB from "./db/connect.js";
import fileUpload from "express-fileupload";
import productRouter from "./routes/productRouts.js";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));

app.use("/api", productRouter);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started on the port ${PORT}`);
});
