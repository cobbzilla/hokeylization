Hokeilizacija
 ==============
 Naziv je portmanteau, što znači 'lokalizacija hokeja'

 Šaljivo je jer je vrlo jednostavno: šalje nizove Google prevoditelju

 Možete prevesti:
 * JavaScript objekt koji sadrži poruke
 * direktorij datoteka, rekurzivno

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
 [🇮🇳 Maranthi](../mr/README.md)
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
 Ovaj konkretan prijevod izvornika [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 može imati manjkavosti -- *ispravci su dobrodošli!* Pošaljite [zahtjev za povlačenjem na GitHub](https://github.com/cobbzilla/yuebing/pulls),
 ili ako vam to nije ugodno, [otvorite problem](https://github.com/cobbzilla/yuebing/issues)

 Kada stvorite novi GitHub problem o prijevodu, učinite sljedeće:
 * uključite URL stranice (kopirajte/zalijepite iz adresne trake preglednika)
 * uključite točan tekst koji je pogrešan (kopirajte/zalijepite iz preglednika)
 * ljubazno ponudite prijedlog boljeg prijevoda
 * **Hvala vam!**

 # Sadržaj
 * [Izvor](#Izvor)
 * [Podrška i financiranje](#Support-and-Funding)
 * [Instalacija](#Instalacija)
 * [Postavljanje](#Postavljanje)
 * [Prijevod datoteke resursa JavaScript niza](#Translating-a-JavaScript-string-resource-file)
 * [Prijevod direktorija tekstualnih datoteka](#Translating-a-directory-of-text-files)
 * [Ostale opcije](#Other-options)

 ## Izvor
 * [hokeylizacija na GitHubu](https://github.com/cobbzilla/hokeylization)
 * [hokeylizacija na npm](https://www.npmjs.com/package/hokeylization)

 ## Podrška i financiranje
 Pokušavam biti profesionalni programer softvera otvorenog koda. radio sam u
 U softverskoj industriji dugi niz godina, pokrenuo sam uspješne tvrtke i prodao ih javnim tvrtkama.
 Nedavno sam ostao bez posla i zapravo nemam drugog posla u planu

 Stoga ću pokušati napisati koristan softver i vidjeti hoće li to uspjeti

 Iskreno bih cijenio i najmanji [mjesečni doprinos putem Patreona](https://www.patreon.com/cobbzilla)

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

 ### Pomozite
 Koristite `-h` / `--help` za prikaz pomoći

 ## Sretno prevođenje!

</pre>
