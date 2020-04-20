import Helsinki from "../Helsinki";

describe("Helsinki osztály unit tesztek:", () => {
    const instance: Helsinki = new Helsinki("1 3 torna talajtorna");
    it("Helsinki osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Helsinki);
    });
    it("Elért helyezés", async () => {
        expect(instance.helyezes).toBe(1);
    });
    it("Csapat létszáma", async () => {
        expect(instance.tagszam).toBe(3);
    });
    it("Sportág neve", async () => {
        expect(instance.sportag).toBe("torna");
    });
    it("Versenyszám neve", async () => {
        expect(instance.versenyszam).toBe("talajtorna");
    });
});
