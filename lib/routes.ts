import { TipoTrabajadorRoutes } from "./modules/tipoTrabajador/routes/tipoTrabajador";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private tipoTrabajadorRoutes : TipoTrabajadorRoutes = new TipoTrabajadorRoutes();


    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.tipoTrabajadorRoutes.routes(app);
    }
}