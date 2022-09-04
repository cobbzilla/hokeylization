Hokeylization
 =============
 Ko te ingoa he portmanteau, ko te tikanga 'hokey localization'

 He hokey na te mea he tino ngawari: ka tuku aho ki a Google Translate

 Ka taea e koe te whakamaori:
 * he ahanoa JavaScript kei roto nga karere
 * he whaiaronga o nga konae, he recursively

 # Panuitia tenei ki tetahi atu reo
 Kua whakamaoritia tenei tuhinga README.md, ma te whakamahi i te taputapu hokeylization ake, ki roto
 **[nga reo katoa e tautokohia ana e Google Translate](https://cloud.google.com/translate/docs/languages)!**

 E mohio ana ahau ehara i te mea tino tika, engari ko taku tumanako he pai ake i te kore!

 [🇸🇦 Arapi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Tiamana](../de/README.md)
 [🇺🇸 Ingarihi](../en/README.md)
 [🇪🇸 Paniora](../es/README.md)
 [🇫🇷 Wīwī](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Initonia](../id/README.md)
 [🇮🇹 Itari](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Poroni](../pl/README.md)
 [🇧🇷 Potiti](../pt/README.md)
 [🇷🇺 Ruhia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Hainamana](../zh/README.md)


 **[📚 ... Nga Reo Katoa ...](../README.md)**
 ----

 ### He raru kei tenei whakamaoritanga o te README?
 Ko tenei whakamaoritanga o te [README] taketake(https://github.com/cobbzilla/yuebing/blob/master/README.md)
 kei te he -- *e tino manakohia nga whakatikatika!* Tukuna mai he [tono toia ki a GitHub](https://github.com/cobbzilla/yuebing/pulls),
 ki te kore koe e pai ki te mahi i tera, [whakatuwhera i tetahi take](https://github.com/cobbzilla/yuebing/issues)

 Ina hanga e koe he take GitHub hou mo te whakamaoritanga, mahia:
 * whakauruhia te URL wharangi (kape/whakapiri mai i te pae wahitau tirotiro)
 * whakaurua te tuhinga tika e he ana (tārua/whakapiri mai i te kaitirotiro)
 * Tena koa tuku mai he whakaaro mo te whakamaoritanga pai ake
 * **Mauruuru!**

 # Ihirangi
 * [Putake](#Source)
 * [Tautoko me te Putea](#Tautoko-me-Pūtea)
 * [Tāuta](#Tāuta)
 * [Tautuhi](#Tautuhi)
 * [Kei te whakamaori i te konae rauemi aho JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Kei te whakamaori i te whaiaronga o nga konae tuhinga](#Translating-a-directory-of-text-files)
 * [Ko etahi atu whiringa](#Other-options)

 ## Puna
 * [hokeylization i GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Tautoko me te Putea
 Kei te ngana ahau ki te noho hei kaiwhakawhanake rorohiko puna tuwhera ngaio. I mahi ahau i roto
 te ahumahi rorohiko mo nga tau maha, kua timata ahau i nga kamupene angitu me te hoko atu ki nga kamupene a te iwi.
 No tata nei ka ngaro taku mahi, a karekau he mahi ke atu i te rarangi

 Na ka ngana ahau ki te tuhi i nga raupaparorohiko awhina me te kite mena ka mahi tera

 Ka maioha ahau ahakoa te iti rawa [koha-marama ma Patreon](https://www.patreon.com/cobbzilla)

 ## Tāutanga
 Hei whakamahi i te taputapu raina whakahau, whakauruhia ma te whakamahi i te `npm` , i te `yarn` yarn` ranei:

    npm install -g hokeylization
    yarn global add hokeylization

 Hei whakamahi hei whare pukapuka, whakauruhia te putanga `lite` , he iti ake:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Na ka titiro ki te awhina mo te tono `hokey` :

    hokey --help
    hokey -h

 Kei te hiahia koe ki te kite i nga putanga i to reo, i tetahi atu reo ranei?

 Ka ngana a `hokey` ki te kimi aunoa i te reo mai i nga taurangi taiao o to anga

 Ka taea e koe te akiaki i tetahi reo ma te tautuhi i te taurangi taiao `LC_ALL` :

    LC_ALL=it hokey --help

 Kia mahara mena kua whakauruhia e koe te `hokeylization-lite` , kei te waatea noa te awhina whakahau i te reo Ingarihi

 ## Tatūnga
 Tautuhia te taurangi taiao `GOOGLE_TRANSLATE_PROJECT_ID` hei tautuhi i to kaupapa Whakamaori Google

 Tautuhia te taurangi taiao `GOOGLE_APPLICATION_CREDENTIALS` ki nga taipitopito JSON i tikiakehia e koe
 i muri i te whakaaro me pehea te mahi motuhēhēnga i runga i te kapua Google (he ngahau)

 Mena kei te rere koe mai i te waehere puna, ka taea ano e koe te whakauru i enei ki te `.env` ki te puna
 whaiaronga ka utaina i te wa whakahaere ma [dotenv](https://www.npmjs.com/package/dotenv)

 ## Te whakamaori i te konae rauemi aho JavaScript
 Ko to ripanga aho **me** kei roto i te konae JavaScript i tetahi o enei ahua e rua:

 ES6 kaweake:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS kaweake

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Mēnā i tapaina tēnei kōnae `myfile.en.js` , ka taea e koe te whakamāori ki te reo Pāniora me te Tiamana mā:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 He mea motuhake te `LANG` kei runga ake nei -- he kupu rahui i roto i tenei taputapu!

 Ka whakakapihia te `LANG` ki te waehere reo mo nga konae whakaputa

 Na te whakahau i runga ake nei ka hanga i nga konae:

    myfile.es.js
    myfile.de.js

 Ko te kōwhiringa `-l` / `--languages` he rarangi wehe piko o nga waehere reo ISO
 [tautokohia e Google Translate](https://cloud.google.com/translate/docs/languages)

 Mēnā kei te tīariari kē te kōnae whakaputa, ka tirohia kia mōhiotia ko ēhea ngā kī kei te noho kē.
 E kore e whakamaoritia nga taviri o mua. Ko nga whakamaoritanga mo nga taviri ngaro ka hangaia me te taapiri
 ki te mutunga o te ahanoa JS. Ka tuhia ano te katoa o nga konae.

 Hei akiaki i te whakamaoritanga ki nga taviri katoa, whakamahia te kōwhiringa `-f` / `--force`

 ## Te whakamaori i te raarangi o nga konae tuhinga
 Ka taea hoki te whakamaori i te raarangi o nga konae. Ka toro atu te hokeylization ki ia tangata
 kōnae i roto i te whaiaronga me te whakahaere i ona ihirangi ma te Whakamaori Google, ka tiakina te putanga
 ki tetahi kōnae e rite ana te ingoa i roto i te rakau whaiaronga motuhake

 Ina he whaiaronga te whainga o to whakamaoritanga, ka whakahohea tenei aratau

 Ko te kōwhiringa `-o` / `--outfile` e tohu ana i te whaiaronga putanga

 **TUPATOTANGA NUI**: I te wa e whakamaori ana i nga raarangi whaiaronga, ** KAUA E ** te tohu i tetahi raarangi whakaputa
 kei roto tena i to raarangi whakauru! Ki te mahi koe i tenei, ka:
 * whakakorikori mutunga kore
 * whakahaere i to pire Google
 * whakakiia to kōpae
 * iti ake te ngahau

 Anei tetahi tauira o nga mea *kaore e mahia*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Ina haere ana tenei, ka tuhia nga konae kua whakamaoritia ki `templates/es` , ka noho hou
 kōnae puna hei whakamaori, i te mea kei raro i te `templates/` -- ka haere tonu tenei tukanga
 mo ake tonu atu, kaua e mahia!

 #### Whakamahi tika
 Ae, me kii kei a koe etahi tauira imeera kei roto i tetahi raarangi:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Hei whakamaori i enei katoa ki te reo Paniora me Tiamana, whakahaere:

    hokey -l es,de -o templates/email/LANG templates/email/en

 I runga ake nei, `LANG` he kupu kua rahuitia ka whakakapia ki te waehere reo ISO

 He aha te mea ka rere te mea i runga ake nei:
 * Ka waihangahia nga `templates/email/es` me te `templates/email/de` (mehemea karekau)
 * Ko ia konae kei roto i te `templates/email/en` ka whakamaoritia ki te reo Paniora me Tiamana
 * Ko nga konae putanga o naianei e kore e hanga hou mena ka whakamahi koe i te `-f` / `--force`
 * Ka mutu he hanganga whaiaronga riterite me nga konae kei roto i `es` me te `de` penei i a koe i raro i `en`

 ## Ētahi atu kōwhiringa

 ### Rere maroke
 Tukuna `-n` / `--dry-run` ki te whakaatu i nga mahi ka mahia, engari kaua e waea ki te API me te tuhi i nga konae

 ### Kaha
 Tukua `-f` / `--force` ki te whakahou i nga whakamaoritanga i nga wa katoa, ahakoa kei te noho tonu

 ### Whakataetae
 Tukua `-m` / `--match` ki te whakawhāiti i nga konae ka tukatukahia ina rere ana i te aratau-whaiaro

 Kaore pea koe e hiahia ki te whakamaori i nga *katoa* konae kei roto i to whaiaronga puna ki to raarangi whainga

 Ko te uara o te kōwhiringa `-m` / `--match` he regex (kia tupato ki nga ture whakahua anga!) e tohu ana
 ko ēhea kōnae me whakamāori

 Ki te ruarua koe, ka taea e koe te whakakotahi i tenei whiringa me te `-n` / `--dry-run` kia kite ko wai nga konae ka whakamaoritia

 ### Karekau
 I etahi wa ka rite to `-m` ki te maha o nga konae. Whakamahia te kōwhiringa `-e` / `--excludes` ki te whakakore rawa
 ko nga konae ka taurite

 Ka taea e koe te whakarārangi i ngā regex maha, ka wehea e ngā mokowā

 Ko te whakamahinga noa ko: `--excludes node_modules dist \.git build tmp`

 ### Pae kakau
 Kei roto pea i nga aho hei whakamaori he tauira `{{ handlebars }}` , me rua, e toru ranei nga taiapa mingimingi

 Koe pea *KORE* e hiahia ana kia whakamaoritia nga mea kei roto i aua tauira

 Tukuna te haki `-H` / `--handlebars` , a ko nga mea katoa i roto i `{{ ... }}` e kore e whakamaoritia

 ### Tohutohu
 Ko Markdown ehara i te tuhinga, i te html ranei, no reira he uaua a Google Translate

 Ko te `-M` / `--markdown` ka taea te whakahaere motuhake mo nga konae tohu

 Me nga konae tohu, ki te kore koe e whakamahi i te haki `-M` , ka kitea pea enei raru:
 * Nga hononga pakaru. I roto i te whakamaoritanga, ka puta he mokowhiti i muri i te mutunga o te whakamaarama hono tohu (me te `]` ) engari
 i mua i te tiimata o tana hononga whainga (me te `(` ). Na tenei ka he te whakaatu i te tohu, me te hono
 kua pakaru i te wa e tiro ana i te tuhinga.
 * Ka whakamaoritia nga poraka waehere. Ko te whakamaori a Google kaore e mohio he aha te tohu tohu e kiia ana he waehere me nga mea kaore
 * He mokowā hē mō ngā poraka waehere kua nukuhia. He uaua ki te pupuri i te mokowhiti i te whakamaoritanga
 * Ko nga mea o roto o `backticks` ka whakamaoritia, ina tata ki te hiahia koe he uara mooni

 Ina whakahohea te haki `-M` / `--markdown` :
 * Ko te tauira `] (` ka whakapoapoa ki `](` ka whakatika i nga hononga tohu kua pakaru
 * Ka whakanohohia he takai "kore whakamaori" huri noa i nga poraka waehere kua nukuhia, kia mau te nuku tika me te whakarite kia kaua e whakamaoritia.
 * Ka whakanohoia he takai "kore whakamaori" ki te taha o te kuputuhi i roto i `backticks` kia kore ai e whakamaoritia

 ### Tukanga-rite
 Ko te tikanga ka tukatukahia nga mea katoa hei tuhinga noa

 Mēnā he HTML tō ihirangi, ka hee ki te kore e tukuna e koe te kōwhiringa `-p html` / `--process-as html`

 ### Tātari
 Mo te hunga rikarika: i te wa e tukatuka ana i nga konae ki roto i te raarangi, ka taea e koe te tuku i te `-F` / `--filter`
 ki te tātari i te putanga i mua i te tuhi ki te punaha konae

 Ko te uara o tenei kowhiringa he ara ki te konae JS ka kaweake i tetahi taumahi ko `filter`

 Ko te mahi `filter` me `async` no te mea ka karangahia te `await` ki runga

 I mua i te tuhi i nga konae ki te kōpae, ka tukuna katoatia nga ihirangi o te konae ki te mahi `filter` hei aho

 Ko te uara whakahoki mai i te mahi `filter` ko te mea ka tuhia ki te rokiroki

 No reira, kei a koe te mana katoa mo nga mea ka tuhia

 ### Awhina
 Whakamahia `-h` / `--help` hei whakaatu awhina

 ## Harikoa Whakamaori!

</pre>
