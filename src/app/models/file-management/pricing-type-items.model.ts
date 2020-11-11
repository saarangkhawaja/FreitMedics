import { PricingTypeDropdownModel } from "./pricing-type-dropdown.model";
import { PricingType } from "src/app/shared/constants/pricing-type.enum";

export class PricingTypeItemsModel {
    items: PricingTypeDropdownModel[];

    constructor() {
        this.items = [
            new PricingTypeDropdownModel(PricingType.CASH, 'Cash Pricing'),
            new PricingTypeDropdownModel(PricingType.INSURANCE, 'Insurance Pricing')
        ]
    }
}