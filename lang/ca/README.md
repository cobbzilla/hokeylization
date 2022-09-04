Hokeylització
 ==============
 El nom és un acrònim, que significa "localització hokey".

 És divertit perquè és molt senzill: envia cadenes a Google Translate

 Podeu traduir:
 * un objecte JavaScript que conté missatges
 * un directori de fitxers, de forma recursiva

 # Llegeix això en un altre idioma
 Aquest document README.md s'ha traduït, utilitzant la pròpia eina hokeylization, a
 **[cada idioma compatible amb Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Estic segur que no és perfecte, però espero que sigui millor que res!

 [🇸🇦 Àrab](../ar/README.md)
 [🇧🇩 bengalí](../bn/README.md)
 [🇩🇪 Alemany](../de/README.md)
 [🇺🇸 Anglès](../en/README.md)
 [🇪🇸 Espanyol](../es/README.md)
 [🇫🇷 Francès](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesi](../id/README.md)
 [🇮🇹 italià](../it/README.md)
 [🇯🇵 Japonès](../ja/README.md)
 [🇰🇷 coreà](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 polonès](../pl/README.md)
 [🇧🇷 portuguès](../pt/README.md)
 [🇷🇺 Rus](../ru/README.md)
 [🇰🇪 suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turc](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamita](../vi/README.md)
 [🇨🇳 Xinès](../zh/README.md)


 **[📚 ... Tots els idiomes ...](../README.md)**
 ----

 ### Hi ha algun problema amb aquesta traducció del README?
 Aquesta traducció en particular de l'original [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 pot ser defectuós: *les correccions són molt benvingudes!* Envieu una [sol·licitud d'extracció a GitHub](https://github.com/cobbzilla/yuebing/pulls),
 o si no et sents còmode fent-ho, [obre un problema](https://github.com/cobbzilla/yuebing/issues)

 Quan creeu un nou problema de GitHub sobre una traducció, feu el següent:
 * incloure l'URL de la pàgina (copiar/enganxar des de la barra d'adreces del navegador)
 * inclou el text exacte que és incorrecte (copiar/enganxar des del navegador)
 * Si us plau, ofereix un suggeriment d'una millor traducció
 * **Gràcies!**

 # Continguts
 * [Font](#Font)
 * [Suport i finançament](#Support-and-Funding)
 * [Instal·lació](#Instal·lació)
 * [Configuració](#Configuració)
 * [Traduint un fitxer de recurs de cadena JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Traducció d'un directori de fitxers de text](#Translating-a-directory-of-text-files)
 * [Altres opcions](#Other-options)

 ## Font
 * [hokeylization a GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization a npm](https://www.npmjs.com/package/hokeylization)

 ## Suport i finançament
 Estic intentant ser un desenvolupador professional de programari de codi obert. Hi he estat treballant
 la indústria del programari durant molts anys, he creat empreses d'èxit i les he venut a empreses públiques.
 Recentment he perdut la meva feina, i realment no tinc cap altra feina preparada

 Així que intentaré escriure programari útil i veure si funciona

 Agrairia sincerament fins i tot la més petita [contribució mensual a través de Patreon](https://www.patreon.com/cobbzilla)

 ## Instal·lació
 Per utilitzar l'eina de línia d'ordres, instal·leu-lo amb `npm` ' o `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Per utilitzar-la com a biblioteca, instal·leu la versió `lite` , que és molt més petita:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 A continuació, consulteu l'ajuda per a l'ordre `hokey` :

    hokey --help
    hokey -h

 Voleu veure la sortida en el vostre idioma o en un altre idioma?

 `hokey` intenta detectar l'idioma automàticament a partir de les variables d'entorn del vostre shell

 Podeu forçar un idioma configurant la variable d'entorn `LC_ALL` :

    LC_ALL=it hokey --help

 Tingueu en compte que si heu instal·lat `hokeylization-lite` , l'ajuda d'ordres només està disponible en anglès

 ## Configuració
 Estableix la variable d'entorn `GOOGLE_TRANSLATE_PROJECT_ID` per identificar el teu projecte de Google Translate

 Estableix la variable d'entorn `GOOGLE_APPLICATION_CREDENTIALS` a les credencials JSON que has baixat
 després d'esbrinar com funciona l'autenticació al núvol de Google (pot ser divertit)

 Si esteu executant des del codi font, també podeu posar-los en un fitxer `.env` a la font
 directori, es carregaran en temps d'execució mitjançant [dotenv](https://www.npmjs.com/package/dotenv)

 ## Traduint un fitxer de recurs de cadena JavaScript
 La vostra taula de cadenes **ha de** estar en un fitxer JavaScript en una d'aquestes dues formes:

 Exportació ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Exportació CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Si aquest fitxer es deia `myfile.en.js` , podeu traduir-lo a l'espanyol i l'alemany amb:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 El `LANG` de l'anterior és especial: és una paraula reservada en aquesta eina!

 El `LANG` es substitueix pel codi d'idioma per als fitxers de sortida

 Així, l'ordre anterior crea els fitxers:

    myfile.es.js
    myfile.de.js

 L' `-l` / `--languages` és una llista separada per comes de codis d'idioma ISO
 [admès per Google Translate](https://cloud.google.com/translate/docs/languages)

 Si el fitxer de sortida ja existeix, s'examinarà per determinar quines claus ja existeixen.
 Les claus existents no es traduiran. Es generaran i s'afegiran traduccions de les claus que falten
 fins al final de l'objecte JS. Sempre es reescriu tot el fitxer.

 Per forçar la retraducció de totes les claus, utilitzeu l' `-f` / `--force`

 ## Traduir un directori de fitxers de text
 També podeu traduir un directori de fitxers. hokeylization visitarà de manera recursiva tots
 fitxer al directori i executeu-ne el contingut mitjançant Google Translate i deseu la sortida
 a un fitxer de nom idèntic en un arbre de directoris independent

 Quan l'objectiu de la traducció és un directori, aquest mode està habilitat

 L' `-o` / `--outfile` especifica el directori de sortida

 **GRAN ADVERTIMENT**: quan traduïu directoris, **NO** especifiqueu un directori de sortida
 que es troba dins del vostre directori d'entrada! Si fas això, faràs:
 * induir recursivitat infinita
 * Augmenta la teva factura de Google
 * ompliu el vostre disc
 * divertir-se menys

 Aquí teniu un exemple del que *no fer*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Quan s'executa, els fitxers traduïts s'escriuen a `templates/es` i, per tant, esdevenen nous
 fitxers font per traduir, ja que es troben sota `templates/` -- aquest procés continua
 per sempre, no ho facis!

 #### Ús correcte
 D'acord, suposem que teniu algunes plantilles de correu electrònic en un directori:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Per traduir tot això a l'espanyol i l'alemany, executeu:

    hokey -l es,de -o templates/email/LANG templates/email/en

 A l'anterior, `LANG` és una paraula reservada i es substituirà pel codi d'idioma ISO

 Què passa quan s'executa l'anterior:
 * Es crearan els directoris `templates/email/es` i `templates/email/de` (si no existeixen)
 * Tots els fitxers de `templates/email/en` es traduiran a l'espanyol i l'alemany
 * Els fitxers de sortida existents no es regeneraran tret que utilitzeu `-f` / `--force`
 * Acabaràs amb una estructura de directoris i fitxers idèntics a `es` i `de` com els que tens a `en`

 ## Altres opcions

 ### Carrera en sec
 Passeu `-n` / `--dry-run` per mostrar el que es faria, però en realitat no feu cap trucada a l'API ni escriviu cap fitxer

 ### Força
 Passeu `-f` / `--force` per regenerar sempre les traduccions, encara que ja existeixin

 ### Coincidència
 Passeu `-m` / `--match` per limitar els fitxers processats quan s'executen en mode directori

 És possible que no sempre vulgueu traduir *cada* fitxer del vostre directori d'origen al directori de destinació

 El valor de l' `-m` / `--match` és una expressió regular (compte amb les regles de cites de shell!) que especifica
 quins fitxers s'han de traduir

 En cas de dubte, podeu combinar aquesta opció amb `-n` / `--dry-run` per veure quins fitxers es traduirien

 ### Exclou
 De vegades, el vostre `-m` coincideix amb massa fitxers. Utilitzeu l' `-e` / `--excludes` per excloure explícitament
 fitxers que d'altra manera haurien coincidit

 Podeu llistar diverses execucions regulars, separades per espais

 Un ús comú seria: `--excludes node_modules dist \.git build tmp`

 ### Manillars
 Les cadenes a traduir poden contenir plantilles `{{ handlebars }}` , amb dues o tres claus.

 Probablement *NO* vulgueu que es tradueixin les coses dins d'aquestes plantilles

 Passeu la `-H` / `--handlebars` --handlebars` i qualsevol cosa dins de `{{ ... }}` no es traduirà

 ### Reducció
 Markdown no és ni text ni html, de manera que Google Translate hi té algunes dificultats

 El `-M` / `--markdown` permet un maneig especial dels fitxers de reducció

 Amb els fitxers de marcatge, si no feu servir el `-M` , probablement trobareu aquests problemes:
 * Enllaços trencats. A la traducció, apareix un caràcter d'espai després d'acabar la descripció d'un enllaç de reducció (amb `]` ), però
 abans que comenci el seu enllaç de destinació (amb `(` ). Això fa que el marcador es mostri incorrectament i l'enllaç
 està trencat en visualitzar el document.
 * Els blocs de codi es tradueixen. Google Translate no sap què es considera codi i què no
 * Espaiat incorrecte per als blocs de codi sagnats. L'espaiat és difícil de conservar en la traducció
 * Les coses dins de `backticks` es traduiran, quan gairebé sempre voleu que siguin valors literals

 Quan el `-M` / `--markdown` està habilitat:
 * El patró `] (` es condensarà a `](` arreglant així els enllaços de reducció trencats
 * Es col·locarà un embolcall "sense traducció" al voltant dels blocs de codi amb sagnat, conservant el sagnat adequat i assegurant que no es tradueixin
 * Es col·locarà un embolcall "sense traducció" al voltant del text dins dels `backticks` per assegurar-se que no es tradueixin

 ### Process-as
 Normalment, tot es processa com a text sense format

 Si el vostre contingut és HTML, es trencarà tret que passi l'opció `-p html` / `--process-as html`

 ### Filtre
 Per als aventurers: quan processeu fitxers en un directori, podeu passar l' `-F` / `--filter`
 per filtrar la sortida abans que s'escriu al sistema de fitxers

 El valor d'aquesta opció ha de ser un camí d'accés a un fitxer JS que exporti una funció anomenada `filter`

 La funció `filter` ha de ser `async` perquè se'n cridarà `await`

 Abans que els fitxers s'escriguin al disc, tot el contingut del fitxer es passarà a la funció `filter` com a cadena

 El valor de retorn de la funció `filter` és el que realment s'escriurà a l'emmagatzematge

 Així, tens un control total sobre el que finalment s'escriurà

 ### Ajuda
 Utilitzeu `-h` / `--help` per mostrar l'ajuda

 ## Feliç traducció!

</pre>
