export default {
  err_fatal: 'ERRORE FATAL: {{error}}',
  err_env_googleProjectId: 'A variabile d\'ambiente GOOGLE_TRANSLATE_PROJECT_ID ùn hè micca definita',
  err_env_googleCredentials: 'Variabile d\'ambiente GOOGLE_APPLICATION_CREDENTIALS micca definitu',
  err_option_processAs_invalid: 'Valore d\'opzione invalidu per -p / --process-as : sta opzione supporta solu i valori di "text" o "html"',
  err_infileNotFound: 'file di input o cartulare micca trovu: {{ jsFile }}',
  err_cannotWriteSource: 'ricusatu di sovrascrive a fonte di input (hè statu specificatu in lingue di output): {{source}}',
  err_invalidOutfile: 'L\'outfile previstu cuntene "LANG" (da esse rimpiazzatu cù {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: u schedariu previstu {{ file }} per cumincià cù "export default" o "module.exports" ma trovu: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json invalidu in {{file}}',
  err_processFile_writeFile: '*** Errore scrivendu à u file outfile per {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Errore di traduzzione: {{e}}',
  err_processing: '*** Errore imprevisu: {{e}}',
  info_summary: 'Serviziu di traduzzione rapida cù Google Translate\n Versione {{VERSION}}',
  info_description: '=== Fonte ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Variabili d\'ambiente REQUIRED ===\n * GOOGLE_TRANSLATE_PROJECT_ID : u vostru prughjettu Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS: u vostru schedariu JSON di credenziali\n\n === Codici di lingua ISO ===\n Quandu si specificanu i codici ISO (o lingua di input o lingue di destinazione) utilizate questi codici:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Codice ISO per e lingue da traduce. Default hè {{DEFAULT_LOCALE}}',
  info_option_processAs: 'U tipu pò esse testu o html. Default hè u testu',
  info_option_match: 'Quandu trasfurmate un repertoriu, cunzidira solu i schedari chì currispondenu à questa regex',
  info_option_excludes: 'Quandu si tratta di un cartulare, esclude esplicitamente i schedari chì currispondenu à sti regex, ancu s\'ellu currispondenu à a regex `-m` / `--match`',
  info_option_filter: 'Quandu si tratta di un repertoriu: 1) richiede stu schedariu JS, chì deve esse esportatu una funzione chjamata "filtru" chì piglia un paràmetru di stringa è torna una stringa, è 2) applicà sta funzione di filtru à tutti i schedarii di output prima ch\'elli sò scritti.',
  info_option_dryRun: 'Ùn fate micca scrive alcun schedariu o fate alcuna chjama API à Google Translate, ma registrate ciò chì saria statu fattu',
  info_option_languages: 'Lista di codici ISO separati da virgole per e lingue da traduce in',
  info_option_outfile: 'Per l\'elaborazione di u schedariu JS: scrivite l\'output JS à questu schedariu\n Per l\'elaborazione di u repertoriu: scrivite i fugliali in questu repertoriu, chì serà creatu s\'ellu ùn esiste micca',
  info_option_force: 'Genera sempre traduzioni fresche, sovrascrivendu qualsiasi file di output esistenti',
  info_option_handlebars: 'Assicuratevi chì u cuntenutu {{ handlebars }} hè cunservatu cum\'è hè è NON traduttu',
  info_option_markdown: 'Assicuratevi chì [markdown] (https://links) sò cunservati currettamente, altrimenti un spaziu hè introduttu trà a fine di a descrizzione di u ligame in parentesi quadrate è u ligame stessu in parentesi.',
  info_arg_source: 'A fonte di traduzzione; pò esse un schedariu JS o un repertoriu di schedari da traduce',
  info_filter_applied: 'Filtru applicatu bè prima di scrive: {{langFile}}',
  info_dryRun_key: '(corsa a secca) ùn scrive micca a traduzzione per a chjave: {{key}}',
  info_dryRun_file: '(corsa a secco) averia scrittu u schedariu: {{langOut}}',
  warn_walk_readDir: 'cammina ( {{dir}} ): errore di lettura: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): un errore hè accadutu à pruvà à listà i schedari in u cartulare: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): sta strada ùn hè micca un cartulare',
  info_processDirectory_skippingExisting: 'ProcessDirectory ( {{lang}} ): saltà u schedariu esistente: {{langFile.file}}',
  info_processDirectory_fileWritten: 'U schedariu hè statu scrittu: {{langFile}}'
}