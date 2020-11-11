import { UtilityConstants } from "src/app/shared/constants/utility.constants";
import { FacilityUtilityCodeModel } from "../facility-utility/facility-utility-code.model";

export class PurchaseRecord {
    id: number;
    grossFee: number = 0;
    netFee: number = 0;
    discount: number = 0;
    tax: number = 0;
    insuranceCoverage: number = 0;
    customerCoverage: number = 0;
    payableFee: number = 0;
    quantity: number = 1;
    unitPrice: number = 0;
    facilityUtilityName?: string;
    facilityUtilitySubType?: UtilityConstants;
    facilityUtilityType?: string;
    facilityUtilityCode?: FacilityUtilityCodeModel;
    isCustomRecord?: boolean;
    adjustment: number;    //for bill adjustment
    isTaxable: boolean

}
