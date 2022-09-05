Hokeylisearring
 ==============
 Wêrom kin ik myn hiele app of side net fia Google Translate útfiere en in basisoersetting yn in oare taal krije?

 ***No kinsto!***

 De namme `hokeylization` is in portmanteau, wat 'hokey-lokalisaasje' betsjut

 It is wat hokey, om't it heul ienfâldich is: it stjoert snaren nei Google Translate

 En it is ienfâldich, mar ek tige krêftich. It hat spesjale stipe foar HTML-dokuminten,
 [HandlebarsJS](https://handlebarsjs.com/) sjabloanen,
 en [Markdown](https://daringfireball.net/projects/markdown) bestannen.

 Jo kinne oersette:
 * in JavaScript-objekt mei berjochten
 * elk oantal bestannen as mappen, altyd rekursyf troch troch mappen

 # Lês dit yn in oare taal
 Dit README.md-dokumint is oerset, mei it hokeylisearringsark sels, yn
 **[elke taal stipe troch Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ik bin der wis fan dat it net perfekt is, mar ik hoopje dat it better is as neat!

 [🇸🇦 Arabysk](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Dútsk](../de/README.md)
 [🇺🇸 Ingelsk](../en/README.md)
 [🇪🇸 Spaansk](../es/README.md)
 [🇫🇷 Frânsk](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Yndonesysk](../id/README.md)
 [🇮🇹 Italjaansk](../it/README.md)
 [🇯🇵 Japansk](../ja/README.md)
 [🇰🇷 Koreaansk](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Poalsk](../pl/README.md)
 [🇧🇷 Portugeesk](../pt/README.md)
 [🇷🇺 Russysk](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turksk](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Fietnameesk](../vi/README.md)
 [🇨🇳 Sineesk](../zh/README.md)


 **[📚 ... Alle talen ...](../README.md)**
 ----

 ### Is der in probleem mei dizze oersetting fan de README?
 Dizze bysûndere oersetting fan it orizjinele [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 kin defekt wêze -- *korreksjes binne tige wolkom!* Stjoer asjebleaft in [pull request on GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 of as jo it net noflik binne om dat te dwaan, [iepenje in probleem](https://github.com/cobbzilla/hokeylization/issues)

 As jo in nij GitHub-probleem oanmeitsje oer in oersetting, dwaan dan:
 * befetsje de side-URL (kopiearje / plakke fan browseradresbalke)
 * befetsje de krekte tekst dy't ferkeard is (kopiearje / plakke fan browser)
 * beskriuw asjebleaft wat der mis is -- is de oersetting ferkeard? is de opmaak op ien of oare manier brutsen?
 * biede freonlik in suggestje foar in bettere oersetting, of hoe't de tekst goed opmakke wurde moat
 * **Dankewol!**

 # Ynhâld
 * [Boarne](#Boarne)
 * [Support and Funding](#Support-and-Funding)
 * [Ynstallaasje](#Ynstallaasje)
 * [Setup](#Setup)
 * [Oersette fan in JavaScript-string-boarnebestân](#Translating-a-JavaScript-string-resource-file)
 * [It oersetten fan in map mei tekstbestannen](#Translating-a-directory-of-text-files)
 * [Oare opsjes](#Oare-opsjes)
 * [JSON-batch-kommando's](#JSON-batch-kommando's)

 ## Boarne
 * [hokeylization op GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization op npm](https://www.npmjs.com/package/hokeylization)

 ## Stipe en finansiering
 Ik besykje in profesjonele ûntwikkelder fan iepen boarne software te wêzen. Ik haw wurke yn
 de software yndustry foar in protte jierren, Ik haw begûn suksesfolle bedriuwen en ferkocht se oan iepenbiere bedriuwen.
 Koartlyn bin ik myn baan kwytrekke, en ik haw eins gjin oar wurk opsteld

 Dat ik sil besykje nuttige software te skriuwen en te sjen oft dat wurket

 Ik soe sels de lytste [moanlikse bydrage fia Patreon] oprjocht wurdearje (https://www.patreon.com/cobbzilla)

 ## Ynstallaasje
 Om it kommandorigelark te brûken, ynstallearje mei `npm` of `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Om as bibleteek te brûken, ynstallearje de `lite` ferzje, dy't folle lytser is:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Sjoch dan nei help foar it kommando `hokey` :

    hokey --help
    hokey -h

 Wolle jo útfier yn jo taal of in oare taal sjen?

 `hokey` besiket de taal automatysk te ûntdekken fan de omjouwingsfariabelen fan jo shell

 Jo kinne in taal twinge troch de omjouwingsfariabele `LC_ALL` yn te stellen:

    LC_ALL=it hokey --help

 Tink derom dat as jo `hokeylization-lite` ynstalleare hawwe, is kommandohelp allinich yn it Ingelsk beskikber

 ## Opsette
 Stel de omjouwingsfariabele `GOOGLE_TRANSLATE_PROJECT_ID` yn om jo Google Translate-projekt te identifisearjen

 Stel de omjouwingsfariabele `GOOGLE_APPLICATION_CREDENTIALS` yn op de JSON-bewizen dy't jo ynladen hawwe
 nei it útfine hoe't autentikaasje wurket op Google Cloud (it kin leuk wêze)

 As jo fanút de boarnekoade rinne, kinne jo dizze ek yn in `.env` -bestân yn de boarne pleatse
 map sille se by runtime laden wurde fia [dotenv](https://www.npmjs.com/package/dotenv)

 ## It oersetten fan in boarnebestân foar JavaScript-string
 Jo tekenrigetabel **moat** wêze yn in JavaScript-bestân yn ien fan dizze twa foarmen:

 ES6 eksport:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS eksport

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 As dit bestân `myfile.en.js` , kinne jo it oersette nei it Spaansk en Dútsk mei:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 De `LANG` yn it boppesteande is spesjaal - it is in reservearre wurd yn dit ark!

 De `LANG` wurdt ferfongen troch de taalkoade foar de útfierbestannen

 Sa makket it boppeste kommando de bestannen:

    myfile.es.js
    myfile.de.js

 De opsje `-l` / `--languages` is in komma-skieden list mei ISO-taalkoades
 [stipe troch Google Translate](https://cloud.google.com/translate/docs/languages)

 As it útfiertriem al bestiet, sil it ûndersocht wurde om te bepalen hokker kaaien al bestean.
 Besteande kaaien wurde net oerset. Oersetten foar ûntbrekkende kaaien wurde oanmakke en taheakke
 oan 'e ein fan' e JS foarwerp. De hiele triem wurdt altyd oerskreaun.

 Om alle kaaien opnij te oersetten, brûk de opsje `-f` / `--force`

 ## It oersetten fan in map mei tekstbestannen
 Jo kinne ek in triemtafel oersette. hokeylization sil rekursyf besykje eltse
 bestân yn 'e map en útfiere de ynhâld fia Google Translate, en bewarje de útfier
 nei in identyk neamde triem yn in aparte triemtafelbeam

 As it doel fan jo oersetting in map is, is dizze modus ynskeakele

 De opsje `-o` / `--outfile` spesifisearret de útfiermap

 ** GROTE warskôging **: By it oersetten fan mappen, **NET ** spesifisearje in útfiermap
 dat is binnen jo ynfiermap! As jo dit dogge, sille jo:
 * induce ûneinige rekursje
 * útfiere jo Google rekken
 * folje dyn skiif
 * minder wille hawwe

 Hjir is in foarbyld fan wat *net te dwaan*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 As dit rint, wurde oersette triemmen skreaun nei `templates/es` , en wurde sa nij
 boarnebestannen om te oersetten, om't se ûnder `templates/` steane -- dit proses giet troch
 foar altyd, doch it net!

 #### Korrekt gebrûk
 OK, lit ús sizze dat jo wat e-postsjabloanen hawwe yn in map:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Om al dizze oer te setten nei Spaansk en Dútsk, útfiere:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Yn it boppesteande is `LANG` in reservearre wurd en sil ferfongen wurde troch de ISO-taalkoade

 Wat bart der as it boppesteande rint:
 * De `templates/email/es` en `templates/email/de` sille oanmakke wurde (as se net besteane)
 * Elk bestân yn `templates/email/en` sil oerset wurde yn it Spaansk en Dútsk
 * Besteande útfierbestannen sille net wurde regenerearre, útsein as jo `-f` / `--force`
 * Jo sille einigje mei in identike mapstruktuer en bestannen binnen `es` en `de` lykas jo hawwe ûnder `en`

 ## Oare opsjes

 ### Dry run
 Pass `-n` / `--dry-run` troch om wer te jaan wat der dien wurde soe, mar meitsje gjin API-oproppen of skriuw gjin bestannen

 ### Force
 Pass `-f` / `--force` troch om oersettingen altyd opnij te meitsjen, sels as se al bestean

 ### Wedstriid
 Pass `-m` / `--match` troch om de ferwurke bestannen te beheinen by it útfieren fan yn mapmodus

 Jo kinne miskien net altyd *elk* bestân yn jo boarnemap oersette nei jo doelmap

 De wearde fan `-m` / `--match` opsje is in regex (pas op shell quoting regels!) dy't spesifisearret
 hokker triemmen moatte wurde oerset

 By twifel kinne jo dizze opsje kombinearje mei `-n` / `--dry-run` om te sjen hokker triemmen oerset wurde

 ### Utslút
 Soms komt jo `-m` oerien mei tefolle bestannen. Brûk de opsje `-e` / `--excludes` om eksplisyt út te sluten
 bestannen dy't oars oerienkomme soene

 Jo kinne meardere regexes listje, skieden troch spaasjes

 In gewoan gebrûk soe wêze: `--excludes node_modules dist \.git build tmp`

 ### Handlebars
 De oer te setten snaren kinne `{{ handlebars }}` -sjabloanen befetsje, itsij mei twa of trije krulbeugels

 Jo wolle wierskynlik *NET* dat it guod yn dy sjabloanen oerset wurde

 Trochjaan de flagge `-H` / `--handlebars` , en alles binnen `{{ ... }}` sil net oerset wurde

 ### Markdown
 Markdown is gjin tekst noch html, dus Google Translate hat der wat swierrichheden mei

 De flagge `-M` / `--markdown` makket spesjale ôfhanneling mooglik foar markdown-bestannen

 Mei markdown-bestannen, as jo de flagge `-M` net brûke, sille jo wierskynlik dizze problemen fine:
 * Broken keppelings. Yn 'e oersetting ferskynt in spaasjekarakter nei't in markdown-keppelingsbeskriuwing einiget (mei `]` ) mar
 foardat de doelkeppeling begjint (mei `(` ). Dit soarget dat de markdown ferkeard werjûn wurdt, en de keppeling
 is brutsen by it besjen fan it dokumint.
 * Koadeblokken wurde oerset. Google Translate wit net wat markdown as koade beskôget en wat it net
 * Ferkearde ôfstân foar ynspringende koadeblokken. Spaasje is lestich te behâlden yn oersetting
 * Dingen yn `backticks` sille oerset wurde, as jo hast altyd wolle dat se letterlike wearden binne

 As de flagge `-M` / `--markdown` is ynskeakele:
 * It patroan `](` sil kondinsearre wurde ta `](` sadat de brutsen markdown-keppelings reparearje
 * In omslach "gjin oersetten" sil pleatst wurde om ynspringende koadeblokken, it behâld fan juste ynspringen en garandearret dat se net oerset wurde
 * In "no translate" wrapper sil pleatst wurde om tekst binnen `backticks` om te soargjen dat se net oerset wurde

 ### Process-as
 Normaal wurdt alles ferwurke as platte tekst

 As jo ynhâld HTML is, sil it fersmoarge wurde, útsein as jo de `-p html` / `--process-as html`

 ### Filter
 Foar de aventoerlike: by it ferwurkjen fan bestannen yn in map, kinne jo de opsje `-F` / `--filter`
 om de útfier te filterjen foardat it nei it bestânsysteem skreaun wurdt

 De wearde fan dizze opsje moat in paad wêze nei in JS-bestân dat in funksje mei de namme `filter`

 De funksje `filter` ' moat `async` om't `await` oanroppen wurde sil

 Foardat bestannen nei skiif skreaun wurde, sil de hiele triemynhâld trochjûn wurde nei de funksje `filter` as in tekenrige

 De `filter` fan 'e funksje 'filter' is wat wirklik nei opslach skreaun wurdt

 Sa hawwe jo totale kontrôle oer wat úteinlik skreaun wurde sil

 ### Help
 Brûk `-h` / `--help` om help te sjen

 ## JSON batch kommando's
 Mei de opsje `-j` / `--json` kinne jo meardere koördinearre `hokey` kommando's útfiere

 Troch konvinsje wurdt dizze triem `hokey.json` neamd, mar jo kinne it neame wat jo wolle

 As jo in map as de opsje `hokey` `-j` sil `hokey` sykje nei in `hokey.json` yn dy map

 It JSON-bestân moat ien objekt befetsje. Binnen dat objekt binne syn eigendomsnammen itselde as
 de kommando-rigelopsjes, plus ien ekstra eigenskip mei de namme `hokey`

 De eigenskip `hokey` is in array fan kommando's om út te fieren. De eigenskippen ferklearre binnen dizze kommando's sille
 oerskriuwe alle dûbele deklaraasjes yn it bûtenste objekt.

 Binnen elk objekt yn 'e array `hokey` moatte jo in `name` namme' opjaan, en de ynfier- en útfierbestannen

 Hjir is in foarbyld fan in `hokey.json`

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

 ### Meardere ynfierbestannen
 Trochjaan in array fan triempaden as `infiles` ynstee fan in inkeld paad `infile` , lykas yn dit foarbyld:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Yndeksen
 By it oersetten nei in protte talen kin `hokey` in yndeksbestân oanmeitsje dy't alle makke oersettingen oplist
 en jout keppelings nei harren

 *By it generearjen fan yndeksen kinne jo mar ien ynfierboarne hawwe*

 Gean de opsje `-I` / `--index` , de wearde is wêr't it yndeksbestân oanmakke wurdt, dat kin in triem wêze
 of in map. As it in map is, sil in standert bestânsnamme brûkt wurde, basearre op it sjabloan (sjoch hjirûnder)

 Brûk de `-A` / `--index-template` om te bepalen hoe't de yndeksútfier is opmakke. Jo kinne 'html' opjaan,
 'markdown', 'text', of it bestânpaad nei jo eigen [HandlebarsJS](https://handlebarsjs.com/) sjabloan

 As jo jo eigen sjabloan oantsjutte, moatte jo ek in bestân (gjin map) opjaan foar de `-I` / `--index`
 opsje

 ## Hawwe in leuke tiid mei it oersetten fan talen!

</pre>
