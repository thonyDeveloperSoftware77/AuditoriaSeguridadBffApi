export class GrupoModelo {
    private _id?: number;
    private _nombre?: string;
    private _idOrganizacion?: number;
    private _rol?: number;

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
    
    public get idOrganizacion(): number | undefined {
        return this._idOrganizacion;
    }

    public set idOrganizacion(value: number | undefined) {
        this._idOrganizacion = value;
    }

    public get rol(): number | undefined {
        return this._rol;
    }

    public set rol(value: number | undefined) {
        this._rol = value;
    }
}