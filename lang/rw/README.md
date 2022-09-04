Hokeylisation
 =============
 Izina ni portmanteau, bisobanura ngo 'hokey localisation'

 Nibyiza kuko biroroshye cyane: byohereza imirongo kuri Google Translate

 Urashobora guhindura:
 * ikintu cya JavaScript gikubiyemo ubutumwa
 * ububiko bwamadosiye, mubisubiramo

 # Soma ibi mu rundi rurimi
 Iyi nyandiko ya README.md yarahinduwe, ikoresheje igikoresho cya hokeylisation ubwayo, muri
 ** [ururimi rwose rushyigikiwe na Google Translate] (https://cloud.google.com/translate/docs/ururimi)! **

 Nzi neza ko bidatunganye, ariko nizere ko biruta ubusa!

 [🇸🇦 Icyarabu] (lang / ar / README.md)
 [🇧🇩 Ikibengali] (lang / bn / README.md)
 [🇩🇪 Ikidage] (lang / de / README.md)
 [🇺🇸 Icyongereza] (lang / en / README.md)
 [🇪🇸 Icyesipanyoli] (lang / es / README.md)
 [🇫🇷 Igifaransa] (lang / fr / README.md)
 [🇹🇩 Hausa] (lang / ha / README.md)
 [🇮🇳 Hindi] (lang / hi / README.md)
 [🇮🇩 Indoneziya] (lang / id / README.md)
 [🇮🇹 Umutaliyani] (lang / it / README.md)
 [🇯🇵 Ikiyapani] (lang / ja / README.md)
 [🇰🇷 Igikoreya] (lang / ko / README.md)
 [🇮🇳 Maranthi] (lang / mr / README.md)
 [Ish Igipolonye] (lang / pl / README.md)
 [🇧🇷 Igiporutugali] (lang / pt / README.md)
 [🇷🇺 Ikirusiya] (lang / ru / README.md)
 [Wa Igiswahiri] (lang / sw / README.md)
 [🇵🇭 Tagalog] (lang / tl / README.md)
 [🇹🇷 Turukiya] (lang / tr / README.md)
 [🇵🇰 Urdu] (lang / ur / README.md)
 [🇻🇳 Abanya Viyetinamu] (lang / vi / README.md)
 [🇨🇳 Igishinwa] (lang / zh / README.md)


 ** [📚 ... Indimi zose ...] (lang / README.md) **
 ----

 ### Hari ikibazo cyubu busobanuro bwa README?
 Ubu busobanuro bwihariye bwumwimerere [README] (https://github.com/cobbzilla/yuebing/blob/master/README.md)
 irashobora kuba ifite inenge - * gukosora biremewe cyane! * Nyamuneka ohereza [gukurura icyifuzo kuri GitHub] (https://github.com/cobbzilla/yuebing/pulls),
 cyangwa niba utishimiye gukora ibyo, [fungura ikibazo] (https://github.com/cobbzilla/yuebing/issues)

 Mugihe uremye ikibazo gishya cya GitHub kubyerekeye ubusobanuro, nyamuneka kora:
 * shyiramo urupapuro rwa URL (kopi / komatanya uhereye kuri aderesi ya aderesi)
 * shyiramo inyandiko nyayo itariyo (kopi / komatanya kuri mushakisha)
 * mutange igitekerezo cyo gusobanura neza
 * ** Urakoze! **

 # Ibirimo
 * [Inkomoko] (# Inkomoko)
 * [Inkunga n'inkunga] (# Inkunga-na-Inkunga)
 * [Kwinjiza] (# Kwinjiza)
 * [Gushiraho] (# Gushiraho)
 *
 * [Guhindura ububiko bwamadosiye yinyandiko] (# Guhindura-a-ububiko-bw-inyandiko-dosiye)
 * [Ubundi buryo] (# Ibindi-amahitamo)

 ## Inkomoko
 * [hokeylisation kuri GitHub] (https://github.com/cobbzilla/hokeylization)
 * [hokeylisation kuri npm] (https://www.npmjs.com/package/hokeylization)

 ## Inkunga ninkunga
 Ndagerageza kuba umuhanga ufungura isoko yumwuga. Nakoraga
 inganda za software imyaka myinshi, natangiye ibigo byatsinze ndabigurisha mubigo bya leta.
 Mperutse kubura akazi, kandi rwose nta kindi gikorwa mfite ku murongo

 Ngiye rero kugerageza kwandika software ifasha ndebe niba ibyo bikora

 Ndashimira byimazeyo nintoya [umusanzu wa buri kwezi ukoresheje Patreon] (https://www.patreon.com/cobbzilla)

 ## Kwinjiza
 Kugira ngo ukoreshe igikoresho cyumurongo, shyiramo ukoresheje `npm` `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Gukoresha nk'isomero, shyiramo verisiyo ya `lite` , ni nto cyane:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Noneho reba ubufasha kubuyobozi bwa `hokey` :

    hokey --help
    hokey -h

 Urashaka kubona ibisohoka muri langauge yawe cyangwa urundi rurimi?

 `hokey` igerageza kumenya ururimi mu buryo bwikora uhereye kubidukikije bya shell

 Urashobora guhatira ururimi mugushiraho ibidukikije bya `LC_ALL` :

    LC_ALL=it hokey --help

 Menya ko niba washyizeho `hokeylization-lite` , ubufasha bufasha buraboneka gusa mucyongereza

 ## Gushiraho
 Shiraho ibidukikije bya `GOOGLE_TRANSLATE_PROJECT_ID` kugirango umenye umushinga wawe wo guhindura Google

 Shiraho ibidukikije bya `GOOGLE_APPLICATION_CREDENTIALS` bihindura ibyangombwa bya JSON wakuyemo
 nyuma yo kumenya uburyo kwemeza bikora kubicu bya Google (birashobora gushimisha)

 Niba urimo ukora kuva kode yinkomoko, urashobora kandi kubishyira muri dosiye ya `.env`
 ububiko bazapakirwa mugihe cyogukoresha binyuze kuri [dotenv] (https://www.npmjs.com/package/dotenv)

 ## Guhindura JavaScript umugozi wumutungo dosiye
 Imbonerahamwe yawe yumugozi ** igomba ** kuba muri dosiye ya JavaScript muri bumwe murubwo buryo bubiri:

 ES6 yohereza hanze:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ibicuruzwa rusange

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Niba iyi dosiye yariswe `myfile.en.js` , urashobora kuyihindura mu cyesipanyoli n’ikidage hamwe na:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 " `LANG` haruguru ni umwihariko - ni ijambo ryabitswe muri iki gikoresho!

 `LANG` yasimbujwe kode yururimi kubisohoka dosiye

 Rero itegeko ryavuzwe haruguru rikora dosiye:

    myfile.es.js
    myfile.de.js

 Ihitamo rya `-l` / `--languages` ni urutonde rwatandukanijwe na koma y'ururimi rwa ISO
 [ushyigikiwe na Google Translate] (https://cloud.google.com/translate/docs/ururimi)

 Niba dosiye isohoka imaze kubaho, izasuzumwa kugirango hamenyekane urufunguzo ruriho.
 Urufunguzo ruriho ntiruzahindurwa. Ubusobanuro bwimfunguzo zabuze bizakorwa kandi byongeweho
 kugeza ku iherezo ryikintu cya JS. Idosiye yose ihora yandikwa.

 Guhatira retranslation urufunguzo rwose, koresha uburyo bwa `-f` / `--force`

 ## Guhindura ububiko bwamadosiye yinyandiko
 Urashobora kandi guhindura ububiko bwa dosiye. hokeylisation izasubiramo buri gihe
 dosiye mububiko hanyuma ukore ibiyirimo ukoresheje Google Translate, hanyuma ubike ibisohoka
 Kuri Idosiye Yiswe Idosiye mu gitabo cyihariye

 Iyo intego yubusobanuro bwawe ari ububiko, ubu buryo burashoboka

 Ihitamo rya `-o` / `--outfile` ryerekana ububiko bwasohotse

 ** UMUBURO NINI **: Mugihe uhindura ububiko, ** NTIBISANZWE ** kwerekana ibisohoka mububiko
 ibyo biri mububiko bwawe bwinjira! Nukora ibi, uzabikora:
 * gutera kwisubiramo bitagira akagero
 * koresha fagitire yawe ya Google
 * kuzuza disiki yawe
 * kwishimisha gake

 Dore urugero rwibyo * tutagomba gukora *:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Iyo iyi ikora, dosiye zahinduwe zandikiwe `templates/es` , bityo ziba shyashya
 Inkomoko ya dosiye yo guhindura, kuva bari munsi ya `templates/` - iyi nzira irakomeza
 iteka, ntukore!

 #### Gukosora neza
 Nibyiza, reka tuvuge ko ufite imeri yerekana imeri mububiko:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Guhindura ibyo byose mu cyesipanyoli n’ikidage, koresha:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Muri hejuru, `LANG` nijambo ryabitswe kandi rizasimbuzwa kode y'ururimi rwa ISO

 Bigenda bite iyo hejuru yavuzwe haruguru:
 * `templates/email/es` `templates/email/de` ububiko buzashyirwaho (niba bidahari)
 * Buri dosiye iri muri `templates/email/en` izahindurwa mu cyesipanyoli n’ikidage
 * Ibisohoka biriho ntibishobora kuvugururwa keretse ukoresheje `-f` / `--force`
 * Uzarangiza ufite imiterere `es` hamwe namadosiye muri `de` nkuko ufite munsi ya `en`

 ## Ubundi buryo

 ### Kuma
 `-n` / `--dry-run` kugirango werekane icyakorwa, ariko ntugakore guhamagara API cyangwa kwandika dosiye iyo ari yo yose

 ### Imbaraga
 `-f` / `--force` kugirango uhore uhindura ibisobanuro, nubwo byaba bihari

 ### Umukino
 `-m` / `--match` kugirango ugabanye amadosiye yatunganijwe mugihe ukora mububiko-buryo

 Ntushobora guhora ushaka guhindura * buri * dosiye mububiko bwinkomoko yawe

 Agaciro ka `-m` / `--match` ihitamo ni regex (witondere ibishushanyo mbonera byerekana!) Byerekana
 ni ayahe dosiye agomba guhindurwa

 Mugihe ushidikanya, urashobora guhuza ubu buryo na `-n` / `--dry-run` kugirango urebe dosiye zahindurwa

 ### Ukuyemo
 Rimwe na rimwe, `-m` yawe ihuye na dosiye nyinshi. Koresha uburyo bwa `-e` / `--excludes` kugirango ukuremo neza
 amadosiye ubundi yaba yarahuye

 Urashobora gutondekanya regex nyinshi, zitandukanijwe numwanya

 Imikoreshereze isanzwe yaba: `--excludes node_modules dist \.git build tmp`

 ### Imiyoboro
 Imirongo yo guhindura ishobora kuba irimo `{{ handlebars }}` inyandikorugero, haba hamwe na bibiri cyangwa bitatu bigoramye

 Birashoboka ko * NTIBIKWifuza * ibintu biri muri izo nyandikorugero byahinduwe

 Hisha ibendera rya `-H` / `--handlebars` , kandi ikintu cyose kiri `{{ ... }}` ntikizahindurwa

 ### Kwamamaza
 Markdown ntabwo ari inyandiko cyangwa html, bityo Google Translate ifite ibibazo bimwe nayo

 Ibendera rya `-M` / `--markdown` rituma habaho uburyo bwihariye bwo gukora dosiye

 Hokeylizer ikemura ibintu neza, ariko hamwe namadosiye yerekana, ushobora kenshi ibibazo:
 * Amahuza yacitse. Mubisobanuro, umwanya wimiterere ugaragara nyuma yikimenyetso cyo guhuza ibisobanuro birangiye (hamwe na `]` ) ariko
 mbere yuko intego yayo ihuza itangira (hamwe na `(` ) .Ibyo bitera ikimenyetso cyo gukora nabi, hamwe nu murongo
 ivunika iyo ureba inyandiko.
 * Guhagarika kode bisobanurwa. Google translate ntabwo izi ikimenyetso cyerekana kode nicyo idakora
 * Umwanya utari wo wo guhagarika kode yatanzwe. Umwanya uragoye kubika mubisobanuro
 * Ibintu biri imbere ya `backticks` bizahindurwa, mugihe hafi buri gihe ushaka ko biba indangagaciro

 Iyo ibendera rya `-M` / `--markdown` :
 * Igishushanyo `] (` kizahuzwa na `](` bityo ukosore amahuza yamenetse
 * Ipfunyika "nta musemuzi" izashyirwa hafi ya kode yatanzwe, irinde indente ikwiye kandi urebe ko idahinduwe.
 * Ipfunyika "nta musemuzi" izashyirwa hafi yinyandiko muri " `backticks` kugirango barebe ko zidahinduwe

 ### Inzira-nk
 Mubisanzwe ibintu byose bitunganywa nkinyandiko isanzwe

 Niba ibikubiyemo ari HTML, bizahinduka keretse unyuze kuri `-p html` / `--process-as html`

 ### Akayunguruzo
 Kubitangaza: mugihe utunganya dosiye mububiko, urashobora gutambutsa `-F` / `--filter`
 gushungura ibisohoka mbere yuko byandikwa kuri dosiye

 Agaciro kiyi option igomba kuba inzira ya dosiye ya JS yohereza hanze imikorere yitwa `filter`

 Imikorere ya " `filter` igomba kuba `async` `await` izahamagarwa

 Mbere yuko dosiye zandikwa kuri disiki, ibiri muri dosiye byose bizanyuzwa mumikorere ya 'filteri' `filter`

 Garuka agaciro kuva mumikorere ya `filter` nicyo kizandikwa mububiko

 Rero, ufite igenzura ryuzuye kubizarangira

 ### Ubufasha
 Koresha `-h` / `--help` kwerekana ubufasha

 ## Guhindura neza!

</pre>
