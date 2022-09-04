Hokeylizacija
 ==============
 Pavadinimas yra portmanteau, reiškiantis „hokey lokalizaciją“

 Tai labai paprasta, nes ji siunčia eilutes į „Google“ vertėją

 Galite išversti:
 * JavaScript objektas, kuriame yra pranešimų
 * failų katalogas, rekursyviai

 # Skaitykite tai kita kalba
 Šis README.md dokumentas buvo išverstas naudojant patį hokeylization įrankį į
 **[Visos kalbos palaikomos „Google“ vertėjo](https://cloud.google.com/translate/docs/languages)!**

 Esu tikras, kad tai nėra tobula, bet tikiuosi, kad tai geriau nei nieko!

 [🇸🇦 arabų kalba](../ar/README.md)
 [🇧🇩 bengalų kalba] (lang/bn/README.md)
 [🇩🇪 Vokiečių kalba](../de/README.md)
 [🇺🇸 Anglų kalba](../en/README.md)
 [🇪🇸 ispanų kalba](../es/README.md)
 [🇫🇷 prancūzų] (lang/fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi] (lang/hi/README.md)
 [🇮🇩 Indoneziečių] (lang/id/README.md)
 [🇮🇹 italų kalba](../it/README.md)
 [🇯🇵 japonų kalba] (lang/ja/README.md)
 [🇰🇷 korėjiečių] (lang/ko/README.md)
 [🇮🇳 Maranthi] (lang/mr/README.md)
 [🇵🇱 lenkų kalba] (lang/pl/README.md)
 [🇧🇷 portugalų] (lang/pt/README.md)
 [🇷🇺 rusų kalba](../ru/README.md)
 [🇰🇪 Svahili] (lang/sw/README.md)
 [🇵🇭 Tagalogas](../tl/README.md)
 [🇹🇷 turkų] (lang/tr/README.md)
 [🇵🇰 urdu] (lang/ur/README.md)
 [🇻🇳 vietnamiečių] (lang/vi/README.md)
 [🇨🇳 kinų] (lang/zh/README.md)


 **[📚 ... Visos kalbos ...](../README.md)**
 ----

 ### Ar yra problemų dėl šio README vertimo?
 Šis konkretus originalo [README] vertimas (https://github.com/cobbzilla/yuebing/blob/master/README.md)
 gali būti su trūkumais – *labai laukiami pataisymai!* Atsiųskite [ištraukimo užklausą „GitHub“](https://github.com/cobbzilla/yuebing/pulls),
 arba jei nenorite to daryti, [atidarykite problemą](https://github.com/cobbzilla/yuebing/issues)

 Kai kuriate naują „GitHub“ problemą apie vertimą, atlikite toliau nurodytus veiksmus.
 * įtraukite puslapio URL (nukopijuokite / įklijuokite iš naršyklės adreso juostos)
 * įtraukite tikslų tekstą, kuris neteisingas (nukopijuokite / įklijuokite iš naršyklės)
 * maloniai pasiūlykite geresnio vertimo pasiūlymą
 * **Ačiū!**

 # Turinys
 * [Šaltinis](#Šaltinis)
 * [Parama ir finansavimas](#Support-and-Funding)
 * [Įdiegimas](#Įdiegimas)
 * [Sąranka](#Sąranka)
 * [„JavaScript“ eilutės išteklių failo vertimas](#Translating-a-JavaScript-string-resource-file)
 * [Teksto failų katalogo vertimas](#Translating-a-directory-of-text-files)
 * [Kitos parinktys](#Other-options)

 ## Šaltinis
 * [hokeylization naudojant GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Parama ir finansavimas
 Stengiuosi būti profesionali atvirojo kodo programinės įrangos kūrėja. Esu dirbęs
 programinės įrangos pramonėje daugelį metų įkūriau sėkmingas įmones ir pardaviau jas valstybinėms įmonėms.
 Neseniai netekau darbo, o kitų darbų tikrai neturiu

 Taigi aš pabandysiu parašyti naudingą programinę įrangą ir pažiūrėti, ar ji veikia

 Būčiau nuoširdžiai dėkingas net už mažiausią [mėnesinį įnašą per Patreon](https://www.patreon.com/cobbzilla)

 ## Diegimas
 Norėdami naudoti komandų eilutės įrankį, įdiekite naudodami `npm` arba `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Norėdami naudoti kaip biblioteką, įdiekite `lite` versiją, kuri yra daug mažesnė:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Tada pažiūrėkite komandos `hokey` :

    hokey --help
    hokey -h

 Norite matyti išvestį savo ar kita kalba?

 `hokey` bando automatiškai aptikti kalbą iš jūsų apvalkalo aplinkos kintamųjų

 Galite priversti kalbą nustatydami aplinkos kintamąjį `LC_ALL` :

    LC_ALL=it hokey --help

 Atminkite, kad jei įdiegėte `hokeylization-lite` , komandų žinynas pasiekiamas tik anglų kalba

 ## Sąranka
 Nustatykite aplinkos kintamąjį `GOOGLE_TRANSLATE_PROJECT_ID` , kad nustatytumėte „Google“ vertėjo projektą

 Nustatykite `GOOGLE_APPLICATION_CREDENTIALS` aplinkos kintamąjį į atsisiųstus JSON kredencialus
 išsiaiškinus, kaip autentifikavimas veikia „Google“ debesyje (tai gali būti smagu)

 Jei naudojate šaltinio kodą, juos taip pat galite įdėti į šaltinio `.env` failą
 kataloge jie bus įkeliami vykdymo metu per [dotenv](https://www.npmjs.com/package/dotenv)

 ## „JavaScript“ eilutės išteklių failo vertimas
 Jūsų eilučių lentelė **turi** būti „JavaScript“ faile viena iš šių dviejų formų:

 ES6 eksportas:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS eksportas

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Jei šis failas buvo pavadintas `myfile.en.js` , galite išversti jį į ispanų ir vokiečių kalbas:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Aukščiau pateikta `LANG` “ yra ypatinga – šiame įrankyje tai rezervuotas žodis!

 `LANG` “ pakeičiamas išvesties failų kalbos kodu

 Taigi aukščiau pateikta komanda sukuria failus:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` yra kableliais atskirtas ISO kalbų kodų sąrašas
 [palaikoma „Google“ vertėjo](https://cloud.google.com/translate/docs/languages)

 Jei išvesties failas jau yra, jis bus patikrintas, siekiant nustatyti, kurie raktai jau yra.
 Esami raktai nebus išversti. Bus sugeneruoti ir pridėti trūkstamų raktų vertimai
 iki JS objekto pabaigos. Visas failas visada perrašomas.

 Norėdami priversti iš naujo išversti visus klavišus, naudokite parinktį `-f` / `--force`

 ## Tekstinių failų katalogo vertimas
 Taip pat galite išversti failų katalogą. hokeylizacija rekursyviai aplankys kiekvieną
 failą kataloge ir paleiskite jo turinį naudodami „Google“ vertėją ir išsaugokite išvestį
 į identiško pavadinimo failą atskirame katalogų medyje

 Kai vertimo tikslas yra katalogas, šis režimas įjungtas

 `-o` / `--outfile` nurodo išvesties katalogą

 **DIDELIS ĮSPĖJIMAS**: Versdami katalogus, **NENAUDOKITE** išvesties katalogo
 kuris yra jūsų įvesties kataloge! Jei tai padarysite, jūs:
 * sukelti begalinę rekursiją
 * paleiskite savo Google sąskaitą
 * užpildykite savo diską
 * mažiau linksminkitės

 Štai pavyzdys, ko *nedaryti*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kai tai paleidžiama, išversti failai įrašomi į `templates/es` “ ir taip tampa nauji
 šaltinio failus, kuriuos reikia išversti, nes jie yra skiltyje `templates/` – šis procesas tęsiamas
 amžinai, nedaryk to!

 #### Teisingas naudojimas
 Gerai, tarkime, kad turite keletą el. laiškų šablonų kataloge:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Norėdami išversti visus šiuos žodžius į ispanų ir vokiečių kalbas, paleiskite:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Aukščiau pateiktame tekste `LANG` yra rezervuotas žodis ir bus pakeistas ISO kalbos kodu

 Kas nutinka, kai vykdoma aukščiau nurodyta:
 * Bus sukurti katalogai `templates/email/es` “ ir `templates/email/de` “ (jei jų nėra)
 * Kiekvienas `templates/email/en` bus išverstas į ispanų ir vokiečių kalbas
 * Esami išvesties failai nebus atkurti, nebent naudosite `-f` “ / `--force`
 * Galų gale turėsite identišką katalogų struktūrą ir failus `es` ir `de` kaip ir „ `en`

 ## Kitos parinktys

 ### Sausas bėgimas
 Perduokite `-n` / `--dry-run` , kad parodytumėte, kas bus daroma, bet iš tikrųjų neskambino API ir nerašykite jokių failų

 ### Jėga
 Perduokite `-f` / `--force` , kad visada iš naujo atkurtumėte vertimus, net jei jie jau yra

 ### Rungtynės
 Perduokite `-m` / `--match` , kad apribotumėte apdorojamus failus, kai jie veikia katalogo režimu

 Galbūt ne visada norėsite išversti *kiekvieną* failą šaltinio kataloge į tikslinį katalogą

 `-m` / `--match` yra reguliarioji išraiška (saugokitės apvalkalo citavimo taisyklių!), kuri nurodo
 kuriuos failus reikia išversti

 Jei abejojate, galite sujungti šią parinktį su `-n` / `--dry-run` , kad pamatytumėte, kurie failai bus išversti

 ### Neįtraukiama
 Kartais jūsų `-m` atitinka per daug failų. Norėdami aiškiai išskirti, naudokite parinktį „-e“ / `--excludes` `-e` “.
 failus, kurie kitu atveju būtų atitikę

 Galite išvardyti kelis reguliariuosius žodžius, atskirtus tarpais

 Įprastas naudojimas būtų toks: `--excludes node_modules dist \.git build tmp`

 ### Vairas
 Išverčiamose eilutėse gali būti `{{ handlebars }}` šablonų su dviem arba trimis riestiniais skliaustais

 Tikriausiai *NENORITE*, kad tuose šablonuose esantys dalykai būtų išversti

 Perduokite `-H` / `--handlebars` ir viskas, kas yra `{{ ... }}` , nebus išversta

 ### Užsirašyk
 Markdown nėra nei tekstas, nei html, todėl „Google“ vertėjas turi tam tikrų sunkumų

 `-M` / `--markdown` įgalina specialų žymėjimo failų tvarkymą

 Hokeylizer puikiai tvarko reikalus, tačiau naudodami žymėjimo failus dažnai galite susidurti su šiomis problemomis:
 * Sugedusios nuorodos. Vertime tarpo simbolis pasirodo po žymėjimo nuorodos aprašymo pabaigos (su `]` ), bet
 prieš prasidedant tikslinei nuorodai (su `(` ). Dėl to žymėjimas pateikiamas neteisingai, o nuoroda
 sugenda peržiūrint dokumentą.
 * Kodo blokai išverčiami. „Google“ vertėjas nežino, ką žymėjimas laiko kodu, o ką ne
 * Neteisingas tarpas tarp kodo blokų su įtrauka. Vertinant sunku išsaugoti tarpus
 * `backticks` esantys dalykai bus išversti, kai beveik visada norite, kad tai būtų tiesioginės vertės

 Kai įgalinta vėliavėlė `-M` / `--markdown` “:
 * Šablonas `] (` bus sutrumpintas į `](` taip pataisomos sugedusios žymėjimo nuorodos
 * Aplink įtrauktus kodo blokus bus įdėtas įvynioklis „be vertimo“, išsaugant tinkamą įtrauką ir užtikrinant, kad jie nebūtų išversti.
 * Aplink tekstą, esantį `backticks` “, bus įdėtas įvynioklis „neverčiamas“, siekiant užtikrinti, kad jie nebūtų išversti

 ### Apdoroti kaip
 Paprastai viskas apdorojama kaip paprastas tekstas

 Jei jūsų turinys yra HTML, jis bus sugadintas, nebent praleisite parinktį `-p html` “ / `--process-as html`

 ### Filtras
 Mėgstantiems nuotykius: apdorodami failus kataloge, galite perduoti parinktį `-F` / `--filter`
 filtruoti išvestį prieš įrašant ją į failų sistemą

 Šios parinkties reikšmė turi būti kelias į JS failą, kuris eksportuoja funkciją, pavadintą `filter`

 Funkcija `filter` turi būti `async` “, nes bus iškviesta `await` .

 Prieš įrašant failus į diską, visas failo turinys bus perduotas funkcijai `filter` kaip eilutė

 Grąžinama reikšmė iš funkcijos `filter` yra tai, kas iš tikrųjų bus įrašyta į saugyklą

 Taigi jūs visiškai kontroliuojate, kas pagaliau bus parašyta

 ### Pagalba
 Norėdami parodyti pagalbą, naudokite `-h` / `--help` .

 ## Laimingo vertimo!

</pre>
