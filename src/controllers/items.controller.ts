import { Request, Response } from "express"
import { createItemsService, deleteItemsService, findAllItemsService, findItemsByIdService, updateItemsService } from "../services/items.service"

export const createItems = async (req: Request, res: Response) => {
    try {
        const items = await createItemsService(req.body)
        return res.status(201).json(items)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}

export const findAllItems = async (req: Request, res: Response) => {
    const items = await findAllItemsService()
    return res.status(200).json(items)
}

export const findItemsById = async (req: Request, res: Response) => {
    const items = await findItemsByIdService(Number(req.params.id))
    return res.status(200).json(items)
}

export const updateItems = async (req: Request, res: Response) => {
    try {
        const items = await updateItemsService(Number(req.params.id), req.body)
        return res.status(200).json(items)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}

export const deleteItems = async (req: Request, res: Response) => {
    try {
        await deleteItemsService(Number(req.params.id))
        return res.status(204).send()
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}