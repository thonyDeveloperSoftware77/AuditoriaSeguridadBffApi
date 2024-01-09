import { request, response } from "express";
import { VerifyModelo } from "../../MODELO/ModeloSalida/VerifyModelo";
import { VerifyGetHandler } from "../../APLICACION/Handlers/verifyHandler";

export const getVerifys = async (req = request, res = response) => {
  try {

    const { body } = req
    const gruposSalida: VerifyModelo[] = await VerifyGetHandler(body.email, body.password);
    res.status(200).json(gruposSalida);
  } catch (error) {
    res.status(500).json(error);
  }
}