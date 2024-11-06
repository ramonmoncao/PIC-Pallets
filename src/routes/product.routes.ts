import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { createProduct, deleteProduct, findAllProducts, updateProduct } from "../controllers/product.controller";

const router = Router()

router.post('/', validate(CreateProductDto), createProduct)
router.get('/', findAllProducts)
router.patch('/', validate(UpdateProductDto), updateProduct)
router.delete('/', deleteProduct)

export default router