import { Request, Response } from "express"
import { createPaymentService, deletePaymentService, findAllPaymentsService, findPaymentByIdService, updatePaymentService } from "../services/payment.service"

export const createPayment = async (req: Request, res: Response) => {
    try {
        const payment = await createPaymentService(req.body)
        return res.status(201).json(payment)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}

export const findAllPayments = async (req: Request, res: Response) => {
    const payment = await findAllPaymentsService()
    return res.status(200).json(payment)
}

export const findPaymentById = async (req: Request, res: Response) => {
    const payment = await findPaymentByIdService(Number(req.params.id))
    return res.status(200).json(payment)
}

export const updatePayment = async (req: Request, res: Response) => {
    try {
        const payment = await updatePaymentService(Number(req.params.id), req.body)
        return res.status(200).json(payment)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}

export const deletePayment = async (req: Request, res: Response) => {
    try {
        await deletePaymentService(Number(req.params.id))
        return res.status(204).send()
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}