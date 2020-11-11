import { UtilityType } from "src/app/shared/constants/utility-type.enum";


export class FacilityUtilityResponseModel {
    code: string;
    codeType: string;
    id: number;
    utilityType: UtilityType;
    utilityName: string;
}