export default {
  err_fatal: 'BŁĄD KRYTYCZNY: {{error}}',
  err_env_googleProjectId: 'Nie zdefiniowano zmiennej środowiskowej GOOGLE_TRANSLATE_PROJECT_ID',
  err_env_googleCredentials: 'Zmienna środowiskowa GOOGLE_APPLICATION_CREDENTIALS nie została zdefiniowana',
  err_option_processAs_invalid: 'Nieprawidłowa wartość opcji dla -p / --process-as : ta opcja obsługuje tylko wartości „text” lub „html”',
  err_infileNotFound: 'Nie znaleziono pliku wejściowego lub katalogu: {{ jsFile }}',
  err_cannotWriteSource: 'odmowa zastąpienia źródła wejściowego (została określona w językach wyjściowych): {{source}}',
  err_invalidOutfile: 'oczekiwano, że plik wyjściowy będzie zawierał „LANG” (do zastąpienia przez {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: oczekiwano pliku {{ file }} rozpoczynającego się od „export default” lub „module.exports”, ale znaleziono: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'nieprawidłowy json w {{file}}',
  err_processFile_writeFile: '*** Błąd zapisu do pliku wyjściowego dla {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Błąd w tłumaczeniu: {{e}}',
  err_processing: '*** Nieoczekiwany błąd: {{e}}',
  info_summary: 'Usługa szybkiego tłumaczenia za pomocą Tłumacza Google\n Wersja {{VERSION}}',
  info_description: '=== Źródło ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === WYMAGANE zmienne środowiskowe ===\n * GOOGLE_TRANSLATE_PROJECT_ID: Twój projekt Tłumacza Google\n * GOOGLE_APPLICATION_CREDENTIALS: plik JSON Twoich danych logowania\n\n === Kody języków ISO ===\n Określając kody ISO (język wprowadzania lub języki docelowe), użyj tych kodów:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Kod ISO dla języków do tłumaczenia. Wartość domyślna to {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Typem może być tekst lub html. Domyślnie jest tekst',
  info_option_match: 'Podczas przetwarzania katalogu bierz pod uwagę tylko te pliki, które pasują do tego wyrażenia regularnego',
  info_option_excludes: 'Podczas przetwarzania katalogu wyraźnie wyklucz pliki, które pasują do tych wyrażeń regularnych, nawet jeśli pasowałyby do wyrażenia regularnego `-m` / `--match`',
  info_option_filter: 'Podczas przetwarzania katalogu: 1) wymagaj tego pliku JS, który musi wyeksportować funkcję o nazwie `filter`, która pobiera parametr ciągu i zwraca ciąg, oraz 2) zastosuj tę funkcję filtrowania do wszystkich plików wyjściowych, zanim zostaną zapisane',
  info_option_dryRun: 'Nie zapisuj żadnych plików ani nie wywołuj żadnych wywołań API do Tłumacza Google, ale rejestruj, co zostałoby zrobione',
  info_option_languages: 'Lista rozdzielonych przecinkami kodów ISO dla języków, na które należy przetłumaczyć',
  info_option_outfile: 'Do przetwarzania plików JS: zapisz dane wyjściowe JS do tego pliku\n Do przetwarzania katalogów: zapisz pliki do tego katalogu, który zostanie utworzony, jeśli nie istnieje',
  info_option_force: 'Zawsze generuj świeże tłumaczenia, nadpisując istniejące pliki wyjściowe',
  info_option_handlebars: 'Upewnij się, że treść {{ handlebars }} jest zachowywana tak, jak jest i NIE jest przetłumaczona',
  info_option_markdown: 'Upewnij się, że [markdown](https://links) są zachowywane prawidłowo, w przeciwnym razie między końcem opisu linku w nawiasach kwadratowych a samym linkiem w nawiasach zostanie wprowadzona spacja',
  info_arg_source: 'Źródło tłumaczeń; może być plikiem JS lub katalogiem plików do przetłumaczenia',
  info_filter_applied: 'Filtr został pomyślnie zastosowany przed zapisaniem: {{langFile}}',
  info_dryRun_key: '(praca na sucho) nie piszę tłumaczenia dla klucza: {{key}}',
  info_dryRun_file: '(praca na sucho) zapisałby plik: {{langOut}}',
  warn_walk_readDir: 'spacer ( {{dir}} ): odczyt błędu: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): wystąpił błąd podczas próby wyświetlenia plików w katalogu: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ta ścieżka nie jest katalogiem',
  info_processDirectory_skippingExisting: 'processDirectory ( {{lang}} ): pomijanie istniejącego pliku: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Plik został napisany: {{langFile}}'
}