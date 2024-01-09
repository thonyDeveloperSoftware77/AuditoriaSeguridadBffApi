export class GrupoEntidad {
    private _gr_id_groups?: number;
    private _gr_name?: string;
    private _gr_id_organization?: number;
    private _gr_rol?: number;

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
    
    public get gr_id_organization(): number | undefined {
        return this._gr_id_organization;
    }

    public set gr_id_organization(value: number | undefined) {
        this._gr_id_organization = value;
    }

    public get gr_rol(): number | undefined {
        return this._gr_rol;
    }

    public set gr_rol(value: number | undefined) {
        this._gr_rol = value;
    }
}