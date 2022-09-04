Hokeilizācija
 ==============
 Nosaukums ir portmanteau, kas nozīmē "hokey lokalizācija"

 Tas ir ļoti vienkārši, jo tas nosūta virknes Google tulkotājam

 Jūs varat tulkot:
 * JavaScript objekts, kas satur ziņojumus
 * rekursīvi failu direktorijs

 # Lasiet to citā valodā
 Šis README.md dokuments ir tulkots, izmantojot pašu hokeylizācijas rīku
 **[Visas valodas, ko atbalsta Google tulkotājs](https://cloud.google.com/translate/docs/languages)!**

 Esmu pārliecināts, ka tas nav ideāls, bet es ceru, ka tas ir labāk nekā nekas!

 [🇸🇦 arābu](../ar/README.md)
 [🇧🇩 bengāļu](../bn/README.md)
 [🇩🇪 vācu](../de/README.md)
 [🇺🇸 angļu valodā](../en/README.md)
 [🇪🇸 spāņu](../es/README.md)
 [🇫🇷 franču](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonēziešu](../id/README.md)
 [🇮🇹 itāļu](../it/README.md)
 [🇯🇵 japāņu](../ja/README.md)
 [🇰🇷 korejiešu](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 poļu](../pl/README.md)
 [🇧🇷 portugāļu](../pt/README.md)
 [🇷🇺 krievu](../ru/README.md)
 [🇰🇪 Svahili](../sw/README.md)
 [🇵🇭 Tagalogs](../tl/README.md)
 [🇹🇷 turku](../tr/README.md)
 [🇵🇰 urdu](../ur/README.md)
 [🇻🇳 vjetnamiešu](../vi/README.md)
 [🇨🇳 ķīniešu](../zh/README.md)


 **[📚 ... Visas valodas ...](../README.md)**
 ----

 ### Vai ir problēma ar šo README tulkojumu?
 Šis konkrētais oriģināla [README] tulkojums (https://github.com/cobbzilla/yuebing/blob/master/README.md)
 var būt kļūdains — *labojumi ir ļoti apsveicami!* Lūdzu, nosūtiet [izvilkšanas pieprasījumu vietnē GitHub](https://github.com/cobbzilla/yuebing/pulls),
 vai, ja nevēlaties to darīt, [atveriet problēmu](https://github.com/cobbzilla/yuebing/issues)

 Kad veidojat jaunu GitHub problēmu par tulkojumu, lūdzu, rīkojieties šādi:
 * iekļaujiet lapas URL (kopējiet/ielīmējiet no pārlūkprogrammas adreses joslas)
 * iekļaujiet precīzu nepareizo tekstu (kopējiet/ielīmējiet no pārlūkprogrammas)
 * laipni piedāvājiet labāka tulkojuma ieteikumu
 * **Paldies!**

 # Saturs
 * [Avots](#Avots)
 * [Atbalsts un finansējums](#Support-and-Funding)
 * [Instalācija](#Instalācija)
 * [Iestatīšana](#Iestatīšana)
 * [JavaScript virknes resursa faila tulkošana](#Translating-a-JavaScript-string-resource-file)
 * [Teksta failu direktorija tulkošana](#Translating-a-directory-of-text-files)
 * [Citas opcijas](#Other-options)

 ## Avots
 * [hokeylization vietnē GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Atbalsts un finansējums
 Es cenšos būt profesionāls atvērtā pirmkoda programmatūras izstrādātājs. Esmu strādājis
 programmatūras industrijā jau daudzus gadus esmu dibinājis veiksmīgus uzņēmumus un pārdevis tos valsts uzņēmumiem.
 Nesen es zaudēju darbu, un man īsti nav citu darbu

 Tāpēc es mēģināšu uzrakstīt noderīgu programmatūru un pārbaudīt, vai tā darbojas

 Es patiesi novērtēšu pat vismazāko [ikmēneša ieguldījumu, izmantojot Patreon](https://www.patreon.com/cobbzilla)

 ## Uzstādīšana
 Lai izmantotu komandrindas rīku, instalējiet, izmantojot `npm` vai `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Lai izmantotu kā bibliotēku, instalējiet `lite` versiju, kas ir daudz mazāka:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Pēc tam skatiet komandas `hokey` :

    hokey --help
    hokey -h

 Vai vēlaties redzēt izvadi savā vai citā valodā?

 `hokey` mēģina automātiski noteikt valodu no jūsu čaulas vides mainīgajiem

 Varat piespiest valodu, iestatot vides mainīgo `LC_ALL` :

    LC_ALL=it hokey --help

 Ņemiet vērā: ja esat instalējis `hokeylization-lite` , komandu palīdzība ir pieejama tikai angļu valodā

 ## Uzstādīt
 Iestatiet vides mainīgo `GOOGLE_TRANSLATE_PROJECT_ID` , lai identificētu savu Google tulkotāja projektu

 Iestatiet `GOOGLE_APPLICATION_CREDENTIALS` vides mainīgo uz lejupielādētajiem JSON akreditācijas datiem
 pēc tam, kad ir noskaidrots, kā autentifikācija darbojas Google mākonī (tas var būt jautri)

 Ja izmantojat avota kodu, varat tos ievietot arī avota failā `.env` .
 direktorijā tie tiks ielādēti izpildlaikā, izmantojot [dotenv](https://www.npmjs.com/package/dotenv)

 ## JavaScript virknes resursa faila tulkošana
 Jūsu virkņu tabulai **jābūt** ir jābūt JavaScript failā vienā no šīm divām formām:

 ES6 eksports:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS eksports

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ja šī faila nosaukums bija `myfile.en.js` , varat to tulkot spāņu un vācu valodā, izmantojot:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` ” iepriekš minētajā ir īpašs — tas ir rezervēts vārds šajā rīkā!

 `LANG` tiek aizstāts ar izvades failu valodas kodu

 Tādējādi iepriekš minētā komanda izveido failus:

    myfile.es.js
    myfile.de.js

 `-l` "-l" / `--languages` ir ar komatiem atdalīts ISO valodu kodu saraksts
 [atbalsta Google tulkotājs](https://cloud.google.com/translate/docs/languages)

 Ja izvades fails jau pastāv, tas tiks pārbaudīts, lai noteiktu, kuras atslēgas jau pastāv.
 Esošās atslēgas netiks tulkotas. Trūkstošo atslēgu tulkojumi tiks ģenerēti un pievienoti
 līdz JS objekta beigām. Viss fails vienmēr tiek pārrakstīts.

 Lai piespiestu pārtulkot visus taustiņus, izmantojiet opciju `-f` / `--force`

 ## Teksta failu direktorija tulkošana
 Varat arī tulkot failu direktoriju. hokeylization rekursīvi apmeklēs katru
 failu direktorijā un palaist tā saturu, izmantojot Google tulkotāju, un saglabājiet izvadi
 uz identiski nosauktu failu atsevišķā direktoriju kokā

 Ja jūsu tulkojuma mērķis ir direktorijs, šis režīms ir iespējots

 `-o` "-o" / `--outfile` norāda izvades direktoriju

 **LIELS BRĪDINĀJUMS**: tulkojot direktorijus, **NELIETOJIET** izvades direktoriju
 kas atrodas jūsu ievades direktorijā! Ja jūs to darīsit, jūs:
 * izraisīt bezgalīgu rekursiju
 * Sagatavojiet savu Google rēķinu
 * aizpildiet savu disku
 * izklaidējies mazāk

 Šeit ir piemērs tam, ko *nedrīkst darīt*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kad tas tiek izpildīts, tulkotie faili tiek ierakstīti `templates/es` un tādējādi kļūst par jauniem
 avota faili, ko tulkot, jo tie atrodas sadaļā `templates/` — šis process turpinās
 uz visiem laikiem, nedari to!

 #### Pareiza lietošana
 Labi, pieņemsim, ka jums ir dažas e-pasta veidnes direktorijā:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Lai tos visus tulkotu spāņu un vācu valodā, palaidiet:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Iepriekš `LANG` ir rezervēts vārds, un tas tiks aizstāts ar ISO valodas kodu

 Kas notiek, kad tiek izpildīts iepriekš minētais:
 * Tiks izveidoti direktoriji `templates/email/es` " un `templates/email/de` (ja tie neeksistē)
 * Katrs fails sadaļā `templates/email/en` tiks tulkots spāņu un vācu valodā
 * Esošie izvades faili netiks ģenerēti, ja vien neizmantosiet `-f` " / `--force`
 * Jūs saņemsit identisku direktoriju struktūru un failus, kas atrodas `es` "es" un `de` kā tas ir zem `en`

 ## Citas iespējas

 ### Sausā skrējiens
 Nododiet `-n` / `--dry-run` , lai parādītu, kas tiks darīts, bet faktiski neveiciet API zvanus un nerakstiet failus

 ### Spēks
 Nododiet `-f` / `--force` , lai vienmēr atjaunotu tulkojumus, pat ja tie jau pastāv

 ### Match
 Nododiet `-m` / `--match` , lai ierobežotu apstrādātos failus, kad tie darbojas direktorija režīmā

 Jūs ne vienmēr vēlaties tulkot *katru* failu savā avota direktorijā uz mērķa direktoriju

 `-m` "-m" / `--match` vērtība ir regulārā izteiksme (uzmanieties no čaulas citēšanas noteikumiem!), kas norāda
 kuri faili ir jātulko

 Ja rodas šaubas, varat apvienot šo opciju ar `-n` / `--dry-run` , lai redzētu, kuri faili tiks tulkoti

 ### Neietver
 Dažreiz jūsu `-m` atbilst pārāk daudziem failiem. Izmantojiet opciju "-e" / `--excludes` `-e` ", lai skaidri izslēgtu
 faili, kas citādi būtu sakrituši

 Varat uzskaitīt vairākus regexes, atdalot tos ar atstarpēm

 Parasti lietojums ir šāds: `--excludes node_modules dist \.git build tmp`

 ### Stūres
 Tulkojamās virknes var saturēt `{{ handlebars }}` veidnes ar divām vai trim krokainajām figūriekavām.

 Jūs, iespējams, *NEVĒLATIES*, lai šajās veidnēs esošās lietas tiktu tulkotas

 `-H` garām karodziņu "-H" / `--handlebars` , un nekas, kas atrodas `{{ ... }}` , netiks tulkots.

 ### Markdown
 Markdown nav ne teksts, ne html, tāpēc Google tulkotājam ar to ir dažas grūtības

 `-M` "-M" / `--markdown` nodrošina īpašu atzīmju failu apstrādi

 Izmantojot atzīmes failus, ja neizmantojat karodziņu `-M` , jūs, iespējams, atradīsit šādas problēmas:
 * Bojātas saites. Tulkojumā atstarpes rakstzīme parādās pēc atzīmes saites apraksta beigām (ar `]` ), bet
 pirms sākas tās mērķa saite (ar `(` ). Tādējādi atzīme tiek atveidota nepareizi, un saite
 ir bojāts, skatoties dokumentu.
 * Kodu bloki tiek tulkoti. Google tulkotājs nezina, ko atzīme uzskata par kodu un ko ne
 * Nepareizas atstarpes koda blokiem ar atkāpi. Tulkojumā ir grūti saglabāt atstarpes
 * Lietas, kas atrodas `backticks` , tiks tulkotas, ja gandrīz vienmēr vēlaties, lai tās būtu burtiskas vērtības

 Kad ir iespējots karogs `-M` / `--markdown` :
 * Raksts `](` tiks saīsināts uz `](` tādējādi izlabojot bojātās atzīmes saites
 * Ap koda blokiem ar atkāpēm tiks novietots iesaiņojums “nav tulkot”, saglabājot pareizu atkāpi un nodrošinot, ka tie netiek tulkoti.
 * Ap tekstiem, kas atrodas `backticks` , tiks ievietots iesaiņojums "nav tulkot", lai nodrošinātu, ka tie netiek tulkoti.

 ### Apstrādāt kā
 Parasti viss tiek apstrādāts kā vienkāršs teksts

 Ja jūsu saturs ir HTML, tas tiks sabojāts, ja vien nenodosit opciju `-p html` " / `--process-as html`

 ### Filtrs
 Piedzīvojumu cienītājiem: apstrādājot failus direktorijā, varat nodot opciju `-F` / `--filter`
 lai filtrētu izvadi, pirms tā tiek ierakstīta failu sistēmā

 Šīs opcijas vērtībai ir jābūt ceļam uz JS failu, kas eksportē funkciju ar nosaukumu `filter`

 Funkcijai `filter` ir jābūt `async` ”, jo tā tiks izsaukta “gaidīt `await`

 Pirms faili tiek ierakstīti diskā, viss faila saturs tiks nodots funkcijai `filter` kā virkne

 Funkcijas `filter` atgriešanas vērtība ir tā, kas faktiski tiks ierakstīta krātuvē

 Tādējādi jums ir pilnīga kontrole pār to, kas beidzot tiks uzrakstīts

 ### Palīdzība
 Lai parādītu palīdzību, izmantojiet taustiņu `-h` / `--help`

 ## Laimīgu tulkošanu!

</pre>
