import { Days } from "src/app/shared/constants/days.enum";

export class DoctorTiming {
    id?:number;
    day: Days;
    startTime: string;
    endTime: string;
    timePerSlot: number;
}
