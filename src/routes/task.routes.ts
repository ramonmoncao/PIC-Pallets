import { Router } from "express";
import { createTask, deleteTask, findAllTasks, updateTask } from "../controllers/task.controller";
import { CreateTaskDto } from "../dtos/task.dto";
import { validate } from "../middlewares/validate.middleware";

const router = Router()

router.post('/', validate(CreateTaskDto), createTask)
router.get('/',findAllTasks)
router.patch('/',validate(CreateTaskDto), updateTask)
router.delete('/', deleteTask)

export default router