import { Router } from "express"
import { validate } from "../middlewares/validate.middleware"
import { CreatePaymentDto, UpdatePaymentDto } from "../dtos/payment.dto"
import { createPayment, deletePayment, findAllPayments, updatePayment } from "../controllers/payment.controller"

const router = Router()

router.post('/', validate(CreatePaymentDto), createPayment)
router.get('/', findAllPayments)
router.patch('/', validate(UpdatePaymentDto), updatePayment)
router.delete('/', deletePayment)

export default router