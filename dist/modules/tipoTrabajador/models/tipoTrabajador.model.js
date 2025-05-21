"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TipoTrabajadorSchema = new Schema({
    tipoTrabajador: {
        type: String,
        required: [true, 'tipoTrabajador es requerido'],
        unique: true
    },
    salario: {
        type: Number,
        required: [true, 'salario es requerido']
    }
});
const TipoTrabajador = mongoose.model("TipoTrabajador", TipoTrabajadorSchema);
exports.default = TipoTrabajador;
//# sourceMappingURL=tipoTrabajador.model.js.map