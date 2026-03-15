import "dotenv/config";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./congif/db.js";
import errorHandler from "./middlewares/error.middleware.js";;

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())

connectDB();

app.use("/", userRoutes);

app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server is listening on port: http://localhost:${port}`)
})