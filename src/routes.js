import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

// Our Controllers
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'
import ProviderController from './app/controllers/ProviderController'
import AppointmentController from './app/controllers/AppointmentController'

// Middlewares
import authMiddleware from './app/middlewares/auth'

const routes = new Router()

const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
// Rotas com autenticação
routes.use(authMiddleware)
routes.put('/users', UserController.update)
routes.get('/providers', ProviderController.index)
// Upload de arquivos
routes.post('/files', upload.single('file'), FileController.store)
// Appointment Routes
routes.post('/appointments', AppointmentController.store)
routes.get('/appointments', AppointmentController.index)

export default routes
