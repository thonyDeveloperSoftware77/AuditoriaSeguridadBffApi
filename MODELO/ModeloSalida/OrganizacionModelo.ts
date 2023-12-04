export class OrganizacionModelo {
    private _id?: number;
    private _nombre?: string;
    private _sector?: string;
    private _ubicacion?: string;
    private _actividadPrincipal?: string;

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

    public get sector(): string | undefined {
        return this._sector;
    }

    public set sector(value: string | undefined) {
        this._sector = value;
    }

    public get ubicacion(): string | undefined {
        return this._ubicacion;
    }

    public set ubicacion(value: string | undefined) {
        this._ubicacion = value;
    }

    public get actividadPrincipal(): string | undefined {
        return this._actividadPrincipal;
    }

    public set actividadPrincipal(value: string | undefined) {
        this._actividadPrincipal = value;
    }
}
