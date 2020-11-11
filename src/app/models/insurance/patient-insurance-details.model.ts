import { PolicyModel } from "../module/e-claims/policy.model";
import { UtilityModel } from "../utility/utility.model";

export class PatientInsuranceDetailsModel {
  patientId: number;
  insurance: UtilityModel;
  network: string;
  policyNumber: string;
  cardNumber: string;
  expiryDate: string;
  basePolicy: PolicyModel;
  consultationPolicy: PolicyModel;
  dentalPolicy: PolicyModel;

  constructor() {
    this.basePolicy = new PolicyModel();
    this.consultationPolicy = new PolicyModel();
    this.dentalPolicy = new PolicyModel();
  }
}