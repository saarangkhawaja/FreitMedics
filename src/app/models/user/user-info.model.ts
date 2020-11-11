import { User } from "./user.model";
import { FacilityLocation } from "../settings/facility-location.model";

export class UserInfo {
    user: User;
    currentLocation: FacilityLocation;
    currentUserRole: string;
    currentMrnPrefix: string;
}