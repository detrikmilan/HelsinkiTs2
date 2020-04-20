import fs from "fs";
import http from "http";
import url from "url";
import Megoldas from "./Megoldas";

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");

        res.write("<title>Helsinki 1952</title>");
        res.write("</head>");
        res.write("<body><form><pre class='m-3'>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // 2. feladat: Olvassa  be  a helsinki.txt  állományban  lévő  adatokat  és  tárolja  el  egy  olyan adatszerkezetben, amely a további feladatok megoldására alkalmas! A fájlban legfeljebb 200 sor lehet.
        const megold: Megoldas = new Megoldas("helsinki.txt");

        // 3. feladat: Határozza meg és írja ki a képernyőre a minta szerint, hogy hány pontszerző helyezést értek el a magyar olimpikonok!
        res.write("3.feladat: ");
        res.write(`<p>\tPontszerző helyezések száma:${megold.pontszerzokSzama}</p>`);

        // 4. feladat: Készítsen statisztikát a megszerzett érmek számáról, majd összesítse az érmek számát a minta szerint!
        res.write("4.feladat: ");
        res.write(`<p>\tArany:${megold.statisztikaArany}</p>`);
        res.write(`<p>\tEzüst:${megold.statisztikaEzust}</p>`);
        res.write(`<p>\tBronz:${megold.statisztikaBronz}</p>`);
        res.write(`<p>\tÖsszesen:${megold.statisztikaOssz}</p>`);

        // 5. feladat: Az  olimpián  az  országokat  az  elért  eredményeik  alapján  rangsorolják.  Az  1−6. helyezéseket olimpiai pontokra váltják, és ezt összegzik. Határozza meg és írja ki a minta szerint az elért olimpiai pontok összegét az alábbi táblázat segítségével!
        res.write("5.feladat: ");
        res.write(`<p>\tOlimpiai pontok száma:${megold.olimpiaiPontok}</p>`);

        // 6. feladat: Az  úszás  és  a  torna  sportágakban  világversenyeken  mindig  jól  szerepeltek  a  magyar sportolók. Határozza meg és írja ki a minta szerint, hogy az 1952-es nyári olimpián melyik sportágban  szereztek  több  érmet  a  sportolók!  Ha  az  érmek  száma egyenlő,  akkor  az „Egyenlő volt az érmek száma” felirat jelenjen meg!
        res.write("6.feladat: ");
        res.write(`<p>\tTöbb érmet szerzett:${megold.legtobbErem}</p>`);

        // 7. feladat: A helsinki.txt  állományba  hibásan,  egybeírva  „kajakkenu”  került  a  kajak-kenu sportág neve. Készítsen szöveges állományt helsinki2.txt néven, amelybe helyesen, kötőjellel  kerül  a  sportág  neve!  Az  új  állomány  tartalmazzon  minden  helyezést  a forrásállományból, a sportágak neve elé kerüljön be a megszerzett olimpiai pont is a minta szerint! A sorokban az adatokat szóközzel válassza el egymástól!
        megold.fajlbaIras;

        // 8. feladat: Határozza meg, hogy melyik pontszerző helyezéshez fűződik a legtöbb sportoló! Írja ki a minta  szerint  a  helyezést,  a  sportágat,  a  versenyszámot  és  a  sportolók  számát! Feltételezheti, hogy nem alakult ki holtverseny.
        res.write("8.feladat: ");
        res.write(`<p>\tSportolók száma:${megold.legtobbSportolo}</p>`);
        res.write("</pre></form></body></html>");
        res.end();
    }
}
