Hokeyylization
 ==========
 Sunan portmanteau ne, ma'ana 'kwantar da hokey'

 Hokey ne saboda yana da sauƙi: yana aika kirtani zuwa Google Translate

 Kuna iya fassara:
 * Abun JavaScript mai ɗauke da saƙonni
 * kundin adireshi na fayiloli, akai-akai

 # Karanta wannan a wani yare
 An fassara wannan takaddar README.md, ta amfani da kayan aikin hokeylization kanta, zuwa cikin
 **[kowane harshe yana da tallafin Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Na tabbata ba cikakke ba ne, amma ina fata ya fi komai kyau!

 [🇸🇦 Larabci](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jamusanci](../de/README.md)
 [🇺🇸 Turanci] (lang/ha/README.md)
 [🇪🇸 Mutanen Espanya](../es/README.md)
 [🇫🇷 Faransanci](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italiyanci](../it/README.md)
 [🇯🇵 Jafananci](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Yaren mutanen Poland](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Rashanci](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Baturke](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Sinanci](../zh/README.md)


 **[📚 ... Duk Harsuna ...](../README.md)**
 ----

 ### Akwai matsala da wannan fassarar README?
 Wannan fassarar ta asali ta asali [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 na iya zama aibi - * ana maraba da gyare-gyare!* Da fatan za a aika [buƙatun ja akan GitHub](https://github.com/cobbzilla/yuebing/pulls),
 ko kuma idan ba ku ji daɗin yin hakan ba, [buɗe batun](https://github.com/cobbzilla/yuebing/issues)

 Lokacin da kuka ƙirƙiri sabon batun GitHub game da fassarar, da fatan za a yi:
 * hada da URL na shafi (kwafi / manna daga mashaya adireshin mashigin)
 * hada da ainihin rubutun da ba daidai ba (kwafi / manna daga mai bincike)
 * da fatan za a ba da shawarar ingantacciyar fassarar
 * **Na gode!**

 # Abubuwan ciki
 * [Madogararsa](#Source)
 * [Tallafawa da Kuɗi](#Taimako-da-Kudade)
 * [Shigarwa](#Shigarwa)
 * [Saituna] (# Saita)
 * [Fassara fayil ɗin albarkatun kirtani na JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Fassara kundin fayilolin rubutu](#Translating-a-directory-of-text-files)
 * [Sauran zaɓuɓɓuka](#Sauran-zaɓuɓɓuka)

 ## Source
 * [hokeylization akan GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization akan npm](https://www.npmjs.com/package/hokeylization)

 ## Tallafi da Kudi
 Ina ƙoƙari in zama ƙwararren mai haɓaka tushen software. Na kasance ina aiki a ciki
 masana'antar software tsawon shekaru da yawa, na fara kamfanoni masu nasara kuma na sayar da su ga kamfanonin jama'a.
 Kwanan nan na rasa aiki, kuma ba ni da wani aiki a layi daya

 Don haka zan gwada rubuta software mai taimako don ganin ko hakan yana aiki

 Zan yi godiya da gaske har ma mafi ƙarancin [gudunmawar wata-wata ta hanyar Patreon](https://www.patreon.com/cobbzilla)

 ## Shigarwa
 Don amfani da kayan aikin layin umarni, shigar ta amfani da `npm` ko `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Don amfani azaman ɗakin karatu, shigar da sigar `lite` , wanda ya fi ƙanƙanta:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Sannan duba taimako don umarnin `hokey` :

    hokey --help
    hokey -h

 Kuna son ganin fitarwa a cikin yaren ku ko wani yare?

 `hokey` yana ƙoƙarin gano harshen ta atomatik daga masu canjin yanayin harsashin ku

 Kuna iya tilasta harshe ta saita canjin yanayi na `LC_ALL` :

    LC_ALL=it hokey --help

 Lura cewa idan kun shigar da `hokeylization-lite` , taimakon umarni yana samuwa ne kawai cikin Turanci

 ## Saita
 Saita canjin yanayi na `GOOGLE_TRANSLATE_PROJECT_ID` don gano aikin Fassara na Google

 Saita canjin muhallin `GOOGLE_APPLICATION_CREDENTIALS` zuwa abubuwan shaidar JSON da kuka zazzage
 bayan gano yadda tantancewar ke aiki akan girgijen Google (zai iya zama abin daɗi)

 Idan kuna gudana daga lambar tushe, kuna iya sanya waɗannan a cikin fayil `.env` a cikin tushen
 directory za a loda su a lokacin aiki ta [dotenv](https://www.npmjs.com/package/dotenv)

 ## Fassara fayil albarkatun kirtani JavaScript
 Teburin kirtani na ku **dole ne** ya kasance cikin fayil ɗin JavaScript a ɗayan waɗannan nau'ikan guda biyu:

 ES6 fitarwa:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS fitarwa

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Idan sunan wannan fayil ɗin `myfile.en.js` , zaku iya fassara shi zuwa Mutanen Espanya da Jamusanci tare da:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` a sama na musamman ne - kalma ce da aka tanada a cikin wannan kayan aikin!

 An maye gurbin `LANG` tare da lambar yare don fayilolin fitarwa

 Don haka umarnin da ke sama yana ƙirƙirar fayilolin:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` jerin waƙafi ne na lambobin yare na ISO.
 [Google Translate yana tallafawa](https://cloud.google.com/translate/docs/languages)

 Idan fayil ɗin fitarwa ya riga ya wanzu, za a bincika don sanin waɗanne maɓallan da suka riga sun wanzu.
 Ba za a fassara maɓallan da suka wanzu ba. Za a samar da fassarorin maɓallan da suka ɓace kuma a saka su
 har zuwa karshen abin JS. Ana sake rubuta duk fayil ɗin koyaushe.

 Don tilasta sake fassara duk maɓallan, yi amfani da `-f` / `--force`

 ## Fassara kundin adireshi na fayilolin rubutu
 Hakanan zaka iya fassara kundin adireshi na fayiloli. hokeylization zai ci gaba da ziyartar kowane
 fayil a cikin directory kuma gudanar da abinda ke ciki ta Google Translate, da kuma ajiye fitarwa
 zuwa fayil mai suna iri ɗaya a cikin bishiyar jagorar daban

 Lokacin da makasudin fassarar ku shine kundin adireshi, ana kunna wannan yanayin

 `-o` / `--outfile` ƙayyadad da tsarin fitarwa

 ** BABBAN GARGADI ***: Lokacin da ake fassara kundayen adireshi, **KADA *** ayyana jagorar fitarwa.
 wannan yana cikin kundin shigar da ku! Idan kun yi haka, za ku:
 * jawo maimaitawa mara iyaka
 * gudanar da lissafin Google
 * cika faifan ku
 * rage jin daɗi

 Ga misalin abin da *ba za a yi ba*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Lokacin da wannan ke gudana, fayilolin da aka fassara ana rubuta su zuwa `templates/es` , don haka su zama sababbi
 tushen fayilolin da za a fassara, tunda suna ƙarƙashin `templates/` -- wannan tsari yana ci gaba
 har abada, kada ku yi!

 #### Daidai amfani
 Ok, bari mu ce kuna da wasu samfuran imel a cikin kundin adireshi:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Don fassara duk waɗannan zuwa Mutanen Espanya da Jamusanci, gudu:

    hokey -l es,de -o templates/email/LANG templates/email/en

 A cikin sama, `LANG` ce da aka tanada kuma za a maye gurbinta da lambar yaren ISO

 Abin da ke faruwa idan abin da ke sama ya gudana:
 * Za a `templates/email/es` ' da `templates/email/de` kundayen adireshi (idan babu su)
 * Kowane fayil a cikin `templates/email/en` za a fassara shi zuwa Mutanen Espanya da Jamusanci
 * Fayilolin fitarwa da suka wanzu ba za a sabunta su ba sai kun yi amfani da `-f` / `--force`
 * Za ku ƙare da tsari iri ɗaya da fayiloli a cikin `es` ' da `de` kamar yadda kuke da shi a ƙarƙashin `en`

 ## Wasu zaɓuɓɓuka

 ### Dry run
 Wuce `-n` / `--dry-run` don nuna abin da za a yi, amma kar a yi kowane kiran API ko rubuta kowane fayil

 ### Karfi
 Wuce `-f` / `--force` don sabunta fassarori koyaushe, koda kuwa sun wanzu

 ### Daidaitawa
 Wuce `-m` / `--match` don iyakance fayilolin da aka sarrafa lokacin aiki a cikin yanayin shugabanci

 Wataƙila ba koyaushe kuna son fassara *kowane* fayil a cikin tushen tushen ku zuwa kundin adireshin ku ba

 Ƙimar zaɓi na `-m` / `--match` regex ne (a yi hankali da ƙa'idodin faɗar harsashi!)
 waɗanne fayiloli ya kamata a fassara

 Lokacin da ake shakka, zaku iya haɗa wannan zaɓi tare da `-n` / `--dry-run` don ganin waɗanne fayiloli za a fassara

 ### Banda
 Wani lokaci `-m` dace da fayiloli da yawa. Yi amfani da `-e` / `--excludes` da zaɓi don keɓe kai tsaye
 fayilolin da in ba haka ba da sun dace da su

 Kuna iya lissafin regexes da yawa, ware ta sarari

 Amfani na yau da kullun zai zama: `--excludes node_modules dist \.git build tmp`

 ### Hannun hannu
 Matsalolin da za a fassara na iya ƙunsar samfuri `{{ handlebars }}` , ko dai tare da takalmin gyaran kafa biyu ko uku.

 Wataƙila *KADA* kuna son a fassara abubuwan da ke cikin waɗannan samfuran

 Wuce `-H` / `--handlebars` , kuma duk wani abu da ke cikin `{{ ... }}` ba za a fassara shi ba

 ### Matsala
 Markdown ba rubutu bane ko html, don haka Google Translate yana da wasu matsaloli tare da shi

 `-M` / `--markdown` ba da damar sarrafa musammam don fayiloli masu alama

 Tare da fayilolin alama, idan ba ku yi amfani da tutar `-M` ba, ƙila za ku sami waɗannan matsalolin:
 * Abubuwan da aka karye. A cikin fassarar, yanayin sararin samaniya yana bayyana bayan bayanin hanyar haɗin gwiwa ya ƙare (tare da `]` ) amma
 kafin a fara hanyar haɗin yanar gizon sa (tare da `(` ) Wannan yana sa alamar ta yi kuskure, da kuma hanyar haɗin yanar gizon.
 ya karye lokacin kallon takardar.
 * An fassara tubalan lambobi. Google Translation bai san abin da alamar ke ɗaukar lamba da abin da baya sani ba
 * Ba daidai ba tazara don tubalan lamba. Tazara yana da wuyar adanawa a cikin fassarar
 * Abubuwan da ke cikin `backticks` za a fassara su, lokacin da kusan koyaushe kuna son su zama dabi'u na zahiri

 Lokacin da aka kunna tutar `-M` / `--markdown` :
 * Alamar `] (` za'a tattara ta zuwa `](` don haka gyara hanyoyin haɗin da aka karye
 * Za a sanya murfi na "babu fassarar" a kusa da ɓangarorin lambobi, adana ingantacciyar shigar da kuma tabbatar da cewa ba a fassara su ba.
 * Za a sanya murfi na "babu fassara" a kusa da rubutu a cikin `backticks` don tabbatar da cewa ba a fassara su ba

 ### Tsari-kamar
 Yawanci ana sarrafa komai azaman rubutu bayyananne

 Idan abun cikin ku HTML ne, zai lalace sai dai idan kun wuce `-p html` / `--process-as html`

 ### Tace
 Ga masu sha'awar: lokacin sarrafa fayiloli a cikin kundin adireshi, zaku iya wuce `-F` / `--filter`
 don tace fitarwa kafin a rubuta shi zuwa tsarin fayil

 Dole ne ƙimar wannan zaɓi ta zama hanya zuwa fayil ɗin JS wanda ke fitar da aiki mai suna `filter`

 Aikin `filter` dole ne ya zama `async` saboda `await` za a kira shi

 Kafin a rubuta fayiloli zuwa faifai, za a wuce duk abin da ke cikin fayil ɗin zuwa aikin `filter` azaman kirtani

 Ƙimar dawowa daga aikin `filter` shine ainihin abin da za a rubuta zuwa wurin ajiya

 Don haka, kuna da cikakken iko akan abin da a ƙarshe za a rubuta

 ### Taimako
 Yi amfani `-h` / `--help` don nuna taimako

 ## Fassarar Farin Ciki!

</pre>
