
export class OrganizacionEntidad {
    private _org_id_organization?: number;
    private _org_name?: string;
    private _org_sector?: string;
    private _org_ubication?: string;
    private _org_main_activity?: string;

    public get org_id_organization(): number | undefined {
        return this._org_id_organization;
    }

    public set org_id_organization(value: number | undefined) {
        this._org_id_organization = value;
    }

    public get org_name(): string | undefined {
        return this._org_name;
    }

    public set org_name(value: string | undefined) {
        this._org_name = value;
    }

    public get org_sector(): string | undefined {
        return this._org_sector;
    }

    public set org_sector(value: string | undefined) {
        this._org_sector = value;
    }

    public get org_ubication(): string | undefined {
        return this._org_ubication;
    }

    public set org_ubication(value: string | undefined) {
        this._org_ubication = value;
    }

    public get org_main_activity(): string | undefined {
        return this._org_main_activity;
    }

    public set org_main_activity(value: string | undefined) {
        this._org_main_activity = value;
    }
}

    
