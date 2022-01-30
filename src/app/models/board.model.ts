export class Board {
    constructor(
public name:string,
public columns: Column[]
    ){}
}

export class Column{
    constructor(
        public name:string,
        public tasks:string[]
    ){}
}
