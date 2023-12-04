import { request, response } from "express";
import { DepartamentoGrupoModelo } from "../../MODELO/ModeloSalida/DepartamentoGrupoModelo";
import { departamentoGrupoDeleteHandler, departamentoGrupoPostHandler} from "../../APLICACION/Handlers/departamentoGrupoHandler";

export const postDepartamentoGrupo = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new DepartamentoGrupoModelo();
    
    organizacionEntrada.idDepartamento = body.idGrupo;
    organizacionEntrada.id = body.idDepartamento;

    const organizacionSalida: DepartamentoGrupoModelo = await departamentoGrupoPostHandler(organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}

export const deleteDepartamentoGrupo = async (req = request, res = response) => {
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