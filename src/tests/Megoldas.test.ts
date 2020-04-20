import fs from "fs";
import Megoldas from "../Megoldas";

describe("Megoldás osztály unit tesztek", () => {
    const instance: Megoldas = new Megoldas("helsinki.txt");
    it("Megoldas osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Megoldas);
    });
    it("Pontszerző helyezések", async () => {
        expect(instance.pontszerzokSzama).toBe(64);
    });
    it("Olimpiai pontok száma", async () => {
        expect(instance.olimpiaiPontok).toBe(269);
    });
    it("Statisztika", async () => {
        expect(instance.statisztikaArany).toBe(16);
        expect(instance.statisztikaEzust).toBe(10);
        expect(instance.statisztikaBronz).toBe(16);
        expect(instance.statisztikaOssz).toBe(64);
    });
    it("Legtöbb érem", async () => {
        expect(instance.legtobbErem).toBe(1);
    });
    it("helsinki2.txt", async () => {
        instance.fajlbaIras();
        expect(fs.readFileSync("helsinki2.txt").toString()).toBe(fs.readFileSync("helsinki2.txt").toString());
    });
    it("Legtöbb sportoló", async () => {
        expect(instance.legtobbSportolo).toBe(15);
    });
});
