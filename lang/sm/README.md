Hokeylization
 =============
 Aisea e le mafai ai ona ou fa'agasolo uma la'u app po'o le saite e ala i le Google Translate ma maua se fa'aliliuga autu i se isi gagana?

 ***Ia, e te mafaia!***

 O le igoa `hokeylization` o se portmanteau, o lona uiga 'hokey localization'

 E fai lava si hokey aua e matua faigofie lava: e auina atu manoa ile Google Translate

 Ma e faigofie, ae matua mamana foi. E iai le lagolago fa'apitoa mo pepa HTML,
 [HandlebarsJS](https://handlebarsjs.com/) mamanu,
 ma [Markdown](https://daringfireball.net/projects/markdown) faila.

 E mafai ona e fa'aliliu:
 * o se mea JavaScript o loʻo iai feʻau
 * so'o se numera o faila po'o fa'atonuga, fa'asolosolo fa'asolosolo fa'atonuga

 # Faitau lenei i se isi gagana
 O lenei README.md pepa ua faaliliuina, faʻaaoga le meafaigaluega hokeylization lava ia, i totonu
 **[gagana uma e lagolagoina e Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ou te mautinoa e le atoatoa, ae ou te faʻamoemoe e sili atu nai lo le leai!

 [🇸🇦 Alapi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Siamani](../de/README.md)
 [🇺🇸 Igilisi](../en/README.md)
 [🇪🇸 Sipaniolo](../es/README.md)
 [🇫🇷 Farani](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Initonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Iapani](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polani](../pl/README.md)
 [🇧🇷 Potukale](../pt/README.md)
 [🇷🇺 Rusia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Saina](../zh/README.md)


 **[📚 ... Gagana Uma ...](../README.md)**
 ----

 ### E iai se fa'afitauli i lenei fa'aliliuga o le README?
 Lenei fa'aliliuga fa'apitoa o le ulua'i [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 atonu e sese -- *fa'asa'oga e matua talia lava!* Fa'amolemole lafo mai se [talosaga toso ile GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 pe afai e te le fiafia e fai lena mea, [tatala se mataupu](https://github.com/cobbzilla/hokeylization/issues)

 A e fatuina se lomiga fou GitHub e uiga i se faaliliuga, faamolemole fai:
 * fa'aaofia ai le itulau URL (kopi/pa'i mai le tuatusi tuatusi pa)
 * fa'aaofia ai le fa'amatalaga sa'o e sese (kopi/pa'i mai le su'esu'ega)
 * fa'amolemole fa'amatala le mea o lo'o fa'aletonu -- e le sa'o le fa'aliliuga? ua malepe le faatulagaga?
 * ofo mai ma le agalelei se fautuaga o se faaliliuga e sili atu, po o le auala e tatau ona faatulaga lelei ai le tusitusiga
 * **Faafetai!**

 # I totonu
 * [Source](#Source)
 * [Lagolago ma le Faatupeina](#Support-and-Funding)
 * [Fa'apipi'i](#Fa'apipi'i)
 * [Setup](#Setup)
 * [Faaliliuina o se faila punaoa string JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Faaliliuina o se lisi o faila faila](#Translating-a-directory-of-text-files)
 * [O isi filifiliga](#Other-options)
 * [JSON batch commands](#JSON-batch-commands)

 ## Punavai
 * [hokeylization i le GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization i le npm](https://www.npmjs.com/package/hokeylization)

 ## Lagolago ma Faatupeina
 O lo'o ou taumafai e avea a'u ma se tagata fa'apolofesa fa'apolofesa fa'apolofesa matala. Sa ou galue i totonu
 le pisinisi faakomepiuta mo le tele o tausaga, ua ou amataina kamupani manuia ma faatau atu i kamupani lautele.
 Talu ai nei na ou leiloa ai laʻu galuega, ma e leai lava se isi galuega o loʻo faʻatulagaina

 O lea o le a ou taumafai e tusi le polokalama fesoasoani ma vaai pe aoga

 Ou te matua talisapaia e tusa lava pe itiiti [saomea faalemasina e ala i Patreon](https://www.patreon.com/cobbzilla)

 ## Fa'apipi'i
 Mo le faʻaogaina o le meafaigaluega laina, faʻapipiʻi le faʻaaogaina `npm` poʻo `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 E fa'aoga e fai ma faletusi, fa'apipi'i le `lite` version, lea e la'ititi tele:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Ona vaʻai lea i le fesoasoani mo le `hokey` poloaiga:

    hokey --help
    hokey -h

 E te mana'o e va'ai i fa'aaliga i lau gagana po'o se isi gagana?

 `hokey` e taumafai e iloa otometi le gagana mai suiga o le siosiomaga o lau atigi

 E mafai ona e fa'amalosia se gagana e ala i le setiina o le suiga ole siosiomaga `LC_ALL` :

    LC_ALL=it hokey --help

 Manatua afai na e faʻapipiʻi `hokeylization-lite` , fesoasoani fesoasoani e naʻo le Igilisi e maua

 ## Seti
 Seti le suiga ole siosiomaga `GOOGLE_TRANSLATE_PROJECT_ID` e iloa ai lau poloketi Google Translate

 Seti le suiga ole siosiomaga `GOOGLE_APPLICATION_CREDENTIALS` JSON na e siiina mai.
 ina ua uma ona iloa pe faʻafefea ona galue faʻamaoni i luga ole Google ao (e mafai ona malie)

 Afai o lo'o e tamo'e mai le source code, e mafai fo'i ona e tu'u i totonu o se faila `.env` i le puna
 directory o le a utaina i latou i le taimi taʻavale e ala i [dotenv](https://www.npmjs.com/package/dotenv)

 ## Fa'aliliuina o se faila punaoa string JavaScript
 O lau laulau manoa **e tatau ona i ai i se faila JavaScript i se tasi o nei faiga e lua:

 ES6 auina atu i fafo:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS auina atu i fafo

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Afai na faaigoa lenei faila `myfile.en.js` , e mafai ona e faaliliu i le faaSipaniolo ma le Siamani ma:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 O le `LANG` i luga e fa'apitoa -- o se upu fa'apolopolo i lenei meafaigaluega!

 O le `LANG` ua suia i le gagana code mo faila faila

 O lea o le poloaiga i luga e fatuina ai faila:

    myfile.es.js
    myfile.de.js

 O le `-l` / `--languages` o se lisi e vaelua koma o tulafono ole gagana ISO
 [lagolagoina e le Google Translate](https://cloud.google.com/translate/docs/languages)

 Afai o lo'o iai le faila faila, o le a su'esu'eina e iloa ai po'o fea ki o lo'o iai.
 O ki o iai nei o le a le fa'aliliuina. O fa'aliliuga mo ki o lo'o misi o le a faia ma fa'aopoopo
 i le pito o le mea JS. O le faila atoa e toe tusia i taimi uma.

 Ina ia fa'amalosia le toe fa'aliliuina o ki uma, fa'aoga le `-f` / `--force`

 ## Faaliliuina o se lisi o faila faila
 E mafai foi ona e faaliliu se lisi o faila. hokeylization o le a recursively asiasi uma
 faila i totonu o le fa'atonuga ma fa'agasolo mea o lo'o i totonu e ala i le Google Translate, ma fa'asaoina le mea e fai
 i se faila e tutusa lona igoa i totonu o se la'au fa'atonu

 Afai o le sini o lau fa'aliliuga ose fa'atonuga, e fa'agaoioi lea faiga

 Ole `-o` / `--outfile` o lo'o fa'amaoti mai ai le lisi o galuega

 ** LAPATA'IGA TELE**: A'o fa'aliliu tusi tusi, **AUA LE** fa'ama'oti mai se lisi o mea e fai
 o lo'o i totonu o lau lisi fa'aoga! Afai e te faia lenei mea, o le ae:
 * faʻaosoina le toe faʻafoʻisia e le gata
 * fa'aola lau pili Google
 * faatumu lau tisiki
 * faaitiitia le fiafia

 O se faʻataʻitaʻiga lea o le mea * aua le faia *:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 A fa'agasolo lea, o faila fa'aliliu e tusi i `templates/es` , ma fa'afou
 puna'oa faila e fa'aliliu, talu ai o lo'o i lalo o `templates/` -- o lo'o fa'aauau pea lenei faiga
 faavavau, aua le faia!

 #### Fa'aoga sa'o
 Ua lelei, fa'apea o lo'o iai ni au fa'ata'ita'iga imeli i totonu o se lisi:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Ina ia faaliliu uma nei mea i le Sipaniolo ma le Siamani, tamoe:

    hokey -l es,de -o templates/email/LANG templates/email/en

 I luga, `LANG` o se upu fa'aagaga ma o le a suia i le ISO gagana code

 O le a le mea e tupu pe a faʻaogaina le mea o loʻo i luga:
 * O le `templates/email/es` ' ma `templates/email/de` directories o le a faia (pe afai e le o iai)
 * O faila uma i le `templates/email/en` o le a faaliliuina i le gagana Sipaniolo ma Siamani
 * O faila o lo'o i ai nei o le a le toe fa'afouina se'i vagana ua e fa'aogaina `-f` / `--force`
 * O le a e fa'ai'u i se fa'asologa o fa'atonuga tutusa ma faila i totonu o `es` ma `de` pei o oe i lalo ole `en`

 ## Isi filifiliga

 ### Tafe mago
 Pasia `-n` / `--dry-run` e fa'aalia ai le mea e fai, ae aua le faia ni telefoni API pe tusi ni faila.

 ### Malosi
 Tu'u `-f` / `--force` e toe fa'afouina fa'aliliuga i taimi uma, tusa lava pe ua iai

 ### Faafetaui
 Pasi `-m` / `--match` e faʻatapulaʻa faila e faʻagaoioia pe a taʻavale i le directory-mode

 Atonu e te le mana'o i taimi uma e fa'aliliu *fai* uma faila i lau fa'asinomaga fa'apogai i lau lisi fa'atatau

 O le tau o le `-m` / `--match` filifiliga o se regex (faʻaeteete i tulafono o upusii atigi!) e faʻamaoti mai.
 o fea faila e tatau ona faaliliuina

 A e masalosalo, e mafai ona e tuʻufaʻatasia lenei filifiliga i le `-n` / `--dry-run` e vaʻai poʻo fea faila e faʻaliliu

 ### E le aofia ai
 O nisi taimi e fetaui lau `-m` i le tele o faila. Fa'aaoga le `-e` / `--excludes` filifiliga e fa'ailoa manino ai
 faila semanu e fetaui

 E mafai ona e lisiina le tele o regex, tuueseese i avanoa

 Ole fa'aoga masani ole: `--excludes node_modules dist \.git build tmp`

 ### Fa'amau
 O manoa e fa'aliliu e ono iai ni fa'ata'ita'iga `{{ handlebars }}` , a le o le lua pe tolu fa'aumiumi-u'u.

 Atonu e te *LE'I* mana'o e fa'aliliu mea o lo'o i totonu o na fa'ata'ita'iga

 Pasia le `-H` / `--handlebars` , ma soo se mea i totonu o `{{ ... }}` o le a le faaliliuina.

 ### Fa'ailoga
 Markdown e le o se tusitusiga poʻo se html, o lea e iai ni faʻafitauli i le Google Translate

 O `-M` / `--markdown` e mafai ai ona fa'atautaia fa'apitoa mo faila fa'ailoga

 Faatasi ai ma faila faʻailoga, afai e te le faʻaogaina le `-M` fuʻa, atonu o le ae mauaina nei faʻafitauli:
 * So'oga motusia. I le fa'aliliuga, e aliali mai se uiga avanoa pe a uma le fa'amatalaga o so'otaga fa'ailoga (i le `]` ) ae
 a'o le'i amataina lona so'oga fa'atatau (i le `(` ). E mafua ai ona sese le fa'ailoga, ma le so'oga.
 ua malepe pe a matamata i le pepa.
 * Fa'aliliuga poloka poloka. Google fa'aliliu e le iloa po'o le a le fa'ailoga e manatu i le code ma le mea e le iloa
 * Le sa'o le avanoa mo poloka fa'ailoga fa'amau. E faigata ona fa'asaoina le avanoa ile fa'aliliuga
 * O mea i totonu o le `backticks` o le a fa'aliliuina, pe a e mana'o i taimi uma ia avea ma mea taua

 A mafai le fu'a `-M` / `--markdown` :
 * O le mamanu `](` o le a fa'apu'upu'u i le `](` fa'apea ona toe fa'aleleia so'otaga fa'ailoga ua motusia.
 * O se afifi "leai se fa'aliliu" o le a tu'u fa'ata'amilo i poloka fa'ailoga, fa'asao sa'o le fa'ailoga ma fa'amautinoa e le'o fa'aliliuina.
 * O se afifi "leai se faaliliu" o le a tuu i autafa o tusitusiga i totonu o `backticks` ina ia mautinoa e le o faaliliuina.

 ### Fa'agasologa-pei
 E masani lava e fa'agasolo mea uma e pei o ni tusitusiga manino

 Afai o lau mataupu o le HTML, o le a faʻaleagaina seivagana ua e pasia le `-p html` / `--process-as html` filifiliga

 ### Filifili
 Mo tagata fa'atauva'a: pe a fa'agasolo faila i totonu o se lisi, e mafai ona e pasi le `-F` / `--filter`
 e fa'amama le gaioiga a'o le'i tusia i le faila faila

 O le tau o lenei filifiliga e tatau ona avea ma ala i se faila JS e auina atu i fafo se galuega e igoa `filter`

 O le galuega `filter` e tatau ona `async` aua `await` ' o le a valaauina i ai

 A'o le'i tusia faila i le tisiki, o le a tu'uina atu uma mea o lo'o i totonu o faila i le `filter` galuega o se manoa

 O le tau fa'afo'i mai le galuega `filter` o le mea tonu lea o le a tusia i le teuina

 O lea la, ua ia te oe le pule atoa i mea o le a mulimuli ane tusia

 ### Fesoasoani
 Fa'aaoga `-h` / `--help` e fa'aali ai le fesoasoani

 ## Poloaiga a le JSON
 Faatasi ai ma le `-j` / `--json` filifiliga, e mafai ona e faʻatautaia le tele o faʻatonuga `hokey`

 E ala i le faʻasalalauga ua taʻua lenei faila `hokey.json` , ae e mafai ona e faʻaigoaina soʻo se mea e te manaʻo ai

 Afai e te pasia se lisi e fai ma filifiliga `-j` , `hokey` o le a su'e se `hokey.json` i lena lisi

 O le faila JSON e tatau ona iai se mea e tasi. I totonu o lena mea, o ona igoa meatotino e tutusa ma
 o filifiliga laina-fa'atonu, fa'atasi ai ma se meatotino fa'aopoopo e igoa `hokey`

 O le `hokey` meatotino o se fa'asologa o fa'atonuga e fa'atino. O meatotino o loʻo faʻaalia i totonu o nei poloaiga o le a
 soloia so'o se ta'utinoga fa'alua i le mea i fafo.

 I totonu o mea taʻitasi i le `hokey` array, e tatau ona e faʻamaoti se `name` , ma faila faila ma faila faila.

 Ole fa'ata'ita'iga lea ole `hokey.json`

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

 ### Fa'ailoga faila e tele
 Tu'u atu le tele o ala faila e pei o `infiles` nai lo le tasi ala `infile` , pei o lenei fa'ata'ita'iga:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Fa'asinomaga
 A fa'aliliu i le tele o gagana, `hokey` e mafai ona fai se faila fa'asino igoa e lisi uma ai fa'aliliuga na faia.
 ma maua ai sootaga ia i latou

 *Pe a fa'atupu fa'asino igoa, e mafai ona na'o le tasi le puna fa'aoga*

 Pasia le `-I` / `--index` filifiliga, o le tau o le mea lea o le a gaosia ai le faila faila, lea e mafai ona avea ma faila.
 po'o se fa'atonuga. Afai o se fa'atonuga, o le a fa'aogaina le igoa faila, fa'atatau i le fa'ata'ita'iga (silasila i lalo)

 Fa'aoga le `-A` / `--index-template` e iloa ai pe fa'afefea ona fa'atulaga le fa'ailoga. E mafai ona e faʻamaonia 'html',
 'markdown', 'text', po'o le ala faila i lau lava [HandlebarsJS](https://handlebarsjs.com/) template

 Afai e te faʻamaonia lau lava faʻataʻitaʻiga, e tatau foi ona e faʻamaoti se faila (e le o se faʻatonuga) mo le `-I` / `--index`
 filifiliga

 ## Ia maua se taimi fiafia e faaliliu gagana!

</pre>
