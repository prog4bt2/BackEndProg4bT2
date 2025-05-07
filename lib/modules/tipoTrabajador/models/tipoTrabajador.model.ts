import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ITrabajador extends mongoose.Document {  
    trabajador: string;
}

 const TrabajadorSchema = new Schema(
    {
        trabajador: {
            type: String,
            required: [true, 'trabajador required'],
            unique: true
        }
    }
        +
 );

const Trabajador = mongoose.model<ITrabajador>("Trabajador", TrabajadorSchema);
export default Trabajador;
