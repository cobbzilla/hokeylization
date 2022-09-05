Hokeylizácia
 ==============
 Prečo nemôžem spustiť celú svoju aplikáciu alebo web cez Google Translate a získať základný preklad do iného jazyka?

 ***Teraz môžeš!***

 Názov `hokeylization` je portmanteau, čo znamená „hokey lokalizácia“

 Je to trochu šialené, pretože je to veľmi jednoduché: posiela reťazce do Google Translate

 A je to jednoduché, no zároveň veľmi výkonné. Má špeciálnu podporu pre HTML dokumenty,
 [HandlebarsJS](https://handlebarsjs.com/) šablóny,
 a súbory [Markdown](https://daringfireball.net/projects/markdown).

 Môžete preložiť:
 * objekt JavaScript obsahujúci správy
 * ľubovoľný počet súborov alebo adresárov, vždy prechádzajúce adresármi rekurzívne

 # Prečítajte si to v inom jazyku
 Tento dokument README.md bol preložený pomocou samotného nástroja na hokeyylizáciu
 **[každý jazyk podporovaný Prekladačom Google](https://cloud.google.com/translate/docs/languages)!**

 Som si istý, že to nie je dokonalé, ale dúfam, že je to lepšie ako nič!

 [🇸🇦 arabčina](../ar/README.md)
 [🇧🇩 bengálčina](../bn/README.md)
 [🇩🇪 nemčina](../de/README.md)
 [🇺🇸 angličtina](../en/README.md)
 [🇪🇸 španielčina](../es/README.md)
 [🇫🇷 francúzština](../fr/README.md)
 [🇹🇩 hausa](../ha/README.md)
 [🇮🇳 hindčina](../hi/README.md)
 [🇮🇩 indonézština](../id/README.md)
 [🇮🇹 taliančina](../it/README.md)
 [🇯🇵 japončina](../ja/README.md)
 [🇰🇷 kórejčina](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 poľština](../pl/README.md)
 [🇧🇷 portugalčina](../pt/README.md)
 [🇷🇺 ruština](../ru/README.md)
 [🇰🇪 svahilčina](../sw/README.md)
 [🇵🇭 tagalčina](../tl/README.md)
 [🇹🇷 turečtina](../tr/README.md)
 [🇵🇰 urdčina](../ur/README.md)
 [🇻🇳 vietnamčina](../vi/README.md)
 [🇨🇳 čínština](../zh/README.md)


 **[📚 ... Všetky jazyky ...](../README.md)**
 ----

 ### Vyskytol sa problém s týmto prekladom súboru README?
 Tento konkrétny preklad originálu [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 môže byť chybný -- *opravy sú veľmi vítané!* Pošlite [žiadosť o stiahnutie na GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 alebo ak sa vám to nepáči, [otvorte problém](https://github.com/cobbzilla/hokeylization/issues)

 Keď vytvoríte nový problém na GitHub o preklade, postupujte takto:
 * uveďte adresu URL stránky (skopírujte/prilepte z panela s adresou prehliadača)
 * uveďte presný text, ktorý je nesprávny (skopírujte/prilepte z prehliadača)
 * popíšte, čo je nesprávne - je preklad nesprávny? je formátovanie nejako porušené?
 * láskavo ponúknite návrh na lepší preklad alebo ako by mal byť text správne naformátovaný
 * **Ďakujem!**

 # Obsah
 * [Source](#Source)
 * [Support and Funding](#Support-and-Funding)
 * [Inštalácia](#Inštalácia)
 * [Setup](#Setup)
 * [Preklad zdrojového súboru s reťazcom JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Preklad adresára textových súborov](#Translating-a-directory-of-text-files)
 * [Ďalšie možnosti](#Other-options)
 * [dávkové príkazy JSON](#JSON-batch-commands)

 ## Zdroj
 * [hokeylizácia na GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylizácia na npm](https://www.npmjs.com/package/hokeylization)

 ## Podpora a financovanie
 Snažím sa byť profesionálnym vývojárom open source softvéru. Pracoval som v
 v softvérovom priemysle som zakladal úspešné spoločnosti a predal ich verejným spoločnostiam.
 Nedávno som prišiel o prácu a vlastne nemám žiadnu inú prácu

 Takže skúsim napísať užitočný softvér a uvidím, či to funguje

 Úprimne by som ocenil aj ten najmenší [mesačný príspevok cez Patreon](https://www.patreon.com/cobbzilla)

 ## Inštalácia
 Ak chcete použiť nástroj príkazového riadka, nainštalujte pomocou `npm` alebo `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Ak chcete použiť ako knižnicu, nainštalujte si verziu `lite` , ktorá je oveľa menšia:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Potom si pozrite pomoc pre príkaz `hokey` :

    hokey --help
    hokey -h

 Chcete vidieť výstup vo vašom jazyku alebo inom jazyku?

 `hokey` sa pokúša automaticky zistiť jazyk z premenných prostredia vášho shellu

 Jazyk môžete vynútiť nastavením premennej prostredia `LC_ALL` :

    LC_ALL=it hokey --help

 Všimnite si, že ak ste si nainštalovali `hokeylization-lite` , pomoc s príkazmi je dostupná iba v angličtine

 ## Nastaviť
 Nastavte premennú prostredia `GOOGLE_TRANSLATE_PROJECT_ID` na identifikáciu vášho projektu Google Translate

 Nastavte premennú prostredia `GOOGLE_APPLICATION_CREDENTIALS` na poverenia JSON, ktoré ste si stiahli
 po zistení, ako funguje overovanie v cloude Google (môže to byť zábava)

 Ak spúšťate zo zdrojového kódu, môžete ich tiež vložiť do súboru `.env` v zdrojovom kóde
 adresár budú načítané za behu cez [dotenv](https://www.npmjs.com/package/dotenv)

 ## Preklad zdrojového súboru reťazca JavaScript
 Vaša tabuľka reťazcov **musí** byť v súbore JavaScript v jednej z týchto dvoch foriem:

 Export ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Export CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ak bol tento súbor nazvaný `myfile.en.js` , môžete ho preložiť do španielčiny a nemčiny pomocou:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` vo vyššie uvedenom je špeciálne - je to rezervované slovo v tomto nástroji!

 `LANG` sa nahradí kódom jazyka pre výstupné súbory

 Vyššie uvedený príkaz teda vytvorí súbory:

    myfile.es.js
    myfile.de.js

 Možnosť `-l` / `--languages` “ predstavuje zoznam kódov jazykov ISO oddelených čiarkami
 [podporuje Prekladač Google](https://cloud.google.com/translate/docs/languages)

 Ak výstupný súbor už existuje, skontroluje sa, ktoré kľúče už existujú.
 Existujúce kľúče nebudú preložené. Preklady chýbajúcich kľúčov sa vygenerujú a pridajú
 do konca objektu JS. Vždy sa prepíše celý súbor.

 Ak chcete vynútiť opätovný preklad všetkých kľúčov, použite možnosť `-f` / `--force`

 ## Preklad adresára textových súborov
 Môžete tiež preložiť adresár súborov. hokeylizácia rekurzívne navštívi každého
 súbor v adresári a spustite jeho obsah cez Google Translate a uložte výstup
 do identicky pomenovaného súboru v samostatnom strome adresárov

 Ak je cieľom vášho prekladu adresár, tento režim je povolený

 Voľba `-o` / `--outfile` určuje výstupný adresár

 **VEĽKÉ UPOZORNENIE**: Pri preklade adresárov **NEŠpecifikujte** výstupný adresár
 ktorý je vo vašom vstupnom adresári! Ak to urobíte, budete:
 * vyvolať nekonečnú rekurziu
 * spustite svoj účet Google
 * naplňte si disk
 * bavte sa menej

 Tu je príklad toho, čo *nerobiť*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Keď sa to spustí, preložené súbory sa zapíšu do `templates/es` a stanú sa tak novými
 zdrojové súbory na preklad, pretože sú pod `templates/` -- tento proces pokračuje
 navždy, nerob to!

 #### Správne používanie
 OK, povedzme, že máte nejaké e-mailové šablóny v adresári:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Ak chcete všetko preložiť do španielčiny a nemčiny, spustite:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Vo vyššie uvedenom je `LANG` “ vyhradené slovo a bude nahradené kódom jazyka ISO

 Čo sa stane, keď sa spustí vyššie uvedené:
 * Vytvoria sa adresáre `templates/email/es` a `templates/email/de` (ak neexistujú)
 * Každý súbor v `templates/email/en` bude preložený do španielčiny a nemčiny
 * Existujúce výstupné súbory nebudú obnovené, pokiaľ nepoužijete `-f` / `--force`
 * Skončíte s identickou adresárovou štruktúrou a súbormi v rámci `es` a `de` , ako máte pod `en`

 ## Ďalšie možnosti

 ### Chod nasucho
 Odovzdajte `-n` / `--dry-run` , aby ste zobrazili, čo by sa malo urobiť, ale v skutočnosti nevykonávajte žiadne volania API ani nezapisujte žiadne súbory

 ### Sila
 `-f` / `--force` vždy obnovíte preklady, aj keď už existujú

 ### Zápas
 `-m` / `--match` obmedzíte spracovávané súbory pri spustení v adresárovom režime

 Možno nie vždy budete chcieť preložiť *každý* súbor vo vašom zdrojovom adresári do cieľového adresára

 Hodnota možnosti `-m` / `--match` je regulárny výraz (pozor na pravidlá citovania shellu!), ktorý špecifikuje
 ktoré súbory treba preložiť

 Ak máte pochybnosti, môžete túto možnosť skombinovať s `-n` / `--dry-run` , aby ste videli, ktoré súbory budú preložené

 ### Nezahŕňa
 Niekedy sa váš `-m` zhoduje s príliš veľkým počtom súborov. Na explicitné vylúčenie použite možnosť `-e` / `--excludes` .
 súbory, ktoré by sa inak zhodovali

 Môžete uviesť viacero regulárnych výrazov oddelených medzerami

 Bežné použitie by bolo: `--excludes node_modules dist \.git build tmp`

 ### Riadidlá
 Reťazce na preklad môžu obsahovať šablóny `{{ handlebars }}` , buď s dvomi alebo tromi zloženými zátvorkami

 Pravdepodobne *NECHCETE*, aby sa veci v týchto šablónach preložili

 Odovzdajte `-H` / `--handlebars` a čokoľvek v rámci `{{ ... }}` nebude preložené

 ### Markdown
 Markdown nie je ani text, ani html, takže Google Translate má s ním určité problémy

 `-M` / `--markdown` umožňuje špeciálne zaobchádzanie so súbormi značiek

 Ak pri súboroch markdown nepoužijete príznak `-M` , pravdepodobne narazíte na tieto problémy:
 * Nefunkčné odkazy. V preklade sa medzera objaví po ukončení popisu odkazu označenia (s `]` ), ale
 predtým, než sa začne jeho cieľový odkaz (s `(` ). To spôsobí nesprávne vykreslenie označenia a odkazu
 pri prezeraní dokumentu sa pokazí.
 * Bloky kódu sa preložia. Prekladač Google nevie, čo markdown považuje za kód a čo nie
 * Nesprávne medzery pre odsadené bloky kódu. V preklade je ťažké zachovať medzery
 * Veci vnútri `backticks` sa preložia, keď takmer vždy chcete, aby to boli doslovné hodnoty

 Keď je povolený príznak `-M` / `--markdown` :
 * Vzor `](` bude zhustený na `](` , čím sa opravia nefunkčné odkazy na zníženie
 * Okolo odsadených blokov kódu bude umiestnený obal „bez prekladu“, ktorý zachová správne odsadenie a zabezpečí, že nebudú preložené
 * Okolo textu v rámci `backticks` sa umiestni obálka „bez prekladu“, aby sa zabezpečilo, že nebudú preložené

 ### Spracovať ako
 Normálne je všetko spracované ako obyčajný text

 Ak je váš obsah HTML, poškodí sa, pokiaľ nezadáte možnosť `-p html` / `--process-as html`

 ### Filter
 Pre odvážnych: pri spracovávaní súborov v adresári môžete použiť možnosť `-F` / `--filter`
 na filtrovanie výstupu pred jeho zapísaním do súborového systému

 Hodnota tejto možnosti musí byť cesta k súboru JS, ktorý exportuje funkciu s názvom `filter`

 Funkcia `filter` musí byť `async` pretože sa na ňu zavolá `await`

 Pred zápisom súborov na disk bude celý obsah súboru odovzdaný funkcii `filter` ako reťazec

 Návratová hodnota z funkcie `filter` je to, čo sa skutočne zapíše do úložiska

 Takto máte úplnú kontrolu nad tým, čo bude nakoniec napísané

 Skript `filter` sa bude hľadať v nasledujúcich umiestneniach:
 * Aktuálny adresár
 * Adresár s názvom `.hokey-filters` v rámci aktuálneho adresára
 * Adresár s názvom `${HOME}/.hokey-filters` , kde `${HOME}` je domovský adresár aktuálneho používateľa
 * Vstavaný [adresár filtrov](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 ### Pomoc
 Na zobrazenie pomoci použite `-h` / `--help`

 ## dávkové príkazy JSON
 S `-j` / `--json` môžete spustiť viacero koordinovaných príkazov `hokey`

 Podľa konvencie sa tento súbor nazýva `hokey.json` , ale môžete si ho pomenovať ako chcete

 Ak zadáte adresár ako možnosť `-j` , `hokey` vyhľadá v tomto adresári súbor `hokey.json`

 Súbor JSON by mal obsahovať jeden objekt. V rámci tohto objektu sú jeho názvy vlastností rovnaké ako
 možnosti príkazového riadka plus jedna ďalšia vlastnosť s názvom `hokey`

 Vlastnosť `hokey` predstavuje pole príkazov, ktoré sa majú spustiť. Vlastnosti deklarované v týchto príkazoch budú
 prepísať všetky duplicitné deklarácie vo vonkajšom objekte.

 V rámci každého objektu v poli `hokey` by ste mali zadať `name` a vstupné a výstupné súbory

 Tu je príklad súboru `hokey.json`

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
            "filter": "filterReadme.js",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Viac vstupných súborov
 Odovzdajte pole ciest k súborom ako `infiles` súbory“ namiesto jedinej cesty `infile` , ako v tomto príklade:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indexy
 Pri preklade do mnohých jazykov môže `hokey` vytvoriť indexový súbor, ktorý obsahuje zoznam všetkých vykonaných prekladov
 a poskytuje na ne odkazy

 *Pri generovaní indexov môžete mať iba jeden vstupný zdroj*

 Zadajte možnosť `-I` / `--index` , hodnota je miesto, kde sa vygeneruje indexový súbor, čo môže byť súbor
 alebo adresár. Ak je to adresár, použije sa predvolený názov súboru na základe šablóny (pozri nižšie)

 Na určenie formátu výstupu indexu použite `-A` / `--index-template` . Môžete zadať „html“,
 'markdown', 'text' alebo cesta k súboru k vašej vlastnej šablóne [HandlebarsJS](https://handlebarsjs.com/)

 Ak zadáte vlastnú šablónu, musíte zadať aj súbor (nie adresár) pre `-I` / `--index`
 možnosť

 ## Príjemnú zábavu pri prekladaní jazykov!

</pre>
