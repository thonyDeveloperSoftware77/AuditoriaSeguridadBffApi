import { CategoriaEntidad } from "../../MODELO/ModeloEntrada/CategoriaEntidad";
import { CategoriaModelo } from "../../MODELO/ModeloSalida/CategoriaModelo";
import { CategoriaRepositorio } from "../../SERVICIO/Repositorio/CategoriaRepositorio";


export const categoriaGetHandler = async (): Promise<CategoriaModelo[]> => {
    const categoriaesSalida: CategoriaModelo[] = [];
    const categoriaes = await new CategoriaRepositorio().obtenerCategorias();
    categoriaes.forEach((categoria: CategoriaEntidad) => {
        const categoriaSalida = new CategoriaModelo();
        categoriaSalida.idCategoria = categoria.ctg_id_category;
        categoriaSalida.nombreCategoria = categoria.ctg_name;
        categoriaSalida.definicionCategoria = categoria.ctg_definition;
        categoriaSalida.ejemplosCategoria = categoria.ctg_examples;
        categoriaesSalida.push(categoriaSalida);
    });
    return categoriaesSalida;
}

export const categoriaPostHandler = async (categoria: CategoriaModelo): Promise<CategoriaModelo> => {
    const categoriaEntrada = new CategoriaEntidad();
    const categoriaSalida = new CategoriaModelo();

    categoriaEntrada.ctg_name = categoria.nombreCategoria;
    categoriaEntrada.ctg_definition = categoria.definicionCategoria;
    categoriaEntrada.ctg_examples = categoria.ejemplosCategoria;

    await new CategoriaRepositorio().crearCategoria(categoriaEntrada);
    categoriaSalida.nombreCategoria = categoriaEntrada.ctg_name;
    categoriaSalida.definicionCategoria = categoriaEntrada.ctg_definition;
    categoriaSalida.ejemplosCategoria = categoriaEntrada.ctg_examples;
   
    return categoriaSalida;
}

export const categoriaPutHandler = async (id: number, categoria: CategoriaModelo): Promise<number> => {
    const categoriaEntrada = new CategoriaEntidad();

    categoriaEntrada.ctg_name = categoria.nombreCategoria;
    categoriaEntrada.ctg_definition = categoria.definicionCategoria;
    categoriaEntrada.ctg_examples = categoria.ejemplosCategoria;

    const categoriaActualizada = await new CategoriaRepositorio().actualizarCategoria(id, categoriaEntrada);
    return categoriaActualizada;
}

export const categoriaDeleteHandler = async (id: number): Promise<number> => {
    const categoriaEliminada = await new CategoriaRepositorio().eliminarCategoria(id);
    return categoriaEliminada;
}


