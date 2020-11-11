import { FacilityUtilityCodeModel } from "../facility-utility/facility-utility-code.model";
import { FileMetadataBasicModel } from "../file-management/file-metadata-basic.model";
import { InsuranceBasicModel } from "../insurance/insurance-basic.model";

export class FacilityInsurancePricingModel {
    id: number;
    grossFee: number;
    isTaxable: boolean;
    file: FileMetadataBasicModel;
    facilityUtilityCode: FacilityUtilityCodeModel;
    insurance: InsuranceBasicModel;
    requiresPriorRequest: boolean;
    facilityLocationId: number;

    // for angular animation
    showInfo: boolean;

    constructor() {
    }
}