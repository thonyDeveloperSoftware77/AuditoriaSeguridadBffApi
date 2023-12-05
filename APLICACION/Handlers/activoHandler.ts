import { ActivoEntidad } from "../../MODELO/ModeloEntrada/ActivoEntidad";
import { ActivoUsuarioEntidad } from "../../MODELO/ModeloEntrada/ActivoUsuarioEntidad";
import { ActivoGrupoEntidad } from "../../MODELO/ModeloEntrada/ActivoGrupoEntidad";
import { ActivoModelo } from "../../MODELO/ModeloSalida/ActivoModelo";
import { ActivoGrupoRepositorio } from "../../SERVICIO/Repositorio/ActivoGrupoRepositorio";
import { ActivoRepositorio } from "../../SERVICIO/Repositorio/ActivoRepositorio";
import { ActivoUsuarioRepositorio } from "../../SERVICIO/Repositorio/ActivoUsuarioRepositorio";
import { ActivoReviewerGrupoRepositorio } from "../../SERVICIO/Repositorio/ActivoReviewerGrupoRepositorio";
import { ActivoReviewerUsuarioRepositorio } from "../../SERVICIO/Repositorio/ActivoReviewerUsuarioRepositorio";


export const departamentoGetHandler = async (id: number): Promise<ActivoModelo[]> => {
    const departamentoesSalida: ActivoModelo[] = [];
    const departamentos = await new ActivoRepositorio().obtenerActivo(id);
    const grupos = await new ActivoGrupoRepositorio().obtenerActivoGrupo(id);
    const usuarios = await new ActivoUsuarioRepositorio().obtenerActivoUsuario(id);
    const gruposReviewer = await new ActivoReviewerGrupoRepositorio().obtenerActivoReviewerGrupo(id);
    const usuariosReviewer = await new ActivoReviewerUsuarioRepositorio().obtenerActivoReviewerUsuario(id);

    departamentos.forEach((departamento: ActivoEntidad) => {
        const departamentoSalida = new ActivoModelo();
        const grupo = grupos.filter((grupo:ActivoUsuarioEntidad) => grupo.ast_id_asset === departamento.ast_id_asset);
        const usuario = usuarios.filter((usuario: ActivoGrupoEntidad) => usuario.ast_id_asset === departamento.ast_id_asset);
        const grupoReviewer = gruposReviewer.filter((grupo:ActivoUsuarioEntidad) => grupo.ast_id_asset === departamento.ast_id_asset);
        const usuarioReviewer = usuariosReviewer.filter((usuario: ActivoGrupoEntidad) => usuario.ast_id_asset === departamento.ast_id_asset);
        
        departamentoSalida.id = departamento.ast_id_asset;
        departamentoSalida.id_organization = departamento.asst_id_organization;
        departamentoSalida.code = departamento.ast_code;
        departamentoSalida.name = departamento.ast_name;
        departamentoSalida.description = departamento.ast_description;
        departamentoSalida.ubication = departamento.ast_ubication;
        departamentoSalida.label = departamento.lbl_name;
        departamentoSalida.type = departamento.a_type_name;
        departamentoSalida.criticality = departamento.cri_value;
        departamentoSalida.category = departamento.ctg_name;
        departamentoSalida.class = departamento.clas_name;
        departamentoSalida.review_date = departamento.ast_review_date;
        departamentoSalida.ast_grupos= grupo;
        departamentoSalida.ast_usuarios = usuario;
        departamentoSalida.ast_reviewer_grupos = grupoReviewer;
        departamentoSalida.asst_reviewer_usuarios = usuarioReviewer;
        departamentoesSalida.push(departamentoSalida);
    });

    return departamentoesSalida;
}

export const departamentoPostHandler = async (departamento: ActivoModelo): Promise<ActivoModelo> => {
    const departamentoEntrada = new ActivoEntidad();
    const departamentoSalida = new ActivoModelo();

    departamentoEntrada.ast_code = departamento.code;
    departamentoEntrada.ast_name = departamento.name;
    departamentoEntrada.ast_description = departamento.description;
    departamentoEntrada.ast_ubication = departamento.ubication;
    departamentoEntrada.lbl_name = departamento.label;
    departamentoEntrada.a_type_name = departamento.type;
    departamentoEntrada.cri_id_criteria = departamento.id_criterio;
    departamentoEntrada.ctg_id_category = departamento.id_categoria;
    departamentoEntrada.clas_id_class = departamento.id_clasificacion;
    departamentoEntrada.asst_id_organization = departamento.id_organization;
    departamentoEntrada.ast_review_date = departamento.review_date;
    await new ActivoRepositorio().crearActivo(departamentoEntrada);
    departamentoSalida.code = departamentoEntrada.ast_code;
    departamentoSalida.name = departamentoEntrada.ast_name;
    departamentoSalida.description = departamentoEntrada.ast_description;
    departamentoSalida.ubication = departamentoEntrada.ast_ubication;
    departamentoSalida.label = departamentoEntrada.lbl_name;
    departamentoSalida.type = departamentoEntrada.a_type_name;
    departamentoSalida.criticality = departamentoEntrada.cri_value;
    departamentoSalida.category = departamentoEntrada.ctg_name;
    departamentoSalida.class = departamentoEntrada.clas_name;
    departamentoSalida.id_organization = departamentoEntrada.asst_id_organization;
    departamentoSalida.review_date = departamentoEntrada.ast_review_date;

    return departamentoSalida;
}

export const departamentoPutHandler = async (id: number, departamento: ActivoModelo): Promise<number> => {
    const departamentoEntrada = new ActivoEntidad();

    departamentoEntrada.ast_code = departamento.code;
    departamentoEntrada.ast_name = departamento.name;
    departamentoEntrada.ast_description = departamento.description;
    departamentoEntrada.ast_ubication = departamento.ubication;
    departamentoEntrada.lbl_name = departamento.label;
    departamentoEntrada.a_type_name = departamento.type;
    departamentoEntrada.cri_id_criteria = departamento.id_criterio;
    departamentoEntrada.ctg_id_category = departamento.id_categoria;
    departamentoEntrada.clas_id_class = departamento.id_clasificacion;
    departamentoEntrada.asst_id_organization = departamento.id_organization;
    departamentoEntrada.ast_review_date = departamento.review_date;

    const departamentoActualizada = await new ActivoRepositorio().actualizarActivo(id, departamentoEntrada);
    return departamentoActualizada;
}

export const departamentoDeleteHandler = async (id: number): Promise<number> => {
    const departamentoEliminada = await new ActivoRepositorio().eliminarActivo(id);
    return departamentoEliminada;
}


