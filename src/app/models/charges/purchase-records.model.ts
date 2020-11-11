import { PurchaseRecord } from "./purchase-record.model";

export class PRecord {
    edit: boolean;
    discount: number;
    coPay: number;
    quantity: number;
    grossFee: number;
    isCustom: boolean;
    isAvailable: boolean;
    purchaseRecord: PurchaseRecord;

    constructor() {
        this.edit = false;
        this.discount = 0;
        this.coPay = 0;
        this.quantity = 1;
        this.grossFee = 0;
        this.isCustom = false;
        this.isAvailable = false;
    }
}




export class PurchaseRecords {
    purchaseRecord: PurchaseRecord;
    facilityUtilityType: string;
    facilityUtilityName: string;
    constructor() {

        this.purchaseRecord = new PurchaseRecord()
    }
}
