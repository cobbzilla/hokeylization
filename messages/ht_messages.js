export default {
  err_fatal: 'ERÈ FATAL: {{error}}',
  err_env_googleProjectId: 'Varyab anviwònman GOOGLE_TRANSLATE_PROJECT_ID pa defini',
  err_env_googleCredentials: 'Varyab anviwònman GOOGLE_APPLICATION_CREDENTIALS pa defini',
  err_option_processAs_invalid: 'Valè opsyon pa valab pou -p / --process-as : opsyon sa a sèlman sipòte valè \'tèks\' oswa \'html\'',
  err_infileNotFound: 'dosye antre oswa anyè pa jwenn: {{ jsFile }}',
  err_cannotWriteSource: 'refize ranplase sous antre (te espesifye nan lang pwodiksyon): {{source}}',
  err_invalidOutfile: 'fichye espere genyen \'LANG\' (pou ranplase ak {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: espere fichye {{ file }} kòmanse ak \'export default\' oswa \'module.exports\' men li te jwenn: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json valab nan {{file}}',
  err_processFile_writeFile: '*** Erè ekri nan dosye pou {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Erè tradui: {{e}}',
  err_processing: '*** Erè inatandi: {{e}}',
  warn_missing_close_notranslate_tag: 'Sòti nan tradiksyon te manke yon tag fèmen kote youn te espere. Etikèt {{ label }} , nimewo liy {{ lineNumber }} , liy: {{ line }}',
  info_summary: 'Sèvis tradiksyon rapid lè l sèvi avèk Google Translate\n Version {{VERSION}}',
  info_description: 'Yon zouti pou devlopè. Avèk hokeylization, lokalize app ou a ka rapid, amizan ak fasil!\n\n === Sous ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === OBLIGWA varyab anviwònman ===\n * GOOGLE_TRANSLATE_PROJECT_ID: pwojè Google Translate ou a\n * GOOGLE_APPLICATION_CREDENTIALS: fichye JSON kalifikasyon w yo\n\n === Kòd lang ISO ===\n Lè w ap presize kòd ISO (swa lang antre oswa lang sib) sèvi ak kòd sa yo:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Kòd ISO pou lang pou tradui soti. Default se {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Kalite ka tèks oswa html. Default se tèks',
  info_option_match: 'Lè w ap trete yon anyè, konsidere sèlman dosye ki matche ak regex sa a',
  info_option_excludes: 'Lè w ap trete yon anyè, eksplisitman ekskli fichye ki koresponn ak regex sa yo, menm si yo ta matche ak regex `-m` / `--match`',
  info_option_filter: 'Lè w ap trete yon anyè: 1) mande fichye JS sa a, ki dwe ekspòte yon fonksyon ki rele `filter` ki pran yon paramèt fisèl epi ki retounen yon fisèl, epi 2) aplike fonksyon filtre sa a nan tout fichye pwodiksyon anvan yo ekri yo.',
  info_option_dryRun: 'Pa fè ekri okenn dosye oswa fè okenn apèl API nan Google Translate, men konekte sa ki ta dwe fè',
  info_option_languages: 'Lis kòd ISO ki separe ak vigil pou lang pou tradui',
  info_option_outfile: 'Pou pwosesis dosye JS: ekri pwodiksyon JS nan dosye sa a\n Pou pwosesis anyè: ekri fichye nan anyè sa a, ki pral kreye si li pa egziste',
  info_option_force: 'Toujou jenere tradiksyon fre, ranplase nenpòt ki dosye pwodiksyon ki egziste deja',
  info_option_handlebars: 'Asire w ke kontni {{ handlebars }} konsève jan li ye a epi li PA tradui l',
  info_option_markdown: 'Asire w ke [markdown](https://links) yo konsève kòrèkteman, sinon yon espas prezante ant fen deskripsyon lyen an nan parantèz kare ak lyen an li menm nan parantèz.',
  info_arg_source: 'Sous la pou tradiksyon; kapab yon fichye JS oswa yon anyè dosye pou tradui',
  info_filter_applied: 'Filtre aplike avèk siksè anvan ekri: {{langFile}}',
  info_dryRun_key: '(dry run) pa ekri tradiksyon pou kle: {{key}}',
  info_dryRun_file: '(dry run) ta ekri dosye: {{langOut}}',
  warn_walk_readDir: 'mache( {{dir}} ): erè lekti: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): yon erè te fèt lè w ap eseye fè lis fichye yo nan anyè: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): chemen sa a se pa yon anyè',
  info_processDirectory_skippingExisting: 'Anyè pwosesis( {{lang}} ): sote dosye ki egziste deja: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Yo ekri dosye a: {{langFile}}',
  err_option_json_notFound: 'Fichye JSON pa jwenn: {{ jsonFile }}',
  err_option_json_errorReading: 'Yon erè te fèt nan lekti oswa analiz fichye JSON la {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Pa gen lang tradiksyon espesifye. Sèvi ak `-l` / `--languages` epi presize yon lis kòd ISO ki separe ak vigil.',
  err_option_outfile_required: 'Pa gen okenn dosye pwodiksyon oswa anyè espesifye. Sèvi ak `-o` / `--outfile` pou presize fichye pwodiksyon an oswa anyè',
  err_noSources: 'pa gen okenn dosye sous yo bay pou tradiksyon',
  info_option_jsonFile: 'Kouri plizyè kòmandman hokey ki espesifye nan yon dosye JSON. Si yo pa bay okenn dosye JSON, kòmandman an ap chèche yon dosye ki rele \'hokey.json\' nan anyè aktyèl la.',
  info_option_indexFile: 'Jenere yon fichye endèks pou tradiksyon yo. Non fichye a dwe fini ak `.html`, `.md` oswa `.txt`, sof si ou bay yon modèl ak `-A` / `--index-template`',
  info_option_indexTemplate: 'Sa a ka \'html\', \'markdown\', \'tèks\', oswa yon chemen nan pwòp modèl gidon ou. Yo itilize modèl sa a lè w ap kreye fichye endèks la. Gade nan modèl yo default nan kòd sous hokeylization la pou egzanp',
  info_option_regular: 'Tradui fichye sous yo kòm dosye regilye, pa tradui objè JavaScript ki gen resous fisèl. Drapo `-M` / `--markdown` vle di drapo sa a.',
  info_arg_sources: 'Sous la (yo) pou tradiksyon; sa a kapab youn oswa plis fichye JavaScript oswa anyè',
  info_jsonProcessing_start: 'JSON pwosesis konfigirasyon: {{name}}',
  err_index_singleFileMultipleSources: 'Yo te espesifye yon sèl fichye endèks, men gen plizyè dosye antre. Espesifye yon anyè olye de yon dosye pou endèks la',
  err_index_targetDirAndNoTypeOrTemplate: 'Yo te espesifye yon anyè sib pou endèks la, men pa gen okenn modèl endèks espesifye. Sèvi ak `-A` / `--indexTemplate` pou chwazi yon modèl',
  err_index_parentDirDoesNotExist: 'Anyè paran endèks la pa egziste: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Non fichye a pa gen ekstansyon pou yo pa ka detèmine yon kalite modèl: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Non fichye a gen yon ekstansyon ki pa valab, kidonk yo pa ka detèmine yon kalite modèl: {{ file }}',
  err_index_templateLoadingError: 'Yon erè te fèt nan chaje modèl la koutim {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Yon erè te fèt nan konpile modèl la koutim {{ file }} : {{ e }}',
  info_index_wroteFile: 'Fichye endèks kreye avèk siksè: {{ indexFile }}',
  label_indexOfTranslations: 'Endèks tradiksyon',
  label_findYourLanguageCode: 'Jwenn kòd lang ou a',
  err_processing_unknown: '*** Erè inatandi: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Pa gen okenn dosye pwodiksyon te pwodwi pou lang {{ lang }} , kidonk li pral eskli nan endèks la',
  err_filter_loading: 'Filtre pa jwenn: {{ filter }}\n Yo pa jwenn filtè a nan okenn nan: anyè aktyèl la, anyè ./.hokey-filters, anyè ${HOME}/.hokey-filters, ni anyè filtè entegre yo.'
}