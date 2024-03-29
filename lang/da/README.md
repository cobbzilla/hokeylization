Hokeylisering
 ==============
 Hvorfor kan jeg ikke køre hele min app eller websted gennem Google Oversæt og få en grundlæggende oversættelse på et andet sprog?

 ***Nu kan du!***

 Navnet `hokeylization` er et portmanteau, der betyder "hokey lokalisering"

 Det er noget hokey, fordi det er meget enkelt: det sender strenge til Google Translate

 Og det er enkelt, men også meget kraftfuldt. Det har særlig understøttelse af HTML-dokumenter,
 [HandlebarsJS](https://handlebarsjs.com/) skabeloner,
 og [Markdown](https://daringfireball.net/projects/markdown) filer.

 Du kan oversætte:
 * et JavaScript-objekt, der indeholder meddelelser
 * et hvilket som helst antal filer eller mapper, der altid krydser mapper rekursivt

 # Læs dette på et andet sprog
 Dette README.md-dokument er blevet oversat ved hjælp af selve hokeyliseringsværktøjet til
 **[alle sprog understøttet af Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jeg er sikker på, at det ikke er perfekt, men jeg håber, det er bedre end ingenting!

 [🇸🇦 arabisk](../ar/README.md)
 [🇧🇩 bengalsk](../bn/README.md)
 [🇩🇪 tysk](../de/README.md)
 [🇺🇸 engelsk](../en/README.md)
 [🇪🇸 spansk](../es/README.md)
 [🇫🇷 fransk](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonesisk](../id/README.md)
 [🇮🇹 italiensk](../it/README.md)
 [🇯🇵 japansk](../ja/README.md)
 [🇰🇷 koreansk](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 polsk](../pl/README.md)
 [🇧🇷 portugisisk](../pt/README.md)
 [🇷🇺 russisk](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 tyrkisk](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamesisk](../vi/README.md)
 [🇨🇳 kinesisk](../zh/README.md)


 **[📚 ... Alle sprog ...](../README.md)**
 ----

 ### Er der et problem med denne oversættelse af README?
 Denne særlige oversættelse af originalen [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 kan være defekt -- *rettelser er meget velkomne!* Send venligst en [pull request på GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 eller hvis du ikke er tryg ved at gøre det, [åbn et problem](https://github.com/cobbzilla/hokeylization/issues)

 Når du opretter et nyt GitHub-problem om en oversættelse, skal du gøre følgende:
 * inkludere sidens URL (kopier/indsæt fra browserens adresselinje)
 * medtag den nøjagtige tekst, der er forkert (kopier/indsæt fra browser)
 * beskriv venligst hvad der er galt -- er oversættelsen forkert? er formateringen brudt på en eller anden måde?
 * kom med et forslag til en bedre oversættelse, eller hvordan teksten skal formateres korrekt
 * **Tak skal du have!**

 # Indhold
 * [Kilde](#Kilde)
 * [Support and Funding](#Support-and-Funding)
 * [Installation](#Installation)
 * [Opsætning](#Opsætning)
 * [Oversættelse af en JavaScript-streng-ressourcefil](#Oversættelse-en-JavaScript-streng-ressourcefil)
 * [Oversættelse af en mappe med tekstfiler](#Oversættelse af en mappe med tekstfiler)
 * [Andre muligheder](#Other-options)
 * [JSON batch-kommandoer](#JSON-batch-kommandoer)

 ## Kilde
 * [hokeylization på GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization på npm](https://www.npmjs.com/package/hokeylization)

 ## Støtte og finansiering
 Jeg forsøger at være en professionel open source softwareudvikler. Jeg har arbejdet i
 softwareindustrien i mange år, har jeg startet succesrige virksomheder og solgt dem til offentlige virksomheder.
 For nylig mistede jeg mit job, og jeg har ikke rigtig noget andet arbejde i kø

 Så jeg vil prøve at skrive nyttig software og se om det virker

 Hvis du kan lide at bruge denne software, ville jeg være så glad for at modtage selv
 mindste [månedligt bidrag via Patreon](https://www.patreon.com/cobbzilla)

 *Tak skal du have!*

 ## Installation
 For at bruge kommandolinjeværktøjet skal du installere ved at bruge `npm` eller `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 For at bruge som et bibliotek skal du installere `lite` versionen, som er meget mindre:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Se derefter hjælpen til kommandoen `hokey` :

    hokey --help
    hokey -h

 Vil du se output på dit sprog eller et andet sprog?

 `hokey` forsøger at detektere sproget automatisk fra din shells miljøvariabler

 Du kan tvinge et sprog ved at indstille `LC_ALL` :

    LC_ALL=it hokey --help

 Bemærk, at hvis du har installeret `hokeylization-lite` , er kommandohjælp kun tilgængelig på engelsk

 ## Opsætning
 Indstil miljøvariablen `GOOGLE_TRANSLATE_PROJECT_ID` for at identificere dit Google Oversæt-projekt

 Indstil miljøvariablen `GOOGLE_APPLICATION_CREDENTIALS` til de JSON-legitimationsoplysninger, du downloadede
 efter at have fundet ud af, hvordan godkendelse fungerer på Google cloud (det kan være sjovt)

 Hvis du kører fra kildekoden, kan du også lægge disse i en `.env` -fil i kilden
 mappe, de vil blive indlæst under kørsel via [dotenv](https://www.npmjs.com/package/dotenv)

 ## Oversættelse af en JavaScript-strengressourcefil
 Din strengtabel **skal** være i en JavaScript-fil i en af disse to former:

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

 Hvis denne fil fik navnet `myfile.en.js` , kan du oversætte den til spansk og tysk med:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` i ovenstående er specielt -- det er et reserveret ord i dette værktøj!

 `LANG` erstattes med sprogkoden for outputfilerne

 Således opretter ovenstående kommando filerne:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` er en kommasepareret liste over ISO-sprogkoder
 [understøttet af Google Translate](https://cloud.google.com/translate/docs/languages)

 Hvis outputfilen allerede eksisterer, vil den blive undersøgt for at afgøre, hvilke nøgler der allerede findes.
 Eksisterende nøgler vil ikke blive oversat. Oversættelser for manglende nøgler vil blive genereret og tilføjet
 til slutningen af JS-objektet. Hele filen bliver altid omskrevet.

 For at gennemtvinge genoversættelse af alle nøgler, brug valgmuligheden `-f` / `--force`

 ## Oversættelse af en mappe med tekstfiler
 Du kan også oversætte en mappe med filer. hokeylization vil rekursivt besøge hver
 fil i mappen og kør dens indhold gennem Google Oversæt, og gem outputtet
 til en identisk navngivet fil i et separat mappetræ

 Når målet for din oversættelse er en mappe, er denne tilstand aktiveret

 `-o` / `--outfile` specificerer output-mappen

 **STOR ADVARSEL**: Når du oversætter mapper, **MÅ IKKE** specificere en outputmappe
 det er i din input-mappe! Hvis du gør dette, vil du:
 * fremkalde uendelig rekursion
 * få din Google-regning op
 * Fyld din disk op
 * have det mindre sjovt

 Her er et eksempel på, hvad *ikke skal gøres*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Når dette kører, skrives oversatte filer til `templates/es` , og bliver dermed nye
 kildefiler til at oversætte, da de er under `templates/` -- denne proces fortsætter
 for evigt, gør det ikke!

 #### Korrekt brug
 OK, lad os sige, at du har nogle e-mail-skabeloner i en mappe:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 For at oversætte alle disse til spansk og tysk, kør:

    hokey -l es,de -o templates/email/LANG templates/email/en

 I ovenstående er `LANG` et reserveret ord og vil blive erstattet med ISO-sprogkoden

 Hvad sker der, når ovenstående kører:
 * `templates/email/es` og `templates/email/de` vil blive oprettet (hvis de ikke findes)
 * Hver fil i `templates/email/en` vil blive oversat til spansk og tysk
 * Eksisterende outputfiler vil ikke blive gendannet, medmindre du bruger `-f` / `--force`
 * Du vil ende med en identisk mappestruktur og filer inden for `es` og `de` som du har under `en`

 ## Andre muligheder

 ### Tørt løb
 `-n` / `--dry-run` for at vise, hvad der ville blive gjort, men lav faktisk ikke API-kald eller skriv filer

 ### Kraft
 `-f` / `--force` for altid at genskabe oversættelser, selvom de allerede eksisterer

 ### Match
 `-m` / `--match` for at begrænse de filer, der behandles, når de kører i mappe-tilstand

 Du ønsker måske ikke altid at oversætte *hver* fil i din kildemappe til din målmappe

 Værdien af `-m` / `--match` er et regex (pas på shell-citatregler!), der specificerer
 hvilke filer der skal oversættes

 Når du er i tvivl, kan du kombinere denne mulighed med `-n` / `--dry-run` for at se, hvilke filer der ville blive oversat

 ### Udelukker
 Nogle gange matcher din `-m` for mange filer. Brug muligheden `-e` / `--excludes` for eksplicit at ekskludere
 filer, der ellers ville have matchet

 Du kan angive flere regexes, adskilt af mellemrum

 En almindelig brug ville være: `--excludes node_modules dist \.git build tmp`

 ### Styr
 Strengene, der skal oversættes, kan indeholde `{{ handlebars }}` skabeloner, enten med to eller tre krøllede seler

 Du vil sandsynligvis *IKKE* have, at tingene i disse skabeloner skal oversættes

 Passér `-H` / `--handlebars` , og alt inden for `{{ ... }}` vil ikke blive oversat

 ### Markdown
 Markdown er hverken tekst eller html, så Google Translate har nogle problemer med det

 `-M` / `--markdown` muliggør speciel håndtering af markdown-filer

 Med markdown-filer, hvis du ikke bruger `-M` flaget, vil du sandsynligvis finde disse problemer:
 * Ødelagte links. I oversættelsen vises et mellemrumstegn efter en markdown-linkbeskrivelse slutter (med `]` ), men
 før dets mållink begynder (med `(` ). Dette får markdown til at gengives forkert, og linket
 er i stykker, når du ser dokumentet.
 * Kodeblokke bliver oversat. Google translate ved ikke, hvad markdown betragter som kode, og hvad det ikke gør
 * Forkert mellemrum for indrykkede kodeblokke. Mellemrum er vanskeligt at bevare i oversættelse
 * Ting inde i `backticks` bliver oversat, når du næsten altid vil have dem til at være bogstavelige værdier

 Når `-M` / `--markdown` er aktiveret:
 * Mønsteret `](` vil blive kondenseret til `](` og fikserer således de ødelagte markdown-links
 * En "no translate"-indpakning vil blive placeret rundt om indrykkede kodeblokke, hvilket bevarer korrekt indrykning og sikrer, at de ikke oversættes
 * En "no translate"-indpakning vil blive placeret rundt om tekst i `backticks` for at sikre, at de ikke oversættes

 ### Behandle-som
 Normalt behandles alt som almindelig tekst

 Hvis dit indhold er HTML, vil det blive ødelagt, medmindre du passerer `-p html` " / `--process-as html` "-indstillingen

 ### Filter
 For de eventyrlystne: Når du behandler filer i en mappe, kan du passere `-F` / `--filter`
 at filtrere outputtet, før det skrives til filsystemet

 Værdien af denne indstilling skal være en sti til en JS-fil, der eksporterer en funktion ved navn `filter`

 `filter` -funktionen skal være `async` fordi `await` vil blive kaldt på den

 Før filer skrives til disk, vil hele filindholdet blive overført til `filter` -funktionen som en streng

 Returværdien fra `filter` -funktionen er det, der rent faktisk bliver skrevet til lageret

 Dermed har du total kontrol over, hvad der til sidst skal skrives

 `filter` scriptet vil blive ledt efter på følgende steder (med `.js` vil blive tilføjet til filteret
 navn, medmindre det allerede ender på `.js` )
 * Den aktuelle mappe
 * En mappe med navnet `.hokey-filters` i den aktuelle mappe
 * En mappe ved navn `${HOME}/.hokey-filters` , hvor `${HOME}` er den aktuelle brugers hjemmemappe
 * Den indbyggede [filtermappe](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Filterparametre
 `filter` kan være flere ord. I dette tilfælde er det første ord filternavnet og
 de resterende ord vil blive sendt som argumenter til `filter` -funktionen

 ### Hjælp
 Brug `-h` / `--help` for at vise hjælp

 ## JSON batch-kommandoer
 Med muligheden `-j` / `--json` kan du køre flere koordinerede `hokey` kommandoer

 Ifølge konventionen hedder denne fil `hokey.json` , men du kan navngive den, hvad du vil

 Hvis du sender en mappe som `-j` ", vil `hokey` " lede efter en `hokey.json` i den mappe

 JSON-filen skal indeholde ét objekt. Inden for dette objekt er dets egenskabsnavne de samme som
 kommandolinjeindstillingerne plus en ekstra egenskab ved navn `hokey`

 Egenskaben `hokey` er en række kommandoer, der skal køres. Egenskaberne erklæret i disse kommandoer vil
 tilsidesætte eventuelle duplikerede erklæringer i det ydre objekt.

 Inden for hvert objekt i `hokey` arrayet skal du angive et `name` og input- og outputfilerne

 Her er et eksempel på en `hokey.json`

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

 ### Flere inputfiler
 Send en række filstier som `infiles` i stedet for en enkelt sti `infile` , som i dette eksempel:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indekser
 Når du oversætter til mange sprog, kan `hokey` oprette en indeksfil, der viser alle de oversættelser, der er lavet
 og giver links til dem

 *Når du genererer indekser, kan du kun have én inputkilde*

 Bestå `-I` / `--index` ", værdien er der, hvor indeksfilen vil blive genereret, som kan være en fil
 eller en mappe. Hvis det er en mappe, vil et standard filnavn blive brugt, baseret på skabelonen (se nedenfor)

 Brug `-A` / `--index-template` til at bestemme, hvordan indeksoutput formateres. Du kan angive 'html',
 'markdown', 'text' eller filstien til din egen [HandlebarsJS](https://handlebarsjs.com/) skabelon

 Hvis du angiver din egen skabelon, skal du også angive en fil (ikke en mappe) for `-I` / `--index`
 mulighed

 ## Hav det sjovt med at oversætte sprog!

</pre>
