export class UsersEntidad {
    private _usr_id_user?: number;
    private _usr_name?: string;
    private _usr_surname?: string;
    private _usr_email?: string;
    private _usr_id_organization?: number;
    private _usr_password?: string;
    private _usr_id_group?: number;

    public get usr_id_user(): number | undefined {
        return this._usr_id_user;
    }

    public set usr_id_user(value: number | undefined) {
        this._usr_id_user = value;
    }

    public get usr_name(): string | undefined {
        return this._usr_name;
    }

    public set usr_name(value: string | undefined) {
        this._usr_name = value;
    }

    public get usr_surname(): string | undefined {
        return this._usr_surname;
    }

    public set usr_surname(value: string | undefined) {
        this._usr_surname = value;
    }

    public get usr_email(): string | undefined {
        return this._usr_email;
    }

    public set usr_email(value: string | undefined) {
        this._usr_email = value;
    }

    public get usr_id_organization(): number | undefined {
        return this._usr_id_organization;
    }

    public set usr_id_organization(value: number | undefined) {
        this._usr_id_organization = value;
    }

    public get usr_password(): string | undefined {
        return this._usr_password;
    }

    public set usr_password(value: string | undefined) {
        this._usr_password = value;
    }

    public get usr_id_group(): number | undefined {
        return this._usr_id_group;
    }

    public set usr_id_group(value: number | undefined) {
        this._usr_id_group = value;
    }
}