export default {
  err_fatal: 'FATALA ERARO: {{error}}',
  err_env_googleProjectId: 'Media variablo GOOGLE_TRANSLATE_PROJECT_ID ne difinita',
  err_env_googleCredentials: 'Media variablo GOOGLE_APPLICATION_CREDENTIALS ne difinita',
  err_option_processAs_invalid: 'Nevalida opciovaloro por -p / --process-as : ĉi tiu opcio nur subtenas valorojn de \'teksto\' aŭ \'html\'',
  err_infileNotFound: 'eniga dosiero aŭ dosierujo ne trovita: {{ jsFile }}',
  err_cannotWriteSource: 'rifuzi anstataŭigi enigfonton (estis specifita en eliglingvoj): {{source}}',
  err_invalidOutfile: 'atendita eksterdosiero enhavu \'LANG\' (anstataŭigota per {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: atendita dosiero {{ file }} komenci per \'export default\' aŭ \'module.exports\' sed trovita: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'nevalida json en {{file}}',
  err_processFile_writeFile: '*** Eraro skribante al eksterdosiero por {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Eraro tradukante: {{e}}',
  err_processing: '*** Neatendita eraro: {{e}}',
  info_summary: 'Rapida tradukservo per Google Translate\n Versio {{VERSION}}',
  info_description: '=== Fonto ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === NECESATAJ mediovariabloj ===\n * GOOGLE_TRANSLATE_PROJECT_ID: via projekto de Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS: viaj akreditaĵoj JSON-dosiero\n\n === ISO-lingvaj kodoj ===\n Dum specifado de ISO-kodoj (aŭ eniga lingvo aŭ cellingvoj) uzu ĉi tiujn kodojn:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO-kodo por lingvoj tradukendaj. Defaŭlte estas {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Tajpo povas esti teksto aŭ html. Defaŭlte estas teksto',
  info_option_match: 'Dum prilaborado de dosierujo, konsideru nur dosierojn, kiuj kongruas kun ĉi tiu regex',
  info_option_excludes: 'Dum prilaborado de dosierujo, eksplicite ekskludu dosierojn kiuj kongruas kun ĉi tiuj regeks, eĉ se ili kongruus kun la regex `-m` / `--match`',
  info_option_filter: 'Dum prilaborado de dosierujo: 1) postulu ĉi tiun JS-dosieron, kiu devas eksporti funkcion nomitan `filtrilo\' kiu prenas ĉen-parametron kaj resendas ĉenon, kaj 2) apliku ĉi tiun filtrilan funkcion al ĉiuj eligdosieroj antaŭ ol ili estas skribitaj.',
  info_option_dryRun: 'Ne skribu dosierojn aŭ faru API-alvokojn al Google Translate, sed ensalutu tion, kio estus farita',
  info_option_languages: 'Komo-separata listo de ISO-kodoj por lingvoj tradukendaj',
  info_option_outfile: 'Por JS-dosiertraktado: skribu JS-eligon al ĉi tiu dosiero\n Por traktado de dosierujo: skribu dosierojn al ĉi tiu dosierujo, kiu estos kreita se ĝi ne ekzistas',
  info_option_force: 'Ĉiam generu freŝajn tradukojn, anstataŭigante iujn ajn ekzistantajn eligdosierojn',
  info_option_handlebars: 'Certigu, ke {{ handlebars }} enhavo estas konservita kiel estas kaj NE tradukita',
  info_option_markdown: 'Certigu ke [markdown](https://links) estas ĝuste konservita, alie spaco estas enkondukita inter la fino de la ligilo-priskribo inter kvadrataj krampoj kaj la ligilo mem en krampoj',
  info_arg_source: 'La fonto por tradukoj; povas esti JS-dosiero aŭ dosierujo de dosieroj tradukendaj',
  info_filter_applied: 'Filtrilo sukcese aplikita antaŭ skribi: {{langFile}}',
  info_dryRun_key: '(seka kuro) ne skribante tradukon por ŝlosilo: {{key}}',
  info_dryRun_file: '(seka kurado) estus skribinta dosieron: {{langOut}}',
  warn_walk_readDir: 'marŝi( {{dir}} ): eraro legante: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): eraro okazis provante listigi dosierojn en dosierujo: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ĉi tiu vojo ne estas dosierujo',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): preterlasi ekzistantan dosieron: {{langFile.file}}',
  info_processDirectory_fileWritten: 'La dosiero estas skribita: {{langFile}}'
}