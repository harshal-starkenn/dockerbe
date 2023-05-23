const express = require("express");
const { checkRouter } = require("./Route/checkRoute.js");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api", checkRouter);

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
