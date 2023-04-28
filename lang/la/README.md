Hokeylization
 =============
 Cur non totum app vel situs per Google Translate et in alia lingua interpretationem meam currere non possum?

 ***Iam potes!***

 Nomen `hokeylization` est portmanteau, id est "hokeylizationis".

 Hoc aliquantum hokey est quia valde simplex est: chordas ad Google Translate . mittit

 Et simplex est, sed et potens. Speciale subsidium habet documentis HTML;
 [HandlebarsJS](https://handlebarsjs.com/) template
 et [Markdown] files.

 Vertere potes:
 * JavaScript object continet epistulae
 * Quisquis numerus lima vel directoria, semper directoria percurso recursively

 # Lege hoc in alia lingua
 Hoc README.md documentum translatum est, utens ipso instrumento hokeylizationis, in-
 **[Omnis lingua a Google Translate](https://cloud.google.com/translate/docs/languages)!

 Perfectum certe non sum, sed spero melius quam nihil!

 [🇸🇦 Arabic](../ar/README.md)
 [🇧🇩 Bengalica](../bn/README.md)
 [🇩🇪 German](../de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesiaca](../id/README.md)
 [🇮🇹 Italian](../it/README.md)
 [🇯🇵 Japanese](../ja/README.md)
 [🇰🇷 Coreanica](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polonica](../pl/README.md)
 [🇧🇷 Portuguese](../pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamica](../vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[ ... Omnes Linguae ...](../README.md)**
 ----

 ### Estne problema cum hac translatione README?
 Haec praecipua translatio originalis [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 licet vitiosum esse -- * correctiones valde gratae sunt!* Mitte quaeso [in GitHub petitionem trahere](https://github.com/cobbzilla/hokeylization/pulls);
 vel si non es commodus id faciens, [aperi fluxum](https://github.com/cobbzilla/hokeylization/issues)

 Cum novam GitHub quaestionem de translatione creas, quaeso fac;
 * Paginam URL includere (exemplum/crustulum ex vecte electronici)
 * Textum includere quod est nefas (exemplum / crustulum ex pasco)
 * Quaeso describere quid sit iniuria — est interpretatio falsa? fractum est forma aliqua?
 * benigne suggestionem praebeant translationis melioris vel quomodo textus debite formatus sit
 * **Gratias tibi!**

 # Contents
 * [Source](#Source)
 * [Support and Funding](Support-and-Funding)
 * [Installation](#Installation)
 * [Setup](#Setup)
 * [JavaScript-filum-resource-file)
 * [Index de text lima transferendo](# Translatio-in-indirectorium-of-textu lima)
 * [Optiones aliae]
 * [JSON batch imperata](#JSON-batch-imperat)

 ## Source
 * [Hokeylization on GitHub](https://github.com/cobbzilla/hokeylization)
 * [Hokeylization in npm](https://www.npmjs.com/package/hokeylization)

 ## Support et Donec
 Conor esse professionalem fontem elit programmandi. I have been working in
 industria programmatis multos annos feliciter societates incepi et eas societates publicas vendidi.
 Nuper officium meum perdidi, et aliud opus non instruxit

 Eo igitur experiar scribendo utilem programmatum et vide an opera sit

 Si hoc programmate utendo frueris, ego tam laetus sum ut etiam thecam recipiam
 minima [menstrua contributio per Patreon](https://www.patreon.com/cobbzilla)

 *Gratias tibi!*

 ## Installation
 Utendi linea mandandi instrumentum, utens `npm` vel `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Uti pro bibliotheca, versionem `lite` , quae multo minor est;

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Tunc respice auxilium ad imperium `hokey` :

    hokey --help
    hokey -h

 Vis videre output in lingua tua aut alia lingua?

 `hokey` lingua sponte deprehendere conatur ex scriptor environment variabilium testae tuae

 Linguam opprimere potes ponendo `LC_ALL` ambitus variabilis:

    LC_ALL=it hokey --help

 Nota quod si `hokeylization-lite` , auxilium mandatum tantum praesto est Anglice

 ## Setup
 Pone `GOOGLE_TRANSLATE_PROJECT_ID` ambitus variabilis ad cognoscendum Google Proiectum Translate

 Pone `GOOGLE_APPLICATION_CREDENTIALS` ambitus variabilis ad JSON documentorum quae receptae sunt
 Post figurans quomodo authenticas operatur in Google nubes (potest esse fun)

 Si ex fonte codice curris, has quoque in `.env` in fonte ponere potes
 directorium onerabuntur apud runtime per [dotenv](https://www.npmjs.com/package/dotenv)

 ## Translatio JavaScript filum resource file
 Mensa chorda tua debet esse in lima in una ex his duabus formis JavaScript:

 ES6 educendo:

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

 Si hic fasciculus `myfile.en.js` , id cum Hispanica et Germanica transferre potes:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` in superioribus speciale est — verbum reservatum in hoc instrumento est!

 `LANG` reponitur cum codice linguae pro files output

 Sic supra imperium files creat;

    myfile.es.js
    myfile.de.js

 The `-l` / `--languages` est comma separatum indicem in codice linguae ISO
 [a Google Translate](https://cloud.google.com/translate/docs/languages)

 Si fasciculus output iam exstat, examinabitur uter iam exstantibus.
 Existens claves interpretari non poterunt. Translationes pro clauibus absentis generabuntur et apponentur
 ad finem JS objecti. Totus fasciculus semper revocetur.

 Ad retranslationem omnes claves cogere, utere `-f` / `--force` optione

 ## Translatio presul of text files
 Paginarum directorium etiam interpretari potes. hokeylization et recursively visitare omnes
 lima in indicem et contenta currere per Google Translate et salvare output
 ad idem nomen file separatum in Directory arbore

 Cum scopo translationis tuae directorium est, hic modus est enabled

 `-o` / `--outfile` optio specificat output directory

 ** Magnum MONITUM **: cum transferendis directoriis, ** non specificare an output Directory
 hoc est in input tuum presul! Si hoc feceris, eris;
 * Inducunt infinitum recursionis
 * Currere libellum tuum Google
 * Imple tuum orbem
 * Non minus fun

 Hic est exemplum quod non facere;

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Cum hoc currit, tabulae translatae ad `templates/es` , et sic nova fiunt
 fontem imaginum interpretari, cum sint sub `templates/`
 usque in aeternum, ne feceris!

 #### Recte usus
 OK, dicamus te habere aliquas rationes electronicas in directorio:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Ut omnes hi Hispani et Germani, currunt;

    hokey -l es,de -o templates/email/LANG templates/email/en

 In superioribus, `LANG` verbum reservatum est et in codice linguae ISO restituendum est

 Quod fit cum supra fugit;
 * `templates/email/es` ac `templates/email/de` directoriis creabuntur (si non sunt)
 * Omnis fasciculus in `templates/email/en` in Hispanica et Germanica transferetur
 * files output exsistens non regenerabitur nisi uteris `-f` / `--force`
 * Finem habebis cum identitate structurae directorio ac lima intra `es` et `de` similem quam sub `en`

 ## Aliae optiones

 ### Siccum currere
 Transire `-n` / `--dry-run` ad ostentationem quae eventum est, sed non actu API vocat vel scribendo aliquas tabulas.

 ### Force
 Transire `-f` / `--force` ad translationes semper renatas, etsi iam existunt

 ### Par
 Transire `-m` / `--match` limitare lima processit cum currit in presul-mode

 Non semper velis interpretari *omnia lima in tuo fonte presul ad scopum directorium tuum

 Valor `-m` / `--match` est regex (cave testa regulas commemorans!) quae specificat
 quae files interpretari

 In dubio, hanc optionem iungere cum `-n` / `--dry-run` videre potes utra tabularia transferantur.

 ### Excludit
 Interdum vestri `-m` nimis multi files aequet. Utere `-e` / `--excludes` optione explicite excludere
 files qui aliter fuisset matched

 Plures regexes enumerare potes, spatiis separatis

 Communis usus esset: `--excludes node_modules dist \.git build tmp`

 ### Handlebars
 Fila transferendi possent `{{ handlebars }}` templates continere, vel cum duobus vel tribus bracteis crispis.

 Tu probabiliter noli vasa in illis exemplaribus interpretari

 `-H` / `--handlebars` vexillum transi, et quid intra `{{ ... }}` transferri non potest.

 ### Markdown
 Markdown non est textus nec html, ideo Google Translate nonnullas difficultates cum eo habet

 `-M` / `--markdown` vexillum speciale pertractatio dat pro markdownum files

 Cum imagini notae, si vexillum `-M` non uteris, has difficultates verisimiliter invenies:
 *Fracto nexus. In translatione spatium character videtur post notam descriptionis extremitatum ( `]` ) sed
 antequam scopum suum nexus incipit (per `(` ). Hoc notam facit ut perperam reddat et nexum
 Rumpitur spectans documentum.
 * Codicis caudices translati sunt. Google translate ignorat quid signum marcdown considerat et quid non
 * Recta iustae ad indentatum codice caudices. Spatium difficile servatur in translatione
 * Res interiores `backticks` transferentur, cum fere semper eas valores litterales esse vis

 Cum `-M` / `--markdown` est;
 * Exemplar `](` condensetur ad `](` sic nexus notae fractos figens
 * A "no translate" fascia incisa collocabitur circa caudices codicis, servata incisatione propria et in tuto non transfertur.
 * A "ne translate" fasciculus circum textum intra `backticks` ut ne transferantur

 ### Process-as
 Northmanni omnia discursum sicut patet in textu

 Si contentus es HTML, lacera nisi transieris `-p html` `--process-as html` optione

 ### Filter
 Nam periculosus: cum lima in directorio dispensando, optionem `-F` / `--filter` transire potes.
 eliquare output antequam scriptum est ad filesystem

 Valor huius optionis debet esse iter ad fasciculum JS qui exportat munus nomine `filter`

 `filter` necesse est esse `async` quia `await`

 Priusquam fasciculi in disco scribantur, totum documentum ad munus `filter` tamquam chordae mittetur

 Valor reditus ex functionis `filter` est quod actu scribetur ad tabularium

 Quapropter summam potestatem habes in ea quae tandem scribentur

 `filter` in sequentibus locis (cum `.js`
 nomen, nisi iam desinat in `.js` )
 * In current Directory
 * Directorium nominatum `.hokey-filters` in directorio current
 * Directorium nominatum `${HOME}/.hokey-filters` , ubi `${HOME}` est usoris domicilium directorium
 * In constructum-in [filters directorium](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Filter Morbi
 `filter` filo plura verba esse possunt. In hoc casu primum verbum nomen colum est et
 reliqua verba proferentur ut rationes ad munus `filter`

 ### Auxilium
 Utere `-h` / `--help` ad auxilium ostende

 ## JSON batch imperat
 Cum `-j` / `--json` , currere potes multa `hokey` precepta ordinata

 Ex conventione haec fasciculus `hokey.json` , sed id quod vis nominare potes

 Si directorium transieris ut optio ` `-j` , `hokey` `hokey.json` in indice illo.

 JSON file unum objectum debet continere. In illo obiecto, proprietates eius idem sunt
 order-line options, and one additional property named `hokey`

 `hokey` est ordo currere. Proprietates in his mandatis declarabuntur
 duplicata declarationibus delendi quodlibet objectum exterius.

 Intra singula objecta in `hokey` ordinata, debes `name` nominare, et imaginum initus et output.

 Exemplum est `hokey.json`

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

 ### Multiplex files initus
 Ordinatas semitas fasciculi ut `infiles` pro uno tramite `infile` , ut hoc exemplo:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indices
 Cum ad multas linguas vertendum, `hokey` creare potest indicem fasciculi qui omnes translationes factas enumerat
 et praebet nexus illis

 Cum indices generantes, unum tantum initus fontem habere potes*

 Transire `-I` / `--index` , valor est ubi indicem fasciculi generabitur, qui fasciculus esse potest.
 vel presul. Si directorium illud est, defalta filename adhibebitur, ex Formula (vide infra)

 Utere `-A` / `--index-template` determinare quomodo index output formatus est. Determinare potes 'html',
 "markdown", "textum", seu tabella iter tuum [HandlebarsJS](https://handlebarsjs.com/) template

 Si proprium exemplar denotas, etiam tabellam (non directorium) designare debet pro `-I` / `--index`
 optio

 ## Ludi tempus habent linguae vertendae!

</pre>
