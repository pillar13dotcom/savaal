export class Event {
    name: string;
    description: string;
    eventid?:string;

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
    }
}
