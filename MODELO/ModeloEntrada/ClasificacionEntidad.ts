export class ClasificacionEntidad {
    private _clas_id_classification?: number;
    private _clas_name?: string;
    private _clas_definition?: string;
    private _clas_example?: string;

    public get clas_id_classification(): number | undefined {
        return this._clas_id_classification;
    }

    public set clas_id_classification(value: number | undefined) {
        this._clas_id_classification = value;
    }

    public get clas_name(): string | undefined {
        return this._clas_name;
    }

    public set clas_name(value: string | undefined) {
        this._clas_name = value;
    }

    public get clas_definition(): string | undefined {
        return this._clas_definition;
    }

    public set clas_definition(value: string | undefined) {
        this._clas_definition = value;
    }

    public get clas_example(): string | undefined {
        return this._clas_example;
    }

    public set clas_example(value: string | undefined) {
        this._clas_example = value;
    }
}