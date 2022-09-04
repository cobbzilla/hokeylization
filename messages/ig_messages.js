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
  info_processDirectory_fileWritten: 'Edela faịlụ a: {{langFile}}'
}