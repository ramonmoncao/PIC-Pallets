import { Request, Response } from "express"
import { createOrderService, deleteOrderService, findAllOrderService, findOrderByIdService, updateOrderService } from "../services/order.service"

export const createOrder = async (req: Request, res: Response) => {
    try {
        const order = await createOrderService(req.body)
        return res.status(201).json(order)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}

export const findAllOrder = async (req: Request, res: Response) => {
    const order = await findAllOrderService()
    return res.status(200).json(order)
}

export const findOrderById = async (req: Request, res: Response) => {
    const order = await findOrderByIdService(Number(req.params.id))
    return res.status(200).json(order)
}

export const updateOrder = async (req: Request, res: Response) => {
    try {
        const order = await updateOrderService(Number(req.params.id), req.body)
        return res.status(200).json(order)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        await deleteOrderService(Number(req.params.id))
        return res.status(204).send()
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}