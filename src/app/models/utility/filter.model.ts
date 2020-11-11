export class FilterModel {
    key: string;
    value: string;
    label: string;
    // isSelected?: boolean;

    constructor(filterName: string, filterLabel: string) {
        this.key = filterName;
        this.label = filterLabel;
    }
}