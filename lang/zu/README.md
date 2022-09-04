I-Hokeylization
 ==============
 Igama liyi-portmanteau, okusho ukuthi 'indawo ye-hokey'

 I-hokey ngoba ilula kakhulu: ithumela uchungechunge ku-Google Translate

 Ungakwazi ukuhumusha:
 * into ye-JavaScript equkethe imilayezo
 * umkhombandlela wamafayela, ngokuphindaphindiwe

 # Funda lokhu ngolunye ulimi
 Lo mbhalo we-README.md uhunyushwe, kusetshenziswa ithuluzi le-hokeylization ngokwalo, kwaba
 **[zonke izilimi zisekelwa i-Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ngiqinisekile ukuthi ayiphelele, kodwa ngethemba ukuthi ingcono kunalutho!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 isiJalimane](../de/README.md)
 [🇺🇸 IsiNgisi](../zu/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 isi-Indonesian](../id/README.md)
 [🇮🇹 isiNtaliyane](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 isi-Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 isiShayina](../zh/README.md)


 **[📚 ... Zonke Izilimi ...](../README.md)**
 ----

 ### Ingabe kunenkinga ngalokhu kuhunyushwa kwe- README?
 Lokhu kuhunyushwa koqobo [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 ingase ibe namaphutha -- *izilungiso zamukelekile kakhulu!* Sicela uthumele [isicelo sokudonsa ku-GitHub](https://github.com/cobbzilla/yuebing/pulls),
 noma uma ungakhululekile ukwenza lokho, [vula inkinga](https://github.com/cobbzilla/yuebing/issues)

 Uma udala udaba olusha lwe-GitHub mayelana nokuhumusha, sicela wenze:
 * faka i-URL yekhasi (kopisha/unamathisele kubha yekheli lesiphequluli)
 * faka phakathi nombhalo ongalungile (kopisha/unamathisele esipheqululini)
 * ngomusa nikeza isiphakamiso senguqulo engcono
 * **Ngiyabonga!**

 # Okuqukethwe
 * [Umthombo](#Umthombo)
 * [Ukwesekwa Noxhaso](#Ukusekela-Noxhaso)
 * [Ukufakwa](#Ukufakwa)
 * [Ukumisa](#Ukusethwa)
 * [Kuhunyushwa ifayela lesisetshenziswa sochungechunge lwe-JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Ukuhumusha uhla lwemibhalo lwamafayela ombhalo](#Translating-a-directory-of-text-files)
 * [Ezinye izinketho](#Ezinye izinketho)

 ## Umthombo
 * [hokeylization ku-GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization ku-npm](https://www.npmjs.com/package/hokeylization)

 ## Ukusekela Nokuxhaswa Ngezimali
 Ngizama ukuba umthuthukisi wesofthiwe yomthombo ovulekile ochwepheshe. Bengisebenza e
 imboni yesofthiwe iminyaka eminingi, ngiqale izinkampani eziphumelelayo futhi ngazithengisa ezinkampanini zomphakathi.
 Muva nje ngilahlekelwe umsebenzi, futhi anginawo omunye umsebenzi engiwulandelayo

 Ngakho-ke ngizozama ukubhala isoftware ewusizo futhi ngibone ukuthi lokho kuyasebenza

 Ngingabonga kakhulu [umnikelo wanyanga zonke nge-Patreon](https://www.patreon.com/cobbzilla)

 ## Ukufakwa
 Ukuze usebenzise ithuluzi lomugqa womyalo, faka usebenzisa `npm` noma `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Ukuze uyisebenzise njengomtapo wolwazi, faka inguqulo `lite` , encane kakhulu:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Bese ubheka usizo lomyalo othi `hokey` :

    hokey --help
    hokey -h

 Ingabe ufuna ukubona okukhiphayo ngolimi lwakho noma ngolunye ulimi?

 `hokey` izama ukuthola ulimi ngokuzenzakalelayo kusuka kokuguquguqukayo kwemvelo yegobolondo lakho

 Ungaphoqa ulimi ngokusetha `LC_ALL` okuguquguqukayo kwemvelo:

    LC_ALL=it hokey --help

 Qaphela ukuthi uma ufake `hokeylization-lite` , usizo lomyalo lutholakala kuphela ngesiNgisi

 ## Setha
 Setha `GOOGLE_TRANSLATE_PROJECT_ID` okuhluka kwemvelo ukuze uhlonze iphrojekthi yakho ye-Google Translate

 Setha ukuguquguquka kwemvelo kokuthi `GOOGLE_APPLICATION_CREDENTIALS` ye-JSON oyilandile
 ngemuva kokuthola ukuthi ukuqinisekiswa kusebenza kanjani kumafu we-Google (kungaba mnandi)

 Uma usebenzisa ikhodi yomthombo, ungaphinda ubeke lokhu kufayela `.env` emthonjeni
 uhla lwemibhalo luzolayishwa ngesikhathi sokusebenza nge-[dotenv](https://www.npmjs.com/package/dotenv)

 ## Ukuhumusha ifayela lensiza yochungechunge lwe-JavaScript
 Ithebula lakho leyunithi yezinhlamvu **kumele** libe kufayela le-JavaScript kwelinye lalawa mafomu amabili:

 Ukuthunyelwa kwe-ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ukuthunyelwa kwe-CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Uma leli fayela beliqanjwe ngokuthi `myfile.en.js` , ungakwazi ukulihumushela kwisiSpanishi nesiJalimane ngokuthi:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 I `LANG` engenhla ikhethekile -- igama eligodliwe kuleli thuluzi!

 I `LANG` ithathelwa indawo ikhodi yolimi yamafayela okukhiphayo

 Ngakho umyalo ongenhla udala amafayela:

    myfile.es.js
    myfile.de.js

 Inketho ethi `-l` / `--languages` oluhlukaniswe ngokhefana lwamakhodi olimi e-ISO
 [isekelwa i-Google Translate](https://cloud.google.com/translate/docs/languages)

 Uma ifayela lokuphumayo selivele likhona, lizohlolwa ukuze kutholwe ukuthi yibaphi okhiye asebevele bakhona.
 Okhiye abakhona ngeke bahunyushwe. Ukuhunyushwa kokhiye abangekho kuzokwenziwa futhi kwengezwe
 kuze kube sekupheleni kwento ye-JS. Ifayela lonke lihlala libhalwa kabusha.

 Ukuphoqa ukuhumusha kabusha bonke okhiye, sebenzisa `-f` / `--force`

 ## Ukuhumusha uhla lwemibhalo lwamafayela ombhalo
 Ungakwazi futhi ukuhumusha uhla lwemibhalo lwamafayela. i-hokeylization izovakashela ngokuphindaphindiwe njalo
 ifayela ohlwini lwemibhalo bese uqhuba elikuqukethe nge-Google Translate, bese ulondoloza okukhiphayo
 efayeleni elinegama elifanayo esihlahleni sohla lwemibhalo esihlukile

 Uma okuqondiwe kokuhumusha kwakho kuwuhla lwemibhalo, le modi inikwa amandla

 Inketho ethi `-o` / `--outfile` icacisa uhla lwemibhalo lokuphumayo

 **ISIXWAYISO ESIKHULU**: Uma uhumusha izinkomba, **UNGAKUNGAZI** cacisa uhla lwemibhalo oluphumayo
 lokho kungaphakathi kwemibhalo yakho yokufaka! Uma wenza lokhu, uzo:
 * yenza ukuphindaphinda okungapheli
 * yenza ibhili lakho le-Google
 * Gcwalisa idiski yakho
 * ujabule kancane

 Nasi isibonelo salokho *okungamelwe ukwenze*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Uma lokhu kusebenza, amafayela ahunyushiwe abhalwa `templates/es` , kanjalo abe masha
 amafayela omthombo azohumushwa, njengoba angaphansi `templates/` -- le nqubo iyaqhubeka
 kuze kube phakade, ungakwenzi!

 #### Ukusetshenziswa okulungile
 Kulungile, ake sithi unezifanekiso ze-imeyili kuhla lwemibhalo:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Ukuze uhumushele konke lokhu kusi-Spanish nesiJalimane, sebenzisa:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Okungenhla, `LANG` igama eligodliwe futhi lizothathelwa indawo ikhodi yolimi ye-ISO

 Kwenzekani uma okungenhla kusebenza:
 * Izikhombisi ` `templates/email/es` kanye `templates/email/de` zizokwakhiwa (uma zingekho)
 * Lonke ifayela kokuthi `templates/email/en` kwisi-Spanish nesiJalimane
 * Amafayela aphumayo akhona ngeke enziwe kabusha ngaphandle uma usebenzisa `-f` / `--force`
 * Uzogcina unesakhiwo sohla lwemibhalo olufanayo namafayela ngaphakathi `es` kanye `de` njengoba unawo ngaphansi kokuthi `en`

 ## Ezinye izinketho

 ### Ukugijima okomile
 Dlula `-n` / `--dry-run` ukuze ubonise lokho okuzokwenziwa, kodwa empeleni ungenzi noma yiziphi izingcingo ze-API noma ubhale noma yimaphi amafayela.

 ### Force
 Dlula `-f` / `--force` ukuze uhlale uvuselela ukuhumusha, noma ngabe sekukhona kakade

 ### Ukufana
 Dlula `-m` / `--match` ukuze ukhawulele amafayela acutshungulwe lapho esebenza kumodi yohlu lwemibhalo

 Ungase ungafuni njalo ukuhumusha *onke* ifayela kuhla lwemibhalo lwakho oluwumthombo kuya kunkomba yakho oyiqondise

 Inani `-m` / `--match` i-regex (qaphela imithetho yokucaphuna igobolondo!) ecacisayo
 imaphi amafayela okufanele ahunyushwe

 Uma ungabaza, ungakwazi ukuhlanganisa le nketho nokuthi `-n` / `--dry-run` ukuze ubone ukuthi imaphi amafayela azohumushwa.

 ### Ayifaki
 Kwesinye isikhathi `-m` yakho ifana namafayela amaningi kakhulu. Sebenzisa `-e` / `--excludes` ukuze ukhiphe ngokusobala
 amafayela obekungenjalo afane

 Ungaklelisa ama-regex amaningi, ahlukaniswe izikhala

 Ukusetshenziswa okuvamile kungaba: `--excludes node_modules dist \.git build tmp`

 ### Izibambo
 Iyunithi yezinhlamvu okufanele ihumushwe ingase ibe nezifanekiso `{{ handlebars }}` , okungaba ngabakaki abagoqekile ababili noma abathathu

 Cishe *AWUFUNI* ukuthi izinto ezingaphakathi kwalezo zifanekiso zihunyushwe

 Dlula `-H` / `--handlebars` , futhi noma yini engaphakathi kokuthi `{{ ... }}` ngeke ihunyushwe

 ### Markdown
 I-Markdown akuwona umbhalo noma i-html, ngakho-ke i-Google Translate inobunzima obuthile ngayo

 `-M` / `--markdown` amandla ukuphathwa okukhethekile kwamafayela okumaka

 Ngamafayela okubeka phansi, uma ungasebenzisi ifulegi `-M` , cishe uzothola lezi zinkinga:
 * Izixhumanisi eziphukile. Ekuhumusheni, kuvela uhlamvu lwesikhala ngemva kokuphela kwencazelo yesixhumanisi sokubeka phansi (nokuthi `]` ) kodwa
 ngaphambi kokuthi isixhumanisi sayo esiqondiswe kuso siqale (ngokuthi `(` ). Lokhu kubangela ukuthi ukubeke phansi kunikezwe ngokungalungile, kanye nesixhumanisi
 iphukile uma ubuka idokhumenti.
 * Amabhulokhi ekhodi ayahunyushwa. I-Google Translate ayazi ukuthi i-markdown icabangani ngekhodi nokuthi yini engayazi
 * Isikhala esingalungile samabhulokhi ekhodi ehlehlisiwe. Isikhala sinzima ukusigcina ekuhumusheni
 * Izinto ezingaphakathi kokuthi `backticks` zizohunyushwa, lapho cishe uhlale ufuna ukuthi abe amanani angokoqobo

 Uma `-M` / `--markdown` :
 * Iphethini `](` izofinyezwa ukuze ithi `](` ngaleyo ndlela kulungiswe izixhumanisi zokumaka eziphukile
 *Isembozo esithi "no translate" sizobekwa eduze kwamabhulokhi amakhodi ahlehlisiwe, alondoloze ukuhlehlisa okulungile nokuqinisekisa ukuthi awahunyushwa
 *Isembozo esithi "no translate" sizobekwa phakathi kombhalo phakathi `backticks` ukuze kuqinisekiswe ukuthi awahunyushwa

 ### Inqubo-njenge
 Ngokuvamile yonke into icutshungulwa njengombhalo ongenalutho

 Uma okuqukethwe kwakho kuyi-HTML, kuzokonakala ngaphandle uma udlula `-p html` / `--process-as html`

 ### Hlunga
 Okwesikhashana: lapho ucubungula amafayela ohlwini lwemibhalo, ungadlula `-F` / `--filter`
 ukuhlunga okukhiphayo ngaphambi kokuthi kubhalwe ohlelweni lwefayela

 Inani lale nketho kumelwe libe indlela eya efayeleni le-JS elithumela ngaphandle umsebenzi okuthiwa `filter`

 Umsebenzi `filter` kumelwe `async` ngoba `await` kuwo

 Ngaphambi kokuthi amafayela abhalwe kudiski, konke okuqukethwe kwefayela kuzodluliselwa kumsebenzi `filter` njengeyunithi yezinhlamvu

 Inani lokubuyisela elisuka `filter` isitoreji

 Ngakho, uyakwazi ukulawula lokho okuzobhalwa ekugcineni

 ### Usizo
 Sebenzisa `-h` / `--help` ukuze ubonise usizo

 ## Jabulela Ukuhumusha!

</pre>
