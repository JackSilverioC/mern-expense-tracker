import { PORT } from "./config.js";
import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();

app.listen(PORT);
console.log("Server on port", PORT);
