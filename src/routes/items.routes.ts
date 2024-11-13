import { Router } from "express"
import { validate } from "../middlewares/validate.middleware"
import { CreateItemsDto, UpdateItemsDto } from "../dtos/items.dto"
import { createItems, deleteItems, findAllItems, updateItems } from "../controllers/items.controller"

const router = Router()

router.post('/', validate(CreateItemsDto), createItems)
router.get('/', findAllItems)
router.patch('/', validate(UpdateItemsDto), updateItems)
router.delete('/', deleteItems)

export default router