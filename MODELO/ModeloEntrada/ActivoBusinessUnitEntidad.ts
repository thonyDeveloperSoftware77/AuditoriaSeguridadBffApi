export class ActivoBusinessUnitEntidad {
    private _abu_id?: number;
    private _ast_id_asset?: number;
    private _bu_id_business_unit?: number;
    private _bu_name?: string;

    public get abu_id(): number | undefined {
        return this._abu_id;
    }

    public set abu_id(value: number | undefined) {
        this._abu_id = value;
    }

    public get ast_id_asset(): number | undefined {
        return this._ast_id_asset;
    }

    public set ast_id_asset(value: number | undefined) {
        this._ast_id_asset = value;
    }

    public get bu_id_business_unit(): number | undefined {
        return this._bu_id_business_unit;
    }

    public set bu_id_business_unit(value: number | undefined) {
        this._bu_id_business_unit = value;
    }

    public get bu_name(): string | undefined {
        return this._bu_name;
    }

    public set bu_name(value: string | undefined) {
        this._bu_name = value;
    }
}