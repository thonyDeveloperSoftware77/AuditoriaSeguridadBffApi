import { request, response } from "express";
import { DepartamentoUsuarioModelo } from "../../MODELO/ModeloSalida/DepartamentoUsuarioModelo";
import { departamentoUsuarioDeleteHandler, departamentoUsuarioPostHandler} from "../../APLICACION/Handlers/departamentoUsuarioHandler";

export const postDepartamentoUsuario = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new DepartamentoUsuarioModelo();
    
    organizacionEntrada.idDepartamento = body.idUsuario;
    organizacionEntrada.id = body.idDepartamento;

    const organizacionSalida: DepartamentoUsuarioModelo = await departamentoUsuarioPostHandler(organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}

export const deleteDepartamentoUsuario = async (req = request, res = response) => {
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