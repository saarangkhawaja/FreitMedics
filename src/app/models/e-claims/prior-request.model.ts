import { PriorRequestStatus } from "src/app/shared/constants/prior-request-status.enum"
import { AuthorizationStatus } from "src/app/shared/constants/authorization-status.enum";

export class PriorRequestModel {
  id: number;
  insuranceName: string;
  priorRequestStatus: PriorRequestStatus;
  doctorName: string;
  patientName: string;
  requestTimestamp: string;
  lastPollTime: string;
  responseTimestamp: string;
  authorizationId: string;
  approvalId: string;
  authorizationResponse: AuthorizationStatus;
  failureMessage: string;
}