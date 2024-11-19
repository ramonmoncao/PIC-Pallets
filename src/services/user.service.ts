import bcrypt from "bcrypt";
import jose from "jose";
import { createUser, deleteUser, findAllUsers, findUserByEmail, findUserById, updateUser } from '../repositories/user.repository'; // Importa os métodos do repositório

export const createUserService = async (data: { name: string, email: string, password: string }) => {
  const user = await findUserByEmail(data.email) // Busca um usuário pelo e-mail

  if (user) {
    throw new Error('Usuário já existe') // Se o usuário já existir, lança um erro
  }
  const password = await bcrypt.hash(data.password,12)
  return createUser({...data,password}) // Cria um novo usuário
}

export const findAllUsersService = async () => {
  return await findAllUsers() // Busca todos os usuários
}

export const updateUserService = async (id: number, data: { name: string, email: string, password: string }) => {
  const user = await findUserById(id) // Busca um usuário pelo id

  if (!user) {
    throw new Error('Usuário não encontrado') // Se o usuário não existir, lança um erro
  }
  
  return updateUser(id, data) // Atualiza um usuário
}

export const deleteUserService = async (id: number) => {
  const user = await findUserById(id) // Busca um usuário pelo id

  if (!user) {
    throw new Error('Usuário não encontrado') // Se o usuário não existir, lança um erro
  }

  return deleteUser(id) // Deleta um usuário
}


export const findUserbyIdService = async(id: number)=>{
  const user = await findUserById(id)
  if(!user){
    throw new Error('Usuário não encontrado')
  }
  return user
}

export const authenticateUserServie = async(email: string, password: string)=>{
  const user = await findUserByEmail(email)
  if(!user)throw new Error('Usuário não encontrado')
  const isValidPassword = await bcrypt.compare(password, user.password)
  if(!isValidPassword) throw new Error('Senha inválida')

  const payload = {id: user.id,email: user.email}
  const  alg = 'HS256'
  const secret = new TextEncoder().encode('minhasecretjwt')
  const token = await new jose.SignJWT(payload)
  .setProtectedHeader({alg})
  .setIssuedAt()
  .setIssuer('http://localhost:3000')
  .setSubject('user')
  .setExpirationTime('1h')
  .sign(secret)
}