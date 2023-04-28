Hokeylizimi
 ==============
 Pse nuk mund ta ekzekutoj të gjithë aplikacionin ose sajtin tim përmes Google Translate dhe të marr një përkthim bazë në një gjuhë tjetër?

 ***Tani mundesh!***

 Emri `hokeylization` është një portmanteau, që do të thotë "lokalizimi i hokey"

 Është disi e këndshme sepse është shumë e thjeshtë: dërgon vargje në Google Translate

 Dhe është e thjeshtë, por edhe shumë e fuqishme. Ka mbështetje të veçantë për dokumentet HTML,
 Modelet e [HandlebarsJS](https://handlebarsjs.com/),
 dhe skedarët [Markdown](https://daringfireball.net/projects/markdown).

 Ju mund të përktheni:
 * një objekt JavaScript që përmban mesazhe
 * çdo numër skedarësh ose drejtorish, gjithmonë duke përshkuar drejtoritë në mënyrë rekursive

 # Lexojeni këtë në një gjuhë tjetër
 Ky dokument README.md është përkthyer, duke përdorur vetë mjetin hokeylization, në
 **[çdo gjuhë e mbështetur nga Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jam i sigurt se nuk është perfekt, por shpresoj të jetë më mirë se asgjë!

 [🇸🇦 Arabisht](gjuhë/ar/README.md)
 [🇧🇩 Bengalisht](gjuhë/bn/README.md)
 [🇩🇪 gjermanisht](gjuhë/de/README.md)
 [🇺🇸 Anglisht](gjuhë/en/README.md)
 [🇪🇸 Spanjisht](gjuhë/es/README.md)
 [🇫🇷 Frengjisht](gjuhë/fr/README.md)
 [🇹🇩 Hausa](gjuhë/ha/README.md)
 [🇮🇳 Hindi](gjuhë/hi/README.md)
 [🇮🇩 Indonezisht](gjuhë/id/README.md)
 [🇮🇹 Italisht](gjuhë/it/README.md)
 [🇯🇵 Japonisht](../ja/README.md)
 [🇰🇷 Koreane](../ko/README.md)
 [🇮🇳 Marathi](gjuhë/mr/README.md)
 [🇵🇱 Polonisht](gjuhë/pl/README.md)
 [🇧🇷 Portugeze](gjuhë/pt/README.md)
 [🇷🇺 Rusisht](gjuhë/ru/README.md)
 [🇰🇪 Suahili](gjuhë/sw/README.md)
 [🇵🇭 Tagalog](gjuhë/tl/README.md)
 [🇹🇷 Turqisht](gjuhë/tr/README.md)
 [🇵🇰 Urdu](gjuhë/ur/README.md)
 [🇻🇳 Vietnamisht](gjuhë/vi/README.md)
 [🇨🇳 Kinezisht](../zh/README.md)


 **[📚 ... Të gjitha gjuhët ...](gjuhë/README.md)**
 ----

 ### A ka ndonjë problem me këtë përkthim të README?
 Ky përkthim i veçantë i origjinalit [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 mund të jetë me të meta -- *korrigjimet janë shumë të mirëseardhura!* Ju lutemi dërgoni një [kërkesë për tërheqje në GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 ose nëse nuk jeni të kënaqur ta bëni këtë, [hapni një çështje](https://github.com/cobbzilla/hokeylization/issues)

 Kur krijoni një problem të ri të GitHub në lidhje me një përkthim, ju lutemi bëni:
 * përfshini URL-në e faqes (kopjoni/ngjisni nga shiriti i adresave të shfletuesit)
 * përfshini tekstin e saktë që është i gabuar (kopjoni/ngjisni nga shfletuesi)
 * ju lutemi përshkruani se çfarë nuk shkon -- a është përkthimi i gabuar? a është thyer disi formatimi?
 * me mirësi ofroni një sugjerim për një përkthim më të mirë, ose se si teksti duhet të formatohet siç duhet
 * **Faleminderit!**

 # Përmbajtje
 * [Burimi](#Burimi)
 * [Mbështetje dhe financim](#Support-and-Funding)
 * [Instalim](#Instalim)
 * [Setup](#Setup)
 * [Përkthimi i skedarit të burimit të vargut JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Përkthimi i një drejtorie skedarësh teksti](#Translating-a-directory-of-text-files)
 * [Opsione të tjera](#Other-options)
 * [JSON komandat e grupit](#JSON-batch-commands)

 ## Burimi
 * [hokeylization në GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization në npm](https://www.npmjs.com/package/hokeylization)

 ## Mbështetje dhe financim
 Po përpiqem të jem një zhvillues profesionist i softuerit me burim të hapur. Unë kam punuar në
 në industrinë e softuerit për shumë vite, kam krijuar kompani të suksesshme dhe ua kam shitur kompanive publike.
 Kohët e fundit kam humbur punën time dhe nuk kam asnjë punë tjetër të rreshtuar

 Kështu që unë do të përpiqem të shkruaj softuer të dobishëm dhe të shikoj nëse funksionon

 Nëse ju pëlqen të përdorni këtë softuer, do të isha shumë i lumtur ta pranoja edhe atë
 më i vogël [kontributi mujor nëpërmjet Patreon](https://www.patreon.com/cobbzilla)

 *Faleminderit!*

 ## Instalimi
 Për të përdorur mjetin e linjës së komandës, instaloni duke përdorur `npm` ose `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Për ta përdorur si bibliotekë, instaloni versionin `lite` , i cili është shumë më i vogël:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Pastaj shikoni ndihmën për komandën `hokey` :

    hokey --help
    hokey -h

 Dëshironi të shihni rezultate në gjuhën tuaj ose në një gjuhë tjetër?

 `hokey` përpiqet të zbulojë gjuhën automatikisht nga variablat e mjedisit të guaskës suaj

 Ju mund ta detyroni një gjuhë duke vendosur variablin e mjedisit `LC_ALL` :

    LC_ALL=it hokey --help

 Vini re se nëse keni instaluar `hokeylization-lite` , ndihma e komandës është e disponueshme vetëm në anglisht

 ## Konfigurimi
 Cakto ndryshoren e mjedisit `GOOGLE_TRANSLATE_PROJECT_ID` për të identifikuar projektin tënd të Google Translate

 Cakto ndryshoren e mjedisit `GOOGLE_APPLICATION_CREDENTIALS` në kredencialet JSON që ke shkarkuar
 pasi të kuptoni se si funksionon vërtetimi në renë kompjuterike të Google (mund të jetë argëtuese)

 Nëse po ekzekutoni nga kodi burimor, mund t'i vendosni gjithashtu në një skedar `.env` në burim
 direktoriumi ata do të ngarkohen në kohën e ekzekutimit nëpërmjet [dotenv](https://www.npmjs.com/package/dotenv)

 ## Përkthimi i një skedari burimi të vargut JavaScript
 Tabela juaj e vargjeve **duhet** të jetë në një skedar JavaScript në një nga këto dy forma:

 Eksporti ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Eksporti CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Nëse ky skedar u emërua `myfile.en.js` , mund ta përktheni në spanjisht dhe gjermanisht me:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` në sa më sipër është i veçantë -- është një fjalë e rezervuar në këtë mjet!

 `LANG` zëvendësohet me kodin e gjuhës për skedarët e daljes

 Kështu komanda e mësipërme krijon skedarët:

    myfile.es.js
    myfile.de.js

 Opsioni `-l` / `--languages` --languages` është një listë e ndarë me presje e kodeve të gjuhës ISO
 [mbështetur nga Google Translate](https://cloud.google.com/translate/docs/languages)

 Nëse skedari i daljes ekziston tashmë, ai do të ekzaminohet për të përcaktuar se cilët çelësa ekzistojnë tashmë.
 Çelësat ekzistues nuk do të përkthehen. Përkthimet për çelësat që mungojnë do të krijohen dhe shtohen
 deri në fund të objektit JS. I gjithë skedari rishkruhet gjithmonë.

 Për të detyruar ripërkthimin e të gjithë tasteve, përdorni `-f` / `--force`

 ## Përkthimi i një drejtorie skedarësh teksti
 Ju gjithashtu mund të përktheni një drejtori skedarësh. hokeylization do të vizitojë në mënyrë rekursive çdo
 skedari në drejtori dhe ekzekutoni përmbajtjen e tij përmes Google Translate dhe ruani daljen
 në një skedar me emër identik në një pemë të veçantë të drejtorive

 Kur objektivi i përkthimit tuaj është një drejtori, ky modalitet aktivizohet

 Opsioni `-o` / `--outfile` specifikon direktorinë e daljes

 **PARALAJMËRIM I MADH **: Kur përktheni drejtoritë, **MOS** specifikoni një direktori dalëse
 që është brenda direktorisë suaj të hyrjes! Nëse e bëni këtë, do të:
 * nxis rekursion të pafund
 * Përfundoni faturën tuaj të Google
 * mbushni diskun tuaj
 * argëtohu më pak

 Këtu është një shembull i asaj që *nuk duhet bërë*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kur kjo të ekzekutohet, skedarët e përkthyer shkruhen në `templates/es` " dhe kështu bëhen të rinj
 skedarët burim për t'u përkthyer, pasi ato janë nën `templates/` -- ky proces vazhdon
 përgjithmonë, mos e bëj!

 #### Përdorimi i duhur
 OK, le të themi se keni disa shabllone emaili në një drejtori:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Për t'i përkthyer të gjitha këto në spanjisht dhe gjermanisht, drejtoni:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Në sa më sipër, `LANG` është një fjalë e rezervuar dhe do të zëvendësohet me kodin e gjuhës ISO

 Çfarë ndodh kur funksionon më sipër:
 * Do të krijohen direktoritë `templates/email/es` " dhe `templates/email/de` (nëse nuk ekzistojnë)
 * Çdo skedar në `templates/email/en` do të përkthehet në spanjisht dhe gjermanisht
 * Skedarët e daljes ekzistuese nuk do të rigjenerohen nëse nuk përdorni `-f` / `--force`
 * Do të përfundoni me një strukturë identike drejtorie dhe skedarë brenda `es` dhe `de` siç keni nën `en`

 ## Opsione të tjera

 ### Vrapim i thatë
 Kaloni `-n` / `--dry-run` për të shfaqur atë që do të bëhej, por në fakt mos bëni asnjë thirrje API ose mos shkruani asnjë skedar

 ### Forca
 Kaloni `-f` / `--force` për të rigjeneruar gjithmonë përkthimet, edhe nëse ato ekzistojnë tashmë

 ### Ndeshje
 Kaloni `-m` / `--match` për të kufizuar skedarët e përpunuar kur ekzekutohen në modalitetin e drejtorisë

 Ju mund të mos dëshironi gjithmonë të përktheni *çdo skedar* në drejtorinë tuaj burimore në drejtorinë tuaj të synuar

 Vlera e `-m` / `--match` është një regex (kujdes rregullat e citimit të guaskës!) që specifikon
 cilët skedarë duhet të përkthehen

 Kur keni dyshime, mund ta kombinoni këtë opsion me `-n` / `--dry-run` për të parë se cilët skedarë do të përkthehen

 ### Përjashton
 Ndonjëherë `-m` përputhet me shumë skedarë. Përdorni `-e` / `--excludes` për të përjashtuar në mënyrë eksplicite
 skedarë që përndryshe do të përputheshin

 Ju mund të rendisni regjime të shumta, të ndara me hapësira

 Një përdorim i zakonshëm do të ishte: `--excludes node_modules dist \.git build tmp`

 ### timonë
 Vargjet për t'u përkthyer mund të përmbajnë shabllone `{{ handlebars }}` , me dy ose tre kllapa kaçurrelë

 Ju ndoshta *NUK* dëshironi që gjërat brenda atyre shablloneve të përkthehen

 Kaloni `-H` / `--handlebars` dhe çdo gjë brenda `{{ ... }}` nuk do të përkthehet

 ### Markdown
 Markdown nuk është as tekst dhe as html, kështu që Google Translate ka disa vështirësi me të

 `-M` / `--markdown` mundëson trajtim të veçantë për skedarët e shënjimit

 Me skedarët e shënimit, nëse nuk përdorni flamurin `-M` , me siguri do të gjeni këto probleme:
 * Lidhje të prishura. Në përkthim, një karakter hapësinor shfaqet pasi përfundon përshkrimi i lidhjes së shënuar (me `]` ) por
 para se të fillojë lidhja e saj e synuar (me `(` ). Kjo bën që shënjimi të jepet gabimisht dhe lidhja
 prishet gjatë shikimit të dokumentit.
 * Blloqet e kodit përkthehen. Google translate nuk e di se çfarë markdown konsideron kod dhe çfarë jo
 * Hapësirë e pasaktë për blloqet e kodeve të futura. Distanca është e vështirë të ruhet në përkthim
 * Gjërat brenda `backticks` do të përkthehen, kur pothuajse gjithmonë dëshironi që ato të jenë vlera të drejtpërdrejta

 Kur aktivizohet flamuri `-M` / `--markdown` :
 * Modeli `](` do të kondensohet në `](` duke rregulluar kështu lidhjet e prishura të shënimit
 * Një mbështjellës "pa përkthim" do të vendoset rreth blloqeve të kodit të futur, duke ruajtur dhëmbëzimin e duhur dhe duke siguruar që ato të mos përkthehen
 * Një mbështjellës "pa përkthim" do të vendoset rreth tekstit brenda `backticks` për të siguruar që ato të mos përkthehen

 ### Procesi-si
 Normalisht çdo gjë përpunohet si tekst i thjeshtë

 Nëse përmbajtja juaj është HTML, ajo do të prishet nëse nuk kaloni `-p html` / `--process-as html`

 ### Filtri
 Për aventurierët: kur përpunoni skedarë në një drejtori, mund të kaloni `-F` / `--filter`
 për të filtruar daljen përpara se të shkruhet në sistemin e skedarëve

 Vlera e këtij opsioni duhet të jetë një shteg drejt një skedari JS që eksporton një funksion të quajtur `filter`

 Funksioni `filter` duhet të jetë `async` " sepse `await` do të thirret mbi të

 Përpara se skedarët të shkruhen në disk, e gjithë përmbajtja e skedarit do të kalojë në funksionin `filter` si një varg

 Vlera e kthyer nga funksioni `filter` është ajo që do të shkruhet në të vërtetë në ruajtje

 Kështu, ju keni kontroll të plotë mbi atë që më në fund do të shkruhet

 Skripti i `filter` do të kërkohet në vendndodhjet e mëposhtme (me `.js` do t'i shtohet filtrit
 emri, përveç nëse përfundon tashmë në `.js` )
 * Drejtoria aktuale
 * Një direktori me emrin `.hokey-filters` brenda drejtorisë aktuale
 * Një drejtori me emrin `${HOME}/.hokey-filters` , ku `${HOME}` është drejtoria kryesore e përdoruesit aktual
 * [Direktoria e filtrave] e integruar (https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Parametrat e filtrit
 `filter` mund të jetë shumë fjalë. Në këtë rast, fjala e parë është emri i filtrit dhe
 fjalët e mbetura do të kalojnë si argumente në funksionin `filter`

 ### Ndihmë
 Përdorni `-h` / `--help` për të treguar ndihmë

 ## komandat e grupit JSON
 Me `-j` / `--json` , mund të ekzekutoni komanda të shumta të koordinuara `hokey`

 Sipas konventës, ky skedar quhet `hokey.json` , por ju mund ta emërtoni si të dëshironi

 Nëse kaloni një direktori si opsioni `-j` , `hokey` do të kërkojë një `hokey.json` në atë direktori

 Skedari JSON duhet të përmbajë një objekt. Brenda atij objekti, emrat e pronave të tij janë të njëjtë me
 opsionet e linjës së komandës, plus një veçori shtesë të quajtur `hokey`

 `hokey` është një grup komandash për t'u ekzekutuar. Vetitë e deklaruara brenda këtyre komandave do të
 anashkaloni çdo deklaratë dublikate në objektin e jashtëm.

 Brenda çdo objekti në grupin `hokey` , duhet të specifikoni një `name` dhe skedarët e hyrjes dhe daljes

 Këtu është një shembull i një `hokey.json`

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
            "filter": "relativizeMarkdownLinks lang",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Skedarë të shumtë hyrës
 Kaloni një grup shtigash skedarësh si `infiles` në vend të një shteg të vetëm `infile` , si në këtë shembull:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indekset
 Kur përkthen në shumë gjuhë, `hokey` mund të krijojë një skedar indeksi që liston të gjitha përkthimet e bëra
 dhe ofron lidhje me to

 *Kur gjeneroni indekse, mund të keni vetëm një burim hyrje*

 Kaloni `-I` / `--index` , vlera është vendi ku do të gjenerohet skedari i indeksit, i cili mund të jetë një skedar
 ose një drejtori. Nëse është një drejtori, do të përdoret një emër skedari i paracaktuar, bazuar në shabllonin (shih më poshtë)

 Përdorni `-A` " / `--index-template` për të përcaktuar se si formatohet dalja e indeksit. Ju mund të specifikoni 'html',
 'shënjimi', 'teksti' ose shtegu i skedarit drejt shabllonit tuaj [HandlebarsJS](https://handlebarsjs.com/)

 Nëse specifikoni shabllonin tuaj, duhet të specifikoni gjithashtu një skedar (jo një drejtori) për `-I` " / `--index`
 opsion

 ## Kalofshi bukur duke përkthyer gjuhë!

</pre>
