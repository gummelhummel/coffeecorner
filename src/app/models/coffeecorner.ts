import { Junky } from './';
export class Coffeecorner {
    public name: string;
    public price: number;
    private junkys: Junky[];

    constructor(name: string, price: number, junkys?: Junky[]) {
        this.name = name;
        this.price = price;
        if (junkys) this.junkys = junkys;
        else this.junkys = [];
    }

    addJunky(junky: Junky) {
        this.junkys.push(junky);
    }

    removeJunky(junkyToRemove: Junky): boolean {
        if (junkyToRemove.score == 0) {
            let index = this.junkys.findIndex((junky) => { return junky == junkyToRemove });
            this.junkys.splice(index, 1);
            return true;
        }
        return false;
    }

    findJunky(junkyToFind: Junky): Junky {
        return this.junkys.find((junky) => { return junky == junkyToFind; })
    }
}
