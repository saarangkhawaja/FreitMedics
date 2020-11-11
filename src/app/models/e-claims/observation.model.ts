import { ObservationType } from "src/app/shared/constants/observation-type.enum"

export class ObservationModel {
  id: number;
  type: ObservationType;
  patientName: string;
  doctorName: string;
  appointmentTimestamp: string;
  chiefComplaint: string;
}
