Hokeyleiddiad
 ============
 Portmanteau yw'r enw, sy'n golygu 'lleoleiddio hokey'

 Mae'n hokey oherwydd mae'n syml iawn: mae'n anfon llinynnau i Google Translate

 Gallwch chi gyfieithu:
 * gwrthrych JavaScript sy'n cynnwys negeseuon
 * cyfeiriadur o ffeiliau, yn ailadroddus

 # Darllenwch hwn mewn iaith arall
 Mae'r ddogfen README.md hon wedi'i chyfieithu, gan ddefnyddio'r offeryn hokeylization ei hun,
 i mewn i **[pob iaith a gefnogir gan Google Translate](../README.md)!**

 Rwy'n sicr nad yw'n berffaith, ond gobeithio ei fod yn well na dim!

 [🇸🇦 Arabeg](../ar/README.md)
 [🇧🇩 Bengaleg](../bn/README.md)
 [🇩🇪 Almaeneg](../de/README.md)
 [🇺🇸 Saesneg](../cy/README.md)
 [🇪🇸 Sbaeneg](../es/README.md)
 [🇫🇷 Ffrangeg](../fr/README.md)
 [🇹🇩 Hawsa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneseg](../id/README.md)
 [🇮🇹 Eidaleg](../it/README.md)
 [🇯🇵 Japaneaidd](../ja/README.md)
 [🇰🇷 Corea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Pwyleg](../pl/README.md)
 [🇧🇷 Portiwgaleg](../pt/README.md)
 [🇷🇺 Rwsieg](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Twrceg](../tr/README.md)
 [🇵🇰 Wrdw](../ur/README.md)
 [🇻🇳 Fietnameg](../vi/README.md)
 [🇨🇳 Tsieinëeg](../zh/README.md)


 **[📚 ... Pob Iaith...](../README.md)**
 ----

 ### A oes problem gyda'r cyfieithiad hwn o'r README?
 Mae'r cyfieithiad penodol hwn o'r [README] gwreiddiol ( https://github.com/cobbzilla/yuebing/blob/master/README.md)
 gall fod yn ddiffygiol -- *mae croeso mawr i gywiriadau!* Anfonwch [cais tynnu ar GitHub](https://github.com/cobbzilla/yuebing/pulls),
 neu os nad ydych yn gyfforddus yn gwneud hynny, [agorwch broblem]( https://github.com/cobbzilla/yuebing/issues)

 Pan fyddwch chi'n creu rhifyn GitHub newydd am gyfieithiad, gwnewch y canlynol:
 * cynnwys URL y dudalen (copïo / pastio o far cyfeiriad y porwr)
 * cynnwys yr union destun sy'n anghywir (copïo / pastio o'r porwr)
 * yn garedig iawn cynigiwch awgrym o gyfieithiad gwell
 * **Diolch!**

 # Cynnwys
 * [Ffynhonnell](#Ffynhonnell)
 * [Cymorth a Chyllido](#Cymorth-a-Cyllid)
 * [Gosod] (# Gosod)
 * [Gosod] (#Gosod)
 * [Cyfieithu ffeil adnodd llinyn JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Cyfieithu cyfeiriadur o ffeiliau testun] (#Cyfieithu-cyfeiriadur-o-ffeiliau testun)
 * [Dewisiadau eraill] (#Other-options)

 ## Ffynhonnell
 * [hokeylization ar GitHub]( https://github.com/cobbzilla/hokeylization)
 * [hokeylization ar npm]( https://www.npmjs.com/package/hokeylization)

 ## Cefnogaeth a Chyllid
 Rwy'n ceisio bod yn ddatblygwr meddalwedd ffynhonnell agored proffesiynol. Rwyf wedi bod yn gweithio yn
 y diwydiant meddalwedd ers blynyddoedd lawer, rwyf wedi dechrau cwmnïau llwyddiannus ac wedi eu gwerthu i gwmnïau cyhoeddus.
 Yn ddiweddar collais fy swydd, ac nid oes gennyf unrhyw waith arall wedi'i drefnu

 Felly rydw i'n mynd i geisio ysgrifennu meddalwedd defnyddiol a gweld a yw hynny'n gweithio

 Byddwn yn gwerthfawrogi'n ddiffuant y cyfraniad lleiaf [misol trwy Patreon] ( https://www.patreon.com/cobbzilla )

 ## Gosod
 I ddefnyddio'r offeryn llinell orchymyn, gosodwch gan ddefnyddio `npm` neu `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 I'w ddefnyddio fel llyfrgell, gosodwch y fersiwn `lite` , sy'n llawer llai:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Yna edrychwch ar help ar gyfer y gorchymyn `hokey` :

    hokey --help
    hokey -h

 Eisiau gweld allbwn yn eich iaith neu iaith arall?

 `hokey` yn ceisio canfod yr iaith yn awtomatig o newidynnau amgylchedd eich cragen

 Gallwch orfodi iaith drwy osod y newidyn amgylchedd `LC_ALL` :

    LC_ALL=it hokey --help

 Sylwch, os ydych wedi gosod `hokeylization-lite` , dim ond yn Saesneg y mae cymorth gorchymyn ar gael

 ## Gosod
 Gosodwch y newidyn amgylchedd `GOOGLE_TRANSLATE_PROJECT_ID` i adnabod eich prosiect Google Translate

 Gosodwch y newidyn amgylchedd `GOOGLE_APPLICATION_CREDENTIALS` i'r manylion adnabod JSON y gwnaethoch eu lawrlwytho
 ar ôl darganfod sut mae dilysu'n gweithio ar gwmwl Google (gall fod yn hwyl)

 Os ydych chi'n rhedeg o'r cod ffynhonnell, gallwch chi hefyd roi'r rhain mewn ffeil `.env` yn y ffynhonnell
 cyfeiriadur byddant yn cael eu llwytho ar amser rhedeg trwy [dotenv]( https://www.npmjs.com/package/dotenv)

 ## Cyfieithu ffeil adnodd llinyn JavaScript
 Rhaid i'ch tabl llinynnau ** fod mewn ffeil JavaScript yn un o'r ddwy ffurf hyn:

 Allforio ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Allforio CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Os cafodd y ffeil hon ei henwi yn `myfile.en.js` , gallwch ei chyfieithu i Sbaeneg ac Almaeneg gyda:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Mae'r `LANG` yn yr uchod yn arbennig -- mae'n air neilltuedig yn y teclyn hwn!

 Mae'r `LANG` yn cael ei ddisodli gan y cod iaith ar gyfer y ffeiliau allbwn

 Felly mae'r gorchymyn uchod yn creu'r ffeiliau:

    myfile.es.js
    myfile.de.js

 Mae'r `-l` / `--languages` yn rhestr wedi'i gwahanu gan goma o godau iaith ISO
 [cefnogir gan Google Translate]( https://cloud.google.com/translate/docs/languages)

 Os yw'r ffeil allbwn yn bodoli eisoes, bydd yn cael ei archwilio i benderfynu pa allweddi sy'n bodoli eisoes.
 Ni fydd allweddi presennol yn cael eu cyfieithu. Bydd cyfieithiadau ar gyfer allweddi coll yn cael eu cynhyrchu a'u hatodi
 i ddiwedd gwrthrych JS. Mae'r ffeil gyfan bob amser yn cael ei hailysgrifennu.

 I orfodi ail-gyfieithu pob allwedd, defnyddiwch yr `-f` / `--force`

 ## Cyfieithu cyfeiriadur o ffeiliau testun
 Gallwch hefyd gyfieithu cyfeiriadur o ffeiliau. Bydd hokeylization recursively ymweld â phob
 ffeil yn y cyfeiriadur a rhedeg ei gynnwys trwy Google Translate, ac arbed yr allbwn
 i ffeil a enwir yn union yr un fath mewn coeden cyfeiriadur ar wahân

 Pan fydd targed eich cyfieithiad yn gyfeiriadur, mae'r modd hwn wedi'i alluogi

 Mae'r `-o` / `--outfile` yn pennu'r cyfeiriadur allbwn

 **RHYBUDD MAWR**: Wrth gyfieithu cyfeiriaduron, **PEIDIWCH** â nodi cyfeiriadur allbwn
 mae hynny o fewn eich cyfeiriadur mewnbwn! Os gwnewch hyn, byddwch yn:
 * cymell dychweliad anfeidrol
 * cynhyrchwch eich bil Google
 * llenwch eich disg
 * cael llai o hwyl

 Dyma enghraifft o beth *na i'w wneud*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Pan fydd hyn yn rhedeg, mae ffeiliau wedi'u cyfieithu yn cael eu hysgrifennu i `templates/es` , ac felly'n dod yn newydd
 ffeiliau ffynhonnell i'w cyfieithu, gan eu bod o dan `templates/` -- mae'r broses hon yn parhau
 am byth, peidiwch â'i wneud!

 #### Defnydd cywir
 Iawn, gadewch i ni ddweud bod gennych chi rai templedi e-bost mewn cyfeiriadur:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 I gyfieithu'r rhain i gyd i Sbaeneg ac Almaeneg, rhedwch:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Yn yr uchod, gair neilltuedig yw `LANG` a chaiff ei ddisodli gan y cod iaith ISO

 Beth sy'n digwydd pan fydd yr uchod yn rhedeg:
 * Bydd y cyfeiriaduron `templedi / e `templates/email/es` a `templates/email/de` yn cael eu creu (os nad ydyn nhw'n bodoli)
 * Bydd pob ffeil mewn `templates/email/en` yn cael ei chyfieithu i Sbaeneg ac Almaeneg
 * Ni fydd ffeiliau allbwn presennol yn cael eu hadfywio oni bai eich bod yn defnyddio `-f` / `--force`
 * Yn y pen draw bydd gennych strwythur cyfeiriadur union yr un fath a ffeiliau o fewn `es` a `de` fel sydd gennych o dan `en`

 ## Opsiynau eraill

 ### Rhedeg sych
 `-n` / `--dry-run` i ddangos beth fyddai'n cael ei wneud, ond peidiwch â gwneud unrhyw alwadau API nac ysgrifennu unrhyw ffeiliau

 ### Llu
 `-f` / `--force` i adfywio cyfieithiadau bob amser, hyd yn oed os ydynt yn bodoli eisoes

 ### Match
 `-m` / `--match` i gyfyngu ar y ffeiliau a brosesir wrth redeg yn y modd cyfeiriadur

 Efallai na fyddwch bob amser eisiau cyfieithu *pob* ffeil yn eich cyfeiriadur ffynhonnell i'ch cyfeiriadur targed

 Gwerth yr `-m` / `--match` yw regex (gochelwch y rheolau dyfynnu plisgyn!) sy'n pennu
 pa ffeiliau y dylid eu cyfieithu

 Pan fyddwch mewn amheuaeth, gallwch gyfuno'r opsiwn hwn gyda `-n` / `--dry-run` i weld pa ffeiliau fyddai'n cael eu cyfieithu

 ### Heb gynnwys
 Weithiau mae eich `-m` yn cyfateb i ormod o ffeiliau. Defnyddiwch yr `-e` / `--excludes` i eithrio'n benodol
 ffeiliau a fyddai fel arall wedi cyfateb

 Gallwch restru regexes lluosog, wedi'u gwahanu gan fylchau

 Defnydd cyffredin fyddai: `--excludes node_modules dist \.git build tmp`

 ### Bariau llaw
 Gall y llinynnau i'w cyfieithu gynnwys templedi `{{ handlebars }}` , naill ai gyda dau neu dri braen cyrliog

 Mae'n debyg eich bod *NAD* am i'r stwff y tu mewn i'r templedi hynny gael eu cyfieithu

 Pasiwch y faner `-H` / `--handlebars` , ac ni fydd unrhyw beth o fewn `{{ ... }}` yn cael ei gyfieithu

 ### Markdown
 Nid yw Markdown yn destun nac yn html, felly mae gan Google Translate rai anawsterau ag ef

 Mae'r `-M` / `--markdown` yn galluogi trin arbennig ar gyfer ffeiliau marcio i lawr

 Mae Hokeylizer yn trin pethau'n weddus o dda, ond gyda ffeiliau marcio i lawr, efallai y byddwch chi'n aml yn amseru'r problemau hyn:
 * Dolenni toredig. Yn y cyfieithiad, mae nod gofod yn ymddangos ar ôl i ddisgrifiad cyswllt marcio i lawr ddod i ben (gyda `]` ) ond
 cyn i'w ddolen darged ddechrau (gyda `(` ). Mae hyn yn achosi i'r marcio i lawr rendr yn anghywir, a'r ddolen
 wedi torri wrth edrych ar y ddogfen.
 * Mae blociau cod yn cael eu cyfieithu. Nid yw Google translate yn gwybod beth mae marcio i lawr yn ei ystyried yn god a beth nad yw'n ei ystyried
 * Bylchau anghywir ar gyfer blociau cod wedi'u hindentio. Mae'n anodd cadw bylchau wrth gyfieithu
 * Bydd pethau y tu mewn i `backticks` yn cael eu cyfieithu, pan fyddwch bron bob amser eisiau iddynt fod yn werthoedd llythrennol

 Pan fydd y `-M` / `--markdown` wedi'i galluogi:
 * Bydd y patrwm `] (` yn cael ei gyddwyso i `](` gan osod y dolenni marcio i lawr sydd wedi torri
 * Bydd papur lapio "dim cyfieithu" yn cael ei osod o amgylch blociau cod wedi'u hindentio, gan gadw'r mewnoliad cywir a sicrhau nad ydynt yn cael eu cyfieithu
 * Bydd papur lapio "dim cyfieithu" yn cael ei osod o amgylch y testun o fewn `backticks` i sicrhau nad ydynt yn cael eu cyfieithu

 ### Proses-fel
 Fel arfer caiff popeth ei brosesu fel testun plaen

 Os yw'ch cynnwys yn HTML, caiff ei fanglio oni bai eich bod yn pasio'r `-p html` / `--process-as html`

 ### Hidlo
 Ar gyfer yr anturus: wrth brosesu ffeiliau mewn cyfeiriadur, gallwch chi basio'r `-F` / `--filter`
 i hidlo'r allbwn cyn iddo gael ei ysgrifennu i'r system ffeiliau

 Rhaid i werth yr opsiwn hwn fod yn llwybr i ffeil JS sy'n allforio ffwythiant o'r enw `filter`

 Rhaid i'r ffwythiant `filter` fod yn `async` `await` yn cael ei alw arno

 Cyn i ffeiliau gael eu hysgrifennu ar ddisg, bydd holl gynnwys y ffeil yn cael ei drosglwyddo i'r swyddogaeth `filter` fel llinyn

 Y gwerth dychwelyd o'r swyddogaeth `filter` yw'r hyn a fydd yn cael ei ysgrifennu i'r storfa

 Felly, mae gennych reolaeth lwyr dros yr hyn a fydd yn cael ei ysgrifennu yn y pen draw

 ### Help
 Defnyddiwch `-h` / `--help` i ddangos help

 ## Cyfieithu Hapus!

</pre>
