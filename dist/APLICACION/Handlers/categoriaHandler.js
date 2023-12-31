"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaDeleteHandler = exports.categoriaPutHandler = exports.categoriaPostHandler = exports.categoriaGetHandler = void 0;
const CategoriaEntidad_1 = require("../../MODELO/ModeloEntrada/CategoriaEntidad");
const CategoriaModelo_1 = require("../../MODELO/ModeloSalida/CategoriaModelo");
const CategoriaRepositorio_1 = require("../../SERVICIO/Repositorio/CategoriaRepositorio");
const categoriaGetHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    const categoriaesSalida = [];
    const categoriaes = yield new CategoriaRepositorio_1.CategoriaRepositorio().obtenerCategorias();
    categoriaes.forEach((categoria) => {
        const categoriaSalida = new CategoriaModelo_1.CategoriaModelo();
        categoriaSalida.id = categoria.ctg_id_category;
        categoriaSalida.nombre = categoria.ctg_name;
        categoriaSalida.definicion = categoria.ctg_definition;
        categoriaSalida.ejemplo = categoria.ctg_examples;
        categoriaSalida.tipo = categoria.ctg_type;
        categoriaesSalida.push(categoriaSalida);
    });
    return categoriaesSalida;
});
exports.categoriaGetHandler = categoriaGetHandler;
const categoriaPostHandler = (categoria) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriaEntrada = new CategoriaEntidad_1.CategoriaEntidad();
    const categoriaSalida = new CategoriaModelo_1.CategoriaModelo();
    categoriaEntrada.ctg_name = categoria.nombre;
    categoriaEntrada.ctg_definition = categoria.definicion;
    categoriaEntrada.ctg_examples = categoria.ejemplo;
    categoriaEntrada.ctg_type = categoria.tipo;
    yield new CategoriaRepositorio_1.CategoriaRepositorio().crearCategoria(categoriaEntrada);
    categoriaSalida.nombre = categoriaEntrada.ctg_name;
    categoriaSalida.definicion = categoriaEntrada.ctg_definition;
    categoriaSalida.ejemplo = categoriaEntrada.ctg_examples;
    categoriaSalida.tipo = categoriaEntrada.ctg_type;
    return categoriaSalida;
});
exports.categoriaPostHandler = categoriaPostHandler;
const categoriaPutHandler = (id, categoria) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriaEntrada = new CategoriaEntidad_1.CategoriaEntidad();
    categoriaEntrada.ctg_name = categoria.nombre;
    categoriaEntrada.ctg_definition = categoria.definicion;
    categoriaEntrada.ctg_examples = categoria.ejemplo;
    categoriaEntrada.ctg_type = categoria.tipo;
    const categoriaActualizada = yield new CategoriaRepositorio_1.CategoriaRepositorio().actualizarCategoria(id, categoriaEntrada);
    return categoriaActualizada;
});
exports.categoriaPutHandler = categoriaPutHandler;
const categoriaDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriaEliminada = yield new CategoriaRepositorio_1.CategoriaRepositorio().eliminarCategoria(id);
    return categoriaEliminada;
});
exports.categoriaDeleteHandler = categoriaDeleteHandler;
//# sourceMappingURL=categoriaHandler.js.map