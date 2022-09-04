export default {
  err_fatal: 'EROARE FATALĂ: {{error}}',
  err_env_googleProjectId: 'Variabila de mediu GOOGLE_TRANSLATE_PROJECT_ID nu a fost definită',
  err_env_googleCredentials: 'Variabila de mediu GOOGLE_APPLICATION_CREDENTIALS nu este definită',
  err_option_processAs_invalid: 'Valoare nevalidă a opțiunii pentru -p / --process-as : această opțiune acceptă numai valorile „text” sau „html”',
  err_infileNotFound: 'fișierul de intrare sau directorul nu a fost găsit: {{ jsFile }}',
  err_cannotWriteSource: 'refuzul de a suprascrie sursa de intrare (a fost specificată în limbile de ieșire): {{source}}',
  err_invalidOutfile: 'fișierul așteptat să conțină „LANG” (care va fi înlocuit cu {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: fișierul așteptat {{ file }} să înceapă cu „export default” sau „module.exports”, dar a fost găsit: {{actualPrefix}}',
  err_readMessageKeys_invalidJson: 'json invalid în {{file}}',
  err_processFile_writeFile: '*** Eroare la scrierea în fișierul de ieșire pentru {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Eroare la traducere: {{e}}',
  err_processing: '*** Eroare neașteptată: {{e}}',
  warn_missing_close_notranslate_tag: 'Ieșirea din traducere lipsea o etichetă de închidere unde era așteptată una. Etichetă {{ label }} , numărul rândului {{ lineNumber }} , rând: {{ line }}',
  info_summary: 'Serviciu de traducere rapidă folosind Google Translate\n Versiunea {{VERSION}}',
  info_description: 'Un instrument pentru dezvoltatori. Cu hokeylization, localizarea aplicației dvs. poate fi rapidă, distractivă și ușoară!\n\n === Sursa ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Variabile de mediu NECESARE ===\n * GOOGLE_TRANSLATE_PROJECT_ID: proiectul dvs. Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS: fișierul JSON de acreditări\n\n === Codurile de limbă ISO ===\n Când specificați coduri ISO (fie limba de intrare, fie limbile țintă), utilizați aceste coduri:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Cod ISO pentru limbile din care se traduce. Implicit este {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Tipul poate fi text sau html. Implicit este text',
  info_option_match: 'Când procesați un director, luați în considerare numai fișierele care se potrivesc cu această expresie regex',
  info_option_excludes: 'Când procesați un director, excludeți în mod explicit fișierele care se potrivesc cu aceste regexe, chiar dacă acestea se potrivesc cu expresia regex `-m` / `--match`',
  info_option_filter: 'Când procesați un director: 1) solicitați acest fișier JS, care trebuie să exporte o funcție numită `filter` care preia un parametru șir și returnează un șir și 2) aplicați această funcție de filtru tuturor fișierelor de ieșire înainte de a fi scrise',
  info_option_dryRun: 'Nu faceți să scrieți niciun fișier sau să efectuați apeluri API la Google Translate, ci înregistrați ceea ce s-ar fi făcut',
  info_option_languages: 'Listă de coduri ISO separate prin virgulă pentru limbile în care să fie traduse',
  info_option_outfile: 'Pentru procesarea fișierului JS: scrieți ieșirea JS în acest fișier\n Pentru procesarea directoarelor: scrieți fișiere în acest director, care va fi creat dacă nu există',
  info_option_force: 'Generați întotdeauna traduceri noi, suprascriind orice fișiere de ieșire existente',
  info_option_handlebars: 'Asigurați-vă că conținutul {{ handlebars }} este păstrat așa cum este și NU este tradus',
  info_option_markdown: 'Asigurați-vă că [markdown](https://links) sunt păstrate corect, în caz contrar, se introduce un spațiu între sfârșitul descrierii linkului între paranteze pătrate și linkul în sine între paranteze',
  info_arg_source: 'Sursa pentru traduceri; poate fi un fișier JS sau un director de fișiere de tradus',
  info_filter_applied: 'Filtrul aplicat cu succes înainte de a scrie: {{langFile}}',
  info_dryRun_key: '(funcționare uscată) nu scrie traducerea pentru cheie: {{key}}',
  info_dryRun_file: '(funcționare uscată) ar fi scris fișierul: {{langOut}}',
  warn_walk_readDir: 'mers( {{dir}} ): eroare de citire: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): a apărut o eroare la încercarea de a lista fișiere în directorul: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): această cale nu este un director',
  info_processDirectory_skippingExisting: 'ProcesDirectory( {{lang}} ): săriți peste fișierul existent: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Dosarul a fost scris: {{langFile}}'
}