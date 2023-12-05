import { request, response } from "express";
import { ActivoGrupoModelo } from "../../MODELO/ModeloSalida/ActivoGrupoModelo";
import { departamentoGrupoDeleteHandler, departamentoGrupoPostHandler} from "../../APLICACION/Handlers/activoGrupoHandler";

export const postActivoGrupo = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new ActivoGrupoModelo();
    
    organizacionEntrada.idActivo = body.idActivo;
    organizacionEntrada.idGrupo = body.idGrupo;

    const organizacionSalida: ActivoGrupoModelo = await departamentoGrupoPostHandler(organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}

export const deleteActivoGrupo = async (req = request, res = response) => {
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