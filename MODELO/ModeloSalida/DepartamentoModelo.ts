import { DepartamentoGrupoModelo } from "./DepartamentoGrupoModelo";
import { DepartamentoUsuarioModelo } from "./DepartamentoUsuarioModelo";

export class DepartamentoModelo{
    private _id?: number;
    private _nombre?: string;
    private _descripcion?: string;
    private _idOrganizacion?: number;
    private _grupos?: DepartamentoGrupoModelo[];
    private _usuarios?: DepartamentoUsuarioModelo[];
    private _new_id?: number;

    public get id(): number | undefined {
        return this._id;
    }

    public set id(value: number | undefined) {
        this._id = value;
    }

    public get nombre(): string | undefined {
        return this._nombre;
    }

    public set nombre(value: string | undefined) {
        this._nombre = value;
    }

    public get descripcion(): string | undefined {
        return this._descripcion;
    }

    public set descripcion(value: string | undefined) {
        this._descripcion = value;
    }

    public get idOrganizacion(): number | undefined {
        return this._idOrganizacion;
    }

    public set idOrganizacion(value: number | undefined) {
        this._idOrganizacion = value;
    }

    public get grupos(): DepartamentoGrupoModelo[] | undefined {
        return this._grupos;
    }

    public set grupos(value: DepartamentoGrupoModelo[] | undefined) {
        this._grupos = value;
    }

    public get usuarios(): DepartamentoUsuarioModelo[] | undefined {
        return this._usuarios;
    }

    public set usuarios(value: DepartamentoUsuarioModelo[] | undefined) {
        this._usuarios = value;
    }

    public get new_id(): number | undefined {
        return this._new_id;
    }

    public set new_id(value: number | undefined) {
        this._new_id = value;
    }
}