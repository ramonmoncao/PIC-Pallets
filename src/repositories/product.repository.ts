import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import Product from '../entities/product.entity'

export const createProduct = async (data: CreateProductDto) => {
    return Product.create({ data })
}

export const findAllProducts = async () => {
    return Product.findMany()
}

export const findProductById = async (id: number) => {
    return Product.findFirst({ where: { id } })
}

export const updateProduct = async (id: number, data: UpdateProductDto) => {
    return Product.update({ where: { id }, data })
}

export const deleteProduct = async (id: number) => {
    return Product.delete({ where: { id } })
}