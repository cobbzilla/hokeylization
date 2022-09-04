Hokeylization
 ============
 Portmanteau is ea an t-ainm, rud a chiallaíonn 'logánú hokey'

 Tá sé hokey mar tá sé an-simplí: seolann sé teaghráin chuig Google Translate

 Is féidir leat aistriúchán:
 * réad JavaScript ina bhfuil teachtaireachtaí
 * eolaire comhad, go hathchúrsach

 # Léigh é seo i dteanga eile
 Aistríodh an doiciméad README.md seo, ag baint úsáide as an uirlis hkeylization féin,
 isteach **[gach teanga a dtacaíonn Google Translate léi](../README.md)!**

 Tá mé cinnte nach bhfuil sé foirfe, ach tá súil agam go bhfuil sé níos fearr ná rud ar bith!

 [🇸🇦 Araibis](../ar/README.md)
 [🇧🇩 Beangáilis](../bn/README.md)
 [🇩🇪 Gearmáinis](../de/README.md)
 [🇺🇸 Béarla] (lang/ga/README.md)
 [🇪🇸 Spáinnis](../es/README.md)
 [🇫🇷 Fraincis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hiondúis](../hi/README.md)
 [🇮🇩 Indinéisis](../id/README.md)
 [🇮🇹 Iodáilis](../it/README.md)
 [🇯🇵 Seapáinis] (lang/ja/README.md)
 [🇰🇷 Cóiréis](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polainnis](../pl/README.md)
 [🇧🇷 Portaingéilis](../pt/README.md)
 [🇷🇺 Rúisis] (lang/ru/README.md)
 [🇰🇪 Svahaílis](../sw/README.md)
 [🇵🇭 Tagálaigis](../tl/README.md)
 [🇹🇷 Tuircis](../tr/README.md)
 [🇵🇰 Urdais](../ur/README.md)
 [🇻🇳 Vítneamais](../vi/README.md)
 [🇨🇳 Sínis](../zh/README.md)


 **[📚 ... Gach Teanga ...](../README.md)**
 ----

 ### An bhfuil fadhb leis an aistriúchán seo ar an README?
 An t-aistriúchán áirithe seo ar an mbunleagan [README]( https://github.com/cobbzilla/yuebing/blob/master/README.md)
 d’fhéadfadh sé a bheith lochtach -- *tá fáilte mhór roimh cheartúcháin!* Seol [iarratas tarraingthe ar GitHub](https://github.com/cobbzilla/yuebing/pulls),
 nó mura bhfuil tú compordach é sin a dhéanamh, [oscail ceist]( https://github.com/cobbzilla/yuebing/issues)

 Nuair a chruthaíonn tú saincheist nua GitHub faoi aistriúchán, déan:
 * cuir isteach URL an leathanaigh (cóipeáil/greamaigh ó bharra seoltaí an bhrabhsálaí)
 * cuir isteach an téacs cruinn atá mícheart (cóipeáil/greamaigh ón mbrabhsálaí)
 * go cineálta moladh aistriúchán níos fearr a thairiscint
 * **Go raibh maith agat!**

 # Ábhar
 * [Foinse](#Foinse)
 * [Tacaíocht agus Maoiniú](#Tacaíocht-agus-Maoiniú)
 * [Suiteáil](#Suiteáil)
 * [Socrú](#Socrú)
 * [Comhad acmhainne teaghrán JavaScript a aistriú](#Translating-a-JavaScript-string-resource-file)
 * [Eolaire comhaid téacs a aistriú] (#Translating-a-directory-of-text-files)
 * [Roghanna eile] (#Other-options)

 ## Foinse
 * [hokeylization ar GitHub]( https://github.com/cobbzilla/hokeylization)
 * [hokeylization ar npm]( https://www.npmjs.com/package/hokeylization)

 ## Tacaíocht agus Maoiniú
 Tá mé ag iarraidh a bheith i mo fhorbróir bogearraí foinse oscailte gairmiúil. Tá mé ag obair i
 an tionscal bogearraí le blianta fada anuas, tá cuideachtaí rathúla tosaithe agam agus dhíol mé iad le cuideachtaí poiblí.
 Chaill mé mo phost le déanaí, agus níl aon obair eile ar bun agam i ndáiríre

 Mar sin táim chun iarracht a dhéanamh bogearraí cabhrach a scríobh agus féachaint an n-oibríonn sin

 Bheinn buíoch ó chroí fiú an méid is lú [de chuidiú míosúil trí Patreon] (https://www.patreon.com/cobbzilla)

 ## Suiteáil
 Chun an uirlis líne ordaithe a úsáid, suiteáil le `npm` nó `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Chun é a úsáid mar leabharlann, suiteáil an leagan `lite` , atá i bhfad níos lú:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Ansin féach ar chabhair don ordú `hokey` :

    hokey --help
    hokey -h

 An bhfuil fonn ort aschur i do theanga nó i dteanga eile a fheiceáil?

 Déanann `hokey` iarracht an teanga a bhrath go huathoibríoch ó athróga timpeallachta do bhlaoscáin

 Is féidir leat teanga a bhrú tríd an athróg timpeallachta `LC_ALL` a shocrú:

    LC_ALL=it hokey --help

 Tabhair faoi deara, má tá `hokeylization-lite` suiteáilte agat, nach bhfuil cabhair ordaithe ar fáil ach i mBéarla

 ## Socrú
 Socraigh an athróg timpeallachta `GOOGLE_TRANSLATE_PROJECT_ID` chun do thionscadal Google Translate a shainaithint

 Socraigh an athróg timpeallachta `GOOGLE_APPLICATION_CREDENTIALS` chuig na dintiúir JSON a d'íoslódáil tú
 tar éis duit a fháil amach conas a oibríonn fíordheimhniú ar Google cloud (is féidir leis a bheith spraoi)

 Má tá tú ag rith ón gcód foinseach, is féidir leat iad seo a chur i gcomhad `.env` san fhoinse freisin
 eolaire déanfar iad a lódáil ag am rite trí [dotenv](https://www.npmjs.com/package/dotenv)

 ## Comhad acmhainne teaghrán JavaScript a aistriú
 Caithfidh do tábla teaghrán **** a bheith i gcomhad JavaScript i gceann den dá fhoirm seo:

 Easpórtáil ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Easpórtáil CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Má tugadh `myfile.en.js` ar an gcomhad seo, is féidir leat é a aistriú go Spáinnis agus Gearmáinis le:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Tá an `LANG` thuas speisialta -- is focal forchoimeádta é san uirlis seo!

 Cuirtear an cód teanga do na comhaid aschuir in ionad an `LANG`

 Mar sin cruthaíonn an t-ordú thuas na comhaid:

    myfile.es.js
    myfile.de.js

 Is éard atá sa rogha `-l` / `--languages` ná liosta camóg-scartha de chóid teanga ISO
 [tacaithe ag Google Translate]( https://cloud.google.com/translate/docs/languages)

 Má tá an comhad aschuir ann cheana féin, scrúdófar é chun a fháil amach cé na heochracha atá ann cheana féin.
 Ní aistreofar eochracha atá ann cheana féin. Ginfear agus cuirfear aistriúcháin le haghaidh eochracha in easnamh orthu
 go dtí deireadh an réad JS. Athscríobhtar an comhad iomlán i gcónaí.

 Chun gach eochair a athaistriú a bhrú, úsáid an `-f` / `--force`

 ## Eolaire de chomhaid téacs a aistriú
 Is féidir leat eolaire comhaid a aistriú freisin. Beidh hokeylization cuairt athchúrsach ar gach
 comhad san eolaire agus rith a bhfuil ann trí Google Translate, agus sábháil an t-aschur
 chuig comhad atá ainmnithe mar an gcéanna i gcrann eolaire ar leith

 Nuair is eolaire é sprioc d'aistriúcháin, tá an mód seo cumasaithe

 Sonraíonn an rogha `-o` / `--outfile` an t-eolaire aschuir

 **RABHADH MÓR**: Agus eolaire á aistriú, **NÁ** sonraigh eolaire aschuir
 is é sin laistigh de do eolaire ionchuir! Má dhéanann tú é seo, déanfaidh tú:
 * atarlú gan teorainn a aslú
 * rith suas do bhille Google
 * líon suas do dhiosca
 * níos lú spraoi a bheith agat

 Seo sampla de na rudaí *gan déanamh*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Nuair a bheidh sé seo ar siúl, scríobhtar comhaid aistrithe chuig `templates/es` , agus déantar iad dá réir sin nua
 foinse comhaid le haistriú, ós rud é go bhfuil siad faoi `templates/` -- leanann an próiseas seo ar aghaidh
 go deo, ná déan é!

 #### Úsáid cheart
 Ceart go leor, abair go bhfuil roinnt teimpléid ríomhphoist agat in eolaire:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Chun iad seo go léir a aistriú go Spáinnis agus Gearmáinis, rith:

    hokey -l es,de -o templates/email/LANG templates/email/en

 San alt thuas, is focal forchoimeádta é `LANG` agus cuirfear an cód teanga ISO ina ionad

 Cad a tharlaíonn nuair a ritheann an méid thuas:
 * Cruthófar na `templates/email/es` agus `templates/email/de` eolaire (mura bhfuil siad ann)
 * Aistreofar gach comhad i `templates/email/en` go Spáinnis agus Gearmáinis
 * Ní dhéanfar comhaid aschuir atá ann cheana a athghiniúint mura n-úsáideann tú `-f` / `--force`
 * Ar deireadh beidh struchtúr eolaire comhionann agat agus comhaid laistigh de `es` agus `de` mar atá agat faoi `en`

 ## Roghanna eile

 ### Rith tirim
 Pas `-n` / `--dry-run` chun cad a dhéanfaí a thaispeáint, ach ná déan aon ghlaonna API ná scríobh comhaid ar bith

 ### fhórsa
 Pas `-f` / `--force` chun aistriúcháin a athghiniúint i gcónaí, fiú má tá siad ann cheana féin

 ### Meaitseáil
 Pas `-m` / `--match` chun teorainn a chur leis na comhaid a phróiseáiltear agus iad ag rith sa mhód eolaire

 B’fhéidir nár mhaith leat i gcónaí *gach* comhad i do eolaire foinse a aistriú go dtí do sprioc-eolaire

 Is é luach na `-m` / `--match` ná regex (tabhair aire do rialacha luaigh an bhlaosc!) a shonraíonn
 cé na comhaid ba chóir a aistriú

 Nuair a bhíonn amhras ort, is féidir an rogha seo a chomhcheangal le `-n` / `--dry-run` féachaint cé na comhaid a aistreofaí

 ### Ní áirítear
 Uaireanta meaitseálann do `-m` iomarca comhad. Úsáid an `-e` / `--excludes` chun eisiamh go sainráite
 comhaid a bheadh meaitseáilte murach sin

 Is féidir leat regexes iolracha a liostú, scartha le spásanna

 Úsáid choiteann is ea: `--excludes node_modules dist \.git build tmp`

 ### Barra Láimhe
 Seans go mbeidh teimpléid `{{ handlebars }}` sna teaghráin le haistriú, bíodh dhá nó trí shreang chatach ann

 Is dócha *NÍ* mian leat an stuif taobh istigh de na teimpléid sin a aistriú

 Cuir an `-H` / `--handlebars` ar aghaidh, agus ní aistreofar aon rud laistigh de `{{ ... }}`

 ### Marcáil síos
 Ní téacs ná html é Markdown, mar sin tá roinnt deacrachtaí ag Google Translate leis

 Cumasaíonn an bhratach `-M` / `--markdown` láimhseáil speisialta do chomhaid marcála síos

 Láimhseálann Hokeylizer rudaí go réasúnta maith, ach le comhaid marcála síos, is féidir leat na fadhbanna seo a amú go minic:
 * Naisc briste. San aistriúchán, feictear carachtar spáis nuair a chríochnaíonn cur síos ar nasc marcála síos (le `]` ) ach
 sula gcuirtear tús lena nasc sprice (le `(` ). Fágann sé seo go bhfuil an marc síos le rindreáil mícheart, agus an nasc
 briste nuair a bhreathnaítear ar an doiciméad.
 * Aistrítear bloic chóid. Níl a fhios ag Google Translate cad a mheasann cód a mharcáil síos agus cad nach bhfuil
 * Spásáil mhícheart do bhloic chóid eangaithe. Is deacair an spásáil a chaomhnú san aistriúchán
 * Aistreofar rudaí taobh istigh de `backticks` , nuair is mian leat beagnach i gcónaí gur luachanna litriúla iad

 Nuair atá an `-M` / `--markdown` cumasaithe:
 * Beidh an patrún `] (` comhdhlúite go `](` mar sin ag socrú na naisc briste marcála síos
 * Cuirfear fillteán "gan aistriú" thart ar bhlocanna cód eangaithe, ag caomhnú eangú cuí agus ag cinntiú nach n-aistrítear iad.
 * Cuirfear fillteán "gan aistriú" thart ar an téacs laistigh de `backticks` lena chinntiú nach n-aistrítear iad

 ### Próiseas-mar
 De ghnáth déantar gach rud a phróiseáil mar ghnáth-théacs

 Más HTML é d'inneachar, manglófar é mura n-éiríonn leat an rogha `-p html` / `--process-as html`

 ### Scagaire
 Don eachtrúil: agus comhaid á bpróiseáil in eolaire, is féidir leat pas a fháil sa `-F` / `--filter`
 chun an t-aschur a scagadh sula scríobhtar chuig an gcóras comhad é

 Caithfidh luach an rogha seo a bheith ina chonair chuig comhad JS a easpórtálann feidhm darb ainm `filter`

 Ní mór `filter` a bheith san fheidhm `async` toisc go nglaofar `await` air

 Sula scríobhtar comhaid ar diosca, cuirfear inneachar iomlán an chomhaid ar aghaidh chuig an bhfeidhm `filter` mar theaghrán

 Is é an luach aischuir ón bhfeidhm `filter` an méid a scríobhfar chuig an stóras

 Mar sin, tá smacht iomlán agat ar an méid a scríobhfar ar deireadh

 ### Cabhrú
 Úsáid `-h` / `--help` chun cabhair a thaispeáint

 ## Aistriúchán Shona!

</pre>
