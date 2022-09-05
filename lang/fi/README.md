Hokeylisaatio
 ==============
 Miksi en voi käyttää koko sovellusta tai sivustoa Google-kääntäjän kautta ja saada peruskäännöstä toisella kielellä?

 ***Nyt voit!***

 Nimi `hokeylization` on portmanteau, joka tarkoittaa "hokey lokalisointia"

 Se on jokseenkin hokey, koska se on hyvin yksinkertainen: se lähettää merkkijonoja Google-kääntäjälle

 Ja se on yksinkertainen, mutta myös erittäin tehokas. Siinä on erityinen tuki HTML-dokumenteille,
 [HandlebarsJS](https://handlebarsjs.com/) mallit,
 ja [Markdown](https://daringfireball.net/projects/markdown) tiedostot.

 Voit kääntää:
 * JavaScript-objekti, joka sisältää viestejä
 * mikä tahansa määrä tiedostoja tai hakemistoja, aina hakemistoissa rekursiivisesti

 # Lue tämä toisella kielellä
 Tämä README.md-dokumentti on käännetty itse hokeylisointityökalulla kielelle
 **[kaikki Google-kääntäjän tukemat kielet](https://cloud.google.com/translate/docs/languages)!**

 Olen varma, että se ei ole täydellinen, mutta toivon, että se on parempi kuin ei mitään!

 [🇸🇦 arabia](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 saksa](../de/README.md)
 [🇺🇸 englanti](../en/README.md)
 [🇪🇸 espanja](../es/README.md)
 [🇫🇷 ranska](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesia](../id/README.md)
 [🇮🇹 italia](../it/README.md)
 [🇯🇵 japani](../ja/README.md)
 [🇰🇷 korea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 puola](../pl/README.md)
 [🇧🇷 portugali](../pt/README.md)
 [🇷🇺 venäjä](../ru/README.md)
 [🇰🇪 swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnam](../vi/README.md)
 [🇨🇳 kiina](../zh/README.md)


 **[📚 ... Kaikki kielet ...](../README.md)**
 ----

 ### Onko tässä README-käännöksessä ongelma?
 Tämä käännös alkuperäisestä [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 voi olla virheellinen -- *korjaukset ovat erittäin tervetulleita!* Lähetä [pull-pyyntö GitHubissa](https://github.com/cobbzilla/hokeylization/pulls),
 tai jos et halua tehdä niin, [avaa ongelma](https://github.com/cobbzilla/hokeylization/issues)

 Kun luot uuden GitHub-ongelman käännöksestä, toimi seuraavasti:
 * sisällytä sivun URL-osoite (kopioi/liitä selaimen osoiteriviltä)
 * sisällytä täsmällinen virheellinen teksti (kopioi/liitä selaimesta)
 * kuvaile mikä on vialla -- onko käännös virheellinen? onko muotoilu rikki jotenkin?
 * Ehdota ystävällisesti parempaa käännöstä tai tekstin oikeaa muotoilua
 * **Kiitos!**

 # Sisältö
 * [Lähde](#Source)
 * [Tuki ja rahoitus](#Support-and-Funding)
 * [Asennus](#Asennus)
 * [Asetukset](#Setup)
 * [JavaScript-merkkijonoresurssitiedoston kääntäminen](#Translating-a-JavaScript-string-resource-file)
 * [Tekstitiedostojen hakemiston kääntäminen](#Translating-a-directory-of-text-files)
 * [Muut vaihtoehdot](#Other-optiot)
 * [JSON-eräkomennot](#JSON-batch-commands)

 ## Lähde
 * [hokeylization GitHubissa](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Tuki ja rahoitus
 Yritän olla ammattimainen avoimen lähdekoodin ohjelmistokehittäjä. Olen ollut töissä
 Ohjelmistoteollisuudessa useiden vuosien ajan, olen perustanut menestyviä yrityksiä ja myynyt niitä julkisille yrityksille.
 Menetin hiljattain työpaikkani, eikä minulla oikeastaan ole muita töitä

 Joten yritän kirjoittaa hyödyllisiä ohjelmistoja ja katsoa, toimiiko se

 Arvostan vilpittömästi pienintäkin [kuukausittaista lahjoitusta Patreonin kautta](https://www.patreon.com/cobbzilla)

 ## Asennus
 Jos haluat käyttää komentorivityökalua, asenna komennolla `npm` tai `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Käytä kirjastona asentamalla `lite` versio, joka on paljon pienempi:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Katso sitten `hokey` komennon ohje:

    hokey --help
    hokey -h

 Haluatko nähdä tulosteen omalla kielelläsi tai muulla kielellä?

 `hokey` yrittää tunnistaa kielen automaattisesti shellin ympäristömuuttujista

 Voit pakottaa kielen asettamalla `LC_ALL` ympäristömuuttujan:

    LC_ALL=it hokey --help

 Huomaa, että jos olet asentanut `hokeylization-lite` , komennon ohje on saatavilla vain englanniksi

 ## Perustaa
 Määritä `GOOGLE_TRANSLATE_PROJECT_ID` -ympäristömuuttuja tunnistamaan Google-kääntäjäprojektisi

 Aseta `GOOGLE_APPLICATION_CREDENTIALS` -ympäristömuuttuja lataamillesi JSON-tunnistetiedoille
 sen jälkeen, kun olet selvittänyt kuinka todennus toimii Google-pilvessä (se voi olla hauskaa)

 Jos käytät lähdekoodia, voit myös laittaa ne lähdekoodiin `.env` -tiedostoon
 hakemistoon ne ladataan suorituksen aikana [dotenv]:n kautta (https://www.npmjs.com/package/dotenv)

 ## Käännetään JavaScript-merkkijonoresurssitiedostoa
 Merkkijonotaulukkosi **on** oltava JavaScript-tiedostossa jossakin seuraavista kahdesta muodossa:

 ES6 vienti:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS-vienti

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Jos tämän tiedoston nimi oli `myfile.en.js` , voit kääntää sen espanjaksi ja saksaksi seuraavasti:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Yllä olevan `LANG` on erityinen - se on varattu sana tässä työkalussa!

 `LANG` korvataan tulostiedostojen kielikoodilla

 Siten yllä oleva komento luo tiedostot:

    myfile.es.js
    myfile.de.js

 Vaihtoehto `-l` / `--languages` on pilkuilla eroteltu luettelo ISO-kielikoodeista
 [Google-kääntäjän tukema](https://cloud.google.com/translate/docs/languages)

 Jos tulostiedosto on jo olemassa, se tutkitaan sen määrittämiseksi, mitkä avaimet ovat jo olemassa.
 Olemassa olevia avaimia ei käännetä. Puuttuvien avainten käännökset luodaan ja liitetään
 JS-objektin loppuun. Koko tiedosto kirjoitetaan aina uudelleen.

 Jos haluat pakottaa kaikki näppäimet uudelleenkääntämään, käytä `-f` / `--force` -vaihtoehtoa

 ## Tekstitiedostojen hakemiston kääntäminen
 Voit myös kääntää tiedostohakemiston. hokeylization vierailee rekursiivisesti joka
 tiedosto hakemistoon ja suorita sen sisältö Google-kääntäjän kautta ja tallenna tulos
 samannimiseen tiedostoon erillisessä hakemistopuussa

 Kun käännöksen kohteena on hakemisto, tämä tila on käytössä

 Vaihtoehto `-o` / `--outfile` määrittää tuloshakemiston

 **SUURI VAROITUS**: Kun käännät hakemistoja, **ÄLÄ** määritä tuloshakemistoa
 joka on syöttöhakemistossasi! Jos teet tämän, toimit seuraavasti:
 * aiheuttaa ääretöntä rekursiota
 * kerää Google-laskusi
 * täytä levysi
 * pidä vähemmän hauskaa

 Tässä on esimerkki siitä, mitä *ei saa tehdä*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kun tämä suoritetaan, käännetyt tiedostot kirjoitetaan `templates/es` , ja niistä tulee siten uusia
 käännettävät lähdetiedostot, koska ne ovat kohdassa `templates/` -- tämä prosessi jatkuu
 ikuisesti, älä tee sitä!

 #### Oikea käyttö
 OK, oletetaan, että sinulla on sähköpostimalleja hakemistossa:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Jos haluat kääntää kaikki nämä espanjaksi ja saksaksi, suorita:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Yllä olevassa `LANG` on varattu sana, ja se korvataan ISO-kielikoodilla

 Mitä tapahtuu, kun yllä oleva suoritetaan:
 * `templates/email/es` " ja `templates/email/de` luodaan (jos niitä ei ole)
 * Jokainen `templates/email/en` oleva tiedosto käännetään espanjaksi ja saksaksi
 * Olemassa olevia tulostiedostoja ei luoda uudelleen, ellet käytä `-f` " / `--force`
 * Päädyt identtiseen hakemistorakenteeseen ja tiedostoihin `es` " ja `de` , kuten sinulla on `en`

 ## Muut vaihtoehdot

 ### Kuivaharjoittelu
 Anna `-n` / `--dry-run` run` näyttääksesi mitä tehdään, mutta älä oikeastaan soita API-kutsuja tai kirjoita tiedostoja

 ### Voimaa
 Anna `-f` / `--force` käännökset aina uudelleen, vaikka ne olisivat jo olemassa

 ### Ottelu
 Anna `-m` / `--match` rajoittaaksesi käsiteltäviä tiedostoja ajettaessa hakemistotilassa

 Et ehkä aina halua kääntää *jokaista* lähdehakemistosi tiedostoa kohdehakemistoosi

 Vaihtoehdon `-m` / `--match` on säännöllinen lauseke (varo shell-lainaussääntöjä!), joka määrittää
 mitkä tiedostot tulee kääntää

 Jos olet epävarma, voit yhdistää tämän valinnan komennolla `-n` / `--dry-run` run" nähdäksesi mitkä tiedostot käännetään

 ### Ei sisällä
 Joskus `-m` vastaa liian monta tiedostoa. Käytä `-e` / `--excludes` -vaihtoehtoa sulkeaksesi pois
 tiedostot, jotka muuten olisivat täsmänneet

 Voit luetella useita säännöllisiä lausekkeita välilyönneillä erotettuina

 Yleinen käyttötapa olisi: `--excludes node_modules dist \.git build tmp`

 ### Ohjaustangot
 Käännettävät merkkijonot voivat sisältää `{{ handlebars }}` -malleja, joko kahdella tai kolmella aaltosulkeella

 Todennäköisesti *ETT* halua näiden mallien sisällön käännettäväksi

 Ohita `-H` / `--handlebars` -lippu, niin mitään sanan `{{ ... }}` sisällä ei käännetä

 ### Markdown
 Markdown ei ole teksti eikä html, joten Google-kääntäjällä on joitain vaikeuksia sen kanssa

 Lippu "-M" / `--markdown` `-M` merkintätiedostojen erikoiskäsittelyn

 Merkintätiedostoissa, jos et käytä `-M` lippua, löydät todennäköisesti seuraavat ongelmat:
 * Rikkinäiset linkit. Käännöksessä välilyönti näkyy sen jälkeen, kun merkintälinkin kuvaus päättyy (kirjaimella `]` ), mutta
 ennen kuin sen kohdelinkki alkaa (merkillä `(` ). Tämä saa merkinnän hahmontumaan väärin ja linkki
 on rikki asiakirjaa katseltaessa.
 * Koodilohkot käännetään. Google-kääntäjä ei tiedä, mitä markdown pitää koodina ja mitä ei
 * Väärä välilyönti sisennetyille koodilohkoille. Välilyöntejä on vaikea säilyttää käännöksessä
 * `backticks` sisällä olevat asiat käännetään, kun haluat melkein aina niiden olevan kirjaimellisia arvoja

 Kun `-M` / `--markdown` on käytössä:
 * Kuvio `](` tiivistetään muotoon `](` mikä korjaa rikkinäiset merkintälinkit
 * "No translate" -kääre sijoitetaan sisennettyjen koodilohkojen ympärille, mikä säilyttää oikean sisennyksen ja varmistaa, että niitä ei käännetä
 * "Ei käännöstä" -kääre sijoitetaan tekstin ympärille `backticks` sen varmistamiseksi, että niitä ei käännetä

 ### Käsittele kuten
 Yleensä kaikki käsitellään pelkkänä tekstinä

 Jos sisältösi on HTML-muotoa, se sekoitetaan, ellet ohita vaihtoehtoa `-p html` " / `--process-as html`

 ### Suodata
 Seikkailunhaluisille: kun käsittelet tiedostoja hakemistossa, voit välittää vaihtoehdon `-F` / `--filter`
 suodattaaksesi tulosteen ennen kuin se kirjoitetaan tiedostojärjestelmään

 Tämän vaihtoehdon arvon on oltava polku JS-tiedostoon, joka vie funktion nimeltä `filter`

 `filter` funktion on oltava `async` , koska sitä kutsutaan `await`

 Ennen kuin tiedostot kirjoitetaan levylle, koko tiedoston sisältö välitetään `filter` -funktiolle merkkijonona

 `filter` on se, mikä itse asiassa kirjoitetaan tallennustilaan

 Näin ollen sinulla on täysi määräysvalta siihen, mitä lopulta kirjoitetaan

 ### Auta
 Käytä `-h` / `--help` näyttääksesi ohjeen

 ## JSON-eräkomennot
 `-j` / `--json` -vaihtoehdolla voit suorittaa useita koordinoituja `hokey` -komentoja

 Käytännössä tätä tiedostoa kutsutaan nimellä `hokey.json` , mutta voit nimetä sen miksi haluat

 Jos annat hakemiston `-j` -vaihtoehdoksi, `hokey` `hokey.json` kyseisestä hakemistosta.

 JSON-tiedoston tulee sisältää yksi objekti. Objektin sisällä sen ominaisuuksien nimet ovat samat kuin
 komentorivin valinnat sekä yksi lisäominaisuus nimeltä `hokey`

 `hokey` ominaisuus on joukko suoritettavia komentoja. Näissä komentoissa ilmoitetut ominaisuudet tulevat voimaan
 ohittaa mahdolliset päällekkäiset ilmoitukset ulkoisessa objektissa.

 Jokaisessa `hokey` taulukon objektissa sinun tulee määrittää `name` ja tulo- ja tulostustiedostot

 Tässä on esimerkki `hokey.json`

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

 ### Useita syöttötiedostoja
 Anna joukko tiedostopolkuja nimellä `infiles` yhden polun `infile` , kuten tässä esimerkissä:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indeksit
 Käännettäessä useille kielille `hokey` voi luoda hakemistotiedoston, jossa luetellaan kaikki tehdyt käännökset
 ja tarjoaa linkkejä niihin

 *Indeksejä luotaessa sinulla voi olla vain yksi tulolähde*

 Välitä vaihtoehto "-I" / `--index` `-I` arvo on paikka, jossa indeksitiedosto luodaan, joka voi olla tiedosto
 tai hakemistosta. Jos se on hakemisto, oletustiedostonimeä käytetään mallin perusteella (katso alla)

 Käytä `-A` / `--index-template` " määrittääksesi, miten indeksituloste muotoillaan. Voit määrittää "html",
 "markdown", "text" tai tiedostopolku omaan [HandlebarsJS](https://handlebarsjs.com/) -malliisi

 Jos määrität oman mallin, sinun on määritettävä myös tiedosto (ei hakemisto) `-I` / `--index`
 vaihtoehto

 ## Pidä hauskaa kielten kääntämisestä!

</pre>
