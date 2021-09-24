const express = require("express");
const app = express();
const productRoute = require("./routes/product.js");

app.use("/api/product", productRoute);
app.listen(3002, () => {
    console.log("Server listen on port 3000");
});