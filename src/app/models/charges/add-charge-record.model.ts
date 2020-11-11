export class AddChargeRecordModel {
  facilityUtilityId: number;
  quantity?: number;

  constructor(facilityUtilityId: number) {
    this.facilityUtilityId = facilityUtilityId;
  }
}