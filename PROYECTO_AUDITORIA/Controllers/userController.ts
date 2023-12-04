import { request, response } from "express";
import { UsersModelo } from "../../MODELO/ModeloSalida/UsersModelo";
import { usuarioDeleteHandler,usuarioGetHandler,usuarioPostHandler,usuarioPutHandler } from "../../APLICACION/Handlers/usuarioHandler";

export const getUsers = async (req = request, res = response) => {
  try {
    
    const {body} = req
    const usersSalida: UsersModelo[] = await usuarioGetHandler(body.id);
    res.status(200).json(usersSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postUser = async (req = request, res = response) => {
  try {
    const {body} = req
    const userEntrada = new UsersModelo();
    
    userEntrada.nombre = body.nombre;
    userEntrada.apellido = body.apellido;
    userEntrada.email = body.email;
    userEntrada.password = body.password;
    userEntrada.idGrupo = body.idGrupo;
    userEntrada.idOrganizacion = body.idOrganizacion;

    const userSalida: UsersModelo = await usuarioPostHandler(userEntrada);
    res.status(200).json(userSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putUser = async (req = request, res = response) => {
  try {
    const {body} = req
    const userEntrada = new UsersModelo();
    userEntrada.nombre = body.nombre;
    userEntrada.apellido = body.apellido;
    userEntrada.email = body.email;
    userEntrada.password = body.password;
    userEntrada.idGrupo = body.idGrupo;
    userEntrada.idOrganizacion = body.idOrganizacion;

    const userSalida: number= await usuarioPutHandler(body.id, userEntrada);
    res.status(200).json(userSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteUser = async (req = request, res = response) => {
  try {
    const {body} = req

    const userSalida: number = await usuarioDeleteHandler(body.id);
    res.status(200).json(userSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}