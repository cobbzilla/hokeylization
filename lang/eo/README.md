Hokeylization
 ==============
 La nomo estas miksvorto, kun la signifo "hokey-loko"

 Ĝi estas hokey ĉar ĝi estas tre simpla: ĝi sendas ŝnurojn al Google Translate

 Vi povas traduki:
 * JavaScript objekto enhavanta mesaĝojn
 * dosierujo de dosieroj, rekursie

 # Legu ĉi tion en alia lingvo
 Ĉi tiu dokumento README.md estis tradukita, uzante la hokeylization ilo mem,
 en **[ĉiu lingvo subtenata de Google Translate](../README.md)!**

 Mi certas, ke ĝi ne estas perfekta, sed mi esperas, ke ĝi estas pli bona ol nenio!

 [🇸🇦 araba](../ar/README.md)
 [🇧🇩 bengala](../bn/README.md)
 [🇩🇪 germana](../de/README.md)
 [🇺🇸 angla](../en/README.md)
 [🇪🇸 Hispana](../es/README.md)
 [🇫🇷 franca](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindia](../hi/README.md)
 [🇮🇩 indonezia](../id/README.md)
 [🇮🇹 itala](../it/README.md)
 [🇯🇵 japana](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Pola](../pl/README.md)
 [🇧🇷 portugala](../pt/README.md)
 [🇷🇺 Rusa](../ru/README.md)
 [🇰🇪 Svahila](../sw/README.md)
 [🇵🇭 Tagaloga](../tl/README.md)
 [🇹🇷 Turka](../tr/README.md)
 [🇵🇰 Urdua](../ur/README.md)
 [🇻🇳 vjetnama](../vi/README.md)
 [🇨🇳 Ĉina](../zh/README.md)


 **[📚 ... Ĉiuj lingvoj ...](../README.md)**
 ----

 ### Ĉu estas problemo kun ĉi tiu traduko de la README?
 Ĉi tiu aparta traduko de la originalo [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 eble misfunkcias -- *korektoj estas tre bonvenaj!* Bonvolu sendi [tiropeton sur GitHub](https://github.com/cobbzilla/yuebing/pulls),
 aŭ se vi ne komfortas fari tion, [malfermu temon](https://github.com/cobbzilla/yuebing/issues)

 Kiam vi kreas novan GitHub-an numeron pri traduko, bonvolu fari:
 * inkluzivu la paĝon URL (kopiu/gluu el retumila adresbreto)
 * inkluzivu la ĝustan tekston malĝustan (kopiu/gluu el retumilo)
 * bonvolu proponi sugeston pri pli bona traduko
 * **Dankon!**

 # Enhavo
 * [Fonto](#Fonto)
 * [Subteno kaj Financado](#Subteno-kaj-Fincado)
 * [Instalado](#Instalo)
 * [Agordo](#Agordo)
 * [Tradukado de JavaScript-ŝnura rimeda dosiero](#Translating-a-JavaScript-string-resource-file)
 * [Tradukado de dosierujo de tekstaj dosieroj](#Translating-a-directory-of-text-files)
 * [Aliaj opcioj](#Aliaj-opcioj)

 ## Fonto
 * [hokeylization sur GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization sur npm] (https://www.npmjs.com/package/hokeylization)

 ## Subteno kaj Financado
 Mi provas esti profesia liberkoda programisto. Mi laboris en
 la programara industrio dum multaj jaroj, mi komencis sukcesajn kompaniojn kaj vendis ilin al publikaj kompanioj.
 Lastatempe mi perdis mian laboron, kaj mi vere ne havas alian laboron vicigita

 Do mi provos verki helpeman programaron kaj vidi ĉu tio funkcias

 Mi sincere dankus eĉ la plej malgrandan [monatan kontribuon per Patreon](https://www.patreon.com/cobbzilla)

 ## Instalado
 Por uzi la komandlinian ilon, instalu uzante `npm` aŭ `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Por uzi kiel bibliotekon, instalu la version `lite` , kiu estas multe pli malgranda:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Poste rigardu helpon por la komando `hokey` :

    hokey --help
    hokey -h

 Ĉu vi volas vidi eliron en via lingvo aŭ alia lingvo?

 `hokey` provas detekti la lingvon aŭtomate de la mediovariabloj de via ŝelo

 Vi povas devigi lingvon per agordo de la `LC_ALL` :

    LC_ALL=it hokey --help

 Notu, ke se vi instalis `hokeylization-lite` , komandhelpo disponeblas nur en la angla

 ## Agordi
 Agordu la `GOOGLE_TRANSLATE_PROJECT_ID` por identigi vian projekton de Google Translate

 Agordu la mediovariablon `GOOGLE_APPLICATION_CREDENTIALS` al la JSON-akreditaĵoj, kiujn vi elŝutis
 post eltrovi kiel aŭtentigo funkcias en Google-nubo (ĝi povas esti amuza)

 Se vi kuras de la fontkodo, vi ankaŭ povas meti ĉi tiujn en `.env` dosieron en la fonto
 dosierujo ili estos ŝarĝitaj ĉe rultempo per [dotenv](https://www.npmjs.com/package/dotenv)

 ## Tradukado de JavaScript-ŝnura rimeda dosiero
 Via kordtabelo **devas** esti en JavaScript-dosiero en unu el ĉi tiuj du formoj:

 Eksporto de ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS-eksporto

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Se ĉi tiu dosiero estis nomita `myfile.en.js` , vi povas traduki ĝin al la hispana kaj germana per:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 La `LANG` en ĉi-supra estas speciala -- ĝi estas rezervita vorto en ĉi tiu ilo!

 La `LANG` estas anstataŭigita per la lingvokodo por la eligdosieroj

 Tiel la supra komando kreas la dosierojn:

    myfile.es.js
    myfile.de.js

 La `-l` / `--languages` estas komo-disigita listo de ISO-lingvaj kodoj
 [subtenata de Google Translate](https://cloud.google.com/translate/docs/languages)

 Se la eligdosiero jam ekzistas, ĝi estos ekzamenita por determini kiuj ŝlosiloj jam ekzistas.
 Ekzistantaj ŝlosiloj ne estos tradukitaj. Tradukoj por mankantaj ŝlosiloj estos generitaj kaj almetitaj
 ĝis la fino de la JS-objekto. La tuta dosiero ĉiam estas reverkita.

 Por devigi retradukon ĉiujn klavojn, uzu la `-f` / `--force`

 ## Tradukado de dosierujo de tekstaj dosieroj
 Vi ankaŭ povas traduki dosierujon de dosieroj. hokeylization rekursie vizitos ĉiun
 dosieron en la dosierujo kaj rulu ĝian enhavon per Google Translate, kaj konservu la eligon
 al idente nomita dosiero en aparta dosierujo-arbo

 Kiam la celo de via traduko estas dosierujo, ĉi tiu reĝimo estas ebligita

 La `-o` / `--outfile` specifas la eligdosierujon

 **GRANDA AVERTO**: Dum tradukado de dosierujoj, **NE** specifu eligdosierujon
 tio estas ene de via eniga dosierujo! Se vi faros tion, vi:
 * indukti senfinan rikurson
 * altigu vian Guglo-fakturon
 * plenigu vian diskon
 * amuzu malpli

 Jen ekzemplo de tio, kion *ne fari*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Kiam tio funkcias, tradukitaj dosieroj estas skribitaj al `templates/es` , kaj tiel fariĝas novaj
 fontdosieroj tradukendaj, ĉar ili estas sub `templates/` -- ĉi tiu procezo daŭras
 por ĉiam, ne faru ĝin!

 #### Ĝusta uzado
 Bone, ni diru, ke vi havas kelkajn retpoŝtajn ŝablonojn en dosierujo:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Por traduki ĉiujn ĉi tiujn al la hispana kaj germana, rulu:

    hokey -l es,de -o templates/email/LANG templates/email/en

 En ĉi-supra, `LANG` estas rezervita vorto kaj estos anstataŭigita per la ISO-lingva kodo

 Kio okazas kiam la supre funkcias:
 * La dosierujoj `templates/email/es` kaj `templates/email/de` estos kreitaj (se ili ne ekzistas)
 * Ĉiu dosiero en `templates/email/en` estos tradukita al la hispana kaj la germana
 * Ekzistantaj eligdosieroj ne estos regeneritaj krom se vi uzas `-f` / `--force`
 * Vi havos identan dosierujon kaj dosierojn ene de `es` kaj `de` kiel vi havas sub `en`

 ## Aliaj ebloj

 ### Seka kurado
 Pasu `-n` / `--dry-run` por montri tion, kio estus farita, sed ne efektive faru iujn ajn API-vokojn aŭ skribu ajnajn dosierojn

 ### Forto
 Pasu `-f` / `--force` por ĉiam regeneri tradukojn, eĉ se ili jam ekzistas

 ### Kongruo
 Pasu `-m` / `--match` por limigi la dosierojn procesitajn dum kurado en dosieruja reĝimo

 Vi eble ne ĉiam volas traduki *ĉiun* dosieron en via fonta dosierujo al via cela dosierujo

 La valoro de la `-m` / `--match` estas regex (atentu regulojn pri citado de ŝelo!) kiu specifas
 kiuj dosieroj estu tradukitaj

 Dum dubo, vi povas kombini ĉi tiun opcion kun `-n` / `--dry-run` por vidi kiuj dosieroj estus tradukitaj

 ### Ekskludas
 Kelkfoje via `-m` kongruas kun tro da dosieroj. Uzu la `-e` / `--excludes` por eksplicite ekskludi
 dosieroj kiuj alie kongruus

 Vi povas listigi plurajn regeksojn, apartigitajn per spacoj

 Ofta uzo estus: `--excludes node_modules dist \.git build tmp`

 ### Stiriloj
 La tradukendaj ŝnuroj povus enhavi ŝablonojn `{{ handlebars }}` , aŭ kun du aŭ tri krampoj

 Vi verŝajne *NE* volas, ke la aĵoj ene de tiuj ŝablonoj estu tradukitaj

 Pasu la `-H` / `--handlebars` , kaj io ajn ene de `{{ ... }}` ne estos tradukita

 ### Markdown
 Markdown estas nek teksto nek html, do Google Translate havas kelkajn malfacilaĵojn kun ĝi

 La flago `-M` / `--markdown` ebligas specialan uzadon por markdown dosieroj

 Hokeylizer pritraktas aferojn dece bone, sed kun markdown-dosieroj, vi povas ofte ĉi tiujn problemojn:
 * Rompitaj ligiloj. En la traduko, spaceto aperas post kiam finiĝas priskribo de markdown-ligo (kun `]` ) sed
 antaŭ ol ĝia celligo komenciĝas (kun `(` ). Ĉi tio kaŭzas ke la markdown malĝuste bildigas, kaj la ligo
 estas rompita dum rigardado de la dokumento.
 * Kodblokoj estas tradukitaj. Google Translate ne scias, kion markdown konsideras kodon kaj kion ĝi ne
 * Malĝusta interspaco por indentitaj kodblokoj. Interspaco estas malfacile konservebla en traduko
 * Aferoj ene de `backticks` estos tradukitaj, kiam vi preskaŭ ĉiam volas, ke ili estu laŭvortaj valoroj

 Kiam la flago `-M` / `--markdown` estas ebligita:
 * La ŝablono `] (` estos densigita al `](` tiel riparante la rompitajn markdown-ligilojn
 * Envolvaĵo "ne tradukita" estos metita ĉirkaŭ indentitaj kodblokoj, konservante taŭgan indentaĵon kaj certigante ke ili ne estas tradukitaj
 * "Ne tradukebla" envolvaĵo estos metita ĉirkaŭ teksto ene de `backticks` por certigi ke ili ne estas tradukitaj

 ### Procezo-kiel
 Normale ĉio estas prilaborita kiel simpla teksto

 Se via enhavo estas HTML, ĝi estos difektita krom se vi pasas la `-p html` / `--process-as html`

 ### Filtrilo
 Por aventuruloj: kiam vi prilaboras dosierojn en dosierujo, vi povas pasi la `-F` / `--filter`
 por filtri la produktaĵon antaŭ ol ĝi estas skribita al la dosiersistemo

 La valoro de ĉi tiu opcio devas esti vojo al JS-dosiero kiu eksportas funkcion nomitan `filter`

 La funkcio `filter` devas esti `async` ĉar `await` " estos vokita sur ĝi

 Antaŭ ol dosieroj estas skribitaj al disko, la tuta `filter` kiel ĉeno.

 La revena valoro de la funkcio `filter` estas tio, kio efektive estos skribita al stokado

 Tiel, vi havas tutan kontrolon pri tio, kio finfine estos skribita

 ### Helpu
 Uzu `-h` / `--help` por montri helpon

 ## Feliĉa Tradukado!

</pre>
