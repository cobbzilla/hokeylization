Hokeyylization
 ============
 Waa maxay sababta aanan u maamuli karin abkayga oo dhan ama goobtayda Google Translate oo aan u helo turjumaadda aasaasiga ah ee luqad kale?

 *** Hadda, waad awoodaa! ***

 Magaca `hokeylization` waa portmanteau, oo macneheedu yahay 'meelaynta hokey'

 Waa xoogaa hokey sababtoo ah aad ayey u fududahay: waxay u soo dirtaa xargaha Google Translate

 Waana mid fudud, haddana aad u xoog badan. Waxay taageero gaar ah u leedahay dukumentiyada HTML,
 [HandlebarsJS](https://handlebarsjs.com/) qaabyaal,
 iyo [Markdown](https://daringfireball.net/projects/markdown) faylasha.

 Waad turjumi kartaa:
 * shay JavaScript ka kooban fariimo
 * tiro kasta oo faylal ah ama hagayaal, had iyo jeer u gudba hagayaasha si isdaba joog ah

 # Ku akhri luqad kale
 Dukumeentigan README.md waa la turjumay, iyada oo la adeegsanayo qalabaynta lafteeda, la geliyay
 **[Luqadda kasta oo ay taageerto Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Waan hubaa inaysan qummanayn, laakiin waxaan rajeynayaa inay ka fiican tahay waxba!

 [🇸🇦 Carabi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jarmal](../de/README.md)
 [🇺🇸 Ingiriis](../en/README.md)
 [🇪🇸 Isbaanish](../es/README.md)
 [🇫🇷 Faransiis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Talyaani](../it/README.md)
 [🇯🇵 Jabbaan](../ja/README.md)
 [🇰🇷 Kuuriyaan](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Boortaqiis](../pt/README.md)
 [🇷🇺 Ruush](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turki](../tr/README.md)
 [🇵🇰 Urduu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Shiine](../zh/README.md)


 **[📚 ... Dhammaan Luqadaha ...](../README.md)**
 ----

 ### Dhib ma ka jirtaa tarjumaada README?
 Turjumaaddan gaarka ah ee asalka ah [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 waxaa laga yaabaa in ay cilladaysan tahay -- *sixitaanku aad ayaa loo soo dhawaynayaa!* Fadlan u soo dir [codsi jiid GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 ama haddii aadan ku qanacsanayn inaad taas samayso, [fur arrin](https://github.com/cobbzilla/hokeylization/issues)

 Markaad abuurto arrin cusub oo GitHub ah oo ku saabsan tarjumaada, fadlan samee:
 * ku dar URL bogga (koobi/ku dheji barta ciwaanka browserka)
 * ku dar qoraalka saxda ah ee khaldan (koobi ka soo gal browserka)
 * fadlan sharax waxa khaldan -- turjumaada ma khaldan tahay? qaabaynta si uun ma u jabtay?
 * si naxariis leh u soo jeedi soo jeedin tarjumaad ka wanaagsan, ama sida qoraalka si habboon loo qaabeeyey
 * **Mahadsanid!**

 # Nuxurka
 * [Isha](#Isha)
 * [Taageerada iyo Maalgelinta](#Taageerada-iyo Maalgelinta)
 * [Rakibka](#Rakiba)
 * [Dejinta](#Setup)
 * [Turjumaadda faylka kheyraadka xargaha JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Turjumaadda tusaha faylasha qoraalka](#Translating-a-directory-of-text-files)
 * [Ikhtiyaar kale](#Doorasho kale)
 * [Amarrada dufcadda JSON]

 ## Isha
 * [hokeylization on GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Taageerada iyo Maalgelinta
 Waxaan isku dayayaa inaan noqdo horumariye il furan oo xirfad leh. waan ka shaqaynayay
 warshadaha software-ka sanado badan, waxaan bilaabay shirkado guuleysta waxaanan ka iibiyay shirkado dadweyne.
 Dhowaan shaqadeydii waa iga luntay, runtiina shaqo kale oo safan ma jirto

 Markaa waxaan isku dayi doonaa inaan qoro software waxtar leh oo aan eego inay taasi shaqaynayso

 Waxaan si daacad ah u qadarin lahaa xitaa ugu yar [wax ku darsiga billaha ah ee Patreon](https://www.patreon.com/cobbzilla)

 ## Rakibaadda
 Si aad u isticmaasho khadka taliska, ku rakib addoo isticmaalaya `npm` ama `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Si aad u isticmaasho maktabad ahaan, ku rakib nooca `lite` , kaas oo aad uga yar:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Ka dibna u fiirso caawimada amarka `hokey` :

    hokey --help
    hokey -h

 Ma doonaysaa inaad ku aragto wax soo saarka luqadaada ama luqad kale?

 `hokey` isku daydaa inay luqadda si toos ah uga ogaato doorsoomayaasha deegaanka qolofkaaga

 Waxaad ku qasbi kartaa luqad adiga oo dejinaya isbeddelka deegaanka `LC_ALL` :

    LC_ALL=it hokey --help

 Ogsoonow haddii aad ku rakibtay `hokeylization-lite` , caawinta amarka waxaa lagu heli karaa Ingiriisiga oo keliya

 ## Dejinta
 Deji isbadalka deegaanka `GOOGLE_TRANSLATE_PROJECT_ID` si loo aqoonsado mashruucaaga Google Translate

 Deji isbadalka deegaanka `GOOGLE_APPLICATION_CREDENTIALS` ' aqoonsiga JSON ee aad soo dejisay
 ka dib markii la ogaado sida aqoonsigu u shaqeeyo Google Cloud (waxay noqon kartaa madadaalo)

 Haddii aad ka socoto koodhka isha, waxa kale oo aad kuwan gelin kartaa faylka `.env` ee isha
 Hagaha waxa lagu shubi doonaa wakhtiga runtime iyada oo loo marayo [dotenv](https://www.npmjs.com/package/dotenv)

 ## Turjumidda faylka kheyraadka xargaha JavaScript
 Miiska xargahaaga ** waa in *** ku jiraa faylka JavaScript mid ka mid ah labadan foom:

 ES6 dhoofinta:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Dhoofinta CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Haddii faylkan loo magacaabay `myfile.en.js` , waxaad u turjumi kartaa Isbaanish iyo Jarmal adigoo isticmaalaya:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` ee kor ku xusan waa gaar -- waa kelmad kaydsan oo ku jirta qalabkan!

 `LANG` waxa lagu bedelay koodka luqadda ee faylasha wax soo saarka

 Markaa amarka kore wuxuu abuuraa faylasha:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` waa liis aan hakad lahayn oo lambarrada luqadda ISO ah.
 [waxaa taageeray Google Translate](https://cloud.google.com/translate/docs/languages)

 Haddii feylka wax soo saarka uu horay u jiray, waa la baari doonaa si loo go'aamiyo furayaasha horay u jiray.
 Furayaasha jira lama tarjumi doono. Turjumaada furayaasha maqan waa la soo saari doonaa oo lagu dhejin doonaa
 ilaa dhamaadka shayga JS. Faylka oo dhan mar walba dib ayaa loo qoraa.

 Si loo qasbo dhammaan furayaasha, isticmaal `-f` / `--force`

 ## Turjumaada hagaha faylasha qoraalka
 Waxa kale oo aad turjumi kartaa hagaha faylalka. hokeylization waxay si isdaba joog ah u booqan doontaa mid kasta
 gal tusaha oo ku socodsii waxa ku jira Google Translate, oo kaydi wax soo saarka
 fayl isku mid ah oo la magacaabay oo ku yaal geed hage gaar ah

 Marka bartilmaameedka tarjumaadaadu tahay hagaha, qaabkani waa damqanyahay

 `-o` / `--outfile` waxay qeexaysaa hagaha wax soo saarka

 **DIGNIIN WEYN
 taasi waxay ku dhex jirtaa hagaha wax gelintaada! Haddii aad tan samayso, waxaad:
 * keeni soo noqnoqoshada aan dhamaadka lahayn
 * Samee biilkaaga Google
 * Buuxi diskkaaga
 * madadaalo yar

 Waa kan tusaale waxa *aan la samayn*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Marka ay tani socoto, faylasha la turjumay waxaa loo qoraa `templates/es` , oo markaas noqdaan kuwo cusub
 isha faylasha si loo tarjumo, maadaama ay ku hoos jiraan `templates/` - habkani wuu sii socdaa
 weligaa, ha samayn!

 #### Isticmaalka saxda ah
 OK, aynu nidhaahno waxaad haysaa habab iimaylo ah oo ku jira hagaha:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Si aad kuwaas oo dhan ugu turjunto Isbaanish iyo Jarmal, orod:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Kan sare, `LANG` waa kelmad la xafiday waxaana lagu bedeli doonaa koodka luqadda ISO

 Maxaa dhacaya marka korku socdo:
 * Hababka `templates/email/es` ' iyo `templates/email/de` waa la abuuri doonaa (haddii aysan jirin)
 Fayl kasta oo ku jira `templates/email/en` waxa loo tarjumi doonaa Isbaanish iyo Jarmal
 * Faylasha wax soo saarka ee jira dib loo soo saari maayo ilaa aad isticmaasho `-f` / `--force`
 * Waxaad ku dhammayn doontaa qaab-dhismeedka hagaha isku midka ah iyo faylasha gudaha `es` iyo `de` sida aad ku leedahay `en`

 ## Doorashooyin kale

 ### orod qalalan
 Gudub `-n` / `--dry-run` si aad u muujiso waxa la samayn doono, laakiin dhab ahaantii ha samayn wax wicitaan API ah ama ha qorin wax fayl ah

 ### Xoog
 Gudub `-f` / `--force` si aad had iyo jeer dib ugu soo kiciso tarjumaada, xataa haddii ay hore u jireen

 ### Ciyaarta
 Gudub `-m` / `--match` si aad u xaddiddo faylasha la habeeyey marka lagu shaqaynayo hab-tusaha

 Waxaa laga yaabaa inaadan had iyo jeer u baahnayn inaad u turjunto *fayl kasta* ee ku jira hagaha ishaada una tarjumo hagaha bartilmaameedka ah

 Qiimaha `-m` / `--match` doorashada waa regex (ka digtoonow xeerarka xigashada qolofka!)
 faylalka ay tahay in la turjumo

 Markaad shaki gasho, waxaad ku dari kartaa doorashadan `-n` / `--dry-run` si aad u aragto faylalka la tarjumi karo

 ### Ka Reeban
 Mararka qaarkood `-m` u dhigmaa faylal aad u badan. Isticmaal `-e` / `--excludes` si aad si cad uga saarto
 faylal si kale u dhigmi lahaa

 Waxaad ku qori kartaa regexes badan, oo ay kala soocaan meelo bannaan

 Isticmaalka caadiga ah wuxuu noqon lahaa: `--excludes node_modules dist \.git build tmp`

 ### Handbararka
 Xadhkaha la turjumayo waxa laga yaabaa inay ka koobnaan karaan `{{ handlebars }}` , ha ahaado laba ama saddex laab-laaban

 Waxay u badan tahay * MA rabtid * waxyaabaha ku jira qaab-dhismeedkaas in la tarjumo

 Gudub calanka `-H` / `--handlebars` , iyo wax kasta oo ku jira `{{ ... }}` lama tarjumi doono

 ### Markdown
 Markdown qoraal ama html midna ma aha, marka Google Translate ayaa xoogaa dhib ah kala kulma

 `-M` / `--markdown` uu suurtageliyaa in si gaar ah loo maamulo faylalka calaamadaynta

 Faylasha calaamadaynta, haddii aadan isticmaalin calanka `-M` , waxaad u badan tahay inaad la kulanto dhibaatooyinkan:
 * Xiriirada jaban. Turjumaada dhexdeeda, jilaa meel bannaan ayaa soo baxaysa ka dib markii sharraxaadda xidhiidhinta calaamadaynta ay dhammaato ( `]` ) laakiin
 ka hor inta uusan bilaabin isku xirka bartilmaameedka ( `(` ) Tani waxay keenaysaa in calaamadaynta si khaldan loo sameeyo, iyo isku xidhka
 wuu jabaa marka la eego dukumeentiga.
 * Xirmooyinka kood waa la turjumay Turjumida Google ma garanayso waxa calaamadayntu ay tixgeliso koodka iyo waxa aanu ahayn
 * Kala fogaanshaha khaldan ee blocks kood godan Kala dheeraynta way adagtahay in lagu xafido tarjumaada
 * Waxyaabaha ku jira `backticks` waa la tarjumi doonaa, marka aad had iyo jeer rabto inay noqdaan qiyam sax ah

 Marka calanka `-M` / `--markdown` la furo:
 * Qaabka `](` waxa lagu koobi doonaa `](` si loo hagaajiyo xiriirinta calaamadaynta jaban
 * Duub "ma turjumi" ayaa la dhigi doonaa hareeraha koodka jeexan, iyadoo la ilaalinayo galitaanka saxda ah iyo hubinta inaan la turjumayn
 Duubka "ma turjumi" ayaa lagu dhejin doonaa hareeraha qoraalka gudaha `backticks` si loo hubiyo inaan la turjumayn

 ### Habka-sida
 Caadi ahaan wax walba waxaa loo habeeyaa sida qoraal cad

 Haddii nuxurkaagu yahay HTML, waa la qallajin doonaa ilaa aad dhaafto `-p html` / `--process-as html` doorashada

 ### Shaandhayso
 Kuwa xamaasadda leh: marka faylasha ku jira hagaha, waxaad gudbi kartaa `-F` / `--filter`
 si loo sifeeyo wax soo saarka ka hor inta aan loo qorin nidaamka faylalka

 Qiimaha ikhtiyaarkan waa inuu noqdaa dariiqa loo maro faylka JS ee dhoofiya hawl lagu magacaabo `filter`

 Shaqada `filter` waa inay noqotaa `async` sababtoo ah `await` ayaa loogu yeeri doonaa

 Ka hor inta aan faylasha loo qorin saxanka, dhammaan waxa ku jira faylka waxaa loo gudbin doonaa shaqada `filter` ' sida xadhig ahaan

 Qiimaha soo `filter` waa waxa run ahaantii lagu qori doono kaydinta

 Markaa, waxaad si buuxda gacanta ugu haysaa waxa ugu dambayn la qori doono

 Qoraalka `filter` ayaa laga raadin doonaa meelaha soo socda (oo leh `.js` ayaa lagu dhejin doonaa shaandhada
 magaca, ilaa uu ku dhammaado `.js` )
 * Hagaha hadda jira
 * Hagaha lagu magacaabo `.hokey-filters` oo ku dhex jira hagaha hadda
 * Hagaha lagu magacaabo `${HOME}/.hokey-filters` , halkaasoo `${HOME}` uu yahay tusaha guriga isticmaalaha hadda
 * Ku dhex-dhisan [tusaha filtarrada](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Hababka Sifeynta
 Xadhiga ' `filter` ' wuxuu noqon karaa erayo badan. Xaaladdan oo kale, erayga ugu horreeya waa magaca filter, iyo
 Erayada soo haray waxaa loo gudbin doonaa dood ahaan shaqada `filter`

 ### I caawi
 Isticmaal `-h` / `--help` si aad u muujiso caawimo

 ## JSON dufcaddii amarrada
 `-j` / `--json` , waxaad ku socodsiin kartaa amarada `hokey` ee la isku duway

 Sida caadiga ah faylkan waxaa loo yaqaan `hokey.json` , laakiin waxaad u magacaabi kartaa waxaad rabto

 Haddii aad u gudbiso hagaha sida ikhtiyaarka ` `-j` , `hokey` waxa ay ka dhex raadin doontaa `hokey.json`

 Faylka JSON waa inuu ka kooban yahay hal shay. Shayga dhexdiisa, magacyada hantidiisu waa isku mid
 ikhtiyaarka-khadka taliska, oo lagu daray hal hanti oo dheeraad ah oo loo yaqaan `hokey`

 Hantida `hokey` waa amarro kala duwan oo lagu ordo. Guryaha lagu sheegay amarradan ayaa noqon doona
 burin baaqyada nuqul ka mid ah shayga dibadda

 Shay kasta oo ku jira `hokey` , waa inaad ku qeexdaa `name` , iyo galka iyo soo saarida faylasha

 Waa kan tusaale `hokey.json`

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

 ### Faylal gelinta badan
 U gudbi wadooyin faylal ah oo kala duwan sida `infiles` halkii aad ka ahaan lahayd hal waddo `infile` , sida tusaalahan:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Tusmooyinka
 Marka loo turjumayo luqado badan, `hokey` waxa ay abuuri kartaa faylal tusmeed oo taxaya dhammaan tarjumaada la sameeyay
 waxayna siisaa xiriirin iyaga

 * Markaad abuurto tusmooyin, waxaad yeelan kartaa hal il oo kaliya*

 Gudbi `-I` / `--index` , qiimuhu waa halka faylka tusaha laga soo saari doono, kaas oo noqon kara fayl
 ama tusaha. Haddii ay tahay hagaha, faylka magaca caadiga ah ayaa la isticmaali doonaa, oo ku salaysan qaabka (hoos eeg)

 Isticmaal `-A` / `--index-template` si loo go'aamiyo sida wax soo saarka tusmada loo qaabeeyey. Waxaad qeexi kartaa 'html',
 'markdown', 'text', ama dariiqa faylka aad adigu leedahay [HandlebarsJS](https://handlebarsjs.com/) template

 Haddii aad qeexdo qaab-dhismeedkaaga, waa inaad sidoo kale qeexdaa fayl (ma aha hagaha) `-I` / `--index`
 doorasho

 ## Ku raaxayso tarjumaada luqadaha!

</pre>
