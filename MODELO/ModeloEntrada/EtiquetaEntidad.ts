export class EtiquetaEntidad{
    private _lbl_id_labels?: number;
    private _lbl_name?: string;
    private _lbl_description?: string;

    public get lbl_id_labels(): number | undefined {
        return this._lbl_id_labels;
    }

    public set lbl_id_labels(value: number | undefined) {
        this._lbl_id_labels = value;
    }

    public get lbl_name(): string | undefined {
        return this._lbl_name;
    }

    public set lbl_name(value: string | undefined) {
        this._lbl_name = value;
    }

    public get lbl_description(): string | undefined {
        return this._lbl_description;
    }

    public set lbl_description(value: string | undefined) {
        this._lbl_description = value;
    }
}