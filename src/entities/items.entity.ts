import { PrismaClient } from '@prisma/client'; // Importa o PrismaClient

const prisma = new PrismaClient() // Cria uma instância do PrismaClient

export default prisma.items // Exporta o modelo de usuário