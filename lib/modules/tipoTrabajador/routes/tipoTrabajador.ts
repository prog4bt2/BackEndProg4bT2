import { TipoTrabajadorController } from "../controllers/tipoTrabajador.controller";

export class TipoTrabajadorRoutes {
    private tipoTrabajador: TipoTrabajadorController = new TipoTrabajadorController(); 
    
    public routes(app): void {
        app.route('/tipoTrabajador')
        .get(this.tipoTrabajador.obtenerTipoTrabajadors)
        .post(this.tipoTrabajador.crearTipoTrabajador);

        app.route('/tipoTrabajador/:id')
        .put(this.tipoTrabajador.actualizarTipoTrabajador)
        .delete(this.tipoTrabajador.eliminarTipoTrabajador);
    }
}