Hokeylization
 ==============
 Iro zita ndere portmanteau, zvichireva kuti 'hokey localization'

 Ihokey nekuti iri nyore: inotumira tambo kuGoogle Translate

 Unogona kushandura:
 * chinhu cheJavaScript chine mameseji
 * dhairekitori remafaira, achidzokorodza

 # Verenga izvi mune mumwe mutauro
 Gwaro iri README.md rakashandurwa, uchishandisa hokeylization turusi pachayo,
 kupinda mu **[mutauro wese unotsigirwa neGoogle Translate](../README.md)!**

 Ndine chokwadi kuti haina kukwana, asi ndinovimba iri nani pane hapana!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Chibengali](../bn/README.md)
 [🇩🇪 ChiGerman](../de/README.md)
 [🇺🇸 Chirungu](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Chiputukezi](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Mitauro Yose ...](../README.md)**
 ----

 ### Pane dambudziko here neshanduro iyi yeREADME?
 Iyi chaiyo shanduro yepakutanga [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 inogona kunge isina kukanganisa -- *kugadzirisa kunogamuchirwa!* Ndokumbira utumire [kudhonza chikumbiro paGitHub](https://github.com/cobbzilla/yuebing/pulls),
 kana kuti kana usina kusununguka kuita izvozvo, [vhura nyaya](https://github.com/cobbzilla/yuebing/issues)

 Kana iwe ukagadzira itsva GitHub nyaya nezve dudziro, ndapota ita:
 * sanganisira iyo URL peji (kopi/namira kubva kubrowser kero bar)
 * sanganisira iwo chaiwo mameseji asiri iwo (kopi/namira kubva kubrowser)
 * nemutsa ipa zano reshanduro iri nani
 * **Ndatenda!**

 # Zviri mukati
 * [Kwakabva](#Mabviro)
 * [Kutsigira uye Mari](#Kutsigira-uye-Mari)
 * [Kuiswa](#Kuiswa)
 * [Setup](#Setup)
 * [Kushandura faira renziyo yeJavaScript](#Kushandura-a-JavaScript-tambo-resource-file)
 * [Kushandura dhairekitori remafaira ezvinyorwa](#Kushandura-dhairekitori-rezvinyorwa-mafaira)
 * [Dzimwe sarudzo](#Zvimwe-sarudzo)

 ## Source
 * [hokeylization paGitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization pa npm](https://www.npmjs.com/package/hokeylization)

 ## Tsigiro uye Mari
 Ndiri kuyedza kuve nyanzvi yakavhurika sosi software yekuvandudza. Ndanga ndichishanda mu
 indasitiri yemasoftware kwemakore mazhinji, ndakatanga makambani akabudirira uye ndikaatengesa kumakambani eruzhinji.
 Munguva ichangopfuura ndakarasikirwa nebasa rangu, uye handina chaizvoizvo rimwe basa ripi neripi rakarongwa

 Saka ndichaedza kunyora software inobatsira uye kuona kana izvo zvinoshanda

 Ndingatenda nemoyo wese kunyange diki [mupiro wepamwedzi kuburikidza nePatreon](https://www.patreon.com/cobbzilla)

 ## Kuiswa
 Kuti ushandise chirairo chekuraira, isa uchishandisa `npm` kana `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Kuti ushandise seraibhurari, isa iyo `lite` , iyo idiki kwazvo:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Wobva watarisa rubatsiro `hokey` command:

    hokey --help
    hokey -h

 Unoda kuona kubuda mumutauro wako kana mumwe mutauro?

 `hokey` inoedza kuona mutauro wacho kubva kumamiriro ekunze egoko rako

 Iwe unogona kumanikidza mutauro nekuisa iyo `LC_ALL` nharaunda shanduko:

    LC_ALL=it hokey --help

 Ziva kuti kana wakaisa `hokeylization-lite` , command help inowanikwa muChirungu chete

 ## Gadzirira
 Seta `GOOGLE_TRANSLATE_PROJECT_ID` shanduko yemamiriro ekunze kuti uone chirongwa chako cheGoogle Translate

 Seta `GOOGLE_APPLICATION_CREDENTIALS` shanduko yemamiriro ekunze kuti uenderane nemagwaro eJSON awadhaunirodha.
 mushure mekufungidzira kuti chokwadi chinoshanda sei paGoogle gore (zvinogona kunakidza)

 Kana uchimhanya kubva kusource code, unokwanisawo kuisa izvi mu `.env` faira mutsime
 dhairekitori ichaiswa panguva yekumhanya kuburikidza ne[dotenv](https://www.npmjs.com/package/dotenv)

 ## Kushandura faira reJavaScript tambo
 Tafura yako yetambo ** inofanira kunge iri muJavaScript faira mune imwe yeaya mafomu maviri:

 ES6 kutumira kunze kwenyika:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS kunze kwenyika

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Kana faira iri rakanzi `myfile.en.js` , unogona kurishandura kuchiSpanish nechiGerman ne:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Iyo `LANG` iri pamusoro yakakosha - ishoko rakachengetwa muchishandiso ichi!

 Iyo `LANG` inotsiviwa nekodhi yemutauro yemafaira ekubuda

 Saka murairo uri pamusoro unogadzira mafaira:

    myfile.es.js
    myfile.de.js

 Iyo `-l` / `--languages` sarudzo ndeye yakapatsanurwa nemakoma runyorwa rwe ISO mutauro macode.
 [inotsigirwa neGoogle Translate](https://cloud.google.com/translate/docs/languages)

 Kana iyo yakabuda faira yatovepo, inozoongororwa kuona kuti ndeapi makiyi aripo.
 Makiyi aripo haashandurwe. Shanduro dzemakiyi asipo dzichagadzirwa dzowedzerwa
 kusvika kumagumo echinhu cheJS. Iyo faira yese inogara ichinyorwa patsva.

 Kumanikidza kududzirazve makiyi ese, shandisa iyo `-f` / `--force` sarudzo

 ## Kushandura dhairekitori remavara mafaira
 Unogonawo kushandura dhairekitori remafaira. hokeylization ichadzokorora kushanyira yega yega
 faira mudhairekitori uye womhanyisa zvirimo kuburikidza neGoogle Translate, uye chengetedza zvabuda
 kune faira rakafanana rine zita mune yakaparadzana dhairekitori muti

 Kana chinangwa cheshanduro yako chiri dhairekitori, modhi iyi inobatidzwa

 Iyo `-o` / `--outfile` sarudzo inotsanangura yakabuda dhairekitori

 ** YAKAMBIRO YAKURU**: Pakushandura madhairekitori, **USAITA** tsanangura dhairekitori rinobuda
 iri mukati medhairekitori rako rekuisa! Kana ukaita izvi, iwe ucha:
 * kurudzira kudzokorora kusingagumi
 * mhanyisa bhiri rako reGoogle
 * Zadza dhisiki yako
 * kunakidzwa zvishoma

 Heino muenzaniso wezvisingaite *:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kana izvi zvaita, mafaera akaturikirwa anonyorwa ku `templates/es` , zvobva zvaita zvitsva
 kunobva mafaera ekushandura, sezvo ari pasi pe `templates/` -- maitiro aya anoenderera mberi
 nokusingaperi, usazviita!

 #### Kushandiswa chaiko
 Zvakanaka, ngatiti une mamwe matemplate eemail mune dhairekitori:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Kuturikira zvese izvi kuchiSpanish nechiGerman, mhanya:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Mune zviri pamusoro, `LANG` ishoko rakachengetwa uye richatsiviwa neiyo ISO mutauro kodhi

 Chii chinoitika kana zviri pamusoro apa zvinomhanya:
 * Iwo `templates/email/es` uye `templates/email/de` achagadzirwa (kana asipo)
 * Yese faira mu `templates/email/en` ichashandurirwa kuSpanish neGerman
 * Mafaira aripo anobuda haagadzirwe kunze kwekunge washandisa `-f` / `--force`
 * Iwe unozopedzisira uine yakafanana dhairekitori chimiro uye mafaera mukati me `es` uye `de` pasi pe `en`

 ## Dzimwe sarudzo

 ### Dry run
 Pfuura `-n` / `--dry-run` kuratidza zvaizoitwa, asi usaite chero maAPI mafoni kana kunyora chero mafaera.

 ### Simba
 Pfuura `-f` / `--force` kuti ugare uchivandudza shanduro, kunyange dzagara dziriko

 ### Match
 Pfuura `-m` / `--match` kana achimhanya mudhairekitori-modhi

 Iwe haugone kugara uchida kududzira *ese* faira mune yako sosi dhairekitori kune yako yaunoda dhairekitori

 Kukosha kweiyo `-m` / `--match` sarudzo ndeye regex (chenjererai goko rekutaura mitemo!) inotsanangura
 mafaira api anofanira kushandurwa

 Kana usina chokwadi, unogona kusanganisa sarudzo iyi ne `-n` / `--dry-run` kuti uone mafaera angashandurwa.

 ### Hazvibatanidzi
 Dzimwe nguva `-m` inofananidzira mafaera akawandisa. Shandisa iyo `-e` / `--excludes` sarudzo yekusabvisa zvakajeka
 mafaira angadai akaenderana

 Iwe unogona kunyora akawanda regexes, akaparadzaniswa nenzvimbo

 Kushandiswa kwakajairika kungave: `--excludes node_modules dist \.git build tmp`

 ### Handlebars
 Tambo dzekushandura dzinogona kunge dziine `{{ handlebars }}` matemplate, ane maviri kana matatu akamonana-brace

 Iwe unogona kunge *HAUDI* unoda kuti zvinhu zviri mukati mematemplate iwayo zvishandurwe

 Pfuura `-H` / `--handlebars` mureza, uye chero chiri mukati me `{{ ... }}` hachizoshandurirwe

 ### Markdown
 Markdown haisi mavara kana html, saka Google Translate ine zvimwe zvinonetsa nazvo

 Iyo `-M` / `--markdown` mureza inogonesa yakakosha kubata kwemafaera ekumaka

 Hokeylizer inobata zvinhu zvine mutsindo, asi nemafaera ekumaka, unogona kazhinji matambudziko aya:
 * Zvisungo zvakaputsika. Mushanduro, mavara emuchadenga anooneka mushure mekunge tsananguro yelinkdown yapera (ne `]` ) asi
 pamberi pekuti chinongedzo chayo chisati chatanga (ne `(` ).
 yakaputsika pakuona gwaro.
 * Mabhuroki ekodhi anoshandurwa. Google kuturikira haizive kuti chiratidzo chinotariswa sei nekodhi uye zvachisingazive
 * Nzvimbo isiriyo yemabhuraki ekodhi. Kupatsanura kwakaoma kuchengetedza mushanduro
 * Zvinhu zviri mukati me `backticks` zvinoshandurwa, kana iwe uchinge wagara uchida kuti zvive chaizvo zvakakosha

 Kana iyo `-M` / `--markdown` mureza inogoneswa:
 * Iyo pateni `] (` ichapfupikiswa kuita `](` nokudaro kugadzirisa akatyoka mamakidown link
 * A "hapana dudziro" wrapper ichaiswa yakatenderedza indented code block, inochengetedza indentation chaiyo uye nekuona kuti haina kududzirwa.
 * Kapetera ka "hapana kuturikira" ichaiswa mukati memashoko mukati me `backticks` kuti zvionekwe kuti haashandurwe

 ### Maitiro-se
 Kazhinji zvinhu zvese zvinogadziriswa semavara akajeka

 Kana zvirimo zviri HTML, zvinozonetsa kunze kwekunge wapfuura iyo `-p html` / `--process-as html` sarudzo.

 ### Sefa
 Kune iyo inodakadza: kana uchigadzira mafaera mudhairekitori, unogona kupfuura iyo `-F` / `--filter` sarudzo.
 kusefa zvinobuda zvisati zvanyorwa kune iyo faira system

 Kukosha kweiyi sarudzo kunofanirwa kuve nzira yeJS faira inotumira kunze basa rakanzi `filter`

 The `filter` basa rinofanira kuva `async` nekuti `await` pairi

 Mafaira asati anyorwa kudhisiki, zvese zviri mukati mefaira zvichapfuudzwa kune `filter` basa setambo

 Iko kukosha kwekudzoka kubva ku `filter` basa ndiyo inozonyorwa kudura

 Nokudaro, une simba rose pane zvichazonyorwa pakupedzisira

 ### Batsira
 Shandisa `-h` / `--help` kuratidza rubatsiro

 ## Unofara Kushandura!

</pre>
