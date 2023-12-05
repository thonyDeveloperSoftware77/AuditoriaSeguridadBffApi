import { request, response } from "express";
import { ActivoModelo } from "../../MODELO/ModeloSalida/ActivoModelo";
import { departamentoDeleteHandler, departamentoGetHandler, departamentoPostHandler, departamentoPutHandler } from "../../APLICACION/Handlers/activoHandler";

export const getActivo = async (req = request, res = response) => {
  try {
    
    const {body} = req
    const gruposSalida: ActivoModelo[] = await departamentoGetHandler(body.id);
    res.status(200).json(gruposSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postActivo = async (req = request, res = response) => {
  try {
    const {body} = req
    const grupoEntrada = new ActivoModelo();
    
    grupoEntrada.code = body.code;
    grupoEntrada.name = body.name;
    grupoEntrada.description = body.description;
    grupoEntrada.ubication = body.ubicacion;
    grupoEntrada.label = body.label;
    grupoEntrada.type = body.type;
    grupoEntrada.id_criterio = body.id_criterio;
    grupoEntrada.id_categoria = body.id_categoria;
    grupoEntrada.id_clasificacion = body.id_clasificacion;
    grupoEntrada.id_organization = body.id_organizacion;
    grupoEntrada.review_date = body.date;

    const grupoSalida: ActivoModelo = await departamentoPostHandler(grupoEntrada);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putActivo = async (req = request, res = response) => {
  try {
    const {body} = req
    const grupoEntrada = new ActivoModelo();
    
    grupoEntrada.code = body.code;
    grupoEntrada.name = body.name;
    grupoEntrada.description = body.description;
    grupoEntrada.ubication = body.ubicacion;
    grupoEntrada.label = body.label;
    grupoEntrada.type = body.type;
    grupoEntrada.id_criterio = body.id_criterio;
    grupoEntrada.id_categoria = body.id_categoria;
    grupoEntrada.id_clasificacion = body.id_clasificacion;
    grupoEntrada.id_organization = body.id_organizacion;
    grupoEntrada.review_date = body.date;

    const grupoSalida: number= await departamentoPutHandler(body.id, grupoEntrada);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteActivo = async (req = request, res = response) => {
  try {
    const {body} = req

    const grupoSalida: number = await departamentoDeleteHandler(body.id);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}