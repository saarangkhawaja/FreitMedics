export class Sort {
    sortDirection: string;
    sortField: string;


    constructor(sortDirection?: string, sortField?: string) {
        if (sortDirection) this.sortDirection = sortDirection;
        if (sortField) this.sortField = sortField
    }
}