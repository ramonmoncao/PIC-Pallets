import { Router } from 'express'; // Importa o Router do Express
import itemsRoutes from './items.routes';
import orderRoutes from './order.routes';
import paymentRoutes from './payment.routes';
import productRoutes from './product.routes';
import userRoutes from './user.routes'; // Importa as rotas de usuário
const router = Router() // Cria uma instância do Router

router.use('/users', userRoutes) // Define o prefixo para as rotas de usuário
router.use('/orders', orderRoutes)
router.use('/products',productRoutes)
router.use('/items',itemsRoutes)
router.use('/payments', paymentRoutes)
export default router // Exporta o router

