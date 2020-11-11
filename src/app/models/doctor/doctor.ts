import { UtilityModel } from "../utility/utility.model"

export class Doctor {
    id: number
    fullName?: string
    photo?: string
    designation?: string
    rating?: number
    consultancyFee?: number
    speciality?: UtilityModel
    approvalStatus?: string
    gender?: string
    dateOfBirth?: string
    age?: number
    email?: string
    phoneCode?: string
    phoneNumber?: string
    reviewCount?: number
    nationality?: UtilityModel
    languages?: UtilityModel[]
    summary?: string;
    license?: string;
}
