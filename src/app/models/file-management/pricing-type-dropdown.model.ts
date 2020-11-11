import { PricingType } from "src/app/shared/constants/pricing-type.enum";

export class PricingTypeDropdownModel {
    pricingType: PricingType;
    label: string;

    constructor(pricingType: PricingType, label: string) {
        this.pricingType = pricingType;
        this.label = label;
    }
}