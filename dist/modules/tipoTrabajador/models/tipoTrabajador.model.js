"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TrabajadorSchema = new Schema({
    trabajador: {
        type: String,
        required: [true, 'trabajador required'],
        unique: true
    }
}
    +
);
const Trabajador = mongoose.model("Trabajador", TrabajadorSchema);
exports.default = Trabajador;
//# sourceMappingURL=tipoTrabajador.model.js.map