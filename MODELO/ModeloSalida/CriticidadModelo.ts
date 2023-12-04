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

    public get valor(): number | undefined {
        return this._valor;
    }

    public set valor(value: number | undefined) {
        this._valor = value;
    }

    public get criterio(): string | undefined {
        return this._criterio;
    }

    public set criterio(value: string | undefined) {
        this._criterio = value;
    }
}
