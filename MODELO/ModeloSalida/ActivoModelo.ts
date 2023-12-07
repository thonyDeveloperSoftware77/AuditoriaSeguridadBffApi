import { ActivoBusinessUnitModelo } from "./ActivoBusinessUnitModelo";
import { ActivoGrupoModelo } from "./ActivoGrupoModelo";
import { ActivoReviewerGrupoModelo } from "./ActivoReviewerGrupoModelo";
import { ActivoReviewerUsuarioModelo } from "./ActivoReviewerUsuarioModelo";
import { ActivoUsuarioModelo } from "./ActivoUsuarioModelo";

export class ActivoModelo {
    private _id?: number;
    private _id_organization?: number;
    private _code?: string;
    private _name?: string;
    private _description?: string;
    private _ubication?: string;
    private _label?: string;
    private _type?: string;
    private _criticality?: string;
    private _id_criterio?: number;
    private _id_categoria?: number;
    private _id_clasificacion?: number;
    private _category?: string;
    private _class?: string;
    private _review_date?: Date;
    private _ast_grupos? : ActivoGrupoModelo[];
    private _ast_usuarios? : ActivoUsuarioModelo[];
    private _ast_reviewer_grupos? : ActivoReviewerGrupoModelo[];
    private _asst_reviewer_usuarios? : ActivoReviewerUsuarioModelo[];
    private _ast_business_unit? : ActivoBusinessUnitModelo[];
    private _new_id?: number;

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
    public get id_organization(): number | undefined {
        return this._id_organization;
    }
    public set id_organization(value: number | undefined) {
        this._id_organization = value;
    }
    public get ast_grupos(): ActivoGrupoModelo[] | undefined {
        return this._ast_grupos;
    }
    public set ast_grupos(value: ActivoGrupoModelo[] | undefined) {
        this._ast_grupos = value;
    }
    public get ast_usuarios(): ActivoUsuarioModelo[] | undefined {
        return this._ast_usuarios;
    }
    public set ast_usuarios(value: ActivoUsuarioModelo[] | undefined) {
        this._ast_usuarios = value;
    }
    public get ast_reviewer_grupos(): ActivoReviewerGrupoModelo[] | undefined {
        return this._ast_reviewer_grupos;
    }
    public set ast_reviewer_grupos(value: ActivoReviewerGrupoModelo[] | undefined) {
        this._ast_reviewer_grupos = value;
    }
    public get asst_reviewer_usuarios(): ActivoReviewerUsuarioModelo[] | undefined {
        return this._asst_reviewer_usuarios;
    }
    public set asst_reviewer_usuarios(value: ActivoReviewerUsuarioModelo[] | undefined) {
        this._asst_reviewer_usuarios = value;
    }

    public get id_criterio(): number | undefined {
        return this._id_criterio;
    }
    public set id_criterio(value: number | undefined) {
        this._id_criterio = value;
    }
    public get id_categoria(): number | undefined {
        return this._id_categoria;
    }
    public set id_categoria(value: number | undefined) {
        this._id_categoria = value;
    }
    public get id_clasificacion(): number | undefined {
        return this._id_clasificacion;
    }
    public set id_clasificacion(value: number | undefined) {
        this._id_clasificacion = value;
    }
    public get ast_business_unit(): ActivoBusinessUnitModelo[] | undefined {
        return this._ast_business_unit;
    }
    public set ast_business_unit(value: ActivoBusinessUnitModelo[] | undefined) {
        this._ast_business_unit = value;
    }

    public get new_id(): number | undefined {
        return this._new_id;
    }

    public set new_id(value: number | undefined) {
        this._new_id = value;
    }


}