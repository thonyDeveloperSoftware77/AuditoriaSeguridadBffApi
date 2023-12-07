export class CategoriaEntidad {
    private _ctg_id_category?: number;
    private _ctg_name?: string;
    private _ctg_definition?: string;
    private _ctg_examples?: string;
    private _ctg_type?:  number;

    public get ctg_id_category(): number | undefined {
        return this._ctg_id_category;
    }

    public set ctg_id_category(value: number | undefined) {
        this._ctg_id_category = value;
    }

    public get ctg_name(): string | undefined {
        return this._ctg_name;
    }

    public set ctg_name(value: string | undefined) {
        this._ctg_name = value;
    }

    public get ctg_definition(): string | undefined {
        return this._ctg_definition;
    }

    public set ctg_definition(value: string | undefined) {
        this._ctg_definition = value;
    }

    public get ctg_examples(): string | undefined {
        return this._ctg_examples;
    }

    public set ctg_examples(value: string | undefined) {
        this._ctg_examples = value;
    }

    public get ctg_type(): number | undefined {
        return this._ctg_type;
    }

    public set ctg_type(value: number | undefined) {
        this._ctg_type = value;
    }
}