import { BillRecord } from "./bill-record.model";
import { PurchaseRecord } from "./purchase-record.model";

export class InvoiceModel { 
    bill: BillRecord;
    records: PurchaseRecord[]
}