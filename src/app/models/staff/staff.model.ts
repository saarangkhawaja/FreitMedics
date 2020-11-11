import { StaffUser } from 'src/app/models/staff/staff-user.model'
import { FacilityLocation } from '../settings/facility-location.model'


export class staffProfile{
	user: StaffUser;
	userRoles:string[];
}
export class Staff {

	profile:staffProfile
	facility: {
        id: number
    }
	facilityLocations: FacilityLocation[]

	constructor(){
		this.profile=new staffProfile();
	}
}
