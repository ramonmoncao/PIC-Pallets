import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { createProduct, deleteProduct, findAllProducts, findProductById, updateProduct } from "../repositories/product.repository";

export const createProductService = async (data: CreateProductDto) => {
    return createProduct(data)
}

export const findAllProductsService = async () => {
    return await findAllProducts()
}

export const findProductByIdService = async (id: number) => {
    return findProductById(id)
}

export const updateProductService = async (id: number, data: UpdateProductDto) => {
    return updateProduct(id, data)
}

export const deleteProductService = async (id: number) => {
    const user = await findProductById(id) // Busca um usuário pelo id

  if (!user) {
    throw new Error('Produto não encontrado') // Se o usuário não existir, lança um erro
  }

  return deleteProduct(id)
}