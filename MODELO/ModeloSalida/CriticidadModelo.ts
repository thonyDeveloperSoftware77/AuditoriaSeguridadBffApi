//Cambia los nombres
//private _cri_id_criticality?: number;
//private _cri_value?: string;
//private _cri_criterio?: string;


export class CriticidadModelo{
    private _id?: number;
    private _valor?: number;
    private _criterio?: string;

    public get id(): number | undefined {
        return this._id;
    }

    public set id(value: number | undefined) {
        this._id = value;
    }

    public get nombre(): number | undefined {
        return this._valor;
    }

    public set nombre(value: number | undefined) {
        this._valor = value;
    }

    public get criterio(): string | undefined {
        return this._criterio;
    }

    public set criterio(value: string | undefined) {
        this._criterio = value;
    }
}
