"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTrabajadorRoutes = void 0;
const tipoTrabajador_controller_1 = require("../controllers/tipoTrabajador.controller");
class TipoTrabajadorRoutes {
    constructor() {
        this.tipoTrabajador = new tipoTrabajador_controller_1.TipoTrabajadorController();
    }
    routes(app) {
        app.route('/tipoTrabajador')
            .get(this.tipoTrabajador.obtenerTipoTrabajadors)
            .post(this.tipoTrabajador.crearTipoTrabajador);
        app.route('/tipoTrabajador/:id')
            .put(this.tipoTrabajador.actualizarTipoTrabajador)
            .delete(this.tipoTrabajador.eliminarTipoTrabajador);
    }
}
exports.TipoTrabajadorRoutes = TipoTrabajadorRoutes;
//# sourceMappingURL=tipoTrabajador.js.map