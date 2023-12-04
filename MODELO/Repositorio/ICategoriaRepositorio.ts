import { CategoriaEntidad } from "../ModeloEntrada/CategoriaEntidad";

export interface ICategoriaRepositorio {
    obtenerCategorias(): Promise<CategoriaEntidad[]>;
    crearCategoria(grupo: CategoriaEntidad): Promise<CategoriaEntidad>;
    actualizarCategoria(id: number, grupo: CategoriaEntidad): Promise<number>;
    eliminarCategoria(id: number): Promise<number>;
}