import { CreateItemsDto, UpdateItemsDto } from "../dtos/items.dto"
import { createItems, deleteItems, findAllItems, findItemsById, updateItems } from "../repositories/items.repository"

export const createItemsService = async (data: CreateItemsDto) => {
    return createItems(data)
}

export const findAllItemsService = async () => {
    return await findAllItems()
}

export const findItemsByIdService = async (id: number) => {
    return findItemsById(id)
}

export const updateItemsService = async (id: number, data: UpdateItemsDto) => {
    return updateItems(id, data)
}

export const deleteItemsService = async (id: number) => {
    return deleteItems(id)
}