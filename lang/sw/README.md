Hokeylization
 ==============
 Kwa nini siwezi kuendesha programu au tovuti yangu yote kupitia Google Tafsiri na kupata tafsiri ya kimsingi katika lugha nyingine?

 ***Sasa, unaweza!***

 Jina `hokeylization` ni portmanteau, ikimaanisha 'ujanibishaji wa hokey'

 Ni hokey kwa kiasi fulani kwa sababu ni rahisi sana: hutuma masharti kwa Google Tafsiri

 Na ni rahisi, lakini pia nguvu sana. Ina msaada maalum kwa hati za HTML,
 [HandlebarsJS](https://handlebarsjs.com/) violezo,
 na [Markdown](https://daringfireball.net/projects/markdown) faili.

 Unaweza kutafsiri:
 * Kitu cha JavaScript kilicho na ujumbe
 * idadi yoyote ya faili au saraka, kila wakati hupitia saraka kwa kujirudia

 # Soma hii kwa lugha nyingine
 Hati hii ya README.md imetafsiriwa, kwa kutumia zana ya hokeylization yenyewe, kuwa
 **[kila lugha inayotumika na Google Tafsiri](https://cloud.google.com/translate/docs/languages)!**

 Nina hakika sio kamili, lakini natumai ni bora kuliko chochote!

 [🇸🇦 Kiarabu](../ar/README.md)
 [🇧🇩 Kibengali](../bn/README.md)
 [🇩🇪 Kijerumani](../de/README.md)
 [🇺🇸 Kiingereza](../sw/README.md)
 [🇪🇸 Kihispania](../es/README.md)
 [🇫🇷 Kifaransa](../fr/README.md)
 [🇹🇩 Kihausa](../ha/README.md)
 [🇮🇳 Kihindi](../hi/README.md)
 [🇮🇩 Kiindonesia](../id/README.md)
 [🇮🇹 Kiitaliano](../it/README.md)
 [🇯🇵 Kijapani](../ja/README.md)
 [🇰🇷 Kikorea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Kipolandi](../pl/README.md)
 [🇧🇷 Kireno](../pt/README.md)
 [🇷🇺 Kirusi](../ru/README.md)
 [🇰🇪 Kiswahili](../sw/README.md)
 [🇵🇭 Kitagalogi](../tl/README.md)
 [🇹🇷 Kituruki](../tr/README.md)
 [🇵🇰 Kiurdu](../ur/README.md)
 [🇻🇳 Kivietinamu](../vi/README.md)
 [🇨🇳 Kichina](../zh/README.md)


 **[📚 ... Lugha Zote ...](../README.md)**
 ----

 ### Je, kuna tatizo katika tafsiri hii ya README?
 Tafsiri hii mahususi ya [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 inaweza kuwa na dosari -- *marekebisho yanakaribishwa sana!* Tafadhali tuma [ombi la kuvuta kwenye GitHub](https://github.com/cobbzilla/yuebing/pulls),
 au ikiwa huna raha kufanya hivyo, [fungua toleo](https://github.com/cobbzilla/yuebing/issues)

 Unapounda toleo jipya la GitHub kuhusu tafsiri, tafadhali fanya:
 * jumuisha URL ya ukurasa (nakili/bandika kutoka kwa upau wa anwani ya kivinjari)
 * jumuisha maandishi kamili ambayo sio sahihi (nakili/bandika kutoka kwa kivinjari)
 * tafadhali eleza kilicho kibaya -- je tafsiri si sahihi? umbizo limevunjika kwa namna fulani?
 * tafadhali toa pendekezo la tafsiri bora zaidi, au jinsi maandishi yanapaswa kupangwa vizuri
 * **Asante!**

 # Yaliyomo
 * [Chanzo](#Chanzo)
 * [Msaada na Ufadhili](#Msaada-na-Ufadhili)
 * [Usakinishaji](#Usakinishaji)
 * [Weka](#Weka)
 * [Kutafsiri faili ya nyenzo ya mfuatano wa JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Kutafsiri saraka ya faili za maandishi](#Kutafsiri-saraka-ya-faili-za-maandishi)
 * [Chaguo zingine](#Chaguzi-Nyingine)
 * [Amri za kundi la JSON](#JSON-bechi-amri)

 ## Chanzo
 * [hokeylization kwenye GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization kwenye npm](https://www.npmjs.com/package/hokeylization)

 ## Msaada na Ufadhili
 Ninajaribu kuwa mtaalamu wa kuunda programu huria. Nimekuwa nikifanya kazi ndani
 tasnia ya programu kwa miaka mingi, nimeanzisha kampuni zilizofanikiwa na kuziuza kwa kampuni za umma.
 Hivi majuzi nilipoteza kazi yangu, na kwa kweli sina kazi nyingine yoyote iliyopangwa

 Kwa hivyo nitajaribu kuandika programu muhimu na kuona ikiwa hiyo inafanya kazi

 Ningeshukuru kwa dhati hata mchango mdogo zaidi [wa kila mwezi kupitia Patreon](https://www.patreon.com/cobbzilla)

 ## Ufungaji
 Ili kutumia zana ya mstari wa amri, sakinisha kwa kutumia `npm` au `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Ili kutumia kama maktaba, sakinisha toleo la `lite` , ambalo ni dogo zaidi:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Kisha angalia msaada kwa amri ya `hokey` :

    hokey --help
    hokey -h

 Je, ungependa kuona matokeo katika lugha yako au lugha nyingine?

 `hokey` hujaribu kugundua lugha kiotomatiki kutoka kwa vigeu vya mazingira vya ganda lako

 Unaweza kulazimisha lugha kwa kuweka `LC_ALL` wa mazingira:

    LC_ALL=it hokey --help

 Kumbuka kwamba ikiwa umesakinisha `hokeylization-lite` , msaada wa amri unapatikana kwa Kiingereza pekee

 ## Weka
 Weka mabadiliko ya mazingira ya `GOOGLE_TRANSLATE_PROJECT_ID` ili kutambua mradi wako wa Tafsiri ya Google

 Weka mabadiliko ya mazingira ya `GOOGLE_APPLICATION_CREDENTIALS` kuwa kitambulisho cha JSON ulichopakua
 baada ya kujua jinsi uthibitishaji unavyofanya kazi kwenye wingu la Google (inaweza kufurahisha)

 Ikiwa unatumia msimbo wa chanzo, unaweza pia kuweka hizi katika faili `.env` katika chanzo
 saraka zitapakiwa wakati wa utekelezaji kupitia [dotenv](https://www.npmjs.com/package/dotenv)

 ## Kutafsiri faili ya nyenzo ya mfuatano wa JavaScript
 Jedwali lako la mfuatano **lazima** liwe katika faili ya JavaScript katika mojawapo ya aina hizi mbili:

 Usafirishaji wa ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Usafirishaji wa CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ikiwa faili hii iliitwa `myfile.en.js` , unaweza kuitafsiri kwa Kihispania na Kijerumani kwa:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` iliyo hapo juu ni maalum -- ni neno lililohifadhiwa katika zana hii!

 `LANG` inabadilishwa na msimbo wa lugha kwa faili za towe

 Kwa hivyo amri hapo juu huunda faili:

    myfile.es.js
    myfile.de.js

 Chaguo la `-l` / `--languages` ni orodha iliyotenganishwa kwa koma ya misimbo ya lugha ya ISO.
 [inatumika na Google Tafsiri](https://cloud.google.com/translate/docs/languages)

 Ikiwa faili ya pato tayari ipo, itachunguzwa ili kubaini ni funguo zipi tayari zipo.
 Vifunguo vilivyopo havitatafsiriwa. Tafsiri za vitufe vinavyokosekana zitatolewa na kuongezwa
 hadi mwisho wa kitu cha JS. Faili nzima huandikwa upya kila wakati.

 Ili kulazimisha kutafsiri upya vitufe vyote, tumia chaguo la `-f` / `--force`

 ## Kutafsiri saraka ya faili za maandishi
 Unaweza pia kutafsiri saraka ya faili. hokeylization itatembelea kila mara
 faili kwenye saraka na uendeshe yaliyomo kupitia Google Tafsiri, na uhifadhi matokeo
 kwa faili iliyopewa jina sawa katika mti tofauti wa saraka

 Wakati lengo la tafsiri yako ni saraka, hali hii huwashwa

 Chaguo la `-o` / `--outfile` saraka ya pato

 **ONYO KUBWA**: Unapotafsiri saraka, **USI** bainisha saraka ya towe
 hiyo iko ndani ya saraka yako ya kuingiza! Ukifanya hivi, utakuwa:
 * kushawishi kujirudia usio na mwisho
 * endesha bili yako ya Google
 * jaza diski yako
 * kuwa na furaha kidogo

 Hapa kuna mfano wa kile *sichopaswa kufanya*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Hii inapotekelezwa, faili zilizotafsiriwa huandikwa kwa `templates/es` , na hivyo kuwa mpya
 faili za chanzo za kutafsiri, kwa kuwa ziko chini ya `templates/` -- mchakato huu unaendelea
 milele, usifanye hivyo!

 #### Matumizi sahihi
 Sawa, tuseme una violezo vya barua pepe kwenye saraka:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Ili kutafsiri haya yote kwa Kihispania na Kijerumani, endesha:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Katika yaliyo hapo juu, `LANG` ni neno lililohifadhiwa na nafasi yake itachukuliwa na msimbo wa lugha wa ISO

 Ni nini hufanyika wakati hapo juu inaendesha:
 * Saraka za `violezo/barua `templates/email/es` na `templates/email/de` (ikiwa hazipo)
 * Kila faili katika `templates/email/en` kwa Kihispania na Kijerumani
 * Faili zilizopo za towe hazitafanywa upya isipokuwa utumie `-f` / `--force`
 * Utaishia na muundo wa saraka sawa na faili ndani ya `es` na `de` kama unavyo chini `en`

 ## Chaguzi zingine

 ### Mbio kavu
 Pitia `-n` / `--dry-run` ili kuonyesha kile ambacho kingefanywa, lakini usipige simu zozote za API au uandike faili zozote.

 ### Nguvu
 Pitia `-f` / `--force` ili kuzalisha upya tafsiri kila wakati, hata kama tayari zipo

 ### Mechi
 Pitia `-m` / `--match` ili kupunguza faili zilizochakatwa wakati wa kuendesha katika hali ya saraka

 Huenda usitake kila wakati kutafsiri *kila* faili katika saraka yako ya chanzo hadi saraka unayolenga

 Thamani ya chaguo la `-m` / `--match` ni regex (tahadhari kanuni za kunukuu ganda!) inayobainisha.
 faili zipi zinapaswa kutafsiriwa

 Ukiwa na shaka, unaweza kuchanganya chaguo hili na `-n` / `--dry-run` ili kuona ni faili zipi zitatafsiriwa.

 ### Haijumuishi
 Wakati mwingine `-m` yako inalingana na faili nyingi sana. Tumia chaguo la `-e` / `--excludes` ili kutenga kwa uwazi
 faili ambazo vinginevyo zingelingana

 Unaweza kuorodhesha regeksi nyingi, zikitenganishwa na nafasi

 Matumizi ya kawaida yatakuwa: `--excludes node_modules dist \.git build tmp`

 ### Vishikizo
 Mifuatano ya kutafsiri inaweza kuwa na violezo `{{ handlebars }}` , iwe na viunga viwili au vitatu vilivyojipinda.

 Huenda *HUTAKI* kutaka mambo yaliyo ndani ya violezo hivyo yatafsiriwe

 Pitisha bendera ya `-H` / `--handlebars` , na chochote kilicho ndani ya `{{ ... }}` hakitatafsiriwa

 ### Alama
 Markdown si maandishi wala html, kwa hivyo Google Tafsiri ina matatizo nayo

 Alama ya `-M` / `--markdown` huwezesha utunzaji maalum wa faili za alama

 Na faili za alama, ikiwa hautumii bendera ya `-M` , labda utapata shida hizi:
 * Viungo vilivyovunjika. Katika tafsiri, herufi ya nafasi inaonekana baada ya maelezo ya kiungo cha alama kuisha (na `]` ) lakini
 kabla ya kiungo chake kinacholengwa kuanza (na `(` ). Hii husababisha alama chini kutoa kimakosa, na kiungo
 imevunjwa wakati wa kutazama hati.
 * Vizuizi vya msimbo hutafsiriwa. Tafsiri ya Google haijui ni alama gani inazingatia msimbo na nini haijui
 * Nafasi zisizo sahihi za vizuizi vya msimbo vilivyowekwa ndani. Nafasi ni ngumu kuhifadhi katika tafsiri
 * Mambo ya ndani ya `backticks` , wakati karibu kila mara unataka yawe maadili halisi

 Wakati bendera ya `-M` / `--markdown` imewashwa:
 * Mchoro `](` utafupishwa hadi `](` hivyo kurekebisha viungo vilivyovunjika
 * Kanga ya "hakuna kutafsiri" itawekwa karibu na vizuizi vya msimbo vilivyowekwa ndani, kuhifadhi ujongezaji ufaao na kuhakikisha kuwa hazitafsiriwi.
 * Karatasi ya "hakuna tafsiri" itawekwa karibu na maandishi ndani ya `backticks` ili kuhakikisha kuwa hazitafsiriwi

 ### Mchakato-kama
 Kwa kawaida kila kitu kinachakatwa kama maandishi wazi

 Ikiwa maudhui yako ni HTML, yataharibika isipokuwa ukipitisha chaguo la `-p html` / `--process-as html`

 ### Kichujio
 Kwa adventurous: wakati wa kusindika faili kwenye saraka, unaweza kupitisha chaguo la `-F` / `--filter`
 kuchuja matokeo kabla ya kuandikwa kwa mfumo wa faili

 Thamani ya chaguo hili lazima iwe njia ya faili ya JS inayohamisha kipengele cha kukokotoa kiitwacho `filter`

 `filter` za kukokotoa za `kichujio` lazima `async` kwa sababu `await` itaitwa juu yake

 Kabla ya faili kuandikwa kwa diski, yaliyomo yote ya faili yatapitishwa kwa kazi ya `filter` kama mfuatano

 Thamani ya kurejesha kutoka kwa chaguo za kukokotoa `filter` ndiyo itaandikwa kwa hifadhi

 Kwa hivyo, una udhibiti kamili juu ya kile kitakachoandikwa

 ### Msaada
 Tumia `-h` / `--help` ili kuonyesha usaidizi

 ## Amri za kundi la JSON
 Ukiwa na chaguo la `-j` / `--json` , unaweza kuendesha amri nyingi za `hokey`

 Kwa kawaida faili hii inaitwa `hokey.json` , lakini unaweza kuipa jina lolote utakalo

 Ukipitisha saraka kama chaguo ` `-j` , `hokey` `hokey.json` kwenye saraka hiyo.

 Faili ya JSON inapaswa kuwa na kitu kimoja. Ndani ya kitu hicho, majina ya mali yake ni sawa na
 chaguzi za safu ya amri, pamoja na mali moja ya ziada inayoitwa `hokey`

 Sifa ya `hokey` ni safu ya amri za kutekeleza. Sifa zilizotangazwa ndani ya amri hizi zitafanya
 kubatilisha marudio ya matamko yoyote katika kitu cha nje.

 Ndani ya kila kitu kwenye safu ya `hokey` , unapaswa kutaja `name` , na faili za pembejeo na towe.

 Huu hapa ni mfano wa `hokey.json`

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

 ### Faili nyingi za ingizo
 Pitisha safu ya njia za faili kama `infiles` badala ya njia moja `infile` , kama katika mfano huu:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Fahirisi
 Wakati wa kutafsiri kwa lugha nyingi, `hokey` inaweza kuunda faili ya faharasa inayoorodhesha tafsiri zote zilizofanywa
 na hutoa viungo kwao

 *Unapotengeneza faharasa, unaweza kuwa na chanzo kimoja tu cha ingizo*

 Pitisha chaguo la `-I` / `--index` , thamani ni pale faili ya faharisi itatolewa, ambayo inaweza kuwa faili.
 au saraka. Ikiwa ni saraka, jina la faili chaguo-msingi litatumika, kulingana na kiolezo (tazama hapa chini)

 Tumia `-A` / `--index-template` ili kubaini jinsi matokeo ya faharasa yameumbizwa. Unaweza kutaja 'html',
 'markdown', 'text', au njia ya faili kwa kiolezo chako [HandlebarsJS](https://handlebarsjs.com/)

 Ukibainisha kiolezo chako mwenyewe, lazima pia ubainishe faili (sio saraka) ya `-I` / `--index`
 chaguo

 ## Furahia kutafsiri lugha!

</pre>
