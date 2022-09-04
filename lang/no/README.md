Hokeylisering
 ==============
 Navnet er en portmanteau, som betyr 'hokey lokalisering'

 Det er vanvittig fordi det er veldig enkelt: det sender strenger til Google Translate

 Du kan oversette:
 * et JavaScript-objekt som inneholder meldinger
 * en katalog med filer, rekursivt

 # Les dette på et annet språk
 Dette README.md-dokumentet har blitt oversatt, ved å bruke selve hokeyliseringsverktøyet, til
 **[alle språk som støttes av Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jeg er sikker på at det ikke er perfekt, men jeg håper det er bedre enn ingenting!

 [🇸🇦 arabisk](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
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
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 polsk](../pl/README.md)
 [🇧🇷 portugisisk](../pt/README.md)
 [🇷🇺 russisk](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 tyrkisk](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamesisk](../vi/README.md)
 [🇨🇳 kinesisk](../zh/README.md)


 **[📚 ... Alle språk ...](../README.md)**
 ----

 ### Er det et problem med denne oversettelsen av README?
 Denne spesielle oversettelsen av originalen [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 kan være feil -- *rettelser er svært velkomne!* Send en [pull request på GitHub](https://github.com/cobbzilla/yuebing/pulls),
 eller hvis du ikke er komfortabel med å gjøre det, [åpne et problem](https://github.com/cobbzilla/yuebing/issues)

 Når du oppretter et nytt GitHub-problem om en oversettelse, vennligst gjør:
 * Ta med sidens URL (kopier/lim inn fra nettleserens adresselinje)
 * Ta med den eksakte teksten som er feil (kopier/lim inn fra nettleseren)
 * kom gjerne med et forslag til en bedre oversettelse
 * **Takk skal du ha!**

 # Innhold
 * [Kilde](#Kilde)
 * [Support and Funding](#Support-and-Funding)
 * [Installasjon](#Installasjon)
 * [Oppsett](#Oppsett)
 * [Oversette en JavaScript-strengressursfil](#Translating-a-JavaScript-string-resource-file)
 * [Oversette en katalog med tekstfiler](#Oversette-en-katalog med tekstfiler)
 * [Andre alternativer](#Andre-alternativer)

 ## Kilde
 * [hokeylization på GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Støtte og finansiering
 Jeg prøver å være en profesjonell programvareutvikler med åpen kildekode. Jeg har jobbet i
 programvareindustrien i mange år, har jeg startet suksessfulle selskaper og solgt dem til offentlige selskaper.
 Nylig mistet jeg jobben min, og jeg har egentlig ikke noe annet arbeid på rad

 Så jeg skal prøve å skrive nyttig programvare og se om det fungerer

 Jeg vil virkelig sette pris på selv den minste [månedlige bidrag via Patreon](https://www.patreon.com/cobbzilla)

 ## Installasjon
 For å bruke kommandolinjeverktøyet, installer med `npm` eller `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 For å bruke som et bibliotek, installer `lite` versjonen, som er mye mindre:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Se så på hjelpen for `hokey` -kommandoen:

    hokey --help
    hokey -h

 Vil du se utdata på ditt språk eller et annet språk?

 `hokey` prøver å oppdage språket automatisk fra skallets miljøvariabler

 Du kan tvinge et språk ved å sette `LC_ALL` :

    LC_ALL=it hokey --help

 Merk at hvis du har installert `hokeylization-lite` , er kommandohjelp kun tilgjengelig på engelsk

 ## Oppsett
 Angi `GOOGLE_TRANSLATE_PROJECT_ID` " for å identifisere Google Translate-prosjektet ditt

 Angi miljøvariabelen `GOOGLE_APPLICATION_CREDENTIALS` " til JSON-legitimasjonen du lastet ned
 etter å ha funnet ut hvordan autentisering fungerer på Google Cloud (det kan være morsomt)

 Hvis du kjører fra kildekoden, kan du også legge disse i en `.env` -fil i kilden
 katalogen blir de lastet inn under kjøring via [dotenv](https://www.npmjs.com/package/dotenv)

 ## Oversettelse av en JavaScript-strengressursfil
 Din strengtabell **må** være i en JavaScript-fil i en av disse to formene:

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

 Hvis denne filen ble kalt `myfile.en.js` , kan du oversette den til spansk og tysk med:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` i det ovenstående er spesielt -- det er et reservert ord i dette verktøyet!

 `LANG` erstattes med språkkoden for utdatafilene

 Dermed oppretter kommandoen ovenfor filene:

    myfile.es.js
    myfile.de.js

 Alternativet `-l` / `--languages` er en kommadelt liste over ISO-språkkoder
 [støttet av Google Translate](https://cloud.google.com/translate/docs/languages)

 Hvis utdatafilen allerede eksisterer, vil den bli undersøkt for å finne ut hvilke nøkler som allerede eksisterer.
 Eksisterende nøkler vil ikke bli oversatt. Oversettelser for manglende nøkler vil bli generert og lagt til
 til slutten av JS-objektet. Hele filen skrives alltid om.

 For å tvinge alle nøkler på nytt, bruk alternativet `-f` / `--force`

 ## Oversette en katalog med tekstfiler
 Du kan også oversette en katalog med filer. hokeylisering vil rekursivt besøke hver
 fil i katalogen og kjør innholdet gjennom Google Translate, og lagre utdataene
 til en identisk navngitt fil i et eget katalogtre

 Når målet for oversettelsen din er en katalog, er denne modusen aktivert

 Alternativet `-o` / `--outfile` spesifiserer utdatakatalogen

 **STOR ADVARSEL**: Når du oversetter kataloger, **IKKE** spesifiser en utdatakatalog
 som er i inndatakatalogen din! Hvis du gjør dette, vil du:
 * indusere uendelig rekursjon
 * kjør Google-regningen din
 * fyll opp disken din
 * ha mindre moro

 Her er et eksempel på hva *ikke å gjøre*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Når dette kjører, blir oversatte filer skrevet til `templates/es` , og blir dermed nye
 kildefiler som skal oversettes, siden de er under `templates/` -- denne prosessen fortsetter
 for alltid, ikke gjør det!

 #### Riktig bruk
 OK, la oss si at du har noen e-postmaler i en katalog:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 For å oversette alle disse til spansk og tysk, kjør:

    hokey -l es,de -o templates/email/LANG templates/email/en

 I det ovenstående er `LANG` et reservert ord og vil bli erstattet med ISO-språkkoden

 Hva skjer når ovenstående kjører:
 * `templates/email/es` ' og `templates/email/de` katalogene vil bli opprettet (hvis de ikke eksisterer)
 * Hver fil i `templates/email/en` vil bli oversatt til spansk og tysk
 * Eksisterende utdatafiler vil ikke bli regenerert med mindre du bruker `-f` / `--force`
 * Du vil ende opp med en identisk katalogstruktur og filer innenfor `es` og `de` som du har under `en`

 ## Andre muligheter

 ### Tørrløp
 Pass `-n` / `--dry-run` for å vise hva som ville bli gjort, men ikke foreta noen API-kall eller skrive noen filer

 ### Kraft
 Pass `-f` / `--force` for alltid å gjenskape oversettelser, selv om de allerede eksisterer

 ### Kamp
 Pass `-m` / `--match` for å begrense filene som behandles når du kjører i katalogmodus

 Du vil kanskje ikke alltid oversette *hver* fil i kildekatalogen din til målkatalogen

 Verdien av `-m` / `--match` -alternativet er et regulært uttrykk (pass opp for shell-siteringsregler!) som spesifiserer
 hvilke filer som skal oversettes

 Når du er i tvil, kan du kombinere dette alternativet med `-n` / `--dry-run` for å se hvilke filer som vil bli oversatt

 ### Ekskluderer
 Noen ganger samsvarer din `-m` for mange filer. Bruk alternativet `-e` / `--excludes` for å eksplisitt ekskludere
 filer som ellers ville ha samsvart

 Du kan liste opp flere regexes, atskilt med mellomrom

 En vanlig bruk vil være: `--excludes node_modules dist \.git build tmp`

 ### Styre
 Strengene som skal oversettes kan inneholde `{{ handlebars }}` -maler, enten med to eller tre krøllete klammeparenteser

 Du vil sannsynligvis *IKKE* at tingene i disse malene skal oversettes

 Pass på `-H` / `--handlebars` , og alt innenfor `{{ ... }}` vil ikke bli oversatt

 ### Markdown
 Markdown er verken tekst eller html, så Google Translate har noen problemer med det

 `-M` / `--markdown` flagget muliggjør spesiell håndtering av markdown-filer

 Med markdown-filer, hvis du ikke bruker `-M` -flagget, vil du sannsynligvis finne disse problemene:
 * Ødelagte lenker. I oversettelsen vises et mellomromstegn etter at en beskrivelse av markdown-lenker slutter (med `]` ) men
 før målkoblingen begynner (med `(` ). Dette fører til at markdown-en blir feil gjengitt, og koblingen
 er ødelagt når du ser på dokumentet.
 * Kodeblokker blir oversatt. Google translate vet ikke hva markdown anser kode og hva den ikke gjør
 * Feil mellomrom for innrykkede kodeblokker. Avstand er vanskelig å bevare i oversettelse
 * Ting inne i `backticks` blir oversatt når du nesten alltid vil at de skal være bokstavelige verdier

 Når flagget `-M` / `--markdown` er aktivert:
 * Mønsteret `](` vil bli komprimert til `](` og fikser dermed de ødelagte markdown-lenkene
 * En "no translate"-omslag vil bli plassert rundt innrykkede kodeblokker, for å bevare riktig innrykk og sikre at de ikke blir oversatt
 * En "no translate"-omslag vil bli plassert rundt tekst innenfor `backticks` for å sikre at de ikke blir oversatt

 ### Behandle-som
 Normalt behandles alt som ren tekst

 Hvis innholdet ditt er HTML, vil det bli ødelagt med mindre du passerer alternativet `-p html` / `--process-as html`

 ### Filter
 For de eventyrlystne: når du behandler filer i en katalog, kan du passere alternativet `-F` / `--filter`
 for å filtrere utdata før det skrives til filsystemet

 Verdien av dette alternativet må være en bane til en JS-fil som eksporterer en funksjon kalt `filter`

 `filter` funksjonen må være `async` fordi `await` vil bli kalt på den

 Før filer skrives til disk, vil hele filinnholdet bli sendt til `filter` -funksjonen som en streng

 Returverdien fra `filter` -funksjonen er det som faktisk vil bli skrevet til lagring

 Dermed har du total kontroll over hva som til slutt skal skrives

 ### Hjelp
 Bruk `-h` / `--help` for å vise hjelp

 ## Lykke til med oversettelsen!

</pre>
