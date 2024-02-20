const express = require("express");
const cors = require("cors");
const { connection } = require("./config/dataBase");
const authRouter = require("./routes/authRoute");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);

// database
connection();
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`server is running on : ${PORT}`);
});
