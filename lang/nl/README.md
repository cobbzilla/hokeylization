Hokeylization
 =============
 De naam is een samentrekking, wat 'hokey localization' betekent

 Het is hokey omdat het heel eenvoudig is: het stuurt strings naar Google Translate

 Jij kan vertalen:
 * een JavaScript-object dat berichten bevat
 * een map met bestanden, recursief

 # Lees dit in een andere taal
 Dit README.md-document is vertaald met behulp van de hokeylization-tool zelf,
 in **[elke taal ondersteund door Google Translate](../README.md)!**

 Ik weet zeker dat het niet perfect is, maar ik hoop dat het beter is dan niets!

 [🇸🇦 Arabisch](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Duits](../de/README.md)
 [🇺🇸 Engels](../en/README.md)
 [🇪🇸 Spaans](../es/README.md)
 [🇫🇷 Frans](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesisch](../id/README.md)
 [🇮🇹 Italiaans](../it/README.md)
 [🇯🇵 Japans](../ja/README.md)
 [🇰🇷 Koreaans](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Pools](../pl/README.md)
 [🇧🇷 Portugees](../pt/README.md)
 [🇷🇺 Russisch](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turks](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamees](../vi/README.md)
 [🇨🇳 Chinees](../zh/README.md)


 **[📚 ... Alle talen ...](../README.md)**
 ----

 ### Is er een probleem met deze vertaling van de README?
 Deze specifieke vertaling van het origineel [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 kan gebrekkig zijn -- *correcties zijn zeer welkom!* Stuur een [pull-verzoek op GitHub](https://github.com/cobbzilla/yuebing/pulls),
 of als je dat niet prettig vindt, [open een probleem](https://github.com/cobbzilla/yuebing/issues)

 Wanneer u een nieuw GitHub-probleem maakt over een vertaling, doet u het volgende:
 * inclusief de pagina-URL (kopiëren/plakken uit de adresbalk van de browser)
 * voeg de exacte tekst toe die fout is (kopiëren/plakken vanuit browser)
 * graag een suggestie voor een betere vertaling
 * **Dank je!**

 # Inhoud
 * [Bron](#Bron)
 * [Ondersteuning en financiering](#Ondersteuning en financiering)
 * [Installatie](#Installatie)
 * [Setup](#Setup)
 * [Een JavaScript-tekenreeksbronbestand vertalen](#Translating-a-JavaScript-string-resource-bestand)
 * [Een directory met tekstbestanden vertalen](#Translating-a-directory-of-text-files)
 * [Overige opties](#Overige-opties)

 ## Bron
 * [hokeylization op GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylisatie op npm](https://www.npmjs.com/package/hokeylization)

 ## Ondersteuning en financiering
 Ik probeer een professionele open source softwareontwikkelaar te worden. ik heb gewerkt in
 jarenlang in de software-industrie, heb ik succesvolle bedrijven gestart en verkocht aan openbare bedrijven.
 Onlangs verloor ik mijn baan, en ik heb niet echt ander werk op de planning

 Dus ik ga proberen nuttige software te schrijven en kijken of dat werkt

 Ik zou zelfs de kleinste [maandelijkse bijdrage via Patreon](https://www.patreon.com/cobbzilla) oprecht waarderen

 ## Installatie
 Om de opdrachtregeltool te gebruiken, installeert u met `npm` of `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Om als bibliotheek te gebruiken, installeert u de `lite` versie, die veel kleiner is:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Kijk dan in de help voor het `hokey` commando:

    hokey --help
    hokey -h

 Wil je output in jouw taal of een andere taal zien?

 `hokey` probeert de taal automatisch te detecteren uit de omgevingsvariabelen van je shell

 U kunt een taal forceren door de omgevingsvariabele `LC_ALL` in te stellen:

    LC_ALL=it hokey --help

 Merk op dat als je `hokeylization-lite` hebt geïnstalleerd, commando-help alleen beschikbaar is in het Engels

 ## Opstelling
 Stel de `GOOGLE_TRANSLATE_PROJECT_ID` omgevingsvariabele in om uw Google Translate-project te identificeren

 Stel de `GOOGLE_APPLICATION_CREDENTIALS` omgevingsvariabele in op de JSON-inloggegevens die u hebt gedownload
 na het uitzoeken hoe authenticatie werkt op Google cloud (het kan leuk zijn)

 Als je vanuit de broncode draait, kun je deze ook in een `.env` -bestand in de broncode plaatsen
 directory worden ze tijdens runtime geladen via [dotenv](https://www.npmjs.com/package/dotenv)

 ## Een JavaScript-tekenreeksbronbestand vertalen
 Uw tekenreekstabel **moet** in een JavaScript-bestand staan in een van deze twee vormen:

 ES6-export:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS-export

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Als dit bestand de naam `myfile.en.js` heeft, kunt u het naar het Spaans en Duits vertalen met:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 De `LANG` in het bovenstaande is speciaal -- het is een gereserveerd woord in deze tool!

 De `LANG` wordt vervangen door de taalcode voor de uitvoerbestanden

 Dus de bovenstaande opdracht maakt de bestanden:

    myfile.es.js
    myfile.de.js

 De optie `-l` / `--languages` is een door komma's gescheiden lijst van ISO-taalcodes
 [ondersteund door Google Translate](https://cloud.google.com/translate/docs/languages)

 Als het uitvoerbestand al bestaat, wordt onderzocht welke sleutels al bestaan.
 Bestaande sleutels worden niet vertaald. Vertalingen voor ontbrekende sleutels worden gegenereerd en toegevoegd
 aan het einde van het JS-object. Het hele bestand wordt altijd herschreven.

 Gebruik de optie `-f` / `--force` om hervertaling van alle sleutels te forceren

 ## Een map met tekstbestanden vertalen
 U kunt ook een map met bestanden vertalen. hokeylization zal recursief elke bezoeken
 bestand in de map en voer de inhoud uit via Google Translate en sla de uitvoer op
 naar een gelijknamig bestand in een aparte mappenboom

 Als het doel van uw vertaling een directory is, is deze modus ingeschakeld

 De optie `-o` / `--outfile` specificeert de uitvoermap

 **GROTE WAARSCHUWING**: Geef bij het vertalen van mappen **NIET** een uitvoermap op
 dat is in uw invoermap! Als je dit doet, zul je:
 * oneindige recursie induceren
 * verhoog uw Google-factuur
 * vul je schijf
 * minder plezier hebben

 Hier is een voorbeeld van wat *niet te doen*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Wanneer dit wordt uitgevoerd, worden vertaalde bestanden naar `templates/es` geschreven en worden dus nieuw
 bronbestanden om te vertalen, aangezien ze onder `templates/` staan -- dit proces gaat door
 voor altijd, niet doen!

 #### Correct gebruik
 OK, laten we zeggen dat je een aantal e-mailsjablonen in een map hebt:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Om al deze naar het Spaans en Duits te vertalen, voer je uit:

    hokey -l es,de -o templates/email/LANG templates/email/en

 In het bovenstaande is `LANG` een gereserveerd woord en zal worden vervangen door de ISO-taalcode

 Wat gebeurt er als het bovenstaande wordt uitgevoerd:
 * De `templates/email/es` en `templates/email/de` de` worden aangemaakt (als ze niet bestaan)
 * Elk bestand in `templates/email/en` wordt vertaald naar het Spaans en Duits
 * Bestaande uitvoerbestanden worden niet opnieuw gegenereerd, tenzij u `-f` / `--force`
 * Je krijgt een identieke directorystructuur en bestanden binnen `es` en `de` zoals je hebt onder `en`

 ## Andere opties

 ### Oefening
 Geef `-n` / `--dry-run` door om weer te geven wat er zou worden gedaan, maar voer geen API-aanroepen uit en schrijf geen bestanden

 ### Kracht
 Geef `-f` / `--force` door om vertalingen altijd opnieuw te genereren, zelfs als ze al bestaan

 ### Wedstrijd
 Geef `-m` / `--match` door om de bestanden die worden verwerkt te beperken bij het uitvoeren in directory-modus

 Misschien wil je niet altijd *elk* bestand in je bronmap vertalen naar je doelmap

 De waarde van de `-m` / `--match` optie is een regex (pas op voor shell quote regels!) die specificeert
 welke bestanden moeten worden vertaald

 Bij twijfel kun je deze optie combineren met `-n` / `--dry-run` om te zien welke bestanden zouden worden vertaald

 ### Exclusief
 Soms komt uw `-m` overeen met te veel bestanden. Gebruik de optie `-e` / `--excludes` om expliciet uit te sluiten
 bestanden die anders overeen zouden zijn gekomen

 U kunt meerdere regexes weergeven, gescheiden door spaties

 Een algemeen gebruik zou zijn: `--excludes node_modules dist \.git build tmp`

 ### Stuur
 De te vertalen strings kunnen `{{ handlebars }}` sjablonen bevatten, met twee of drie accolades

 U wilt waarschijnlijk *NIET* dat de dingen in die sjablonen worden vertaald

 Geef de vlag `-H` / `--handlebars` door en alles binnen `{{ ... }}` wordt niet vertaald

 ### Markdown
 Markdown is geen tekst of html, dus Google Translate heeft er wat moeite mee

 De vlag `-M` / `--markdown` maakt speciale verwerking mogelijk voor markdown-bestanden

 Hokeylizer handelt de zaken redelijk goed af, maar met markdown-bestanden heb je vaak de volgende problemen:
 * Gebroken links. In de vertaling verschijnt een spatie nadat een beschrijving van een afprijslink eindigt (met `]` ) maar
 voordat de doellink begint (met `(` ). Dit zorgt ervoor dat de markdown onjuist wordt weergegeven en de link
 is gebroken bij het bekijken van het document.
 * Codeblokken worden vertaald. Google translate weet niet wat markdown als code beschouwt en wat niet
 * Onjuiste spatiëring voor ingesprongen codeblokken. Spatiëring is moeilijk te behouden in vertaling
 * Dingen binnen `backticks` worden vertaald, terwijl je bijna altijd wilt dat het letterlijke waarden zijn

 Wanneer de vlag `-M` / `--markdown` is ingeschakeld:
 * Het patroon `] (` zal worden gecomprimeerd tot `](` waardoor de verbroken markdown-links worden hersteld
 * Er wordt een "no translate"-wrapper rond ingesprongen codeblokken geplaatst, zodat de juiste inspringing behouden blijft en ze niet worden vertaald
 * Er wordt een "no translate" wrapper om tekst geplaatst binnen `backticks` om ervoor te zorgen dat ze niet worden vertaald

 ### Proces-as
 Normaal gesproken wordt alles verwerkt als platte tekst

 Als uw inhoud HTML is, wordt deze verminkt, tenzij u de optie `-p html` / `--process-as html`

 ### Filter
 Voor de avonturiers: bij het verwerken van bestanden in een map, kunt u de optie `-F` / `--filter`
 om de uitvoer te filteren voordat deze naar het bestandssysteem wordt geschreven

 De waarde van deze optie moet een pad zijn naar een JS-bestand dat een functie met de naam `filter`

 De functie `filter` moet `async` zijn omdat `await` wordt aangeroepen

 Voordat bestanden naar schijf worden geschreven, wordt de volledige bestandsinhoud als een tekenreeks doorgegeven aan de functie `filter`

 De retourwaarde van de `filter` functie is wat er daadwerkelijk naar de opslag wordt geschreven

 Zo heb je totale controle over wat er uiteindelijk zal worden geschreven

 ### Helpen
 Gebruik `-h` / `--help` om hulp weer te geven

 ## Veel plezier met vertalen!

</pre>
