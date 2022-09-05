Hokeylization
 =============
 Bakit hindi ko mapatakbo ang aking buong app o site sa pamamagitan ng Google Translate at makakuha ng pangunahing pagsasalin sa ibang wika?

 ***Ngayon, kaya mo na!***

 Ang pangalang `hokeylization` ay isang portmanteau, ibig sabihin ay 'hokey localization'

 Ito ay medyo hokey dahil ito ay napaka-simple: nagpapadala ito ng mga string sa Google Translate

 At ito ay simple, ngunit napakalakas din. Mayroon itong espesyal na suporta para sa mga HTML na dokumento,
 [HandlebarsJS](https://handlebarsjs.com/) na mga template,
 at [Markdown](https://daringfireball.net/projects/markdown) na mga file.

 Maaari mong isalin ang:
 * isang JavaScript object na naglalaman ng mga mensahe
 * anumang bilang ng mga file o direktoryo, palaging binabagtas ang mga direktoryo nang paulit-ulit

 # Basahin ito sa ibang wika
 Itong README.md na dokumento ay isinalin, gamit ang hokeylization tool mismo, sa
 **[bawat wikang sinusuportahan ng Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Natitiyak kong hindi ito perpekto, ngunit umaasa ako na ito ay mas mahusay kaysa sa wala!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
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
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[📚 ... Lahat ng Wika ...](../README.md)**
 ----

 ### May problema ba sa pagsasaling ito ng README?
 Ang partikular na pagsasaling ito ng orihinal na [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 maaaring may depekto -- *ang mga pagwawasto ay malugod na tinatanggap!* Mangyaring magpadala ng [pull request sa GitHub](https://github.com/cobbzilla/yuebing/pulls),
 o kung hindi ka komportableng gawin iyon, [magbukas ng isyu](https://github.com/cobbzilla/yuebing/issues)

 Kapag gumawa ka ng bagong isyu sa GitHub tungkol sa isang pagsasalin, mangyaring gawin ang:
 * isama ang URL ng pahina (kopyahin/i-paste mula sa address bar ng browser)
 * isama ang eksaktong text na mali (kopyahin/i-paste mula sa browser)
 * mangyaring ilarawan kung ano ang mali -- mali ba ang pagsasalin? sira ba ang formatting kahit papaano?
 * mabait na mag-alok ng isang mungkahi ng isang mas mahusay na pagsasalin, o kung paano ang teksto ay dapat na maayos na na-format
 * **Salamat!**

 # Nilalaman
 * [Source](#Source)
 * [Suporta at Pagpopondo](#Support-and-Funding)
 * [Pag-install](#Pag-install)
 * [Setup](#Setup)
 * [Pagsasalin ng JavaScript string resource file](#Translating-a-JavaScript-string-resource-file)
 * [Pagsasalin ng direktoryo ng mga text file](#Translating-a-directory-of-text-files)
 * [Iba pang mga opsyon](#Other-options)
 * [JSON batch commands](#JSON-batch-commands)

 ## Pinagmulan
 * [hokeylization sa GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization sa npm](https://www.npmjs.com/package/hokeylization)

 ## Suporta at Pagpopondo
 Sinusubukan kong maging isang propesyonal na open source software developer. Ako ay nagtatrabaho sa
 sa industriya ng software sa loob ng maraming taon, sinimulan ko ang mga matagumpay na kumpanya at ibinenta ang mga ito sa mga pampublikong kumpanya.
 Kamakailan ay nawalan ako ng trabaho, at wala talaga akong ibang trabahong naka-line up

 Kaya't susubukan kong magsulat ng kapaki-pakinabang na software at tingnan kung gumagana iyon

 Taos-puso akong nagpapasalamat kahit na ang pinakamaliit na [buwanang kontribusyon sa pamamagitan ng Patreon](https://www.patreon.com/cobbzilla)

 ## Pag-install
 Para gamitin ang command line tool, i-install gamit `npm` o `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Upang magamit bilang isang library, i-install ang `lite` na bersyon, na mas maliit:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Pagkatapos ay tumingin sa tulong para sa utos na `hokey` :

    hokey --help
    hokey -h

 Gustong makita ang output sa iyong wika o ibang wika?

 Sinusubukan ng `hokey` na awtomatikong makita ang wika mula sa mga variable ng kapaligiran ng iyong shell

 Maaari mong pilitin ang isang wika sa pamamagitan ng pagtatakda ng environment variable ng `LC_ALL` :

    LC_ALL=it hokey --help

 Tandaan na kung na-install mo ang `hokeylization-lite` , available lang ang command help sa English

 ## Setup
 Itakda ang environment variable ng `GOOGLE_TRANSLATE_PROJECT_ID` upang matukoy ang iyong proyekto sa Google Translate

 Itakda ang variable ng environment na `GOOGLE_APPLICATION_CREDENTIALS` sa mga kredensyal ng JSON na na-download mo
 pagkatapos malaman kung paano gumagana ang pagpapatotoo sa Google cloud (maaari itong maging masaya)

 Kung tumatakbo ka mula sa source code, maaari mo ring ilagay ang mga ito sa isang `.env` file sa source
 direktoryo na ilo-load ang mga ito sa runtime sa pamamagitan ng [dotenv](https://www.npmjs.com/package/dotenv)

 ## Pagsasalin ng JavaScript string resource file
 Ang iyong string table **dapat** ay nasa isang JavaScript file sa isa sa dalawang form na ito:

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

 Kung ang file na ito ay pinangalanang `myfile.en.js` , maaari mo itong isalin sa Spanish at German gamit ang:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Ang `LANG` sa itaas ay espesyal -- ito ay isang nakalaan na salita sa tool na ito!

 Ang `LANG` ay pinalitan ng language code para sa mga output file

 Kaya ang utos sa itaas ay lumilikha ng mga file:

    myfile.es.js
    myfile.de.js

 Ang `-l` / `--languages` ay isang listahan na pinaghihiwalay ng kuwit ng mga ISO code ng wika
 [sinusuportahan ng Google Translate](https://cloud.google.com/translate/docs/languages)

 Kung ang output file ay mayroon na, ito ay susuriin upang matukoy kung aling mga susi ang mayroon na.
 Ang mga kasalukuyang key ay hindi isasalin. Ang mga pagsasalin para sa mga nawawalang key ay bubuo at idaragdag
 hanggang sa dulo ng JS object. Ang buong file ay palaging muling isinulat.

 Para pilitin ang muling pagsasalin ng lahat ng key, gamitin ang `-f` / `--force`

 ## Pagsasalin ng direktoryo ng mga text file
 Maaari mo ring isalin ang isang direktoryo ng mga file. hokeylization ay recursively bisitahin ang bawat
 file sa direktoryo at patakbuhin ang mga nilalaman nito sa pamamagitan ng Google Translate, at i-save ang output
 sa isang kaparehong pinangalanang file sa isang hiwalay na puno ng direktoryo

 Kapag ang target ng iyong pagsasalin ay isang direktoryo, ang mode na ito ay pinagana

 Ang `-o` / `--outfile` opsyon ay tumutukoy sa output directory

 **MALAKING BABALA**: Kapag nagsasalin ng mga direktoryo, **HUWAG** tukuyin ang isang direktoryo ng output
 iyon ay nasa loob ng iyong input directory! Kung gagawin mo ito, ikaw ay:
 * magbuod ng walang katapusang recursion
 * patakbuhin ang iyong Google bill
 * punan ang iyong disk
 * hindi gaanong masaya

 Narito ang isang halimbawa ng kung ano ang *hindi dapat gawin*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kapag ito ay tumakbo, ang mga isinaling file ay isinusulat sa `templates/es` , at sa gayon ay magiging bago
 source file na isasalin, dahil nasa ilalim sila ng `templates/` -- nagpapatuloy ang prosesong ito
 magpakailanman, huwag gawin ito!

 #### Tamang paggamit
 OK, sabihin nating mayroon kang ilang template ng email sa isang direktoryo:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Upang isalin ang lahat ng ito sa Espanyol at Aleman, patakbuhin ang:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Sa itaas, ang `LANG` ay isang nakalaan na salita at papalitan ng ISO language code

 Ano ang mangyayari kapag tumakbo ang nasa itaas:
 * Ang `templates/email/es` at `templates/email/de` direktoryo ay malilikha (kung wala ang mga ito)
 * Ang bawat file sa `templates/email/en` ay isasalin sa Spanish at German
 * Ang mga kasalukuyang output file ay hindi mabubuo maliban kung gumamit ka `-f` / `--force`
 * Magkakaroon ka ng magkaparehong istraktura ng direktoryo at mga file sa loob `es` at `de` tulad ng mayroon ka sa ilalim ng `en`

 ## Iba pang mga pagpipilian

 ### Dry run
 Ipasa `-n` / `--dry-run` upang ipakita kung ano ang gagawin, ngunit huwag talagang gumawa ng anumang mga tawag sa API o magsulat ng anumang mga file

 ### Puwersa
 Ipasa `-f` / `--force` para laging buuin ang mga pagsasalin, kahit na mayroon na ang mga ito

 ### Tugma
 Ipasa `-m` / `--match` upang limitahan ang mga file na naproseso kapag tumatakbo sa directory-mode

 Maaaring hindi mo palaging nais na isalin ang *bawat* file sa iyong pinagmulang direktoryo sa iyong target na direktoryo

 Ang halaga ng `-m` / `--match` ay isang regex (mag-ingat sa mga panuntunan sa pag-quote ng shell!) na tumutukoy
 kung aling mga file ang dapat isalin

 Kapag may pagdududa, maaari mong pagsamahin ang opsyong ito sa `-n` / `--dry-run` upang makita kung aling mga file ang isasalin

 ### Hindi kasama
 Minsan ang iyong `-m` tumutugma sa napakaraming file. Gamitin ang `-e` / `--excludes` para tahasang magbukod
 mga file na sana ay tumugma

 Maaari kang maglista ng maraming regex, na pinaghihiwalay ng mga puwang

 Ang karaniwang paggamit ay: `--excludes node_modules dist \.git build tmp`

 ### Mga Handlebar
 Ang mga string na isasalin ay maaaring maglaman ng mga template `{{ handlebars }}` , alinman sa dalawa o tatlong curly-braces

 Malamang *AYAW* mong maisalin ang mga bagay sa loob ng mga template na iyon

 Ipasa ang `-H` / `--handlebars` flag, at anumang bagay sa loob ng `{{ ... }}` ay hindi isasalin

 ### Markdown
 Ang Markdown ay hindi text o html, kaya nahihirapan ang Google Translate dito

 Ang `-M` / `--markdown` flag ay nagbibigay-daan sa espesyal na pangangasiwa para sa mga markdown na file

 Sa mga markdown file, kung hindi mo gagamitin ang flag na `-M` , malamang na mahahanap mo ang mga problemang ito:
 * Sirang mga link. Sa pagsasalin, lumilitaw ang isang space character pagkatapos magtapos ang paglalarawan ng markdown link (na may `]` ) ngunit
 bago magsimula ang target na link nito (na may `(` ). Nagdudulot ito ng hindi tamang pag-render ng markdown, at ang link
 ay sira kapag tinitingnan ang dokumento.
 * Ang mga bloke ng code ay naisalin. Hindi alam ng Google translate kung ano ang itinuturing ng markdown na code at kung ano ang hindi
 * Maling spacing para sa mga naka-indent na bloke ng code. Mahirap panatilihin ang espasyo sa pagsasalin
 * Ang mga bagay sa loob ng `backticks` ay isasalin, kapag halos palaging gusto mong maging literal na halaga ang mga ito

 Kapag pinagana ang flag na `-M` / `--markdown` :
 * Ang pattern `](` ay gagawing `](` kaya inaayos ang mga sirang markdown link
 * Maglalagay ng wrapper na "no translate" sa paligid ng mga naka-indent na bloke ng code, na pinapanatili ang wastong indentation at tinitiyak na hindi ito isinasalin
 * Maglalagay ng wrapper na "no translate" sa paligid ng text sa loob ng `backticks` upang matiyak na hindi isinasalin ang mga ito

 ### Proseso-bilang
 Karaniwan ang lahat ay pinoproseso bilang plain text

 Kung HTML ang iyong content, magugulo ito maliban kung ipapasa mo ang `-p html` / `--process-as html`

 ### Filter
 Para sa adventurous: kapag nagpoproseso ng mga file sa isang direktoryo, maaari mong ipasa ang `-F` / `--filter`
 upang i-filter ang output bago ito isulat sa filesystem

 Ang halaga ng opsyong ito ay dapat na isang path sa isang JS file na nag-e-export ng function na pinangalanang `filter`

 Ang `filter` function ay dapat na `async` dahil ang `await` ay tatawagin dito

 Bago isulat ang mga file sa disk, ang buong nilalaman ng file ay ipapasa sa `filter` function bilang isang string

 Ang return value mula sa function na `filter` ay ang aktwal na isusulat sa storage

 Kaya, mayroon kang ganap na kontrol sa kung ano ang isusulat sa wakas

 ### Tulong
 Gamitin `-h` / `--help` para magpakita ng tulong

 ## Mga batch na command ng JSON
 Gamit ang `-j` / `--json` , maaari kang magpatakbo ng maraming coordinated na command `hokey`

 Ayon sa convention ang file na ito ay tinatawag na `hokey.json` , ngunit maaari mo itong pangalanan kahit anong gusto mo

 Kung ipapasa mo ang isang direktoryo bilang opsyong `hokey` `-j` maghahanap ang `hokey` ng `hokey.json` sa direktoryong iyon

 Ang JSON file ay dapat maglaman ng isang bagay. Sa loob ng bagay na iyon, ang mga pangalan ng property nito ay kapareho ng
 ang mga opsyon sa command-line, kasama ang isang karagdagang property na pinangalanang `hokey`

 Ang property `hokey` ay isang hanay ng mga command na tatakbo. Ang mga katangiang idineklara sa loob ng mga utos na ito ay
 i-override ang anumang mga duplicate na deklarasyon sa panlabas na bagay.

 Sa loob ng bawat bagay sa hanay ng `hokey` , dapat kang tumukoy ng `name` , at ang mga input at output na file

 Narito ang isang halimbawa ng `hokey.json`

    {
        "inputLanguage": "en",
        "languages": "es,fr,ja", # can also be an array of strings
        "force": false,
        "match": null,
        "processAs": null,
        "excludes": ["exclude-1", "exclude-2"],
        "handlebars": false,
        "markdown": false,
        "regular": false,
        "dryRun": false,
        "filter": "theFilter.js",
        "hokey": [
          {
            "name": "locale names",
            "infile": "messages/locales_en.js",
            "outfile": "messages/locales_LANG.js",
            "handlebars": true
          },
          {
            "name": "CLI messages",
            "infile": "messages/en_messages.js",
            "outfile": "messages/LANG_messages.js",
            "handlebars": true
          },
          {
            "name": "README",
            "infile": "README.md",
            "outfile": "lang/LANG/",
            "excludes": ["lang/", "node_modules/", "\\.git/", "tmp/"],
            "filter": "util/filterReadme.js",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Maramihang input file
 Magpasa ng hanay ng mga path ng file bilang `infiles` sa halip na isang path `infile` , tulad ng sa halimbawang ito:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Mga index
 Kapag nagsasalin sa maraming wika, maaaring lumikha ang `hokey` index file na naglilista ng lahat ng ginawang pagsasalin
 at nagbibigay ng mga link sa kanila

 *Kapag bumubuo ng mga index, maaari kang magkaroon lamang ng isang input source*

 Ipasa ang `-I` / `--index` , ang halaga ay kung saan bubuo ang index file, na maaaring isang file
 o isang direktoryo. Kung ito ay isang direktoryo, isang default na filename ang gagamitin, batay sa template (tingnan sa ibaba)

 Gamitin ang `-A` / `--index-template` upang matukoy kung paano naka-format ang index output. Maaari mong tukuyin ang 'html',
 'markdown', 'text', o ang file path sa iyong sariling [HandlebarsJS](https://handlebarsjs.com/) na template

 Kung tinukoy mo ang iyong sariling template, kailangan mo ring tumukoy ng file (hindi isang direktoryo) para sa `-I` / `--index`
 opsyon

 ## Magsaya sa pagsasalin ng mga wika!

</pre>
