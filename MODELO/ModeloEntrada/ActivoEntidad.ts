import { ActivoGrupoModelo } from "../ModeloSalida/ActivoGrupoModelo";
import { ActivoReviewerGrupoModelo } from "../ModeloSalida/ActivoReviewerGrupoModelo";
import { ActivoReviewerUsuarioModelo } from "../ModeloSalida/ActivoReviewerUsuarioModelo";
import { ActivoUsuarioModelo } from "../ModeloSalida/ActivoUsuarioModelo";

export class ActivoEntidad {
    private _ast_id_asset?: number;
    private _asst_id_organization?: number;
    private _ast_code?: string;
    private _ast_name?: string;
    private _ast_description?: string;
    private _ast_ubication?: string;
    private _lbl_name?: string;
    private _a_type_name?: string;
    private _cri_value?: string;
    private _cri_id_criteria?: number;
    private _ctg_name?: string;
    private _ctg_id_category?: number;
    private _clas_name?: string;
    private _clas_id_class?: number;
    private _ast_review_date?: Date;
    private _ast_grupos? : ActivoGrupoModelo[];
    private _ast_usuarios? : ActivoUsuarioModelo[];
    private _ast_reviewer_grupos? : ActivoReviewerGrupoModelo[];
    private _asst_reviewer_usuarios? : ActivoReviewerUsuarioModelo[];


    public get ast_id_asset(): number | undefined {
        return this._ast_id_asset;
    }

    public set ast_id_asset(value: number | undefined) {
        this._ast_id_asset = value;
    }

    public get ast_code(): string | undefined {
        return this._ast_code;
    }

    public set ast_code(value: string | undefined) {
        this._ast_code = value;
    }

    public get ast_name(): string | undefined {
        return this._ast_name;
    }

    public set ast_name(value: string | undefined) {
        this._ast_name = value;
    }

    public get ast_description(): string | undefined {
        return this._ast_description;
    }

    public set ast_description(value: string | undefined) {
        this._ast_description = value;
    }

    public get ast_ubication(): string | undefined {
        return this._ast_ubication;
    }

    public set ast_ubication(value: string | undefined) {
        this._ast_ubication = value;
    }

    public get lbl_name(): string | undefined {
        return this._lbl_name;
    }

    public set lbl_name(value: string | undefined) {
        this._lbl_name = value;
    }

    public get a_type_name(): string | undefined {
        return this._a_type_name;
    }

    public set a_type_name(value: string | undefined) {
        this._a_type_name = value;
    }

    public get cri_value(): string | undefined {
        return this._cri_value;
    }

    public set cri_value(value: string | undefined) {
        this._cri_value = value;
    }

    public get ctg_name(): string | undefined {
        return this._ctg_name;
    }

    public set ctg_name(value: string | undefined) {
        this._ctg_name = value;
    }

    public get clas_name(): string | undefined {
        return this._clas_name;
    }

    public set clas_name(value: string | undefined) {
        this._clas_name = value;
    }

    public get ast_review_date(): Date | undefined {
        return this._ast_review_date;
    }

    public set ast_review_date(value: Date | undefined) {
        this._ast_review_date = value;
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

    public get cri_id_criteria(): number | undefined {
        return this._cri_id_criteria;
    }

    public set cri_id_criteria(value: number | undefined) {
        this._cri_id_criteria = value;
    }

    public get ctg_id_category(): number | undefined {
        return this._ctg_id_category;
    }

    public set ctg_id_category(value: number | undefined) {
        this._ctg_id_category = value;
    }

    public get clas_id_class(): number | undefined {
        return this._clas_id_class;
    }

    public set clas_id_class(value: number | undefined) {
        this._clas_id_class = value;
    }

    public get asst_id_organization(): number | undefined {
        return this._asst_id_organization;
    }

    public set asst_id_organization(value: number | undefined) {
        this._asst_id_organization = value;
    }
}