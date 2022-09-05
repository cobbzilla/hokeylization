export default {
  err_fatal: 'ŻBALL FATAL: {{error}}',
  err_env_googleProjectId: 'Il-varjabbli tal-ambjent GOOGLE_TRANSLATE_PROJECT_ID mhux definit',
  err_env_googleCredentials: 'Il-varjabbli tal-ambjent GOOGLE_APPLICATION_CREDENTIALS mhux definit',
  err_option_processAs_invalid: 'Valur tal-għażla mhux validu għal -p / --process-as : din l-għażla tappoġġja biss valuri ta\' \'test\' jew \'html\'',
  err_infileNotFound: 'fajl tad-dħul jew direttorju ma nstabx: {{ jsFile }}',
  err_cannotWriteSource: 'ir-rifjut li jissostitwixxi s-sors tal-input (kien speċifikat fil-lingwi tal-output): {{source}}',
  err_invalidOutfile: 'fajl mistenni jkun fih \'LANG\' (li għandu jiġi sostitwit b\' {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: fajl mistenni {{ file }} jibda b\'\'export default\' jew \'module.exports\' iżda misjub: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json invalidu f\' {{file}}',
  err_processFile_writeFile: '*** Żball li tikteb lill-outfile għal {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Żball fit-traduzzjoni: {{e}}',
  err_processing: '*** Żball mhux mistenni: {{e}}',
  warn_missing_close_notranslate_tag: 'L-output mit-traduzzjoni kien nieqes tikketta tal-għeluq fejn kienet mistennija waħda. Tikketta {{ label }} , numru tal-linja {{ lineNumber }} , linja: {{ line }}',
  info_summary: 'Servizz ta’ traduzzjoni malajr bl-użu ta’ Google Translate\n Verżjoni {{VERSION}}',
  info_description: 'Għodda għall-iżviluppaturi. Bl-hokeylization, il-lokalizzazzjoni tal-app tiegħek tista\' tkun veloċi, divertenti u faċli!\n\n === Sors ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === varjabbli ambjentali MEĦTIEĠA ===\n * GOOGLE_TRANSLATE_PROJECT_ID: il-proġett tiegħek ta\' Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS: fajl JSON tal-kredenzjali tiegħek\n\n === Kodiċi tal-lingwa ISO ===\n Meta tispeċifika kodiċijiet ISO (jew lingwa ta\' input jew lingwi fil-mira) uża dawn il-kodiċi:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Kodiċi ISO għal-lingwi minn fejn tittraduċi. Default huwa {{DEFAULT_LOCALE}}',
  info_option_processAs: 'It-tip jista\' jkun test jew html. Default huwa test',
  info_option_match: 'Meta tipproċessa direttorju, ikkunsidra biss fajls li jaqblu ma \'din ir-reġex',
  info_option_excludes: 'Meta tipproċessa direttorju, eskludi b\'mod espliċitu fajls li jaqblu ma\' dawn ir-regexes, anki jekk ikunu jaqblu mar-reġex `-m` / `--match`',
  info_option_filter: 'Meta tipproċessa direttorju: 1) teħtieġ dan il-fajl JS, li għandu jesporta funzjoni bl-isem "filtru" li tieħu parametru ta\' string u tirritorna string, u 2) applika din il-funzjoni ta\' filtru għall-fajls kollha ta\' output qabel ma jinkitbu.',
  info_option_dryRun: 'Tagħmelx tikteb xi fajls jew tagħmel xi sejħiet API lil Google Translate, imma illoggja dak li kien isir',
  info_option_languages: 'Lista separata b\'virgola ta\' kodiċijiet ISO għal-lingwi biex jiġu tradotti fihom',
  info_option_outfile: 'Għall-ipproċessar tal-fajl JS: ikteb l-output JS f\'dan il-fajl\n Għall-ipproċessar tad-direttorju: ikteb fajls f\'dan id-direttorju, li se jinħoloq jekk ma jkunx jeżisti',
  info_option_force: 'Dejjem iġġenera traduzzjonijiet friski, billi tikteb fuq kwalunkwe fajl ta\' output eżistenti',
  info_option_handlebars: 'Żgura li l-kontenut {{ handlebars }} jiġi ppreservat kif inhu u MHUX tradott',
  info_option_markdown: 'Kun żgur li [markdown](https://links) huma ppreservati b\'mod korrett, inkella jiġi introdott spazju bejn it-tarf tad-deskrizzjoni tal-link fil-parentesi kwadri u l-link innifsu fil-parentesi',
  info_arg_source: 'Is-sors għat-traduzzjonijiet; jista \'jkun fajl JS jew direttorju ta\' fajls biex jittraduċu',
  info_filter_applied: 'Filtru applikat b\'suċċess qabel ma tikteb: {{langFile}}',
  info_dryRun_key: '(dry run) ma tiktebx traduzzjoni għaċ-ċavetta: {{key}}',
  info_dryRun_file: '(dry run) kien kiteb fajl: {{langOut}}',
  warn_walk_readDir: 'walk( {{dir}} ): żball fil-qari: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): seħħ żball meta ppruvaw telenkaw fajls fid-direttorju: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): din it-triq mhix direttorju',
  info_processDirectory_skippingExisting: 'Direttorju tal-proċess( {{lang}} ): taqbeż il-fajl eżistenti: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Il-fajl inkiteb: {{langFile}}',
  err_option_json_notFound: 'Fajl JSON ma nstabx: {{ jsonFile }}',
  err_option_json_errorReading: 'Sar żball fil-qari jew l-analiżi tal-fajl JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Ebda lingwa tat-traduzzjoni speċifikata. Uża `-l` / `--languages` u speċifika lista separata b\'virgola ta\' kodiċijiet tal-lingwa ISO',
  err_option_outfile_required: 'L-ebda fajl tal-output jew direttorju ma ġie speċifikat. Uża `-o` / `--outfile` biex tispeċifika l-fajl tal-output jew id-direttorju',
  err_noSources: 'ebda fajl sors ipprovdut għat-traduzzjoni',
  info_option_jsonFile: 'Mexxi kmandi multipli hokey speċifikati f\'fajl JSON. Jekk ma jiġi pprovdut l-ebda fajl JSON, il-kmand ifittex fajl bl-isem \'hokey.json\' fid-direttorju kurrenti',
  info_option_indexFile: 'Iġġenera fajl indiċi għat-traduzzjonijiet. L-isem tal-fajl irid jispiċċa b\' `.html`, `.md` jew `.txt`, sakemm ma tipprovdix mudell b\'`-A` / `--index-template`',
  info_option_indexTemplate: 'Dan jista \'jkun \'html\', \'markdown\', \'test\', jew mogħdija għall-mudell tal-pumi tiegħek stess. Dan il-mudell jintuża meta jinħoloq il-fajl tal-indiċi. Ħares lejn il-mudelli default fil-kodiċi tas-sors tal-hokeylization għal eżempji',
  info_option_regular: 'Ittraduċi fajls tas-sors bħala fajls regolari, mhux tittraduċi oġġetti JavaScript li fihom riżorsi string. Il-bandiera `-M` / `--markdown` timplika din il-bandiera.',
  info_arg_sources: 'Is-sors(i) għat-traduzzjonijiet; dan jista\' jkun fajl jew direttorji JavaScript wieħed jew aktar',
  info_jsonProcessing_start: 'Konfigurazzjoni tal-ipproċessar JSON: {{name}}',
  err_index_singleFileMultipleSources: 'Ġie speċifikat fajl ta\' indiċi wieħed, iżda hemm fajls ta\' input multipli. Speċifika direttorju minflok fajl għall-indiċi',
  err_index_targetDirAndNoTypeOrTemplate: 'Ġie speċifikat direttorju fil-mira għall-indiċi, iżda l-ebda mudell tal-indiċi ma ġie speċifikat. Uża `-A` / `--indexTemplate` biex tagħżel mudell',
  err_index_parentDirDoesNotExist: 'Id-direttorju prinċipali tal-indiċi ma jeżistix: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'L-isem tal-fajl m\'għandux estensjoni u għalhekk ma jistax jiġi determinat tip ta\' mudell: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'L-isem tal-fajl għandu estensjoni invalida għalhekk ma jistax jiġi determinat tip ta\' mudell: {{ file }}',
  err_index_templateLoadingError: 'Sar żball waqt it-tagħbija tal-mudell tad-dwana {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Sar żball fil-kumpilazzjoni tal-mudell tad-dwana {{ file }} : {{ e }}',
  info_index_wroteFile: 'Fajl tal-indiċi maħluq b\'suċċess: {{ indexFile }}',
  label_indexOfTranslations: 'Indiċi tat-traduzzjonijiet',
  label_findYourLanguageCode: 'Sib il-kodiċi tal-lingwa tiegħek',
  err_processing_unknown: '*** Żball mhux mistenni: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'L-ebda fajl tal-output ma ġie ġġenerat għal-lingwa {{ lang }} , għalhekk se jiġi eskluż mill-indiċi'
}