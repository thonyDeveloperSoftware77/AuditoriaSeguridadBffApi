export class ValoracionActivoEntidad {
    private _id_valoracion?: number;
    private _id_asset?: number;
    private _confidencialidad?: number;
    private _integridad?: number;
    private _disponibilidad?: number;
    private _codigo?: string;
    private _nombre?: string;
    private _descripcion?: string;
    private _ubicacion?: string;
    private _idOrganizacion?: number;

   
    public get id_valoracion(): number | undefined {
        return this._id_valoracion;
    }

    public set id_valoracion(value: number | undefined) {
        this._id_valoracion = value;
    }

    public get id_asset(): number | undefined {
        return this._id_asset;
    }

    public set id_asset(value: number | undefined) {
        this._id_asset = value;
    }
    
    public get confidencialidad(): number | undefined {
        return this._confidencialidad;
    }

    public set confidencialidad(value: number | undefined) {
        this._confidencialidad = value;
    }

    public get integridad(): number | undefined {
        return this._integridad;
    }

    public set integridad(value: number | undefined) {
        this._integridad = value;
    }

    public get disponibilidad(): number | undefined {
        return this._disponibilidad;
    }

    public set disponibilidad(value: number | undefined) {
        this._disponibilidad = value;
    }

    public get codigo(): string | undefined {
        return this._codigo;
    }

    public set codigo(value: string | undefined) {
        this._codigo = value;
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

    public get ubicacion(): string | undefined {
        return this._ubicacion;
    }

    public set ubicacion(value: string | undefined) {
        this._ubicacion = value;
    }

    public get idOrganizacion(): number | undefined {
        return this._idOrganizacion;
    }

    public set idOrganizacion(value: number | undefined) {
        this._idOrganizacion = value;
    }
}