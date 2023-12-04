export class CategoriaModelo {
    private _idCategoria?: number;
    private _nombreCategoria?: string;
    private _definicionCategoria?: string;
    private _ejemplosCategoria?: string;

    public get idCategoria(): number | undefined {
        return this._idCategoria;
    }

    public set idCategoria(value: number | undefined) {
        this._idCategoria = value;
    }

    public get nombreCategoria(): string | undefined {
        return this._nombreCategoria;
    }

    public set nombreCategoria(value: string | undefined) {
        this._nombreCategoria = value;
    }

    public get definicionCategoria(): string | undefined {
        return this._definicionCategoria;
    }

    public set definicionCategoria(value: string | undefined) {
        this._definicionCategoria = value;
    }

    public get ejemplosCategoria(): string | undefined {
        return this._ejemplosCategoria;
    }

    public set ejemplosCategoria(value: string | undefined) {
        this._ejemplosCategoria = value;
    }
}