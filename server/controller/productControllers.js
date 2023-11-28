import { json } from "express";
import Product from "../models/Product.js";
import fileService from "../services/FileService.js";

class ProductController {
  async create(req, res) {
    try {
      const fileName = await fileService.saveFile(req.files.picture);
      const createdProduct = await Product.create({ ...req.body, fileName });
      res.json(createdProduct);
    } catch (e) {
      res.status(500).json(e.message);
      console.log(e.message);
    }
  }
  async getAll(req, res) {
    try {
      const products = await Product.find();
      return res.json(products);
    } catch (e) {
      console.log(e.message);
    }
  }
  async deleteAll(req, res) {
    try {
      await Product.deleteMany({});
      res.json(200);
    } catch (e) {
      res.json(e.message);
    }
  }
}

export default new ProductController();
