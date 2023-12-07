import { CategoriaEntidad } from "../../MODELO/ModeloEntrada/CategoriaEntidad";
import { CategoriaModelo } from "../../MODELO/ModeloSalida/CategoriaModelo";
import { CategoriaRepositorio } from "../../SERVICIO/Repositorio/CategoriaRepositorio";


export const categoriaGetHandler = async (): Promise<CategoriaModelo[]> => {
    const categoriaesSalida: CategoriaModelo[] = [];
    const categoriaes = await new CategoriaRepositorio().obtenerCategorias();
    categoriaes.forEach((categoria: CategoriaEntidad) => {
        const categoriaSalida = new CategoriaModelo();
        categoriaSalida.id = categoria.ctg_id_category;
        categoriaSalida.nombre = categoria.ctg_name;
        categoriaSalida.definicion = categoria.ctg_definition;
        categoriaSalida.ejemplo = categoria.ctg_examples;
        categoriaSalida.tipo = categoria.ctg_type;
        categoriaesSalida.push(categoriaSalida);
    });
    return categoriaesSalida;
}

export const categoriaPostHandler = async (categoria: CategoriaModelo): Promise<CategoriaModelo> => {
    const categoriaEntrada = new CategoriaEntidad();
    const categoriaSalida = new CategoriaModelo();

    categoriaEntrada.ctg_name = categoria.nombre;
    categoriaEntrada.ctg_definition = categoria.definicion;
    categoriaEntrada.ctg_examples = categoria.ejemplo;
    categoriaEntrada.ctg_type = categoria.tipo;

    await new CategoriaRepositorio().crearCategoria(categoriaEntrada);
    categoriaSalida.nombre = categoriaEntrada.ctg_name;
    categoriaSalida.definicion = categoriaEntrada.ctg_definition;
    categoriaSalida.ejemplo = categoriaEntrada.ctg_examples;
    categoriaSalida.tipo = categoriaEntrada.ctg_type;
   
    return categoriaSalida;
}

export const categoriaPutHandler = async (id: number, categoria: CategoriaModelo): Promise<number> => {
    const categoriaEntrada = new CategoriaEntidad();

    categoriaEntrada.ctg_name = categoria.nombre;
    categoriaEntrada.ctg_definition = categoria.definicion;
    categoriaEntrada.ctg_examples = categoria.ejemplo;
    categoriaEntrada.ctg_type = categoria.tipo;

    const categoriaActualizada = await new CategoriaRepositorio().actualizarCategoria(id, categoriaEntrada);
    return categoriaActualizada;
}

export const categoriaDeleteHandler = async (id: number): Promise<number> => {
    const categoriaEliminada = await new CategoriaRepositorio().eliminarCategoria(id);
    return categoriaEliminada;
}


