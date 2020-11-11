import { PricingConfigModel } from "./pricing-config.model";
import { PricingType } from "src/app/shared/constants/pricing-type.enum";

export class FileUploadModel {
    uploadType?: PricingType;
    cashPricingConfig?: PricingConfigModel;
    insurancePricingConfig?: PricingConfigModel;
}