import { ClaimStatus } from "src/app/shared/constants/claim-status.enum"
import { AuthorizationStatus } from "src/app/shared/constants/authorization-status.enum";

export class ClaimModel {
  id: number;
  appointmentTimeStamp: string;
  claimStatus: ClaimStatus;
  doctorName: string;
  insuranceName: string;
  insuranceShare: number;
  patientName: string;
  requestTimestamp: string;
  authorizationResponse: AuthorizationStatus;
}
