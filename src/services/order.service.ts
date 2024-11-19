import { CreateOrderDto, UpdateOrderDto } from "../dtos/order.dto"
import { createOrder, deleteOrder, findAllOrder, findOrderById, updateOrder } from "../repositories/order.repository"

export const createOrderService = async (data: CreateOrderDto) => {
    return createOrder(data)
}

export const findAllOrderService = async () => {
    return await findAllOrder()
}

export const findOrderByIdService = async (id: number) => {
    return findOrderById(id)
}

export const updateOrderService = async (id: number, data: UpdateOrderDto) => {
    return updateOrder(id, data)
}

export const deleteOrderService = async (id: number) => {
    return deleteOrder(id)
}