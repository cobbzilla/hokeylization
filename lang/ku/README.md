Hokeylization
 ==============
 Navê portmanteau ye, tê wateya 'herêmîkirina hokey'

 Ji ber ku ew pir hêsan e: ew rêzan ji Google Wergerê re dişîne

 Hûn dikarin wergerînin:
 * Tiştek JavaScriptê ku peyaman vedihewîne
 * pelrêçek pelan, bi paşverû

 # Vê bi zimanekî din bixwînin
 Ev belgeya README.md, bi karanîna amûra hokeylîzasyonê bixwe, hatî wergerandin
 **[her ziman ji hêla Google Wergerê ve tê piştgirî kirin](https://cloud.google.com/translate/docs/languages)!**

 Ez bawer im ku ew ne bêkêmasî ye, lê ez hêvî dikim ku ew ji tunebûnê çêtir e!

 [🇸🇦 Erebî](ziman/ar/README.md)
 [🇧🇩 Bengali](ziman/bn/README.md)
 [🇩🇪 Almanî](ziman/de/README.md)
 [🇺🇸 Îngilîzî](ziman/ku/README.md)
 [🇪🇸 Spanî](ziman/es/README.md)
 [🇫🇷 Fransî](../fr/README.md)
 [🇹🇩 Hausa](ziman/ha/README.md)
 [🇮🇳 Hindi](ziman/silav/README.md)
 [🇮🇩 Endonezyayî](ziman/id/README.md)
 [🇮🇹 Îtalî](ziman/ew/README.md)
 [🇯🇵 Japonî](../ja/README.md)
 [🇰🇷 Koreyî](../ko/README.md)
 [🇮🇳 Maranthi](ziman/mr/README.md)
 [🇵🇱 Polonî](../pl/README.md)
 [🇧🇷 Portekîzî](ziman/pt/README.md)
 [🇷🇺 Rûsî](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](ziman/tl/README.md)
 [🇹🇷 Tirkî](../tr/README.md)
 [🇵🇰 Urdu](ziman/ur/README.md)
 [🇻🇳 Viyetnamî](ziman/vi/README.md)
 [🇨🇳 Çînî](../zh/README.md)


 **[📚 ... Hemû Ziman ...](ziman/README.md)**
 ----

 ### Di vê wergera README de pirsgirêkek heye?
 Ev wergera taybetî ya orîjînal [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 dibe ku xelet be -- *serrastkirin pir bi xêr hatin!* Ji kerema xwe [daxwaza vekişînê li ser GitHub] bişînin (https://github.com/cobbzilla/yuebing/pulls),
 an heke hûn ne rehet in ku wiya bikin, [pirsek veke](https://github.com/cobbzilla/yuebing/issues)

 Dema ku hûn der barê wergerekê de pirsgirêkek nû ya GitHub çêkin, ji kerema xwe bikin:
 * URL-ya rûpelê têxe (ji barika navnîşana gerokê kopî/pêç bike)
 * nivîsa tam a ku xelet e tê de (ji gerokê kopî/paste)
 * ji kerema xwe pêşniyarek wergerek çêtir pêşkêş bikin
 * **Spas dikim!**

 # Naverok
 * [Çavkanî](#Çavkanî)
 * [Piştgirî û Fînanse](#Piştgirî-û-Fona)
 * [Sazkirin](# Sazkirin)
 * [Sazkirin](# Sazkirin)
 * [Wergerandina pelê çavkaniyek rêzika JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Wergerandina pelrêça pelên nivîsê](#Translating-a-directory-of-text-files)
 * [Vebijarkên din](# Vebijêrkên din)

 ## Çavkanî
 * [hokeylization li ser GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization li ser npm](https://www.npmjs.com/package/hokeylization)

 ## Piştgirî û Fînanse
 Ez hewl didim ku bibim pêşdebirek nermalava çavkaniya vekirî ya profesyonel. Ez tê de dixebitim
 pîşesaziya nermalava gelek salan, min dest bi pargîdaniyên serfiraz kir û wan firot pargîdaniyên gelemperî.
 Di van demên dawî de min karê xwe winda kir, û bi rastî jî tu karekî din li ber destê min nîn e

 Ji ber vê yekê ez ê hewl bidim ku nermalava alîkar binivîsim û bibînim ka ew kar dike

 Ez ê ji dil spasiya herî piçûk jî [beşdariya mehane bi rêya Patreon](https://www.patreon.com/cobbzilla)

 ## Sazkirin
 Ji bo ku amûra rêzika fermanê bikar bînin, bi karanîna `npm` an `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Ji bo ku wekî pirtûkxane bikar bînin, guhertoya `lite` saz bikin, ku pir piçûktir e:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Dûv re li alîkariyê ji bo fermana `hokey` :

    hokey --help
    hokey -h

 Ma hûn dixwazin bi zimanê xwe an zimanek din encam bibînin?

 `hokey` hewl dide ku ziman bixweber ji guhêrbarên hawîrdora şêlê we kifş bike

 Hûn dikarin bi danîna guhêrbara jîngehê ya `LC_ALL` ziman:

    LC_ALL=it hokey --help

 Bala xwe bidinê ku we `hokeylization-lite` saz kiribe, alîkariya fermanê tenê bi Englishngilîzî heye

 ## Damezirandin
 Guherbara jîngehê ya `GOOGLE_TRANSLATE_PROJECT_ID` saz bike ku projeya xweya Wergera Google nas bike

 Guherbara jîngehê ya `GOOGLE_APPLICATION_CREDENTIALS` li ser pêbaweriyên JSON-ê ku we dakêşand destnîşan bike
 piştî ku fêhm kir ka erêkirin çawa li ser cloudê Google dixebite (dibe ku xweş be)

 Heke hûn ji koda çavkaniyê dimeşin, hûn dikarin van jî di `.env` ya çavkaniyê de bixin
 pelrêça ew ê di dema xebitandinê de bi navgîniya [dotenv] ve werin barkirin (https://www.npmjs.com/package/dotenv)

 ## Wergera pelê çavkaniyek rêzika JavaScriptê
 Tabloya rêzika we **divê** di pelek JavaScriptê de bi yek ji van her du awayan be:

 hinardekirina ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 îxracata CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Heke navê vê pelê `myfile.en.js` , hûn dikarin wê wergerînin spanî û almanî bi:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` ya li jor taybetî ye -- ew di vê amûrê de peyvek parastî ye!

 `LANG` ' bi koda zimanî ji bo pelên derketinê tê guhertin

 Bi vî rengî emrê jorîn pelan diafirîne:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` ji kodên zimanê ISO-yê veqetandî ye.
 [Piştgiriya Google Wergerê](https://cloud.google.com/translate/docs/languages)

 Ger pelê derketinê jixwe hebe, ew ê were lêkolîn kirin da ku diyar bike ka kîjan kilît jixwe hene.
 Mifteyên heyî nayên wergerandin. Wergerên ji bo kilîtên winda dê bêne çêkirin û pêvekirin
 heta dawiya objeya JS. Tevahiya pelê her dem ji nû ve tê nivîsandin.

 Ji bo vegerandina hemû bişkokan bi zorê, vebijarka `-f` / `--force` bikar bînin

 ## Wergera pelrêçek pelên nivîsê
 Hûn dikarin peldankek pelan jî wergerînin. hokeylization dê bi vegerî serdana her
 di pelrêçê de pelê bike û naveroka wê bi navgîniya Google Wergerê bimeşîne, û encam hilîne
 li pelek bi heman navî di darek pelrêça cihê de

 Dema ku armanca wergera we pelrêçek be, ev mod tê çalak kirin

 `-o` / `--outfile` derketinê diyar dike

 **HIŞYARÎ MEZIN**: Dema ku pelrêçan werdigerînin, ** NEKE ** pelrêça derketinê diyar bikin
 ew di nav pelrêça têketina we de ye! Heke hûn vê yekê bikin, hûn ê:
 * vegerandina bêsînor çêbike
 * fatûreya xweya Google-ê bimeşînin
 * dîska xwe tije bikin
 * kêm kêfa xwe bikin

 Li vir mînakek e ku *nekirin*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Dema ku ev dimeşîne, pelên wergerandî li `templates/es` " têne nivîsandin, û bi vî rengî nû dibin
 pelên çavkanî ji bo wergerandinê, ji ber ku ew di bin `templates/` de ne -- ev pêvajo berdewam dike
 heta hetayê, wê nekin!

 #### Bikaranîna rast
 Baş e, em bibêjin ku hûn di pelrêçek de hin şablonên e-nameyê hene:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Ji bo wergerandina van hemiyan bi spanî û almanî, birevin:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Di jor de, `LANG` peyvek veqetandî ye û dê bi koda zimanê ISO-yê were guheztin

 Çi diqewime dema ku jorîn dimeşe:
 * Pîrêktorên `şablon/e `templates/email/es` û `templates/email/de` dê werin afirandin (heke ew nebin)
 * Her pelê di `templates/email/en` dê ji bo spanî û almanî were wergerandin
 * Pelên derketinê yên heyî dê ji nû ve neyên afirandin heya ku hûn `-f` / `--force` bikar bînin
 * Hûn ê di nav `es` û `de` de avahiyek pelrêça yekane û pelên mîna ku hûn di binê `en` de ne bigihînin.

 ## Vebijarkên din

 ### Riya hişk
 `-n` / `--dry-run` bikin da ku tiştê ku dê were kirin nîşan bide, lê bi rastî hûn bangên API-ê nekin an pelan nenivîsin

 ### Hêz
 `-f` / `--force` bikin ku her gav wergeran ji nû ve çêbike, her çend jixwe hebin jî

 ### Lihevhatin
 `-m` / `--match` bikin da ku pelên ku dema di moda pelrêçayê de têne xebitandin sînordar bikin

 Dibe ku hûn her gav nexwazin *her* pelê di pelrêça çavkaniya xwe de ji pelrêça xweya armancê wergerînin

 Nirxa `-m` / `--match` e (hişyar qaîdeyên binavkirina şêlê!) ku diyar dike.
 kîjan pelan divê bên wergerandin

 Dema ku hûn guman dikin, hûn dikarin vê vebijarkê bi `-n` / `--dry-run` re hev bikin da ku bibînin ka kîjan pel dê werin wergerandin.

 ### Derdixe
 Carinan `-m` we pir pelan li hev dike. `-e` / `--excludes` bikar bînin da ku bi eşkereyî jêbirin
 pelên ku wekî din dê li hev bihata

 Hûn dikarin gelek regexes navnîş bikin, ji hêla cîhan ve têne veqetandin

 Bikaranîna hevpar dê ev be: `--excludes node_modules dist \.git build tmp`

 ### Handlebars
 Dibe ku rêzikên ku werin wergerandin şablonên `{{ handlebars }}` bi du an sê brayên çîçek ve hene.

 Dibe ku hûn *NA* dixwazin ku tiştên di hundurê wan şablonan de werin wergerandin

 `-H` / `--handlebars` , û tiştek di hundurê `{{ ... }}` de nayê wergerandin

 ### Nîşandan
 Markdown ne nivîs û ne jî html e, ji ber vê yekê Google Werger bi wê re hin dijwarî hene

 `-M` / `--markdown` ji bo pelên nîşankirinê karkirina taybetî pêk tîne

 Digel pelên nîşankirinê, heke hûn ala `-M` bikar neynin, dibe ku hûn van pirsgirêkan bibînin:
 * Girêdanên şikestî. Di wergerandinê de, karekterek cîhê piştî ku danasîna girêdana nîşankirinê bi dawî dibe (bi `]` ) xuya dike lê
 berî ku girêdana wê ya hedef dest pê bike (bi `(` ). Ev dibe sedem ku nîşankirin bi xeletî were pêşkêş kirin, û girêdan
 dema dîtina belgeyê têk diçe.
 * Blokên kodê têne wergerandin. Google werger nizane markdown kîjan kodê dihesibîne û çi nake
 * Cihê xelet ji bo blokên kodê yên binavkirî. Di wergerê de parastin zehmet e
 * Tiştên di hundurê `backticks` dê werin wergerandin, gava ku hûn hema hema her gav dixwazin ku ew bibin nirxên wêjeyî

 Dema ku ala `-M` / `--markdown` çalak be:
 * Nimûneya `](` dê li ser `](` were komkirin
 * Dê pêça "ne werger" li dor blokên kodê yên binavkirî were danîn, dakêşana rast biparêze û piştrast bike ku ew nehatine wergerandin.
 * Dê pêça "bê werger" li dora nivîsê di nav `backticks` de were danîn da ku ew neyên wergerandin.

 ### Pêvajo-wek
 Bi gelemperî her tişt wekî nivîsek sade tê hilanîn

 Ger naveroka we HTML be, heya ku hûn `-p html` / `--process-as html` ê têk bibe.

 ### Parzûn
 Ji bo maceraperest: dema ku pelan di pelrêçekê de hilberandin, hûn dikarin `-F` / `--filter` derbas bikin.
 ji bo fîlterkirina derketinê berî ku li pergala pelan were nivîsandin

 Nirxa vê vebijarkê divê rêyek be ji pelek JS re ku fonksiyonek bi navê `filter`

 Divê fonksiyona `filter` `async` `await` be ji ber ku dê li benda wê were gotin

 Berî ku pel li ser dîskê werin nivîsandin, tevahiya naveroka pelê dê wekî rêzek ji fonksiyona `filter` were derbas kirin

 Nirxa vegerê ya ji fonksiyona `filter` ew e ku dê bi rastî li hilanînê were nivîsandin

 Bi vî rengî, hûn li ser tiştê ku dê di dawiyê de were nivîsandin de kontrola tevahî heye

 ### Alîkarî
 Ji bo nîşankirina alîkariyê `-h` / `--help` bînin

 ## Wergera xweş!

</pre>
