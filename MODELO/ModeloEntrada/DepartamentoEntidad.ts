export class DepartamentoEntidad{
    private _bu_id_business_unit?: number;
    private _bu_name?: string;
    private _bu_description?: string;
    private _bu_id_organization?: number;

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

    public get bu_description(): string | undefined {
        return this._bu_description;
    }

    public set bu_description(value: string | undefined) {
        this._bu_description = value;
    }

    public get bu_id_organization(): number | undefined {
        return this._bu_id_organization;
    }

    public set bu_id_organization(value: number | undefined) {
        this._bu_id_organization = value;
    }
}