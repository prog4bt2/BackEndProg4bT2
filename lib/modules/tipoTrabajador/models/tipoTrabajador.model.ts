import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ITipoTrabajador extends mongoose.Document {  
    tipoTrabajador: string;
    salario: number;
}
    

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

const TipoTrabajador = mongoose.model<ITipoTrabajador>("TipoTrabajador", TipoTrabajadorSchema);
export default TipoTrabajador;