import { Facility } from "./facility.model";
import { City } from "./city.model";
import { Country } from "../settings/country.model";
import { ModuleModel } from "../module/module.model";


export class FacilityLocation {
    userId?: number
    id?: number;
    name?: string;
    phoneNumber?: string;
    phoneCode?: string;
    email?: string;
    address?: string;
    description?: string;
    facilityType?: string;
    facility?: Facility;
    city?: City;
    country?: Country;
    taxRate?: number;
    userRoles: string[];
    modules: ModuleModel[];
    license: string;

    constructor() {
        this.city = new City();
        this.userRoles = [];
    }

}