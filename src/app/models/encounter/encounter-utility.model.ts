import { UtilityType } from "src/app/shared/constants/utility-type.enum";
import { EncounterDiagnosticModel } from "./encounter-diagnostic.model";

// Think of better name
export class EncounterUtilityModel {
    availableDiagnostics: EncounterDiagnosticModel[];
    customDiagnostics: EncounterDiagnosticModel[];
    type: UtilityType;
}