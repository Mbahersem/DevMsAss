const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use(express.json());

app.use("/", proxy("http://localhost:5001"));

app.listen(5000, () => {
    console.log("Gateway is listening to port 5000");
});