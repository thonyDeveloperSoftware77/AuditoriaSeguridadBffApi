export class DepartamentoGrupoEntidad {
    private _gr_id_groups?: number;
    private _gr_name?: string;
    private _bu_id_business_unit?: number;

    public get id(): number | undefined {
        return this._gr_id_groups;
    }

    public set id(value: number | undefined) {
        this._gr_id_groups = value;
    }

    public get nombre(): string | undefined {
        return this._gr_name;
    }

    public set nombre(value: string | undefined) {
        this._gr_name = value;
    }
    
    public get idOrganizacion(): number | undefined {
        return this._bu_id_business_unit;
    }

    public set idOrganizacion(value: number | undefined) {
        this._bu_id_business_unit = value;
    }
}
