export class DepartamentoGrupoEntidad {
    private _gr_id_groups?: number;
    private _gr_name?: string;
    private _bu_id_business_unit?: number;

    public get gr_id_groups(): number | undefined {
        return this._gr_id_groups;
    }

    public set gr_id_groups(value: number | undefined) {
        this._gr_id_groups = value;
    }

    public get gr_name(): string | undefined {
        return this._gr_name;
    }

    public set gr_name(value: string | undefined) {
        this._gr_name = value;
    }
    
    public get bu_id_business_unit(): number | undefined {
        return this._bu_id_business_unit;
    }

    public set bu_id_business_unit(value: number | undefined) {
        this._bu_id_business_unit = value;
    }
}
