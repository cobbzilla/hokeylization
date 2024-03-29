Hokeylization
 ==============
 Kutheni ndingakwazi ukusebenzisa yonke i-app yam okanye isayithi ngeToliki kaGoogle kwaye ndifumane inguqulelo esisiseko ngolunye ulwimi?

 ***Ngoku, unako!***

 Igama elithi `hokeylization` yi portmanteau, elithetha 'hokey localization'

 Yihokey noko kuba ilula kakhulu: ithumela imitya kwiToliki kaGoogle

 Kwaye ilula, ukanti inamandla kakhulu. Inenkxaso ekhethekileyo kumaxwebhu eHTML,
 [HandlebarsJS](https://handlebarsjs.com/) iitemplates,
 kunye [neMarkdown](https://daringfireball.net/projects/markdown) iifayile.

 Ungaguqulela:
 * into yeJavaScript equlethe imiyalezo
 * Naliphi na inani leefayile okanye abalawuli, abasoloko benqumla abalawuli ngokuphindaphindiweyo

 # Funda oku ngolunye ulwimi
 Olu xwebhu README.md luguqulelwe, kusetyenziswa isixhobo se-hokeylization ngokwaso, kwi
 **[lonke ulwimi luxhaswa yiToliki kaGoogle](https://cloud.google.com/translate/docs/languages)!**

 Ndiqinisekile ukuba ayifezekanga, kodwa ndiyathemba ukuba ingcono kunanto!

 [🇸🇦 isiArabhu](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 isiJamani](../de/README.md)
 [🇺🇸 IsiNgesi](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 isiFrentshi](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 isi-Indonesian](../id/README.md)
 [🇮🇹 IsiTaliyane](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 isiKorea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 IsiPhuthukezi](../pt/README.md)
 [🇷🇺 IsiRashiya](../ru/README.md)
 [🇰🇪 IsiSwahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 IsiTurkey](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 isiTshayina](../zh/README.md)


 **[📚 ... Zonke Iilwimi ...](../README.md)**
 ----

 ### Ngaba kukho ingxaki ngoluguqulelo lwe-FUNDA?
 Le nguqulelo yoqobo [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 isenokuba neziphene -- *izilungiso zamkelekile kakhulu!* Nceda uthumele [isicelo sokutsalwa kwi-GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 okanye ukuba awukhululekanga ukwenza loo nto, [vula umcimbi](https://github.com/cobbzilla/hokeylization/issues)

 Xa usenza umba omtsha weGitHub malunga nenguqulelo, nceda wenze:
 * bandakanya i-URL yephepha (ikopi/uncamathisele kwibar yedilesi yomkhangeli zincwadi)
 * bandakanya isicatshulwa kanye esingalunganga (khuphela/uncamathisele kwisikhangeli)
 * Nceda uchaze ukuba yintoni engalunganga -- ingaba uguqulelo aluchanekanga? Ngaba ukufomatha kwaphukile ngandlela ithile?
 * ngobubele nikela icebiso lenguqulelo engcono, okanye indlela umbhalo ofanele ubhalwe ngokufanelekileyo
 * **Enkosi!**

 # Imixholo
 * [Umthombo](#Umthombo)
 * [Inkxaso kunye neNkxaso](#Inkxaso-kunye-neNkxaso-mali)
 * [Ufakelo](#Fakelo)
 * [Seta](#Seta)
 * [Ukuguqulelwa kwefayile yomthombo womtya weJavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Ukuguqulelwa koluhlu lweefayile ezibhaliweyo](#Ukuguqulela-uluhlu- lwefayile-yefayile)
 * [Olunye ukhetho](#Olunye-ukhetho)
 * [Imiyalelo yebhetshi yeJSON](#JSON-ibhetshi-imiyalelo)

 ## Umthombo
 * [hokeylization kwiGitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Inkxaso kunye neNkxaso
 Ndizama ukuba ngumphuhlisi wesoftware ovulelekileyo. Bendisebenza ngaphakathi
 ishishini lesoftware iminyaka emininzi, ndiqale iinkampani eziphumeleleyo kwaye ndazithengisa kwiinkampani zoluntu.
 Kutshanje ndiye ndaphelelwa ngumsebenzi, yaye andinawo omnye umsebenzi endiwudwelisileyo

 Ke ndiza kuzama ukubhala isoftware eluncedo kwaye ndibone ukuba iyasebenza na

 Ukuba uyakonwabela ukusebenzisa le software, ndingavuya kakhulu ukufumana i
 incinci [igalelo lenyanga ngePatreon](https://www.patreon.com/cobbzilla)

 *Enkosi!*

 ## Ukufakela
 Ukusebenzisa isixhobo somgca womyalelo, hlohla usebenzisa `npm` okanye `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Ukusebenzisa njengethala leencwadi, faka inguqulelo `lite` , encinane kakhulu:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Emva koko jonga uncedo `hokey` :

    hokey --help
    hokey -h

 Ngaba uyafuna ukubona iziphumo ngolwimi lwakho okanye kolunye ulwimi?

 `hokey` izama ukubona ulwimi ngokuzenzekelayo ukusuka kutshintsho lwemekobume yeqokobhe lakho

 Unganyanzela ulwimi ngokucwangcisa `LC_ALL` umahluko wemekobume:

    LC_ALL=it hokey --help

 Qaphela ukuba ufake `hokeylization-lite` , uncedo lomyalelo lufumaneka kuphela ngesiNgesi

 ## Misela
 Cwangcisa i `GOOGLE_TRANSLATE_PROJECT_ID` ukuguquguquka kwendalo ukuze uchonge iprojekthi yakho yeToliki kaGoogle

 Cwangcisa i `GOOGLE_APPLICATION_CREDENTIALS` ukuguquguquka kwemekobume ukuya kwinkcazelo ye-JSON oyikhuphileyo
 emva kokuqonda ukuba ungqinisiso lusebenza njani kwilifu likaGoogle (kunokuba mnandi)

 Ukuba usebenzisa ikhowudi yemvelaphi, ungaphinda ubeke ezi kwi `.env` ifayile kumthombo
 uvimba weefayili ziya kulayishwa ngexesha lokusebenza nge [dotenv](https://www.npmjs.com/package/dotenv)

 ## Ukuguqulela ifayile yesixhobo somtya weJavaScript
 Itheyibhile yakho yomtya ** mayibe** kwifayile yeJavaScript kwenye yezi ndlela zimbini:

 ES6 ukuthumela ngaphandle:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 I-CommonJS ukuthumela ngaphandle

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ukuba le fayile ibinikwe igama `myfile.en.js` , ungayiguqulela kwiSpanish kunye nesiJamani nge:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 I `LANG` engasentla ikhethekile -- ligama eligciniweyo kwesi sixhobo!

 I `LANG` indawo yayo ithathwa ngekhowudi yolwimi yeefayile zemveliso

 Ngaloo ndlela lo myalelo ungasentla wenza iifayile:

    myfile.es.js
    myfile.de.js

 Ukhetho `-l` / `--languages` zolwimi ze-ISO.
 [ixhaswa yiToliki kaGoogle](https://cloud.google.com/translate/docs/languages)

 Ukuba ifayile yemveliso sele ikhona, iya kujongwa ukujonga ukuba ngawaphi amaqhosha esele ekhona.
 Izitshixo ezikhoyo azinakuguqulelwa. Iinguqulelo zamaqhosha angekhoyo ziya kwenziwa kwaye zihlonyelwe
 ukuya ekupheleni kwenjongo ye-JS. Ifayile yonke ihlala ibhalwa kwakhona.

 Ukunyanzela uguqulelo kwakhona onke amaqhosha, sebenzisa i `-f` / `--force` ukhetho

 ## Ukuguqulelwa koluhlu lweefayile ezibhaliweyo
 Ungakwazi nokuguqulela uluhlu lweefayile. i-hokeylization iya kutyelela ngokuphindaphindiweyo yonke into
 ifayile kulawulo kwaye iqhube imixholo yayo ngeToliki kaGoogle, kwaye ugcine imveliso
 kwifayile enegama elifanayo kuluhlu olwahlukileyo lomthi

 Xa uguqulelo lwakho lujolise kulawulo, le mowudi yenziwe yasebenza

 I `-o` / `--outfile` ukhetho luxela uvimba weefayili ophumayo

 **ISILUMKISO ESIKHULU**: Xa uguqulela abalawuli, **SUKU** khankanya uvimba weefayili wemveliso
 leyo ingaphakathi kuluhlu lwakho lwegalelo! Ukuba wenza oku, uya:
 * yenza ukuphindaphinda okungapheliyo
 * sebenzisa ibhili lakho likaGoogle
 * Gcwalisa idiski yakho
 * yonwaba kancinci

 Nanku umzekelo wento *ungayenzi*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Xa oku kuqhuba, iifayile eziguquliweyo zibhalwa `templates/es` , kwaye ngaloo ndlela zibe ntsha
 imvelaphi yeefayile zokuguqulelwa, kuba ziphantsi `templates/` -- le nkqubo iyaqhubeka
 ngonaphakade, musa ukuyenza!

 #### Usetyenziso oluchanekileyo
 Kulungile, masithi unezifanekiso ze-imeyile kuluhlu:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Ukuguqulela zonke ezi kwiSpanish kunye nesiJamani, sebenzisa:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Kulapha ngasentla, `LANG` ligama eligciniweyo kwaye endaweni yalo liza kufakwa ikhowudi yolwimi ye-ISO

 Kwenzeka ntoni xa oku kungentla kuqhuba:
 * I `templates/email/es` kunye `templates/email/de` abalawuli bayakwenziwa (ukuba abekho)
 * Yonke ifayile ekwi `templates/email/en` iya kuguqulelwa kwisiSpanish nesiJamani
 * Iifayile zemveliso ezikhoyo aziyi kuphinda zenziwe kwakhona ngaphandle kokuba usebenzisa `-f` / `--force`
 *Uya kuphelela ngesakhiwo esifanayo solawulo kunye neefayile ngaphakathi kwe `es` kunye `de` njengokuba unayo phantsi kwe `en`

 ## Olunye ukhetho

 ### Ukubaleka okomileyo
 Dlula `-n` / `--dry-run` ukubonisa into eza kwenziwa, kodwa musa ukwenza nayiphi na iminxeba ye-API okanye ubhale naziphi na iifayile.

 ### Ukunyanzeliswa
 Dlula `-f` / `--force` ukuze uhlale uhlaziya iinguqulelo, nokuba sele zikhona

 ### Umdlalo
 Dlula `-m` / `--match` xa uqhuba kwindlela yolawulo

 Usenokungasoloko ufuna ukuguqulela *yonke* ifayile kuvimba wakho womthombo kulawulo lwakho ekujoliswe kulo

 Ixabiso `-m` / `--match` yi regex (lumkela imigaqo ecaphula iqokobhe!) echazayo
 zeziphi iifayile ekufuneka ziguqulelwe

 Xa uthandabuza, ungadibanisa olu khetho kunye `-n` / `--dry-run` ukubona ukuba zeziphi iifayile eziza kuguqulelwa.

 ### Akubandakanyi
 Ngamanye amaxesha i `-m` yakho idibanisa iifayile ezininzi. Sebenzisa i `-e` / `--excludes` ukhetho lokukhuphela ngaphandle ngokucacileyo
 iifayile ebezinokudityaniswa ngenye indlela

 Ungadwelisa iiregeksi ezininzi, ezahlulwe zizithuba

 Usebenziso oluqhelekileyo lunokuba: `--excludes node_modules dist \.git build tmp`

 ### Ii-Handlebar
 Imitya yokuguqulelwa isenokuqulatha `{{ handlebars }}` itemplates, nokuba zimbini okanye ezintathu iibrashi ezigoqeneyo

 Mhlawumbi * AWUFUNI* ukuba izinto ezingaphakathi kwezo templates ziguqulelwe

 Dlula i `-H` / `--handlebars` iflegi, kwaye nantoni na engaphakathi `{{ ... }}` ayizuguqulelwa

 ### Ukumakisha
 I-Markdown ayingombhalo okanye i-html, ngoko iToliki kaGoogle inobunzima kuyo

 I `-M` / `--markdown` iflegi yenza ukubamba okukhethekileyo kweefayile zokumakisha

 Ngeefayile zokumakisha, ukuba awusebenzisi `-M` iflegi, uya kufumana ezi ngxaki.
 * Amakhonkco aqhawukileyo. Kuguqulo, uphawu lwesithuba luvela emva kokuba inkcazo yekhonkco lokuphawula iphelile (nge `]` ) kodwa
 phambi kokuba ikhonkco layo ekujoliswe kulo liqale ( nge `(` ) Oku kubangela ukuba uphawulo lunike ngokungalunganga, kunye nekhonkco
 yaphukile xa ujonga uxwebhu.
 * Iibhloko zekhowudi ziyaguqulelwa. Itoliki kaGoogle ayiyazi ukuba yeyiphi na ikhowudi ephawulweyo kwaye engaziyo
 * Izithuba ezingachanekanga kwiibhloko zekhowudi ezifakwe ngaphakathi. Izithuba kunzima ukuzigcina kwinguqulelo
 * Izinto ezingaphakathi kwe `backticks` ziya kuguqulelwa, xa usoloko ufuna ukuba zibengamaxabiso oqobo

 Xa `-M` / `--markdown` iflegi yenziwe yasebenza:
 * Ipatheni `](` iya kucushwa ibe ku `](` ngaloo ndlela kulungiswa amakhonkco okuphawula aphukileyo
 * Isisongelo esithi "akukho guquleli" siya kubekwa ngeenxa zonke kwiibhloko zekhowudi ezifakwe ngaphakathi, zigcina ukubekwa kwindawo efanelekileyo kunye nokuqinisekisa ukuba aziguqulelwanga.
 *Umqulu othi "akukho guquleli" uya kubekwa ujikeleze okubhaliweyo ngaphakathi `backticks` ukuqinisekisa ukuba aziguqulelwanga

 ### Inkqubo-njenge
 Ngokuqhelekileyo yonke into icutshungulwa njengombhalo ocacileyo

 Ukuba umxholo wakho yi HTML, izakonakala ngaphandle kokuba ugqithise `-p html` / `--process-as html` ukhetho

 ### Isihluzo
 Kwi-adventurous: xa ulungisa iifayile kulawulo, ungadlula `-F` / `--filter` ukhetho.
 ukucoca imveliso phambi kokuba ibhalwe kwindlela yefayile

 Ixabiso lolu khetho kufuneka libe yindlela eya kwifayile ye-JS ethumela ngaphandle umsebenzi onegama elithi `filter`

 Umsebenzi `filter` kufuneka `async` kuba `await` phezu kwayo

 Phambi kokuba iifayile zibhalwe kwidisk, yonke imixholo yefayile iya kudluliselwa kumsebenzi `filter` njengoluhlu lwamagama

 Ixabiso `filter` yeyona nto iza kubhalwa kwindawo yokugcina

 Ke, unolawulo olupheleleyo kwinto eza kubhalwa ekugqibeleni

 I `filter` lokubhaliweyo` liya kukhangelwa kwiindawo ezilandelayo (ene `.js` kwisihluzo.
 igama, ngaphandle kokuba sele iphele ngo `.js` )
 * Uluhlu lwangoku
 * Uluhlu olunikwe igama `.hokey-filters` ngaphakathi kulawulo lwangoku
 * Uvimba weefayili onikwe igama `${HOME}/.hokey-filters` , apho `${HOME}` lulawulo lwangoku lwasekhaya lomsebenzisi
 * Eyakhelwe ngaphakathi [uluhlu lwezihluzi](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Iiparamitha zokuHluza
 `filter` unokuba ngamagama amaninzi. Kule meko, igama lokuqala ligama lokucoca, kwaye
 Amagama aseleyo azakugqithiswa njengeengxoxo ku `filter` umsebenzi

 ### Nceda
 Sebenzisa `-h` / `--help` ukubonisa uncedo

 ## Imiyalelo yebhetshi yeJSON
 `-j` / `--json` , ungaqhuba imiyalelo elungelelanisiweyo emininzi `hokey`

 Ngokwendibano le fayile ibizwa ngokuba `hokey.json` , kodwa ungayibiza nantoni na oyifunayo

 Ukuba ugqithisa ulawulo njengolu khetho ` `-j` , `hokey` iya kukhangela i `hokey.json` kulo vimba weefayili.

 Ifayile ye-JSON kufuneka iqulathe into enye. Ngaphakathi kwaloo nto, amagama alo propati ayafana
 iinketho zelayini yomyalelo, kunye nepropati enye eyongezelelweyo ebizwa `hokey`

 `hokey` lwemiyalelo ekufuneka iqhutywe. Iipropati ezibhengezwe kule miyalelo ziya kuthi
 bhala ngaphezulu naziphi na izibhengezo eziphindiweyo kwinto engaphandle.

 Ngaphakathi kwento nganye kwi `hokey` uluhlu, kufuneka uchaze `name` , kunye negalelo kunye neefayile zemveliso.

 Nanku umzekelo we `hokey.json`

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

 ### Iifayile zongeniso ezininzi
 Dlula uluhlu lweendlela zefayile njenge `infiles` endaweni yendlela enye `infile` , njengakulo mzekelo:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Izalathisi
 Xa uguqulela kwiilwimi ezininzi, `hokey` inokudala ifayile yesalathiso edwelisa zonke iinguqulelo ezenziweyo
 kwaye ibonelela ngamakhonkco kubo

 *Xa usenza izalathisi, unokuba nomthombo omnye wegalelo*

 Dlula i `-I` / `--index` ukhetho, ixabiso kulapho ifayile yesalathisi iyakwenziwa, enokuba yifayile.
 okanye uvimba weefayili. Ukuba luluhlu, igama lefayile elingagqibekanga liya kusetyenziswa, ngokusekwe kwithempleyithi (bona ngezantsi)

 Sebenzisa i `-A` / `--index-template` ukujonga ukuba isalathisi semveliso ifomathwa njani. Ungakhankanya 'html',
 'markdown', 'text', okanye indlela yefayile eya kweyakho [HandlebarsJS](https://handlebarsjs.com/) template

 Ukuba ukhankanya eyakho itemplate, kufuneka kwakhona uchaze ifayile (hayi uvimba weefayili) ukwenzela `-I` / `--index`
 ukhetho

 ## Yiba nexesha elimnandi lokuguqulela iilwimi!

</pre>
