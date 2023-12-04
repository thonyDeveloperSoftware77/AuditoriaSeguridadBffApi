import { request, response } from "express";
import { OrganizacionModelo } from "../../MODELO/ModeloSalida/OrganizacionModelo";
import { organizacionDeleteHandler, organizacionGetHandler, organizacionPostHandler, organizacionPutHandler } from "../../APLICACION/Handlers/organizacionHandler";

export const getOrganizaciones = async (req = request, res = response) => {
  try {
    const organizacionesSalida: OrganizacionModelo[] = await organizacionGetHandler();
    res.status(200).json(organizacionesSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const postOrganizacion = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new OrganizacionModelo();
    
    organizacionEntrada.nombre = body.nombre;
    organizacionEntrada.sector = body.sector;
    organizacionEntrada.ubicacion = body.ubicacion;
    organizacionEntrada.actividadPrincipal = body.actividadPrincipal;

    const organizacionSalida: OrganizacionModelo = await organizacionPostHandler(organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}


export const putOrganizacion = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new OrganizacionModelo();
    organizacionEntrada.nombre = body.nombre;
    organizacionEntrada.sector = body.sector;
    organizacionEntrada.ubicacion = body.ubicacion;
    organizacionEntrada.actividadPrincipal = body.actividadPrincipal;

    const organizacionSalida: number= await organizacionPutHandler(body.id, organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    res.status(500).json(error);
  }
}

export const deleteOrganizacion = async (req = request, res = response) => {
  try {
    const {body} = req

    const organizacionSalida: number = await organizacionDeleteHandler(body.id);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}