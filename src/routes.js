import { Router } from 'express'

// Our Controllers
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

// Middlewares
import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
// Rotas com autenticação
routes.use(authMiddleware)
routes.put('/users', UserController.update)

export default routes
