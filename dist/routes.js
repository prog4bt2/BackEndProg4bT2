"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const tipoTrabajador_1 = require("./modules/tipoTrabajador/routes/tipoTrabajador");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.tipoTrabajadorRoutes = new tipoTrabajador_1.TipoTrabajadorRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.tipoTrabajadorRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map