export class Pagination {
    pageNumber: number;
    pageSize: number;
    maxSize: number;
    totalElements: number;
    totalPages: number;

    constructor(pageNumber: number, pageSize: number) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.maxSize = 10;
    }
}