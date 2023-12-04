//Cambia los nombres
// private _gr_id_groups?: number;
//private _gr_name?: string;
//private _bu_id_business_unit?: number;
export class DepartamentoGrupoModelo {
    private _id?: number;
    private _nombre?: string;
    private _idDepartamento?: number;

    public get id(): number | undefined {
        return this._id;
    }

    public set id(value: number | undefined) {
        this._id = value;
    }

    public get nombre(): string | undefined {
        return this._nombre;
    }

    public set nombre(value: string | undefined) {
        this._nombre = value;
    }
    
    public get idDepartamento(): number | undefined {
        return this._idDepartamento;
    }

    public set idDepartamento(value: number | undefined) {
        this._idDepartamento = value;
    }
}