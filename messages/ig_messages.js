export default {
  err_fatal: 'Mmehie na-egbu egbu: {{error}}',
  err_env_googleProjectId: 'A kọwapụtaghị mgbanwe gburugburu GOOGLE_TRANSLATE_PROJECT_ID',
  err_env_googleCredentials: 'Akọwapụtaghị mgbanwe gburugburu GOOGLE_APPLICATION_CREDENTIALS',
  err_option_processAs_invalid: 'Uru nhọrọ ezighi ezi maka -p / --process-as : nhọrọ a na-akwado naanị ụkpụrụ \'ederede\' ma ọ bụ \'html\'',
  err_infileNotFound: 'achọtaghị faịlụ ntinye ma ọ bụ akwụkwọ ndekọ aha: {{ jsFile }}',
  err_cannotWriteSource: 'na-ajụ idegharị isi iyi ntinye (kpọpụtara n\'asụsụ mmepụta): {{source}}',
  err_invalidOutfile: 'echere na ọ ga-enwe \'LANG\' (a ga-eji {{lang}} dochie ya)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: faịlụ a na-atụ anya {{ file }} ga-eji \'bupu ndabara\' ma ọ bụ \'module.exports\' mana achọtara: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'ezighi ezi json na {{file}}',
  err_processFile_writeFile: '*** Njehie ịde akwụkwọ maka {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Njehie ịtụgharị asụsụ: {{e}}',
  err_processing: '*** Njehie a na-atụghị anya ya: {{e}}',
  warn_missing_close_notranslate_tag: 'Nsonaazụ sitere na ntụgharị efu efu mkpado mmechi ebe a tụrụ anya otu. Labelụ {{ label }} , akara ahịrị {{ lineNumber }} , ahịrị: {{ line }}',
  info_summary: 'Ọrụ ntụgharị asụsụ ngwa ngwa site na iji Google Translate\n Ụdị {{VERSION}}',
  info_description: 'Ngwa maka ndị mmepe. Site na hokeyylization, imegharị ngwa gị nwere ike ịdị ngwa, ihe ọchị na dị mfe!\n\n === Isi mmalite ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === mgbanwe gburugburu ebe obibi achọrọ ===\n * GOOGLE_TRANSLATE_PROJECT_ID: oru ngo Google Translate gị\n * GOOGLE_APPLICATION_CREDENTIALS: nzere JSON gị\n\n == Koodu asụsụ ISO ===\n Mgbe ị na-akọwa koodu ISO (ma ọ bụ asụsụ ntinye ma ọ bụ asụsụ ebumnuche) jiri koodu ndị a:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Koodu ISO maka asụsụ iji tụgharịa asụsụ ya. Nke izizi bụ {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Ụdị nwere ike ịbụ ederede ma ọ bụ HTML. Ndabara bụ ederede',
  info_option_match: 'Mgbe ị na-ahazi ndekọ, naanị tụlee faịlụ ndị dabara na regex a',
  info_option_excludes: 'Mgbe ị na-ahazi akwụkwọ ndekọ aha, wepụrụ n\'ụzọ doro anya faịlụ ndị dabara na regexes ndị a, ọbụlagodi na ha ga-adakọ na regex `-m` / `--match`',
  info_option_filter: 'Mgbe ị na-ahazi ndekọ: 1) chọrọ faịlụ JS a, nke ga-ebupụ ọrụ aha ya bụ \'filter\' nke na-ewere eriri eriri wee weghachite eriri, na 2) tinye ọrụ nzacha a na faịlụ mmepụta niile tupu edee ha.',
  info_option_dryRun: 'Edela faịlụ ọ bụla ma ọ bụ kpọọ oku API na Google Translate, mana tinye ihe a gaara eme',
  info_option_languages: 'Ndepụta koodu ISO nkewapụrụ rikoma maka asụsụ ịsụgharị n\'ime',
  info_option_outfile: 'Maka nhazi faịlụ JS: dee mmepụta JS na faịlụ a\n Maka nhazi ndekọ aha: dee faịlụ na ndekọ a, nke a ga-emepụta ma ọ bụrụ na ọ dịghị',
  info_option_force: 'Mepụta ntụgharị asụsụ ọhụrụ mgbe niile, na-edegharị faịlụ mmepụta ọ bụla dị',
  info_option_handlebars: 'Gbaa mbọ hụ na echekwara ọdịnaya {{ handlebars }} dị ka ọ dị na atụgharịghị ya',
  info_option_markdown: 'Gbaa mbọ hụ na echekwara [markdown](https://links) nke ọma, ma ọ bụghị ya, a na-ewebata oghere n\'etiti njedebe nke nkọwa njikọ ahụ na brackets square na njikọ ahụ n\'onwe ya na akara aka.',
  info_arg_source: 'Isi mmalite ntụgharị asụsụ; nwere ike ịbụ faịlụ JS ma ọ bụ ndekọ aha faịlụ iji tụgharịa asụsụ',
  info_filter_applied: 'Etinyere nzacha nke ọma tupu e dee: {{langFile}}',
  info_dryRun_key: '(agba ọsọ akọrọ) anaghị ede ntụgharị asụsụ maka igodo: {{key}}',
  info_dryRun_file: '(akọrọ ọsọ) gaara ede faịlụ: {{langOut}}',
  warn_walk_readDir: 'ije( {{dir}} ): agụ njehie: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): njehie mere na-agbalị ịdepụta faịlụ na ndekọ: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): Ụzọ a abụghị ndekọ',
  info_processDirectory_skippingExisting: 'Usoro Ntuziaka ( {{lang}} ): na-amafe faịlụ dị ugbu a: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Edela faịlụ a: {{langFile}}',
  err_option_json_notFound: 'Achọtaghị faịlụ JSON: {{ jsonFile }}',
  err_option_json_errorReading: 'Enwere mperi n\'ịgụ ma ọ bụ ịtụgharị faịlụ JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Enweghị asụsụ ntụgharị asụsụ akọwapụtara. Jiri `-l` / `--asụsụ\' wee kọwapụta ndepụta koodu asụsụ ISO kewapụrụ rikoma.',
  err_option_outfile_required: 'Enweghị faịlụ mmepụta ma ọ bụ akwụkwọ ndekọ aha akọwapụtara. Jiri `-o` / `---outfile\' iji kọwapụta faịlụ mmepụta ma ọ bụ ndekọ',
  err_noSources: 'enweghị faịlụ isi mmalite ewepụtara maka ntụgharị asụsụ',
  info_option_jsonFile: 'Gbaa ọtụtụ iwu hokey akọwapụtara na faịlụ JSON. Ọ bụrụ na enweghị faịlụ JSON, iwu ahụ na-achọ faịlụ akpọrọ \'hokey.json\' na ndekọ aha ugbu a',
  info_option_indexFile: 'Mepụta faịlụ index maka ntụgharị asụsụ. Aha faịlụ ga-akwụsị na `.html`, `.md` ma ọ bụ `.txt`, belụsọ na i wetara ndebiri nwere `-A` / `--index-template`',
  info_option_indexTemplate: 'Nke a nwere ike ịbụ \'html\', \'markdown\', \'ederede\', ma ọ bụ ụzọ gaa templatebars nke gị. A na-eji ndebiri a mgbe ị na-emepụta faịlụ ndeksi. Lelee ndebiri ndabara na koodu iyi hokeylization maka ọmụmaatụ',
  info_option_regular: 'Tụgharịa asụsụ isi iyi ka faịlụ oge niile, ọ bụghị ịtụgharị asụsụ ihe Javascript nwere akụrụngwa eriri. Ọkọlọtọ `-M` / `--markdown\' na-egosi ọkọlọtọ a.',
  info_arg_sources: 'Isi mmalite (s) maka ntụgharị asụsụ; nke a nwere ike ịbụ otu faịlụ ma ọ bụ akwụkwọ ndekọ aha Javascript ma ọ bụ karịa',
  info_jsonProcessing_start: 'Nhazi nhazi JSON: {{name}}',
  err_index_singleFileMultipleSources: 'A kọwapụtara otu faịlụ ndeksi, mana enwere ọtụtụ faịlụ ntinye. Ezipụta ndekọ kama ịbụ faịlụ maka ndeksi',
  err_index_targetDirAndNoTypeOrTemplate: 'Edepụtara akwụkwọ ndekọ aha maka ndeksi, mana ọ nweghị ndebiri ndebiri akọwapụtara. Jiri `-A` / `--indexTemplate` ka ịhọrọ ndebiri',
  err_index_parentDirDoesNotExist: 'Akwụkwọ ndekọ aha nne na nna nke ndeksi adịghị adị: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Aha faịlụ enweghị ndọtị ya mere enweghị ike ikpebi ụdị ndebiri: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Aha faịlụ nwere ndọtị na-ezighi ezi ya mere enweghị ike ikpebi ụdị ndebiri: {{ file }}',
  err_index_templateLoadingError: 'Enwere mperi na-ebunye ndebiri omenala {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Enwere mperi na-achịkọta ndebiri omenala {{ file }} : {{ e }}',
  info_index_wroteFile: 'Faịlụ ntụaka mebere nke ọma: {{ indexFile }}',
  label_indexOfTranslations: 'Ndekọ ntụgharị asụsụ',
  label_findYourLanguageCode: 'Chọta koodu asụsụ gị',
  err_processing_unknown: '*** Njehie a na-atụghị anya ya: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Enweghị faịlụ mmepụta emepụtara maka asụsụ {{ lang }} , yabụ a ga-ewepụ ya na ndeksi',
  err_filter_loading: 'Achọtaghị ihe nzacha: {{ filter }}\n Ahụghị nzacha ahụ n\'ime nke ọ bụla: akwụkwọ ndekọ aha ugbu a, ndekọ ndekọ ./.hokey-filters, akwụkwọ ndekọ aha ${HOME}/.hokey-filters, ma ọ bụ ndekọ ndekọ ihe nzacha arụnyere n\'ime ya.'
}