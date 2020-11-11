import { FileMappingModel } from "./file-mapping.model";

export class PricingConfigModel {
    facilityLocationId: number;
    insuranceId: number;
    mappings: FileMappingModel;
}