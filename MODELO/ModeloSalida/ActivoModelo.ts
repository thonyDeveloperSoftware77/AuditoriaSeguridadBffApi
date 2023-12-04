export class ActivoModelo {
    private _id?: number;
    private _code?: string;
    private _name?: string;
    private _description?: string;
    private _ubication?: string;
    private _label?: string;
    private _type?: string;
    private _criticality?: string;
    private _category?: string;
    private _class?: string;
    private _review_date?: Date;
    public get id(): number | undefined {
        return this._id;
    }
    public set id(value: number | undefined) {
        this._id = value;
    }
    public get code(): string | undefined {
        return this._code;
    }
    public set code(value: string | undefined) {
        this._code = value;
    }
    public get name(): string | undefined {
        return this._name;
    }
    public set name(value: string | undefined) {
        this._name = value;
    }
    public get description(): string | undefined {
        return this._description;
    }
    public set description(value: string | undefined) {
        this._description = value;
    }
    public get ubication(): string | undefined {
        return this._ubication;
    }
    public set ubication(value: string | undefined) {
        this._ubication = value;
    }
    public get label(): string | undefined {
        return this._label;
    }
    public set label(value: string | undefined) {
        this._label = value;
    }
    public get type(): string | undefined {
        return this._type;
    }
    public set type(value: string | undefined) {
        this._type = value;
    }
    public get criticality(): string | undefined {
        return this._criticality;
    }
    public set criticality(value: string | undefined) {
        this._criticality = value;
    }
    public get category(): string | undefined {
        return this._category;
    }
    public set category(value: string | undefined) {
        this._category = value;
    }
    public get class(): string | undefined {
        return this._class;
    }
    public set class(value: string | undefined) {
        this._class = value;
    }
    public get review_date(): Date | undefined {
        return this._review_date;
    }
    public set review_date(value: Date | undefined) {
        this._review_date = value;
    }
}