import { DrugModel } from "../drug/drug.model";

export class EncounterDiagnosticModel {
    id: number;
    code: string;
    codeType: string;
    name: string;
    drug: DrugModel;

    EncounterDiagnosticModel() {
        this.name = name;
    }
}