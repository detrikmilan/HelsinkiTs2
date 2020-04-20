import fs from "fs";
import Helsinki from "./Helsinki";

export default class Megoldas {
    private versenyek: Helsinki[] = [];

    constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor = i.trim();
                if (aktSor.length > 0) this.versenyek.push(new Helsinki(aktSor));
            });
    }

    public get pontszerzokSzama(): number {
        let db = 0;
        for (const i of this.versenyek) {
            db++;
        }
        return db;
    }

    public get statisztikaArany(): number {
        let arany = 0;
        for (const i of this.versenyek) {
            if (i.helyezes == 1) {
                arany++;
            }
        }
        return arany;
    }
    public get statisztikaEzust(): number {
        let ezust = 0;
        for (const i of this.versenyek) {
            if (i.helyezes == 2) {
                ezust++;
            }
        }
        return ezust;
    }
    public get statisztikaBronz(): number {
        let bronz = 0;
        for (const i of this.versenyek) {
            if (i.helyezes == 3) {
                bronz++;
            }
        }
        return bronz;
    }
    public get statisztikaOssz(): number {
        let db = 0;
        for (const i of this.versenyek) {
            if (i.helyezes < 7) {
                db++;
            }
        }
        return db;
    }
    public get olimpiaiPontok(): number {
        let osszpont = 0;
        for (let i = 0; i < this.versenyek.length; i++) {
            const helyezes = this.versenyek[i].helyezes;
            switch (helyezes) {
                case 1:
                    osszpont += 7;
                    break;
                case 2:
                    osszpont += 5;
                    break;
                case 3:
                    osszpont += 4;
                    break;
                case 4:
                    osszpont += 3;
                    break;
                case 5:
                    osszpont += 2;
                    break;
                case 6:
                    osszpont += 1;
                    break;
            }
        }
        return osszpont;
    }

    public get legtobbErem(): number {
        let uszas = 0;
        let torna = 0;
        let ossz = 0;
        for (let i = 0; i < this.versenyek.length; i++) {
            for (const i of this.versenyek) {
                if (i.helyezes < 4 && i.sportag == "uszas") {
                    uszas++;
                }
                if (i.helyezes < 4 && i.sportag == "torna") {
                    torna++;
                }
            }
        }
        if (torna > uszas) {
            ossz++;
        }
        return ossz;
    }
    public fajlbaIras(): void {
        const verseny: string[] = [];
        for (const i of this.versenyek) {
            verseny.push(`${i.helyezes} ${i.sportag} ${i.tagszam} ${i.versenyszam}\n`);
        }
        fs.writeFileSync("helsinki2.txt", verseny.join(""));
    }
    public get legtobbSportolo(): number {
        let maxVersenyzo = this.versenyek[0].tagszam;
        for (const i of this.versenyek) {
            if (i.tagszam > maxVersenyzo) {
                maxVersenyzo = i.tagszam;
            }
        }
        return maxVersenyzo;
    }
}
