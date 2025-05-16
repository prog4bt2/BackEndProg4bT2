import { Request, Response } from 'express';
import * as _ from 'lodash';
import TipoTrabajador from '../models/tipoTrabajador.model';
import { exec } from 'child_process';

export class TipoTrabajadorController {
    crearTipoTrabajador = (req: Request, res: Response) => {
        const nuevaTipoTrabajador = new TipoTrabajador({
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
    }

    obtenerTipoTrabajadors = (req: Request, res: Response) => {
        TipoTrabajador.find()
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
    }

    actualizarTipoTrabajador = (req: Request, res: Response) => {
        TipoTrabajador.findByIdAndUpdate(req.params.id,{
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
    }

    eliminarTipoTrabajador = (req: Request, res: Response) => {
        TipoTrabajador.findByIdAndDelete(req.params.id)
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
    }
}