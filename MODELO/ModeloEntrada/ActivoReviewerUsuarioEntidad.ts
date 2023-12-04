export class ActivoReviewerUsuarioEntidad {
    private _usr_id_user?: number;
    private _usr_name?: string;
    private _usr_surname?: string;
    private _usr_email?: string;
    private _ast_id_asset?: number;

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

    public get ast_id_asset(): number | undefined {
        return this._ast_id_asset;
    }

    public set ast_id_asset(value: number | undefined) {
        this._ast_id_asset = value;
    }
}