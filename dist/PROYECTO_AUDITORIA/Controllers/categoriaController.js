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
exports.deleteCategoria = exports.putCategoria = exports.postCategoria = exports.getCategorias = void 0;
const express_1 = require("express");
const CategoriaModelo_1 = require("../../MODELO/ModeloSalida/CategoriaModelo");
const categoriaHandler_1 = require("../../APLICACION/Handlers/categoriaHandler");
const getCategorias = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriaSalida = yield (0, categoriaHandler_1.categoriaGetHandler)();
        res.status(200).json(categoriaSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getCategorias = getCategorias;
const postCategoria = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const categoriaEntrada = new CategoriaModelo_1.CategoriaModelo();
        categoriaEntrada.nombre = body.nombre;
        categoriaEntrada.definicion = body.definicion;
        categoriaEntrada.ejemplo = body.ejemplo;
        categoriaEntrada.tipo = body.tipo;
        const categoriaSalida = yield (0, categoriaHandler_1.categoriaPostHandler)(categoriaEntrada);
        res.status(200).json(categoriaSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postCategoria = postCategoria;
const putCategoria = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const categoriaEntrada = new CategoriaModelo_1.CategoriaModelo();
        categoriaEntrada.nombre = body.nombre;
        categoriaEntrada.definicion = body.definicion;
        categoriaEntrada.ejemplo = body.ejemplo;
        categoriaEntrada.tipo = body.tipo;
        const categoriaSalida = yield (0, categoriaHandler_1.categoriaPutHandler)(body.id, categoriaEntrada);
        res.status(200).json(categoriaSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putCategoria = putCategoria;
const deleteCategoria = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const categoriaSalida = yield (0, categoriaHandler_1.categoriaDeleteHandler)(body.id);
        res.status(200).json(categoriaSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteCategoria = deleteCategoria;
//# sourceMappingURL=categoriaController.js.map