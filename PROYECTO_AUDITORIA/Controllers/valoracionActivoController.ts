import { request, response } from "express";
import { ValoracionActivoModelo } from "../../MODELO/ModeloSalida/ValoracionActivoModelo";
import { valoracionActivoDeleteHandler, valoracionActivoGetHandler, valoracionActivoPostHandler, valoracionActivoPutHandler } from "../../APLICACION/Handlers/valoracionActivoHandler";

export const getValoracionActivos = async (req = request, res = response) => {
  try {
    
    const {body} = req
    const gruposSalida: ValoracionActivoModelo[] = await valoracionActivoGetHandler(body.id);
    res.status(200).json(gruposSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postValoracionActivo = async (req = request, res = response) => {
  try {
    const {body} = req
    const grupoEntrada = new ValoracionActivoModelo();
    
    grupoEntrada.id_asset = body.id_asset;
    grupoEntrada.confidencialidad = body.confidencialidad;
    grupoEntrada.integridad = body.integridad;
    grupoEntrada.disponibilidad = body.disponibilidad;

    const grupoSalida: ValoracionActivoModelo = await valoracionActivoPostHandler(grupoEntrada);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putValoracionActivo = async (req = request, res = response) => {
  try {
    const {body} = req
    const grupoEntrada = new ValoracionActivoModelo();
    
    grupoEntrada.id_asset = body.id_asset;
    grupoEntrada.confidencialidad = body.confidencialidad;
    grupoEntrada.integridad = body.integridad;
    grupoEntrada.disponibilidad = body.disponibilidad;

    const grupoSalida: number= await valoracionActivoPutHandler(body.id, grupoEntrada);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteValoracionActivo = async (req = request, res = response) => {
  try {
    const {body} = req

    const grupoSalida: number = await valoracionActivoDeleteHandler(body.id);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}