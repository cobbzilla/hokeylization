Hokeylizace
 ===============
 Název je portmanteau, což znamená „hokey lokalizace“

 Je to šílené, protože je to velmi jednoduché: odesílá řetězce do Překladače Google

 Můžete přeložit:
 * objekt JavaScript obsahující zprávy
 * adresář souborů, rekurzivně

 # Přečtěte si to v jiném jazyce
 Tento dokument README.md byl přeložen pomocí samotného nástroje hokeyylizace,
 do **[každý jazyk podporovaný Překladačem Google](../README.md)!**

 Jsem si jistý, že to není dokonalé, ale doufám, že je to lepší než nic!

 [🇸🇦 arabština] (lang/ar/README.md)
 [🇧🇩 bengálština] (lang/bn/README.md)
 [🇩🇪 němčina] (lang/de/README.md)
 [🇺🇸 angličtina] (lang/en/README.md)
 [🇪🇸 španělština](../es/README.md)
 [🇫🇷 francouzština](../fr/README.md)
 [🇹🇩 hausa](../ha/README.md)
 [🇮🇳 hindština](../hi/README.md)
 [🇮🇩 indonéština](../id/README.md)
 [🇮🇹 italština](../it/README.md)
 [🇯🇵 japonština](../ja/README.md)
 [🇰🇷 korejština](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
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
 Tento konkrétní překlad originálu [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 může být chyba -- *opravy jsou velmi vítány!* Odešlete [žádost o stažení na GitHubu](https://github.com/cobbzilla/yuebing/pulls),
 nebo pokud se vám to nelíbí, [otevřete problém](https://github.com/cobbzilla/yuebing/issues)

 Když vytvoříte nový problém na GitHubu o překladu, proveďte prosím:
 * zahrňte adresu URL stránky (zkopírujte/vložte z adresního řádku prohlížeče)
 * uveďte přesný text, který je nesprávný (zkopírujte/vložte z prohlížeče)
 * Nabídněte laskavě návrh na lepší překlad
 * **Děkuji!**

 # Obsah
 * [Zdroj] (#Source)
 * [Support and Funding](#Support-and-Funding)
 * [Instalace](#Instalace)
 * [Nastavení] (#Setup)
 * [Překlad zdrojového souboru řetězce JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Překlad adresáře textových souborů](#Translating-a-directory-of-text-files)
 * [Další možnosti](#Other-options)

 ## Zdroj
 * [hokeylizace na GitHubu](https://github.com/cobbzilla/hokeylization)
 * [hokeylizace na npm](https://www.npmjs.com/package/hokeylization)

 ## Podpora a financování
 Snažím se být profesionálním vývojářem open source softwaru. Pracoval jsem v
 v softwarovém průmyslu jsem zakládal úspěšné společnosti a prodal je veřejným společnostem.
 Nedávno jsem přišel o práci a vlastně žádnou jinou práci nemám

 Takže zkusím napsat užitečný software a uvidím, jestli to funguje

 Upřímně bych ocenil i ten nejmenší [měsíční příspěvek přes Patreon](https://www.patreon.com/cobbzilla)

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

 Hokeylizer zvládá věci slušně dobře, ale se soubory markdown můžete často řešit tyto problémy:
 * Nefunkční odkazy. V překladu se po ukončení popisu odkazu markdown objeví mezera (s `]` ), ale
 dříve, než začne jeho cílový odkaz (s `(` ). To způsobí, že se značka down vykreslí nesprávně a odkaz
 je při prohlížení dokumentu nefunkční.
 * Bloky kódu jsou přeloženy. Překladač Google neví, co markdown považuje za kód a co ne
 * Nesprávné mezery pro odsazené bloky kódu. V překladu je obtížné zachovat mezery
 * Věci uvnitř `backticks` se přeloží, když téměř vždy chcete, aby to byly doslovné hodnoty

 Když je povolen příznak `-M` / `--markdown` :
 * Vzor `] (` bude zhuštěn na `](` čímž se opraví nefunkční odkazy na markdown
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

 ### Pomoc
 K zobrazení nápovědy použijte `-h` / `--help`

 ## Hodně štěstí při překládání!

</pre>
