Hókýlvæðing
 ==============
 Af hverju get ég ekki keyrt allt forritið mitt eða síðuna í gegnum Google Translate og fengið grunnþýðingu á öðru tungumáli?

 ***Nú geturðu það!***

 Nafnið `hokeylization` er portmanteau, sem þýðir "hokey localization"

 Það er dálítið vandræðalegt vegna þess að það er mjög einfalt: það sendir strengi til Google Translate

 Og það er einfalt en samt mjög öflugt. Það hefur sérstakan stuðning fyrir HTML skjöl,
 [HandlebarsJS](https://handlebarsjs.com/) sniðmát,
 og [Markdown](https://daringfireball.net/projects/markdown) skrár.

 Þú getur þýtt:
 * JavaScript hlutur sem inniheldur skilaboð
 * hvaða fjölda skráa eða möppur sem er, alltaf að fara í gegnum möppur afturkvæmt

 # Lestu þetta á öðru tungumáli
 Þetta README.md skjal hefur verið þýtt, með því að nota hókeylization tólið sjálft, á
 **[öll tungumál studd af Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ég er viss um að það er ekki fullkomið, en ég vona að það sé betra en ekkert!

 [🇸🇦 arabíska](../ar/README.md)
 [🇧🇩 bengalska](../bn/README.md)
 [🇩🇪 þýska](../de/README.md)
 [🇺🇸 enska](../en/README.md)
 [🇪🇸 spænska](../es/README.md)
 [🇫🇷 franska](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindí](../hi/README.md)
 [🇮🇩 indónesíska](../id/README.md)
 [🇮🇹 ítalska](../it/README.md)
 [🇯🇵 japanska](../ja/README.md)
 [🇰🇷 kóreska](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 pólska](../pl/README.md)
 [🇧🇷 portúgalska](../pt/README.md)
 [🇷🇺 rússneska](../ru/README.md)
 [🇰🇪 svahílí](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 tyrkneska](../tr/README.md)
 [🇵🇰 úrdú](../ur/README.md)
 [🇻🇳 víetnamska](../vi/README.md)
 [🇨🇳 kínverska](../zh/README.md)


 **[📚 ... Öll tungumál ...](../README.md)**
 ----

 ### Er vandamál með þessa þýðingu á README?
 Þessi tiltekna þýðing á upprunalegu [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 gæti verið gallað -- *leiðréttingar eru mjög vel þegnar!* Vinsamlegast sendu [pull beiðni á GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 eða ef þú ert ekki sátt við að gera það, [opnaðu mál](https://github.com/cobbzilla/hokeylization/issues)

 Þegar þú býrð til nýtt GitHub tölublað um þýðingu, vinsamlegast gerðu:
 * láttu vefslóð síðunnar fylgja (afritaðu/límdu af veffangastiku vafrans)
 * láttu nákvæmlega texta sem er rangur fylgja með (afrita/líma úr vafra)
 * vinsamlegast lýstu hvað er rangt -- er þýðingin röng? er sniðið eitthvað bilað?
 * komdu með tillögu um betri þýðingu eða hvernig textinn ætti að vera rétt sniðinn
 * **Þakka þér fyrir!**

 # Innihald
 * [Heimild](#Heimild)
 * [Support and Funding](#Support-and-Funding)
 * [Uppsetning](#Uppsetning)
 * [Uppsetning](#Uppsetning)
 * [Þýðir JavaScript strengjaforðaskrá](#Translating-a-JavaScript-string-resource-file)
 * [Þýðir möppu með textaskrám](#Þýðir-a-möppu-af-textaskrám)
 * [Aðrir valkostir](#Aðrir valkostir)
 * [JSON hópskipanir](#JSON-lotuskipanir)

 ## Heimild
 * [hokeylization á GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization á npm](https://www.npmjs.com/package/hokeylization)

 ## Stuðningur og fjármögnun
 Ég er að reyna að vera faglegur opinn hugbúnaðarframleiðandi. Ég hef verið að vinna í
 hugbúnaðariðnaðinum í mörg ár, ég hef stofnað farsæl fyrirtæki og selt þau til opinberra fyrirtækja.
 Nýlega missti ég vinnuna mína og ég er í rauninni ekki með neina aðra vinnu í röðinni

 Svo ég ætla að prófa að skrifa gagnlegan hugbúnað og sjá hvort það virkar

 Ég myndi þakka innilega jafnvel minnstu [mánaðarlegt framlag í gegnum Patreon](https://www.patreon.com/cobbzilla)

 ## Uppsetning
 Til að nota skipanalínutólið skaltu setja upp með því að nota `npm` eða `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Til að nota sem bókasafn skaltu setja upp `lite` útgáfuna, sem er miklu minni:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Skoðaðu síðan hjálp fyrir `hokey` skipunina:

    hokey --help
    hokey -h

 Viltu sjá úttak á þínu tungumáli eða öðru tungumáli?

 `hokey` reynir að greina tungumálið sjálfkrafa úr umhverfisbreytum skeljarins þíns

 Þú getur þvingað tungumál með því að stilla `LC_ALL` umhverfisbreytuna:

    LC_ALL=it hokey --help

 Athugaðu að ef þú hefur sett upp `hokeylization-lite` er skipanahjálp aðeins fáanleg á ensku

 ## Uppsetning
 Stilltu `GOOGLE_TRANSLATE_PROJECT_ID` umhverfisbreytuna til að auðkenna Google Translate verkefnið þitt

 Stilltu `GOOGLE_APPLICATION_CREDENTIALS` umhverfisbreytuna á JSON skilríkin sem þú hleður niður
 eftir að hafa fundið út hvernig auðkenning virkar á Google skýi (það getur verið skemmtilegt)

 Ef þú ert að keyra frá frumkóðanum geturðu líka sett þetta í `.env` skrá í upprunanum
 skrá sem þeir verða hlaðnir á keyrslutíma í gegnum [dotenv](https://www.npmjs.com/package/dotenv)

 ## Þýðing á JavaScript strengjaforðaskrá
 Strengjataflan þín **verður** að vera í JavaScript skrá á einu af þessum tveimur formum:

 ES6 útflutningur:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS útflutningur

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ef þessi skrá hét `myfile.en.js` geturðu þýtt hana á spænsku og þýsku með:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` hér að ofan er sérstakt -- það er frátekið orð í þessu tóli!

 `LANG` er skipt út fyrir tungumálakóðann fyrir úttaksskrárnar

 Þannig skapar ofangreind skipun skrárnar:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` er listi aðskilinn með kommum yfir ISO tungumálakóða
 [studd af Google Translate](https://cloud.google.com/translate/docs/languages)

 Ef úttaksskráin er þegar til verður hún skoðuð til að ákvarða hvaða lyklar eru þegar til.
 Núverandi lyklar verða ekki þýddir. Þýðingar á lyklum sem vantar verða búnar til og þeim bætt við
 til enda JS hlutarins. Öll skráin er alltaf endurskrifuð.

 Til að þvinga fram endurþýðingu á öllum lyklum, notaðu `-f` / `--force` valkostinn

 ## Þýða möppu með textaskrám
 Þú getur líka þýtt skráarskrá. hókeylization mun endurtekið heimsækja hvert
 skrá í möppuna og keyra innihald hennar í gegnum Google Translate og vista úttakið
 í samnefnda skrá í sérstöku möpputré

 Þegar markmið þýðingar þinnar er möppu er þessi háttur virkur

 `-o` / `--outfile` tilgreinir úttaksskrána

 ** STÓR AÐVÖRUN**: Þegar þú þýðir möppur skaltu **EKKI** tilgreina úttaksskrá
 það er í inntaksskránni þinni! Ef þú gerir þetta muntu:
 * framkalla óendanlega endurkomu
 * keyra upp Google reikninginn þinn
 * fylltu upp diskinn þinn
 * hafa minna gaman

 Hér er dæmi um hvað *ekki gera*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Þegar þetta keyrir eru þýddar skrár skrifaðar á `templates/es` , og verða þannig nýjar
 frumskrár til að þýða, þar sem þær eru undir `templates/` -- þetta ferli heldur áfram
 að eilífu, ekki gera það!

 #### Rétt notkun
 Allt í lagi, segjum að þú sért með nokkur tölvupóstsniðmát í möppu:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Til að þýða allt þetta yfir á spænsku og þýsku skaltu keyra:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Í ofangreindu er `LANG` frátekið orð og verður skipt út fyrir ISO tungumálakóðann

 Hvað gerist þegar ofangreint keyrir:
 * `templates/email/es` og `templates/email/de` verða búnar til (ef þær eru ekki til)
 * Sérhver skrá í `templates/email/en` verður þýdd á spænsku og þýsku
 * Núverandi úttaksskrár verða ekki endurgerðar nema þú notir `-f` / `--force`
 * Þú munt endar með eins möppuskipulag og skrár innan `es` og `de` eins og þú hefur undir `en`

 ## Aðrir valkostir

 ### Þurrt hlaup
 Farðu framhjá `-n` / `--dry-run` til að sýna hvað væri gert, en ekki hringja í raun nein API símtöl eða skrifa neinar skrár

 ### Kraftur
 Passaðu `-f` / `--force` til að endurskapa alltaf þýðingar, jafnvel þótt þær séu þegar til

 ### Samsvörun
 Passaðu `-m` / `--match` til að takmarka skrárnar sem eru unnar þegar keyrt er í möppuham

 Þú vilt kannski ekki alltaf þýða *hverja* skrá í upprunaskránni þinni yfir á markskrána þína

 Gildi `-m` / `--match` er regex (varið eftir skeljatilvitnunarreglur!) sem tilgreinir
 hvaða skrár ætti að þýða

 Þegar þú ert í vafa geturðu sameinað þennan valkost með `-n` / `--dry-run` til að sjá hvaða skrár yrðu þýddar

 ### Útilokar
 Stundum passar `-m` við of margar skrár. Notaðu `-e` / `--excludes` valkostinn til að útiloka beinlínis
 skrár sem annars hefðu passað saman

 Þú getur skráð margar regexes, aðskildar með bilum

 Algeng notkun væri: `--excludes node_modules dist \.git build tmp`

 ### Stýri
 Strengir sem á að þýða gætu innihaldið `{{ handlebars }}` sniðmát, annaðhvort með tveimur eða þremur krulluðum axlaböndum

 Þú vilt líklega *EKKI* að dótið í þessum sniðmátum sé þýtt

 Farðu framhjá `-H` / `--handlebars` fánanum og allt innan `{{ ... }}` verður ekki þýtt

 ### Markdown
 Markdown er hvorki texti né html, svo Google Translate á í nokkrum erfiðleikum með það

 `-M` / `--markdown` fáninn gerir sérstaka meðhöndlun fyrir markdown skrár

 Með markdown skrám, ef þú notar ekki `-M` fánann, muntu líklega finna þessi vandamál:
 * Brotnir hlekkir. Í þýðingunni birtist bilstafur eftir að lýsingu á merkingu tengli lýkur (með `]` ) en
 áður en marktengillinn byrjar (með `(` ). Þetta veldur því að merkingin birtist rangt og tengilinn
 er bilað þegar skjalið er skoðað.
 * Kóðablokkir verða þýddir. Google translate veit ekki hvað markdown telur kóða og hvað ekki
 * Rangt bil fyrir inndregnar kóðablokkir. Erfitt er að varðveita bil í þýðingu
 * Hlutir inni í `backticks` verða þýddir, þegar þú vilt næstum alltaf að þau séu bókstafleg gildi

 Þegar `-M` / `--markdown` fáninn er virkur:
 * Mynstrið `](` verður þétt í `](` og lagar þannig brotnu afmörkunartenglana
 * „No translate“ umbúðir verða settar utan um inndregna kóðablokka, varðveita rétta inndrátt og tryggja að þeir séu ekki þýddir
 * „No translate“ umbúðir verða settar utan um texta innan `backticks` til að tryggja að þeir séu ekki þýddir

 ### Vinnsla-sem
 Venjulega er allt unnið sem venjulegur texti

 Ef efnið þitt er HTML mun það skemmast nema þú standist `-p html` / `--process-as html`

 ### Sía
 Fyrir þá ævintýragjarna: þegar þú vinnur úr skrám í möppu geturðu staðist `-F` / `--filter`
 til að sía úttakið áður en það er skrifað í skráarkerfið

 Gildi þessa valmöguleika verður að vera slóð að JS skrá sem flytur út fall sem heitir `filter`

 `filter` aðgerðin verður að vera `async` vegna þess að `await` verður kallað á hana

 Áður en skrár eru skrifaðar á disk, verður allt skráarinnihaldið sent til `filter` aðgerðarinnar sem strengur

 Skilagildið frá `filter` fallinu er það sem í raun verður skrifað í geymslu

 Þannig hefur þú fulla stjórn á því sem að lokum verður skrifað

 Leitað verður að `filter` forskriftinni á eftirfarandi stöðum:
 * Núverandi möppu
 * Skrá sem heitir `.hokey-filters` í núverandi möppu
 * Skrá sem heitir `${HOME}/.hokey-filters` , þar sem `${HOME}` er heimaskrá núverandi notanda
 * Innbyggða [síuskráin](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 ### Hjálp
 Notaðu `-h` / `--help` til að sýna hjálp

 ## JSON runuskipanir
 Með `-j` / `--json` valkostinum geturðu keyrt margar samræmdar `hokey` skipanir

 Samkvæmt venju er þessi skrá kölluð `hokey.json` , en þú getur nefnt hana hvað sem þú vilt

 Ef þú sendir möppu sem `-j` valmöguleikann mun `hokey` leita að `hokey.json` í þeirri möppu

 JSON skráin ætti að innihalda einn hlut. Innan þess hlutar eru eiginleikanöfn hans þau sömu og
 skipanalínuvalkostunum, auk einni eign til viðbótar sem heitir `hokey`

 Eiginleikinn `hokey` er fjöldi skipana til að keyra. Eiginleikar sem lýst er yfir innan þessara skipana munu
 hnekkja öllum tvíteknum yfirlýsingum í ytri hlutnum.

 Innan hvers hlutar í `hokey` fylkinu ættirðu að tilgreina `name` og inntaks- og úttaksskrárnar

 Hér er dæmi um `hokey.json`

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
            "filter": "filterReadme.js",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Margar inntaksskrár
 Sendu fjölda skráarslóða sem `infiles` í stað einnar slóðar `infile` , eins og í þessu dæmi:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Vísitölur
 Þegar þýtt er yfir á mörg tungumál getur `hokey` búið til vísitöluskrá sem sýnir allar þýðingar sem gerðar eru
 og gefur tengla á þær

 *Þegar þú býrð til vísitölur geturðu aðeins haft einn inntaksgjafa*

 Farðu framhjá `-I` / `--index` valkostinum, gildið er þar sem vísitöluskráin verður búin til, sem getur verið skrá
 eða möppu. Ef það er möppu verður sjálfgefið skráarheiti notað, byggt á sniðmátinu (sjá hér að neðan)

 Notaðu `-A` / `--index-template` til að ákvarða hvernig vísitöluúttakið er sniðið. Þú getur tilgreint 'html',
 'markdown', 'texti' eða skráarslóðina að þínu eigin [HandlebarsJS](https://handlebarsjs.com/) sniðmáti

 Ef þú tilgreinir þitt eigið sniðmát verður þú einnig að tilgreina skrá (ekki möppu) fyrir `-I` / `--index`
 valmöguleika

 ## Skemmtu þér vel við að þýða tungumál!

</pre>
