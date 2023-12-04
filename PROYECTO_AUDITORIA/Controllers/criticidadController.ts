import { request, response } from "express";
import { CriticidadModelo } from "../../MODELO/ModeloSalida/CriticidadModelo";
import { criticidadDeleteHandler, criticidadGetHandler, criticidadPostHandler, criticidadPutHandler } from "../../APLICACION/Handlers/criticidadHandler";

export const getCriticidad = async (req = request, res = response) => {
  try {
    const organizacionesSalida: CriticidadModelo[] = await criticidadGetHandler();
    res.status(200).json(organizacionesSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postCriticidad = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new CriticidadModelo();
    
    organizacionEntrada.valor = body.valor;
    organizacionEntrada.criterio = body.criterio;

    const organizacionSalida: CriticidadModelo = await criticidadPostHandler(organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putCriticidad = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new CriticidadModelo();
    
    organizacionEntrada.valor = body.valor;
    organizacionEntrada.criterio = body.criterio;

    const organizacionSalida: number= await criticidadPutHandler(body.id, organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteCriticidad = async (req = request, res = response) => {
  try {
    const {body} = req

    const organizacionSalida: number = await criticidadDeleteHandler(body.id);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}