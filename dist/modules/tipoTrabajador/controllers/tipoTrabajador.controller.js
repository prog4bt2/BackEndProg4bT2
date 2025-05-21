"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTrabajadorController = void 0;
const tipoTrabajador_model_1 = require("../models/tipoTrabajador.model");
class TipoTrabajadorController {
    constructor() {
        this.crearTipoTrabajador = (req, res) => {
            const nuevaTipoTrabajador = new tipoTrabajador_model_1.default({
                tipoTrabajador: req.body.tipoTrabajador,
                salario: req.body.salario,
            });
            nuevaTipoTrabajador.save()
                .then(tipoTrabajadorCreada => {
                res.status(201).json({
                    ok: true,
                    tipoTrabajador: tipoTrabajadorCreada,
                    message: 'TipoTrabajador creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'TipoTrabajador no creada'
                });
            });
        };
        this.obtenerTipoTrabajadors = (req, res) => {
            tipoTrabajador_model_1.default.find()
                .then(tipoTrabajadors => {
                res.status(200).json({
                    ok: true,
                    tipoTrabajadors: tipoTrabajadors
                });
                /*
                    [
                        {
                            _id: "kfhsdkfhskfhsd",
                            tipoTrabajador: "ESPAÑOL"
                        },
                        {
                            _id: "kfhsdkfhskfhsd",
                            tipoTrabajador: "QUÍMICA"
                        }
                    ]
                */
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.actualizarTipoTrabajador = (req, res) => {
            tipoTrabajador_model_1.default.findByIdAndUpdate(req.params.id, {
                tipoTrabajador: req.body.tipoTrabajador
            })
                .exec()
                .then(tipoTrabajadorActualizada => {
                res.status(200).json({
                    ok: true,
                    tipoTrabajador: tipoTrabajadorActualizada
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'TipoTrabajador no actualizada'
                });
            });
        };
        this.eliminarTipoTrabajador = (req, res) => {
            tipoTrabajador_model_1.default.findByIdAndDelete(req.params.id)
                .then(tipoTrabajadorEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'TipoTrabajador eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'TipoTrabajador no eliminada'
                });
            });
        };
    }
}
exports.TipoTrabajadorController = TipoTrabajadorController;
//# sourceMappingURL=tipoTrabajador.controller.js.map