import { Facility } from "../facility/facility";

export class User {
    userId?: number;
    doctorId?: number
    email: string;
    password: string;
    facilityLocationId?: number;
    phoneNumber?: string;
    phoneCode?: string;
    fullName?: string;
    isApproved?: boolean;
    isDemoAccount?: boolean;

    facilities?: Facility[]

    constructor() {
        this.facilities = []
    }



}
