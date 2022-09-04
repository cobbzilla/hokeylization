Hokeyylization
 ============
 Magacu waa portmanteau, oo macneheedu yahay 'meelaynta hokey'

 Waa hokey sababtoo ah aad ayey u fududahay: waxay u soo dirtaa xargaha Google Translate

 Waad turjumi kartaa:
 * shay JavaScript ka kooban fariimo
 * Hagaha faylalka, si isdaba joog ah

 # Ku akhri luqad kale
 Dukumeentigan README.md waa la turjumay, iyada oo la adeegsanayo qalabaynta lafteeda,
 galay **[Luqadda kasta oo ay taageerto Google Translate](../README.md)!**

 Waan hubaa inaysan qummanayn, laakiin waxaan rajeynayaa inay ka fiican tahay waxba!

 [🇸🇦 Carabi] (lang/ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jarmal](../de/README.md)
 [🇺🇸 Ingiriis] (lang/en/README.md)
 [🇪🇸 Isbaanish] (lang/es/README.md)
 [🇫🇷 Faransiis] (lang/fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Talyaani] (lang/it/README.md)
 [🇯🇵 Jabbaan](../ja/README.md)
 [🇰🇷 Kuuriyaan](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polish](../pl/README.md)
 [🇧🇷 Boortaqiis](../pt/README.md)
 [🇷🇺 Ruush] (lang/ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turki](../tr/README.md)
 [🇵🇰 Urduu](../ur/README.md)
 [🇻🇳 Vietnamese](../vi/README.md)
 [🇨🇳 Shiine](../zh/README.md)


 **[📚 ... Dhammaan Luqadaha ...](../README.md)**
 ----

 ### Dhib ma ka jirtaa tarjumaada README?
 Turjumaaddan gaarka ah ee asalka ah [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 waxaa laga yaabaa in ay cilladaysan tahay -- *sixitaan aad ayaa loo soo dhawaynayaa!* Fadlan u soo dir [codsi jiid GitHub](https://github.com/cobbzilla/yuebing/pulls),
 ama haddii aadan ku qanacsanayn inaad taas samayso, [fur arrin](https://github.com/cobbzilla/yuebing/issues)

 Markaad abuurto arrin cusub oo GitHub ah oo ku saabsan tarjumaada, fadlan samee:
 * ku dar URL bogga (koobi/ku dheji barta ciwaanka browserka)
 * ku dar qoraalka saxda ah ee khaldan (koobi ka soo gal browserka)
 * si naxariis leh u soo jeedi soo jeedin tarjumaad ka wanaagsan
 * **Mahadsanid!**

 # Nuxurka
 * [Isha](#Isha)
 * [Taageerada iyo Maalgelinta] (#Taageerada-iyo Maalgelinta)
 * [Rakibka] (#Rakiba)
 * [Dejinta] (#Setup)
 * [Turjumaadda faylka kheyraadka xargaha JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Turjumaadda tusaha faylasha qoraalka](#Translating-a-directory-of-text-files)
 * [Ikhtiyaar kale] (#Doorasho kale)

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

 Hokeylizer wuxuu wax u qabtaa si wanaagsan, laakiin faylalka calaamadaynta, waxaa laga yaabaa inaad marar badan dhibaatooyinkan:
 * Xiriirada jaban. Turjumaada dhexdeeda, jilaa meel bannaan ayaa soo baxaysa ka dib markii sharraxaadda xidhiidhinta calaamadaynta ay dhammaato ( `]` ) laakiin
 ka hor inta uusan bilaabin isku xirka bartilmaameedka ( `(` ) Tani waxay keenaysaa in calaamadaynta si khaldan loo sameeyo, iyo isku xidhka
 wuu jabaa marka la eego dukumeentiga.
 * Xirmooyinka kood waa la turjumay Turjumida Google ma garanayso waxa calaamadayntu ay tixgeliso koodka iyo waxa aanu ahayn
 * Kala fogaanshaha khaldan ee baloogyada koodka ee goglan. Kala dheeraynta way adagtahay in lagu xafido tarjumaada
 * Waxyaabaha ku jira `backticks` waa la tarjumi doonaa, marka aad had iyo jeer rabto inay noqdaan qiyam sax ah

 Marka calanka `-M` / `--markdown` la furo:
 * Qaabka `] (` waxa lagu koobi doonaa `](` si loo hagaajiyo xiriirinta calaamadaynta jaban
 * Duub "ma turjumi" ayaa la dhigi doonaa hareeraha koodka jeexan, iyadoo la ilaalinayo galitaanka saxda ah iyo hubinta inaan la turjumayn
 Duubka "ma turjumi" ayaa lagu dhejin doonaa hareeraha qoraalka gudaha `backticks` si loo hubiyo inaan la turjumayn

 ### Habka-sida
 Caadi ahaan wax walba waxaa loo habeeyaa sida qoraal cad

 Haddi nuxurkaagu yahay HTML, waa la khaldami doonaa ilaa aad ka gudubto `-p html` / `--process-as html` doorashada

 ### Shaandhayso
 Kuwa xamaasadda leh: marka faylasha ku jira hagaha, waxaad gudbi kartaa `-F` / `--filter`
 si loo sifeeyo wax soo saarka ka hor inta aan loo qorin nidaamka faylalka

 Qiimaha ikhtiyaarkan waa inuu noqdaa dariiqa loo maro faylka JS ee dhoofiya hawl lagu magacaabo `filter`

 Shaqada `filter` waa inay noqotaa `async` sababtoo ah `await` ayaa loogu yeeri doonaa

 Ka hor inta aan faylasha loo qorin saxanka, dhammaan waxa ku jira faylka waxaa loo gudbin doonaa shaqada `filter` ' sida xadhig ahaan

 Qiimaha soo `filter` waa waxa runtii lagu qori doono kaydinta

 Markaa, waxaad si buuxda gacanta ugu haysaa waxa ugu dambayn la qori doono

 ### I caawi
 Isticmaal `-h` / `--help` si aad u muujiso caawimo

 ## Turjumaada Wacan!

</pre>