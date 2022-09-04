export default {
  err_fatal: 'ФАТАЛНА ГРЕШКА: {{error}}',
  err_env_googleProjectId: 'Променливата на средата GOOGLE_TRANSLATE_PROJECT_ID не е дефинирана',
  err_env_googleCredentials: 'Променливата на средата GOOGLE_APPLICATION_CREDENTIALS не е дефинирана',
  err_option_processAs_invalid: 'Невалидна стойност на опцията за -p / --process-as: тази опция поддържа само стойности на \'text\' или \'html\'',
  err_infileNotFound: 'входен файл или директория не са намерени: {{ jsFile }}',
  err_cannotWriteSource: 'отказ за презаписване на входен източник (беше посочен в изходните езици): {{source}}',
  err_invalidOutfile: 'очаква се изходящият файл да съдържа „LANG“ (да се замени с {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: очаква се файлът {{ file }} да започне с „export default“ или „module.exports“, но намерен: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'невалиден json в {{file}}',
  err_processFile_writeFile: '*** Грешка при писане в outfile за {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Грешка при превода: {{e}}',
  err_processing: '*** Неочаквана грешка: {{e}}',
  warn_missing_close_notranslate_tag: 'В изхода от превода липсваше затварящ етикет, където се очакваше такъв. Етикет {{ label }} , номер на ред {{ lineNumber }} , ред: {{ line }}',
  info_summary: 'Услуга за бърз превод с Google Translate\n Версия {{VERSION}}',
  info_description: 'Инструмент за разработчици. С hokeylization, локализирането на вашето приложение може да бъде бързо, забавно и лесно!\n\n === Източник ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === НЕОБХОДИМИ променливи на средата ===\n * GOOGLE_TRANSLATE_PROJECT_ID: вашият проект в Google Преводач\n * GOOGLE_APPLICATION_CREDENTIALS: JSON файл с вашите идентификационни данни\n\n === ISO езикови кодове ===\n Когато посочвате ISO кодове (или език за въвеждане, или целеви езици), използвайте тези кодове:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO код за езици, от които да се превежда. По подразбиране е {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Типът може да бъде текст или html. По подразбиране е текст',
  info_option_match: 'Когато обработвате директория, вземете предвид само файлове, които съответстват на този регулярен израз',
  info_option_excludes: 'Когато обработвате директория, изрично изключете файлове, които съответстват на тези регулярни изрази, дори ако те биха съответствали на регулярния израз `-m` / `--match`',
  info_option_filter: 'Когато обработвате директория: 1) изисквайте този JS файл, който трябва да експортира функция с име `filter`, която приема параметър на низ и връща низ, и 2) приложете тази филтърна функция към всички изходни файлове, преди да бъдат записани',
  info_option_dryRun: 'Не карайте да пишете никакви файлове или да правите извиквания на API към Google Translate, но регистрирайте това, което би било направено',
  info_option_languages: 'Списък с разделени със запетаи ISO кодове за езици, на които да се превежда',
  info_option_outfile: 'За обработка на JS файл: запишете JS изход в този файл\n За обработка на директория: запишете файлове в тази директория, която ще бъде създадена, ако не съществува',
  info_option_force: 'Винаги генерирайте нови преводи, като презаписвате всички съществуващи изходни файлове',
  info_option_handlebars: 'Уверете се, че съдържанието на {{ handlebars }} е запазено такова, каквото е и НЕ е преведено',
  info_option_markdown: 'Уверете се, че [markdown](https://links) са запазени правилно, в противен случай се въвежда интервал между края на описанието на връзката в квадратни скоби и самата връзка в скоби',
  info_arg_source: 'Източникът за преводи; може да бъде JS файл или директория с файлове за превод',
  info_filter_applied: 'Филтърът е приложен успешно преди да напишете: {{langFile}}',
  info_dryRun_key: '(суха работа) не пише превод за ключ: {{key}}',
  info_dryRun_file: '(суха проба) би написал файл: {{langOut}}',
  warn_walk_readDir: 'ходене ( {{dir}} ): грешка при четене: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): възникна грешка при опит за изброяване на файлове в директория: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): този път не е директория',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): пропускане на съществуващ файл: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Файлът е записан: {{langFile}}'
}