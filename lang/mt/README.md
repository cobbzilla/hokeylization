Hokeylization
 ==============
 L-isem huwa portmanteau, li jfisser 'lokalizzazzjoni hokey'

 Huwa hokey għax huwa sempliċi ħafna: jibgħat strings lil Google Translate

 Tista' tittraduċi:
 * oġġett JavaScript li fih messaġġi
 * direttorju ta' fajls, b'mod rikorsiv

 # Aqra dan b'lingwa oħra
 Dan id-dokument README.md ġie tradott, bl-użu tal-għodda tal-hokeylization innifsu, fi
 **[kull lingwa appoġġjata minn Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Jien ċert li mhuwiex perfett, imma nispera li huwa aħjar minn xejn!

 [🇸🇦 Għarbi](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Ġermaniż](../de/README.md)
 [🇺🇸 Ingliż](../en/README.md)
 [🇪🇸 Spanjol](../es/README.md)
 [🇫🇷 Franċiż](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Ħindi](../hi/README.md)
 [🇮🇩 Indoneżjan](../id/README.md)
 [🇮🇹 Taljan](../it/README.md)
 [🇯🇵 Ġappuniż](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Pollakk](../pl/README.md)
 [🇧🇷 Portugiż](../pt/README.md)
 [🇷🇺 Russu](../ru/README.md)
 [🇰🇪 Swaħili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Tork](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vjetnamiż](../vi/README.md)
 [🇨🇳 Ċiniż](../zh/README.md)


 **[📚 ... Il-Lingwi kollha ...](../README.md)**
 ----

 ### Hemm problema b'din it-traduzzjoni tar-README?
 Din it-traduzzjoni partikolari tal-oriġinal [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 jista 'jkun difettuż -- *korrezzjonijiet huma milqugħa ħafna!* Jekk jogħġbok ibgħat [pull request fuq GitHub](https://github.com/cobbzilla/yuebing/pulls),
 jew jekk m'intix komdu tagħmel dan, [iftaħ kwistjoni](https://github.com/cobbzilla/yuebing/issues)

 Meta toħloq kwistjoni ġdida ta' GitHub dwar traduzzjoni, jekk jogħġbok agħmel:
 * inkludi l-URL tal-paġna (kopja/pejst mill-bar tal-indirizz tal-browser)
 * inkludi t-test eżatt li huwa ħażin (ikkopja/pejst mill-browser)
 * jekk jogħġbok iddeskrivi x'inhu ħażin -- it-traduzzjoni hija żbaljata? l-ifformattjar huwa miksur b'xi?
 * ġentilment toffri suġġeriment għal traduzzjoni aħjar, jew kif it-test għandu jkun ifformattjat kif suppost
 * **Grazzi!**

 # Kontenut
 * [Sors](#Sors)
 * [Appoġġ u Finanzjament](#Appoġġ-u-Finanzjament)
 * [Installazzjoni](#Installazzjoni)
 * [Setup](#Setup)
 * [Traduzzjoni ta' fajl tar-riżorsi ta' string JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Traduzzjoni ta' direttorju ta' fajls ta' test](#Traduzzjoni-direttorju-ta-fajls-test)
 * [Għażliet oħra](#Għażliet oħra)

 ## Sors
 * [hokeylization fuq GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization fuq npm](https://www.npmjs.com/package/hokeylization)

 ## Appoġġ u Finanzjament
 Qed nipprova nkun żviluppatur professjonali ta' software open source. Ilni naħdem fiha
 l-industrija tas-softwer għal ħafna snin, bdejt kumpaniji ta 'suċċess u biegħhom lil kumpaniji pubbliċi.
 Dan l-aħħar tlift ix-xogħol tiegħi, u ma tantx għandi xogħol ieħor imħejji

 Allura jien ser nipprova nikteb softwer utli u nara jekk dan jaħdem

 Sinċerament napprezza anke l-iżgħar [kontribuzzjoni ta' kull xahar permezz ta' Patreon](https://www.patreon.com/cobbzilla)

 ## Installazzjoni
 Biex tuża l-għodda tal-linja tal-kmand, installa billi tuża `npm` " jew `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Biex tuża bħala librerija, installa l-verżjoni `lite` , li hija ħafna iżgħar:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Imbagħad ħares lejn l-għajnuna għall-kmand `hokey` :

    hokey --help
    hokey -h

 Trid tara l-output fil-lingwa tiegħek jew lingwa oħra?

 `hokey` jipprova jsib il-lingwa awtomatikament mill-varjabbli ambjentali tal-qoxra tiegħek

 Tista' tisforza lingwa billi tissettja l-varjabbli ambjentali `LC_ALL` :

    LC_ALL=it hokey --help

 Innota li jekk installajt `hokeylization-lite` , l-għajnuna tal-kmand hija disponibbli biss bl-Ingliż

 ## Setup
 Issettja l-varjabbli ambjentali `GOOGLE_TRANSLATE_PROJECT_ID` biex tidentifika l-proġett tiegħek ta' Google Translate

 Issettja l-varjabbli ambjentali `GOOGLE_APPLICATION_CREDENTIALS` għall-kredenzjali JSON li niżżilt
 wara li tkun taf kif taħdem l-awtentikazzjoni fuq Google cloud (jista 'jkun pjaċevoli)

 Jekk qed taħdem mill-kodiċi tas-sors, tista' wkoll tpoġġi dawn `.env` fis-sors
 direttorju huma ser jitgħabbew waqt ir-runtime permezz ta' [dotenv](https://www.npmjs.com/package/dotenv)

 ## It-traduzzjoni ta' fajl tar-riżorsi ta' string JavaScript
 It-tabella tal-istring tiegħek **trid** tkun f'fajl JavaScript f'waħda minn dawn iż-żewġ forom:

 Esportazzjoni ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Esportazzjoni CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Jekk dan il-fajl kien jismu `myfile.en.js` , tista' tittraduċih għall-Ispanjol u l-Ġermaniż bi:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Il- `LANG` ta' hawn fuq hija speċjali -- hija kelma riservata f'din l-għodda!

 Il- `LANG` jinbidel bil-kodiċi tal-lingwa għall-fajls tal-output

 Għalhekk il-kmand ta 'hawn fuq joħloq il-fajls:

    myfile.es.js
    myfile.de.js

 L- `-l` / `--languages` hija lista separata b'virgola ta' kodiċijiet tal-lingwa ISO
 [appoġġjat minn Google Translate](https://cloud.google.com/translate/docs/languages)

 Jekk il-fajl tal-output diġà jeżisti, se jiġi eżaminat biex jiġi ddeterminat liema ċwievet diġà jeżistu.
 Iċ-ċwievet eżistenti mhux se jiġu tradotti. It-traduzzjonijiet għaċ-ċwievet neqsin jiġu ġġenerati u mehmuża
 sat-tmiem tal-oġġett JS. Il-fajl kollu huwa dejjem miktub mill-ġdid.

 Biex tisforza t-traduzzjoni mill-ġdid taċ-ċwievet kollha, uża l- `-f` / `--force`

 ## It-traduzzjoni ta' direttorju ta' fajls ta' test
 Tista' wkoll tittraduċi direttorju ta' fajls. hokeylization se jżuru b'mod rikorrenti kull
 fajl fid-direttorju u mexxi l-kontenut tiegħu permezz ta 'Google Translate, u ssalva l-output
 għal fajl bl-isem identiku f'siġra tad-direttorju separata

 Meta l-mira tat-traduzzjoni tiegħek hija direttorju, din il-modalità hija attivata

 L- `-o` / `--outfile` tispeċifika d-direttorju tal-output

 **TWISSIJA KBIRA**: Meta tittraduċi direttorji, **MA** tispeċifika direttorju tal-output
 li huwa fid-direttorju input tiegħek! Jekk tagħmel dan, int se:
 * jinduċu rikorsi infinit
 * iżżid il-kont tal-Google tiegħek
 * imla d-disk tiegħek
 * tieħdu pjaċir inqas

 Hawn eżempju ta’ x’m’għandekx tagħmel*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Meta dan jibda, il-fajls tradotti jinkitbu `templates/es` , u b'hekk isiru ġodda
 fajls tas-sors biex jittraduċu, peress li huma taħt `templates/` -- dan il-proċess ikompli
 għal dejjem, tagħmel dan!

 #### Użu korrett
 OK, ejja ngħidu li għandek xi mudelli ta' email f'direttorju:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Biex tittraduċi dawn kollha għall-Ispanjol u l-Ġermaniż, mexxi:

    hokey -l es,de -o templates/email/LANG templates/email/en

 F'dan ta' hawn fuq, `LANG` hija kelma riservata u se tiġi sostitwita bil-kodiċi tal-lingwa ISO

 X'jiġri meta dan ta' hawn fuq jibda:
 * Id-direttorji `templates/email/es` " u `templates/email/de` se jinħolqu (jekk ma jeżistux)
 * Kull fajl `templates/email/en` ' se jiġi tradott għall-Ispanjol u l-Ġermaniż
 * Fajls tal-output eżistenti mhux se jiġu riġenerati sakemm ma tużax `-f` / `--force`
 * Tispiċċa bi struttura ta' direttorju identika u fajls fi ħdan `es` " u `de` bħalma għandek taħt `en`

 ## Għażliet oħra

 ### Dry run
 Għaddi `-n` / `--dry-run` biex turi dak li se jsir, imma fil-fatt ma tagħmilx sejħiet API jew tikteb xi fajls

 ### Forza
 Għaddi `-f` / `--force` biex dejjem tirriġenera traduzzjonijiet, anke jekk diġà jeżistu

 ### Taqbila
 Għaddi `-m` / `--match` biex tillimita l-fajls ipproċessati meta taħdem fil-modalità tad-direttorju

 Jista' jkun li mhux dejjem trid tittraduċi *kull* fajl fid-direttorju tas-sors tiegħek għad-direttorju fil-mira tiegħek

 Il-valur tal- `-m` / `--match` huwa regex (oqgħod attent ir-regoli tal-kwotazzjoni tal-qoxra!) li tispeċifika
 liema fajls għandhom jiġu tradotti

 F'każ ta' dubju, tista' tgħaqqad din l-għażla ma `-n` " / `--dry-run` biex tara liema fajls jiġu tradotti

 ### Teskludi
 Kultant `-m` tiegħek jaqbel ma' wisq fajls. Uża l- `-e` " / `--excludes` biex teskludi b'mod espliċitu
 fajls li kieku kienu jaqblu

 Tista 'lista regexes multipli, separati bi spazji

 Użu komuni jkun: `--excludes node_modules dist \.git build tmp`

 ### Manubriji
 Il-kordi biex jittraduċu jista' jkun fihom mudelli ta `{{ handlebars }}` , jew b'żewġ jew tliet ċineg kaboċċi

 Int probabilment * MA * trid li l-għalf ġewwa dawk il-mudelli jiġi tradott

 Għaddi l- `-H` / `--handlebars` , u kull ħaġa fi ħdan `{{ ... }}` mhux se tiġi tradotta

 ### Markdown
 Markdown la huwa test u lanqas html, għalhekk Google Translate għandu xi diffikultajiet miegħu

 Il- `-M` / `--markdown` tippermetti ġestjoni speċjali għall-fajls markdown

 Bil-fajls tal-markdown, jekk ma tużax il-bandiera `-M` , probabilment issib dawn il-problemi:
 * Links miksura. Fit-traduzzjoni, karattru spazjali jidher wara li tispiċċa deskrizzjoni tal-link markdown (b `]` ) iżda
 qabel ma tibda l-link fil-mira tagħha (bil- `(` ). Dan jikkawża li l-markdown tirrendi ħażin, u l-link
 jitkisser meta tara d-dokument.
 * Il-blokki tal-kodiċi jiġu tradotti. Google translate ma jafx x'jikkunsidra l-markdown kodiċi u dak li ma jagħmilx
 * Spazjar mhux korrett għall-blokki tal-kodiċi indentati. L-ispazjar huwa diffiċli biex jiġi ppreservat fit-traduzzjoni
 * Affarijiet ġewwa `backticks` se jiġu tradotti, meta kważi dejjem trid li jkunu valuri letterali

 Meta l- `-M` / `--markdown` tkun attivata:
 * Il-mudell `](` se jiġi kkondensat għal `](` u b'hekk jiġu ffissati r-rabtiet tal-markdown imkissra
 * Se jitqiegħed tgeżwir "mingħajr traduzzjoni" madwar blokok ta' kodiċi indentati, li jippreserva l-indentazzjoni xierqa u jiżgura li ma jiġux tradotti
 * Se jitqiegħed tgeżwir "no translate" madwar it-test fi ħdan `backticks` biex jiġi żgurat li ma jiġux tradotti

 ### Proċess-as
 Normalment kollox jiġi pproċessat bħala test sempliċi

 Jekk il-kontenut tiegħek huwa HTML, jitħassar sakemm ma tgħaddix l- `-p html` / `--process-as html`

 ### Iffiltra
 Għal dawk avventurużi: meta tipproċessa fajls f'direttorju, tista' tgħaddi l- `-F` / `--filter`
 biex tiffiltra l-output qabel ma tinkiteb fis-sistema tal-fajls

 Il-valur ta' din l-għażla għandu jkun mogħdija għal fajl JS li jesporta funzjoni msejħa `filter`

 Il-funzjoni `filter` trid tkun `async` " għaliex `await` se tissejjaħ fuqha

 Qabel ma l-fajls jinkitbu fuq id-disk, il-kontenut kollu tal-fajl se jiġi mgħoddi għall-funzjoni `filter` bħala string

 Il-valur tar-ritorn mill-funzjoni `filter` huwa dak li fil-fatt se jinkiteb fil-ħażna

 Għalhekk, għandek kontroll totali fuq dak li finalment se jinkiteb

 ### Għajnuna
 Uża `-h` / `--help` biex turi l-għajnuna

 ## Ħu gost tittraduċi l-lingwi!

</pre>
