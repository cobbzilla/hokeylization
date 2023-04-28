Hokeilizacija
 ==============
 Zakaj ne morem zagnati svoje celotne aplikacije ali spletnega mesta prek Google Prevajalnika in dobiti osnovnega prevoda v drugem jeziku?

 ***Zdaj lahko!***

 Ime `hokeylization` je portmanteau, kar pomeni "hokey lokalizacija".

 To je nekoliko šaljivo, ker je zelo preprosto: pošlje nize v Google Translate

 In je preprost, a hkrati zelo močan. Ima posebno podporo za dokumente HTML,
 [HandlebarsJS](https://handlebarsjs.com/) predloge,
 in [Markdown](https://daringfireball.net/projects/markdown).

 Lahko prevedete:
 * objekt JavaScript, ki vsebuje sporočila
 * poljubno število datotek ali imenikov, vedno rekurzivno prečkanje imenikov

 # Preberite to v drugem jeziku
 Ta dokument README.md je bil z uporabo samega orodja za hokeilizacijo preveden v
 **[vsak jezik, ki ga podpira Google Prevajalnik](https://cloud.google.com/translate/docs/languages)!**

 Prepričan sem, da ni popolno, a upam, da je bolje kot nič!

 [🇸🇦 arabščina](../ar/README.md)
 [🇧🇩 bengalščina](../bn/README.md)
 [🇩🇪 nemščina](../de/README.md)
 [🇺🇸 angleščina](../en/README.md)
 [🇪🇸 španščina](../es/README.md)
 [🇫🇷 francoščina](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonezijščina](../id/README.md)
 [🇮🇹 italijanščina](../it/README.md)
 [🇯🇵 japonščina](../ja/README.md)
 [🇰🇷 korejščina](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 poljščina](../pl/README.md)
 [🇧🇷 portugalščina](../pt/README.md)
 [🇷🇺 ruščina](../ru/README.md)
 [🇰🇪 svahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turščina](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vietnamščina](../vi/README.md)
 [🇨🇳 kitajščina](../zh/README.md)


 **[📚 ... Vsi jeziki ...](../README.md)**
 ----

 ### Ali obstaja težava s tem prevodom README?
 Ta poseben prevod izvirnika [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 je lahko pomanjkljivo -- *popravki so zelo dobrodošli!* Prosimo, pošljite [povlečno zahtevo na GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 ali če vam to ni všeč, [odprite težavo](https://github.com/cobbzilla/hokeylization/issues)

 Ko ustvarite novo težavo GitHub o prevodu, naredite naslednje:
 * vključite URL strani (kopirajte/prilepite iz naslovne vrstice brskalnika)
 * vključi točno besedilo, ki je napačno (kopiraj/prilepi iz brskalnika)
 * Prosimo, opišite, kaj je narobe -- ali je prevod napačen? je formatiranje nekako pokvarjeno?
 * vljudno prosim za predlog boljšega prevoda oziroma kako naj bo besedilo pravilno oblikovano
 * **Hvala vam!**

 # Vsebina
 * [Vir](#Vir)
 * [Podpora in financiranje](#Podpora-in-financiranje)
 * [Namestitev](#Namestitev)
 * [Nastavitev](#Nastavitev)
 * [Prevajanje datoteke z viri nizov JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Prevajanje imenika besedilnih datotek](#Prevajanje-imenika-besedilnih-datotek)
 * [Druge možnosti](#Other-options)
 * [Paketni ukazi JSON](#JSON-paketni ukazi)

 ## Vir
 * [hokeylization na GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylizacija na npm](https://www.npmjs.com/package/hokeylization)

 ## Podpora in financiranje
 Poskušam biti profesionalni razvijalec odprtokodne programske opreme. Delal sem v
 v industriji programske opreme že vrsto let ustanavljam uspešna podjetja in jih prodajam javnim podjetjem.
 Pred kratkim sem izgubil službo in pravzaprav nimam nobenega drugega dela

 Zato bom poskusil napisati uporabno programsko opremo in preveril, ali deluje

 Če radi uporabljate to programsko opremo, bi bil zelo vesel, če bi prejel celo
 najmanjši [mesečni prispevek prek Patreona](https://www.patreon.com/cobbzilla)

 *Hvala vam!*

 ## Namestitev
 Če želite uporabiti orodje ukazne vrstice, namestite z uporabo `npm` ali `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Za uporabo kot knjižnico namestite `lite` različico, ki je veliko manjša:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Nato poglejte pomoč za ukaz `hokey` :

    hokey --help
    hokey -h

 Želite videti izpis v svojem ali drugem jeziku?

 `hokey` poskuša samodejno zaznati jezik iz spremenljivk okolja lupine

 Jezik lahko vsilite tako, da nastavite spremenljivko okolja `LC_ALL` :

    LC_ALL=it hokey --help

 Če ste namestili `hokeylization-lite` , je pomoč za ukaze na voljo samo v angleščini

 ## Nastaviti
 Nastavite spremenljivko okolja `GOOGLE_TRANSLATE_PROJECT_ID` , da prepoznate svoj projekt Google Prevajalnika

 Nastavite spremenljivko okolja `GOOGLE_APPLICATION_CREDENTIALS` na poverilnice JSON, ki ste jih prenesli
 po ugotovitvi, kako preverjanje pristnosti deluje v Googlovem oblaku (lahko je zabavno)

 Če uporabljate izvorno kodo, jih lahko vstavite tudi v datoteko `.env` v izvorni kodi
 imenik bodo naloženi med izvajanjem prek [dotenv](https://www.npmjs.com/package/dotenv)

 ## Prevajanje datoteke z viri niza JavaScript
 Vaša tabela nizov **mora** biti v datoteki JavaScript v eni od teh dveh oblik:

 Izvoz ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Izvoz CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Če je bila ta datoteka poimenovana `myfile.en.js` , jo lahko prevedete v španščino in nemščino z:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` v zgornjem je poseben -- to je rezervirana beseda v tem orodju!

 `LANG` se nadomesti z jezikovno kodo za izhodne datoteke

 Tako zgornji ukaz ustvari datoteke:

    myfile.es.js
    myfile.de.js

 Možnost `-l` / `--languages` je seznam jezikovnih kod ISO, ločenih z vejicami
 [podprto z Google Prevajalnikom](https://cloud.google.com/translate/docs/languages)

 Če izhodna datoteka že obstaja, bo pregledana, da se ugotovi, kateri ključi že obstajajo.
 Obstoječi ključi ne bodo prevedeni. Prevodi za manjkajoče ključe bodo ustvarjeni in dodani
 do konca objekta JS. Celotna datoteka je vedno prepisana.

 Če želite vsiliti ponovno prevajanje vseh ključev, uporabite možnost `-f` / `--force`

 ## Prevajanje imenika besedilnih datotek
 Prav tako lahko prevedete imenik datotek. hokeilizacija bo rekurzivno obiskala vsakega
 datoteko v imeniku in zaženite njeno vsebino prek Google Prevajalnika ter shranite rezultat
 v datoteko z enakim imenom v ločenem drevesu imenikov

 Ko je cilj vašega prevoda imenik, je ta način omogočen

 Možnost `-o` / `--outfile` določa izhodni imenik

 **VELIKO OPOZORILO**: Ko prevajate imenike, **NE** določite izhodnega imenika
 ki je znotraj vašega vnosnega imenika! Če boste to storili, boste:
 * povzroči neskončno rekurzijo
 * povečajte račun za Google
 * napolnite svoj disk
 * manj se zabavajte

 Tu je primer, česa *ne smete početi*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Ko se to zažene, se prevedene datoteke zapišejo v `templates/es` in tako postanejo nove
 izvorne datoteke za prevajanje, ker so pod `templates/` -- ta postopek se nadaljuje
 za vedno, ne počni tega!

 #### Pravilna uporaba
 V redu, recimo, da imate v imeniku nekaj e-poštnih predlog:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Če želite vse to prevesti v španščino in nemščino, zaženite:

    hokey -l es,de -o templates/email/LANG templates/email/en

 V zgornjem primeru je `LANG` « rezervirana beseda in bo nadomeščena z jezikovno kodo ISO

 Kaj se zgodi, ko se izvede zgoraj navedeno:
 * Ustvarjena bosta imenika `templates/email/es` in `templates/email/de` (če ne obstajata)
 * Vsaka datoteka v `templates/email/en` bo prevedena v španščino in nemščino
 * Obstoječe izhodne datoteke ne bodo ponovno ustvarjene, razen če uporabite `-f` / `--force`
 * Na koncu boste imeli enako strukturo imenika in datoteke znotraj `es` in `de` , kot jih imate pod `en`

 ## Druge možnosti

 ### Suhi tek
 `-n` / `--dry-run` , da prikažete, kaj bo storjeno, vendar dejansko ne izvajajte klicev API-ja ali zapisujte datotek

 ### Sila
 `-f` / `--force` , da vedno znova ustvarite prevode, tudi če že obstajajo

 ### Ujemanje
 `-m` / `--match` , da omejite datoteke, ki se obdelujejo pri izvajanju v načinu imenika

 Morda ne boste želeli vedno prevesti *vse* datoteke v izvornem imeniku v ciljni imenik

 Vrednost možnosti `-m` / `--match` je regularni izraz (pazite na pravila navajanja lupine!), ki določa
 katere datoteke je treba prevesti

 Če ste v dvomih, lahko to možnost kombinirate z `-n` / `--dry-run` , da vidite, katere datoteke bodo prevedene

 ### Izključuje
 Včasih se vaš `-m` ujema s preveč datotekami. Za izrecno izključitev uporabite možnost `-e` / `--excludes` «.
 datoteke, ki bi se sicer ujemale

 Navedete lahko več regularnih izrazov, ločenih s presledki

 Pogosta uporaba bi bila: `--excludes node_modules dist \.git build tmp`

 ### Krmilo
 Nizi za prevajanje lahko vsebujejo predloge `{{ handlebars }}` z dvema ali tremi zavitimi oklepaji

 Verjetno *NE* želite, da se stvari znotraj teh predlog prevedejo

 Podajte zastavico `-H` / `--handlebars` in vse znotraj `{{ ... }}` ne bo prevedeno

 ### Markdown
 Markdown ni ne besedilo ne html, zato ima Google Prevajalnik z njim nekaj težav

 `-M` / `--markdown` omogoča posebno obravnavo datotek markdown

 Če pri markdown datotekah ne uporabljate zastavice `-M` , boste verjetno naleteli na te težave:
 * Nedelujoče povezave. V prevodu se znak za presledek pojavi po koncu opisa povezave za označevanje (z `]` ), vendar
 preden se začne njena ciljna povezava (z `(` ). To povzroči nepravilno upodabljanje oznake in povezava
 se pri ogledu dokumenta pokvari.
 * Bloki kode se prevedejo. Google translate ne ve, kaj markdown upošteva kodo in kaj ne
 * Nepravilen razmik za zamaknjene bloke kode. Razmik je težko ohraniti v prevodu
 * Stvari znotraj `backticks` bodo prevedene, ko skoraj vedno želite, da so dobesedne vrednosti

 Ko je omogočena zastavica `-M` / `--markdown` :
 * Vzorec `](` bo zgoščen v `](` s čimer se bodo popravile pokvarjene označevalne povezave
 * Okoli zamaknjenih blokov kode bo nameščen ovoj »brez prevajanja«, ki bo ohranil pravilen zamik in zagotovil, da niso prevedeni
 * Ovoj »no translate« bo nameščen okoli besedila znotraj `backticks` , da se zagotovi, da niso prevedena

 ### Proces kot
 Običajno je vse obdelano kot navadno besedilo

 Če je vaša vsebina HTML, bo poškodovana, razen če posredujete možnost `-p html` / `--process-as html`

 ### Filter
 Za pustolovce: pri obdelavi datotek v imeniku lahko podate možnost `-F` / `--filter`
 za filtriranje izhoda, preden se zapiše v datotečni sistem

 Vrednost te možnosti mora biti pot do datoteke JS, ki izvozi funkcijo z imenom `filter`

 Funkcija `filter` mora biti `async` ker jo bo poklicala `await`

 Preden se datoteke zapišejo na disk, bo celotna vsebina datoteke posredovana funkciji `filter` kot niz

 Vrednost, ki jo vrne funkcija `filter` , je tisto, kar bo dejansko zapisano v shrambo

 Tako imate popoln nadzor nad tem, kaj bo končno napisano

 Skript `filter` bomo iskali na naslednjih lokacijah (pri čemer bo `.js` dodan filtru
 ime, razen če se že konča na `.js` )
 * Trenutni imenik
 * Imenik z imenom `.hokey-filters` znotraj trenutnega imenika
 * Imenik z imenom `${HOME}/.hokey-filters` , kjer je `${HOME}` domači imenik trenutnega uporabnika
 * Vgrajen [imenik filtrov](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Parametri filtra
 Niz `filter` je lahko sestavljen iz več besed. V tem primeru je prva beseda ime filtra in
 preostale besede bodo posredovane kot argumenti funkciji `filter`

 ### Pomoč
 Za prikaz pomoči uporabite `-h` / `--help`

 ## Paketni ukazi JSON
 Z `-j` / `--json` lahko izvajate več usklajenih ukazov `hokey`

 Po dogovoru se ta datoteka imenuje `hokey.json` , vendar jo lahko poimenujete, kakor želite

 Če `-j` imenik kot možnost `hokey` , bo `hokey` poiskal `hokey.json` v tem imeniku

 Datoteka JSON mora vsebovati en predmet. Znotraj tega predmeta so imena njegovih lastnosti enaka kot
 možnosti ukazne vrstice in ena dodatna lastnost z imenom `hokey`

 Lastnost `hokey` je niz ukazov za izvajanje. Lastnosti, deklarirane v teh ukazih, bodo
 preglasi vse podvojene deklaracije v zunanjem objektu.

 Znotraj vsakega predmeta v matriki `hokey` morate podati `name` ter vhodne in izhodne datoteke

 Tukaj je primer `hokey.json`

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

 ### Več vhodnih datotek
 Posredujte matriko poti do datotek kot `infiles` namesto ene same poti `infile` , kot v tem primeru:

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
 Pri prevajanju v številne jezike lahko `hokey` ustvari indeksno datoteko, ki navaja vse opravljene prevode
 in ponuja povezave do njih

 *Pri ustvarjanju indeksov imate lahko samo en vhodni vir*

 Podajte možnost `-I` / `--index` , vrednost je mesto, kjer bo ustvarjena indeksna datoteka, ki je lahko datoteka
 ali imenik. Če gre za imenik, bo uporabljeno privzeto ime datoteke, ki temelji na predlogi (glejte spodaj)

 Uporabite `-A` / `--index-template` , da določite, kako je formatiran izhod indeksa. Določite lahko 'html',
 'markdown', 'text' ali pot datoteke do vaše predloge [HandlebarsJS](https://handlebarsjs.com/)

 Če določite svojo predlogo, morate določiti tudi datoteko (ne imenik) za `-I` / `--index`
 možnost

 ## Zabavajte se ob prevajanju jezikov!

</pre>
