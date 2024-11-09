import { CreatePaymentDto, UpdatePaymentDto } from "../dtos/payment.dto"
import { createPayment, deletePayment, findAllPayments, findPaymentById, updatePayment } from "../repositories/payment.repository"

export const createPaymentService = async (data: CreatePaymentDto) => {
    return createPayment(data)
}

export const findAllPaymentsService = async () => {
    return await findAllPayments()
}

export const findPaymentByIdService = async (id: number) => {
    return findPaymentById(id)
}

export const updatePaymentService = async (id: number, data: UpdatePaymentDto) => {
    return updatePayment(id, data)
}

export const deletePaymentService = async (id: number) => {
    return deletePayment(id)
}
