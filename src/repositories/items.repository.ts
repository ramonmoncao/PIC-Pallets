import { CreateItemsDto, UpdateItemsDto } from '../dtos/items.dto'
import Items from '../entities/items.entity'

export const createItems = async (data: CreateItemsDto) => {
    return Items.create({ data })
}

export const findAllItems = async () => {
    return Items.findMany()
}

export const findItemsById = async (id: number) => {
    return Items.findFirst({ where: { id } })
}

export const updateItems = async (id: number, data: UpdateItemsDto) => {
    return Items.update({ where: { id }, data })
}

export const deleteItems = async (id: number) => {
    return Items.delete({ where: { id } })
}