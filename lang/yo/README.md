Hokeyylization
 ===========
 Orukọ naa jẹ portmanteau, itumo 'isọdibilẹ hokey'

 O jẹ hokey nitori pe o rọrun pupọ: o fi awọn okun ranṣẹ si Google Translate

 O le tumọ:
 * ohun JavaScript ti o ni awọn ifiranṣẹ ninu
 * itọsọna ti awọn faili, loorekoore

 # Ka eyi ni ede miiran
 Iwe README.md yii ti ni itumọ, ni lilo ohun elo hokeylization funrararẹ, sinu
 **[gbogbo ede ni atilẹyin nipasẹ Google Tumọ](https://cloud.google.com/translate/docs/languages)!**

 Mo ni idaniloju pe ko pe, ṣugbọn Mo nireti pe o dara ju ohunkohun lọ!

 [🇸🇦 Larubawa](../ar/README.md)
 [🇧🇩 Ede Bengali](../bn/README.md)
 [🇩🇪 Jẹmánì](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spani](../es/README.md)
 [🇫🇷 Faranse](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Itali](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tọki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Kannada](../zh/README.md)


 **[📚 ... Gbogbo Ede ...](../README.md)**
 ----

 ### Njẹ iṣoro kan wa pẹlu itumọ README yii?
 Itumọ ni pato ti atilẹba [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 le jẹ abawọn - * awọn atunṣe ṣe itẹwọgba pupọ!* Jọwọ fi ibeere kan ranṣẹ si GitHub (https://github.com/cobbzilla/yuebing/pulls),
 tabi ti o ko ba ni itunu lati ṣe iyẹn, [ṣii ọrọ kan](https://github.com/cobbzilla/yuebing/issues)

 Nigbati o ba ṣẹda ọrọ GitHub tuntun nipa itumọ kan, jọwọ ṣe:
 * pẹlu URL oju-iwe naa (daakọ/lẹẹmọ lati ọpa adirẹsi aṣawakiri)
 * pẹlu ọrọ gangan ti o jẹ aṣiṣe (daakọ/lẹẹmọ lati ẹrọ aṣawakiri)
 * fi inurere funni ni imọran itumọ ti o dara julọ
 * **E dupe!**

 # Awọn akoonu
 * [Orisun](#Orisun)
 * [Atilẹyin ati Ifowopamọ](#Atilẹyin-ati-Ifunwo)
 * [Fifi sori ẹrọ](#Fifi sori ẹrọ)
 * [Ṣeto](#Eto)
 * [Titumọ faili orisun okun JavaScript kan](#Translating-a-JavaScript-string-resource-file)
 * [Titumọ iwe ilana ti awọn faili ọrọ](#Translating-a-directory-of-text-files)
 * [Awọn aṣayan miiran](#Awọn aṣayan miiran)

 ## Orisun
 * [hokeylization lori GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization lori npm](https://www.npmjs.com/package/hokeylization)

 ## Atilẹyin ati igbeowosile
 Mo ngbiyanju lati jẹ oludasilẹ sọfitiwia orisun ṣiṣi ọjọgbọn. Mo ti ṣiṣẹ ninu
 ile-iṣẹ sọfitiwia fun ọpọlọpọ ọdun, Mo ti bẹrẹ awọn ile-iṣẹ aṣeyọri ati ta wọn si awọn ile-iṣẹ gbangba.
 Laipẹ Mo padanu iṣẹ mi, ati pe Emi ko ni iṣẹ miiran ti o laini gaan

 Nitorinaa Emi yoo gbiyanju kikọ sọfitiwia iranlọwọ ati rii boya iyẹn ṣiṣẹ

 Emi yoo dupẹ lọwọ pẹlu otitọ paapaa ohun ti o kere julọ [ilowosi oṣooṣu nipasẹ Patreon](https://www.patreon.com/cobbzilla)

 ## Fifi sori ẹrọ
 Lati lo irinṣẹ laini aṣẹ, fi sori ẹrọ ni lilo `npm` tabi `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Lati lo bi ile-ikawe, fi ẹya `lite` ẹrọ, eyiti o kere pupọ:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Lẹhinna wo iranlọwọ fun aṣẹ `hokey` :

    hokey --help
    hokey -h

 Ṣe o fẹ lati wo iṣẹjade ni ede rẹ tabi ede miiran?

 `hokey` gbidanwo lati wa ede naa ni adaṣe lati awọn oniyipada agbegbe ikarahun rẹ

 O le fi ipa mu ede kan nipa tito iyipada ayika `LC_ALL` :

    LC_ALL=it hokey --help

 Ṣe akiyesi pe ti o ba ti fi `hokeylization-lite` sori ẹrọ, iranlọwọ aṣẹ wa ni Gẹẹsi nikan

 ## Ṣeto
 Ṣeto oniyipada ayika `GOOGLE_TRANSLATE_PROJECT_ID` lati ṣe idanimọ iṣẹ akanṣe Google Translate rẹ

 Ṣeto iyipada ayika `GOOGLE_APPLICATION_CREDENTIALS` si awọn iwe-ẹri JSON ti o ṣe igbasilẹ
 lẹhin ti o rii bi ijẹrisi ṣe n ṣiṣẹ lori awọsanma Google (o le jẹ igbadun)

 Ti o ba nṣiṣẹ lati koodu orisun, o tun le fi awọn wọnyi sinu faili `.env` ni orisun
 Ilana ti wọn yoo kojọpọ ni akoko ṣiṣe nipasẹ [dotenv](https://www.npmjs.com/package/dotenv)

 ## Titumọ faili orisun okun JavaScript kan
 Tabili okun rẹ ** gbọdọ *** wa ninu faili JavaScript ni ọkan ninu awọn fọọmu meji wọnyi:

 ES6 okeere:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS okeere

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ti faili yii ba jẹ orukọ `myfile.en.js` , o le tumọ rẹ si Spani ati Jẹmánì pẹlu:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` ti o wa loke jẹ pataki - o jẹ ọrọ ti o wa ni ipamọ ninu ohun elo yii!

 `LANG` ni a rọpo pẹlu koodu ede fun awọn faili iṣelọpọ

 Nitorinaa aṣẹ ti o wa loke ṣẹda awọn faili:

    myfile.es.js
    myfile.de.js

 Aṣayan `-l` / `--languages` jẹ atokọ ti o ya sọtọ komama ti awọn koodu ede ISO
 [ti Google Tumọ ṣe atilẹyin](https://cloud.google.com/translate/docs/languages)

 Ti faili iṣẹjade ba wa tẹlẹ, yoo ṣe ayẹwo lati pinnu iru awọn bọtini ti wa tẹlẹ.
 Awọn bọtini to wa ko ni tumọ. Awọn itumọ fun awọn bọtini ti o padanu yoo jẹ ipilẹṣẹ ati fikun
 si opin ohun JS. Gbogbo faili ti wa ni nigbagbogbo tunkọ.

 Lati fi ipa titumọ gbogbo awọn bọtini, lo `-f` / `--force`

 ## Titumọ iwe ilana ti awọn faili ọrọ
 O tun le tumọ iwe ilana ti awọn faili. hokeylization yoo recursively be gbogbo
 faili ninu awọn liana ati ṣiṣe awọn awọn akoonu ti nipasẹ Google Translate, ki o si fi awọn ti o wu jade
 si faili ti a npè ni aami kan ninu igi itọnisọna lọtọ

 Nigbati ibi-afẹde ti itumọ rẹ jẹ itọsọna kan, ipo yii ti ṣiṣẹ

 Aṣayan `-o` / `--outfile` ni pato ilana ti o wu jade

 ** IKILỌ NLA ***: Nigbati o ba n tumọ awọn ilana, ** MAA ṢE** pato ilana iṣelọpọ kan
 ti o wa laarin rẹ input liana! Ti o ba ṣe eyi, iwọ yoo:
 * jeki ailopin recursion
 * Ṣiṣe owo Google rẹ soke
 * fọwọsi disk rẹ
 * ni kere fun igbadun

 Eyi ni apẹẹrẹ ohun ti * ko ṣe *:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Nigbati eyi ba ṣiṣẹ, awọn faili ti a tumọ ni a kọ si `templates/es` , ati nitorinaa di tuntun
 awọn faili orisun lati tumọ, niwon wọn wa labẹ `templates/` - ilana yii tẹsiwaju
 lailai, ma ṣe o!

 #### Lilo to tọ
 O dara, jẹ ki a sọ pe o ni diẹ ninu awọn awoṣe imeeli ninu itọsọna kan:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Lati tumọ gbogbo awọn wọnyi si Spani ati Jẹmánì, ṣiṣe:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Ninu eyi ti o wa loke, `LANG` jẹ ọrọ ipamọ ati pe yoo rọpo pẹlu koodu ede ISO

 Kini yoo ṣẹlẹ nigbati eyi ba ṣiṣẹ:
 * Awọn `templates/email/es` ' ati `templates/email/de` ilana yoo ṣẹda (ti wọn ko ba si)
 * Gbogbo faili ti o wa ninu `templates/email/en` ni yoo tumọ si Spani ati Jẹmánì
 * Awọn faili iṣẹjade ti o wa tẹlẹ kii yoo ṣe atunbi ayafi ti o ba lo `-f` / `--force`
 * Iwọ yoo pari pẹlu ilana ilana kanna ati awọn faili laarin `es` ati `de` bii o ni labẹ `en`

 ## Awọn aṣayan miiran

 ### Igbẹ gbẹ
 `-n` / `--dry-run` lati ṣe afihan ohun ti yoo ṣee ṣe, ṣugbọn maṣe ṣe awọn ipe API eyikeyi tabi kọ eyikeyi awọn faili

 ### Agbara
 `-f` / `--force` lati tuntumọ awọn itumọ nigbagbogbo, paapaa ti wọn ba wa tẹlẹ

 ### Baramu
 `-m` / `--match` lati se idinwo awọn faili ti a ṣe ilana nigba ti nṣiṣẹ ni ipo liana

 O le ma fẹ nigbagbogbo tumọ * gbogbo * faili ninu itọsọna orisun rẹ si itọsọna ibi-afẹde rẹ

 Iye `-m` / `--match` jẹ regex (ṣọra awọn ofin itọka ikarahun!)
 awọn faili wo ni o yẹ ki o tumọ

 Nigbati o ba wa ni iyemeji, o le darapọ aṣayan yii pẹlu `-n` / `--dry-run` lati wo iru awọn faili ti yoo tumọ

 ### Iyasoto
 Nigba miiran `-m` rẹ baramu ọpọlọpọ awọn faili. Lo `-e` / `--excludes` lati yọkuro ni gbangba
 awọn faili ti bibẹẹkọ yoo ti baamu

 O le ṣe atokọ ọpọlọpọ awọn regexes, ti o yapa nipasẹ awọn alafo

 Lilo ti o wọpọ yoo jẹ: `--excludes node_modules dist \.git build tmp`

 ### Handlebars
 Awọn gbolohun ọrọ lati tumọ le ni awọn awoṣe `{{ handlebars }}` ninu, boya pẹlu meji tabi mẹta àmúró

 O ṣee ṣe * KO * fẹ nkan ti o wa ninu awọn awoṣe wọnyẹn lati tumọ

 `-H` / `--handlebars` , ati pe ohunkohun ninu `{{ ... }}` ko ni tumọ

 ### Isalẹ
 Markdown kii ṣe ọrọ tabi html, nitorinaa Google Translate ni awọn iṣoro diẹ pẹlu rẹ

 `-M` / `--markdown` jẹ́ kí ìṣàmúlò àkànṣe fún àwọn fáìlì isàpamọ́

 Pẹlu awọn faili isamisi, ti o ko ba lo asia `-M` , o ṣee ṣe ki o rii awọn iṣoro wọnyi:
 * Awọn ọna asopọ ti o bajẹ. Ninu itumọ, kikọ aaye kan han lẹhin apejuwe ọna asopọ isamisi ti pari (pẹlu `]` ) ṣugbọn
 ṣaaju ki ọna asopọ ibi-afẹde rẹ to bẹrẹ (pẹlu `(` ) Eyi fa isamisi lati ṣe ti ko tọ, ati ọna asopọ naa
 ti bajẹ nigba wiwo iwe-ipamọ naa.
 * Awọn bulọọki koodu ni itumọ. Google tumọ ko mọ kini isamisi ka koodu ati ohun ti kii ṣe
 * Aye ti ko tọ fun awọn bulọọki koodu indented. Aaye jẹ soro lati tọju ni itumọ
 * Awọn nkan inu `backticks` yoo ni itumọ, nigbati o fẹrẹ fẹ nigbagbogbo lati jẹ awọn iye gidi

 Nigbati `-M` / `--markdown` ti ṣiṣẹ:
 * Apẹrẹ `](` yoo jẹ dipọ si `](` nitorinaa atunṣe awọn ọna asopọ isamisi ti o bajẹ
 * Ohun ipari “ko si itumọ” ni yoo gbe ni ayika awọn bulọọki koodu indented, titọju ifisilẹ to dara ati rii daju pe wọn ko tumọ
 * A yoo gbe iwe-itumọ “ko si itumọ” ni ayika ọrọ laarin `backticks` lati rii daju pe wọn ko tumọ wọn

 ### Ilana-bi
 Ni deede ohun gbogbo ti ni ilọsiwaju bi ọrọ itele

 Ti àkóónú rẹ ba jẹ HTML, yoo jẹ titọ ayafi ti o ba kọja `-p html` / `--process-as html`

 ### Ajọ
 Fun adventurous: nigba ṣiṣe awọn faili ni ilana, o le kọja `-F` / `--filter`
 lati ṣe àlẹmọ iṣelọpọ ṣaaju ki o to kọ ọ si eto faili

 Iye aṣayan yii gbọdọ jẹ ọna si faili JS ti o ṣe okeere iṣẹ kan ti a npè ni `filter`

 Iṣẹ `filter` gbọdọ jẹ `async` ' nitori a yoo pe `await` sori rẹ

 Ṣaaju ki o to kọ awọn faili si disiki, gbogbo akoonu faili yoo kọja si iṣẹ `filter` gẹgẹbi okun

 Iye ipadabọ lati iṣẹ `filter` jẹ ohun ti yoo kọ gangan si ibi ipamọ

 Nitorinaa, o ni iṣakoso lapapọ lori ohun ti yoo kọ nikẹhin

 ### Egba Mi O
 Lo `-h` / `--help` lati fi iranlọwọ han

 ## Itumọ Ayọ!

</pre>
