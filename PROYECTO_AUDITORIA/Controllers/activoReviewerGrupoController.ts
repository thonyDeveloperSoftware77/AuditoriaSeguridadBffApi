import { request, response } from "express";
import { ActivoReviewerGrupoModelo } from "../../MODELO/ModeloSalida/ActivoReviewerGrupoModelo";
import { departamentoGrupoDeleteHandler, departamentoGrupoPostHandler} from "../../APLICACION/Handlers/activoReviewerGrupoHandler";

export const postActivoReviewerGrupo = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new ActivoReviewerGrupoModelo();
    
    organizacionEntrada.idActivo = body.idActivo;
    organizacionEntrada.idGrupo = body.idGrupo;

    const organizacionSalida: ActivoReviewerGrupoModelo = await departamentoGrupoPostHandler(organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}

export const deleteActivoReviewerGrupo = async (req = request, res = response) => {
  try {
    const {body} = req

    const organizacionSalida: number = await departamentoGrupoDeleteHandler(body.id);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}