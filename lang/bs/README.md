Hokeilizacija
 =============
 Ime je portmanteau, što znači 'hokey lokalizacija'

 To je šaljivo jer je vrlo jednostavno: šalje stringove Google Translateu

 Možete prevesti:
 * JavaScript objekat koji sadrži poruke
 * direktorij datoteka, rekurzivno

 # Pročitajte ovo na drugom jeziku
 Ovaj README.md dokument je preveden, koristeći sam alat za hokeilizaciju, u
 **[svaki jezik podržan od strane Google prevodioca](https://cloud.google.com/translate/docs/languages)!**

 Siguran sam da nije savršeno, ali nadam se da je bolje nego ništa!

 [🇸🇦 arapski](../ar/README.md)
 [🇧🇩 bengalski](../bn/README.md)
 [🇩🇪 njemački](../de/README.md)
 [🇺🇸 engleski](../en/README.md)
 [🇪🇸 španski](../es/README.md)
 [🇫🇷 francuski](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 indonezijski](../id/README.md)
 [🇮🇹 talijanski](../it/README.md)
 [🇯🇵 japanski](../ja/README.md)
 [🇰🇷 korejski](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 poljski](../pl/README.md)
 [🇧🇷 portugalski](../pt/README.md)
 [🇷🇺 ruski](../ru/README.md)
 [🇰🇪 Svahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turski](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vijetnamski](../vi/README.md)
 [🇨🇳 kineski](../zh/README.md)


 **[📚 ... Svi jezici ...](../README.md)**
 ----

 ### Postoji li problem sa ovim prijevodom README-a?
 Ovaj konkretni prijevod originalnog [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 može biti pogrešan -- *ispravke su dobrodošle!* Molimo pošaljite [zahtjev za povlačenje na GitHub](https://github.com/cobbzilla/yuebing/pulls),
 ili ako vam to nije ugodno, [otvorite problem](https://github.com/cobbzilla/yuebing/issues)

 Kada kreirate novi GitHub problem o prijevodu, učinite:
 * uključite URL stranice (kopirajte/zalijepite iz adresne trake pretraživača)
 * uključite tačan tekst koji je pogrešan (kopirajte/zalijepite iz pretraživača)
 * opišite šta nije u redu -- da li je prevod netačan? da li je formatiranje nekako pokvareno?
 * ljubazno ponudite prijedlog boljeg prijevoda, odnosno kako bi tekst trebao biti pravilno formatiran
 * **Hvala ti!**

 # Sadržaj
 * [Izvor](#Izvor)
 * [Podrška i finansiranje](#Support-and-Funding)
 * [Instalacija](#Instalacija)
 * [Setup](#Setup)
 * [Prevođenje datoteke resursa sa JavaScript stringom](#Translating-a-JavaScript-string-resource-file)
 * [Prevođenje direktorija tekstualnih datoteka](#Translating-a-directory-of-text-files)
 * [Ostale opcije](#Ostale-opcije)

 ## Izvor
 * [hokeylization na GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylizacija na npm](https://www.npmjs.com/package/hokeylization)

 ## Podrška i finansiranje
 Pokušavam biti profesionalni programer otvorenog koda. Ja sam radio u
 softverskoj industriji dugi niz godina, pokrenuo sam uspješne kompanije i prodao ih javnim preduzećima.
 Nedavno sam izgubio posao i nemam nikakav drugi posao u redu

 Zato ću pokušati da napišem koristan softver i da vidim da li radi

 Iskreno bih cijenio čak i najmanji [mjesečni doprinos putem Patreona](https://www.patreon.com/cobbzilla)

 ## Instalacija
 Da biste koristili alat naredbene linije, instalirajte koristeći `npm` ili `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Da biste koristili kao biblioteku, instalirajte `lite` verziju, koja je mnogo manja:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Zatim pogledajte pomoć za naredbu `hokey` :

    hokey --help
    hokey -h

 Želite li vidjeti izlaz na svom jeziku ili drugom jeziku?

 `hokey` pokušava automatski detektirati jezik iz varijabli okruženja vaše ljuske

 Možete forsirati jezik postavljanjem varijable okruženja `LC_ALL` :

    LC_ALL=it hokey --help

 Imajte na umu da ako ste instalirali `hokeylization-lite` , pomoć naredbi je dostupna samo na engleskom

 ## Postaviti
 Postavite varijablu okruženja `GOOGLE_TRANSLATE_PROJECT_ID` za identifikaciju vašeg projekta Google Translate

 Postavite varijablu okruženja `GOOGLE_APPLICATION_CREDENTIALS` na JSON vjerodajnice koje ste preuzeli
 nakon što shvatite kako autentifikacija funkcionira na Google oblaku (može biti zabavno)

 Ako pokrećete iz izvornog koda, možete ih također staviti u `.env` datoteku u izvornom kodu
 direktorij oni će biti učitani u vrijeme izvođenja putem [dotenv](https://www.npmjs.com/package/dotenv)

 ## Prevođenje JavaScript datoteke resursa stringova
 Vaša tabela stringova **mora** biti u JavaScript datoteci u jednom od ova dva oblika:

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

 Ako je ovaj fajl nazvan `myfile.en.js` , možete ga prevesti na španski i nemački sa:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` u gornjem tekstu je poseban -- to je rezervirana riječ u ovom alatu!

 `LANG` je zamijenjen kodom jezika za izlazne datoteke

 Tako gornja komanda kreira fajlove:

    myfile.es.js
    myfile.de.js

 Opcija `-l` / `--languages` je lista ISO jezičnih kodova razdvojena zarezima
 [podržava Google Prevodilac](https://cloud.google.com/translate/docs/languages)

 Ako izlazna datoteka već postoji, bit će ispitana kako bi se utvrdilo koji ključevi već postoje.
 Postojeći ključevi neće biti prevedeni. Prijevodi za ključeve koji nedostaju bit će generirani i dodati
 do kraja JS objekta. Cijeli fajl se uvijek prepisuje.

 Za prisilno ponovno prevođenje svih ključeva, koristite opciju `-f` / `--force`

 ## Prevođenje direktorija tekstualnih datoteka
 Također možete prevesti direktorij datoteka. hokeilizacija će rekurzivno posjetiti svaki
 datoteku u direktoriju i pokrenite njen sadržaj kroz Google Translate i sačuvajte izlaz
 na identično imenovanu datoteku u zasebnom stablu direktorija

 Kada je cilj vašeg prijevoda direktorij, ovaj način je omogućen

 Opcija `-o` / `--outfile` specificira izlazni direktorij

 **VELIKO UPOZORENJE**: Prilikom prevođenja direktorija, **NEmojte** navoditi izlazni direktorij
 koji se nalazi unutar vašeg ulaznog direktorija! Ako to učinite, učinit ćete:
 * inducirati beskonačnu rekurziju
 * pokrenite Google račun
 * napunite svoj disk
 * manje se zabavljajte

 Evo primjera šta *ne treba raditi*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kada se ovo pokrene, prevedene datoteke se upisuju u `templates/es` i tako postaju nove
 izvorne datoteke za prevođenje, budući da su pod `templates/` -- ovaj proces se nastavlja
 zauvek, ne radi to!

 #### Ispravna upotreba
 OK, recimo da imate neke šablone e-pošte u direktoriju:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Da biste sve ovo preveli na španski i njemački, pokrenite:

    hokey -l es,de -o templates/email/LANG templates/email/en

 U gornjem tekstu, `LANG` je rezervirana riječ i bit će zamijenjena ISO kodom jezika

 Šta se dešava kada se gore navedeno pokrene:
 * Direktorijumi `templates/email/es` i `templates/email/de` će biti kreirani (ako ne postoje)
 * Svaki fajl u `templates/email/en` će biti preveden na španski i nemački
 * Postojeći izlazni fajlovi neće biti regenerisani osim ako ne koristite `-f` / `--force`
 * Na kraju ćete imati identičnu strukturu direktorija i datoteke unutar `es` i `de` kao što imate pod `en`

 ## Druge opcije

 ### Suho trcanje
 Prođite `-n` / `--dry-run` da prikažete šta bi bilo urađeno, ali zapravo nemojte upućivati nikakve API pozive niti pisati bilo kakve datoteke

 ### Force
 `-f` / `--force` da uvijek regenerirate prijevode, čak i ako već postoje

 ### Match
 Proslijedite `-m` / `--match` da ograničite datoteke koje se obrađuju kada se izvode u načinu rada direktorija

 Možda nećete uvijek htjeti prevesti *svaku* datoteku u vašem izvornom direktoriju u ciljni direktorij

 Vrijednost opcije `-m` / `--match` je regex (pazite na pravila navođenja ljuske!) koji specificira
 koje datoteke treba prevesti

 Kada ste u nedoumici, možete kombinirati ovu opciju sa `-n` / `--dry-run` da vidite koje datoteke će biti prevedene

 ### Isključuje
 Ponekad vaš `-m` odgovara previše datoteka. Koristite opciju `-e` / `--excludes` za eksplicitno izuzimanje
 datoteke koje bi se inače podudarale

 Možete navesti više regularnih izraza, razdvojenih razmacima

 Uobičajena upotreba bi bila: `--excludes node_modules dist \.git build tmp`

 ### Upravljači
 Nizovi za prevođenje mogu sadržavati `{{ handlebars }}` šablone, bilo s dvije ili tri vitičaste zagrade

 Vjerovatno *NE* želite da se stvari unutar tih šablona prevedu

 Proslijedi `-H` / `--handlebars` zastavicu i ništa unutar `{{ ... }}` neće biti prevedeno

 ### Markdown
 Markdown nije ni tekst ni html, tako da Google Translate ima nekih poteškoća s tim

 Oznaka `-M` / `--markdown` omogućava posebno rukovanje datotekama za smanjenje vrijednosti

 Sa mardown fajlovima, ako ne koristite `-M` zastavicu, vjerovatno ćete pronaći ove probleme:
 * Neispravne veze. U prijevodu, razmak se pojavljuje nakon što se završi opis linka za smanjenje (sa `]` ), ali
 prije nego počne njegova ciljna veza (sa `(` ). Ovo uzrokuje da se umanjenje neispravno renderira, a veza
 je pokvaren prilikom pregledavanja dokumenta.
 * Blokovi koda se prevode. Google prevodilac ne zna šta markdown smatra kodom, a šta ne
 * Neispravan razmak za uvučene blokove koda. Razmak je teško sačuvati u prijevodu
 * Stvari unutar `backticks` će se prevesti kada skoro uvijek želite da budu doslovne vrijednosti

 Kada je omogućena zastavica `-M` / `--markdown` :
 * Uzorak `](` će se sažeti u `](` čime se popravljaju pokvarene veze za smanjenje vrijednosti
 * Omot "bez prevođenja" bit će postavljen oko uvučenih blokova koda, čuvajući ispravno uvlačenje i osiguravajući da nisu prevedeni
 * Omotač "bez prevođenja" bit će postavljen oko teksta unutar `backticks` kako bi se osiguralo da nisu prevedeni

 ### Proces-as
 Obično se sve obrađuje kao običan tekst

 Ako je vaš sadržaj HTML, bit će oštećen osim ako ne prođete opciju `-p html` / `--process-as html`

 ### Filter
 Za avanturiste: kada obrađujete datoteke u direktoriju, možete proslijediti opciju `-F` / `--filter`
 za filtriranje izlaza prije nego što se upiše u sistem datoteka

 Vrijednost ove opcije mora biti putanja do JS datoteke koja izvozi funkciju pod nazivom `filter`

 Funkcija `filter` mora biti `async` jer će `await` biti pozvana na njoj

 Prije nego što se datoteke zapišu na disk, cijeli sadržaj datoteke će biti proslijeđen funkciji `filter` kao niz

 Povratna vrijednost iz funkcije `filter` je ono što će zapravo biti zapisano u memoriju

 Dakle, imate potpunu kontrolu nad onim što će konačno biti napisano

 ### Pomoć
 Koristite `-h` / `--help` za prikaz pomoći

 ## Zabavite se prevodeći jezike!

</pre>
