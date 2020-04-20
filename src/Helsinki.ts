export default class Helsinki {
    private _helyezes: number;
    private _tagszam: number;
    private _sportag: string;
    private _versenyszam: string;
    private _pontokszama: number;

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this._helyezes = parseInt(m[0]);
        this._tagszam = parseInt(m[1]);
        this._sportag = m[2];
        this._versenyszam = m[3];
        this._pontokszama = this.pontokszama(this._helyezes);
    }

    public get helyezes(): number {
        return this._helyezes;
    }

    public get tagszam(): number {
        return this._tagszam;
    }

    public get sportag(): string {
        return this._sportag;
    }

    public get versenyszam(): string {
        return this._versenyszam;
    }
    public pontokszama(helyezes: number): number {
        let pontszam = 0;
        if (helyezes == 1) {
            pontszam = 7;
        } else if (helyezes == 2) {
            pontszam = 5;
        } else if (helyezes == 3) {
            pontszam = 4;
        } else if (helyezes == 4) {
            pontszam = 3;
        } else if (helyezes == 5) {
            pontszam = 2;
        } else if (helyezes == 6) {
            pontszam = 1;
        }
        return pontszam;
    }
}
