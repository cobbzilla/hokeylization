export default {
  err_fatal: 'ERRORE FATALE: {{error}}',
  err_env_googleProjectId: 'Variabile d\'ambiente GOOGLE_TRANSLATE_PROJECT_ID non definita',
  err_env_googleCredentials: 'Variabile d\'ambiente GOOGLE_APPLICATION_CREDENTIALS non definita',
  err_option_processAs_invalid: 'Valore opzione non valido per -p / --process-as : questa opzione supporta solo valori di \'text\' o \'html\'',
  err_infileNotFound: 'file di input o directory non trovata: {{ jsFile }}',
  err_cannotWriteSource: 'rifiuto di sovrascrivere la sorgente di input (è stato specificato nelle lingue di output): {{source}}',
  err_invalidOutfile: 'previsto che il file di uscita contenga \'LANG\' (da sostituire con {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: previsto che il file {{ file }} inizi con \'export default\' o \'module.exports\' ma trovato: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json non valido in {{file}}',
  err_processFile_writeFile: '*** Errore durante la scrittura in outfile per {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Errore durante la traduzione: {{e}}',
  err_processing: '*** Errore imprevisto: {{e}}',
  warn_missing_close_notranslate_tag: 'Nell\'output della traduzione mancava un tag di chiusura dove era previsto. Etichetta {{ label }} , numero riga {{ lineNumber }} , riga: {{ line }}',
  info_summary: 'Servizio di traduzione rapida tramite Google Translate\n Versione {{VERSION}}',
  info_description: 'Uno strumento per gli sviluppatori. Con l\'hokeylizzazione, localizzare la tua app può essere veloce, divertente e facile!\n\n === Fonte ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Variabili d\'ambiente OBBLIGATORIE ===\n * GOOGLE_TRANSLATE_PROJECT_ID: il tuo progetto Google Traduttore\n * GOOGLE_APPLICATION_CREDENTIALS: il file JSON delle tue credenziali\n\n === Codici lingua ISO ===\n Quando si specificano i codici ISO (lingua di input o lingua di destinazione) utilizzare questi codici:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Codice ISO per le lingue da cui tradurre. L\'impostazione predefinita è {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Il tipo può essere testo o html. L\'impostazione predefinita è il testo',
  info_option_match: 'Quando si elabora una directory, considerare solo i file che corrispondono a questa espressione regolare',
  info_option_excludes: 'Quando si elabora una directory, escludere esplicitamente i file che corrispondono a queste espressioni regolari, anche se corrisponderebbero alla espressione regolare `-m` / `--match`',
  info_option_filter: 'Quando si elabora una directory: 1) richiedere questo file JS, che deve esportare una funzione denominata `filter` che accetta un parametro stringa e restituisce una stringa, e 2) applicare questa funzione di filtro a tutti i file di output prima che vengano scritti',
  info_option_dryRun: 'Non scrivere alcun file o effettuare chiamate API a Google Translate, ma registra ciò che sarebbe stato fatto',
  info_option_languages: 'Elenco separato da virgole di codici ISO per le lingue in cui tradurre',
  info_option_outfile: 'Per l\'elaborazione di file JS: scrivere l\'output JS su questo file\n Per l\'elaborazione di directory: scrivere i file in questa directory, che verrà creata se non esiste',
  info_option_force: 'Genera sempre nuove traduzioni, sovrascrivendo tutti i file di output esistenti',
  info_option_handlebars: 'Assicurati che {{ handlebars }} il contenuto sia conservato così com\'è e NON tradotto',
  info_option_markdown: 'Assicurati che [markdown](https://links) siano conservati correttamente, altrimenti viene inserito uno spazio tra la fine della descrizione del link tra parentesi quadre e il link stesso tra parentesi',
  info_arg_source: 'La fonte per le traduzioni; può essere un file JS o una directory di file da tradurre',
  info_filter_applied: 'Filtro applicato correttamente prima di scrivere: {{langFile}}',
  info_dryRun_key: '(ciclo di prova) non scrive la traduzione per la chiave: {{key}}',
  info_dryRun_file: '(dry run) avrebbe scritto il file: {{langOut}}',
  warn_walk_readDir: 'walk( {{dir}} ): errore di lettura: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): si è verificato un errore durante il tentativo di elencare i file nella directory: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): questo percorso non è una directory',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): saltare il file esistente: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Il file è stato scritto: {{langFile}}',
  err_option_json_notFound: 'File JSON non trovato: {{ jsonFile }}',
  err_option_json_errorReading: 'Si è verificato un errore durante la lettura o l\'analisi del file JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Nessuna lingua di traduzione specificata. Usa `-l` / `--languages` e specifica un elenco di codici lingua ISO separati da virgole',
  err_option_outfile_required: 'Non è stato specificato alcun file o directory di output. Usa `-o` / `--outfile` per specificare il file o la directory di output',
  err_noSources: 'nessun file sorgente fornito per la traduzione',
  info_option_jsonFile: 'Esegui più comandi hokey specificati in un file JSON. Se non viene fornito alcun file JSON, il comando cerca un file denominato \'hokey.json\' nella directory corrente',
  info_option_indexFile: 'Genera un file di indice per le traduzioni. Il nome del file deve terminare con `.html`, `.md` o `.txt`, a meno che tu non fornisca un modello con `-A` / `--index-template`',
  info_option_indexTemplate: 'Può essere "html", "markdown", "testo" o un percorso per il tuo modello di manubrio. Questo modello viene utilizzato durante la creazione del file di indice. Guarda i modelli predefiniti nel codice sorgente di hokeylizzazione per esempi',
  info_option_regular: 'Traduci i file di origine come file normali, non traducendo oggetti JavaScript contenenti risorse stringa. Il flag `-M` / `--markdown` implica questo flag.',
  info_arg_sources: 'La/le fonte/i delle traduzioni; questo può essere uno o più file o directory JavaScript',
  info_jsonProcessing_start: 'Configurazione elaborazione JSON: {{name}}',
  err_index_singleFileMultipleSources: 'È stato specificato un unico file di indice, ma sono presenti più file di input. Specificare una directory invece di un file per l\'indice',
  err_index_targetDirAndNoTypeOrTemplate: 'È stata specificata una directory di destinazione per l\'indice, ma non è stato specificato alcun modello di indice. Usa `-A` / `--indexTemplate` per selezionare un modello',
  err_index_parentDirDoesNotExist: 'La directory principale dell\'indice non esiste: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Il nome del file non ha estensione, quindi non è possibile determinare un tipo di modello: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Il nome del file ha un\'estensione non valida, quindi non è possibile determinare un tipo di modello: {{ file }}',
  err_index_templateLoadingError: 'Si è verificato un errore durante il caricamento del modello personalizzato {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Si è verificato un errore durante la compilazione del modello personalizzato {{ file }} : {{ e }}',
  info_index_wroteFile: 'File di indice creato correttamente: {{ indexFile }}',
  label_indexOfTranslations: 'Indice delle traduzioni',
  label_findYourLanguageCode: 'Trova il codice della tua lingua',
  err_processing_unknown: '*** Errore imprevisto: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Nessun file di output è stato generato per la lingua {{ lang }} , quindi verrà escluso dall\'indice',
  err_filter_loading: 'Filtro non trovato: {{ filter }}\n Il filtro non è stato trovato in nessuna di: la directory corrente, la directory ./.hokey-filters, la directory ${HOME}/.hokey-filters, né la directory dei filtri incorporati'
}