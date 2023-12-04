export class ActivoReviwerUsuarioModelo {
    private _idUsuario?: number;
    private _nombreUsuario?: string;
    private _apellidoUsuario?: string;
    private _emailUsuario?: string;
    private _idActivo?: number;

    public get idUsuario(): number | undefined {
        return this._idUsuario;
    }

    public set idUsuario(value: number | undefined) {
        this._idUsuario = value;
    }

    public get nombreUsuario(): string | undefined {
        return this._nombreUsuario;
    }

    public set nombreUsuario(value: string | undefined) {
        this._nombreUsuario = value;
    }

    public get apellidoUsuario(): string | undefined {
        return this._apellidoUsuario;
    }

    public set apellidoUsuario(value: string | undefined) {
        this._apellidoUsuario = value;
    }

    public get emailUsuario(): string | undefined {
        return this._emailUsuario;
    }

    public set emailUsuario(value: string | undefined) {
        this._emailUsuario = value;
    }

    public get idActivo(): number | undefined {
        return this._idActivo;
    }

    public set idActivo(value: number | undefined) {
        this._idActivo = value;
    }
}