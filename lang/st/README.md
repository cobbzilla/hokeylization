Hokeylization
 =============
 Ke hobane'ng ha ke sa khone ho sebelisa app kapa sebaka sa ka kaofela ka Google Translate le ho fumana phetolelo ea mantlha ka puo e 'ngoe?

 ***Joale, u ka khona!***

 Lebitso `hokeylization` ke portmanteau, e bolelang "hokey localization"

 E batla e le hokey hobane e bonolo haholo: e romella melaetsa ho Google Translate

 'Me e bonolo, empa hape e matla haholo. E na le tšehetso e khethehileng bakeng sa litokomane tsa HTML,
 [HandlebarsJS](https://handlebarsjs.com/) litempele,
 le [Markdown](https://daringfireball.net/projects/markdown) lifaele.

 U ka fetolela:
 * ntho ea JavaScript e nang le melaetsa
 * palo efe kapa efe ea lifaele kapa li-directory, li lula li haola le li-directory khafetsa

 # Bala sena ka puo e 'ngoe
 Tokomane ena ea README.md e fetoletsoe, ho sebelisoa sesebelisoa sa hokeylization ka bosona, ho
 **[puo e nngwe le e nngwe e tshehetswa ke Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ke na le bonnete ba hore ha ea phethahala, empa ke ts'epa hore e betere ho feta letho!

 [🇸🇦 Searabia](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Sejeremane](../de/README.md)
 [🇺🇸 Senyesemane](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 Sefora](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Seindonesia](../id/README.md)
 [🇮🇹 Setaliana](../it/README.md)
 [🇯🇵 Sejapane](../ja/README.md)
 [🇰🇷 Sekorea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Sepolishe](../pl/README.md)
 [🇧🇷 Sepotoketsi](../pt/README.md)
 [🇷🇺 Serussia](../ru/README.md)
 [🇰🇪 Seswahili](../sw/README.md)
 [🇵🇭 Setagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Sevietnam](../vi/README.md)
 [🇨🇳 Sechaena](../zh/README.md)


 **[📚 ... Lipuo Tsohle ...](../README.md)**
 ----

 ### Na ho na le bothata ka phetolelo ee ea README?
 Phetolelo ena ea pele ea [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 e kanna ea ba le bofokoli -- *litokiso li amohelehile!* Ka kopo, romella [ho hula kopo ho GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 kapa ha o sa phutholoha ho etsa joalo, [bula bothata](https://github.com/cobbzilla/hokeylization/issues)

 Ha o theha taba e ncha ea GitHub mabapi le phetolelo, ka kopo etsa:
 * kenyelletsa URL ea leqephe (kopi / beha ho tsoa bareng ea aterese ea sebatli)
 * kenyelletsa mongolo o nepahetseng (kopi / beha ho tsoa ho sebatli)
 * Ka kopo hlalosa se fosahetseng -- na phetolelo e fosahetse? na sebopeho se robehile ka tsela e itseng?
 * ka mosa fana ka tlhahiso ea phetolelo e molemonyana, kapa hore na taba e ngotsoe joang ka tsela e nepahetseng
 * **Kea leboha!**

 # Litaba
 * [Mohloli](#Mohloli)
 * [Tšehetso le Lichelete](#Tšehetso-le-Lichelete)
 * [Kenyo](#Kenyeletso)
 * [Peaha](#Setapo)
 * [Ho fetolela faele ea mohloli oa likhoele tsa JavaScript](#Translating-a-JavaScript-string-resource-file-file)
 * [Ho fetolela bukana ea lifaele tsa mongolo](#Translating-a-directory-of-text-files)
 * [Likhetho tse ling](#Likhetho tse ling)
 * [Litaelo tsa sehlopha sa JSON](#JSON-batch-commands)

 ##Mohloli
 * [hokeylization ho GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization ho npm](https://www.npmjs.com/package/hokeylization)

 ## Tšehetso le Lichelete
 Ke leka ho ba setsebi sa software ea open source software. Ke ntse ke sebetsa
 indasteri ea software ka lilemo tse ngata, ke qalile lik'hamphani tse atlehileng mme ka li rekisetsa lik'hamphani tsa sechaba.
 Haufinyane tjena ke lahlehetsoe ke mosebetsi, 'me ha ho na mosebetsi o mong oo ke o lokiselitseng

 Kahoo ke tla leka ho ngola software e thusang mme ke bone hore na e ea sebetsa

 Ke tla leboha ka 'nete le tse nyane [kabelo ea khoeli le khoeli ka Patreon](https://www.patreon.com/cobbzilla)

 ## Kemiso
 Ho sebelisa sesebelisoa sa mola oa taelo, kenya o sebelisa `npm` kapa `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Ho e sebelisa joalo ka laebrari, kenya mofuta oa `lite` , o nyane haholo:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Ebe u sheba thuso bakeng sa taelo ea `hokey` :

    hokey --help
    hokey -h

 U batla ho bona tlhahiso ka puo ea hau kapa puo e 'ngoe?

 `hokey` leka ho bona puo ka bo eona ho tsoa ho maemo a tikoloho a khetla ea hau

 O ka qobella puo ka ho `LC_ALL` e fapaneng ea tikoloho:

    LC_ALL=it hokey --help

 Hlokomela hore haeba u kentse `hokeylization-lite` , taelo ea thuso e fumaneha feela ka Senyesemane

 ## Tlhophiso
 Beha boemo ba `GOOGLE_TRANSLATE_PROJECT_ID` ho khetholla mosebetsi oa hau oa Liphetolelo tsa Google

 Beha maemo a feto-fetohang a `GOOGLE_APPLICATION_CREDENTIALS` ho mangolo-tsoibila a JSON ao u a khoasitseng
 kamora ho fumana hore na netefatso e sebetsa joang ho Google cloud (e ka ba monate)

 Haeba u sebelisa khoutu ea mohloli, u ka boela ua kenya tsena faeleng ea `.env` mohloling
 li tla kenngoa ka nako ea tšebetso ka [dotenv](https://www.npmjs.com/package/dotenv)

 ## Ho fetolela faele ea mohloli oa likhoele tsa JavaScript
 Tafole ea hau ea likhoele ** e tlameha ho ba ** faeleng ea JavaScript ho e 'ngoe ea mefuta ena e' meli:

 ES6 ho romela thepa kantle ho naha:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ho romela thepa ea CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Haeba faele ena e ne e rehiloe `myfile.en.js` , u ka e fetolela ho Sepanishe le Sejeremane ka:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` e kaholimo e khethehile -- ke lentsoe le bolokiloeng sesebelisoa sena!

 `LANG` e nkeloa sebaka ke khoutu ea puo bakeng sa lifaele tse hlahisoang

 Kahoo taelo e ka holimo e theha lifaele:

    myfile.es.js
    myfile.de.js

 Khetho ea `-l` / `--languages` ke lenane le arohaneng la likoma la likhoutu tsa puo tsa ISO.
 [e tšehetsoa ke Google Translate](https://cloud.google.com/translate/docs/languages)

 Haeba faele e hlahisoang e se e ntse e le teng, e tla hlahlojoa ho fumana hore na ke linotlolo life tse seng li le teng.
 Linotlolo tse teng li ke ke tsa fetoleloa. Liphetolelo tsa linotlolo tse sieo li tla hlahisoa le ho hlongoa
 ho fihlela qetellong ea ntho ea JS. Faele kaofela e lula e ngoloa bocha.

 Ho qobella ho fetolela linotlolo tsohle, sebelisa khetho ea `-f` / `--force`

 ## Ho fetolela lethathamo la lifaele tsa mongolo
 U ka boela ua fetolela lethathamo la lifaele. hokeylization e tla etela khafetsa
 faele bukeng 'me u tsamaise litaba tsa eona ka Google Translate, 'me u boloke tlhahiso
 ho faele e nang le lebitso le tšoanang sefateng se arohaneng sa directory

 Ha sepheo sa phetolelo ea hau e le bukana, mokhoa ona oa lumelloa

 Khetho ea `-o` / `--outfile` e hlalosa bukana ea tlhahiso

 **TEMOSO E KGOLO**: Ha o fetolela dikhokahano, ** U SE KE UA** hlakisa lethathamo la tlhahiso
 e ka har'a bukana ea hau ea ho kenya! Haeba u etsa sena, u tla:
 * etsa hore ho iphetetsa ho sa feleng
 * tsamaisa sekoloto sa hau sa Google
 * tlatsa disk ea hau
 * ithabisa hanyane

 Mohlala ke ona oa seo *o sa lokelang ho se etsa*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Ha sena se sebetsa, lifaele tse fetoletsoeng li ngolloa ho `templates/es` , 'me kahoo e be ncha
 mohloli oa lifaele tseo u ka li fetolelang, kaha li tlas'a `templates/` -- ts'ebetso ena e ntse e tsoela pele
 ka ho sa feleng, u se ke ua e etsa!

 #### Tšebeliso e nepahetseng
 Ho lokile, ha re re u na le litempele tsa lengolo-tsoibila bukeng:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Ho fetolela tsena kaofela ho Sepanish le Sejeremane, matha:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Ho tse ka holimo, `LANG` ke lentsoe le bolokiloeng 'me le tla nkeloa sebaka ke khoutu ea puo ea ISO

 Ho etsahala'ng ha tse ka holimo li sebetsa:
 * Ho tla etsoa li-directory tsa `templates/email/es` le `templates/email/de` (haeba li le sieo)
 * Faele e 'ngoe le e' ngoe e `templates/email/en` e tla fetoleloa ho Sepanish le Sejeremane
 * Lifaele tse teng tse hlahisoang li ke ke tsa nchafatsoa ntle le haeba u sebelisa `-f` / `--force`
 * U tla qetella u e-na le sebopeho sa li-directory le lifaele tse ka hare ho `es` le `de` joalo ka ha u na le tlas'a `en`

 ## Likhetho tse ling

 ### Ho omella
 Feta `-n` / `--dry-run` ho bontša se neng se tla etsoa, empa ha e le hantle u se ke ua etsa mehala ea API kapa ua ngola lifaele

 ### Matla
 Feta `-f` / `--force` ho lula o nchafatsa liphetolelo, leha li se li le teng

 ### Papali
 Feta `-m` / `--match` ho fokotsa lifaele tse sebetsitsoeng ha li sebetsa ka mokhoa oa directory

 Mohlomong ha se kamehla u batlang ho fetolela *faele e 'ngoe le e 'ngoe* bukeng ea hau ea mohloli ho bukeng eo u batlang ho e fumana

 Boleng ba khetho ea `-m` / `--match` ke regex (hlokomela melao ea qotso ea khetla!) e hlakisang
 ke lifaele life tse lokelang ho fetoleloa

 Ha u belaela, u ka kopanya khetho ena le `-n` / `--dry-run` ho bona hore na ke lifaele life tse tla fetoleloa.

 ### Ha e kenyeletse
 Ka linako tse ling `-m` ea hau e tsamaisana le lifaele tse ngata haholo. Sebelisa khetho ea `-e` / `--excludes` ho qhelela ka thoko ka ho hlaka
 lifaele tse ka beng li tsamaellana

 O ka thathamisa li-regexe tse ngata, tse arotsoeng ke libaka

 Tšebeliso e tloaelehileng e ka ba: `--excludes node_modules dist \.git build tmp`

 ### Metsu
 Likhoele tse lokelang ho fetoleloa li kanna tsa ba le `{{ handlebars }}` thempleite, tse nang le li-curly braces tse peli kapa tse tharo.

 Mohlomong u * SE KE UA * batla hore lintho tse ka hare ho lithempleite tseo li fetoleloe

 Feta folakha ea `-H` / `--handlebars` , 'me eng kapa eng e ka hare ho `{{ ... }}` e ke ke ea fetoleloa

 ### Ho theoha
 Markdown ha se mongolo kapa html, kahoo Google Translate e na le mathata ka eona

 Folakha ea `-M` / `--markdown` e thusa ho sebetsana ka mokhoa o khethehileng bakeng sa lifaele tsa matšoao

 Ka lifaele tsa markdown, haeba u sa sebelise `-M` folakha, mohlomong u tla fumana mathata ana:
 * Lihokelo tse robehileng. Phetolelong, tlhaku ea sebaka e hlaha kamora hore tlhaloso ea sehokelo sa markdown e fele (ka `]` ) empa
 pele sehokelo sa eona sa sepheo se qala (ka `(` ). Sena se etsa hore markdown e fane ka phoso, le sehokelo
 e robehile ha o shebile tokomane.
 * Li-code block lia fetoleloa. Liphetolelo tsa Google ha li tsebe hore na markdown e nka khoutu efe le seo e sa e tsebeng
 * Sebaka se fosahetseng bakeng sa li-block tsa khoutu tse kentsoeng. Ho thata ho boloka sebaka sa ho fetolela
 * Lintho tse ka hare ho `backticks` tla fetoleloa, ha u batla hore e be boleng ba 'nete

 Ha folaga ea `-M` / `--markdown` e kentsoe tšebetsong:
 * Paterone `](` e tla fokotsoa hore e be `](` kahoo ho lokisa lihokelo tse robehileng
 * Sekoahelo sa "no translate" se tla behoa ho pota-pota li-code tse kentsoeng, ho boloka indentation e nepahetseng le ho netefatsa hore ha e fetoleloe.
 * Sephutheloana sa "no translate" se tla behoa ho pota-pota mongolo ka har'a `backticks` ho netefatsa hore ha li fetoleloe

 ### Ts'ebetso-joalo ka
 Ka tloaelo ntho e 'ngoe le e' ngoe e sebetsoa e le mongolo o hlakileng

 Haeba litaba tsa hau e le HTML, li tla senyeha ntle le haeba u fetisa khetho ea `-p html` / `--process-as html`

 ### Sefe
 Bakeng sa mahlahahlaha: ha o sebetsana le lifaele bukeng, o ka fetisa khetho ea `-F` / `--filter`
 ho sefa tlhahiso pele e ngolloa tsamaisong ea lifaele

 Boleng ba khetho ena e tlameha ho ba tsela e lebisang faeleng ea JS e romelang mosebetsi o bitsoang `filter`

 Tshebetso ea `filter` e tlameha ho ba `async` hobane `await` e tla bitsoa ho eona

 Pele lifaele li ngolloa ho disk, litaba tsohle tsa faele li tla fetisetsoa mosebetsing oa `filter` joalo ka khoele

 Theko ea ho khutlisa ho tsoa ho `filter` ke eona e tla ngolloa polokelong

 Kahoo, u na le taolo e felletseng holim'a se tla qetella se ngotsoe

 Sengoliloeng sa `filter` se tla batloa libakeng tse latelang:
 * Bukana ea hona joale
 * Bukana e bitsoang `.hokey-filters` ka har'a bukana ea hajoale
 * Bukana e bitsoang `${HOME}/.hokey-filters` , moo `${HOME}` e leng bukana ea lehae ea mosebelisi ea hajoale
 * Sengoloa se hahelletsoeng ka har'a [sengoloa sa lifilimi](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 ### Thusa
 Sebelisa `-h` / `--help` ho bontša thuso

 Litaelo tsa ## JSON batch
 Ka khetho ea `-j` / `--json` , o ka tsamaisa litaelo tse ngata tse hokahaneng tsa `hokey`

 Ka tloaelo faele ena e bitsoa `hokey.json` , empa u ka e reha eng kapa eng eo u e batlang

 Haeba u fetisa bukana e le khetho ea `-j` , `hokey` e tla batla `hokey.json` bukeng eo

 Faele ea JSON e tlameha ho ba le ntho e le 'ngoe. Ka har'a ntho eo, mabitso a thepa ea eona a tšoana le
 likhetho tsa mela-taelo, hammoho le thepa e le 'ngoe e bitsoang `hokey`

 Thepa ea `hokey` ke letoto la litaelo tse lokelang ho etsoa. Thepa e boletsoeng ka har'a litaelo tsena e tla
 hlakola liphatlalatso life kapa life tse phetoang nthong e kantle.

 Ka har'a ntho e 'ngoe le e' ngoe ka har'a sehlopha sa `hokey` , u lokela ho bolela `name` , le lifaele tsa ho kenya le tse hlahisoang.

 Mohlala ke ona oa `hokey.json`

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
            "filter": "filterReadme.js",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Lifaele tse ngata tse kentsoeng
 Feta litsela tse ngata tsa lifaele joalo ka `infiles` ho fapana le tsela e le 'ngoe `infile` , joalo ka mohlala ona:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Litlhaloso
 Ha u fetolela lipuong tse ngata, `hokey` e ka etsa faele ea index e thathamisang liphetolelo tsohle tse entsoeng
 le ho fana ka lihokelo ho tsona

 *Ha u hlahisa li-index, u ka ba le mohloli o le mong feela oa ho kenya*

 Feta khetho ea `-I` / `--index` , boleng ke moo faele ea index e tla hlahisoa, e ka bang faele.
 kapa bukeng. Haeba e le bukana, lebitso la faele le tla sebelisoa, le ipapisitse le template (sheba ka tlase)

 Sebelisa `-A` / `--index-template` ho fumana hore na tlhahiso ea index e hlophisitsoe joang. O ka hlakisa 'html',
 'markdown', 'text', kapa tsela ea faele e eang ho [HandlebarsJS](https://handlebarsjs.com/) template ea hau

 Haeba u hlakisa template ea hau, u tlameha hape ho hlakisa faele (eseng bukana) bakeng sa `-I` / `--index`
 kgetho

 ## Eba le nako e monate ea ho fetolela lipuo!

</pre>
