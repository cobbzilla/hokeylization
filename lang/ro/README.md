Hokeylizare
 ==============
 De ce nu pot rula întreaga aplicație sau site-ul meu prin Google Translate și nu pot obține o traducere de bază într-o altă limbă?

 ***Acum poti!***

 Numele `hokeylization` este un portmanteau, care înseamnă „localizare hokey”

 Este oarecum hokey pentru că este foarte simplu: trimite șiruri la Google Translate

 Și este simplu, dar și foarte puternic. Are suport special pentru documente HTML,
 [HandlebarsJS](https://handlebarsjs.com/) șabloane,
 și fișierele [Markdown](https://daringfireball.net/projects/markdown).

 Puteți traduce:
 * un obiect JavaScript care conține mesaje
 * orice număr de fișiere sau directoare, traversând întotdeauna directoare recursiv

 # Citiți asta într-o altă limbă
 Acest document README.md a fost tradus, folosind instrumentul de hokeylization propriu-zis, în
 **[fiecare limbă acceptată de Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Sunt sigur că nu este perfect, dar sper că este mai bine decât nimic!

 [🇸🇦 Arabă](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Germană](../de/README.md)
 [🇺🇸 engleză](../en/README.md)
 [🇪🇸 Spaniolă](../es/README.md)
 [🇫🇷 Franceză](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indoneziană](../id/README.md)
 [🇮🇹 italiană](../it/README.md)
 [🇯🇵 japoneză](../ja/README.md)
 [🇰🇷 coreeană](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 poloneză](../pl/README.md)
 [🇧🇷 Portugheză](../pt/README.md)
 [🇷🇺 rusă](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turcă](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnameză](../vi/README.md)
 [🇨🇳 Chineză](../zh/README.md)


 **[📚 ... Toate limbile ...](../README.md)**
 ----

 ### Există o problemă cu această traducere a fișierului README?
 Această traducere specială a originalului [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 poate fi defecte -- *corecțiile sunt foarte binevenite!* Vă rugăm să trimiteți o [pull request pe GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 sau dacă nu ești confortabil să faci asta, [deschide o problemă](https://github.com/cobbzilla/hokeylization/issues)

 Când creați o nouă problemă GitHub despre o traducere, faceți:
 * includeți adresa URL a paginii (copiați/lipiți din bara de adrese a browserului)
 * includeți textul exact care este greșit (copiați/lipiți din browser)
 * vă rugăm să descrieți ce este greșit -- traducerea este incorectă? formatarea este stricata cumva?
 * Vă rugăm să oferiți o sugestie pentru o traducere mai bună sau cum ar trebui să fie formatat corect textul
 * **Mulțumesc!**

 # Cuprins
 * [Sursa](#Sursa)
 * [Suport și finanțare](#Support-and-Funding)
 * [Instalare](#Instalare)
 * [Configurare](#Configurare)
 * [Traducerea unui fișier resursă șir JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Traducerea unui director de fișiere text](#Translating-a-directory-of-text-files)
 * [Alte opțiuni](#Alte-opțiuni)
 * [Comenzi batch JSON](#JSON-batch-comenzi)

 ## Sursă
 * [hokeylization pe GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization pe npm](https://www.npmjs.com/package/hokeylization)

 ## Sprijin și finanțare
 Încerc să fiu un dezvoltator profesionist de software open source. Am lucrat în
 industria software de mulți ani, am început companii de succes și le-am vândut companiilor publice.
 Recent mi-am pierdut locul de muncă și nu prea am nicio altă lucrare la rând

 Așa că voi încerca să scriu un software util și să văd dacă funcționează

 Dacă vă place să utilizați acest software, aș fi atât de fericit să primesc chiar și
 cea mai mică [contribuție lunară prin Patreon](https://www.patreon.com/cobbzilla)

 *Mulțumesc!*

 ## Instalare
 Pentru a utiliza instrumentul de linie de comandă, instalați folosind `npm` sau `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Pentru a utiliza ca bibliotecă, instalați versiunea `lite` , care este mult mai mică:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Apoi uitați-vă la ajutor pentru comanda `hokey` :

    hokey --help
    hokey -h

 Doriți să vedeți rezultatele în limba dvs. sau în altă limbă?

 `hokey` încearcă să detecteze limba automat din variabilele de mediu ale shell-ului

 Puteți forța o limbă setând variabila de mediu `LC_ALL` :

    LC_ALL=it hokey --help

 Rețineți că, dacă ați instalat `hokeylization-lite` , ajutorul comenzii este disponibil numai în engleză

 ## Înființat
 Setați variabila de mediu `GOOGLE_TRANSLATE_PROJECT_ID` pentru a vă identifica proiectul Google Translate

 Setați variabila de mediu `GOOGLE_APPLICATION_CREDENTIALS` la acreditările JSON pe care le-ați descărcat
 după ce am aflat cum funcționează autentificarea pe Google cloud (poate fi distractiv)

 Dacă rulați din codul sursă, le puteți pune și într-un fișier `.env` din sursă
 directorul, acestea vor fi încărcate în timpul rulării prin [dotenv](https://www.npmjs.com/package/dotenv)

 ## Traducerea unui fișier resursă șir JavaScript
 Tabelul dvs. de șiruri **trebuie** să fie într-un fișier JavaScript într-una dintre aceste două forme:

 Export ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Export CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Dacă acest fișier a fost numit `myfile.en.js` , îl puteți traduce în spaniolă și germană cu:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` din cele de mai sus este specială -- este un cuvânt rezervat în acest instrument!

 `LANG` este înlocuit cu codul de limbă pentru fișierele de ieșire

 Astfel, comanda de mai sus creează fișierele:

    myfile.es.js
    myfile.de.js

 Opțiunea `-l` / `--languages` este o listă de coduri ISO separate prin virgulă
 [acceptat de Google Translate](https://cloud.google.com/translate/docs/languages)

 Dacă fișierul de ieșire există deja, acesta va fi examinat pentru a determina ce chei există deja.
 Cheile existente nu vor fi traduse. Vor fi generate și atașate traduceri pentru cheile lipsă
 până la sfârșitul obiectului JS. Întregul fișier este întotdeauna rescris.

 Pentru a forța retraducerea tuturor cheilor, utilizați opțiunea `-f` / `--force`

 ## Traducerea unui director de fișiere text
 De asemenea, puteți traduce un director de fișiere. hokeylization va vizita recursiv fiecare
 fișier în director și rulați conținutul acestuia prin Google Translate și salvați rezultatul
 într-un fișier cu nume identic într-un arbore de directoare separat

 Când ținta traducerii dvs. este un director, acest mod este activat

 Opțiunea `-o` / `--outfile` specifică directorul de ieșire

 **MARE AVERTISMENT**: Când traduceți directoare, **NU** specificați un director de ieșire
 care se află în directorul tău de intrare! Dacă faci asta, vei:
 * induce recursivitate infinită
 * ridicați factura la Google
 * umple-ți discul
 * distrează-te mai puțin

 Iată un exemplu de ceea ce *nu trebuie să faci*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Când rulează, fișierele traduse sunt scrise în `templates/es` și astfel devin noi
 fișierele sursă de tradus, deoarece sunt sub `templates/` -- acest proces continuă
 pentru totdeauna, nu o face!

 #### Utilizare corectă
 OK, să presupunem că aveți câteva șabloane de e-mail într-un director:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Pentru a traduce toate acestea în spaniolă și germană, rulați:

    hokey -l es,de -o templates/email/LANG templates/email/en

 În cele de mai sus, `LANG` este un cuvânt rezervat și va fi înlocuit cu codul de limbă ISO

 Ce se întâmplă când rulează cele de mai sus:
 * Vor fi create directoarele `templates/email/es` și `templates/email/de` (dacă nu există)
 * Fiecare fișier din `templates/email/en` va fi tradus în spaniolă și germană
 * Fișierele de ieșire existente nu vor fi regenerate decât dacă utilizați `-f` / `--force`
 * Veți ajunge cu o structură de directoare și fișiere identice în `es` și `de` așa cum aveți sub `en`

 ## Alte optiuni

 ### Funcție uscată
 Treceți `-n` / `--dry-run` pentru a afișa ceea ce s-ar face, dar nu efectuați de fapt apeluri API și nu scrieți niciun fișier

 ### Forta
 Transmite `-f` / `--force` pentru a regenera întotdeauna traducerile, chiar dacă acestea există deja

 ### Meci
 Transmite `-m` / `--match` pentru a limita fișierele procesate atunci când rulează în modul director

 Este posibil să nu doriți întotdeauna să traduceți *fiecare* fișier din directorul sursă în directorul țintă

 Valoarea `-m` / `--match` este o expresie regex (atenție la regulile de citare a shell-ului!) care specifică
 ce fișiere trebuie traduse

 Când aveți îndoieli, puteți combina această opțiune cu `-n` / `--dry-run` pentru a vedea ce fișiere vor fi traduse

 ### Exclude
 Uneori `-m` dvs. se potrivește cu prea multe fișiere. Utilizați opțiunea `-e` / `--excludes` pentru a exclude în mod explicit
 fișiere care altfel s-ar fi potrivit

 Puteți enumera mai multe regexe, separate prin spații

 O utilizare comună ar fi: `--excludes node_modules dist \.git build tmp`

 ### Ghidon
 Șirurile de tradus pot conține șabloane `{{ handlebars }}` , fie cu două sau trei acolade

 Probabil că *NU dorești* ca lucrurile din interiorul acelor șabloane să fie traduse

 Treceți `-H` / `--handlebars` și nimic din `{{ ... }}` nu va fi tradus

 ### Reducere
 Markdown nu este nici text, nici html, așa că Google Translate are unele dificultăți cu el

 Indicatorul `-M` / `--markdown` permite o gestionare specială pentru fișierele de reducere

 Cu fișierele markdown, dacă nu utilizați steag- `-M` , probabil veți găsi aceste probleme:
 * Legături rupte. În traducere, un caracter spațiu apare după ce o descriere a link-ului de reducere se termină (cu `]` ), dar
 înainte ca linkul său țintă să înceapă (cu `(` ). Acest lucru face ca marcarea să fie redată incorect, iar linkul
 este stricat la vizualizarea documentului.
 * Blocurile de cod sunt traduse. Google Translate nu știe ce markdown consideră cod și ce nu
 * Spațiere incorectă pentru blocurile de cod indentate. Spațierea este dificil de păstrat în traducere
 * Lucrurile din interiorul `backticks` vor fi traduse, când aproape întotdeauna doriți ca ele să fie valori literale

 Când steag-ul `-M` / `--markdown` este activat:
 * Modelul `](` va fi condensat la `](` , reparând astfel linkurile de reducere defalcate
 * Un înveliș „fără traducere” va fi plasat în jurul blocurilor de cod indentate, păstrând indentarea corespunzătoare și asigurându-se că acestea nu sunt traduse
 * Un înveliș „fără traducere” va fi plasat în jurul textului în `backticks` pentru a se asigura că acestea nu sunt traduse

 ### Proces-as
 În mod normal, totul este procesat ca text simplu

 Dacă conținutul dvs. este HTML, acesta va fi deteriorat dacă nu treceți opțiunea `-p html` / `--process-as html`

 ### Filtru
 Pentru cei aventuroși: atunci când procesați fișiere într-un director, puteți trece opțiunea `-F` / `--filter`
 pentru a filtra rezultatul înainte de a fi scris în sistemul de fișiere

 Valoarea acestei opțiuni trebuie să fie o cale către un fișier JS care exportă o funcție numită `filter`

 Funcția `filter` trebuie să fie `async` pentru că va fi apelată `await`

 Înainte ca fișierele să fie scrise pe disc, întregul conținut al fișierului va fi transmis funcției `filter` ca șir.

 Valoarea returnată de la funcția `filter` este ceea ce va fi de fapt scrisă în stocare

 Astfel, ai control total asupra a ceea ce va fi scris în cele din urmă

 Scriptul `filter` va fi căutat în următoarele locații (cu `.js` va fi atașat filtrului
 nume, cu excepția cazului în care se termină deja în `.js` )
 * Directorul curent
 * Un director numit `.hokey-filters` în directorul curent
 * Un director numit `${HOME}/.hokey-filters` , unde `${HOME}` este directorul principal al utilizatorului curent
 * [Directorul filtrelor] încorporat (https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Parametrii de filtrare
 `filter` poate fi mai multe cuvinte. În acest caz, primul cuvânt este numele filtrului și
 cuvintele rămase vor fi transmise ca argumente la funcția `filter`

 ### Ajutor
 Folosiți `-h` / `--help` pentru a afișa ajutor

 ## Comenzi batch JSON
 Cu opțiunea `-j` / `--json` , puteți rula mai multe comenzi coordonate `hokey`

 Prin convenție, acest fișier se numește `hokey.json` , dar îl puteți denumi cum doriți

 Dacă treceți un director ca opțiune ` `-j` , `hokey` va căuta un `hokey.json` în acel director

 Fișierul JSON ar trebui să conțină un singur obiect. În cadrul acelui obiect, numele proprietăților sale sunt aceleași cu
 opțiunile liniei de comandă, plus o proprietate suplimentară numită `hokey`

 Proprietatea `hokey` este o serie de comenzi de rulat. Proprietățile declarate în cadrul acestor comenzi vor
 suprascrie orice declarații duplicate din obiectul exterior.

 În cadrul fiecărui obiect din `hokey` , ar trebui să specificați un `name` și fișierele de intrare și de ieșire

 Iată un exemplu de `hokey.json`

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

 ### Mai multe fișiere de intrare
 Treceți o matrice de căi de fișiere ca `infiles` în loc de o singură cale `infile` , ca în acest exemplu:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indici
 Când traduceți în mai multe limbi, `hokey` poate crea un fișier index care listează toate traducerile făcute
 și oferă link-uri către ele

 *Când generați indici, puteți avea o singură sursă de intrare*

 Treceți opțiunea `-I` / `--index` , valoarea este locul unde va fi generat fișierul index, care poate fi un fișier
 sau un director. Dacă este un director, va fi folosit un nume de fișier implicit, pe baza șablonului (vezi mai jos)

 Utilizați `-A` / `--index-template` pentru a determina modul în care este formatată rezultatul indexului. Puteți specifica „html”,
 „markdown”, „text” sau calea fișierului către propriul șablon [HandlebarsJS](https://handlebarsjs.com/)

 Dacă specificați propriul șablon, trebuie să specificați și un fișier (nu un director) pentru `-I` / `--index`
 opțiune

 ## Distrează-te traducând limbi!

</pre>
