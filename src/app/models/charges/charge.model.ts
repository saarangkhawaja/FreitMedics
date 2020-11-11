export class Charge {
    id: number;
    billDate: Date;
    payableFee: number;
    patientId?: number;
    patientName: string;
    doctorName: string;
    chiefComplaint: string;
    paymentStatus: boolean;
    appointmentId: number;
}
