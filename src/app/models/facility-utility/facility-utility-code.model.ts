import { UtilityType } from "src/app/shared/constants/utility-type.enum";
import { EncounterDiagnosticModel } from "../encounter/encounter-diagnostic.model";


export class FacilityUtilityCodeModel {
    id: number;
    code: string;
    codeType: string;
    utilityName: string;
    utilityType: UtilityType;

    constructor(encounterDiagnosticModel?: EncounterDiagnosticModel) {
        this.id = encounterDiagnosticModel?.id;
        this.code = encounterDiagnosticModel?.code;
        this.codeType = encounterDiagnosticModel?.codeType;
        this.utilityName = encounterDiagnosticModel?.name;
    }
}