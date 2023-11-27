import UsuarioController from "../controllers/UsuarioController";
import { Router } from "express";

const UsuarioRouter = Router();

UsuarioRouter.get('/usuarios', UsuarioController.listUsuarios)

UsuarioRouter.post('/user', UsuarioController.createUsuario);

UsuarioRouter.put('/user', UsuarioController.updateUsuarios);

UsuarioRouter.delete('/usuario', UsuarioController.deleteUsuarios);

export default UsuarioRouter;