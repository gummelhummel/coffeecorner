import { Cup } from './';
export class Junky {
    public name: string;
    private email: string;
    private pin: number;
    public image: string;
    public cups: Cup[];

    constructor(name: string, email: string, pin: number, image: string, cups?: Cup[]) {
        this.name = name;
        this.email = email;
        this.pin = pin;
        this.image = image;
        this.cups = cups ? cups : [];
    }
}
