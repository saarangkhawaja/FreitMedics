import { FacilityLocation } from "../settings/facility-location.model";

export class Facility {
    id: number;
    facilityLocations: FacilityLocation[];
    name?: string;
    email?: string;
    phoneNumber?: string;
    phoneCode?: string;
    mrnPrefix: string
    isFacilityLogoUploaded: boolean;

    constructor() {
        this.facilityLocations = [];
    }
}
