Hokeilizacija
 ==============
 Zašto ne mogu pokrenuti cijelu svoju aplikaciju ili web-lokaciju putem Google prevoditelja i dobiti osnovni prijevod na drugom jeziku?

 ***Sada možeš!***

 Naziv `hokeylization` je portmanteau, što znači 'lokalizacija hokeja'

 Pomalo je šaljivo jer je vrlo jednostavno: šalje nizove Google prevoditelju

 I jednostavan je, a opet vrlo moćan. Ima posebnu podršku za HTML dokumente,
 [HandlebarsJS](https://handlebarsjs.com/) predlošci,
 i [Markdown](https://daringfireball.net/projects/markdown) datoteke.

 Možete prevesti:
 * JavaScript objekt koji sadrži poruke
 * bilo koji broj datoteka ili direktorija, uvijek rekurzivno prolazeći direktorije

 # Pročitajte ovo na drugom jeziku
 Ovaj dokument README.md preveden je pomoću samog alata za hokeilizaciju na
 **[svi jezici koje podržava Google prevoditelj](https://cloud.google.com/translate/docs/languages)!**

 Sigurna sam da nije savršeno, ali nadam se da je bolje nego ništa!

 [🇸🇦 arapski](../ar/README.md)
 [🇧🇩 bengalski](../bn/README.md)
 [🇩🇪 njemački](../de/README.md)
 [🇺🇸 engleski](../en/README.md)
 [🇪🇸 španjolski](../es/README.md)
 [🇫🇷 francuski](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonezijski](../id/README.md)
 [🇮🇹 talijanski](../it/README.md)
 [🇯🇵 japanski](../ja/README.md)
 [🇰🇷 korejski](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poljski](../pl/README.md)
 [🇧🇷 portugalski](../pt/README.md)
 [🇷🇺 ruski](../ru/README.md)
 [🇰🇪 svahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turski](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vijetnamski](../vi/README.md)
 [🇨🇳 kineski](../zh/README.md)


 **[📚 ... Svi jezici ...](../README.md)**
 ----

 ### Postoji li problem s ovim prijevodom README?
 Ovaj konkretni prijevod izvornika [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 može imati manjkavosti -- *ispravci su dobrodošli!* Pošaljite [zahtjev za povlačenjem na GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 ili ako vam to nije ugodno, [otvorite problem](https://github.com/cobbzilla/hokeylization/issues)

 Kada stvorite novi GitHub problem o prijevodu, učinite sljedeće:
 * uključite URL stranice (kopirajte/zalijepite iz adresne trake preglednika)
 * uključite točan tekst koji je pogrešan (kopirajte/zalijepite iz preglednika)
 * molimo opišite što nije u redu -- je li prijevod netočan? je li formatiranje nekako pokvareno?
 * ljubazno ponudite prijedlog boljeg prijevoda ili kako bi tekst trebao biti pravilno oblikovan
 * **Hvala vam!**

 # Sadržaj
 * [Izvor](#Izvor)
 * [Podrška i financiranje](#Support-and-Funding)
 * [Instalacija](#Instalacija)
 * [Postavljanje](#Postavljanje)
 * [Prijevod datoteke resursa JavaScript niza](#Translating-a-JavaScript-string-resource-file)
 * [Prijevod direktorija tekstualnih datoteka](#Translating-a-directory-of-text-files)
 * [Ostale opcije](#Other-options)
 * [JSON batch naredbe](#JSON-batch-commands)

 ## Izvor
 * [hokeylizacija na GitHubu](https://github.com/cobbzilla/hokeylization)
 * [hokeylizacija na npm](https://www.npmjs.com/package/hokeylization)

 ## Podrška i financiranje
 Pokušavam biti profesionalni programer softvera otvorenog koda. radio sam u
 U softverskoj industriji dugi niz godina, pokrenuo sam uspješne tvrtke i prodao ih javnim tvrtkama.
 Nedavno sam ostao bez posla i zapravo nemam drugog posla u planu

 Stoga ću pokušati napisati koristan softver i vidjeti hoće li to uspjeti

 Ako uživate u korištenju ovog softvera, rado bih primio čak i
 najmanji [mjesečni doprinos putem Patreona](https://www.patreon.com/cobbzilla)

 *Hvala vam!*

 ## Instalacija
 Za korištenje alata naredbenog retka, instalirajte pomoću `npm` ili `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Za korištenje kao knjižnicu instalirajte `lite` verziju, koja je mnogo manja:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Zatim pogledajte pomoć za naredbu `hokey` :

    hokey --help
    hokey -h

 Želite li vidjeti ispis na svom ili drugom jeziku?

 `hokey` pokušava automatski otkriti jezik iz varijabli okruženja vaše ljuske

 Možete forsirati jezik postavljanjem varijable okruženja `LC_ALL` :

    LC_ALL=it hokey --help

 Imajte na umu da ako ste instalirali `hokeylization-lite` , pomoć za naredbe dostupna je samo na engleskom

 ## Postaviti
 Postavite varijablu okruženja `GOOGLE_TRANSLATE_PROJECT_ID` da identificirate svoj projekt Google prevoditelja

 Postavite varijablu okruženja `GOOGLE_APPLICATION_CREDENTIALS` na JSON vjerodajnice koje ste preuzeli
 nakon što ste otkrili kako autentifikacija funkcionira na Google oblaku (može biti zabavno)

 Ako pokrećete iz izvornog koda, možete ih također staviti u datoteku `.env` u izvornom kodu
 direktorij će se učitati tijekom izvođenja putem [dotenv](https://www.npmjs.com/package/dotenv)

 ## Prevođenje JavaScript datoteke resursa niza
 Vaša tablica nizova **mora** biti u JavaScript datoteci u jednom od ova dva oblika:

 ES6 izvoz:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS izvoz

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ako je ova datoteka nazvana `myfile.en.js` , možete je prevesti na španjolski i njemački s:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` u gornjem je poseban -- to je rezervirana riječ u ovom alatu!

 `LANG` je zamijenjen kodom jezika za izlazne datoteke

 Stoga gornja naredba stvara datoteke:

    myfile.es.js
    myfile.de.js

 Opcija `-l` / `--languages` je popis ISO kodova jezika odvojenih zarezima
 [podržava Google prevoditelj](https://cloud.google.com/translate/docs/languages)

 Ako izlazna datoteka već postoji, ispitat će se kako bi se utvrdilo koji ključevi već postoje.
 Postojeći ključevi neće biti prevedeni. Prijevodi za ključeve koji nedostaju bit će generirani i dodani
 do kraja JS objekta. Uvijek se prepisuje cijela datoteka.

 Za prisilno ponovno prevođenje svih ključeva upotrijebite opciju `-f` / `--force`

 ## Prevođenje direktorija tekstualnih datoteka
 Također možete prevesti direktorij datoteka. hokeilizacija će rekurzivno posjetiti svaki
 datoteku u direktoriju i pokrenite njezin sadržaj putem Google prevoditelja i spremite izlaz
 u datoteku s identičnim nazivom u zasebnom stablu direktorija

 Kada je cilj vašeg prijevoda direktorij, ovaj je način rada omogućen

 Opcija `-o` / `--outfile` navodi izlazni direktorij

 **VELIKO UPOZORENJE**: Prilikom prevođenja direktorija, **NEMOJTE** navoditi izlazni direktorij
 koji se nalazi unutar vašeg unosa! Ako to učinite, učinit ćete:
 * inducirati beskonačnu rekurziju
 * podignite račun za Google
 * napunite svoj disk
 * manje se zabavljati

 Evo primjera što *ne treba raditi*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kada se ovo pokrene, prevedene datoteke se zapisuju u `templates/es` i tako postaju nove
 izvorne datoteke za prijevod, budući da su pod `templates/` -- ovaj proces se nastavlja
 zauvijek, nemoj to učiniti!

 #### Ispravna uporaba
 OK, recimo da imate neke predloške e-pošte u imeniku:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Da biste sve ovo preveli na španjolski i njemački, pokrenite:

    hokey -l es,de -o templates/email/LANG templates/email/en

 U gornjem tekstu, `LANG` je rezervirana riječ i bit će zamijenjena ISO kodom jezika

 Što se događa kada se gore navedeno pokrene:
 * Stvorit će se direktoriji `templates/email/es` i `templates/email/de` (ako ne postoje)
 * Svaka datoteka u `templates/email/en` bit će prevedena na španjolski i njemački
 * Postojeće izlazne datoteke neće se ponovno generirati osim ako ne koristite `-f` / `--force`
 * Završit ćete s identičnom strukturom direktorija i datotekama unutar `es` i `de` kao što imate pod `en`

 ## Druge opcije

 ### Testno pokretanje
 Proslijedite `-n` / `--dry-run` da biste prikazali što će biti učinjeno, ali zapravo nemojte upućivati nikakve API pozive niti pisati datoteke

 ### Sila
 Prenesite `-f` / `--force` da biste uvijek ponovno generirali prijevode, čak i ako već postoje

 ### Podudaranje
 Proslijedite `-m` / `--match` da biste ograničili datoteke koje se obrađuju pri pokretanju u načinu rada direktorija

 Možda nećete uvijek željeti prevesti *svaku* datoteku u izvornom direktoriju u ciljni direktorij

 Vrijednost opcije `-m` / `--match` je regularni izraz (pazite na pravila citiranja ljuske!) koji navodi
 koje datoteke treba prevesti

 Ako ste u nedoumici, možete kombinirati ovu opciju s `-n` / `--dry-run` da vidite koje će datoteke biti prevedene

 ### Isključuje
 Ponekad vaš `-m` odgovara previše datoteka. Upotrijebite opciju `-e` / `--excludes` za izričito izuzimanje
 datoteke koje bi se inače podudarale

 Možete navesti više regularnih izraza, odvojenih razmacima

 Uobičajena bi upotreba bila: `--excludes node_modules dist \.git build tmp`

 ### Upravljač
 Nizovi za prijevod mogu sadržavati predloške `{{ handlebars }}` , bilo s dvije ili tri vitičaste zagrade

 Vjerojatno *NE* želite da se stvari unutar tih predložaka prevedu

 Proslijedite `-H` / `--handlebars` i ništa unutar `{{ ... }}` neće biti prevedeno

 ### Markdown
 Markdown nije ni tekst ni html, pa Google prevoditelj ima nekih poteškoća s njim

 Oznaka `-M` / `--markdown` omogućuje posebno rukovanje datotekama markdown

 S markdown datotekama, ako ne koristite zastavu `-M` , vjerojatno ćete naići na ove probleme:
 * Neispravne veze. U prijevodu se znak za razmak pojavljuje nakon što opis veze za označavanje završi (sa `]` ), ali
 prije početka ciljane veze (s `(` ). To uzrokuje neispravno prikazivanje oznake i vezu
 se pokvari prilikom gledanja dokumenta.
 * Blokovi koda se prevode. Google prevoditelj ne zna što markdown uzima u obzir kod, a što ne
 * Netočan razmak za uvučene blokove koda. Razmake je teško sačuvati u prijevodu
 * Stvari unutar `backticks` bit će prevedene, kada gotovo uvijek želite da budu doslovne vrijednosti

 Kada je omogućena oznaka `-M` / `--markdown` :
 * Uzorak `](` bit će kondenziran u `](` čime se popravljaju neispravne veze označavanja
 * Omotač "no translate" bit će postavljen oko uvučenih blokova koda, čuvajući pravilno uvlačenje i osiguravajući da nisu prevedeni
 * Omot "no translate" bit će postavljen oko teksta unutar `backticks` kako bi se osiguralo da nisu prevedeni

 ### Proces-as
 Obično se sve obrađuje kao običan tekst

 Ako je vaš sadržaj HTML, bit će oštećen osim ako ne proslijedite opciju `-p html` / `--process-as html`

 ### Filtar
 Za avanturiste: kada obrađujete datoteke u direktoriju, možete dodati opciju `-F` / `--filter`
 za filtriranje izlaza prije nego što se zapiše u datotečni sustav

 Vrijednost ove opcije mora biti put do JS datoteke koja izvozi funkciju pod nazivom `filter`

 Funkcija `filter` mora biti `async` jer će se na nju pozivati `await`

 Prije nego što se datoteke zapišu na disk, cijeli sadržaj datoteke bit će proslijeđen funkciji `filter` kao niz

 Povratna vrijednost funkcije `filter` ono je što će se zapravo zapisati u pohranu

 Dakle, imate potpunu kontrolu nad onim što će konačno biti napisano

 Skripta `filter` će se na sljedećim lokacijama (s `.js` bit će pridodan filtru
 ime, osim ako već ne završava na `.js` )
 * Trenutačni imenik
 * Direktorij pod nazivom `.hokey-filters` unutar trenutnog direktorija
 * Direktorij pod nazivom `${HOME}/.hokey-filters` , gdje `${HOME}` početni direktorij trenutnog korisnika
 * Ugrađeni [direktorij filtara](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Parametri filtra
 Niz `filter` može biti više riječi. U ovom slučaju, prva riječ je naziv filtra i
 preostale riječi proslijedit će se kao argumenti funkciji `filter`

 ### Pomozite
 Koristite `-h` / `--help` za prikaz pomoći

 ## JSON skupne naredbe
 S `-j` / `--json` možete pokrenuti više koordiniranih naredbi `hokey`

 Prema konvenciji ova se datoteka zove `hokey.json` , ali je možete nazvati kako god želite

 Ako proslijedite direktorij kao opciju `-j` , `hokey` će tražiti `hokey.json` u tom direktoriju

 JSON datoteka treba sadržavati jedan objekt. Unutar tog objekta, nazivi njegovih svojstava su isti kao
 opcije naredbenog retka, plus jedno dodatno svojstvo pod nazivom `hokey`

 `hokey` je niz naredbi za pokretanje. Svojstva deklarirana unutar ovih naredbi će
 nadjačati sve duple deklaracije u vanjskom objektu.

 Unutar svakog objekta u nizu `hokey` trebate navesti `name` te ulazne i izlazne datoteke

 Evo primjera `hokey.json`

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

 ### Više ulaznih datoteka
 Proslijedite niz staza datoteka kao `infiles` umjesto jedne staze `infile` , kao u ovom primjeru:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indeksi
 Kada prevodite na mnoge jezike, `hokey` može stvoriti indeksnu datoteku koja navodi sve napravljene prijevode
 i daje poveznice na njih

 *Prilikom generiranja indeksa, možete imati samo jedan izvor unosa*

 Proslijedite opciju `-I` / `--index` , vrijednost je mjesto gdje će se generirati datoteka indeksa, koja može biti datoteka
 ili imenik. Ako se radi o direktoriju, koristit će se zadani naziv datoteke na temelju predloška (pogledajte dolje)

 Upotrijebite `-A` / `--index-template` da odredite kako je formatiran izlaz indeksa. Možete navesti 'html',
 'markdown', 'text' ili put datoteke do vlastitog predloška [HandlebarsJS](https://handlebarsjs.com/)

 Ako navedete vlastiti predložak, morate također navesti datoteku (ne direktorij) za `-I` / `--index`
 opcija

 ## Zabavite se prevodeći jezike!

</pre>
