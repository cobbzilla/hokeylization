export default {
  err_fatal: 'MIRTINGA KLAIDA: {{error}}',
  err_env_googleProjectId: 'Aplinkos kintamasis GOOGLE_TRANSLATE_PROJECT_ID neapibrėžtas',
  err_env_googleCredentials: 'Aplinkos kintamasis GOOGLE_APPLICATION_CREDENTIALS neapibrėžtas',
  err_option_processAs_invalid: 'Neteisinga parinkties vertė -p / --process-as : ši parinktis palaiko tik "text" arba "html" reikšmes',
  err_infileNotFound: 'įvesties failas arba katalogas nerastas: {{ jsFile }}',
  err_cannotWriteSource: 'atsisakoma perrašyti įvesties šaltinį (buvo nurodyta išvesties kalbomis): {{source}}',
  err_invalidOutfile: 'tikimasi, kad faile bus „LANG“ (pakeisti į {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: tikimasi, kad failas {{ file }} prasidės „export default“ arba „module.exports“, bet rastas: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'netinkamas JSON {{file}}',
  err_processFile_writeFile: '*** Klaida rašant į rinkmeną {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Klaida verčiant: {{e}}',
  err_processing: '*** Netikėta klaida: {{e}}',
  warn_missing_close_notranslate_tag: 'Vertimo išvestyje trūko uždarymo žymos ten, kur jos buvo tikimasi. Etiketė {{ label }} , eilutės numeris {{ lineNumber }} , eilutė: {{ line }}',
  info_summary: 'Greita vertimo paslauga naudojant „Google“ vertėją\n Versija {{VERSION}}',
  info_description: 'Įrankis kūrėjams. Naudojant hokeylizaciją, lokalizuoti programą gali būti greita, smagu ir paprasta!\n\n === Šaltinis ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === REIKALINGI aplinkos kintamieji ===\n * GOOGLE_TRANSLATE_PROJECT_ID: jūsų „Google“ vertėjo projektas\n * GOOGLE_APPLICATION_CREDENTIALS: jūsų kredencialų JSON failas\n\n === ISO kalbos kodai ===\n Nurodydami ISO kodus (įvesties kalbą arba tikslines kalbas), naudokite šiuos kodus:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO kodas kalboms, iš kurių reikia versti. Numatytasis yra {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Tipas gali būti tekstas arba html. Numatytasis yra tekstas',
  info_option_match: 'Apdorodami katalogą atsižvelkite į tik tuos failus, kurie atitinka šią reguliariąją išraišką',
  info_option_excludes: 'Apdorodami katalogą, aiškiai išskirkite failus, kurie atitinka šias reguliariąsias išraiškas, net jei jie atitiktų „-m“ / „--match“ reguliarųjį reiškinį',
  info_option_filter: 'Apdorojant katalogą: 1) reikalauti šio JS failo, kuris turi eksportuoti funkciją pavadinimu „filter“, kuri paima eilutės parametrą ir grąžina eilutę, ir 2) taikyti šią filtro funkciją visiems išvesties failams prieš juos įrašant.',
  info_option_dryRun: 'Nerašykite jokių failų ir neskambino API į Google vertėją, bet registruokite, kas būtų padaryta',
  info_option_languages: 'Kableliais atskirtas ISO kodų sąrašas kalboms, į kurias reikia išversti',
  info_option_outfile: 'JS failo apdorojimui: į šį failą įrašykite JS išvestį\n Katalogų apdorojimui: įrašykite failus į šį katalogą, kuris bus sukurtas, jei jo nėra',
  info_option_force: 'Visada generuokite naujus vertimus, perrašydami esamus išvesties failus',
  info_option_handlebars: 'Įsitikinkite, kad {{ handlebars }} turinys išsaugomas toks, koks yra, ir NĖRA išverstas',
  info_option_markdown: 'Įsitikinkite, kad [markdown](https://nuorodos) yra tinkamai išsaugoti, nes priešingu atveju tarp nuorodos aprašo pabaigos laužtiniuose skliaustuose ir pačios nuorodos skliausteliuose bus įterptas tarpas',
  info_arg_source: 'Vertimų šaltinis; gali būti JS failas arba verčiamų failų katalogas',
  info_filter_applied: 'Filtras sėkmingai pritaikytas prieš rašant: {{langFile}}',
  info_dryRun_key: '(sausa eiga) nerašo rakto vertimo: {{key}}',
  info_dryRun_file: '(sausa eiga) būtų parašęs failą: {{langOut}}',
  warn_walk_readDir: 'vaikščioti ( {{dir}} ): skaitymo klaida: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): bandant įtraukti failus į katalogą: {{e}} įvyko klaida',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): šis kelias nėra katalogas',
  info_processDirectory_skippingExisting: 'proceso katalogas ( {{lang}} ): praleidžiamas esamas failas: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Failas buvo parašytas: {{langFile}}',
  err_option_json_notFound: 'JSON failas nerastas: {{ jsonFile }}',
  err_option_json_errorReading: 'Skaitant arba analizuojant JSON failą įvyko klaida {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Vertimo kalbos nenurodytos. Naudokite „-l“ / „--languages“ ir nurodykite kableliais atskirtą ISO kalbų kodų sąrašą',
  err_option_outfile_required: 'Nebuvo nurodytas joks išvesties failas ar katalogas. Naudokite „-o“ / „--outfile“, kad nurodytumėte išvesties failą arba katalogą',
  err_noSources: 'vertimui nepateikti šaltinio failai',
  info_option_jsonFile: 'Vykdykite kelias hokey komandas, nurodytas JSON faile. Jei nepateikiamas joks JSON failas, komanda ieško failo pavadinimu „hokey.json“ dabartiniame kataloge',
  info_option_indexFile: 'Sukurkite vertimų rodyklės failą. Failo pavadinimas turi baigtis „.html“, „.md“ arba „.txt“, nebent pateikiate šabloną su „-A“ / „--index-template“',
  info_option_indexTemplate: 'Tai gali būti „html“, „markdown“, „tekstas“ arba kelias į jūsų vairo šabloną. Šis šablonas naudojamas kuriant indekso failą. Pavyzdžių ieškokite numatytuosiuose šablonuose hokeylization šaltinio kode',
  info_option_regular: 'Išverskite šaltinio failus kaip įprastus failus, o ne verskite „JavaScript“ objektus, kuriuose yra eilutės išteklių. Vėliava „-M“ / „--markdown“ reiškia šią vėliavėlę.',
  info_arg_sources: 'Vertimų šaltinis (-iai); tai gali būti vienas ar daugiau „JavaScript“ failų arba katalogų',
  info_jsonProcessing_start: 'JSON apdorojimo konfigūracija: {{name}}',
  err_index_singleFileMultipleSources: 'Buvo nurodytas vienas indekso failas, tačiau yra keli įvesties failai. Vietoj indekso failo nurodykite katalogą',
  err_index_targetDirAndNoTypeOrTemplate: 'Indeksui buvo nurodytas tikslinis katalogas, bet nenurodytas joks indekso šablonas. Naudokite „-A“ / „--indexTemplate“, kad pasirinktumėte šabloną',
  err_index_parentDirDoesNotExist: 'Pirminis indekso katalogas neegzistuoja: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Failo pavadinimas neturi plėtinio, todėl negalima nustatyti šablono tipo: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Failo pavadinimo plėtinys netinkamas, todėl negalima nustatyti šablono tipo: {{ file }}',
  err_index_templateLoadingError: 'Įkeliant tinkintą šabloną įvyko klaida {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Sudarant tinkintą šabloną įvyko klaida {{ file }} : {{ e }}',
  info_index_wroteFile: 'Sėkmingai sukurtas indekso failas: {{ indexFile }}',
  label_indexOfTranslations: 'Vertimų rodyklė',
  label_findYourLanguageCode: 'Raskite savo kalbos kodą',
  err_processing_unknown: '*** Netikėta klaida: {{e}}\n {{e.stack}}',
  warn_missingLangFile: '{{ lang }} išvesties failas nesukurtas, todėl jis bus pašalintas iš indekso',
  err_filter_loading: 'Filtras nerastas: {{ filter }}\n Filtras nerastas nei viename iš: dabartiniame kataloge, ./.hokey-filters kataloge, ${HOME}/.hokey-filters kataloge ar integruotame filtrų kataloge'
}