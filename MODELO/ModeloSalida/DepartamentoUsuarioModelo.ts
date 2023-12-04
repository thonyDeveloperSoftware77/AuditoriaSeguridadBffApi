export class DepartamentoUsuarioModelo {
    private _id?: number;
    private _nombre?: string;
    private _apellido?: string;
    private _email?: string;
    private _idDepartamento?: number;

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

    public get idDepartamento(): number | undefined {
        return this._idDepartamento;
    }

    public set idDepartamento(value: number | undefined) {
        this._idDepartamento = value;
    }
}