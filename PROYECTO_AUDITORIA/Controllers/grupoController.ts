import { request, response } from "express";
import { GrupoModelo } from "../../MODELO/ModeloSalida/GrupoModelo";
import { grupoDeleteHandler, grupoGetHandler, grupoPostHandler, grupoPutHandler } from "../../APLICACION/Handlers/grupoHandler";

export const getGrupos = async (req = request, res = response) => {
  try {
    
    const {body} = req
    const gruposSalida: GrupoModelo[] = await grupoGetHandler(body.id);
    res.status(200).json(gruposSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postGrupo = async (req = request, res = response) => {
  try {
    const {body} = req
    const grupoEntrada = new GrupoModelo();
    
    grupoEntrada.nombre = body.nombre;
    grupoEntrada.idOrganizacion = body.idOrganizacion;

    const grupoSalida: GrupoModelo = await grupoPostHandler(grupoEntrada);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putGrupo = async (req = request, res = response) => {
  try {
    const {body} = req
    const grupoEntrada = new GrupoModelo();
    grupoEntrada.nombre = body.nombre;
    grupoEntrada.idOrganizacion = body.idOrganizacion;

    const grupoSalida: number= await grupoPutHandler(body.id, grupoEntrada);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteGrupo = async (req = request, res = response) => {
  try {
    const {body} = req

    const grupoSalida: number = await grupoDeleteHandler(body.id);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}