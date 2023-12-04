export class GrupoEntidad {
    private _gr_id_groups?: number;
    private _gr_name?: string;
    private _gr_id_organization?: number;

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
        return this._gr_id_organization;
    }

    public set idOrganizacion(value: number | undefined) {
        this._gr_id_organization = value;
    }
}