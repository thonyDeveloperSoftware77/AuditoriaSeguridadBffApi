import { request, response } from "express";
import { EtiquetaModelo } from "../../MODELO/ModeloSalida/EtiquetaModelo";
import { etiquetaDeleteHandler, etiquetaGetHandler, etiquetaPostHandler, etiquetaPutHandler } from "../../APLICACION/Handlers/etiquetaHandler";

export const getEtiquetas = async (req = request, res = response) => {
  try {
    const etiquetaSalida: EtiquetaModelo[] = await etiquetaGetHandler();
    res.status(200).json(etiquetaSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postEtiqueta = async (req = request, res = response) => {
  try {
    const {body} = req
    const etiquetaEntrada = new EtiquetaModelo();
    
    etiquetaEntrada.nombre = body.name;
    etiquetaEntrada.descripcion = body.description;

    const etiquetaSalida: EtiquetaModelo = await etiquetaPostHandler(etiquetaEntrada);
    res.status(200).json(etiquetaSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putEtiqueta = async (req = request, res = response) => {
  try {
    const {body} = req
    const etiquetaEntrada = new EtiquetaModelo();
    etiquetaEntrada.nombre = body.nombre;
    etiquetaEntrada.descripcion = body.descripcion;

    const etiquetaSalida: number= await etiquetaPutHandler(body.id, etiquetaEntrada);
    res.status(200).json(etiquetaSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteEtiqueta = async (req = request, res = response) => {
  try {
    const {body} = req

    const etiquetaSalida: number = await etiquetaDeleteHandler(body.id);
    res.status(200).json(etiquetaSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}