Hokeylization
 ==============
 Non an se yon portmanteau, sa vle di 'lokalizasyon hokey'

 Li se hokey paske li trè senp: li voye fisèl nan Google Translate

 Ou ka tradui:
 * yon objè JavaScript ki gen mesaj
 * yon anyè nan dosye, recursively

 # Li sa nan yon lòt lang
 Dokiman README.md sa a te tradui, avèk zouti hokeylization li menm,
 nan **[chak lang Google Translate sipòte](../README.md)!**

 Mwen sèten li pa pafè, men mwen espere ke li pi bon pase anyen!

 [🇸🇦 Arabe](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Alman](../de/README.md)
 [🇺🇸 Angle](../en/README.md)
 [🇪🇸 Panyòl](../es/README.md)
 [🇫🇷 Franse](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Endonezyen](../id/README.md)
 [🇮🇹 Italyen](../it/README.md)
 [🇯🇵 Japonè](../ja/README.md)
 [🇰🇷 Koreyen](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polonè](../pl/README.md)
 [🇧🇷 Pòtigè](../pt/README.md)
 [🇷🇺 Ris](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tik](../tr/README.md)
 [🇵🇰 Oudou](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinwa](../zh/README.md)


 **[📚 ... Tout Lang ...](../README.md)**
 ----

 ### Èske gen yon pwoblèm ak tradiksyon README sa a?
 Tradiksyon patikilye sa a orijinal [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 ka gen defo -- *Koreksyon yo trè akeyi!* Tanpri voye yon [demann rale sou GitHub](https://github.com/cobbzilla/yuebing/pulls),
 oswa si w pa konfòtab pou w fè sa, [louvri yon pwoblèm] (https://github.com/cobbzilla/yuebing/issues)

 Lè ou kreye yon nouvo pwoblèm GitHub sou yon tradiksyon, tanpri fè:
 * enkli URL paj la (kopi/kole nan ba adrès navigatè a)
 * enkli tèks egzak ki mal (kopi/kole nan navigatè a)
 * Tanpri ofri yon sijesyon pou yon pi bon tradiksyon
 * **Mèsi!**

 # Kontni
 * [Sous](#Sous)
 * [Sipò ak Finansman](#Sipò-ak-Finansman)
 * [Enstalasyon](#Enstalasyon)
 * [Enstalasyon](#Enstalasyon)
 * [Tradui yon fichye resous JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Tradui yon anyè dosye tèks](#Translating-a-directory-of-text-files)
 * [Lòt opsyon](#Other-options)

 ## Sous
 * [hokeylization sou GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization sou npm] (https://www.npmjs.com/package/hokeylization)

 ## Sipò ak Finansman
 Mwen eseye vin yon pwofesyonèl devlopè lojisyèl sous louvri. Mwen te travay nan
 endistri a lojisyèl pou anpil ane, mwen te kòmanse konpayi siksè ak vann yo bay konpayi piblik yo.
 Dènyèman mwen pèdi travay mwen, e mwen pa vrèman gen okenn lòt travay ki aliye

 Se konsa, mwen pral eseye ekri lojisyèl itil epi wè si sa ap travay

 Mwen ta sensèman apresye menm pi piti a [kontribisyon chak mwa atravè Patreon] (https://www.patreon.com/cobbzilla)

 ## Enstalasyon
 Pou itilize zouti liy lòd la, enstale lè l sèvi avèk `npm` oswa `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Pou itilize kòm yon bibliyotèk, enstale vèsyon `lite` , ki pi piti anpil:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Lè sa a, gade èd pou kòmand `hokey` :

    hokey --help
    hokey -h

 Ou vle wè pwodiksyon nan lang ou oswa nan yon lòt lang?

 `hokey` eseye detekte lang nan otomatikman nan varyab anviwònman koki ou a

 Ou ka fòse yon lang lè w mete varyab anviwònman `LC_ALL` :

    LC_ALL=it hokey --help

 Remake byen ke si ou te enstale `hokeylization-lite` , èd kòmand disponib sèlman nan lang angle

 ## Enstalasyon
 Mete varyab anviwònman `GOOGLE_TRANSLATE_PROJECT_ID` pou idantifye pwojè Google Translate ou a.

 Mete varyab anviwònman `GOOGLE_APPLICATION_CREDENTIALS` sou kalifikasyon JSON ou telechaje yo.
 apre w fin chèche konnen ki jan otantifikasyon travay sou Google nwaj (li ka amizan)

 Si w ap kouri soti nan kòd sous la, ou kapab tou mete sa yo nan yon dosye `.env` nan sous la
 anyè yo pral chaje nan kouri atravè [dotenv](https://www.npmjs.com/package/dotenv)

 ## Tradiksyon yon fichye resous JavaScript
 Tablo kòd ou a **dwe** nan yon fichye JavaScript nan youn nan de fòm sa yo:

 Ekspòtasyon ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ekspòtasyon CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Si yo te rele fichye sa a `myfile.en.js` , ou ka tradui l an panyòl ak alman avèk:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` nan pi wo a se espesyal - se yon mo rezève nan zouti sa a!

 `LANG` ranplase ak kòd lang pou fichye pwodiksyon yo

 Se konsa, kòmandman ki anwo a kreye dosye yo:

    myfile.es.js
    myfile.de.js

 Opsyon `-l` / `--languages` se yon lis kòd ISO ki separe ak vigil.
 [sipòte pa Google Translate](https://cloud.google.com/translate/docs/languages)

 Si fichye pwodiksyon an deja egziste, li pral egzamine pou detèmine ki kle ki deja egziste.
 Kle ki egziste deja p ap tradui. Tradiksyon pou kle ki manke yo pral pwodwi epi ajoute
 nan fen objè JS la. Tout fichye a toujou reekri.

 Pou fòse retradiksyon tout kle yo, sèvi ak `-f` / `--force`

 ## Tradiksyon yon anyè dosye tèks
 Ou ka tradui tou yon anyè dosye. hokeylization pral recursively vizite chak
 dosye nan anyè a epi kouri sa ki ladan l nan Google Translate, epi sove pwodiksyon an
 nan yon fichye ki gen menm non nan yon pye bwa anyè separe

 Lè sib tradiksyon ou a se yon anyè, mòd sa a aktive

 Opsyon `-o` / `--outfile` presize anyè pwodiksyon an

 **GWO AVÈTISMAN**: Lè wap tradui anyè, **PA** espesifye yon anyè pwodiksyon.
 ki nan anyè opinyon ou! Si w fè sa, w ap:
 * pwovoke repetisyon enfini
 * monte bòdwo Google ou a
 * ranpli disk ou a
 * gen mwens plezi

 Men yon egzanp kisa *pa fè*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Lè sa a kouri, dosye tradui yo ekri nan `templates/es` , epi konsa vin nouvo
 fichye sous yo tradui, paske yo anba `templates/` -- pwosesis sa a ap kontinye
 pou tout tan, pa fè li!

 #### Itilizasyon kòrèk
 OK, an n di ou gen kèk modèl imèl nan yon anyè:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Pou tradui tout bagay sa yo an Panyòl ak Alman, kouri:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Nan pi wo a, `LANG` se yon mo rezève epi yo pral ranplase ak kòd lang ISO

 Kisa k ap pase lè pi wo a kouri:
 * `templates/email/es` ak `templates/email/de` yo pral kreye (si yo pa egziste)
 * Chak fichye nan `templates/email/en` pral tradui nan Panyòl ak Alman
 * Fichye pwodiksyon ki deja egziste yo p ap rejenere sof si ou itilize `-f` / `--force`
 * Ou pral fini ak yon estrikti anyè ki idantik ak dosye nan `es` ak `de` tankou ou genyen anba `en`

 ## Lòt opsyon

 ### Kouri sèch
 Pase `-n` / `--dry-run` pou montre sa ki ta dwe fè, men pa aktyèlman fè okenn apèl API oswa ekri okenn dosye.

 ### Fòs
 Pase `-f` / `--force` pou toujou rejenere tradiksyon, menm si yo deja egziste

 ### Koresponn ak
 Pase `-m` / `--match` pou limite dosye yo trete lè yo ap kouri nan mòd anyè

 Ou ka pa toujou vle tradui *chak* fichye nan anyè sous ou a nan anyè sib ou

 Valè opsyon `-m` / `--match` la se yon regex (fè atansyon sou règleman pou site kokiy!) ki presize
 ki fichye yo ta dwe tradui

 Lè w gen dout, ou ka konbine opsyon sa a ak `-n` / `--dry-run` pou wè ki fichye yo ta tradui

 ### Ekskli
 Pafwa `-m` ou a matche ak twòp fichye. Sèvi ak `-e` / `--excludes` pou ekskli klèman
 dosye ki otreman ta matche

 Ou ka lis plizyè regex, separe pa espas

 Yon itilizasyon komen ta dwe: `--excludes node_modules dist \.git build tmp`

 ### Guidon
 Fisèl pou tradui yo ta ka genyen modèl `{{ handlebars }}` , swa ak de oswa twa atèl.

 Ou pwobableman *PA* vle bagay ki anndan modèl sa yo tradui

 Pase `-H` / `--handlebars` , epi nenpòt bagay ki nan `{{ ... }}` pa pral tradui

 ### Markdown
 Markdown pa ni tèks ni html, kidonk Google Translate gen kèk difikilte ak li

 Drapo a `-M` / `--markdown` pèmèt manyen espesyal pou dosye markdown yo

 Hokeylizer jere bagay yo byen, men ak dosye markdown, ou ka souvan pwoblèm sa yo:
 * Lyen kase. Nan tradiksyon an, yon karaktè espas parèt apre yon deskripsyon lyen markdown fini (ak `]` ) men
 anvan lyen sib li a kòmanse (avèk `(` ). Sa lakòz markdown la rann mal, epi lyen an).
 kase lè w ap gade dokiman an.
 * Blòk kòd jwenn tradui. Google translate pa konnen kisa markdown konsidere kòm kòd ak sa li pa konnen
 * Espas ki pa kòrèk pou blòk kòd indentated. Espas difisil pou konsève nan tradiksyon
 * Bagay ki andedan `backticks` yo pral tradui, lè ou prèske toujou vle yo dwe valè literal

 Lè `-M` / `--markdown` aktive:
 * Modèl la `] (` pral kondanse nan `](` konsa ranje lyen markdown ki kase yo
 * Y ap mete yon anvlòp "pa gen okenn tradiksyon" ozalantou blòk kòd indentated, prezève endentasyon apwopriye epi asire yo pa tradui.
 * Yo pral mete yon anvlòp "pa gen okenn tradiksyon" alantou tèks nan `backticks` pou asire yo pa tradui yo.

 ### Pwosesis-kòm
 Nòmalman tout bagay trete kòm tèks klè

 Si kontni ou a se HTML, li pral detwi sòf si ou pase opsyon `-p html` / `--process-as html`

 ### Filtre
 Pou moun ki aventuriers: lè w ap trete fichye yo nan yon anyè, ou ka pase `-F` / `--filter`
 pou filtre pwodiksyon an anvan li ekri nan sistèm fichye a

 Valè opsyon sa a dwe yon chemen nan yon dosye JS ki ekspòte yon fonksyon ki rele `filter`

 Fonksyon `filter` dwe `async` paske `await` pral rele sou li

 Anvan yo ekri dosye yo sou disk, tout sa ki nan dosye yo pral pase nan fonksyon `filter` kòm yon kòd.

 Valè retounen nan fonksyon `filter` se sa ki pral aktyèlman ekri nan depo

 Kidonk, ou gen total kontwòl sou sa ki pral finalman ekri

 ### Ede
 Sèvi ak `-h` / `--help` pou montre èd

 ## Bon Tradiksyon!

</pre>
