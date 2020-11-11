import { UtilityType } from "src/app/shared/constants/utility-type.enum";
import { UtilityConstants } from "src/app/shared/constants/utility.constants";
import { DrugModel } from "../drug/drug.model";
import { FacilityUtilityCodeModel } from "./facility-utility-code.model"


export class FacilityUtilityModel {
    id: number;
    facilityUtilityCode: FacilityUtilityCodeModel;
    grossFee: number;
    utilitySubType?: UtilityConstants;
    sku?: string;
    stock?: number;
    costFee?: number;
    isTaxable: boolean;
    doctorName?: string;
    drug?: DrugModel;
    isConsultancyService?: boolean;

    // For Drug handling
    utilityType?: UtilityType;

    FacilityUtilityModel(utilityName: string) {
        this.facilityUtilityCode.utilityName = utilityName;
    }
}