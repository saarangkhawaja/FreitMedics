export class Listing {
    content: any[]
    pageable: string
    totalPages: number
    last: boolean
    totalElements: number
    sort: {
        unsorted: boolean,
        sorted: boolean,
        empty: boolean
    }
    numberOfElements: number
    first: boolean
    size: number
    number: number
    empty: boolean

    constructor(){
        this.content=[]
    }
}
