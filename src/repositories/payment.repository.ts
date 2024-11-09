import { CreatePaymentDto, UpdatePaymentDto } from '../dtos/payment.dto'
import Payment from '../entities/payment.entity'

export const createPayment = async (data: CreatePaymentDto) => {
    return Payment.create({ data })
}

export const findAllPayments = async () => {
    return Payment.findMany()
}

export const findPaymentById = async (id: number) => {
    return Payment.findFirst({ where: { id } })
}

export const updatePayment = async (id: number, data: UpdatePaymentDto) => {
    return Payment.update({ where: { id }, data })
}

export const deletePayment = async (id: number) => {
    return Payment.delete({ where: { id } })
}
