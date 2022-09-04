export default {
  err_fatal: 'ÇEWTIYA KUJÎ: {{error}}',
  err_env_googleProjectId: 'Guherbara hawîrdorê GOOGLE_TRANSLATE_PROJECT_ID nayê diyarkirin',
  err_env_googleCredentials: 'Guherbara hawîrdorê GOOGLE_APPLICATION_CREDENTIALS nayê diyarkirin',
  err_option_processAs_invalid: 'Nirxa vebijarkê nederbasdar ji bo -p / --process-as: ev vebijark tenê nirxên \'text\' an \'html\' piştgirî dike',
  err_infileNotFound: 'pelê têketinê an pelrêça nehat dîtin: {{ jsFile }}',
  err_cannotWriteSource: 'redkirina nivîsandina çavkaniya têketinê (bi zimanên derketinê hate diyar kirin): {{source}}',
  err_invalidOutfile: 'pelê çaverêkirî ku \'LANG\' hebe (ku bi {{lang}} were guheztin)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: pelê çaverêkirî {{ file }} bi \'export default\' an \'module.exports\' dest pê bike lê hat dîtin: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json nederbasdar di {{file}} de',
  err_processFile_writeFile: '*** Çewtiya nivîsandina pelê ji bo {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Çewtiya wergerê: {{e}}',
  err_processing: '*** Çewtiya nediyar: {{e}}',
  info_summary: 'Xizmeta wergera bilez a bi karanîna Google Wergerê\n Versiyon {{VERSION}}',
  info_description: '=== Çavkanî ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === guhêrbarên hawirdorê yên pêwîst ===\n * GOOGLE_TRANSLATE_PROJECT_ID: projeya weya Wergerê ya Google\n * GOOGLE_APPLICATION_CREDENTIALS: pêbaweriya we pelê JSON\n\n === Kodên zimanê ISO ===\n Dema ku kodên ISO-yê diyar dikin (yan zimanê têketinê an jî zimanên armanc) van kodan bikar bînin:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Koda ISO ya ji bo zimanên ku jê wergerînin. Default {{DEFAULT_LOCALE}} ye',
  info_option_processAs: 'Tîp dikare nivîs an html be. Pêşniyaz nivîs e',
  info_option_match: 'Dema ku pelrêçek hilberandin, tenê pelên ku bi vê regexê re hevaheng in bifikirin',
  info_option_excludes: 'Dema ku pelrêçek hildiweşîne, pelên ku bi van regexes re têkildar in bi eşkere ji holê rakin, her çend ew bi regeksa `-m` / `--match` re têkildar bin.',
  info_option_filter: 'Dema ku pelrêçek hildiweşîne: 1) vê pelê JS hewce dike, ku divê fonksiyonek bi navê `filter` derxe ku parametreyek rêzikê digire û rêzek vedigerîne, û 2) vê fonksiyona parzûnê li hemî pelên derketinê berî ku werin nivîsandin bicîh bîne.',
  info_option_dryRun: 'Tu pelan nenivîsin an jî bangên API-ê ji Google Wergerê re nekin, lê tiştê ku dê bihata kirin binivîsin',
  info_option_languages: 'Lîsteya kodên ISO-yê ji bo zimanên ku werin wergerandin bi kommanan veqetandî',
  info_option_outfile: 'Ji bo hilberandina pelê JS: li vê pelê derana JS binivîse\n Ji bo pêvajoya pelrêça: pelan li vê pelrêça binivîsin, ku heke ew tune be dê were afirandin',
  info_option_force: 'Her gav wergerên nû biafirînin, pelên derketinê yên heyî binivîsînin',
  info_option_handlebars: 'Piştrast bike ku naveroka {{ handlebars }} wekî-heyî tê parastin û NE wergerandin',
  info_option_markdown: 'Piştrast bike ku [markdown](https:/',
  info_arg_source: 'Çavkaniya wergeran; dikare pelek JS an pelrêçek pelan be ku wergerîne',
  info_filter_applied: 'Parzûna berî nivîsandinê bi serfirazî hate sepandin: {{langFile}}',
  info_dryRun_key: '(herikîna hişk) werger ji bo kilîtê nayê nivîsandin: {{key}}',
  info_dryRun_file: '(Rewşa hişk) dê pelê binivîsanda: {{langOut}}',
  warn_walk_readDir: 'meş( {{dir}} ): şaşiya xwendinê: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): çewtiyek çêbû ku hewla navnîşkirina pelan di pelrêçê de: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ev rê ne pelrêçek e',
  info_processDirectory_skippingExisting: 'prosesDirectory( {{lang}} ): pelê heyî derbas dike: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Dosya hatiye nivîsandin: {{langFile}}'
}