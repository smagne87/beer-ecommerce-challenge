import express from "express";
import cors from "cors";
import products from "./products.js";
import stockPrices from "./stock-price.js";

const app = express();
const port = 3333;

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(express.json());

function mapProductWithStockPrice(product) {
  const productStockPrices = [];
  product.skus?.forEach((sku) => {
    if (stockPrices[sku.code]) {
      productStockPrices.push(stockPrices[sku.code]);
    }
  });
  return { ...product, stockPrice: productStockPrices };
}

app.get("/api/products", (req, res) => {
  res.json(products.map((p) => mapProductWithStockPrice(p)));
});

app.get("/api/products/:sku", (req, res) => {
  const sku = req.params.sku;
  const product = products.find((p) => p.id === Number(sku));
  if (product) {
    res.json(mapProductWithStockPrice(product));
  } else {
    res.status(404).send("Product not found");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
