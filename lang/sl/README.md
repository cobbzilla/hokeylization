Hokeilizacija
 ==============
 Ime je portmanteau, kar pomeni 'hokey lokalizacija'

 To je noro, ker je zelo preprosto: pošlje nize v Google Translate

 Lahko prevedete:
 * objekt JavaScript, ki vsebuje sporočila
 * imenik datotek, rekurzivno

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
 [🇮🇳 Maranthi](../mr/README.md)
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
 Ta poseben prevod izvirnika [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 je lahko pomanjkljivo -- *popravki so zelo dobrodošli!* Prosimo, pošljite [zahtevo za vlečenje na GitHub](https://github.com/cobbzilla/yuebing/pulls),
 ali če vam to ni všeč, [odprite težavo](https://github.com/cobbzilla/yuebing/issues)

 Ko ustvarite novo težavo GitHub o prevodu, naredite naslednje:
 * vključite URL strani (kopirajte/prilepite iz naslovne vrstice brskalnika)
 * vključi točno besedilo, ki je napačno (kopiraj/prilepi iz brskalnika)
 * prosimo za predlog boljšega prevoda
 * **Hvala vam!**

 # Vsebina
 * [Vir](#Vir)
 * [Podpora in financiranje](#Podpora-in-financiranje)
 * [Namestitev](#Namestitev)
 * [Nastavitev](#Nastavitev)
 * [Prevajanje datoteke z viri nizov JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Prevajanje imenika besedilnih datotek](#Prevajanje-imenika-besedilnih-datotek)
 * [Druge možnosti](#Other-options)

 ## Vir
 * [hokeylization na GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylizacija na npm](https://www.npmjs.com/package/hokeylization)

 ## Podpora in financiranje
 Poskušam biti profesionalni razvijalec odprtokodne programske opreme. Delal sem v
 v industriji programske opreme že vrsto let ustanavljam uspešna podjetja in jih prodajam javnim podjetjem.
 Pred kratkim sem izgubil službo in pravzaprav nimam nobenega drugega dela

 Zato bom poskusil napisati uporabno programsko opremo in preveril, ali deluje

 Iskreno bi bil hvaležen tudi za najmanjši [mesečni prispevek prek Patreona](https://www.patreon.com/cobbzilla)

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

 ### Pomoč
 Za prikaz pomoči uporabite `-h` / `--help`

 ## Veselo prevajanje!

</pre>
