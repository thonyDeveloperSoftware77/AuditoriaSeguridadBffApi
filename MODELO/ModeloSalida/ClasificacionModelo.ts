export class ClasificacionModelo {
    private _id?: number;
    private _nombre?: string;
    private _definicion?: string;
    private _ejemplo?: string;

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

    public get definicion(): string | undefined {
        return this._definicion;
    }

    public set definicion(value: string | undefined) {
        this._definicion = value;
    }

    public get ejemplo(): string | undefined {
        return this._ejemplo;
    }

    public set ejemplo(value: string | undefined) {
        this._ejemplo = value;
    }
}