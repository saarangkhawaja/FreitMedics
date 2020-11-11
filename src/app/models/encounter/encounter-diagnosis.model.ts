import { DiagnosisType } from "src/app/shared/constants/diagnosis-type.enum";

export class EncounterDiagnosisModel {
    id: number;
    name: string;
    code: string;
    type: DiagnosisType;
    isEditable: boolean;
    isPrincipal: boolean;
}