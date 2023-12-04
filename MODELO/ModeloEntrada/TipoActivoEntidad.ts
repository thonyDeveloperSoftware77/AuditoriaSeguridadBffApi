export class TipoActivoEntidad {
    private _a_type_id_asset_type?: number;
    private _a_type_name?: string;
    private _a_type_description?: string;

    public get a_type_id_asset_type(): number | undefined {
        return this._a_type_id_asset_type;
    }

    public set a_type_id_asset_type(value: number | undefined) {
        this._a_type_id_asset_type = value;
    }

    public get a_type_name(): string | undefined {
        return this._a_type_name;
    }

    public set a_type_name(value: string | undefined) {
        this._a_type_name = value;
    }

    public get a_type_description(): string | undefined {
        return this._a_type_description;
    }

    public set a_type_description(value: string | undefined) {
        this._a_type_description = value;
    }
}