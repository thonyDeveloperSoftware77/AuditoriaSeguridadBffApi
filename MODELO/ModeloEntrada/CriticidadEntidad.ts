export class CriticidadEntidad {
    private _cri_id_criticality?: number;
    private _cri_value?: number;
    private _cri_criterio?: string;

    public get cri_id_criticality(): number | undefined {
        return this._cri_id_criticality;
    }

    public set cri_id_criticality(value: number | undefined) {
        this._cri_id_criticality = value;
    }

    public get cri_value(): number | undefined {
        return this._cri_value;
    }

    public set cri_value(value: number | undefined) {
        this._cri_value = value;
    }

    public get cri_criterio(): string | undefined {
        return this._cri_criterio;
    }

    public set cri_criterio(value: string | undefined) {
        this._cri_criterio = value;
    }
}