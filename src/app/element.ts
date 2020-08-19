import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

export class Element {
    atomicNumber: number;
    name: string;
    symbol: string;
    atomicMass: number;
    standardPhase:string;
    constructor(AtomicNumber:number,Name:string,Symbol: string,AtomicMass:number,StandardPhase:string){
        this.atomicNumber = AtomicNumber;
        this.name = Name;
        // this.symbol = 'x';
        this.symbol = Symbol;
        this.atomicMass = AtomicMass;
        this.standardPhase = StandardPhase;

    }
}
