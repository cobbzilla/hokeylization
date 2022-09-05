Hokeylizálás
 =============
 Miért nem futtathatom a teljes alkalmazásomat vagy webhelyemet a Google Fordítón keresztül, és miért nem tudok egy másik nyelvre fordítani?

 ***Most már tudod!***

 A `hokeylization` név egy portmanteau, jelentése "hokey lokalizáció"

 Ez kissé hokey, mert nagyon egyszerű: karakterláncokat küld a Google Fordítónak

 És ez egyszerű, ugyanakkor nagyon erős. Speciálisan támogatja a HTML dokumentumokat,
 [HandlebarsJS](https://handlebarsjs.com/) sablonok,
 és [Markdown](https://daringfireball.net/projects/markdown) fájlokat.

 Lefordíthatod:
 * üzeneteket tartalmazó JavaScript objektum
 * tetszőleges számú fájl vagy könyvtár, mindig rekurzívan bejárva a könyvtárakat

 # Olvassa el ezt egy másik nyelven
 Ezt a README.md dokumentumot maga a hokeylization eszköz segítségével fordították le
 **[a Google Fordító által támogatott minden nyelv](https://cloud.google.com/translate/docs/languages)!**

 Biztos vagyok benne, hogy nem tökéletes, de remélem, jobb a semminél!

 [🇸🇦 arab](../ar/README.md)
 [🇧🇩 bengáli](../bn/README.md)
 [🇩🇪 német](../de/README.md)
 [🇺🇸 angol](../en/README.md)
 [🇪🇸 spanyol](../es/README.md)
 [🇫🇷 francia](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonéz](../id/README.md)
 [🇮🇹 olasz](../it/README.md)
 [🇯🇵 japán](../ja/README.md)
 [🇰🇷 koreai](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 lengyel](../pl/README.md)
 [🇧🇷 portugál](../pt/README.md)
 [🇷🇺 orosz](../ru/README.md)
 [🇰🇪 szuahéli](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 török](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vietnami](../vi/README.md)
 [🇨🇳 kínai](../zh/README.md)


 **[📚 ... Minden nyelv ...](../README.md)**
 ----

 ### Probléma van a README fordításával?
 Az eredeti [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md) konkrét fordítása
 hibás lehet -- *a javításokat nagyon szívesen fogadjuk!* Kérjük, küldjön [lehívási kérelmet a GitHubon](https://github.com/cobbzilla/hokeylization/pulls),
 vagy ha nem érzi jól magát, [nyisson meg egy problémát](https://github.com/cobbzilla/hokeylization/issues)

 Amikor új GitHub-kiadást hoz létre egy fordítással kapcsolatban, tegye a következőket:
 * tartalmazza az oldal URL-jét (másolás/beillesztés a böngésző címsorából)
 * Pontosan adja meg a hibás szöveget (másolás/beillesztés a böngészőből)
 * Kérem írja le, mi a hiba -- hibás a fordítás? elromlott valahogy a formázás?
 * Kérem, tegyen javaslatot jobb fordításra, vagy a szöveg helyes formázására
 * **Köszönöm!**

 # Tartalom
 * [Forrás](#Forrás)
 * [Támogatás és finanszírozás](#Support-and-Funding)
 * [Telepítés](#Telepítés)
 * [Beállítás](#Beállítás)
 * [JavaScript karakterlánc-erőforrásfájl fordítása](#Translating-a-JavaScript-string-resource-file)
 * [Szövegfájlok könyvtárának fordítása](#Translating-a-directory-of-text-files)
 * [Egyéb opciók](#Other-options)
 * [JSON kötegelt parancsok](#JSON-batch-commands)

 ## Forrás
 * [hokeylization a GitHubon](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Támogatás és finanszírozás
 Megpróbálok professzionális nyílt forráskódú szoftverfejlesztő lenni. ben dolgoztam
 A szoftveriparban évek óta sikeres cégeket alapítottam, amelyeket állami cégeknek adtam el.
 Nemrég elvesztettem a munkámat, és nem igazán van más dolgom

 Tehát megpróbálok hasznos szoftvereket írni, és megnézem, működik-e

 Őszintén hálás lennék a legkisebb [havi hozzájárulásért is a Patreonon keresztül](https://www.patreon.com/cobbzilla)

 ## Telepítés
 A parancssori eszköz használatához telepítse az `npm` " vagy a `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Könyvtárként való használathoz telepítse a `lite` verziót, amely sokkal kisebb:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Ezután nézze meg a `hokey` parancs súgóját:

    hokey --help
    hokey -h

 Szeretné látni a kimenetet az Ön nyelvén vagy más nyelven?

 `hokey` megpróbálja automatikusan felismerni a nyelvet a shell környezeti változóiból

 A nyelvet az `LC_ALL` környezeti változó beállításával kényszerítheti ki:

    LC_ALL=it hokey --help

 Vegye figyelembe, hogy ha telepítette a `hokeylization-lite` , a parancssúgó csak angol nyelven érhető el

 ## Beállít
 Állítsa be a `GOOGLE_TRANSLATE_PROJECT_ID` környezeti változót a Google Fordító-projekt azonosításához

 Állítsa be a `GOOGLE_APPLICATION_CREDENTIALS` környezeti változót a letöltött JSON hitelesítő adatokra
 miután rájött, hogyan működik a hitelesítés a Google felhőben (mókás lehet)

 Ha a forráskódból fut, ezeket egy `.env` fájlba is elhelyezheti a forrásban
 könyvtárba töltődnek be futás közben a [dotenv]-en keresztül (https://www.npmjs.com/package/dotenv)

 ## JavaScript karakterlánc-erőforrásfájl fordítása
 A karakterlánc-táblázatnak JavaScript-fájlban kell lennie, az alábbi két formátum egyikében:

 ES6 export:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS export

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ha ennek a fájlnak a neve `myfile.en.js` , akkor lefordíthatja spanyolra és németre a következőkkel:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 A fentiekben szereplő `LANG` különleges – ez egy fenntartott szó ebben az eszközben!

 A `LANG` helyére a kimeneti fájlok nyelvi kódja lép

 Így a fenti parancs létrehozza a fájlokat:

    myfile.es.js
    myfile.de.js

 A "-l" / `--languages` `-l` " opció az ISO nyelvkódok vesszővel elválasztott listája
 [a Google Fordító által támogatott](https://cloud.google.com/translate/docs/languages)

 Ha a kimeneti fájl már létezik, a rendszer megvizsgálja, hogy mely kulcsok léteznek már.
 A meglévő kulcsokat nem fordítjuk le. A program a hiányzó kulcsok fordításait generálja és hozzáfűzi
 a JS objektum végére. A teljes fájl mindig újraírásra kerül.

 Az összes billentyű újrafordításának kényszerítéséhez használja a `-f` " / `--force` opciót

 ## Szövegfájlok könyvtárának fordítása
 A fájlok könyvtárát is lefordíthatja. hokeylization rekurzívan meglátogat minden
 fájlt a könyvtárba, és futtassa a tartalmát a Google Fordítón keresztül, majd mentse a kimenetet
 egy azonos nevű fájlba egy külön könyvtárfában

 Ha a fordítás célja egy könyvtár, ez a mód engedélyezve van

 A `-o` / `--outfile` opció határozza meg a kimeneti könyvtárat

 **NAGY FIGYELMEZTETÉS**: Könyvtárak fordításakor **NE** adjon meg kimeneti könyvtárat
 amely a bemeneti könyvtárában van! Ha ezt megteszi, akkor:
 * végtelen rekurziót indukál
 * állítsa be a Google számláját
 * töltse fel a lemezt
 * kevésbé szórakozik

 Íme egy példa arra, hogy *mit ne tegyünk*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Amikor ez fut, a lefordított fájlok a `templates/es` , és így újakká válnak
 lefordítandó forrásfájlokat, mivel ezek a `templates/` alatt vannak -- ez a folyamat folytatódik
 örökké, ne csináld!

 #### Helyes használat
 Rendben, tegyük fel, hogy van néhány e-mail sablon egy címtárban:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Ha mindezt spanyolra és németre szeretné lefordítani, futtassa:

    hokey -l es,de -o templates/email/LANG templates/email/en

 A fentiekben a `LANG` " egy fenntartott szó, és az ISO nyelvi kód váltja fel

 Mi történik, ha a fenti fut:
 * A `templates/email/es` " és a `templates/email/de` könyvtárak létrejönnek (ha nem léteznek)
 * A `templates/email/en` minden fájl spanyol és német nyelvre lesz fordítva
 * A meglévő kimeneti fájlok nem generálódnak újra, hacsak nem használod a `-f` " / `--force`
 * A végén azonos könyvtárszerkezetet és fájlokat fog kapni az `es` és `de` , mint az `en`

 ## Egyéb opciók

 ### Szárazon futás
 Adja át a `-n` / `--dry-run` , hogy megjelenítse, mi történik, de valójában ne kezdeményezzen API-hívásokat és ne írjon fájlokat

 ### Kényszerítés
 Adja át a `-f` / `--force` a fordítások újragenerálásához, még akkor is, ha már léteznek

 ### Mérkőzés
 Adja át a `-m` / `--match` , hogy korlátozza a feldolgozott fájlok számát, ha könyvtár módban fut

 Előfordulhat, hogy nem mindig akarja lefordítani a forráskönyvtár *minden* fájlját a célkönyvtárba

 A `-m` / `--match` opció értéke egy regex (vigyázz a shell idézési szabályokra!), amely meghatározza
 mely fájlokat kell lefordítani

 Ha kétségei vannak, kombinálhatja ezt az opciót az `-n` / `--dry-run` , hogy megtudja, mely fájlok lesznek lefordítva

 ### Kizárva
 Néha a `-m` túl sok fájlnak felel meg. Az explicit kizáráshoz használja a `-e` / `--excludes` opciót
 fájlokat, amelyek egyébként megegyeztek volna

 Több regexet is felsorolhat, szóközökkel elválasztva

 Egy általános használat a következő lenne: `--excludes node_modules dist \.git build tmp`

 ### Kormány
 A lefordítandó karakterláncok tartalmazhatnak `{{ handlebars }}` sablonokat, két vagy három kapcsos kapcsos zárójellel

 Valószínűleg *NEM* szeretnéd, hogy a sablonokban lévő tartalmat lefordítsák

 Adja át a `-H` / `--handlebars` jelzőt, és a `{{ ... }}` kifejezésen belüli elemek nem lesznek lefordítva

 ### Markdown
 A Markdown se nem szöveg, se nem html, így a Google Fordítónak vannak nehézségei vele

 A `-M` / `--markdown` jelző lehetővé teszi a leértékelési fájlok speciális kezelését

 A markdown fájloknál, ha nem használja az `-M` jelzőt, valószínűleg a következő problémákat fogja találni:
 * Törött linkek. A fordításban egy szóköz jelenik meg a lejelölő hivatkozás leírása után (a `]` karakterrel), de
 mielőtt a célhivatkozás elkezdődne ( `(` ). Ez azt okozza, hogy a leértékelés helytelenül jelenik meg, és a link
 elromlik a dokumentum megtekintésekor.
 * A kódblokkokat lefordítják. A Google fordító nem tudja, hogy a leértékelés mit tekint kódnak és mit nem
 * Helytelen térköz a behúzott kódblokkoknál. A szóközt nehéz megőrizni a fordításban
 * A `backticks` belüli dolgokat a rendszer lefordítja, ha szinte mindig azt szeretné, hogy azok szó szerinti értékek legyenek

 Ha a `-M` / `--markdown` jelző engedélyezve van:
 * A `](` minta `](` `](` tömörítve ezzel javítva a hibás leíró hivatkozásokat
 * A behúzott kódblokkok köré "nincs fordítás" burkoló kerül elhelyezésre, amely megőrzi a megfelelő behúzást, és biztosítja, hogy ne legyenek lefordítva.
 * A „fordítás nélkül” burkoló a `backticks` belüli szöveg körül lesz elhelyezve annak biztosítására, hogy ne legyenek lefordítva.

 ### Process-as
 Általában mindent egyszerű szövegként dolgoz fel

 Ha a tartalom HTML, akkor összekeveredik, hacsak nem adja át a `-p html` " / `--process-as html` opciót

 ### Szűrő
 Kalandosoknak: ha egy könyvtárban lévő fájlokat dolgoz fel, átadhatja a `-F` " / `--filter` opciót
 a kimenet szűrésére, mielőtt a fájlrendszerbe írná

 A beállítás értékének egy olyan JS-fájl elérési útját kell megadnia, amely a `filter` nevű függvényt exportálja

 A `filter` függvénynek `async` "-nek kell lennie, mert a `await` kerül

 Mielőtt a fájlokat lemezre írnák, a teljes fájltartalom `filter` funkcióhoz

 A `filter` függvény visszatérési értéke az, ami ténylegesen a tárolóba kerül

 Így teljes ellenőrzése alatt áll, hogy végül mi kerül megírásra

 ### Segítség
 Használja a `-h` / `--help` a súgó megjelenítéséhez

 ## JSON kötegelt parancsok
 A `-j` / `--json` opcióval több koordinált `hokey` parancsot futtathat

 Megállapodás szerint ezt a fájlt `hokey.json` hívják, de tetszés szerint nevezheti el

 Ha egy könyvtárat ad meg "-j" opcióként, a `hokey` `-j` " a " `hokey.json` " fájlt keresi abban a könyvtárban

 A JSON-fájlnak egy objektumot kell tartalmaznia. Ezen az objektumon belül a tulajdonságnevei megegyeznek a
 a parancssori opciókat, plusz egy további, `hokey` nevű tulajdonságot

 A `hokey` tulajdonság a futtatandó parancsok tömbje. Az ezekben a parancsokban deklarált tulajdonságok
 felülírja a duplikált deklarációkat a külső objektumban.

 A `hokey` tömb minden objektumán belül meg kell adnia egy "nevet `name` és a bemeneti és kimeneti fájlokat

 Íme egy példa a `hokey.json`

    {
        "inputLanguage": "en",
        "languages": "es,fr,ja", # can also be an array of strings
        "force": false,
        "match": null,
        "processAs": null,
        "excludes": ["exclude-1", "exclude-2"],
        "handlebars": false,
        "markdown": false,
        "regular": false,
        "dryRun": false,
        "filter": "theFilter.js",
        "hokey": [
          {
            "name": "locale names",
            "infile": "messages/locales_en.js",
            "outfile": "messages/locales_LANG.js",
            "handlebars": true
          },
          {
            "name": "CLI messages",
            "infile": "messages/en_messages.js",
            "outfile": "messages/LANG_messages.js",
            "handlebars": true
          },
          {
            "name": "README",
            "infile": "README.md",
            "outfile": "lang/LANG/",
            "excludes": ["lang/", "node_modules/", "\\.git/", "tmp/"],
            "filter": "util/filterReadme.js",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Több bemeneti fájl
 Adja meg a fájl elérési útjainak `infiles` egyetlen elérési út helyett `infile` , mint ebben a példában:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indexek
 Ha sok nyelvre fordít, a `hokey` létrehozhat egy indexfájlt, amely felsorolja az összes fordítást
 és linkeket biztosít hozzájuk

 *Indexek generálásakor csak egy bemeneti forrás lehet*

 Adja meg az `-I` / `--index` opciót, az érték az, ahol az indexfájl létrejön, amely lehet egy fájl
 vagy egy könyvtárat. Ha ez egy könyvtár, akkor a sablon alapján egy alapértelmezett fájlnevet használunk (lásd alább)

 A `-A` / `--index-template` segítségével határozza meg az indexkimenet formázását. Megadhatja a 'html'-t,
 „markdown”, „text” vagy a fájl elérési útja a saját [HandlebarsJS](https://handlebarsjs.com/) sablonjához

 Ha saját sablont ad meg, akkor egy fájlt (nem egy könyvtárat) is meg kell adnia az `-I` " / `--index`
 választási lehetőség

 ## Jó szórakozást a nyelvek fordításához!

</pre>
