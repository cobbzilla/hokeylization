export default {
  err_fatal: 'ФАТАЛЬНАЯ ОШИБКА: {{error}}',
  err_env_googleProjectId: 'Переменная среды GOOGLE_TRANSLATE_PROJECT_ID не определена',
  err_env_googleCredentials: 'Переменная среды GOOGLE_APPLICATION_CREDENTIALS не определена',
  err_option_processAs_invalid: 'Недопустимое значение параметра для -p / --process-as: этот параметр поддерживает только значения «текст» или «html».',
  err_infileNotFound: 'входной файл или каталог не найден: {{ jsFile }}',
  err_cannotWriteSource: 'отказ от перезаписи источника ввода (было указано в выходных языках): {{source}}',
  err_invalidOutfile: 'ожидается, что outfile будет содержать \'LANG\' (заменить на {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: ожидается, что файл {{ file }} будет начинаться с «экспорт по умолчанию» или «module.exports», но найдено: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'неверный json в {{file}}',
  err_processFile_writeFile: '*** Ошибка записи в выходной файл для {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Ошибка перевода: {{e}}',
  err_processing: '*** Непредвиденная ошибка: {{e}}',
  warn_missing_close_notranslate_tag: 'В выводе перевода отсутствовал закрывающий тег там, где он ожидался. Метка {{ label }} , номер строки {{ lineNumber }} , строка: {{ line }}',
  info_summary: 'Сервис быстрого перевода с помощью Google Translate\n Версия {{VERSION}}',
  info_description: 'Инструмент для разработчиков. Благодаря хокейлизации локализация вашего приложения может быть быстрой, веселой и легкой!\n\n === Источник ===\n GitHub: https://github.com/cobbzilla/hokeylization\n нпм: https://www.npmjs.com/package/hokeylization\n\n === НЕОБХОДИМЫЕ переменные окружения ===\n * GOOGLE_TRANSLATE_PROJECT_ID: ваш проект Google Translate.\n * GOOGLE_APPLICATION_CREDENTIALS: файл JSON с вашими учетными данными.\n\n === Коды языков ISO ===\n При указании кодов ISO (либо языка ввода, либо языков перевода) используйте следующие коды:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Код ISO для языков для перевода. По умолчанию {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Тип может быть текстовым или html. По умолчанию текст',
  info_option_match: 'При обработке каталога учитывайте только те файлы, которые соответствуют этому регулярному выражению.',
  info_option_excludes: 'При обработке каталога явно исключайте файлы, соответствующие этим регулярным выражениям, даже если они соответствуют регулярному выражению `-m`/`--match`',
  info_option_filter: 'При обработке каталога: 1) требуется этот файл JS, который должен экспортировать функцию с именем `filter`, которая принимает строковый параметр и возвращает строку, и 2) применять эту функцию фильтра ко всем выходным файлам до их записи.',
  info_option_dryRun: 'Не записывайте файлы и не делайте никаких вызовов API к Google Translate, но записывайте, что было бы сделано.',
  info_option_languages: 'Разделенный запятыми список кодов ISO для языков, на которые необходимо перевести',
  info_option_outfile: 'Для обработки файла JS: запишите вывод JS в этот файл.\n Для обработки каталога: записывайте файлы в этот каталог, который будет создан, если он не существует',
  info_option_force: 'Всегда генерируйте свежие переводы, перезаписывая любые существующие выходные файлы',
  info_option_handlebars: 'Убедитесь, что {{ handlebars }} содержимое сохранено как есть и НЕ переведено',
  info_option_markdown: 'Убедитесь, что [markdown](https://links) сохранены правильно, в противном случае между концом описания ссылки в квадратных скобках и самой ссылкой в круглых скобках вводится пробел.',
  info_arg_source: 'Источник переводов; может быть файлом JS или каталогом файлов для перевода',
  info_filter_applied: 'Фильтр успешно применен перед записью: {{langFile}}',
  info_dryRun_key: '(пробный прогон) не пишется перевод для ключа: {{key}}',
  info_dryRun_file: '(пробный прогон) записал бы файл: {{langOut}}',
  warn_walk_readDir: 'прогулка( {{dir}} ): ошибка чтения: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): произошла ошибка при попытке перечислить файлы в каталоге: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): этот путь не является каталогом',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): пропуская существующий файл: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Файл был записан: {{langFile}}',
  err_option_json_notFound: 'Файл JSON не найден: {{ jsonFile }}',
  err_option_json_errorReading: 'Произошла ошибка при чтении или анализе файла JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Языки перевода не указаны. Используйте `-l` / `--languages` и укажите разделенный запятыми список языковых кодов ISO',
  err_option_outfile_required: 'Не указан выходной файл или каталог. Используйте `-o`/`--outfile`, чтобы указать выходной файл или каталог',
  err_noSources: 'исходные файлы для перевода не предоставлены',
  info_option_jsonFile: 'Запустите несколько горячих команд, указанных в файле JSON. Если файл JSON не указан, команда ищет файл с именем «hokey.json» в текущем каталоге.',
  info_option_indexFile: 'Создайте индексный файл для переводов. Имя файла должно заканчиваться на `.html`, `.md` или `.txt`, если только вы не указали шаблон с `-A`/`--index-template`',
  info_option_indexTemplate: 'Это может быть «html», «уценка», «текст» или путь к вашему собственному шаблону руля. Этот шаблон используется при создании индексного файла. Посмотрите шаблоны по умолчанию в исходном коде хокейлизации для примеров.',
  info_option_regular: 'Переводите исходные файлы как обычные файлы, а не объекты JavaScript, содержащие строковые ресурсы. Флаг `-M`/`--markdown` подразумевает этот флаг.',
  info_arg_sources: 'Источник(и) для переводов; это может быть один или несколько файлов или каталогов JavaScript',
  info_jsonProcessing_start: 'Конфигурация обработки JSON: {{name}}',
  err_index_singleFileMultipleSources: 'Был указан один индексный файл, но имеется несколько входных файлов. Укажите каталог вместо файла для индекса',
  err_index_targetDirAndNoTypeOrTemplate: 'Целевой каталог был указан для индекса, но шаблон индекса не был указан. Используйте `-A`/`--indexTemplate` для выбора шаблона',
  err_index_parentDirDoesNotExist: 'Родительский каталог индекса не существует: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Имя файла не имеет расширения, поэтому невозможно определить тип шаблона: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Имя файла имеет недопустимое расширение, поэтому невозможно определить тип шаблона: {{ file }}',
  err_index_templateLoadingError: 'Произошла ошибка при загрузке пользовательского шаблона {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Произошла ошибка при компиляции пользовательского шаблона {{ file }} : {{ e }}',
  info_index_wroteFile: 'Индексный файл успешно создан: {{ indexFile }}',
  label_indexOfTranslations: 'Указатель переводов',
  label_findYourLanguageCode: 'Найдите код своего языка',
  err_processing_unknown: '*** Непредвиденная ошибка: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Для языка {{ lang }} не создан выходной файл, поэтому он будет исключен из индекса.',
  err_filter_loading: 'Фильтр не найден: {{ filter }}\n Фильтр не найден ни в одном из следующих каталогов: текущем каталоге, каталоге ./.hokey-filters, каталоге ${HOME}/.hokey-filters или каталоге встроенных фильтров.'
}