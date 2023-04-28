Hokeylization
 ==============
 Perchè ùn possu micca eseguisce tutta a mo app o u situ cù Google Translate è avè una traduzzione basica in una altra lingua ?

 *** Avà, pudete ! ***

 U nome `hokeylization` hè un portmanteau, chì significa "localizzazione hokey"

 Hè un pocu hokey perchè hè assai simplice: manda strings à Google Translate

 È hè simplice, ma ancu assai putente. Hà un supportu speciale per i documenti HTML,
 [HandlebarsJS](https://handlebarsjs.com/) mudelli,
 è [Markdown](https://daringfireball.net/projects/markdown) schedarii.

 Pudete traduce:
 * un ughjettu JavaScript chì cuntene missaghji
 * qualsiasi numeru di fugliali o cartulari, sempre traversendu i cartulari in modu recursivo

 # Leghjite questu in un'altra lingua
 Stu documentu README.md hè statu traduttu, utilizendu l'uttellu di hokeylization stessu, in
 **[tutte lingue supportate da Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Sò sicuru chì ùn hè micca perfettu, ma spergu chì hè megliu cà nunda !

 [🇸🇦 Arabu](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Tedesco](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spagnolo](../es/README.md)
 [🇫🇷 Francese](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesian](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Giapponese](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polacco](../pl/README.md)
 [🇧🇷 Portoghese](../pt/README.md)
 [🇷🇺 Russo](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 Cinese](../zh/README.md)


 **[📚 ... Tutte e lingue ...](../README.md)**
 ----

 ### Ci hè un prublema cù sta traduzzione di u README ?
 Questa traduzzione particulare di u [README] originale (https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 pò esse difettu - * e currezzione sò assai benvenute! * Mandate una [richiesta di pull in GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 o se ùn site micca còmode di fà quessa, [apre un prublema](https://github.com/cobbzilla/hokeylization/issues)

 Quandu create un novu prublema GitHub nantu à una traduzzione, fate:
 * include l'URL di a pagina (copia / incollà da a barra di indirizzu di u navigatore)
 * include u testu esatta chì hè sbagliatu (copia / incollà da u navigatore)
 * per piacè descrivi ciò chì hè sbagliatu -- a traduzzione hè sbagliata? a formattazione hè rotta in qualchì modu?
 * Per piacè offre un suggerimentu di una traduzzione megliu, o cumu u testu deve esse furmatu bè
 * **Grazie!**

 # Cuntinutu
 * [Source](#Source)
 * [Supportu è Finanziamentu](#Supportu-è-Fundamentu)
 * [Installazione](#Installazione)
 * [Configurazione](#Configurazione)
 * [Traduzzione di un schedariu di risorse di stringa JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Traduzzione di un repertoriu di schedarii di testu](#Translating-a-directory-of-text-files)
 * [Altre opzioni](#Altre-opzioni)
 * [Cumandamenti in batch JSON](#JSON-batch-commands)

 ## Fonte
 * [hokeylization in GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization in npm](https://www.npmjs.com/package/hokeylization)

 ## Supportu è Finanziamentu
 Aghju pruvatu à esse un sviluppatore prufessiunale di software open source. Aghju travagliatu in
 l'industria di u software per parechji anni, aghju principiatu cumpagnie di successu è li vende à cumpagnie publica.
 Recentemente aghju persu u mo travagliu, è ùn aghju micca veramente un altru travagliu in linea

 Dunque, aghju da pruvà à scrive un software utile è vede s'ellu funziona

 Se ti piace à utilizà stu software, saria tantu felice di riceve ancu u
 più chjucu [cuntribuzione mensuale via Patreon](https://www.patreon.com/cobbzilla)

 *Grazie!*

 ## Installazione
 Per utilizà l'uttellu di linea di cumanda, installate cù `npm` o `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Per aduprà cum'è biblioteca, installate a versione `lite` , chì hè assai più chjuca:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Allora fighjate l'aiutu per u cumandamentu `hokey` :

    hokey --help
    hokey -h

 Vulete vede l'output in a vostra lingua o in una altra lingua?

 `hokey` prova di detectà a lingua automaticamente da e variabili di l'ambiente di a vostra shell

 Pudete furzà una lingua per stabilisce a variabile d'ambiente `LC_ALL` :

    LC_ALL=it hokey --help

 Nota chì sè avete installatu `hokeylization-lite` , l'aiutu di cumanda hè dispunibule solu in inglese

 ## Istituisci
 Definite a variabile d'ambiente `GOOGLE_TRANSLATE_PROJECT_ID` per identificà u vostru prughjettu di Google Translate

 Pone a variabile d'ambiente `GOOGLE_APPLICATION_CREDENTIALS` à e credenziali JSON chì avete scaricatu
 dopu avè capitu cumu funziona l'autentificazione in Google cloud (pò esse divertente)

 Sè vo site da u codice fonte, pudete ancu mette questi in un schedariu `.env` in a fonte
 cartulare seranu caricati in runtime via [dotenv](https://www.npmjs.com/package/dotenv)

 ## Traducendu un schedariu di risorse di stringa JavaScript
 A vostra tabella di stringa **deve** esse in un schedariu JavaScript in una di queste duie forme:

 Esporta ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Esporta CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Se stu schedariu hè statu chjamatu `myfile.en.js` , pudete traduce in spagnolu è tedescu cù:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 U `LANG` in u sopra hè speciale - hè una parolla riservata in questu strumentu!

 U `LANG` hè rimpiazzatu cù u codice di lingua per i schedarii di output

 Cusì u cumandamentu sopra crea i schedari:

    myfile.es.js
    myfile.de.js

 L' `-l` / `--languages` hè una lista separata da virgole di codici di lingua ISO
 [supportatu da Google Translate](https://cloud.google.com/translate/docs/languages)

 Se u schedariu di output esiste digià, serà esaminatu per determinà quale chjave esiste digià.
 E chjave esistenti ùn saranu micca tradutte. E traduzioni per i chjavi mancanti saranu generati è appiccicati
 à a fine di l'ughjettu JS. Tuttu u schedariu hè sempre riscritto.

 Per furzà a ritraduzzione di tutte e chjave, utilizate l' `-f` / `--force`

 ## Traducendu un cartulare di schedarii di testu
 Pudete ancu traduce un cartulare di schedari. hokeylization sarà recursively visità ogni
 file in u cartulare è eseguisce u so cuntenutu attraversu Google Translate, è salvà a pruduzzioni
 à un schedariu di nome identicu in un arbulu di repertoriu separatu

 Quandu u scopu di a vostra traduzzione hè un repertoriu, stu modu hè attivatu

 L' `-o` / `--outfile` specifica u cartulare di output

 ** GRANDE AVVERTENZA ** : Quandu traduce i repertorii, ** NON ** specifica un cartulare di output
 chì hè in u vostru cartulare di input! Se fate questu, avete:
 * induce una recursione infinita
 * cullà a vostra fattura di Google
 * riempie u vostru discu
 * divertitevi menu

 Eccu un esempiu di ciò chì *micca fà*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Quandu questu funziona, i schedarii tradotti sò scritti in `templates/es` , è cusì diventanu novi
 i fugliali fonte da traduce, postu chì sò sottu `templates/` - stu prucessu cuntinueghja
 per sempre, ùn fate micca !

 #### Usu currettu
 OK, dicemu chì avete qualchi mudelli di email in un cartulare:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Per traduce tutti questi in spagnolu è tedescu, run:

    hokey -l es,de -o templates/email/LANG templates/email/en

 In u sopra, `LANG` hè una parolla riservata è serà rimpiazzata cù u codice di lingua ISO

 Cosa succede quandu u sopra corre:
 * I `templates/email/es` è `templates/email/de` seranu creati (se ùn esistenu micca)
 * Ogni fugliale in `templates/email/en` serà traduttu in spagnolu è tedescu
 * I fugliali di output esistenti ùn saranu micca rigenerati à menu chì ùn utilizate `-f` / `--force`
 * Truverete cù una struttura di cartulare identica è i schedari in `es` è `de` cum'è avete sottu `en`

 ## Altre opzioni

 ### Corsa a secco
 Passa `-n` / `--dry-run` per vede ciò chì seria fattu, ma ùn fate micca veramente alcuna chjama API o scrive alcun schedariu

 ### Forza
 Passà `-f` / `--force` per sempre rigenerà e traduzioni, ancu s'ellu esiste digià

 ### Match
 Passà `-m` / `--match` per limità i fugliali processati quandu eseguite in modu di repertoriu

 Ùn pudete micca sempre vulete traduce * ogni * file in u vostru repertoriu fonte à u vostru repertoriu di destinazione

 U valore di l' `-m` / `--match` hè una regex (attenzione à e regule di citazione di shell!) chì specifica
 quali schedari deve esse traduttu

 In casu di dubbitu, pudete combine sta opzione cù `-n` / `--dry-run` per vede quali fugliali seranu tradutti

 ### Esclude
 Calchì volta u vostru `-m` currisponde à troppu schedari. Aduprate l' `-e` / `--excludes` per escludiri esplicitamente
 i fugliali chì altrimenti avissiru currispondenu

 Pudete listà parechje regexe, separati da spazii

 Un usu cumuni seria: `--excludes node_modules dist \.git build tmp`

 ### Manubri
 E stringhe da traduce puderanu cuntene mudelli `{{ handlebars }}` , sia cù dui o trè curly-breces.

 Probabilmente * NON * vulete chì e cose in quelli mudelli sò tradutte

 Passa a `-H` / `--handlebars` , è tuttu in `{{ ... }}` ùn serà micca traduttu

 ### Markdown
 Markdown ùn hè nè testu nè html, cusì Google Translate hà qualchì difficultà cun ellu

 A `-M` / `--markdown` permette una gestione speciale per i schedarii di marcatura

 Cù i schedarii di marcatura, se ùn utilizate micca a bandiera `-M` , probabilmente truverete questi prublemi:
 * Ligami rotti. In a traduzzione, un caratteru spaziale appare dopu chì una descrizzione di ligame di marcatura finisce (cù `]` ) ma
 prima chì u so ligame di destinazione principia (cù `(` ). Questu face chì u markdown si rende incorrectamente, è u ligame.
 hè rottu quandu vede u documentu.
 * I blocchi di codice sò tradotti. Google Translate ùn sapi micca ciò chì markdown cunsidereghja u codice è ciò chì ùn hè micca
 * Spazamentu sbagliatu per i blocchi di codice indentati. U spaziu hè difficiule di priservà in a traduzzione
 * E cose à l'internu di `backticks` saranu tradutte, quandu quasi sempre vulete chì sò valori literali

 Quandu a `-M` / `--markdown` hè attivata:
 * U mudellu `](` serà cundensatu à `](` risolve cusì i ligami di marcatura rotti
 * Un wrapper "senza traduzzione" serà piazzatu intornu à i blocchi di codice indentati, priservendu l'indentazione curretta è assicurendu chì ùn sò micca tradutti.
 * Un wrapper "senza traduzzione" serà piazzatu intornu à u testu in `backticks` per assicurà chì ùn sò micca tradutti

 ### Prucessu-as
 Di solitu tuttu hè trattatu cum'è testu chjaru

 Se u vostru cuntenutu hè HTML, serà sguassatu à menu chì ùn passate l' `-p html` / `--process-as html`

 ### Filtru
 Per l'avventurosi: quandu processate i schedari in un cartulare, pudete passà l' `-F` / `--filter`
 per filtrà l'output prima ch'ellu sia scrittu à u filesystem

 U valore di sta opzione deve esse una strada à un schedariu JS chì esporta una funzione chjamata `filter`

 A funzione `filter` deve esse `async` perchè `await` serà chjamatu

 Prima chì i schedari sò scritti à u discu, tuttu u cuntenutu di u schedariu serà passatu à a funzione `filter` cum'è una stringa.

 U valore di ritornu da a funzione `filter` hè ciò chì sarà veramente scrittu à u almacenamiento

 Cusì, avete un cuntrollu tutale di ciò chì serà infine scrittu

 U script `filter` serà cercatu in i seguenti lochi (cù `.js` sarà appiccicatu à u filtru
 nome, salvu chì ùn finisce digià in `.js` )
 * U cartulare attuale
 * Un repertoriu chjamatu `.hokey-filters` in u cartulare attuale
 * Un repertoriu chjamatu `${HOME}/.hokey-filters` , induve `${HOME}` hè u cartulare di casa di l'utilizatori attuale
 * U [directory di filtri] integratu (https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Parametri di filtru
 A stringa `filter` pò esse parechje parolle. In questu casu, a prima parolla hè u nome di filtru, è
 e parolle restanti seranu passate cum'è argumenti à a funzione `filter` .

 ### Aiutu
 Aduprate `-h` / `--help` per mustrà l'aiutu

 ## Cumandamenti in batch JSON
 Cù l' `-j` / `--json` , pudete eseguisce parechje cumandamenti `hokey` coordinati

 Per cunvenzione stu schedariu hè chjamatu `hokey.json` , ma pudete chjamà ciò chì vulete

 Se passate un repertoriu cum'è l'opzione ` `-j` , `hokey` un `hokey.json` in quellu repertoriu

 U schedariu JSON deve cuntene un oggettu. Dentru quellu ughjettu, i so nomi di pruprietà sò listessi
 l'opzioni di linea di cumanda, più una pruprietà addiziale chjamata `hokey`

 A pruprietà `hokey` hè una matrice di cumandamenti per eseguisce. E proprietà dichjarate in questi cumandamenti seranu
 annullà qualsiasi dichjarazioni duplicate in l'ughjettu esternu.

 Dentru ogni ughjettu in l'array `hokey` , duvete specificà un `name` , è i schedarii di input è output.

 Eccu un esempiu di `hokey.json`

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

 ### Diversi schedarii di input
 Passa una matrice di percorsi di file cum'è `infiles` invece di una sola strada `infile` , cum'è in questu esempiu:

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
 Quandu traduce in parechje lingue, `hokey` pò creà un schedariu d'indici chì lista tutte e traduzioni fatte.
 è furnisce ligami per elli

 * Quandu generà indici, pudete avè una sola fonte di input *

 Passa l' `-I` / `--index` , u valore hè induve u schedariu d'indici serà generatu, chì pò esse un schedariu
 o un annuariu. S'ellu hè un cartulare, un nome di file predeterminatu serà utilizatu, basatu annantu à u mudellu (vede quì sottu)

 Aduprate u `-A` / `--index-template` per determinà cumu u furmatu di l'indici hè furmatu. Pudete specificà "html",
 'markdown', 'text', o u percorsu di u schedariu à u vostru propiu mudellu [HandlebarsJS](https://handlebarsjs.com/)

 Se specificate u vostru propiu mudellu, deve ancu specificà un schedariu (micca un cartulare) per u `-I` / `--index`
 opzione

 ## Divertitevi à traduce e lingue!

</pre>
