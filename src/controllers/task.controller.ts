import { Request, Response } from 'express'
import { createTaskService, deleteTaskService, findAllTasksService, findTaskByIdService, updateTaskService } from '../services/task.service'
import { findUserbyIdWithTasksService } from '../services/user.service'

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await createTaskService(req.body)
    return res.status(201).json(task)
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}

export const findAllTasks = async (req: Request, res: Response) => {
  const tasks = await findAllTasksService()
  return res.status(200).json(tasks)
}

export const findTaskById = async (req: Request, res: Response) => {
  const task = await findTaskByIdService(Number(req.params.id))
  return res.status(200).json(task)
}

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await updateTaskService(Number(req.params.id), req.body)
    return res.status(200).json(task)
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await deleteTaskService(Number(req.params.id))
    return res.status(204).send()
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}

export const findUserbyIdWithTasks = async(req: Request, res: Response)=>{
  const id = Number(req.params.id)

  if(isNaN(id)){
    return res.status(400).json({message:'Id inválido'})
  }

  const user = await findUserbyIdWithTasksService(id)
  return res.status(200).json(user)
}