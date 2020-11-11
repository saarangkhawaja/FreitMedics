import { DiscountType } from "src/app/shared/constants/discount-type.enum"

export class BillRecord {
    id?: number
    totalGrossFee: number
    paymentType: string
    discountType: DiscountType
    totalDiscount: number
    totalNetFee: number
    totalTax: number
    totalInsuranceCoverage: number
    totalCustomerCoverage: number
    totalPayableFee: number

    constructor(){
        this.totalCustomerCoverage=0
        this.totalDiscount=0
        this.totalGrossFee=0
        this.totalNetFee=0
        this.totalTax=0
        this.totalPayableFee=0
        this.totalInsuranceCoverage=0
    }
}
