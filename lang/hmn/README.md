Hokeylization
 ========
 Vim li cas kuv thiaj tsis tuaj yeem khiav tag nrho kuv lub app lossis qhov chaw hauv Google Txhais lus thiab tau txais kev txhais lus yooj yim ua lwm hom lus?

 *** Tam sim no, koj tuaj yeem!***

 Lub npe `hokeylization` yog portmanteau, lub ntsiab lus 'hokey localization'

 Nws yog me ntsis hokey vim nws yooj yim heev: nws xa cov hlua rau Google Txhais lus

 Thiab nws yog qhov yooj yim, tseem muaj zog heev. Nws muaj kev txhawb tshwj xeeb rau cov ntaub ntawv HTML,
 [HandlebarsJS](https://handlebarsjs.com/) templates,
 thiab [Markdown](https://daringfireball.net/projects/markdown) cov ntaub ntawv.

 Koj tuaj yeem txhais:
 * ib qho khoom siv JavaScript uas muaj cov lus
 * txhua tus lej ntawm cov ntaub ntawv lossis cov npe, ib txwm hla cov npe rov ua dua

 # Nyeem qhov no ua lwm hom lus
 Cov ntaub ntawv README.md no tau raug txhais, siv cov cuab yeej hokeylization nws tus kheej, rau hauv
 **[txhua hom lus txhawb nqa los ntawm Google Txhais](https://cloud.google.com/translate/docs/languages)!**

 Kuv paub tseeb tias nws tsis zoo tag nrho, tab sis kuv vam tias nws zoo dua tsis muaj dab tsi!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 Fabkis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Nyiv](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Nyab Laj](../vi/README.md)
 [🇨🇳 Suav](../zh/README.md)


 **[📚...Txhua yam lus...](../README.md)**
 ----

 ### Puas muaj teeb meem nrog qhov kev txhais lus ntawm README?
 Qhov kev txhais lus tshwj xeeb ntawm tus thawj [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 tej zaum yuav muaj qhov tsis txaus ntseeg -- * kho tau zoo siab txais tos!* Thov xa [rub thov ntawm GitHub](https://github.com/cobbzilla/yuebing/pulls),
 lossis yog tias koj tsis xis nyob ua qhov ntawd, [qhib qhov teeb meem](https://github.com/cobbzilla/yuebing/issues)

 Thaum koj tsim qhov teeb meem tshiab GitHub txog kev txhais lus, thov ua:
 * suav nrog nplooj URL (copy / paste los ntawm browser chaw nyob bar)
 * suav nrog cov ntawv tseeb uas tsis yog (copy / paste los ntawm browser)
 * thov piav qhia qhov tsis raug - puas yog kev txhais lus tsis raug? yog formatting puas lawm?
 * Ua siab zoo muab cov lus pom zoo ntawm kev txhais lus zoo dua, lossis yuav ua li cas cov ntawv yuav tsum raug formatted kom raug
 ** Ua tsaug!**

 # Cov ntsiab lus
 * [Source](#Source)
 * [Support thiab Funding](#Support-and-Funding)
 * [Installation](#Installation)
 * [Setup](#Setup)
 * [Kev txhais cov ntaub ntawv JavaScript string resource](#Translating-a-JavaScript-string-resource-file)
 * [Hloov cov npe ntawm cov ntawv nyeem](#Translating-a-directory-of-text-files)
 * [Lwm txoj kev xaiv](#Lwm txoj kev xaiv)
 * [JSON batch commands](#JSON-batch-commands)

 ## Source
 * [hokeylization ntawm GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization ntawm npm](https://www.npmjs.com/package/hokeylization)

 ## Kev them nyiaj yug thiab nyiaj txiag
 Kuv tab tom sim ua tus kws tshaj lij qhib qhov software tsim tawm. Kuv tau ua haujlwm hauv
 kev lag luam software tau ntau xyoo, kuv tau pib cov tuam txhab ua tiav thiab muag rau cov tuam txhab pej xeem.
 Tsis ntev los no kuv poob kuv txoj haujlwm, thiab kuv tsis muaj lwm txoj haujlwm ua haujlwm

 Yog li kuv yuav sim sau cov software pab tau thiab saib seb qhov ntawd ua haujlwm

 Kuv xav ua tsaug txawm tias qhov tsawg tshaj plaws [kev pab nyiaj hli ntawm Patreon](https://www.patreon.com/cobbzilla)

 ## Kev teeb tsa
 Txhawm rau siv cov cuab yeej hais kom ua kab, nruab siv `npm` lossis `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Txhawm rau siv raws li lub tsev qiv ntawv, nruab qhov `lite` version, uas yog me dua:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Tom qab ntawd saib kev pab rau `hokey` hais kom ua:

    hokey --help
    hokey -h

 Koj puas xav pom cov zis hauv koj cov lus lossis lwm yam lus?

 `hokey` sim kuaj cov lus tau txais los ntawm koj lub plhaub qhov chaw hloov pauv

 Koj tuaj yeem yuam ib hom lus los ntawm kev teeb tsa `LC_ALL` ib puag ncig hloov pauv:

    LC_ALL=it hokey --help

 Nco ntsoov tias yog tias koj tau teeb tsa `hokeylization-lite` , kev pab hais kom ua tsuas yog muaj ua lus Askiv xwb

 ## Teeb tsa
 Teem lub `GOOGLE_TRANSLATE_PROJECT_ID` ib puag ncig hloov pauv los txheeb xyuas koj qhov project Google Txhais lus

 Teem lub `GOOGLE_APPLICATION_CREDENTIALS` ib puag ncig hloov pauv mus rau JSON daim ntawv pov thawj koj rub tawm
 Tom qab txheeb xyuas seb qhov kev lees paub ua haujlwm li cas hauv Google huab (nws tuaj yeem lom zem)

 Yog tias koj tab tom khiav los ntawm qhov chaws, koj tuaj yeem muab cov no tso rau hauv `.env` cov ntaub ntawv hauv qhov chaw
 directory lawv mam li loaded ntawm runtime ntawm [dotenv](https://www.npmjs.com/package/dotenv)

 ## Txhais cov ntaub ntawv JavaScript string
 Koj txoj hlua kab lus **yuav tsum ** nyob rau hauv cov ntaub ntawv JavaScript hauv ib qho ntawm ob daim ntawv no:

 ES6 export:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS export

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Yog tias cov ntaub ntawv no muaj npe `myfile.en.js` , koj tuaj yeem txhais nws ua lus Mev thiab German nrog:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Lub `LANG` nyob rau saum toj no tshwj xeeb - nws yog ib lo lus tshwj tseg hauv cov cuab yeej no!

 Lub `LANG` yog hloov nrog cov lus code rau cov ntaub ntawv tso zis

 Yog li cov lus txib saum toj no tsim cov ntaub ntawv:

    myfile.es.js
    myfile.de.js

 Qhov kev xaiv `-l` / `--languages` yog cov npe sib cais ntawm cov lej ISO
 [txhawb los ntawm Google Txhais](https://cloud.google.com/translate/docs/languages)

 Yog tias cov ntaub ntawv tso tawm twb muaj lawm, nws yuav raug tshuaj xyuas los txiav txim seb cov yuam sij twg twb muaj lawm.
 Cov yuam sij uas twb muaj lawm yuav tsis raug txhais. Kev txhais lus rau cov yuam sij uas ploj lawm yuav raug tsim tawm thiab ntxiv ntxiv
 mus rau qhov kawg ntawm JS khoom. Tag nrho cov ntaub ntawv yog ib txwm rewritten.

 Txhawm rau yuam kom rov txhais txhua tus yuam sij, siv qhov kev xaiv `-f` / `--force`

 ## Txhais cov npe ntawm cov ntawv nyeem
 Koj tseem tuaj yeem txhais cov npe ntawm cov ntaub ntawv. hokeylization yuav recursively tuaj xyuas txhua
 cov ntaub ntawv nyob rau hauv phau ntawv qhia thiab khiav nws cov ntsiab lus los ntawm Google Txhais Lus, thiab txuag cov zis
 mus rau ib daim ntawv uas muaj npe nyob rau hauv ib tsob ntoo directory cais

 Thaum lub hom phiaj ntawm koj txhais lus yog ib tug directory, hom no yog enabled

 Qhov kev xaiv `-o` / `--outfile` qhia txog cov ntawv tso zis

 ** CEEB TOOM TXOG **: Thaum txhais cov npe, ** TSIS TXAUS SIAB ** Qhia cov ntaub ntawv tso tawm
 uas yog nyob rau hauv koj input directory! Yog koj ua li no, koj yuav:
 * induce infinite recursion
 * khiav koj daim nqi Google
 * sau koj lub disk
 * muaj kev lom zem tsawg

 Nov yog ib qho piv txwv ntawm qhov * tsis ua *:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Thaum qhov no khiav, cov ntaub ntawv txhais tau sau rau `templates/es` , thiab yog li ua tshiab
 cov ntaub ntawv los txhais lus, vim lawv nyob hauv `templates/` - cov txheej txheem no txuas ntxiv mus
 mus ib txhis, tsis txhob ua!

 #### Kev siv kom raug
 OK, cia peb hais tias koj muaj qee tus email templates hauv phau ntawv teev npe:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Txhawm rau txhais tag nrho cov no rau Spanish thiab German, khiav:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Hauv cov lus saum toj no, `LANG` yog ib lo lus tshwj tseg thiab yuav raug hloov nrog cov lus ISO

 Yuav ua li cas thaum cov saum toj no khiav:
 * Cov `templates/email/es` thiab `templates/email/de` directory yuav raug tsim (yog tias lawv tsis muaj)
 * Txhua cov ntaub ntawv hauv `templates/email/en` yuav raug muab txhais ua lus Mev thiab German
 * Cov ntaub ntawv tso tawm uas twb muaj lawm yuav tsis rov tsim dua yog tias koj siv `-f` / `--force`
 * Koj yuav xaus nrog cov qauv sau npe zoo ib yam thiab cov ntaub ntawv hauv `es` thiab `de` zoo li koj muaj nyob rau hauv `en`

 ## Lwm txoj kev xaiv

 ### Dry run
 Hla `-n` / `--dry-run` los tso saib seb yuav ua li cas, tab sis tsis txhob ua qhov API hu lossis sau cov ntaub ntawv

 ### Lub zog
 Hla `-f` / `--force` ib txwm rov tsim dua cov lus txhais, txawm tias lawv twb muaj lawm

 ### Sib
 Hla `-m` / `--match` kom txwv cov ntaub ntawv ua tiav thaum khiav hauv hom npe

 Tej zaum koj yuav tsis xav txhais * txhua * cov ntaub ntawv nyob rau hauv koj qhov chaw directory rau koj lub hom phiaj directory

 Tus nqi ntawm `-m` / `--match` kev xaiv yog regex (ceev faj plhaub quoting txoj cai!) uas qhia meej
 cov ntaub ntawv twg yuav tsum tau muab txhais

 Thaum tsis ntseeg, koj tuaj yeem muab cov kev xaiv no nrog `-n` / `--dry-run` kom pom cov ntaub ntawv twg yuav raug txhais

 ### Excludes
 Qee zaum koj `-m` phim ntau cov ntaub ntawv. Siv qhov `-e` / `--excludes` --excludes" kev xaiv kom meej meej cais
 cov ntaub ntawv uas lwm yam yuav tau matched

 Koj tuaj yeem sau ntau regexes, sib cais los ntawm qhov chaw

 Ib qho kev siv feem ntau yuav yog: `--excludes node_modules dist \.git build tmp`

 ### Handlebars
 Cov hlua los txhais lus yuav muaj `{{ handlebars }}` templates, nrog rau ob lossis peb curly-braces

 Tej zaum koj yuav * TSIS TXHOB xav kom cov khoom hauv cov qauv no raug txhais

 Hla lub `-H` / `--handlebars` chij, thiab txhua yam hauv `{{ ... }}` yuav tsis raug txhais

 ### Markdown
 Markdown tsis yog ntawv lossis html, yog li Google Txhais Lus muaj qee qhov teeb meem nrog nws

 Tus `-M` " / `--markdown` ua kom muaj kev tuav tshwj xeeb rau cov ntaub ntawv markdown

 Nrog cov ntaub ntawv markdown, yog tias koj tsis siv tus chij `-M` , koj yuav pom cov teeb meem no:
 * Cov kab txuas tawg. Hauv kev txhais lus, qhov chaw cim tshwm tom qab cov lus piav qhia txuas txuas xaus (nrog `]` ) tab sis
 ua ntej nws lub hom phiaj txuas pib (nrog `(` ).
 tawg thaum saib daim ntawv.
 * Code blocks tau txhais. Google txhais tsis paub dab tsi markdown txiav txim siab code thiab dab tsi nws tsis
 * Qhov sib txawv tsis raug rau indented code blocks. Qhov sib txawv yog qhov nyuaj rau khaws cia hauv kev txhais lus
 * Tej yam hauv `backticks` yuav tau txhais, thaum koj yuav luag ib txwm xav kom lawv ua qhov tseem ceeb

 Thaum tus `-M` / `--markdown` tau qhib:
 * Tus qauv `](` yuav tsum condensed rau `](` yog li kho qhov sib txuas markdown
 * Ib daim ntawv "tsis muaj neeg txhais lus" yuav muab tso rau ib puag ncig cov kab thaiv kab thaiv, khaws cia kom raug indentation thiab xyuas kom lawv tsis raug txhais
 * Ib daim ntawv "tsis muaj txhais" yuav muab tso rau ib puag ncig cov ntawv hauv `backticks` kom ntseeg tau tias lawv tsis raug txhais

 ### Process-as
 Feem ntau txhua yam yog ua tiav raws li cov ntawv nyeem

 Yog tias koj cov ntsiab lus yog HTML, nws yuav raug mangled tshwj tsis yog tias koj dhau qhov `-p html` / `--process-as html` kev xaiv

 ### Lim
 Rau kev taug txuj kev nyuaj: thaum ua cov ntaub ntawv hauv cov npe, koj tuaj yeem dhau qhov kev xaiv `-F` / `--filter`
 txhawm rau lim cov zis ua ntej nws sau rau hauv filesystem

 Tus nqi ntawm qhov kev xaiv no yuav tsum yog txoj hauv kev rau JS cov ntaub ntawv uas xa tawm cov haujlwm hu ua `filter`

 Cov haujlwm `filter` yuav tsum yog `async` vim tias `await` yuav raug hu rau nws

 Ua ntej cov ntaub ntawv sau rau disk, tag nrho cov ntsiab lus ntawm cov ntaub ntawv yuav raug xa mus rau `filter` ua haujlwm raws li txoj hlua

 Tus nqi xa rov qab los ntawm `filter` muaj nuj nqi yog dab tsi tiag tiag yuav sau rau khaws cia

 Yog li, koj muaj peev xwm tswj tau tag nrho qhov yuav tsum tau sau thaum kawg

 ### Pab
 Siv `-h` / `--help` los qhia kev pab

 ## JSON batch commands
 Nrog rau `-j` / `--json` kev xaiv, koj tuaj yeem khiav ntau qhov sib koom ua ke `hokey` cov lus txib

 Los ntawm convention cov ntaub ntawv no yog hu ua `hokey.json` , tab sis koj tuaj yeem hu nws txhua yam koj xav tau

 Yog tias koj hla ib daim ntawv teev npe raws li qhov kev xaiv `-j` -j', `hokey` yuav nrhiav `hokey.json` hauv phau ntawv ntawd

 Cov ntaub ntawv JSON yuav tsum muaj ib yam khoom. Nyob rau hauv cov khoom ntawd, nws cov khoom npe yog tib yam li
 cov kev xaiv kab hais kom ua, ntxiv rau ib qho khoom ntxiv hu ua `hokey`

 Cov cuab yeej `hokey` yog ib qho array ntawm cov lus txib kom khiav. Cov khoom uas tau tshaj tawm hauv cov lus txib no yuav
 override tej duplicate declarations nyob rau hauv cov khoom txheej.

 Nyob rau hauv txhua yam khoom hauv `hokey` array, koj yuav tsum qhia meej `name` lub npe', thiab cov ntaub ntawv tawm tswv yim thiab tso tawm

 Nov yog ib qho piv txwv ntawm `hokey.json`

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

 ### Ntau cov ntaub ntawv nkag
 Hla ib qho array ntawm cov ntaub ntawv paths li `infiles` es tsis txhob ntawm ib txoj kev `infile` , xws li hauv qhov piv txwv no:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Index
 Thaum txhais tau ntau hom lus, `hokey` tuaj yeem tsim cov ntaub ntawv ntsuas uas teev tag nrho cov kev txhais lus ua
 thiab muab txuas rau lawv

 * Thaum tsim cov indexes, koj muaj peev xwm tsuas muaj ib tug input qhov chaw *

 Dhau qhov kev xaiv `-I` / `--index` , tus nqi yog qhov twg cov ntaub ntawv index yuav raug tsim, uas tuaj yeem yog cov ntaub ntawv
 los yog ib daim ntawv teev npe. Yog tias nws yog ib daim ntawv teev npe, lub npe filename yuav raug siv, raws li tus qauv (saib hauv qab)

 Siv `-A` / `--index-template` los txiav txim siab seb qhov ntsuas qhov ntsuas tau ua li cas. Koj tuaj yeem qhia 'html',
 'markdown', 'text', lossis txoj hauv kev rau koj tus kheej [HandlebarsJS](https://handlebarsjs.com/) template

 Yog hais tias koj qhia koj tus kheej template, koj yuav tsum tau qhia ib cov ntaub ntawv (tsis yog ib tug directory) rau cov `-I` / `--index`
 kev xaiv

 ## Txaus siab rau lub sijhawm txhais lus!

</pre>
