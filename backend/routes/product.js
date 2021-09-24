const express = require("express");
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct, deleteProducts } = require("../controllers/product");
const router = express.Router();

router.post("/add-product", addProduct);
router.get("/get-product/:id", getProduct);
router.get("/get-products", getProducts);
router.put("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);
router.delete("/delete-products", deleteProducts);
module.exports = router;