import { FacilityUtilityCodeModel } from "../facility-utility/facility-utility-code.model";

export class ActivityModel {
  activityId: number;
  facilityUtilityCode: FacilityUtilityCodeModel;
  authorizationResult: boolean;
  denialCode: string;
  grossFee: number;
  patientShare: number;
  insuranceShare: number;
  skipFromPriorRequest: boolean;
  skipFromClaimSubmission: boolean;
}