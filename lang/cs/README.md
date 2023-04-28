Hokeylizace
 ===============
 Proč nemohu spustit celou aplikaci nebo web prostřednictvím Překladače Google a získat základní překlad do jiného jazyka?

 ***Teď můžeš!***

 Název `hokeylization` je portmanteau, což znamená „hokey lokalizace“

 Je to poněkud nešikovné, protože je velmi jednoduché: odesílá řetězce do Překladače Google

 A je to jednoduché, ale také velmi silné. Má speciální podporu pro HTML dokumenty,
 [HandlebarsJS](https://handlebarsjs.com/) šablony,
 a soubory [Markdown](https://daringfireball.net/projects/markdown).

 Můžete přeložit:
 * objekt JavaScript obsahující zprávy
 * libovolný počet souborů nebo adresářů, vždy procházet adresáře rekurzivně

 # Přečtěte si to v jiném jazyce
 Tento dokument README.md byl přeložen pomocí samotného nástroje pro hokeyylizaci
 **[každý jazyk podporovaný Překladačem Google](https://cloud.google.com/translate/docs/languages)!**

 Jsem si jistý, že to není dokonalé, ale doufám, že je to lepší než nic!

 [🇸🇦 arabština](../ar/README.md)
 [🇧🇩 bengálština](../bn/README.md)
 [🇩🇪 němčina](../de/README.md)
 [🇺🇸 angličtina](../en/README.md)
 [🇪🇸 španělština](../es/README.md)
 [🇫🇷 francouzština](../fr/README.md)
 [🇹🇩 hausa](../ha/README.md)
 [🇮🇳 hindština](../hi/README.md)
 [🇮🇩 indonéština](../id/README.md)
 [🇮🇹 italština](../it/README.md)
 [🇯🇵 japonština](../ja/README.md)
 [🇰🇷 korejština](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 polština](../pl/README.md)
 [🇧🇷 portugalština](../pt/README.md)
 [🇷🇺 ruština](../ru/README.md)
 [🇰🇪 svahilština](../sw/README.md)
 [🇵🇭 tagalog](../tl/README.md)
 [🇹🇷 turečtina](../tr/README.md)
 [🇵🇰 urdština](../ur/README.md)
 [🇻🇳 vietnamština](../vi/README.md)
 [🇨🇳 čínština](../zh/README.md)


 **[📚 ... Všechny jazyky ...](../README.md)**
 ----

 ### Je problém s tímto překladem souboru README?
 Tento konkrétní překlad originálu [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 může být chyba -- *opravy jsou velmi vítány!* Odešlete [žádost o stažení na GitHubu](https://github.com/cobbzilla/hokeylization/pulls),
 nebo pokud se vám to nelíbí, [otevřete problém](https://github.com/cobbzilla/hokeylization/issues)

 Když vytvoříte nový problém na GitHubu o překladu, proveďte prosím:
 * zahrňte adresu URL stránky (zkopírujte/vložte z adresního řádku prohlížeče)
 * uveďte přesný text, který je nesprávný (zkopírujte/vložte z prohlížeče)
 * popište prosím, co je špatně - je překlad nesprávný? je formátování nějak narušené?
 * laskavě nabídněte návrh lepšího překladu nebo jak by měl být text správně naformátován
 * **Děkuji!**

 # Obsah
 * [Zdroj](#Source)
 * [Support and Funding](#Support-and-Funding)
 * [Instalace](#Instalace)
 * [Nastavení](#Setup)
 * [Překlad zdrojového souboru řetězce JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Překlad adresáře textových souborů](#Translating-a-directory-of-text-files)
 * [Další možnosti](#Other-options)
 * [dávkové příkazy JSON](#JSON-batch-commands)

 ## Zdroj
 * [hokeylizace na GitHubu](https://github.com/cobbzilla/hokeylization)
 * [hokeylizace na npm](https://www.npmjs.com/package/hokeylization)

 ## Podpora a financování
 Snažím se být profesionálním vývojářem open source softwaru. Pracoval jsem v
 v softwarovém průmyslu jsem zakládal úspěšné společnosti a prodal je veřejným společnostem.
 Nedávno jsem přišel o práci a vlastně žádnou jinou práci nemám

 Takže zkusím napsat užitečný software a uvidím, jestli to funguje

 Pokud rádi používáte tento software, budu tak rád, že obdržím i
 nejmenší [měsíční příspěvek přes Patreon](https://www.patreon.com/cobbzilla)

 *Děkuji!*

 ## Instalace
 Chcete-li použít nástroj příkazového řádku, nainstalujte pomocí `npm` nebo `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Chcete-li použít jako knihovnu, nainstalujte verzi `lite` , která je mnohem menší:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Pak se podívejte do nápovědy pro příkaz `hokey` :

    hokey --help
    hokey -h

 Chcete vidět výstup ve vašem jazyce nebo jiném jazyce?

 `hokey` se pokouší automaticky detekovat jazyk z proměnných prostředí vašeho shellu

 Jazyk můžete vynutit nastavením proměnné prostředí `LC_ALL` :

    LC_ALL=it hokey --help

 Všimněte si, že pokud jste nainstalovali `hokeylization-lite` , je nápověda k příkazům dostupná pouze v angličtině

 ## Založit
 Nastavte proměnnou prostředí `GOOGLE_TRANSLATE_PROJECT_ID` k identifikaci vašeho projektu Překladače Google

 Nastavte proměnnou prostředí `GOOGLE_APPLICATION_CREDENTIALS` na přihlašovací údaje JSON, které jste si stáhli
 po zjištění, jak funguje ověřování v cloudu Google (může to být zábava)

 Pokud spouštíte ze zdrojového kódu, můžete je také vložit do souboru `.env` ve zdrojovém kódu
 adresář budou načteny za běhu přes [dotenv](https://www.npmjs.com/package/dotenv)

 ## Překlad zdrojového souboru řetězce JavaScript
 Vaše tabulka řetězců **musí** být v souboru JavaScript v jedné z těchto dvou forem:

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

 Pokud byl tento soubor pojmenován `myfile.en.js` , můžete jej přeložit do španělštiny a němčiny pomocí:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` ve výše uvedeném je speciální - je to vyhrazené slovo v tomto nástroji!

 `LANG` je nahrazeno kódem jazyka pro výstupní soubory

 Výše uvedený příkaz tedy vytvoří soubory:

    myfile.es.js
    myfile.de.js

 Možnost `-l` / `--languages` --languages` je seznam kódů jazyků ISO oddělených čárkami.
 [podporováno Překladačem Google](https://cloud.google.com/translate/docs/languages)

 Pokud výstupní soubor již existuje, bude zkoumán, které klíče již existují.
 Stávající klíče nebudou přeloženy. Budou vygenerovány a připojeny překlady pro chybějící klíče
 na konec objektu JS. Vždy se přepíše celý soubor.

 Chcete-li vynutit retranslaci všech klíčů, použijte volbu `-f` / `--force`

 ## Překlad adresáře textových souborů
 Můžete také přeložit adresář souborů. hokeylizace rekurzivně navštíví každého
 soubor v adresáři a spusťte jeho obsah přes Google Translate a uložte výstup
 do identicky pojmenovaného souboru v samostatném adresářovém stromu

 Pokud je cílem vašeho překladu adresář, je tento režim povolen

 Volba `-o` / `--outfile` určuje výstupní adresář

 **VELKÉ VAROVÁNÍ**: Při překladu adresářů **NEZADÁVEJTE** výstupní adresář
 který je ve vašem vstupním adresáři! Pokud to uděláte, budete:
 * vyvolat nekonečnou rekurzi
 * spusťte svůj účet Google
 * naplňte si disk
 * bavte se méně

 Zde je příklad toho, co *nedělat*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Když se to spustí, přeložené soubory se zapíší do `templates/es` a stanou se tak novými
 zdrojové soubory k překladu, protože jsou pod `templates/` -- tento proces pokračuje
 navždy, nedělej to!

 #### Správné použití
 Dobře, řekněme, že máte v adresáři nějaké e-mailové šablony:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Chcete-li toto vše přeložit do španělštiny a němčiny, spusťte:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Ve výše uvedeném textu je `LANG` vyhrazené slovo a bude nahrazeno kódem jazyka ISO

 Co se stane, když se spustí výše uvedené:
 * Budou vytvořeny adresáře `templates/email/es` a `templates/email/de` (pokud neexistují)
 * Každý soubor v `templates/email/en` bude přeložen do španělštiny a němčiny
 * Stávající výstupní soubory nebudou obnoveny, pokud nepoužijete `-f` / `--force`
 * Skončíte s identickou adresářovou strukturou a soubory v rámci `es` a `de` , jako máte pod `en`

 ## Jiné možnosti

 ### Chod nasucho
 Předejte `-n` / `--dry-run` , abyste zobrazili, co by se udělalo, ale ve skutečnosti neprovádějte žádná volání API ani nezapisujte žádné soubory

 ### Platnost
 Předáním `-f` / `--force` vždy obnovíte překlady, i když již existují

 ### Zápas
 Předejte `-m` / `--match` , abyste omezili zpracovávané soubory při spuštění v adresářovém režimu

 Možná nebudete vždy chtít překládat *každý* soubor ve zdrojovém adresáři do cílového adresáře

 Hodnota možnosti `-m` / `--match` je regulární výraz (pozor na pravidla citování shellu!), který určuje
 které soubory by měly být přeloženy

 Pokud si nejste jisti, můžete tuto možnost zkombinovat s `-n` / `--dry-run` a zjistit, které soubory budou přeloženy

 ### Nezahrnuje
 Někdy vaše `-m` odpovídá příliš mnoha souborům. Chcete-li explicitně vyloučit, použijte možnost `-e` / `--excludes`
 soubory, které by se jinak shodovaly

 Můžete uvést více regulárních výrazů oddělených mezerami

 Běžné použití by bylo: `--excludes node_modules dist \.git build tmp`

 ### Řídítka
 Řetězce k překladu mohou obsahovat šablony `{{ handlebars }}` , buď se dvěma nebo třemi složenými závorkami

 Pravděpodobně *NECHCETE* překládat věci uvnitř těchto šablon

 Předejte `-H` / `--handlebars` a nic v `{{ ... }}` nebude přeloženo

 ### Markdown
 Markdown není ani text, ani html, takže s ním má Překladač Google určité potíže

 `-M` / `--markdown` umožňuje speciální manipulaci se soubory markdown

 Pokud u souborů markdown nepoužijete příznak `-M` , pravděpodobně narazíte na tyto problémy:
 * Nefunkční odkazy. V překladu se po ukončení popisu odkazu markdown objeví mezera (s `]` ), ale
 dříve, než začne jeho cílový odkaz (s `(` ). To způsobí, že se značka down vykreslí nesprávně a odkaz
 je při prohlížení dokumentu rozbitý.
 * Bloky kódu jsou přeloženy. Překladač Google neví, co markdown považuje za kód a co ne
 * Nesprávné mezery pro odsazené bloky kódu. V překladu je obtížné zachovat mezery
 * Věci uvnitř `backticks` se přeloží, když téměř vždy chcete, aby to byly doslovné hodnoty

 Když je povolen příznak `-M` / `--markdown` :
 * Vzor `](` bude zhuštěn na `](` čímž se opraví nefunkční odkazy na markdown
 * Kolem odsazených bloků kódu bude umístěn obal „bez překladu“, který zachová správné odsazení a zajistí, že nebudou přeloženy
 * Obálka "bez překladu" bude umístěna kolem textu v `backticks` , aby bylo zajištěno, že nebudou přeloženy

 ### Zpracovat jako
 Normálně je vše zpracováno jako prostý text

 Pokud je váš obsah HTML, bude zmrzačený, pokud nezadáte možnost `-p html` / `--process-as html`

 ### Filtr
 Pro odvážné: při zpracování souborů v adresáři můžete předat volbu `-F` / `--filter`
 k filtrování výstupu před jeho zapsáním do souborového systému

 Hodnota této možnosti musí být cesta k souboru JS, který exportuje funkci s názvem `filter`

 Funkce `filter` musí být `async` protože na ni bude vyvoláno `await`

 Před zapsáním souborů na disk bude celý obsah souboru předán funkci `filter` jako řetězec

 Návratová hodnota z funkce `filter` je to, co bude skutečně zapsáno do úložiště

 Máte tak úplnou kontrolu nad tím, co bude nakonec napsáno

 Skript `filter` bude hledán v následujících umístěních (s `.js` bude připojen k filtru
 název, pokud již nekončí na `.js` )
 * Aktuální adresář
 * Adresář s názvem `.hokey-filters` v aktuálním adresáři
 * Adresář s názvem `${HOME}/.hokey-filters` , kde `${HOME}` je domovský adresář aktuálního uživatele
 * Vestavěný [adresář filtrů](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Parametry filtru
 Řetězec `filter` může obsahovat více slov. V tomto případě je první slovo název filtru a
 zbývající slova budou předána jako argumenty funkci `filter`

 ### Pomoc
 K zobrazení nápovědy použijte `-h` / `--help`

 ## dávkové příkazy JSON
 S `-j` / `--json` můžete spouštět více koordinovaných příkazů `hokey`

 Podle konvence se tento soubor nazývá `hokey.json` , ale můžete si jej pojmenovat, jak chcete

 Pokud předáte adresář jako volbu `-j` , `hokey` `hokey.json`

 Soubor JSON by měl obsahovat jeden objekt. V rámci tohoto objektu jsou jeho názvy vlastností stejné jako
 možnosti příkazového řádku a jednu další vlastnost s názvem `hokey`

 Vlastnost `hokey` je pole příkazů ke spuštění. Vlastnosti deklarované v těchto příkazech budou
 přepíše všechny duplicitní deklarace ve vnějším objektu.

 V rámci každého objektu v poli `hokey` byste měli zadat `name` a vstupní a výstupní soubory

 Zde je příklad souboru `hokey.json`

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
            "filter": "relativizeMarkdownLinks lang",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Více vstupních souborů
 Předejte pole cest k souborům jako `infiles` namísto jediné cesty `infile` , jako v tomto příkladu:

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
 Při překladu do mnoha jazyků může `hokey` vytvořit indexový soubor, který uvádí všechny provedené překlady
 a poskytuje na ně odkazy

 *Při generování indexů můžete mít pouze jeden vstupní zdroj*

 Předejte volbu `-I` / `--index` , hodnota je místo, kde se vygeneruje soubor indexu, což může být soubor
 nebo adresář. Pokud se jedná o adresář, použije se výchozí název souboru na základě šablony (viz níže)

 Pomocí `-A` / `--index-template` určete, jak je formátován výstup indexu. Můžete zadat 'html',
 'markdown', 'text' nebo cesta k souboru k vaší vlastní šabloně [HandlebarsJS](https://handlebarsjs.com/)

 Pokud zadáte vlastní šablonu, musíte také zadat soubor (nikoli adresář) pro `-I` / `--index`
 volba

 ## Bavte se při překládání jazyků!

</pre>
