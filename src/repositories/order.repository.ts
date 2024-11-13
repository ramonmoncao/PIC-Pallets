import { CreateOrderDto, UpdateOrderDto } from '../dtos/payment.dto'
import Order from '../entities/payment.entity'

export const createOrder = async (data: CreateOrderDto) => {
    return Order.create({ data })
}

export const findAllOrder = async () => {
    return Order.findMany()
}

export const findOrderById = async (id: number) => {
    return Order.findFirst({ where: { id } })
}

export const updateOrder = async (id: number, data: UpdateOrderDto) => {
    return Order.update({ where: { id }, data })
}

export const deleteOrder = async (id: number) => {
    return Order.delete({ where: { id } })
}