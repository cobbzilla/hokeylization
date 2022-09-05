Hokeylisering
 ==============
 Varför kan jag inte köra hela min app eller webbplats via Google Translate och få en grundläggande översättning till ett annat språk?

 ***Nu kan du!***

 Namnet `hokeylization` är en portmanteau, vilket betyder "hokey lokalisering"

 Det är lite hokey eftersom det är väldigt enkelt: det skickar strängar till Google Translate

 Och det är enkelt, men samtidigt väldigt kraftfullt. Den har speciellt stöd för HTML-dokument,
 [HandlebarsJS](https://handlebarsjs.com/) mallar,
 och [Markdown](https://daringfireball.net/projects/markdown) filer.

 Du kan översätta:
 * ett JavaScript-objekt som innehåller meddelanden
 * valfritt antal filer eller kataloger, alltid korsar kataloger rekursivt

 # Läs detta på ett annat språk
 Detta README.md-dokument har översatts, med hjälp av själva verktyget för hokeylisering, till
 **[alla språk som stöds av Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jag är säker på att det inte är perfekt, men jag hoppas att det är bättre än ingenting!

 [🇸🇦 arabiska](../ar/README.md)
 [🇧🇩 bengaliska](../bn/README.md)
 [🇩🇪 tyska](../de/README.md)
 [🇺🇸 engelska](../en/README.md)
 [🇪🇸 spanska](../es/README.md)
 [🇫🇷 franska](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonesiska](../id/README.md)
 [🇮🇹 italienska](../it/README.md)
 [🇯🇵 japanska](../ja/README.md)
 [🇰🇷 koreanska](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 polska](../pl/README.md)
 [🇧🇷 portugisiska](../pt/README.md)
 [🇷🇺 ryska](../ru/README.md)
 [🇰🇪 swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkiska](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamesiska](../vi/README.md)
 [🇨🇳 kinesiska](../zh/README.md)


 **[📚 ... Alla språk ...](../README.md)**
 ----

 ### Finns det ett problem med denna översättning av README?
 Denna speciella översättning av originalet [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 kan vara felaktiga -- *korrigeringar är mycket välkomna!* Skicka en [pull request på GitHub](https://github.com/cobbzilla/yuebing/pulls),
 eller om du inte är bekväm med att göra det, [öppna ett problem](https://github.com/cobbzilla/yuebing/issues)

 När du skapar ett nytt GitHub-nummer om en översättning, vänligen gör:
 * inkludera sidans URL (kopiera/klistra in från webbläsarens adressfält)
 * inkludera den exakta texten som är fel (kopiera/klistra in från webbläsaren)
 * vänligen beskriv vad som är fel -- är översättningen felaktig? är formateringen trasig på något sätt?
 * kom gärna med ett förslag på en bättre översättning eller hur texten bör formateras korrekt
 * **Tack!**

 # Innehåll
 * [Källa](#Källa)
 * [Support and Funding](#Support-and-Funding)
 * [Installation](#Installation)
 * [Setup](#Setup)
 * [Översätta en resursfil för en JavaScript-sträng](#Översätta-en-JavaScript-strängresursfil)
 * [Översätta en katalog med textfiler](#Översätta-en-katalog-av-text-filer)
 * [Andra alternativ](#Övriga-alternativ)
 * [JSON batch-kommandon](#JSON-batch-kommandon)

 ## Källa
 * [hokeylization på GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Stöd och finansiering
 Jag försöker bli en professionell mjukvaruutvecklare med öppen källkod. Jag har jobbat i
 mjukvaruindustrin i många år har jag startat framgångsrika företag och sålt dem till offentliga företag.
 Nyligen förlorade jag mitt jobb, och jag har egentligen inget annat arbete på gång

 Så jag ska försöka skriva användbar programvara och se om det fungerar

 Jag skulle verkligen uppskatta även den minsta [månadsbidrag via Patreon](https://www.patreon.com/cobbzilla)

 ## Installation
 För att använda kommandoradsverktyget, installera med `npm` eller `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 För att använda som ett bibliotek, installera `lite` versionen, som är mycket mindre:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Titta sedan på hjälpen för kommandot `hokey` :

    hokey --help
    hokey -h

 Vill du se utdata på ditt språk eller ett annat språk?

 `hokey` försöker detektera språket automatiskt från ditt skals miljövariabler

 Du kan tvinga fram ett språk genom att ställa in `LC_ALL` :

    LC_ALL=it hokey --help

 Observera att om du har installerat `hokeylization-lite` är kommandohjälp endast tillgänglig på engelska

 ## Uppstart
 Ställ in `GOOGLE_TRANSLATE_PROJECT_ID` för att identifiera ditt Google Translate-projekt

 Ställ in `GOOGLE_APPLICATION_CREDENTIALS` till JSON-uppgifterna du laddade ner
 efter att ha listat ut hur autentisering fungerar på Google moln (det kan vara roligt)

 Om du kör från källkoden kan du också lägga dessa i en `.env` -fil i källkoden
 katalogen kommer de att laddas under körning via [dotenv](https://www.npmjs.com/package/dotenv)

 ## Översätta en resursfil för en JavaScript-sträng
 Din strängtabell **måste** finnas i en JavaScript-fil i någon av dessa två former:

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

 Om den här filen fick namnet `myfile.en.js` , kan du översätta den till spanska och tyska med:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` i ovanstående är speciellt -- det är ett reserverat ord i det här verktyget!

 `LANG` ersätts med språkkoden för utdatafilerna

 Således skapar kommandot ovan filerna:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` är en kommaseparerad lista med ISO-språkkoder
 [stöds av Google Translate](https://cloud.google.com/translate/docs/languages)

 Om utdatafilen redan finns, kommer den att undersökas för att avgöra vilka nycklar som redan finns.
 Befintliga nycklar kommer inte att översättas. Översättningar för saknade nycklar kommer att genereras och läggas till
 till slutet av JS-objektet. Hela filen skrivs alltid om.

 För att tvinga om översättning av alla nycklar, använd `-f` / `--force`

 ## Översätta en katalog med textfiler
 Du kan också översätta en katalog med filer. hokeylisering kommer rekursivt att besöka varje
 filen i katalogen och kör dess innehåll via Google Translate och spara utdata
 till en fil med samma namn i ett separat katalogträd

 När målet för din översättning är en katalog är detta läge aktiverat

 `-o` / `--outfile` anger utdatakatalogen

 **STOR VARNING**: När du översätter kataloger ska du ** INTE** ange en utdatakatalog
 som finns i din inmatningskatalog! Om du gör detta kommer du:
 * inducera oändlig rekursion
 * kör upp din Google-räkning
 * fyll upp din disk
 * ha mindre kul

 Här är ett exempel på vad *inte ska göra*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 När detta körs skrivs översatta filer till `templates/es` , och blir därmed nya
 källfiler att översätta, eftersom de är under `templates/` -- denna process fortsätter
 för alltid, gör det inte!

 #### Korrekt användning
 OK, låt oss säga att du har några e-postmallar i en katalog:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 För att översätta alla dessa till spanska och tyska, kör:

    hokey -l es,de -o templates/email/LANG templates/email/en

 I ovanstående är `LANG` ett reserverat ord och kommer att ersättas med ISO-språkkoden

 Vad händer när ovanstående körs:
 * `templates/email/es` och `templates/email/de` kommer att skapas (om de inte finns)
 * Varje fil i `templates/email/en` kommer att översättas till spanska och tyska
 * Befintliga utdatafiler kommer inte att återskapas om du inte använder `-f` / `--force`
 * Du kommer att få en identisk katalogstruktur och filer inom `es` och `de` som du har under `en`

 ## Andra alternativ

 ### Torrkörning
 Passera `-n` / `--dry-run` för att visa vad som skulle göras, men gör faktiskt inte några API-anrop eller skriv några filer

 ### Kraft
 Passera `-f` / `--force` för att alltid återskapa översättningar, även om de redan finns

 ### Match
 Passera `-m` / `--match` för att begränsa de filer som bearbetas när de körs i katalogläge

 Du kanske inte alltid vill översätta *varje* fil i din källkatalog till din målkatalog

 Värdet för alternativet "-m" / `--match` `-m` ett regex (var försiktig med regler för skalcitat!) som specificerar
 vilka filer som ska översättas

 När du är osäker kan du kombinera detta alternativ med `-n` / `--dry-run` för att se vilka filer som skulle översättas

 ### Exkluderar
 Ibland matchar din `-m` för många filer. Använd `-e` / `--excludes` för att explicit exkludera
 filer som annars skulle ha matchat

 Du kan lista flera regex, separerade med mellanslag

 En vanlig användning skulle vara: `--excludes node_modules dist \.git build tmp`

 ### Styre
 Strängarna som ska översättas kan innehålla `{{ handlebars }}` mallar, antingen med två eller tre hängslen

 Du vill förmodligen *INTE* att sakerna i dessa mallar ska översättas

 Passera flaggan "-H" / `--handlebars` `-H` och allt inom `{{ ... }}` kommer inte att översättas

 ### Markdown
 Markdown är varken text eller html, så Google Translate har vissa svårigheter med det

 `-M` / `--markdown` möjliggör speciell hantering av markdown-filer

 Med markdown-filer, om du inte använder flaggan `-M` , kommer du förmodligen att hitta dessa problem:
 * Trasiga länkar. I översättningen visas ett mellanslagstecken efter att en markdownlänksbeskrivning slutar (med `]` ) men
 innan dess mållänk börjar (med `(` ). Detta gör att nedmärkningen renderas felaktigt och länken
 är trasig när du visar dokumentet.
 * Kodblock översätts. Google översätt vet inte vad markdown anser kod och vad den inte gör
 * Felaktigt mellanrum för indragna kodblock. Avstånd är svårt att bevara vid översättning
 * Saker inuti `backticks` kommer att översättas när du nästan alltid vill att de ska vara bokstavliga värden

 När flaggan "-M" / `--markdown` `-M` aktiverad:
 * Mönstret `](` kommer att kondenseras till `](` och fixar därmed de trasiga markdown-länkarna
 * En "no translate"-omslag kommer att placeras runt indragna kodblock, vilket bevarar korrekt indrag och säkerställer att de inte översätts
 * En "no translate"-omslag kommer att placeras runt text inom `backticks` för att säkerställa att de inte översätts

 ### Process-as
 Normalt behandlas allt som vanlig text

 Om ditt innehåll är HTML, kommer det att förvanskas om du inte klarar alternativet `-p html` / `--process-as html`

 ### Filter
 För den äventyrliga: när du bearbetar filer i en katalog kan du skicka alternativet `-F` / `--filter`
 för att filtrera utdata innan det skrivs till filsystemet

 Värdet för detta alternativ måste vara en sökväg till en JS-fil som exporterar en funktion som heter `filter`

 `filter` funktionen måste vara `async` eftersom `await` kommer att anropas på den

 Innan filer skrivs till disk kommer hela filinnehållet att skickas till `filter` funktionen som en sträng

 `filter` från "filter"-funktionen är det som faktiskt kommer att skrivas till minnet

 Därmed har du total kontroll över vad som slutligen kommer att skrivas

 ### Hjälp
 Använd `-h` / `--help` för att visa hjälp

 ## JSON batch-kommandon
 Med `-j` / `--json` kan du köra flera koordinerade `hokey` kommandon

 Enligt konventionen kallas denna fil `hokey.json` , men du kan namnge den vad du vill

 Om du skickar en katalog som alternativet ` `-j` , kommer `hokey` att leta efter en `hokey.json` i den katalogen

 JSON-filen bör innehålla ett objekt. Inom det objektet är dess egenskapsnamn desamma som
 kommandoradsalternativen, plus en ytterligare egenskap som heter `hokey`

 `hokey` är en rad kommandon att köra. Egenskaperna som deklareras inom dessa kommandon kommer
 åsidosätta alla dubbletter av deklarationer i det yttre objektet.

 Inom varje objekt i `hokey` bör du ange ett `name` och in- och utdatafilerna

 Här är ett exempel på en `hokey.json`

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

 ### Flera indatafiler
 Skicka en uppsättning filsökvägar som `infiles` istället för en enda sökväg `infile` , som i det här exemplet:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Index
 När du översätter till många språk kan `hokey` skapa en indexfil som listar alla gjorda översättningar
 och ger länkar till dem

 *När du genererar index kan du bara ha en ingångskälla*

 Passera `-I` / `--index` , värdet är där indexfilen kommer att genereras, vilket kan vara en fil
 eller en katalog. Om det är en katalog kommer ett standardfilnamn att användas, baserat på mallen (se nedan)

 Använd `-A` / `--index-template` för att bestämma hur indexutdata formateras. Du kan ange 'html',
 'markdown', 'text' eller sökvägen till din egen [HandlebarsJS](https://handlebarsjs.com/) mall

 Om du anger din egen mall måste du också ange en fil (inte en katalog) för `-I` / `--index`
 alternativ

 ## Ha det roligt med att översätta språk!

</pre>
