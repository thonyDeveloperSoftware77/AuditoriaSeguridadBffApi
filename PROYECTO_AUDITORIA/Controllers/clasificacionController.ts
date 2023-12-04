import { request, response } from "express";
import { ClasificacionModelo } from "../../MODELO/ModeloSalida/ClasificacionModelo";
import { clasificacionDeleteHandler, clasificacionGetHandler, clasificacionPostHandler, clasificacionPutHandler } from "../../APLICACION/Handlers/clasificacionHandler";

export const getClasificaciones = async (req = request, res = response) => {
  try {
    const categoriaSalida: ClasificacionModelo[] = await clasificacionGetHandler();
    res.status(200).json(categoriaSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postClasificacion = async (req = request, res = response) => {
  try {
    const {body} = req
    const categoriaEntrada = new ClasificacionModelo();
    
    categoriaEntrada.nombre = body.nombre;
    categoriaEntrada.definicion = body.definicion;
    categoriaEntrada.ejemplo = body.ejemplo;

    const categoriaSalida: ClasificacionModelo = await clasificacionPostHandler(categoriaEntrada);
    res.status(200).json(categoriaSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putClasificacion = async (req = request, res = response) => {
  try {
    const {body} = req
    const categoriaEntrada = new ClasificacionModelo();
    
    
    categoriaEntrada.nombre = body.nombre;
    categoriaEntrada.definicion = body.definicion;
    categoriaEntrada.ejemplo = body.ejemplo;

    const categoriaSalida: number= await clasificacionPutHandler(body.id, categoriaEntrada);
    res.status(200).json(categoriaSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteClasificacion = async (req = request, res = response) => {
  try {
    const {body} = req

    const categoriaSalida: number = await clasificacionDeleteHandler(body.id);
    res.status(200).json(categoriaSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}