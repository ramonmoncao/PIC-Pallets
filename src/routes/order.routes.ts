import { Router } from "express"
import { validate } from "../middlewares/validate.middleware"
import { CreateOrderDto, UpdateOrderDto } from "../dtos/order.dto"
import { createOrder, deleteOrder, findAllOrder, updateOrder } from "../controllers/order.controller"

const router = Router()

router.post('/', validate(CreateOrderDto), createOrder)
router.get('/', findAllOrder)
router.patch('/', validate(UpdateOrderDto), updateOrder)
router.delete('/', deleteOrder)

export default router