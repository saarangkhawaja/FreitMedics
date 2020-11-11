import { Patient } from "./patient.model";
import { Doctor } from "../doctor/doctor";
import { Encounter } from "../encounter/encounter.model";

export class PatientList {
    patient: Patient;
    doctor?: Doctor;
    appointment?: Encounter
    patientFacilityMapping?: boolean
    isEditable?: boolean;

    constructor(age: string, email: string, gender: string, id: number, medicalRecordNumber: number,
        name: string, phoneCode: string, phoneNumber: string, profileStatus: string, socialSecurityNumber: string,
        type: string) {
        this.patient = new Patient(age, email, gender, id, `medicalRecordNumber-${medicalRecordNumber}`, name, phoneCode, phoneNumber,
            profileStatus, socialSecurityNumber, type);

    }
}