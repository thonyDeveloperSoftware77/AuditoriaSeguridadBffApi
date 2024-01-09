export class VerifyModelo {
    private _Nombre?: string;
    private _Apellido?: string;
    private _Rol?: number;
    private _Resultado?: number;
    private _IdOrganizacion?: number;
    private _email?: string;
    private _password?: string;

    public get Nombre(): string | undefined {
        return this._Nombre;
    }

    public set Nombre(value: string | undefined) {
        this._Nombre = value;
    }

    public get Rol(): number | undefined {
        return this._Rol;
    }

    public set Rol(value: number | undefined) {
        this._Rol = value;
    }

    public get IdOrganizacion(): number | undefined {
        return this._IdOrganizacion;
    }

    public set IdOrganizacion(value: number | undefined) {
        this._IdOrganizacion = value;
    }

    public get email(): string | undefined {
        return this._email;
    }

    public set email(value: string | undefined) {
        this._email = value;
    }

    public get password(): string | undefined {
        return this._password;
    }

    public set password(value: string | undefined) {
        this._password = value;
    }

    public get Apellido(): string | undefined {
        return this._Apellido;
    }

    public set Apellido(value: string | undefined) {
        this._Apellido = value;
    }

    public get Resultado(): number | undefined {
        return this._Resultado;
    }

    public set Resultado(value: number | undefined) {
        this._Resultado = value;
    }
}