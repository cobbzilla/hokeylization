Hokeylization
 ============
 Carson nach urrainn dhomh an aplacaid no an làrach-lìn agam gu lèir a ruith tro Google Translate agus eadar-theangachadh bunaiteach fhaighinn ann an cànan eile?

 *** A-nis, faodaidh tu! ***

 Tha an t-ainm `hokeylization` na phortmanteau, a' ciallachadh 'ionadachadh hokey'.

 Tha e rudeigin hokey oir tha e gu math sìmplidh: bidh e a’ cur sreangan gu Google Translate

 Agus tha e sìmplidh, ach cuideachd glè chumhachdach. Tha taic shònraichte aige airson sgrìobhainnean HTML,
 [HandlebarsJS](https://handlebarsjs.com/) teamplaidean,
 agus [Markdown](https://daringfireball.net/projects/markdown) faidhlichean.

 Faodaidh tu eadar-theangachadh:
 * nì JavaScript anns a bheil teachdaireachdan
 * àireamh sam bith de fhaidhlichean no chlàran, an-còmhnaidh a’ dol thairis air clàran a-rithist

 # Leugh seo ann an cànan eile
 Chaidh an sgrìobhainn README.md seo eadar-theangachadh, a’ cleachdadh an inneal hokeylization fhèin, gu
 **[a h-uile cànan le taic bho Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Tha mi cinnteach nach eil e foirfe, ach tha mi an dòchas gu bheil e nas fheàrr na dad!

 [🇸🇦 Arabais](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Gearmailtis](../de/README.md)
 [🇺🇸 Beurla](../ga/README.md)
 [🇪🇸 Spàinntis](../es/README.md)
 [🇫🇷 Fraingis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Eadailtis](../it/README.md)
 [🇯🇵 Seapanais](../ja/README.md)
 [🇰🇷 Coirèanais](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Pòlainn](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Ruisis](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turcais](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Bhietnam](../vi/README.md)
 [🇨🇳 Sìnis](../zh/README.md)


 **[📚 ... a h-uile cànan ...](../README.md)**
 ----

 ### A bheil duilgheadas ann leis an eadar-theangachadh seo den README?
 An eadar-theangachadh sònraichte seo den fhear thùsail [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 faodaidh gu bheil e lochtach -- * tha fàilte mhòr air ceartachaidhean!* Feuch an cuir thu [iarrtas tarraing air GitHub]( https://github.com/cobbzilla/hokeylization/pulls ),
 no mura h-eil thu comhfhurtail a’ dèanamh sin, [fosgail cùis]( https://github.com/cobbzilla/hokeylization/issues)

 Nuair a chruthaicheas tu cùis GitHub ùr mu eadar-theangachadh, feuch an dèan thu:
 * cuir a-steach URL na duilleige (lethbhreac / pasg bho bhàr seòlaidh a’ bhrobhsair)
 * cuir a-steach an dearbh theacsa a tha ceàrr (lethbhreac / pasgain bhon bhrobhsair)
 * thoir cunntas air dè tha ceàrr -- a bheil an t-eadar-theangachadh ceàrr? A bheil an cruth briste ann an dòigh air choreigin?
 * thoir gu coibhneil moladh air eadar-theangachadh nas fheàrr, no mar a bu chòir an teacsa a bhith air a chruth ceart
 * **Tapadh leat!**

 # Susbaint
 * [Stòr](#Stòr)
 * [Taic is Maoineachadh](#Taic-is-Maoineachadh)
 * [Stàladh](#Stàladh)
 * [Suidhich](#Setup)
 * [Ag eadar-theangachadh faidhle goireas sreang JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Ag eadar-theangachadh eòlaire de fhaidhlichean teacsa](# Translating-a-directory-of-text-files)
 * [Roghainnean eile](#Other-roghainnean)
 * [Òrdughan baidse JSON](# JSON-batch-commands)

 ## Stòr
 * [hokeylization air GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization air npm](https://www.npmjs.com/package/hokeylization)

 ## Taic agus Maoineachadh
 Tha mi a’ feuchainn ri bhith nam leasaiche bathar-bog còd fosgailte proifeasanta. Tha mi air a bhith ag obair ann
 ann an gnìomhachas bathar-bog airson grunn bhliadhnaichean, tha mi air companaidhean soirbheachail a thòiseachadh agus air an reic ri companaidhean poblach.
 O chionn ghoirid chaill mi an obair agam, agus gu dearbh chan eil obair sam bith eile agam

 Mar sin tha mi a’ dol a dh’fheuchainn ri bathar-bog feumail a sgrìobhadh agus faicinn a bheil sin ag obair

 Bhithinn gu dùrachdach a’ cur luach air eadhon an tabhartas as lugha [tabhartas mìosail tro Patreon](https://www.patreon.com/cobbzilla)

 ## Stàladh
 Gus an inneal loidhne-àithne a chleachdadh, stàlaich le bhith a’ cleachdadh `npm` no `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Gus a chleachdadh mar leabharlann, stàlaich an dreach `lite` , a tha tòrr nas lugha:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 An uairsin thoir sùil air cuideachadh airson an àithne `hokey` :

    hokey --help
    hokey -h

 A bheil thu airson toradh fhaicinn sa chànan agad no ann an cànan eile?

 `hokey` a’ feuchainn ris a’ chànan a lorg gu fèin-ghluasadach bho chaochladairean àrainneachd an t-slige agad

 'S urrainn dhut cànan a sparradh le bhith a' suidheachadh an caochladair àrainneachd `LC_ALL` :

    LC_ALL=it hokey --help

 Thoir an aire ma tha thu air `hokeylization-lite` a chuir a-steach, chan eil cuideachadh àithne ri fhaighinn ach sa Bheurla

 ## Suidhich
 Suidhich caochladair àrainneachd `GOOGLE_TRANSLATE_PROJECT_ID` gus am pròiseact Google Translate agad a chomharrachadh

 Suidhich an caochladair àrainneachd `GOOGLE_APPLICATION_CREDENTIALS` gu na teisteasan JSON a luchdaich thu sìos
 às deidh dhut faighinn a-mach mar a tha dearbhadh ag obair air sgòth Google (faodaidh e a bhith spòrsail)

 Ma tha thu a' ruith bhon chòd thùsail, 's urrainn dhut iad sin a chur ann am faidhle `.env` san stòr cuideachd
 eòlaire thèid an luchdachadh aig àm ruith tro [dotenv](https://www.npmjs.com/package/dotenv)

 ## Ag eadar-theangachadh faidhle goireas sreang JavaScript
 Feumaidh do bhòrd sreang **** a bhith ann am faidhle JavaScript ann an aon den dà chruth seo:

 Às-mhalairt ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Às-mhalairt CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ma chaidh am faidhle seo ainmeachadh mar `myfile.en.js` , faodaidh tu eadar-theangachadh gu Spàinntis is Gearmailtis le:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Tha an `LANG` gu h-àrd sònraichte - tha e na fhacal glèidhte san inneal seo!

 Thèid an còd cànain airson na faidhlichean toraidh a chuir an àite an `LANG`

 Mar sin cruthaichidh an àithne gu h-àrd na faidhlichean:

    myfile.es.js
    myfile.de.js

 Tha an `-l` / `--languages` na liosta de chòdan cànain ISO air a sgaradh le cromag
 [le taic bho Google Translate]( https://cloud.google.com/translate/docs/languages)

 Ma tha am faidhle toraidh ann mu thràth, thèid a sgrùdadh gus faighinn a-mach dè na h-iuchraichean a tha ann mu thràth.
 Cha tèid iuchraichean gnàthaichte eadar-theangachadh. Thèid eadar-theangachaidhean airson iuchraichean a tha a dhìth a chruthachadh agus a chur ris
 gu deireadh an nì JS. Bidh am faidhle gu lèir an-còmhnaidh air ath-sgrìobhadh.

 Gus a h-uile iuchair ath-eadar-theangachadh, cleachd an roghainn `-f` / `--force`

 ## Ag eadar-theangachadh eòlaire de fhaidhlichean teacsa
 Faodaidh tu cuideachd eòlaire de fhaidhlichean eadar-theangachadh. bidh hokeylization a’ tadhal air gach fear
 faidhle san eòlaire agus ruith na tha ann tro Google Translate, agus sàbhail an toradh
 gu faidhle leis an aon ainm ann an craobh eòlaire air leth

 Nuair a tha targaid an eadar-theangachaidh agad mar eòlaire, tha am modh seo an comas

 Tha an `-o` / `--outfile` a' sònrachadh an eòlaire toraidh

 ** RABHADH MÒR **: Nuair a bhios tu ag eadar-theangachadh chlàran, ** NAD ** sònraich eòlaire toraidh
 tha sin taobh a-staigh an eòlaire inntrigidh agad! Ma nì thu seo, nì thu:
 * brosnaich ath-chuairteachadh gun chrìoch
 * ruith suas do bhile Google
 * lìon suas an diosc agad
 * bi nas lugha de spòrs agad

 Seo eisimpleir de na rudan *gun a dhèanamh*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Nuair a ruitheas seo, thèid faidhlichean eadar-theangaichte a sgrìobhadh gu `templates/es` , agus mar sin fàsaidh iad ùr
 faidhlichean stòr airson eadar-theangachadh, leis gu bheil iad fo `templates/` -- tha am pròiseas seo a’ leantainn
 gu bràth, na dèan!

 #### Cleachdadh ceart
 Ceart gu leòr, canaidh sinn gu bheil cuid de theamplaidean post-d agad ann an eòlaire:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Gus iad sin uile eadar-theangachadh gu Spàinntis is Gearmailtis, ruith:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Anns na tha gu h-àrd, tha `LANG` na fhacal glèidhte agus thèid còd cànain ISO a chuir na àite

 Dè thachras nuair a ruitheas na tha gu h-àrd:
 * Thèid na `templates/email/es` ’ agus `templates/email/de` ’ a chruthachadh (mura h-eil iad ann)
 * Thèid a h-uile faidhle ann an `templates/email/en` eadar-theangachadh gu Spàinntis is Gearmailtis
 * Cha tèid na faidhlichean toraidh a tha ann mu thràth ath-nuadhachadh mura cleachd thu `-f` / `--force`
 * Bidh structar eòlaire co-ionann agad agus faidhlichean taobh a-staigh `es` agus `de` mar a tha agad fo `en`

 ## Roghainnean eile

 ### Ruith tioram
 `-n` / `--dry-run` gus na dhèanadh tu a thaisbeanadh, ach na dèan fiosan API sam bith no sgrìobh faidhlichean sam bith

 ### Feachd
 `-f` / `--force` gus eadar-theangachaidhean ath-nuadhachadh an-còmhnaidh, eadhon ged a tha iad ann mu thràth

 ### maids
 `-m` / `--match` gus casg a chuir air na faidhlichean a thèid an giullachd nuair a bhios iad a’ ruith ann am modh eòlaire

 Is dòcha nach bi thu an-còmhnaidh ag iarraidh * a h-uile * faidhle san eòlaire thùsail agad eadar-theangachadh don eòlaire targaid agad

 Is e luach an `-m` / `--match` regex (thoir an aire air riaghailtean luaidh shligean!) a tha a’ sònrachadh
 dè na faidhlichean a bu chòir eadar-theangachadh

 Nuair a tha teagamh ann, faodaidh tu an roghainn seo a chur còmhla le `-n` / `--dry-run` gus faicinn dè na faidhlichean a bhiodh air an eadar-theangachadh

 ### Às aonais
 Aig amannan bidh an `-m` agad a’ maidseadh cus fhaidhlichean. Cleachd an `-e` / `--excludes` gus dùnadh a-mach gu soilleir
 faidhlichean a bhiodh air a mhaidseadh air dhòigh eile

 Faodaidh tu grunn regexes a liostadh, air an sgaradh le beàrnan

 Is e cleachdadh cumanta a bhiodh ann: `--excludes node_modules dist \.git build tmp`

 ### Crainn-làimhe
 Dh’ fhaodadh gum bi teamplaidean `{{ handlebars }}` anns na teudan airson eadar-theangachadh, an dàrna cuid le dhà no trì sèbhirean lùbach

 Is dòcha gu bheil thu * NACH * ag iarraidh an stuth taobh a-staigh nan teamplaidean sin eadar-theangachadh

 Cuir seachad a’ bhratach `-H` / `--handlebars` , agus cha tèid rud sam bith taobh a-staigh `{{ ... }}` eadar-theangachadh

 ### Marbhadh
 Chan e teacsa no html a th’ ann an Markdown, agus mar sin tha beagan dhuilgheadasan aig Google Translate leis

 Tha am bratach `-M` / `--markdown` a 'comasachadh làimhseachadh sònraichte airson faidhlichean comharrachaidh

 Le faidhlichean comharrachaidh, mura cleachd thu am bratach `-M` , is dòcha gum faigh thu na duilgheadasan seo:
 * Ceanglaichean briste. Anns an eadar-theangachadh, nochdaidh caractar fànais às deidh tuairisgeul ceangail comharrachaidh a thighinn gu crìch (le `]` ) ach
 mus tòisich an ceangal targaid aige (le `(` ). Bidh seo ag adhbhrachadh gu bheil an comharradh sìos ceàrr, agus an ceangal
 briste nuair a choimheadas tu air an sgrìobhainn.
 * Bidh blocaichean còd air an eadar-theangachadh. Chan eil fios aig Google translate dè an comharradh a tha a’ beachdachadh air còd agus dè nach eil
 * Beàrnan ceàrr airson blocaichean còd falaichte. Tha e duilich beàrn a ghleidheadh ann an eadar-theangachadh
 * Thèid rudan taobh a-staigh `backticks` ’ eadar-theangachadh, nuair a tha thu cha mhòr an-còmhnaidh ag iarraidh gum bi iad nan luachan litearra

 Nuair a tha am bratach `-M` / `--markdown` air a chomasachadh:
 * Bidh am pàtran `](` air a dhlùthadh gu `](` mar sin a' càradh nan ceanglaichean briste briste
 * Thèid pasgan “gun eadar-theangachadh” a chuir timcheall air blocaichean còd indented, a ’gleidheadh fèidh ceart agus a’ dèanamh cinnteach nach tèid an eadar-theangachadh
 * Thèid pasgan “gun eadar-theangachadh” a chuir timcheall air teacsa taobh a-staigh `backticks` gus dèanamh cinnteach nach tèid an eadar-theangachadh

 ### Pròiseas-mar
 Mar as trice bidh a h-uile càil air a phròiseasadh mar theacsa shìmplidh

 Mas e HTML a th’ anns an t-susbaint agad, thèid a mangled mura tèid thu seachad air an `-p html` / `--process-as html`

 ### Filter
 Airson an dàna: nuair a bhios tu a’ giullachd fhaidhlichean ann an eòlaire, faodaidh tu a dhol seachad air an `-F` / `--filter`
 gus an toradh a shìoladh mus tèid a sgrìobhadh chun t-siostam fhaidhlichean

 Feumaidh luach an roghainn seo a bhith na shlighe gu faidhle JS a dh’ às-mhalairt gnìomh leis an t-ainm `filter`

 Feumaidh an gnìomh `filter` ' a bhith `async` ' oir thèid ' `await` ' a ghairm air

 Mus tèid faidhlichean a sgrìobhadh gu diosc, thèid susbaint iomlan an fhaidhle a chuir chun ghnìomh `filter` mar shreang

 Is e an luach tilleadh bhon ghnìomh `filter` a thèid a sgrìobhadh gu stòradh

 Mar sin, tha smachd iomlan agad air na thèid a sgrìobhadh mu dheireadh

 ### Cuideachadh
 Cleachd `-h` / `--help` gus cuideachadh a shealltainn

 ## Òrdughan baidse JSON
 Leis an `-j` / `--json` , faodaidh tu iomadh `hokey` co-òrdanaichte a ruith

 Mar as àbhaist 's e `hokey.json` a chanar ris an fhaidhle seo, ach faodaidh tu rud sam bith a tha thu ag iarraidh ainmeachadh

 Ma thèid thu seachad air eòlaire mar an roghainn `hokey` `-j` seallaidh `hokey` airson `hokey.json` san eòlaire sin

 Bu chòir aon nì a bhith san fhaidhle JSON. Taobh a-staigh an nì sin, tha ainmean seilbh an aon rud ri
 na roghainnean loidhne-àithne, agus aon togalach a bharrachd leis an ainm `hokey`

 Tha an togalach `hokey` na raon de òrdughan airson ruith. Bidh na feartan a chaidh ainmeachadh taobh a-staigh nan òrdughan seo
 cuir thairis air dearbhaidhean dùblaichte sam bith san nì a-muigh.

 Taobh a-staigh gach nì anns an raon `hokey` , bu chòir dhut `name` a shònrachadh, agus na faidhlichean cuir a-steach is toraidh

 Seo eisimpleir de `hokey.json`

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

 ### Iomadh faidhle cuir a-steach
 Cuir seachad sreath de shlighean faidhle mar `infiles` an àite aon shlighe `infile` , mar a tha san eisimpleir seo:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Clàr-innse
 Nuair a bhios tu ag eadar-theangachadh gu iomadh cànan, faodaidh `hokey` faidhle clàr-amais a chruthachadh a nì liosta de na h-eadar-theangachaidhean air fad a chaidh a dhèanamh
 agus a’ toirt ceanglaichean dhaibh

 * Nuair a bhios tu a’ gineadh clàran-amais, chan urrainn dhut ach aon stòr cuir a-steach a bhith agad *

 Cuir seachad an roghainn `-I` / `--index` , is e an luach far an tèid am faidhle clàr-amais a chruthachadh, a dh'fhaodas a bhith na fhaidhle
 no eòlaire. Mas e eòlaire a th’ ann, thèid ainm faidhle bunaiteach a chleachdadh, stèidhichte air an teamplaid (faic gu h-ìosal)

 Cleachd an `-A` / `--index-template` gus faighinn a-mach ciamar a tha toradh a’ chlàr-amais air a chruth. Faodaidh tu 'html' a shònrachadh,
 'markdown', 'text', no slighe an fhaidhle chun teamplaid agad fhèin [ HandlebarsJS]( https://handlebarsjs.com/ )

 Ma shònraicheas tu an teamplaid agad fhèin, feumaidh tu cuideachd faidhle a shònrachadh (chan e eòlaire) airson an `-I` / `--index`
 roghainn

 ## Faigh ùine spòrsail ag eadar-theangachadh chànanan!

</pre>
