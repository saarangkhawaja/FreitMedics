import { EncounterDiagnosticModel } from "./encounter-diagnostic.model";
import { FacilityUtilityCodeModel } from "../facility-utility/facility-utility-code.model";
import { FacilityUtilityModel } from "../facility-utility/facility-utility.model";
import { DrugModel } from "../drug/drug.model";

export class EncounterUtilityDataModel {

    encounterDiagnosticModel: EncounterDiagnosticModel;
    facilityUtilityCode: FacilityUtilityCodeModel
    availableUtility: FacilityUtilityModel;
    drug?: DrugModel;
    
    isEditable: boolean;
    isCustom: boolean;
}