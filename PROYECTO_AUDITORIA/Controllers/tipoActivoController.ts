import { request, response } from "express";
import { TipoActivoModelo } from "../../MODELO/ModeloSalida/TipoActivoModelo";
import { tipoActivoDeleteHandler, tipoActivoGetHandler, tipoActivoPostHandler, tipoActivoPutHandler } from "../../APLICACION/Handlers/tipoActivoHandler";

export const getTipoActivos = async (req = request, res = response) => {
  try {
    const tipoActivoSalida: TipoActivoModelo[] = await tipoActivoGetHandler();
    res.status(200).json(tipoActivoSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postTipoActivo = async (req = request, res = response) => {
  try {
    const {body} = req
    const tipoActivoEntrada = new TipoActivoModelo();
    
    tipoActivoEntrada.nombre = body.nombre;
    tipoActivoEntrada.descripcion = body.descripcion;

    const tipoActivoSalida: TipoActivoModelo = await tipoActivoPostHandler(tipoActivoEntrada);
    res.status(200).json(tipoActivoSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putTipoActivo = async (req = request, res = response) => {
  try {
    const {body} = req
    const tipoActivoEntrada = new TipoActivoModelo();
    
    tipoActivoEntrada.nombre = body.nombre;
    tipoActivoEntrada.descripcion = body.descripcion;

    const tipoActivoSalida: number= await tipoActivoPutHandler(body.id, tipoActivoEntrada);
    res.status(200).json(tipoActivoSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteTipoActivo = async (req = request, res = response) => {
  try {
    const {body} = req

    const tipoActivoSalida: number = await tipoActivoDeleteHandler(body.id);
    res.status(200).json(tipoActivoSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}