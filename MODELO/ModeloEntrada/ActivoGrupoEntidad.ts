export class ActivoGrupoEntidad {
    private _gr_id_groups?: number;
    private _gr_name?: string;
    private _ast_id_asset?: number;

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

    public get ast_id_asset(): number | undefined {
        return this._ast_id_asset;
    }

    public set ast_id_asset(value: number | undefined) {
        this._ast_id_asset = value;
    }
}