import { Router } from "express";
import { createProduct, deleteProduct, findAllProducts, findProductById, updateProduct } from "../controllers/product.controller";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { validate } from "../middlewares/validate.middleware";

const router = Router()

router.post('/', validate(CreateProductDto), createProduct)
router.get('/', findAllProducts)
router.get('/:id', findProductById)
router.patch('/:id', validate(UpdateProductDto), updateProduct)
router.delete('/:id', deleteProduct)

export default router