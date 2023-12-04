export class ActivoEntidad {
    private _ast_id_asset?: number;
    private _ast_code?: string;
    private _ast_name?: string;
    private _ast_description?: string;
    private _ast_ubication?: string;
    private _lbl_name?: string;
    private _a_type_name?: string;
    private _cri_value?: string;
    private _ctg_name?: string;
    private _clas_name?: string;
    private _ast_review_date?: Date;

    public get ast_id_asset(): number | undefined {
        return this._ast_id_asset;
    }

    public set ast_id_asset(value: number | undefined) {
        this._ast_id_asset = value;
    }

    public get ast_code(): string | undefined {
        return this._ast_code;
    }

    public set ast_code(value: string | undefined) {
        this._ast_code = value;
    }

    public get ast_name(): string | undefined {
        return this._ast_name;
    }

    public set ast_name(value: string | undefined) {
        this._ast_name = value;
    }

    public get ast_description(): string | undefined {
        return this._ast_description;
    }

    public set ast_description(value: string | undefined) {
        this._ast_description = value;
    }

    public get ast_ubication(): string | undefined {
        return this._ast_ubication;
    }

    public set ast_ubication(value: string | undefined) {
        this._ast_ubication = value;
    }

    public get lbl_name(): string | undefined {
        return this._lbl_name;
    }

    public set lbl_name(value: string | undefined) {
        this._lbl_name = value;
    }

    public get a_type_name(): string | undefined {
        return this._a_type_name;
    }

    public set a_type_name(value: string | undefined) {
        this._a_type_name = value;
    }

    public get cri_value(): string | undefined {
        return this._cri_value;
    }

    public set cri_value(value: string | undefined) {
        this._cri_value = value;
    }

    public get ctg_name(): string | undefined {
        return this._ctg_name;
    }

    public set ctg_name(value: string | undefined) {
        this._ctg_name = value;
    }

    public get clas_name(): string | undefined {
        return this._clas_name;
    }

    public set clas_name(value: string | undefined) {
        this._clas_name = value;
    }

    public get ast_review_date(): Date | undefined {
        return this._ast_review_date;
    }

    public set ast_review_date(value: Date | undefined) {
        this._ast_review_date = value;
    }

}