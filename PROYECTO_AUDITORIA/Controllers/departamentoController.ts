import { request, response } from "express";
import { DepartamentoModelo } from "../../MODELO/ModeloSalida/DepartamentoModelo";
import { departamentoDeleteHandler, departamentoGetHandler, departamentoPostHandler, departamentoPutHandler } from "../../APLICACION/Handlers/departamentoHandler";

export const getDepartamento = async (req = request, res = response) => {
  try {
    
    const {body} = req
    const gruposSalida: DepartamentoModelo[] = await departamentoGetHandler(body.id);
    res.status(200).json(gruposSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postDepartamento = async (req = request, res = response) => {
  try {
    const {body} = req
    const grupoEntrada = new DepartamentoModelo();
    
    grupoEntrada.nombre = body.nombre;
    grupoEntrada.descripcion = body.descripcion;
    grupoEntrada.idOrganizacion = body.idOrganizacion;

    const grupoSalida: DepartamentoModelo = await departamentoPostHandler(grupoEntrada);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putDepartamento = async (req = request, res = response) => {
  try {
    const {body} = req
    const grupoEntrada = new DepartamentoModelo();
    
    grupoEntrada.nombre = body.nombre;
    grupoEntrada.descripcion = body.descripcion;
    grupoEntrada.idOrganizacion = body.idOrganizacion;

    const grupoSalida: number= await departamentoPutHandler(body.id, grupoEntrada);
    res.status(200).json(grupoSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteDepartamento = async (req = request, res = response) => {
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