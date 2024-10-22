import { Router } from 'express'; // Importa o Router do Express
import { findUserbyIdWithTasks } from '../controllers/task.controller'
import { createUser, deleteUser, findAllUsers, updateUser } from '../controllers/user.controller'; // Importa os métodos do controlador
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto'
import { validate } from '../middlewares/validate.middleware'

const router = Router() // Cria uma instância do Router

router.post('/', validate(CreateUserDto), createUser) // Define a rota para criar um usuário
router.get('/', findAllUsers) // Define a rota para buscar todos os usuários
router.patch('/:id', validate(UpdateUserDto), updateUser) // Define a rota para atualizar um usuário
router.delete('/:id', deleteUser) // Define a rota para deletar um usuário
router.get('/:id',findUserbyIdWithTasks)

export default router // Exporta o router