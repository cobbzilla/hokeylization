Hokeylization
 =============
 Nomen est portmanteau, id est "hokey localisation".

 Hokey est quia valde simplex est: chordas mittit ad Google Translate

 Vertere potes:
 * JavaScript object continet epistulae
 * Directorium files, recursively

 # Lege hoc in alia lingua
 Hoc documentum README.md translatum est, utens ipso instrumento hokeylizationis;
 in **[omnis lingua a Google Translate](../README.md)!**

 Perfectum certe non sum, sed spero melius quam nihil!

 [🇸🇦 Arabic] (lang/ar/README.md)
 [🇧🇩 Bengalica] (lang/bn/README.md)
 [🇩🇪 German] (lang/de/README.md)
 [🇺🇸 English](../en/README.md)
 [🇪🇸 Spanish](../es/README.md)
 [🇫🇷 French](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesiaca] (lang/id/README.md)
 [🇮🇹 Italian] (lang/it/README.md)
 [🇯🇵 Japanese] (lang/ja/README.md)
 [🇰🇷 Coreanica](../ko/README.md)
 [🇮🇳 Maranthi] (lang/mr/README.md)
 [🇵🇱 Polonica](../pl/README.md)
 [🇧🇷 Portuguese] (lang/pt/README.md)
 [🇷🇺 Russian](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkish](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamica] (lang/vi/README.md)
 [🇨🇳 Chinese](../zh/README.md)


 **[ ... Omnes Linguae ...](../README.md)**
 ----

 ### Estne problema cum hac translatione README?
 Haec praecipua translatio originalis [README] (https://github.com/cobbzilla/yuebing/blob/master/README.md)
 fortasse vitiosum -- *corrigenda valde grata!* Mitte quaeso [in GitHub rogationem viverra] (https://github.com/cobbzilla/yuebing/pulls);
 aut si parum commode id facis, [profluvium aperi] (https://github.com/cobbzilla/yuebing/issues)

 Cum novam GitHub quaestionem de translatione creas, quaeso fac;
 * Paginam URL includere (exemplum / crustulum ex vecte electronica)
 * Textum includere quod est nefas (exemplum / crustulum ex pasco)
 Suggestionem melioris translationis benigne offerre *
 * **Gratias tibi!**

 # Contents
 * [Source](#Source)
 * [Support and Funding] (Support-and-Funding)
 * [Installation] (#Installation)
 * [Setup](#Setup)
 * [JavaScript-filum-resource-file)
 * [Index indicis de text lima] (# Translatio-in-directorium-of-textu lima)
 * [Alia options]

 ## Source
 * [Hokeylization on GitHub] (https://github.com/cobbzilla/hokeylization)
 * [Hokeylization in npm] (https://www.npmjs.com/package/hokeylization)

 ## Support et Donec
 Conor esse professionalem fontem programmatum elit. I have been working in
 industria programmatis multos annos feliciter societates incepi et eas societates publicas vendidi.
 Nuper officium meum perdidi, et aliud opus non instruxit

 Eo igitur experior utilium programmatum scribo et vide an opera sit

 Sincere bene etiam minima [monthly contribution per Patreon](https://www.patreon.com/cobbzilla)

 ## Installation
 Utere utensilia instrumenti iubes, utens `npm` vel `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Uti pro bibliotheca, versionem `lite` , quae multo minor est;

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Tunc respice auxilium ad imperium `hokey` :

    hokey --help
    hokey -h

 Vis videre output in lingua tua, vel alia lingua?

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
 [a Google Translate] (https://cloud.google.com/translate/docs/languages)

 Si fasciculus output iam existit, examinabitur uter iam exstantibus.
 Existens claves interpretari non poterunt. Translationes pro clauibus absentis generabuntur et apponentur
 ad finem JS objecti. Totus fasciculus semper revocetur.

 Ad retranslationem omnes claves cogere, utere `-f` / `--force` optione

 ## Translatio presul of text files
 Paginarum directorium etiam interpretari potes. hokeylization et recursively visitare omnes
 lima in indicem et contenta currere per Google Translate et salvare output
 ad idem nomen file separatum in Directory arbore

 Cum scopo translationis tuae directorium est, hic modus est enabled

 `-o` / `--outfile` optio cificat output directory

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

 Quid fit cum supra fugit;
 * `templates/email/es` ac `templates/email/de` directoriis creabuntur (si non sunt)
 * Omnis fasciculus in `templates/email/en` in Hispanica et Germanica transferetur
 * files output exsistens non regenerabitur nisi uteris `-f` / `--force`
 * Finem habebis cum identitate structurae directorio ac lima intra `es` et `de` similem quam sub `en`

 ## Aliae optiones

 ### Siccum currere
 Transire `-n` / `--dry-run` ad ostentationem quae eventum est, sed non actu API vocat aliquod vel scribendo aliquod documentum.

 ### Force
 Transire `-f` / `--force` ad translationes semper renatas, etsi iam existunt

 ### Par
 Transire `-m` / `--match` limitare lima processit cum currit in presul-mode

 Non semper velis interpretari *omnia lima in tuo fonte presul ad scopum directorium tuum

 Valor `-m` / `--match` optio est regex (cave testa regulas commemorans!) quae specificat
 quae files interpretari

 In dubio, hanc optionem iungere cum `-n` / `--dry-run` videre potes utra tabularia transferantur.

 ### Excludit
 Interdum `-m` tuum multis files aequet. Utere `-e` / `--excludes` optione explicite excludere
 files qui aliter fuisset matched

 Plures regexes enumerare potes, spatiis separatis

 Communis usus esset: `--excludes node_modules dist \.git build tmp`

 ### Handlebars
 Fila transferendi, manubrii `{{ handlebars }}` templates contineant, vel cum duobus vel tribus bracteis crispis.

 Tu probabiliter noli vasa in illis exemplaribus interpretari

 `-H` / `--handlebars` vexillum, et quodcumque intra `{{ ... }}` , non transferetur.

 ### Markdown
 Markdown non est textus nec html, ideo Google Translate nonnullas difficultates cum eo habet

 `-M` / `--markdown` vexillum speciale pertractatio dat pro markdownum files

 Hokeylizer bene decenter tractat, sed cum fasciculis notis, saepe problemata haec potes:
 *Fracto nexus. In translatione spatium character videtur post notam descriptionis extremitatum ( `]` ) sed
 antequam scopum suum nexus incipit (per `(` ). Hoc notam facit ut perperam reddat et nexum
 Rumpitur spectans documentum.
 * Codicis caudices adepto translata. Google translate ignorat quid signum marcdown considerat et quid non
 * Recta iustae ad indentatum codice caudices. Spatium difficile servatur in translatione
 * Res interiores `backticks` transferentur, cum fere semper eas valores litterales esse vis

 Cum `-M` / `--markdown` potest:
 * Exemplar `] (` condensetur ad `](` sic nexus notae fractorum figens
 * A "no translate" fascia circumpositae incisae incisae ponentur, servatis propriis incisis et in tuto non transferuntur.
 * A "no translate" fascia circum texta collocabitur intra `backticks` ut ne transferantur

 ### Processus-ut
 Northmanni omnia discursum sicut patet in textu

 Si contentus es HTML, lacera nisi transeas `-p html` `--process-as html` optione

 ### Filter
 Nam periculosa: cum lima in directorio dispensando, optionem `-F` / `--filter` transire potes.
 eliquare output antequam scriptum est ad filesystem

 Valor huius optionis debet esse iter ad limam JS, quae exportatur functioni quae `filter`

 `filter` necesse est esse `async` quia `await`

 Priusquam fasciculi in disco scribantur, totum documentum ad munus `filter` tamquam chordae mittetur

 Reditus valor ex functionis `filter` est quod actu scribetur ad tabularium

 Quapropter summam potestatem habes in ea quae tandem scribentur

 ### Auxilium
 Utere `-h` / `--help` ad auxilium ostende

 ## Felix Translation!

</pre>
