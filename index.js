import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();
app.use("/posts", postRoutes);

app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json());
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://SocialMedia:gLuxP4WjGhNYiqma@myatlasclusteredu.qzjuudg.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5005;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
