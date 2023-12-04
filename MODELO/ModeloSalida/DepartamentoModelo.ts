export class DepartamentoModelo{
    private _id?: number;
    private _nombre?: string;
    private _descripcion?: string;
    private _idOrganizacion?: number;

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
}