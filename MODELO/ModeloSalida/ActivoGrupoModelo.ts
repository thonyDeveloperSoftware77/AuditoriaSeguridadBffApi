export class ActivoGrupoModelo {
    private _idGrupo?: number;
    private _nombreGrupo?: string;
    private _idActivo?: number;

    public get idGrupo(): number | undefined {
        return this._idGrupo;
    }

    public set idGrupo(value: number | undefined) {
        this._idGrupo = value;
    }

    public get nombreGrupo(): string | undefined {
        return this._nombreGrupo;
    }

    public set nombreGrupo(value: string | undefined) {
        this._nombreGrupo = value;
    }

    public get idActivo(): number | undefined {
        return this._idActivo;
    }

    public set idActivo(value: number | undefined) {
        this._idActivo = value;
    }
}