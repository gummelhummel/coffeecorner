export class Junky {
    public name: string;
    private email: string;
    public score: number;
    private pin: number;

    constructor(name: string, score: number, email: string) {
        this.name = name;
        this.score = score;
        this.email = email;
    }
}
