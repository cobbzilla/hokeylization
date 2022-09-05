export default {
  err_fatal: 'ERRORE FATAL: {{error}}',
  err_env_googleProjectId: 'A variabile d\'ambiente GOOGLE_TRANSLATE_PROJECT_ID ùn hè micca definita',
  err_env_googleCredentials: 'Variabile d\'ambiente GOOGLE_APPLICATION_CREDENTIALS micca definitu',
  err_option_processAs_invalid: 'Valore d\'opzione invalidu per -p / --process-as : sta opzione supporta solu i valori di "text" o "html"',
  err_infileNotFound: 'file di input o cartulare micca trovu: {{ jsFile }}',
  err_cannotWriteSource: 'ricusà di sovrascrive a fonte di input (hè statu specificatu in lingue di output): {{source}}',
  err_invalidOutfile: 'L\'outfile previstu cuntene "LANG" (da esse rimpiazzatu cù {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: u schedariu previstu {{ file }} per cumincià cù "export default" o "module.exports" ma trovu: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json invalidu in {{file}}',
  err_processFile_writeFile: '*** Errore scrivendu à u file outfile per {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Errore di traduzzione: {{e}}',
  err_processing: '*** Errore imprevisu: {{e}}',
  warn_missing_close_notranslate_tag: 'L\'output da a traduzzione mancava un tag di chjusu induve unu era previstu. Etichetta {{ label }} , numeru di linea {{ lineNumber }} , linea: {{ line }}',
  info_summary: 'Serviziu di traduzzione rapida cù Google Translate\n Versione {{VERSION}}',
  info_description: 'Un strumentu per i sviluppatori. Cù l\'hokeylization, a localizazione di a vostra app pò esse rapida, divertente è faciule!\n\n === Fonte ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Variabili d\'ambiente REQUIRED ===\n * GOOGLE_TRANSLATE_PROJECT_ID : u vostru prughjettu Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS: u vostru schedariu JSON di credenziali\n\n === Codici di lingua ISO ===\n Quandu si specificanu i codici ISO (o lingua di input o lingue di destinazione) utilizate questi codici:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Codice ISO per e lingue da traduce. Default hè {{DEFAULT_LOCALE}}',
  info_option_processAs: 'U tipu pò esse testu o html. Default hè u testu',
  info_option_match: 'Quandu trasfurmate un repertoriu, cunzidira solu i schedari chì currispondenu à questa regex',
  info_option_excludes: 'Quandu si tratta di un cartulare, esclude esplicitamente i schedari chì currispondenu à sti regex, ancu s\'ellu currispondenu à a regex `-m` / `--match`',
  info_option_filter: 'Quandu si tratta di un repertoriu: 1) richiede stu schedariu JS, chì deve esse esportatu una funzione chjamata "filtru" chì piglia un paràmetru di stringa è torna una stringa, è 2) applicà sta funzione di filtru à tutti i fugliali di output prima ch\'elli sò scritti.',
  info_option_dryRun: 'Ùn fate micca scrive alcun schedariu o fate alcuna chjama API à Google Translate, ma registrate ciò chì avissi statu fattu',
  info_option_languages: 'Lista di codici ISO separati da virgole per e lingue da traduce in',
  info_option_outfile: 'Per l\'elaborazione di u schedariu JS: scrivite l\'output JS à questu schedariu\n Per l\'elaborazione di u repertoriu: scrivite i fugliali in questu repertoriu, chì serà creatu s\'ellu ùn esiste micca',
  info_option_force: 'Generate sempre traduzioni fresche, sovrascrivendu qualsiasi file di output esistenti',
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
  info_processDirectory_fileWritten: 'U schedariu hè statu scrittu: {{langFile}}',
  err_option_json_notFound: 'U schedariu JSON ùn hè micca truvatu: {{ jsonFile }}',
  err_option_json_errorReading: 'Un errore hè accadutu à leghje o analizà u schedariu JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Nisuna lingua di traduzzione specificata. Aduprate `-l` / `--languages` è specificate una lista di codici di lingua ISO separati da virgole',
  err_option_outfile_required: 'Nisun schedariu di output o cartulare hè statu specificatu. Aduprate `-o` / `--outfile` per specificà u schedariu di output o u cartulare',
  err_noSources: 'nisun schedariu fonte furnitu per a traduzzione',
  info_option_jsonFile: 'Eseguite parechje cumandamenti hokey specificati in un schedariu JSON. Se ùn hè micca furnitu un schedariu JSON, u cumandimu cerca un schedariu chjamatu \'hokey.json\' in u cartulare attuale.',
  info_option_indexFile: 'Generate un schedariu indexu per e traduzzioni. U nome di u schedariu deve finisce cù `.html`, `.md` o `.txt`, salvu chì furnisce un mudellu cù `-A` / `--index-template`',
  info_option_indexTemplate: 'Questu pò esse "html", "markdown", "text", o una strada per u vostru propiu mudellu di manubri. Stu mudellu hè utilizatu quandu crea u schedariu index. Fighjate à i mudelli predeterminati in u codice fonte di hokeylization per esempi',
  info_option_regular: 'Traduce i fugliali fonte cum\'è schedarii regulari, micca traduce oggetti JavaScript chì cuntenenu risorse di stringa. A bandiera `-M` / `--markdown` implica questa bandiera.',
  info_arg_sources: 'A fonte (i) per traduzzione; questu pò esse unu o più fugliali o cartulari JavaScript',
  info_jsonProcessing_start: 'Configurazione di trasfurmazioni JSON: {{name}}',
  err_index_singleFileMultipleSources: 'Un unicu schedariu d\'indici hè statu specificatu, ma ci sò parechji schedarii di input. Specificate un cartulare invece di un schedariu per l\'indici',
  err_index_targetDirAndNoTypeOrTemplate: 'Un repertoriu di destinazione hè statu specificatu per l\'indici, ma ùn hè micca specificatu un mudellu d\'indici. Aduprate `-A` / `--indexTemplate` per selezziunà un mudellu',
  err_index_parentDirDoesNotExist: 'U cartulare parent di l\'indici ùn esiste micca: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'U nome di u schedariu ùn hà micca estensione, cusì un tipu di mudellu ùn pò esse determinatu: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'U nome di u schedariu hà una estensione invalida cusì ùn pò micca esse determinatu un tipu di mudellu: {{ file }}',
  err_index_templateLoadingError: 'Un errore hè accadutu durante a carica di u mudellu persunalizatu {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Un errore hè accadutu cumpilendu u mudellu persunalizatu {{ file }} : {{ e }}',
  info_index_wroteFile: 'File d\'indexu creatu successu: {{ indexFile }}',
  label_indexOfTranslations: 'Indice di traduzzioni',
  label_findYourLanguageCode: 'Truvate u vostru codice di lingua',
  err_processing_unknown: '*** Errore imprevisu: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Nisun schedariu di output hè statu generatu per a lingua {{ lang }} , cusì serà esclusu da l\'indici',
  err_filter_loading: 'Filtru micca trovu: {{ filter }}\n U filtru ùn hè statu trovu in alcunu di: u cartulare attuale, u cartulare ./.hokey-filters, u cartulare ${HOME}/.hokey-filters, nè u repertoriu di filtri integrati.'
}