import { request, response } from "express";
import { CategoriaModelo } from "../../MODELO/ModeloSalida/CategoriaModelo";
import { categoriaDeleteHandler, categoriaGetHandler, categoriaPostHandler, categoriaPutHandler } from "../../APLICACION/Handlers/categoriaHandler";

export const getCategorias = async (req = request, res = response) => {
  try {
    const categoriaSalida: CategoriaModelo[] = await categoriaGetHandler();
    res.status(200).json(categoriaSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postCategoria = async (req = request, res = response) => {
  try {
    const {body} = req
    const categoriaEntrada = new CategoriaModelo();
    
    categoriaEntrada.nombre = body.nombre;
    categoriaEntrada.definicion = body.definicion;
    categoriaEntrada.ejemplo = body.ejemplo;
    categoriaEntrada.tipo = body.tipo;

    const categoriaSalida: CategoriaModelo = await categoriaPostHandler(categoriaEntrada);
    res.status(200).json(categoriaSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putCategoria = async (req = request, res = response) => {
  try {
    const {body} = req
    const categoriaEntrada = new CategoriaModelo();

    categoriaEntrada.nombre = body.nombre;
    categoriaEntrada.definicion = body.definicion;
    categoriaEntrada.ejemplo = body.ejemplo;
    categoriaEntrada.tipo = body.tipo;

    const categoriaSalida: number= await categoriaPutHandler(body.id, categoriaEntrada);
    res.status(200).json(categoriaSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteCategoria = async (req = request, res = response) => {
  try {
    const {body} = req

    const categoriaSalida: number = await categoriaDeleteHandler(body.id);
    res.status(200).json(categoriaSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}