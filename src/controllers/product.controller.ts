import { Request, Response } from "express";
import { createProductService, deleteProductService, findAllProductsService, findProductByIdService, updateProductService } from "../services/product.service";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await createProductService(req.body)
        return res.status(201).json(product)
    }   catch (error) {
        return res.status(400).json({ message: error })
    }
}

export const findAllProducts = async (req: Request, res: Response) => {
    const product = await findAllProductsService()
    return res.status(200).json(product)
}

export const findProductById = async (req: Request, res: Response) => {
    const product = await findProductByIdService(Number(req.params.id))
    return res.status(200).json(product)
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const product = await updateProductService(Number(req.params.id), req.body)
        return res.status(200).json(product)
    }   catch (error) {
        return res.status(400).json({ message: error })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        await deleteProductService(Number(req.params.id))
        return res.status(204).send()
    }   catch (error) {
        return res.status(400).json({ message: error })
    }
}