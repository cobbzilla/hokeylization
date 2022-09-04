Hokeylization
 =============
 Ang ngalan usa ka portmanteau, nagpasabut nga 'hokey localization'

 Kini usa ka hokey tungod kay kini yano kaayo: nagpadala kini og mga string sa Google Translate

 Mahimo nimong hubaron ang:
 * usa ka butang sa JavaScript nga adunay mga mensahe
 * usa ka direktoryo sa mga file, recursively

 # Basaha kini sa laing pinulongan
 Kini nga README.md nga dokumento gihubad, gamit ang hokeylization tool mismo,
 ngadto sa **[matag pinulongan nga gisuportahan sa Google Translate](../README.md)!**

 Sigurado ko nga dili kini perpekto, apan nanghinaut ko nga kini mas maayo kaysa wala!

 [🇸🇦 Arabiko](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Kinatsila](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italyano](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Tanang Pinulongan ...](../README.md)**
 ----

 ### Aduna bay problema sa kini nga paghubad sa README?
 Kining partikular nga hubad sa orihinal [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 basin naay depekto -- *malipayon kaayo ang mga koreksyon!* Palihog ipadala ug [pull request sa GitHub](https://github.com/cobbzilla/yuebing/pulls),
 o kung dili ka komportable nga buhaton kana, [ablihi ang usa ka isyu](https://github.com/cobbzilla/yuebing/issues)

 Kung maghimo ka usa ka bag-ong isyu sa GitHub bahin sa usa ka paghubad, palihug buhata:
 * Ilakip ang URL sa panid (kopya / idikit gikan sa address bar sa browser)
 * Ilakip ang eksakto nga teksto nga sayup (kopya / idikit gikan sa browser)
 * malulotong paghatag ug sugyot sa mas maayong hubad
 * **Salamat!**

 # Mga sulud
 * [Source](#Source)
 * [Pagsuporta ug Pagpondo](#Suporta-ug-Pagpondo)
 * [Pag-instalar](#Pag-instalar)
 * [Setup](#Setup)
 * [Paghubad sa JavaScript string resource file](#Translating-a-JavaScript-string-resource-file)
 * [Paghubad sa direktoryo sa mga text file](#Translating-a-directory-of-text-files)
 * [Ubang mga kapilian](#Other-options)

 ## Tinubdan
 * [hokeylization sa GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization sa npm](https://www.npmjs.com/package/hokeylization)

 ## Suporta ug Pagpundo
 Ako naningkamot nga mahimong usa ka propesyonal nga open source software developer. Nagtrabaho ko sa
 ang industriya sa software sulod sa daghang katuigan, nagsugod ko og malampusong mga kompanya ug gibaligya kini sa mga publikong kompanya.
 Bag-o lang nawad-an kog trabaho, ug wala na gyud koy laing trabaho nga nakalinya

 Mao nga sulayan nako ang pagsulat sa makatabang nga software ug tan-awon kung kini molihok

 Ako kinasingkasing nga magpasalamat bisan sa pinakagamay [binulan nga kontribusyon pinaagi sa Patreon](https://www.patreon.com/cobbzilla)

 ## Pag-instalar
 Aron magamit ang command line tool, i-install gamit ang `npm` o `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Aron magamit isip librarya, i-install ang `lite` nga bersyon, nga mas gamay:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Dayon tan-awa ang tabang alang sa `hokey` sugo:

    hokey --help
    hokey -h

 Gusto nga makita ang output sa imong lengguwahe o lain nga lengguwahe?

 `hokey` mosulay sa pag-ila sa pinulongan nga awtomatiko gikan sa mga variable sa palibot sa imong shell

 Mahimo nimong pugson ang usa ka pinulongan pinaagi sa pag-set sa `LC_ALL` environment variable:

    LC_ALL=it hokey --help

 Timan-i nga kung imong gi-install ang `hokeylization-lite` , ang tabang sa command magamit ra sa English

 ## Setup
 I-set ang `GOOGLE_TRANSLATE_PROJECT_ID` environment variable aron mailhan ang imong proyekto sa Google Translate

 I-set ang `GOOGLE_APPLICATION_CREDENTIALS` environment variable sa JSON nga mga kredensyal nga imong gi-download
 pagkahuman nahibal-an kung giunsa ang pag-authenticate sa Google cloud (mahimong makalingaw)

 Kung nagdagan ka gikan sa source code, mahimo nimo kining ibutang sa `.env` file sa tinubdan
 direktoryo nga sila ikarga sa runtime pinaagi sa [dotenv](https://www.npmjs.com/package/dotenv)

 ## Paghubad sa JavaScript string resource file
 Ang imong string table **kinahanglang** naa sa JavaScript file sa usa niining duha ka porma:

 ES6 export:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS export

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Kung kining payl gihinganlan og `myfile.en.js` , mahimo nimo kining hubaron ngadto sa Spanish ug German gamit ang:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Espesyal ang `LANG` sa ibabaw -- kini usa ka gitagana nga pulong niini nga himan!

 Ang `LANG` gipulihan sa code sa pinulongan alang sa mga output file

 Busa ang sugo sa ibabaw nagmugna sa mga file:

    myfile.es.js
    myfile.de.js

 Ang `-l` / `--languages` nga opsyon kay usa ka lista nga gibulag sa koma sa mga ISO nga code sa pinulongan
 [gisuportahan sa Google Translate](https://cloud.google.com/translate/docs/languages)

 Kung naa na ang output file, susihon kini aron mahibal-an kung unsang mga yawe ang naglungtad na.
 Ang kasamtangan nga mga yawe dili hubaron. Ang mga paghubad alang sa nawala nga mga yawe himuon ug idugang
 hangtod sa katapusan sa JS object. Ang tibuok file kanunay nga gisulat pag-usab.

 Aron pugson ang paghubad pag-usab sa tanang yawe, gamita ang opsyon nga `-f` / `--force`

 ## Paghubad ug direktoryo sa mga text file
 Mahimo ka usab maghubad sa usa ka direktoryo sa mga file. Ang hokeylization kanunay nga mobisita sa matag
 file sa direktoryo ug ipadagan ang mga sulod niini pinaagi sa Google Translate, ug i-save ang output
 sa usa ka parehas nga ngalan nga file sa usa ka lahi nga punoan sa direktoryo

 Kung ang target sa imong hubad usa ka direktoryo, kini nga mode gipaandar

 Ang `-o` / `--outfile` nga opsyon nagtino sa output directory

 **DAKO NGA WARNING**: Sa paghubad sa mga direktoryo, **AYAW** magtakda ug output nga direktoryo
 kana sa sulod sa imong input directory! Kung buhaton nimo kini, imong buhaton:
 * pag-aghat sa walay katapusan nga pagbalik-balik
 * padagana ang imong Google bill
 * pun-a ang imong disk
 * dili kaayo lingaw

 Ania ang usa ka pananglitan kung unsa ang *dili buhaton*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kung kini modagan, ang gihubad nga mga file isulat sa `templates/es` , ug sa ingon mahimong bag-o
 tinubdan nga mga file aron hubaron, tungod kay sila ubos sa `templates/` -- kini nga proseso nagpadayon
 hangtod sa hangtod, ayaw kini buhata!

 #### Husto nga paggamit
 OK, ingnon ta nga ikaw adunay pipila ka mga template sa email sa usa ka direktoryo:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Aron mahubad kining tanan ngadto sa Kinatsila ug Aleman, pagdagan:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Sa ibabaw, ang `LANG` kay gireserba nga pulong ug pulihan sa ISO nga code sa pinulongan

 Unsa ang mahitabo kung ang naa sa ibabaw modagan:
 * Ang `templates/email/es` ug `templates/email/de` nga mga direktoryo pagabuhaton (kung wala kini)
 * Ang matag file sa `templates/email/en` hubaron sa Spanish ug German
 * Ang naglungtad nga mga file sa output dili mabag-o gawas kung mogamit ka `-f` / `--force`
 * Makuha nimo ang parehas nga istruktura sa direktoryo ug mga file sa sulod sa `es` ug `de` sama sa naa nimo sa ilawom sa `en`

 ## Ubang mga kapilian

 ### Dry run
 Ipasa `-n` / `--dry-run` aron ipakita kung unsa ang buhaton, apan ayaw gyud paghimo og bisan unsang mga tawag sa API o pagsulat sa bisan unsang mga file

 ### Puwersa
 Ipasa `-f` / `--force` aron kanunay nga ma-regenerate ang mga hubad, bisan kung anaa na sila

 ### Tugma
 Ipasa `-m` / `--match` aron limitahan ang mga file nga giproseso kung nagdagan sa directory-mode

 Mahimong dili nimo kanunay gusto nga hubaron ang *matag* file sa imong gigikanan nga direktoryo sa imong target nga direktoryo

 Ang bili sa `-m` / `--match` nga kapilian kay usa ka regex (pagbantay sa mga lagda sa pagkutlo sa shell!) nga nagtino
 unsa nga mga file ang kinahanglan hubaron

 Kung nagduhaduha, mahimo nimong ikombinar kini nga kapilian sa `-n` / `--dry-run` aron makita kung unsang mga file ang hubaron

 ### Wala apil
 Usahay ang imong `-m` motakdo sa daghang mga file. Gamita ang `-e` / `--excludes` nga opsyon aron klaro nga dili iapil
 mga file nga kon dili unta motakdo

 Mahimo nimong ilista ang daghang mga regex, nga gibulag sa mga wanang

 Usa ka komon nga paggamit mao ang: `--excludes node_modules dist \.git build tmp`

 ### Mga Handlebar
 Ang mga kuwerdas nga hubaron mahimong adunay mga template `{{ handlebars }}` , nga adunay duha o tulo ka mga curly-braces

 Tingali *DILI* nimo gusto nga mahubad ang mga butang sa sulod sa mga templates

 Ipasa ang `-H` / `--handlebars` nga bandera, ug bisan unsa sulod sa `{{ ... }}` dili mahubad

 ### Markdown
 Ang Markdown dili teksto o html, busa ang Google Translate adunay pipila ka mga kalisud niini

 Ang `-M` / `--markdown` nga bandera makahimo sa espesyal nga pagdumala sa markdown nga mga file

 Maayo ang pagdumala sa Hokeylizer sa mga butang, apan sa mga markdown file, mahimo nimo kini nga mga problema:
 * Naguba nga mga link. Sa paghubad, usa ka karakter sa espasyo ang makita pagkahuman sa usa ka paghulagway sa link sa markdown matapos (uban ang `]` ) apan
 sa dili pa magsugod ang target nga link niini (uban sa `(` ). Kini maoy hinungdan nga ang markdown dili ma-render, ug ang link
 nabuak kung nagtan-aw sa dokumento.
 * Ang mga bloke sa code mahubad. Ang paghubad sa Google wala mahibal-an kung unsa ang gikonsiderar nga markdown nga code ug kung unsa ang wala
 * Sayop nga gilay-on alang sa indented nga mga bloke sa code. Lisud ipreserbar ang gilay-on sa paghubad
 * Ang mga butang sa sulod sa `backticks` mahubad, kung gusto nimo kini nga literal nga mga kantidad

 Sa diha nga ang `-M` / `--markdown` nga bandila gipalihok:
 * Ang pattern nga `] (` ipamub-ot ngadto sa `](` busa ayohon ang naguba nga markdown links
 * Usa ka wrapper nga "walay paghubad" ibutang sa palibot sa mga indented nga mga bloke sa code, pagpreserbar sa husto nga indentasyon ug pagsiguro nga kini dili mahubad
 * Usa ka "no translate" wrapper ang ibutang sa palibot sa teksto sulod sa `backticks` aron masiguro nga kini dili mahubad

 ### Proseso-ingon
 Kasagaran ang tanan giproseso isip plain text

 Kung HTML ang imong sulod, madaot kini gawas kung ipasa nimo ang opsyon nga `-p html` / `--process-as html`

 ### Filter
 Para sa mga adventurous: sa pagproseso sa mga file sa usa ka direktoryo, mahimo nimong ipasa ang opsyon nga `-F` / `--filter`
 sa pagsala sa output sa wala pa kini isulat sa filesystem

 Ang bili niini nga opsyon kinahanglan nga usa ka dalan sa usa ka JS file nga nag-eksport sa usa ka function nga ginganlan og `filter`

 Ang `filter` function kinahanglan nga `async` tungod kay ang `await` tawagon niini

 Sa dili pa isulat ang mga file ngadto sa disk, ang tibuok sulod sa file ipasa ngadto sa `filter` function isip string

 Ang pagbalik nga kantidad gikan sa function nga `filter` mao ang aktuwal nga isulat sa pagtipig

 Sa ingon, ikaw adunay bug-os nga kontrol sa kung unsa ang isulat sa katapusan

 ### Tabang
 Gamita `-h` / `--help` aron ipakita ang tabang

 ## Malipayon nga Paghubad!

</pre>
