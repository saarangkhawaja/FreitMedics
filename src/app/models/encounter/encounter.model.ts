export class Encounter {
    id?: number
    patientId?: number
    patientName?: string
    patientAge?: number
    patientPhoneNumber?: string
    patientPhoneCode?: string
    appointmentId?: number
    appointmentTimestamp?: string
    chiefComplaint: string
    appointmentStatus?: string
    status?: string
    doctorName?: string
    patientFacilityMapping?: boolean
    patientDateOfBirth?: string
}
