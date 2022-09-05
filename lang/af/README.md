Hokielisering
 ==============
 Hoekom kan ek nie my hele toepassing of werf deur Google Translate laat loop en 'n basiese vertaling in 'n ander taal kry nie?

 ***Nou kan jy!***

 Die naam `hokeylization` is 'n portmanteau, wat "hokey lokalisering" beteken

 Dit is ietwat hokey, want dit is baie eenvoudig: dit stuur stringe na Google Translate

 En dit is eenvoudig, maar ook baie kragtig. Dit het spesiale ondersteuning vir HTML-dokumente,
 [HandlebarsJS](https://handlebarsjs.com/) sjablone,
 en [Markdown](https://daringfireball.net/projects/markdown) lêers.

 Jy kan vertaal:
 * 'n JavaScript-objek wat boodskappe bevat
 * enige aantal lêers of gidse, altyd deur dopgehou rekursief

 # Lees dit in 'n ander taal
 Hierdie README.md-dokument is met behulp van die hokeylisasie-instrument self vertaal in
 **[elke taal wat deur Google Translate ondersteun word](https://cloud.google.com/translate/docs/languages)!**

 Ek is seker dit is nie perfek nie, maar ek hoop dit is beter as niks!

 [🇸🇦 Arabies](../ar/README.md)
 [🇧🇩 Bengaals](../bn/README.md)
 [🇩🇪 Duits](../de/README.md)
 [🇺🇸 Engels](../en/README.md)
 [🇪🇸 Spaans](../es/README.md)
 [🇫🇷 Frans](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesies](../id/README.md)
 [🇮🇹 Italiaans](../it/README.md)
 [🇯🇵 Japannees](../ja/README.md)
 [🇰🇷 Koreaans](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Pools](../pl/README.md)
 [🇧🇷 Portugees](../pt/README.md)
 [🇷🇺 Russies](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turks](../tr/README.md)
 [🇵🇰 Oerdoe](../ur/README.md)
 [🇻🇳 Viëtnamees](../vi/README.md)
 [🇨🇳 Chinees](../zh/README.md)


 **[📚 ... Alle tale ...](../README.md)**
 ----

 ### Is daar 'n probleem met hierdie vertaling van die README?
 Hierdie spesifieke vertaling van die oorspronklike [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 mag gebrekkig wees -- *regstellings is baie welkom!* Stuur asseblief 'n [trekversoek op GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 of as jy nie gemaklik is om dit te doen nie, [maak 'n kwessie oop](https://github.com/cobbzilla/hokeylization/issues)

 Wanneer jy 'n nuwe GitHub-uitgawe oor 'n vertaling skep, doen asseblief:
 * sluit die bladsy-URL in (kopieer/plak vanaf blaaieradresbalk)
 * sluit die presiese teks in wat verkeerd is (kopieer/plak vanaf blaaier)
 * Beskryf asseblief wat fout is -- is die vertaling verkeerd? is die formatering op een of ander manier gebreek?
 * Bied asseblief 'n voorstel van 'n beter vertaling, of hoe die teks behoorlik geformateer moet word
 * **Dankie!**

 # Inhoud
 * [Bron](#Bron)
 * [Ondersteuning en befondsing](#Ondersteuning-en-befondsing)
 * [Installasie](#Installasie)
 * [Opstelling](#Opstelling)
 * [Vertaal 'n JavaScript-string-hulpbronlêer](#Translating-a-JavaScript-string-resource-file)
 * [Vertaal 'n gids van tekslêers](#Translating-a-directory-of-text-files)
 * [Ander opsies](#Ander-opsies)
 * [JSON-joernaalopdragte](#JSON-batch-opdragte)

 ## Bron
 * [hokeylization op GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization op npm](https://www.npmjs.com/package/hokeylization)

 ## Ondersteuning en befondsing
 Ek probeer om 'n professionele oopbron sagteware-ontwikkelaar te wees. Ek het gewerk in
 die sagteware-industrie vir baie jare, het ek suksesvolle maatskappye begin en dit aan openbare maatskappye verkoop.
 Onlangs het ek my werk verloor, en ek het nie regtig enige ander werk in die ry nie

 So ek gaan probeer om nuttige sagteware te skryf en kyk of dit werk

 Ek sal selfs die kleinste [maandelikse bydrae via Patreon](https://www.patreon.com/cobbzilla) opreg waardeer

 ## Installasie
 Om die opdragreëlnutsding te gebruik, installeer met `npm` of `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Om as 'n biblioteek te gebruik, installeer die `lite` weergawe, wat baie kleiner is:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Kyk dan na hulp vir die `hokey` opdrag:

    hokey --help
    hokey -h

 Wil jy uitset in jou taal of 'n ander taal sien?

 `hokey` probeer om die taal outomaties op te spoor vanaf jou dop se omgewingsveranderlikes

 Jy kan 'n taal forseer deur die `LC_ALL` omgewingsveranderlike in te stel:

    LC_ALL=it hokey --help

 Let daarop dat as jy `hokeylization-lite` geïnstalleer het, opdraghulp slegs in Engels beskikbaar is

 ## Stel op
 Stel die `GOOGLE_TRANSLATE_PROJECT_ID` omgewingsveranderlike om jou Google Translate-projek te identifiseer

 Stel die `GOOGLE_APPLICATION_CREDENTIALS` omgewingsveranderlike na die JSON-eiebewyse wat jy afgelaai het
 nadat ek uitgevind het hoe verifikasie op Google-wolk werk (dit kan pret wees)

 As jy van die bronkode af hardloop, kan jy dit ook in 'n `.env` -lêer in die bron plaas
 gids sal hulle tydens looptyd gelaai word via [dotenv](https://www.npmjs.com/package/dotenv)

 ## Vertaal 'n JavaScript-string hulpbronlêer
 Jou stringtabel **moet** in 'n JavaScript-lêer wees in een van hierdie twee vorms:

 ES6 uitvoer:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS uitvoer

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 As hierdie lêer `myfile.en.js` genoem is, kan jy dit na Spaans en Duits vertaal met:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Die `LANG` in die bogenoemde is spesiaal -- dit is 'n gereserveerde woord in hierdie instrument!

 Die `LANG` word vervang met die taalkode vir die uitvoerlêers

 Die bogenoemde opdrag skep dus die lêers:

    myfile.es.js
    myfile.de.js

 Die `-l` / `--languages` opsie is 'n komma-geskeide lys van ISO-taalkodes
 [ondersteun deur Google Translate](https://cloud.google.com/translate/docs/languages)

 As die uitvoerlêer reeds bestaan, sal dit ondersoek word om te bepaal watter sleutels reeds bestaan.
 Bestaande sleutels sal nie vertaal word nie. Vertalings vir ontbrekende sleutels sal gegenereer en aangeheg word
 tot aan die einde van die JS-voorwerp. Die hele lêer word altyd herskryf.

 Om die hervertaling van alle sleutels af te dwing, gebruik die `-f` / `--force` opsie

 ## Vertaal 'n gids van tekslêers
 Jy kan ook 'n gids van lêers vertaal. hokeilization sal rekursief besoek elke
 lêer in die gids en voer die inhoud daarvan deur Google Translate, en stoor die uitvoer
 na 'n identiese naam lêer in 'n aparte gidsboom

 Wanneer die teiken van jou vertaling 'n gids is, is hierdie modus geaktiveer

 Die `-o` / `--outfile` opsie spesifiseer die uitvoergids

 **GROOT WAARSKUWING**: Wanneer jy gidse vertaal, **MOENIE** 'n uitvoergids spesifiseer nie
 dit is binne jou invoergids! As jy dit doen, sal jy:
 * veroorsaak oneindige rekursie
 * hardloop jou Google-rekening op
 * maak jou skyf vol
 * minder pret hê

 Hier is 'n voorbeeld van wat *nie om te doen nie*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Wanneer dit loop, word vertaalde lêers na `templates/es` , en word dus nuut
 bronlêers om te vertaal, aangesien hulle onder `templates/` -- hierdie proses gaan voort
 vir altyd, moenie dit doen nie!

 #### Korrekte gebruik
 OK, kom ons sê jy het 'n paar e-possjablone in 'n gids:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Om al hierdie in Spaans en Duits te vertaal, hardloop:

    hokey -l es,de -o templates/email/LANG templates/email/en

 In bogenoemde is `LANG` 'n gereserveerde woord en sal vervang word met die ISO-taalkode

 Wat gebeur wanneer bogenoemde loop:
 * Die `templates/email/es` en `templates/email/de` gidse sal geskep word (indien hulle nie bestaan nie)
 * Elke lêer in `templates/email/en` sal na Spaans en Duits vertaal word
 * Bestaande uitvoerlêers sal nie hergenereer word nie, tensy jy `-f` / `--force`
 * Jy sal eindig met 'n identiese gidsstruktuur en lêers binne `es` en `de` soos jy onder `en` het

 ## Ander opsies

 ### Droëloop
 Slaag `-n` / `--dry-run` om te wys wat gedoen sou word, maar moenie eintlik enige API-oproepe maak of enige lêers skryf nie

 ### Krag
 Slaag `-f` / `--force` om altyd vertalings te herskep, selfs al bestaan dit reeds

 ### Pas by
 Slaag `-m` / `--match` om die lêers wat verwerk word wanneer dit in gidsmodus uitgevoer word, te beperk

 Jy wil dalk nie altyd *elke* lêer in jou brongids na jou teikengids vertaal nie

 Die waarde van die `-m` / `--match` opsie is 'n regex (pasop dopaanhalingsreëls!) wat spesifiseer
 watter lêers vertaal moet word

 As jy twyfel, kan jy hierdie opsie kombineer met `-n` / `--dry-run` om te sien watter lêers vertaal sal word

 ### Sluit uit
 Soms pas jou `-m` te veel lêers. Gebruik die `-e` / `--excludes` opsie om eksplisiet uit te sluit
 lêers wat andersins sou ooreenstem

 Jy kan verskeie regexes lys, geskei deur spasies

 'n Algemene gebruik sal wees: `--excludes node_modules dist \.git build tmp`

 ### Handvatsels
 Die stringe om te vertaal kan `{{ handlebars }}` -sjablone bevat, hetsy met twee of drie krulhakies

 Jy wil waarskynlik * NIE * wil hê dat die goed in daardie sjablone vertaal moet word nie

 Slaag die `-H` / `--handlebars` vlag, en enigiets binne `{{ ... }}` sal nie vertaal word nie

 ### Markdown
 Markdown is nie teks of html nie, so Google Translate het 'n paar probleme daarmee

 Die `-M` / `--markdown` vlag maak spesiale hantering vir markdown lêers moontlik

 Met markdown-lêers, as jy nie die `-M` vlag gebruik nie, sal jy waarskynlik hierdie probleme vind:
 * Gebreekte skakels. In die vertaling verskyn 'n spasiekarakter nadat 'n afmerkskakelbeskrywing eindig (met `]` ) maar
 voordat sy teikenskakel begin (met `(` ). Dit veroorsaak dat die afmerking verkeerd weergee, en die skakel
 is gebreek wanneer die dokument bekyk word.
 * Kodeblokke word vertaal. Google translate weet nie wat afmerk kode beskou en wat nie
 * Verkeerde spasiëring vir ingekeep kodeblokke. Spasiëring is moeilik om in vertaling te bewaar
 * Dinge binne-in `backticks` ' sal vertaal word as jy amper altyd wil hê dit moet letterlike waardes wees

 Wanneer die `-M` / `--markdown` vlag geaktiveer is:
 * Die patroon `](` sal gekondenseer word na `](` om sodoende die gebroke afmerkskakels reg te stel
 * 'n "No translate"-omhulsel sal rondom ingekeep kodeblokke geplaas word, wat behoorlike inkeping behou en verseker dat hulle nie vertaal word nie
 * 'n "No translate"-omhulsel sal rondom teks binne `backticks` geplaas word om te verseker dat hulle nie vertaal word nie

 ### Verwerk-as
 Normaalweg word alles as gewone teks verwerk

 As jou inhoud HTML is, sal dit vermink word tensy jy die opsie `-p html` / `--process-as html`

 ### Filter
 Vir die avontuurlustiges: wanneer jy lêers in 'n gids verwerk, kan jy die `-F` / `--filter` opsie slaag
 om die uitvoer te filter voordat dit na die lêerstelsel geskryf word

 Die waarde van hierdie opsie moet 'n pad na 'n JS-lêer wees wat 'n funksie genaamd `filter`

 Die `filter` funksie moet `async` wees omdat `await` daarop geroep sal word

 Voordat lêers na skyf geskryf word, sal die hele lêerinhoud as 'n string na die `filter` funksie oorgedra word

 Die terugkeerwaarde van die `filter` funksie is wat eintlik na die stoor geskryf sal word

 Jy het dus totale beheer oor wat uiteindelik geskryf gaan word

 Die `filter` skrip sal op die volgende plekke gesoek word (met `.js` sal by die filter aangeheg word
 naam, tensy dit reeds op `.js` eindig)
 * Die huidige gids
 * 'n Gids met die naam `.hokey-filters` binne die huidige gids
 * 'n Gids met die naam `${HOME}/.hokey-filters` , waar `${HOME}` die huidige gebruiker se tuisgids is
 * Die ingeboude [filtergids](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Filterparameters
 Die `filter` -string kan veelvuldige woorde wees. In hierdie geval is die eerste woord die filternaam, en
 die oorblywende woorde sal as argumente na die `filter` funksie deurgegee word

 ### Hulp
 Gebruik `-h` / `--help` om hulp te wys

 ## JSON joernaal opdragte
 Met die `-j` / `--json` opsie, kan jy verskeie gekoördineerde `hokey` opdragte uitvoer

 Volgens konvensie word hierdie lêer `hokey.json` genoem, maar jy kan dit noem wat jy wil

 As jy 'n gids as die `-j` opsie deurgee, sal `hokey` vir 'n `hokey.json` in daardie gids soek

 Die JSON-lêer moet een voorwerp bevat. Binne daardie voorwerp is sy eiendomsname dieselfde as
 die opdragreëlopsies, plus een bykomende eiendom genaamd `hokey`

 Die `hokey` eienskap is 'n reeks opdragte om uit te voer. Die eiendomme wat binne hierdie opdragte verklaar word, sal
 ignoreer enige duplikaatverklarings in die buitenste voorwerp.

 Binne elke voorwerp in die `hokey` skikking moet jy 'n `name` en die invoer- en uitvoerlêers spesifiseer

 Hier is 'n voorbeeld van 'n `hokey.json`

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

 ### Veelvuldige invoerlêers
 Slaag 'n verskeidenheid lêerpaaie as `infiles` in plaas van 'n enkele pad `infile` , soos in hierdie voorbeeld:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indekse
 Wanneer jy na baie tale vertaal, kan `hokey` 'n indekslêer skep wat al die vertalings wat gemaak is, lys
 en verskaf skakels na hulle

 *Wanneer u indekse genereer, kan u slegs een invoerbron hê*

 Slaag die `-I` / `--index` opsie, die waarde is waar die indekslêer gegenereer sal word, wat 'n lêer kan wees
 of 'n gids. As dit 'n gids is, sal 'n verstek lêernaam gebruik word, gebaseer op die sjabloon (sien hieronder)

 Gebruik die `-A` / `--index-template` om te bepaal hoe die indeksuitvoer geformateer word. Jy kan 'html' spesifiseer,
 'markdown', 'text', of die lêerpad na jou eie [HandlebarsJS](https://handlebarsjs.com/)-sjabloon

 As jy jou eie sjabloon spesifiseer, moet jy ook 'n lêer (nie 'n gids nie) spesifiseer vir die `-I` / `--index`
 opsie

 ## Geniet dit om tale te vertaal!

</pre>
