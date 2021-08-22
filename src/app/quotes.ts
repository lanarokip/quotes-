export class Quotes {
    showDetails!: boolean;
    constructor(public genre:string, public author:string, public body:string,public description:string , public datepublished:Date){
        this. showDetails = false;
    }

}