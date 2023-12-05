import { request, response } from "express";
import { ActivoReviewerUsuarioModelo } from "../../MODELO/ModeloSalida/ActivoReviewerUsuarioModelo";
import { departamentoUsuarioDeleteHandler, departamentoUsuarioPostHandler} from "../../APLICACION/Handlers/activoReviewerUsuarioHandler";

export const postActivoReviewerUsuario = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new ActivoReviewerUsuarioModelo();
    
    organizacionEntrada.idUsuario = body.idUsuario;
    organizacionEntrada.idActivo = body.idActivo;

    const organizacionSalida: ActivoReviewerUsuarioModelo = await departamentoUsuarioPostHandler(organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}

export const deleteActivoReviewerUsuario = async (req = request, res = response) => {
  try {
    const {body} = req

    const organizacionSalida: number = await departamentoUsuarioDeleteHandler(body.id);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}