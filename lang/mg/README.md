Hokeylization
 =============
 Ny anarana dia portmanteau, midika hoe 'hokey localization'

 Hokey io satria tena tsotra: mandefa tady amin'ny Google Translate

 Afaka mandika:
 * zavatra JavaScript misy hafatra
 * lahatahiry misy rakitra, miverimberina

 # Vakio amin'ny fiteny hafa ity
 Ity antontan-taratasy README.md ity dia nadika, tamin'ny fampiasana ny fitaovana hokeylization mihitsy, ho
 **[ny fiteny rehetra tohanan'ny Google Translate](https://cloud.google.com/translate/docs/languages)!**

 azoko antoka fa tsy tonga lafatra izany fa manantena aho fa tsara noho ny tsy misy!

 [🇸🇦 Arabo](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Alemana](../de/README.md)
 [🇺🇸 anglisy](../en/README.md)
 [🇪🇸 Espaniola](../es/README.md)
 [🇫🇷 frantsay](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneziana](../id/README.md)
 [🇮🇹 Italiana](../it/README.md)
 [🇯🇵 Japoney](../ja/README.md)
 [🇰🇷 Koreana](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 poloney](../pl/README.md)
 [🇧🇷 Portiogey](../pt/README.md)
 [🇷🇺 Rosiana](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tiorka](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamiana](../vi/README.md)
 [🇨🇳 Sinoa](../zh/README.md)


 **[📚 ... Teny Rehetra ...](../README.md)**
 ----

 ### Misy olana ve amin'ity fandikana ny README ity?
 Ity dikanteny manokana amin'ny [README] tany am-boalohany (https://github.com/cobbzilla/yuebing/blob/master/README.md)
 mety misy lesoka -- *tena raisina an-tanana ny fanitsiana!* Alefaso azafady [fangatahana fisarihana ao amin'ny GitHub](https://github.com/cobbzilla/yuebing/pulls),
 na raha tsy mahazo aina amin'izany ianao dia [manokatra olana](https://github.com/cobbzilla/yuebing/issues)

 Rehefa mamorona olana GitHub vaovao momba ny fandikan-teny ianao, azafady:
 * Ampidiro ny URL pejy (adikao / apetaho amin'ny bara adiresy navigateur)
 * Ampidiro ny lahatsoratra marina izay diso (kodikao / apetaho amin'ny navigateur)
 * manolora soso-kevitra amin'ny fandikan-teny tsara kokoa
 * **Misaotra anao!**

 # Votoaty
 * [Loharano](#Source)
 * [Fanohanana sy Famatsiam-bola](#Fanohanana-sy-Famatsiam-bola)
 * [Fametrahana](#Fametrahana)
 * [Setup](#Setup)
 * [Mandika rakitra loharanon-dahatsary JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Mandika lahatahiry misy rakitra lahatsoratra](#Translating-a-directory-of-text-files)
 * [Safidy hafa](#Other-Options)

 ## Loharano
 * [hokeylization amin'ny GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization amin'ny npm](https://www.npmjs.com/package/hokeylization)

 ## Fanohanana sy famatsiam-bola
 Miezaka ny ho matihanina mpamorona rindrambaiko open source aho. Niasa tao aho
 ny indostrian'ny rindrambaiko nandritra ny taona maro, nanomboka orinasa nahomby aho ary nivarotra azy ireo tamin'ny orinasam-panjakana.
 Vao haingana aho no very asa, ary tsy manana asa hafa milahatra

 Noho izany dia hanandrana manoratra rindrambaiko mahasoa aho ary hijery raha mety izany

 Ankasitrahako amin-kitsimpo na dia ny kely indrindra [fandraisan'anjara isam-bolana amin'ny alàlan'ny Patreon](https://www.patreon.com/cobbzilla)

 ## Fametrahana
 Raha hampiasa ny fitaovana andalana baiko dia apetraho amin'ny fampiasana `npm` na `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Raha hampiasaina ho tranomboky, apetraho ny dikan-teny `lite` , izay kely kokoa:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Dia jereo ny fanampiana ho an'ny baiko `hokey` :

    hokey --help
    hokey -h

 Te hahita vokatra amin'ny fiteninao na fiteny hafa ve ianao?

 `hokey` dia manandrana mamantatra ny fiteny ho azy avy amin'ny fari-piainan'ny akorandriaka

 Azonao atao ny manery fiteny iray amin'ny fametrahana ny fari-piainana `LC_ALL` :

    LC_ALL=it hokey --help

 Mariho fa raha nametraka `hokeylization-lite` ianao dia tsy misy afa-tsy amin'ny teny anglisy ny fanampiana baiko

 ## Hametraka
 Mametraha fari-piainana `GOOGLE_TRANSLATE_PROJECT_ID` ' hamantarana ny tetikasa Google Translate-nao

 Apetraho amin'ny fanomezan-dàlana JSON nalainao ny fari-piainana `GOOGLE_APPLICATION_CREDENTIALS` '
 rehefa avy nikaroka ny fomba fiasan'ny fanamarinana ao amin'ny Google cloud (mety hahafinaritra izany)

 Raha mihazakazaka amin'ny kaody loharano ianao dia azonao atao koa ny mametraka azy ireo ao anaty rakitra `.env` ao amin'ny loharano
 lahatahiry ho entina amin'ny fotoana fandehanana amin'ny alàlan'ny [dotenv](https://www.npmjs.com/package/dotenv)

 ## Mandika rakitra loharanon-dahatsary JavaScript
 Ny latabatra tady ** dia tsy maintsy** ao anaty rakitra JavaScript amin'ny iray amin'ireto endrika roa ireto:

 ES6 fanondranana:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS fanondranana

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Raha ity rakitra ity dia nomena anarana `myfile.en.js` , azonao adika amin'ny teny espaniola sy alemà miaraka amin'ny:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Ny `LANG` eto ambony dia miavaka -- teny voatokana amin'ity fitaovana ity!

 Ny `LANG` dia nosoloina kaody fiteny ho an'ny rakitra mivoaka

 Noho izany, ny baiko etsy ambony dia mamorona ny rakitra:

    myfile.es.js
    myfile.de.js

 Ny safidy `-l` / `--languages` dia lisitry ny kaody fiteny ISO misy faingo.
 [tohanan'ny Google Translate](https://cloud.google.com/translate/docs/languages)

 Raha efa misy ny rakitra mivoaka dia hojerena mba hamaritana izay fanalahidy efa misy.
 Ny fanalahidy efa misy dia tsy hadika. Dikanteny ho an'ny fanalahidy tsy hita dia hatsangana sy ampiana
 hatramin'ny faran'ny zavatra JS. Ny rakitra manontolo dia averina soratana foana.

 Raha hanery ny fandikana indray ny fanalahidy rehetra dia ampiasao ny safidy `-f` / `--force`

 ## Mandika lahatahiry misy rakitra an-tsoratra
 Azonao atao koa ny mandika lahatahiry misy rakitra. hokeylization dia hitsidika ny tsirairay
 Ampidiro ao amin'ny lahatahiry ary asio ny atiny amin'ny Google Translate, ary tehirizo ny vokatra
 amin'ny rakitra mitovy anarana amin'ny hazo lahatahiry misaraka

 Rehefa lahatahiry no kendrena amin'ny dikanteninao dia alefa ity fomba ity

 Ny safidy `-o` / `--outfile` dia mamaritra ny lahatahiry mivoaka

 **FAMPITANDREMANA LEHIBE**: Rehefa mandika lahatahiry dia **AZA** mamaritra lahatahiry mivoaka
 ao anatin'ny lahatahiry fampidiranao izany! Raha manao izany ianao dia:
 * mampirisika recursion tsy manam-petra
 * amboary ny volavolanao Google
 * fenoy ny kapilanao
 * miala voly kely

 Ity misy ohatra amin'ny *tsy tokony hatao*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Rehefa mandeha izany, dia soratana amin'ny `templates/es` ny rakitra voadika, ka lasa vaovao
 rakitra loharano handikana, satria eo ambanin'ny `templates/` -- mitohy ity dingana ity
 mandrakizay fa aza atao an!

 #### Fampiasana marina
 OK, andao atao hoe manana môdely mailaka ao anaty lahatahiry iray ianao:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Raha te handika ireo rehetra ireo amin'ny teny espaniola sy alemà dia mandehana:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Amin'ity etsy ambony ity, ny `LANG` dia teny voatokana ary hosoloina amin'ny kaody fiteny ISO

 Inona no mitranga rehefa mandeha ny etsy ambony:
 * Ny `templates/email/es` sy `templates/email/de` dia hatsangana (raha tsy misy)
 * Ny rakitra rehetra amin'ny `templates/email/en` dia hadika amin'ny teny espaniola sy alemà
 * Tsy havaozina intsony ny rakitra vokarina efa misy raha tsy mampiasa `-f` / `--force`
 * Hiafara amin'ny firafitry ny lahatahiry mitovy sy ny rakitra ao anatin'ny `es` sy `de` toy ny anananao eo ambanin'ny `en` ianao.

 ## Safidy hafa

 ### Hazakazaka maina
 Alefaso ny `-n` / `--dry-run` hanehoana izay hatao, fa aza manao antso API na manoratra rakitra

 ### Hery
 `-f` / `--force` hamerenana ny dikanteny foana, na dia efa misy aza

 ### Lalao
 Alefaso ny `-m` / `--match` hametra ny rakitra voahodina rehefa mandeha amin'ny lahatahiry-mode

 Mety tsy te handika ny rakitra *rehetra* ao amin'ny lahatahiry loharanonao mankany amin'ny lahatahiry kendrenao ianao

 Ny sandan'ny safidy `-m` / `--match` dia regex (tandremo ny fitsipi-pitenenana shell!) izay mamaritra
 izay rakitra tokony hadika

 Raha misalasala ianao dia azonao ampiarahina amin'ny `-n` / `--dry-run` ity safidy ity hahitanao izay rakitra hadika.

 ### Tsy tafiditra
 Indraindray ny `-m` -nao dia mifanandrify amina rakitra be loatra. Ampiasao ny safidy `-e` / `--excludes` hanilihana mazava
 rakitra izay raha tsy izany dia nifanaraka

 Azonao atao ny mitanisa regex maro, misaraka amin'ny habaka

 Ny fampiasana mahazatra dia: `--excludes node_modules dist \.git build tmp`

 ### Handlebar
 Ny tady handikana dia mety misy lasitra `{{ handlebars }}` , na misy braces olioly roa na telo

 Angamba *TSY* tianao hadika ny zavatra ao anatin'ireo môdely ireo

 Alefaso ny saina `-H` / `--handlebars` , dia tsy hadika izay rehetra ao anatin'ny `{{ ... }}`

 ### Famerenana
 Tsy lahatsoratra na html ny Markdown, noho izany dia manana olana amin'izany ny Google Translate

 Ny `-M` / `--markdown` dia mamela ny fikarakarana manokana ny rakitra markdown

 Miaraka amin'ny rakitra markdown, raha tsy mampiasa ny saina `-M` ianao, dia mety hahita ireto olana ireto ianao:
 * Rohy tapaka. Ao amin'ny dikanteny, misy tarehin-tsoratra iray miseho rehefa tapitra ny famaritana rohy misy marika (miaraka amin'ny `]` ) fa
 alohan'ny hanombohan'ny rohy kendrena azy (miaraka amin'ny `(` ).
 tapaka rehefa mijery ny antontan-taratasy.
 * Nadika ny sakana kaody. Ny fandikana Google dia tsy mahafantatra izay heverin'ny kaody ho mari-pandrefesana ary inona no tsy
 * Diso elanelana ho an'ny sakana kaody indented. Sarotra ny mitahiry ny elanelana amin'ny fandikan-teny
 * Ny zavatra ao anatin'ny ' `backticks` ' dia ho voadika, rehefa saika tianao ho sanda ara-bakiteny foana izy ireo

 Rehefa alefa ny saina `-M` / `--markdown` :
 * Ny lamina `] (` dia hafohezina amin'ny `](` amin'izany dia manamboatra ny rohy simba.
 * Apetaka eo amin'ny blocs misy kaody mitsindroka ny fonosina "tsy misy dikanteny", mitahiry ny indent ary miantoka fa tsy voadika.
 * Hapetraka manodidina ny lahatsoratra ao anatin'ny `backticks` ' ny fonony "tsy misy dikanteny" mba hahazoana antoka fa tsy voadika

 ### Process-as
 Amin'ny ankapobeny dia voahodina ho lahatsoratra tsotra ny zava-drehetra

 Raha HTML ny votoatinao dia ho simba izany raha tsy mandalo ny safidy `-p html` / `--process-as html`

 ### Sivana
 Ho an'ny mpitsangatsangana: rehefa manamboatra rakitra ao anaty lahatahiry iray ianao dia afaka mandalo ny safidy `-F` / `--filter`
 hanivana ny vokatra alohan'ny hanoratana azy amin'ny rafi-drakitra

 Ny sandan'ity safidy ity dia tsy maintsy lalana mankany amin'ny rakitra JS izay manondrana asa atao hoe `filter`

 Ny asa `filter` dia tsy maintsy ho `async` satria `await` no hiantsoana azy

 Alohan'ny hanoratana ny rakitra amin'ny kapila, ny votoatin'ny rakitra manontolo dia halefa any amin'ny asa `filter` ho tady

 Ny sanda miverina avy amin'ny fiasa `filter` no tena hosoratana amin'ny fitahirizana

 Noho izany, manana fifehezana tanteraka amin'izay hosoratana amin'ny farany ianao

 ### Vonjeo
 Mampiasà `-h` / `--help` hanehoana fanampiana

 ## Faly Mandika!

</pre>
