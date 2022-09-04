Hokeylization
 =============
 Dzinalo ndi portmanteau, kutanthauza 'kukhazikika kwa hokey'

 Ndi hokey chifukwa ndiyosavuta: imatumiza zingwe ku Zomasulira za Google

 Mutha kumasulira:
 * chinthu cha JavaScript chokhala ndi mauthenga
 * chikwatu cha mafayilo, mobwerezabwereza

 # Werengani izi muchilankhulo china
 Chikalata cha README.md chamasuliridwa, pogwiritsa ntchito chida cha hokeylization, kukhala
 **[chinenero chilichonse chimathandizidwa ndi Zomasulira za Google](https://cloud.google.com/translate/docs/languages)!**

 Ndikutsimikiza kuti sizabwino, koma ndikukhulupirira kuti nzabwino kuposa chilichonse!

 [🇸🇦 Chiarabu](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Chijeremani](../de/README.md)
 [🇺🇸 Chingerezi](../en/README.md)
 [🇪🇸 Chisipanishi](../es/README.md)
 [🇫🇷 Chifulenchi](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Chiindoneziya](../id/README.md)
 [🇮🇹 Chiitaliya](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Chikorea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Chipolishi](../pl/README.md)
 [🇧🇷 Chipwitikizi](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Zinenero Zonse ...](../README.md)**
 ----

 ### Kodi pali vuto ndi kumasulira kumeneku kwa README?
 Kumasulira kwenikweniku [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 zitha kukhala zolakwika -- *zokonza ndizolandilidwa kwambiri!* Chonde tumizani [kukoka pempho pa GitHub](https://github.com/cobbzilla/yuebing/pulls),
 kapena ngati simumasuka kuchita zimenezo, [tsegulani nkhani](https://github.com/cobbzilla/yuebing/issues)

 Mukapanga nkhani yatsopano ya GitHub yokhudza kumasulira, chonde chitani:
 * Phatikizani ulalo watsamba (koperani / kumata kuchokera pa adilesi ya msakatuli)
 * Phatikizani zomwe zili zolakwika (koperani/mata kuchokera pa msakatuli)
 * mokoma mtima perekani lingaliro la kumasulira kwabwinoko
 * **Zikomo!**

 # Zamkatimu
 * [Gwero](#Source)
 * [Thandizo ndi Ndalama](#Thandizo-ndi-ndandalama)
 * [Kuyika](#Kuyika)
 * [Kukhazikitsa](#Kukhazikitsa)
 * [Kumasulira fayilo yachingwe cha JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Kumasulira chikwatu cha mafayilo amawu](#Translating-a-directory-of-text-files)
 * [Njira zina](#Njira Zina)

 ## Gwero
 * [hokeylization pa GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization pa npm](https://www.npmjs.com/package/hokeylization)

 # Thandizo ndi Ndalama
 Ndikuyesera kukhala katswiri wopanga mapulogalamu otseguka. Ndakhala ndikugwira ntchito ku
 makampani opanga mapulogalamu kwa zaka zambiri, ndayambitsa makampani opambana ndikugulitsa kumakampani aboma.
 Posachedwapa ndinachotsedwa ntchito, ndipo ndilibe ntchito ina iliyonse yotsatizana

 Chifukwa chake ndiyesera kulemba mapulogalamu othandiza ndikuwona ngati izi zikugwira ntchito

 Ndingayamikire ngakhale zazing'ono kwambiri [zopereka pamwezi kudzera pa Patreon](https://www.patreon.com/cobbzilla)

 ## Kukhazikitsa
 Kuti mugwiritse ntchito chida cha mzere wolamula, yikani kugwiritsa ntchito `npm` kapena `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Kuti mugwiritse ntchito ngati laibulale, yikani mtundu wa `lite` , womwe ndi wocheperako:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Kenako yang'anani thandizo la lamulo la `hokey` :

    hokey --help
    hokey -h

 Mukufuna kuwona zotuluka mu chilankhulo chanu kapena chilankhulo china?

 `hokey` amayesa kuzindikira chilankhulocho kuchokera kumitundu yosiyanasiyana ya chipolopolo chanu

 Mutha kukakamiza chilankhulo poyika `LC_ALL` kusintha kwa chilengedwe:

    LC_ALL=it hokey --help

 Dziwani kuti ngati `hokeylization-lite` , command help ikupezeka mu Chingerezi

 ## Khazikitsa
 Khazikitsani malo a `GOOGLE_TRANSLATE_PROJECT_ID` kuti muzindikire pulojekiti yanu ya Zomasulira za Google

 Khazikitsani zosintha za `GOOGLE_APPLICATION_CREDENTIALS` kukhala zotsimikizira za JSON zomwe mudatsitsa
 mutatha kudziwa momwe kutsimikizika kumagwirira ntchito pamtambo wa Google (zingakhale zosangalatsa)

 Ngati mukugwiritsa ntchito code source, mutha kuziyikanso mu fayilo ya `.env` komwe kumachokera
 chikwatu chidzayikidwa pa nthawi yothamanga kudzera pa [dotenv](https://www.npmjs.com/package/dotenv)

 ## Kumasulira fayilo yachingwe cha JavaScript
 Tebulo lanu la zingwe ** liyenera ** kukhala mu fayilo ya JavaScript mu imodzi mwa mitundu iwiriyi:

 ES6 kutumiza kunja:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Kutumiza kwa CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ngati fayiloyi idatchedwa `myfile.en.js` , mutha kumasulira ku Chisipanishi ndi Chijeremani ndi:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 The `LANG` yomwe ili pamwambapa ndiyapadera - ndi mawu osungidwa pachida ichi!

 The `LANG` imasinthidwa ndi chilankhulo cha mafayilo otulutsa

 Chifukwa chake lamulo ili pamwambapa limapanga mafayilo:

    myfile.es.js
    myfile.de.js

 Chosankha cha `-l` / `--languages` ndi mndandanda wosiyanitsidwa ndi koma wa ma code a zilankhulo za ISO.
 [mothandizidwa ndi Google Translate](https://cloud.google.com/translate/docs/languages)

 Ngati fayilo yotulutsa ilipo kale, iwunikiridwa kuti muwone makiyi omwe alipo kale.
 Makiyi omwe alipo sadzamasuliridwa. Zomasulira za makiyi akusowa zidzapangidwa ndi kuwonjezeredwa
 mpaka kumapeto kwa chinthu cha JS. Fayilo yonse imalembedwanso nthawi zonse.

 Kukakamiza kumasuliranso makiyi onse, gwiritsani ntchito `-f` / `--force`

 ## Kumasulira chikwatu cha mafayilo amawu
 Mukhozanso kumasulira chikwatu cha mafayilo. hokeylization idzayendera mobwerezabwereza aliyense
 tsegulani m'ndandanda ndikuyendetsa zomwe zili mu Google Translate, ndikusunga zomwe zatuluka
 ku fayilo yotchulidwa mofananamo mumtengo wosiyana wa chikwatu

 Pamene cholinga cha kumasulira kwanu ndi chikwatu, njirayi imayatsidwa

 Chosankha cha `-o` / `--outfile` chimatchula zotuluka

 **CHENJEZO LAKULU**: Mukamasulira maulolezo, **OSATI** tchulani chikwatu chotulutsa
 zomwe zili mkati mwazolembera zanu! Ngati muchita izi, mudza:
 * yambitsani kubwereza kosatha
 * tsitsani ndalama zanu za Google
 * lembani disk yanu
 * sangalalani pang'ono

 Nachi chitsanzo cha zomwe *osachita*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Izi zikachitika, mafayilo omasuliridwa amalembedwa ku `templates/es` , motero amakhala atsopano
 mafayilo omasulira, popeza ali pansi pa `templates/` -- ndondomekoyi ikupitilira
 kwanthawizonse, musachite izo!

 #### Kugwiritsa ntchito moyenera
 Chabwino, tiyerekeze kuti muli ndi ma templates a imelo mu chikwatu:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Kuti mumasulire zonsezi ku Chisipanishi ndi Chijeremani, thamangani:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Pamwambapa, `LANG` ndi mawu osungidwa ndipo m'malo mwake asinthidwa ndi code ya chilankhulo cha ISO

 Zomwe zimachitika pamwambazi zikachitika:
 * Ma `templates/email/es` ndi `templates/email/de` apangidwa (ngati palibe)
 * Fayilo iliyonse mu `templates/email/en` idzamasuliridwa ku Spanish ndi German
 * Mafayilo omwe alipo kale sangasinthidwenso pokhapokha mutagwiritsa ntchito `-f` / `--force`
 * Mudzakhala ndi chikwatu chofanana ndi mafayilo mkati mwa `es` ndi `de` monga momwe muliri pansi pa `en`

 ## Zosankha zina

 ### Dry run
 Pitani `-n` / `--dry-run` kuti muwonetse zomwe zingachitike, koma osayimba mafoni a API kapena kulemba mafayilo aliwonse.

 ### Mphamvu
 Pitani `-f` / `--force` kuti mumasulirenso zomasulira, ngakhale zitakhalapo kale

 ### Zofanana
 Pitani `-m` / `--match` kuti muchepetse mafayilo omwe asinthidwa mukamayendetsa

 Simungafune nthawi zonse kumasulira *fayilo iliyonse* yomwe ili m'chikwatu chomwe mumayambira kupita ku chikwatu chomwe mukufuna

 Mtengo wa njira ya `-m` / `--match` ndi regex (samalani malamulo otchula zipolopolo!)
 mafayilo omwe ayenera kumasuliridwa

 Mukakayikira, mutha kuphatikiza izi ndi `-n` / `--dry-run` kuti muwone mafayilo omwe angamasuliridwe.

 ### Kupatulapo
 Nthawi zina `-m` yanu imagwirizana ndi mafayilo ochulukirapo. Gwiritsani ntchito njira ya `-e` / `--excludes` kuti musatchule mwatsatanetsatane
 mafayilo omwe akanafanana

 Mutha kulembetsa ma regexe angapo, olekanitsidwa ndi mipata

 Kugwiritsa ntchito kofala kungakhale: `--excludes node_modules dist \.git build tmp`

 ### Ma Handlebar
 Zingwe zomasulira zitha kukhala ndi `{{ handlebars }}` , zokhala ndi zingwe ziwiri kapena zitatu zopindika.

 Mwina *SIMUFUNA* kuti zinthu zomwe zili mkati mwazithunzizo zimasuliridwe

 Dulani mbendera ya `-H` / `--handlebars` , ndipo chilichonse mkati mwa `{{ ... }}` sichidzamasuliridwa

 ### Kutsitsa
 Markdown silemba kapena html, kotero Zomasulira za Google zimakhala ndi zovuta nazo

 Mbendera ya `-M` / `--markdown` imathandizira kugwira ntchito mwapadera kwamafayilo otsitsa

 Ndi mafayilo otsitsa, ngati simugwiritsa ntchito mbendera ya `-M` , mutha kupeza mavuto awa:
 * Maulalo osweka. Pomasulira, chilembo cha danga chikuwonekera pambuyo pofotokozera ulalo wotsikirako (ndi `]` ) koma
 ulalo wake wa chandamale usanayambe (ndi `(` ). Izi zimapangitsa kuti kutsika kuwoneke molakwika, ndi ulalo
 imasweka powonera chikalatacho.
 * Ma code block amamasuliridwa. Zomasulira za Google sizimadziwa zomwe kutsitsa kumatengera ma code komanso zomwe sadziwa
 * Kutalikirana kolakwika kwa midadada yopindika. Mipata imakhala yovuta kusunga pomasulira
 * Zinthu zomwe zili mkati mwa `backticks` zimamasuliridwa, nthawi zonse mukafuna kuti zikhale zenizeni

 Pamene `-M` / `--markdown` :
 * Mtundu `](` udzafupikitsidwa kukhala `](` potero kukonza maulalo osweka
 * Chokulunga cha "no translate" chidzayikidwa mozungulira midadada yokhazikika, kusunga ma indentation oyenera ndikuwonetsetsa kuti sikumasuliridwa.
 * Chopukutira cha "no translate" chidzayikidwa mozungulira mawu mkati mwa `backticks` kuwonetsetsa kuti asamasuliridwe

 ### Njira-monga
 Nthawi zambiri zonse zimakonzedwa ngati mawu osavuta

 Ngati zomwe muli nazo ndi HTML, zitha kusokonekera pokhapokha mutadutsa njira ya `-p html` / `--process-as html` .

 ### Sefa
 Kwa okonda: mukamakonza mafayilo mu chikwatu, mutha kudutsa njira ya `-F` / `--filter` .
 kusefa zotuluka zisanalembedwe ku fayilo

 Mtengo wa njirayi uyenera kukhala njira yopita ku fayilo ya JS yomwe imatumiza ntchito yotchedwa `filter`

 Ntchito ya `filter` iyenera kukhala `async` chifukwa `await` idzatchedwa pa iyo

 Mafayilo asanalembedwe ku disk, zonse zomwe zili `filter` ngati chingwe

 Mtengo wobwerera kuchokera `filter`

 Choncho, muli ndi mphamvu zonse pa zomwe zidzalembedwe

 ### Thandizeni
 Gwiritsani ntchito `-h` / `--help` kuti muwonetse thandizo

 ## Mwadala Kumasulira!

</pre>
