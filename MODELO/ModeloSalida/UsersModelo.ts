export class UsersModelo {
    private _id?: number;
    private _nombre?: string;
    private _apellido?: string;
    private _email?: string;
    private _idOrganizacion?: number;
    private _password?: string;
    private _idGrupo?: number;

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

    public get apellido(): string | undefined {
        return this._apellido;
    }

    public set apellido(value: string | undefined) {
        this._apellido = value;
    }

    public get email(): string | undefined {
        return this._email;
    }

    public set email(value: string | undefined) {
        this._email = value;
    }

    public get idOrganizacion(): number | undefined {
        return this._idOrganizacion;
    }

    public set idOrganizacion(value: number | undefined) {
        this._idOrganizacion = value;
    }

    public get password(): string | undefined {
        return this._password;
    }

    public set password(value: string | undefined) {
        this._password = value;
    }

    public get idGrupo(): number | undefined {
        return this._idGrupo;
    }

    public set idGrupo(value: number | undefined) {
        this._idGrupo = value;
    }
}