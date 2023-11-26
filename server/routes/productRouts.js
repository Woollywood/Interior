import { Router } from "express";
import productController from "../controller/productControllers.js";

const router = new Router();

router.post("/products", productController.create);
router.get("/products", productController.getAll);
router.delete("/products", productController.deleteAll);

export default router;
