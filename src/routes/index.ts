import { Router } from 'express'; // Importa o Router do Express
import productRoutes from './product.routes';
import taskRoutes from './task.routes';
import userRoutes from './user.routes'; // Importa as rotas de usuário
const router = Router() // Cria uma instância do Router

router.use('/users', userRoutes) // Define o prefixo para as rotas de usuário
router.use('/tasks',taskRoutes)
router.use('/products',productRoutes)
export default router // Exporta o router

