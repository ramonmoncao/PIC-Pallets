import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { createProduct, deleteProduct, findAllProducts, findProductById, updateProduct } from "../repositories/product.repository";

export const createProductService = async (data: CreateProductDto) => {
    return createProduct(data)
}

export const findAllProductsService = async () => {
    return findAllProducts()
}

export const findProductByIdService = async (id: number) => {
    return findProductById(id)
}

export const updateProductService = async (id: number, data: UpdateProductDto) => {
    return updateProduct(id, data)
}

export const deleteProductService = async (id: number) => {
    return deleteProduct(id)
}