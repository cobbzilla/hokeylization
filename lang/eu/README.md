Hokeylizazioa
 ==============
 Zergatik ezin dut nire aplikazio edo gune osoa Google Translate bidez exekutatu eta oinarrizko itzulpena beste hizkuntza batean lortu?

 ***Orain, dezakezu!***

 `hokeylization` izena hitz bat da, 'hokey lokalizazioa' esan nahi duena

 Hokey samarra da, oso sinplea delako: kateak bidaltzen ditu Google Translate-ra

 Eta sinplea da, baina oso indartsua ere bada. HTML dokumentuetarako euskarri berezia du,
 [HandlebarsJS](https://handlebarsjs.com/) txantiloiak,
 eta [Markdown](https://daringfireball.net/projects/markdown) fitxategiak.

 Itzul dezakezu:
 * mezuak dituen JavaScript objektu bat
 * edozein fitxategi edo direktorio, beti direktorioak modu errekurtsiboan zeharkatuz

 # Irakurri hau beste hizkuntza batean
 README.md dokumentu hau, hokeylization tresna bera erabiliz, itzuli da
 **[Google Translate-k onartzen duen hizkuntza guztietan](https://cloud.google.com/translate/docs/languages)!**

 Ziur nago ez dela perfektua, baina espero dut ezer baino hobea izatea!

 [🇸🇦 arabiera](../ar/README.md)
 [🇧🇩 bengalera](../bn/README.md)
 [🇩🇪 alemana](../de/README.md)
 [🇺🇸 ingelesa](../eu/README.md)
 [🇪🇸 Gaztelania](../es/README.md)
 [🇫🇷 frantsesa](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesiera](../id/README.md)
 [🇮🇹 italiera](../it/README.md)
 [🇯🇵 Japoniera](../ja/README.md)
 [🇰🇷 koreera](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 poloniera](../pl/README.md)
 [🇧🇷 portugesa](../pt/README.md)
 [🇷🇺 errusiera](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 turkiera](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamera](../vi/README.md)
 [🇨🇳 txinera](../zh/README.md)


 **[📚 ... Hizkuntza guztiak ...](../README.md)**
 ----

 ### Arazorik al dago IRAKURRI-ren itzulpen honekin?
 [README] jatorrizkoaren itzulpen zehatz hau (https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 akatsa izan daiteke -- *zuzenketak oso ongi etorriak dira!* Bidali [pull eskaera GitHub-en](https://github.com/cobbzilla/hokeylization/pulls),
 edo hori egiten eroso ez bazaude, [ireki arazo bat](https://github.com/cobbzilla/hokeylization/issues)

 Itzulpen bati buruzko GitHub-en arazo berri bat sortzen duzunean, egin:
 * Sartu orriaren URLa (kopiatu/itsatsi arakatzailearen helbide barratik)
 * sartu oker dagoen testu zehatza (kopiatu/itsatsi arakatzailetik)
 * Mesedez, deskribatu zer dagoen gaizki -- itzulpena okerra al da? formatua hautsi al da nolabait?
 * Mesedez, eskaini itzulpen hobeago baten iradokizuna, edo testua nola formateatu behar den
 * **Eskerrik asko!**

 # Edukiak
 * [Iturria](#Iturria)
 * [Laguntza eta finantzaketa](#Support-and-Funding)
 * [Instalazioa](#Instalazioa)
 * [Konfigurazioa](#Konfigurazioa)
 * [JavaScript kate-baliabide-fitxategi bat itzultzen](#Translating-a-JavaScript-string-resource-file)
 * [Testu fitxategien direktorio bat itzultzea](#Translating-a-directory-of-text-fitxategiak)
 * [Beste aukera batzuk](#Beste aukerak)
 * [JSON batch komandoak](#JSON-batch-commands)

 ## Iturria
 * [hokeylization GitHub-en](https://github.com/cobbzilla/hokeylization)
 * [hokeylization npm-n](https://www.npmjs.com/package/hokeylization)

 ## Laguntza eta finantzaketa
 Kode irekiko software garatzaile profesionala izaten saiatzen ari naiz. lanean aritu naiz
 urte askotan softwarearen industrian, enpresa arrakastatsuak sortu eta enpresa publikoei saldu ditut.
 Duela gutxi lana galdu nuen, eta ez daukat beste lanik prest

 Beraz, software lagungarria idazten saiatuko naiz eta ea funtzionatzen duen

 Zintzoki eskertuko nuke [Patreon bidez hileko ekarpena] txikiena ere (https://www.patreon.com/cobbzilla)

 ## Instalazioa
 Komando-lerroko tresna erabiltzeko, instalatu `npm` " edo `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Liburutegi gisa erabiltzeko, instalatu `lite` bertsioa, hau da, askoz txikiagoa:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Ondoren, begiratu `hokey` komandoaren laguntza:

    hokey --help
    hokey -h

 Irteera zure hizkuntzan edo beste hizkuntza batean ikusi nahi duzu?

 `hokey` hizkuntza automatikoki detektatzen saiatzen da zure shell-eko ingurune-aldagaietatik

 Hizkuntza bat behartu dezakezu `LC_ALL` ingurune-aldagaia ezarriz:

    LC_ALL=it hokey --help

 Kontuan izan `hokeylization-lite` instalatu baduzu, komandoen laguntza ingelesez soilik dago erabilgarri

 ## Konfigurazioa
 Ezarri `GOOGLE_TRANSLATE_PROJECT_ID` ingurune-aldagaia zure Google Translate proiektua identifikatzeko

 Ezarri `GOOGLE_APPLICATION_CREDENTIALS` ingurune-aldagaia deskargatu dituzun JSON kredentzialetan
 Google hodeian autentifikazioak nola funtzionatzen duen jakin ondoren (dibertigarria izan daiteke)

 Iturburu-kodetik exekutatzen ari bazara, hauek ere iturburuko `.env` fitxategi batean jar ditzakezu
 direktorioa exekutatzean kargatuko dira [dotenv] bidez (https://www.npmjs.com/package/dotenv)

 ## JavaScript string baliabide-fitxategi bat itzultzen
 Zure kate-taula **behar** du JavaScript fitxategi batean egon bi forma hauetako batean:

 ES6 esportazioa:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS esportazioa

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Fitxategi hau `myfile.en.js` izena bazen, gaztelaniara eta alemanera itzul dezakezu honekin:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Goiko `LANG` berezia da -- tresna honetako hitz erreserbatua da!

 `LANG` irteerako fitxategien hizkuntza-kodearekin ordezkatzen da

 Horrela goiko komandoak fitxategiak sortzen ditu:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` aukera komaz bereizitako ISO hizkuntza-kodeen zerrenda da
 [Google Translate-k onartzen du](https://cloud.google.com/translate/docs/languages)

 Irteera-fitxategia jada existitzen bada, dagoeneko zein gako dauden zehazteko aztertuko da.
 Lehendik dauden gakoak ez dira itzuliko. Falta diren gakoen itzulpenak sortu eta erantsiko dira
 JS objektuaren amaieraraino. Fitxategi osoa berridazten da beti.

 Tekla guztiak berriro itzultzeko behartzeko, erabili `-f` / `--force` aukera

 ## Testu fitxategien direktorio bat itzultzen
 Fitxategien direktorio bat ere itzul dezakezu. hokeylization errekurtsiboki bisitatuko du guztietan
 fitxategia direktorioan eta exekutatu bere edukia Google Translate bidez, eta gorde irteera
 direktorio-zuhaitz bereizi batean izen bereko fitxategi batera

 Zure itzulpenaren helburua direktorio bat denean, modu hau gaituta dago

 `-o` / `--outfile` aukerak irteerako direktorioa zehazten du

 **KONTUZ HANDIA**: Direktorioak itzultzean, **EZ** zehaztu irteerako direktorioa
 hori zure sarrera direktorioa barruan dago! Hau egiten baduzu, honako hau egingo duzu:
 * Errekurtsio infinitua eragin
 * exekutatu zure Google faktura
 * bete zure diskoa
 * gutxiago ondo pasa

 Hona hemen *ez egin beharrekoaren adibide bat*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Hau exekutatzen denean, itzulitako fitxategiak `templates/es` -en idazten dira eta, horrela, berriak bihurtzen dira
 Itzuli beharreko iturburu-fitxategiak, `templates/` azpian daudenez -- prozesu honek aurrera jarraitzen du
 betiko, ez egin!

 #### Erabilera zuzena
 Ados, demagun direktorio batean posta elektronikoko txantiloi batzuk dituzula:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Horiek guztiak gaztelaniara eta alemanera itzultzeko, exekutatu:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Goian, `LANG` hitz erreserbatua da eta ISO hizkuntza-kodearekin ordezkatuko da

 Zer gertatzen da goikoa abiarazten denean:
 * `templates/email/es` eta `templates/email/de` direktorioak sortuko dira (ez badaude)
 * `templates/email/en` -ko fitxategi guztiak gaztelaniara eta alemanera itzuliko dira
 * Lehendik dauden irteerako fitxategiak ez dira birsortuko `-f` / `--force` erabiltzen ez baduzu
 * `es` eta `de` barruko direktorio-egitura eta fitxategi berdinak izango dituzu ` `en` azpian duzun bezala

 ## Beste aukera batzuk

 ### Korrika lehorra
 Pasatu `-n` / `--dry-run` egingo litzatekeena bistaratzeko, baina ez egin API deirik edo idatzi fitxategirik

 ### Indarra
 Pasa `-f` / `--force` itzulpenak beti birsortzeko, nahiz eta dagoeneko existitzen diren

 ### Bat etortzea
 Pasa `-m` / `--match` direktorio moduan exekutatzen ari zarenean prozesatutako fitxategiak mugatzeko

 Baliteke beti ez izatea zure iturburu-direktorioko *fitxategi guztiak* zure helburuko direktoriora itzuli nahi izatea

 `-m` / `--match` aukeraren balioa zehazten duen regex bat da (kontuz shell aipamen arauak!)
 zein fitxategi itzuli behar diren

 Zalantzarik baduzu, aukera hau `-n` / `--dry-run` ekin konbina dezakezu zein fitxategi itzuliko diren ikusteko

 ### Baztertzen du
 Batzuetan, zure `-m` fitxategi gehiegirekin bat dator. Erabili `-e` / `--excludes` aukera esplizituki baztertzeko
 bestela bat etorriko liratekeen fitxategiak

 Regexe anitz zerrenda ditzakezu, zuriunez bereizita

 Erabilera arrunta hau izango litzateke: `--excludes node_modules dist \.git build tmp`

 ### Eskulekuak
 Itzultzeko kateek `{{ handlebars }}` txantiloiak izan ditzakete, bi edo hiru giltza kizkurrekin

 Ziurrenik *EZ* duzu nahi txantiloi horien barruan dauden gauzak itzultzea

 Pasa `-H` / `--handlebars` bandera, eta `{{ ... }}` barruan dagoen ezer ez da itzuliko

 ### Markdown
 Markdown ez da testua ez html, beraz, Google Translate-k zailtasun batzuk ditu

 `-M` / `--markdown` markdown fitxategiak kudeatzeko aukera ematen du

 Markdown fitxategiekin, `-M` bandera erabiltzen ez baduzu, ziurrenik arazo hauek aurkituko dituzu:
 * Hautsitako estekak. Itzulpenean, zuriune bat agertzen da markdown estekaren deskribapena amaitu ondoren ( `]` rekin) baina
 helburuko esteka hasi baino lehen ( `(` )-rekin). Honek markdown-a gaizki errendatzea eragiten du, eta esteka
 dokumentua ikustean hautsita dago.
 * Kode blokeak itzultzen dira. Google Translate-k ez daki markdown-ek zer den kodea hartzen duen eta zer ez
 * Koskatutako kode-blokeen tarte okerra. Zaila da tartea mantentzea itzulpenean
 * `backticks` barruan dauden gauzak itzuliko dira, ia beti balio literalak izatea nahi duzunean

 `-M` / `--markdown` bandera gaituta dagoenean:
 * Eredua `](` `](` kondentsatu egingo da, horrela hautsitako markdown estekak konponduko dira
 * Koskatutako kode blokeen inguruan "itzultzerik gabeko" bilgarri bat jarriko da, koska egokia mantenduz eta itzuli ez direla ziurtatuz
 * "itzulpenik gabeko" bilgarri bat jarriko da testuaren inguruan `backticks` barruan, itzuli ez direla ziurtatzeko

 ### Prozesu gisa
 Normalean dena testu arrunt gisa prozesatzen da

 Zure edukia HTML bada, hondatu egingo da `-p html` / `--process-as html` aukera pasatzen ez baduzu

 ### Iragazi
 Abenturazaleentzat: fitxategiak direktorio batean prozesatzen dituzunean, `-F` / `--filter` aukera pasa dezakezu
 irteera iragazteko fitxategi-sisteman idatzi aurretik

 Aukera honen balioa `filter` izeneko funtzioa esportatzen duen JS fitxategi baterako bide bat izan behar du

 `filter` izan behar du, `async` `await`

 Fitxategiak diskoan idatzi aurretik, fitxategiaren eduki osoa `filter` funtziora pasatuko da kate gisa

 `filter` funtzioaren itzulera-balioa biltegiratze-ra benetan idatziko dena da

 Horrela, azkenean idatziko denaren gaineko kontrol osoa duzu

 `filter` script-a kokapen hauetan bilatuko da:
 * Uneko direktorioa
 * `.hokey-filters` izeneko direktorio bat uneko direktorioaren barruan
 * `${HOME}/.hokey-filters` izeneko direktorio bat, non `${HOME}` uneko erabiltzailearen hasierako direktorioa den
 * [iragazkien direktorioa] integratua (https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 ### Laguntza
 Erabili `-h` / `--help` laguntza erakusteko

 ## JSON batch komandoak
 `-j` / `--json` aukerarekin, hainbat `hokey` komando koordinatu exekutatu ditzakezu

 Konbentzioz fitxategi honi `hokey.json` deitzen zaio, baina nahi duzuna izendatu diezaiokezu

 Direktorio bat `-j` aukera gisa pasatzen baduzu, `hokey` `hokey.json` du direktorio horretan

 JSON fitxategiak objektu bat izan behar du. Objektu horren barruan, bere propietate-izenak berdinak dira
 komando-lerroko aukerak, gehi `hokey` izeneko propietate gehigarri bat

 `hokey` propietatea exekutatzeko komando sorta bat da. Komando horien barruan deklaratutako propietateak izango dira
 gainidatzi kanpoko objektuko deklarazio bikoiztuak.

 `hokey` matrizeko objektu bakoitzaren barruan, ` `name` eta sarrerako eta irteerako fitxategiak zehaztu behar dituzu.

 Hona hemen `hokey.json` baten adibide bat

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

 ### Hainbat sarrera-fitxategi
 Pasatu fitxategi-bideen array bat `infile` `infiles` gisa `infile' bide bakar baten ordez, adibide honetan bezala:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Aurkibideak
 Hizkuntza askotara itzultzean, `hokey` -k egindako itzulpen guztiak zerrendatzen dituen indize fitxategi bat sor dezake
 eta estekak eskaintzen ditu

 *Indizeak sortzerakoan, sarrera iturri bakarra izan dezakezu*

 Pasa `-I` / `--index` aukera, balioa indize-fitxategia non sortuko da, fitxategi bat izan daitekeena
 edo direktorio bat. Direktorio bat bada, fitxategi-izen lehenetsi bat erabiliko da, txantiloiaren arabera (ikus behean)

 Erabili `-A` / `--index-template` indizearen irteera nola formateatzen den zehazteko. 'html' zehaztu dezakezu,
 'markdown', 'testua' edo zure [HandlebarsJS](https://handlebarsjs.com/) txantiloiaren fitxategiaren bidea

 Zure txantiloia zehazten baduzu, fitxategi bat (ez direktorio bat) ere zehaztu behar duzu `-I` / `--index`
 aukera

 ## Ondo pasa hizkuntzak itzultzen!

</pre>
