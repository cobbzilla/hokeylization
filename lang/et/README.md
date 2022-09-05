Hokeyliseerimine
 ==============
 Miks ma ei saa kogu oma rakendust või saiti Google'i tõlke kaudu käitada ega hankida põhitõlget teises keeles?

 ***Nüüd sa saad!***

 Nimi `hokeylization` on portmanteau, mis tähendab "hokey lokaliseerimine"

 See on mõnevõrra segane, sest see on väga lihtne: see saadab stringid Google'i tõlkele

 Ja see on lihtne, kuid samas ka väga võimas. Sellel on spetsiaalne tugi HTML-dokumentidele,
 [HandlebarsJS](https://handlebarsjs.com/) mallid,
 ja [Markdown](https://daringfireball.net/projects/markdown) failid.

 Saate tõlkida:
 * sõnumeid sisaldav JavaScripti objekt
 * suvaline arv faile või katalooge, läbides katalooge alati rekursiivselt

 # Lugege seda teises keeles
 See README.md dokument on tõlgitud keelde, kasutades hokeyliseerimise tööriista
 **[Google'i tõlge toetab kõiki keeli](https://cloud.google.com/translate/docs/languages)!**

 Olen kindel, et see pole täiuslik, aga ma loodan, et see on parem kui mitte midagi!

 [🇸🇦 araabia](../ar/README.md)
 [🇧🇩 bengali](../bn/README.md)
 [🇩🇪 saksa keel](../de/README.md)
 [🇺🇸 inglise keel](../en/README.md)
 [🇪🇸 hispaania](../es/README.md)
 [🇫🇷 prantsuse keel](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneesia](../id/README.md)
 [🇮🇹 itaalia](../it/README.md)
 [🇯🇵 jaapani](../ja/README.md)
 [🇰🇷 korea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Poola](../pl/README.md)
 [🇧🇷 portugali](../pt/README.md)
 [🇷🇺 vene keel](../ru/README.md)
 [🇰🇪 suahiili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 türgi](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnami](../vi/README.md)
 [🇨🇳 hiina](../zh/README.md)


 **[📚 ... Kõik keeled ...](../README.md)**
 ----

 ### Kas selle README tõlkega on probleeme?
 See konkreetne originaali [README] tõlge (https://github.com/cobbzilla/yuebing/blob/master/README.md)
 võib olla vigane -- *parandused on väga teretulnud!* Saatke [tõmbetaotlus GitHubis](https://github.com/cobbzilla/yuebing/pulls),
 või kui te ei soovi seda teha, [avage probleem](https://github.com/cobbzilla/yuebing/issues)

 Kui loote tõlke kohta uue GitHubi probleemi, tehke järgmist.
 * lisage lehe URL (kopeerige/kleepige brauseri aadressiribalt)
 * lisage täpne tekst, mis on vale (kopeeri/kleebi brauserist)
 * palun kirjeldage, mis on valesti – kas tõlge on vale? kas vormindus on kuidagi katki?
 * pakkuge lahkelt ettepanekut parema tõlke kohta või kuidas tekst tuleks õigesti vormistada
 * **Aitäh!**

 # Sisu
 * [Allikas](#Allikas)
 * [Toetus ja rahastamine](#Support-and-Funding)
 * [Paigaldamine](#Installatsioon)
 * [Seadistus](#Seadistus)
 * [JavaScripti stringi ressursifaili tõlkimine](#Translating-a-JavaScript-string-resource-file)
 * [Tekstifailide kataloogi tõlkimine](#Translating-a-directory-of-text-files)
 * [Muud valikud](#Other-options)
 * [JSON-i partiikäsud](#JSON-batch-commands)

 ## Allikas
 * [hokeyliseerimine GitHubis](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Toetus ja rahastamine
 Üritan olla professionaalne avatud lähtekoodiga tarkvaraarendaja. Olen töötanud
 tarkvaratööstuses aastaid, olen loonud edukaid ettevõtteid ja müünud neid riigiettevõtetele.
 Hiljuti kaotasin töö ja muud tööd mul tegelikult ei ole

 Nii et proovin kirjutada kasulikku tarkvara ja vaadata, kas see töötab

 Oleksin siiralt tänulik isegi väikseima [igakuise panuse eest Patreoni kaudu](https://www.patreon.com/cobbzilla)

 ## Paigaldamine
 Käsurea tööriista kasutamiseks installige käsuga `npm` või `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 `lite` versioon, mis on palju väiksem:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Seejärel vaadake käsu `hokey` :

    hokey --help
    hokey -h

 Kas soovite näha väljundit oma keeles või mõnes muus keeles?

 `hokey` proovib keelt automaatselt teie kesta keskkonnamuutujatest tuvastada

 Keele sundimiseks saate määrata keskkonnamuutuja `LC_ALL` :

    LC_ALL=it hokey --help

 Pange tähele, et kui olete installinud `hokeylization-lite` , on käsu abi saadaval ainult inglise keeles

 ## Seadistamine
 Määrake oma Google'i tõlke projekti tuvastamiseks keskkonnamuutuja `GOOGLE_TRANSLATE_PROJECT_ID`

 Määrake keskkonnamuutujaks `GOOGLE_APPLICATION_CREDENTIALS` alla laaditud JSON-mandaadid
 pärast seda, kui olete aru saanud, kuidas autentimine Google'i pilves töötab (see võib olla lõbus)

 Kui kasutate lähtekoodi, saate need panna ka lähtekoodi `.env` faili
 kataloogi laaditakse need käitusajal [dotenv] kaudu (https://www.npmjs.com/package/dotenv)

 ## JavaScripti stringi ressursifaili tõlkimine
 Teie stringitabel **peab** olema JavaScripti failis ühel järgmistest kahest vormist:

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

 Kui selle faili nimi oli `myfile.en.js` , saate selle tõlkida hispaania ja saksa keelde järgmiselt:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Ülaltoodud `LANG` on eriline – see on selles tööriistas reserveeritud sõna!

 `LANG` asendatakse väljundfailide keelekoodiga

 Seega loob ülaltoodud käsk failid:

    myfile.es.js
    myfile.de.js

 Valik `-l` / `--languages` on ISO keelekoodide komadega eraldatud loend
 [toetab Google'i tõlge](https://cloud.google.com/translate/docs/languages)

 Kui väljundfail on juba olemas, uuritakse seda, et teha kindlaks, millised võtmed on juba olemas.
 Olemasolevaid võtmeid ei tõlgita. Puuduvate võtmete tõlked genereeritakse ja lisatakse
 JS objekti lõpuni. Kogu fail kirjutatakse alati ümber.

 Kõigi klahvide uuesti tõlkimise sundimiseks kasutage suvandit "-f" / `--force` `-f`

 ## Tekstifailide kataloogi tõlkimine
 Samuti saate tõlkida failide kataloogi. hokeylisatsioon külastab rekursiivselt iga
 faili kataloogi ja käivitage selle sisu Google'i tõlke kaudu ning salvestage väljund
 identse nimega failile eraldi kataloogipuus

 Kui teie tõlke sihtmärk on kataloog, on see režiim lubatud

 Valik `-o` / `--outfile` määrab väljundkataloogi

 **SUUR HOIATUS**: Kataloogide tõlkimisel **ÄRGE** määrake väljundkataloog
 mis asub teie sisendkataloogis! Kui teete seda, siis:
 * kutsuda esile lõpmatu rekursioon
 * koostage oma Google'i arve
 * täitke oma ketas
 * lõbutse vähem

 Siin on näide sellest, mida *mitte teha*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kui see töötab, kirjutatakse tõlgitud failid kausta `templates/es` " ja muutuvad seega uuteks
 lähtefailid tõlkida, kuna need asuvad `templates/` all – see protsess jätkub
 igavesti, ära tee seda!

 #### Õige kasutamine
 OK, oletame, et teil on kataloogis mõned meilimalle:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Kõigi nende hispaania ja saksa keelde tõlkimiseks käivitage:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Ülaltoodu puhul on `LANG` reserveeritud sõna ja see asendatakse ISO keelekoodiga

 Mis juhtub, kui ülaltoodud toimib:
 * Luuakse kataloogid `templates/email/es` " ja `templates/email/de` (kui neid pole)
 * Kõik failid `templates/email/en` tõlgitakse hispaania ja saksa keelde
 * Olemasolevaid väljundfaile ei genereerita uuesti, kui te ei kasuta `-f` "-f" / `--force`
 * Teil on identne kataloogistruktuur ja failid `es` ja `de` all, nagu teil on `en`

 ## Muud valikud

 ### Kuivjooks
 Edastage `-n` / `--dry-run` , et näidata, mida teha, kuid ärge tehke API-kõnesid ega kirjutage faile

 ### Jõud
 `-f` „-f” / `--force` alati uuesti genereerida, isegi kui need on juba olemas

 ### Matš
 `-m` / `--match` , et piirata kataloogirežiimis töötamisel töödeldavaid faile

 Te ei pruugi alati soovida tõlkida oma lähtekataloogi *igat* faili sihtkataloogi

 `-m` "-m" / `--match` on regex (olge shelli tsiteerimise reeglid!), mis määrab
 millised failid tuleks tõlkida

 Kui kahtlete, võite kombineerida selle võtmega `-n` / `--dry-run` , et näha, millised failid tõlgitakse

 ### Välja arvatud
 Mõnikord vastab teie `-m` liiga paljudele failidele. Kasutage selgesõnaliseks välistamiseks suvandit "-e" / `--excludes` `-e`
 failid, mis muidu oleksid sobinud

 Saate loetleda mitu regexet, eraldades need tühikutega

 Levinud kasutusviis oleks: `--excludes node_modules dist \.git build tmp`

 ### Juhtraud
 Tõlgitavad stringid võivad sisaldada malle `{{ handlebars }}` , kas kahe või kolme suludega

 Tõenäoliselt *EI taha*, et nende mallide sisu tõlgitaks

 Mööda lipust `-H` / `--handlebars` ja kõike, mis on `{{ ... }}` sees, ei tõlgita

 ### Markdown
 Markdown ei ole tekst ega html, seega on Google'i tõlkel sellega probleeme

 Lipp "-M" / `--markdown` `-M` allahindlusfailide erikäsitlust

 Kui te ei kasuta märgistusfailide puhul lippu `-M` , leiate tõenäoliselt järgmised probleemid:
 * Katkised lingid. Tõlkes ilmub tühik pärast allahindluslingi kirjelduse lõppu (tähisega `]` ), kuid
 enne selle sihtlingi algust (koos `(` ). Selle tulemusel renderdatakse allahindlus valesti ja link
 on dokumendi vaatamisel katki.
 * Koodiplokid tõlgitakse. Google'i tõlge ei tea, mida allahindlus loeb koodiks ja mida mitte
 * Treppidega koodiplokkide vale vahekaugus. Tõlkes on tühikuid raske säilitada
 * `backticks` sees olevad asjad tõlgitakse, kui soovite peaaegu alati, et need oleksid sõnasõnalised väärtused

 Kui lipp "-M" / `--markdown` `-M` lubatud:
 * Muster `](` tihendatakse `](` -ga parandades katkised allahindluslingid
 * Taandega koodiplokkide ümber asetatakse ümbris "tõlketa", mis säilitab õige taande ja tagab, et neid ei tõlgita
 * "Tõlketa" ümbris asetatakse teksti ümber `backticks` tagamaks, et neid ei tõlgita

 ### Töötle nagu
 Tavaliselt töödeldakse kõike lihttekstina

 Kui teie sisu on HTML, läheb see segamini, kui te ei sisesta suvandit `-p html` " / `--process-as html`

 ### Filter
 Seiklushimulistele: kataloogis olevate failide töötlemisel saate edastada suvandi "-F" / `--filter` `-F`
 väljundi filtreerimiseks enne selle failisüsteemi kirjutamist

 Selle suvandi väärtus peab olema JS-faili tee, mis ekspordib funktsiooni nimega `filter`

 Funktsioon `filter` peab olema `async` , kuna sellele kutsutakse välja "oota `await`

 Enne failide kettale kirjutamist edastatakse kogu faili sisu stringina funktsioonile `filter`

 Funktsiooni `filter` on see, mis tegelikult salvestusruumi kirjutatakse

 Seega on teil täielik kontroll selle üle, mida lõpuks kirjutatakse

 ### Abi
 Kasutage abi kuvamiseks klahve `-h` / `--help` .

 ## JSON-i partiikäsud
 `-j` "-j" / `--json` abil saate käivitada mitu koordineeritud `hokey` käsku

 Tavapäraselt nimetatakse seda faili `hokey.json` , kuid võite sellele nime anda mis iganes soovite

 Kui sisestate kataloogi valikuna `hokey` , otsib "hokey" sellest kataloogist `hokey.json` `-j`

 JSON-fail peaks sisaldama ühte objekti. Selle objekti sees on selle atribuutide nimed samad, mis
 käsurea suvandid ja üks täiendav atribuut nimega `hokey`

 `hokey` on käivitatavate käskude massiiv. Nendes käskudes deklareeritud omadused
 alistama kõik välises objektis olevad dubleeritud deklaratsioonid.

 Igas massiivi `hokey` peaksite määrama `name` ning sisend- ja väljundfailid

 Siin on näide `hokey.json`

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

 ### Mitu sisendfaili
 Edastage failiteede massiiv kui `infiles` , mitte ühe tee `infile` , nagu selles näites:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indeksid
 Paljudesse keeltesse tõlkimisel võib `hokey` luua registrifaili, mis loetleb kõik tehtud tõlked
 ja pakub neile linke

 *Indekside loomisel võib teil olla ainult üks sisendallikas*

 Jätke valik "-I" / `--index` `-I` väärtus on koht, kus luuakse indeksifail, mis võib olla fail
 või kataloog. Kui see on kataloog, kasutatakse malli alusel vaikimisi failinime (vt allpool)

 Kasutage `-A` / `--index-template` määramaks, kuidas indeksi väljund on vormindatud. Saate määrata "html",
 'markdown', 'text' või failitee teie enda [HandlebarsJS](https://handlebarsjs.com/) mallini

 Kui määrate oma malli, peate määrama ka faili (mitte kataloogi) `-I` "-I" / `--index`
 valik

 ## Lõbutsege keelte tõlkimise aega!

</pre>
