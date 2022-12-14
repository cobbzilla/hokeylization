export default {
  err_fatal: 'ӨЛҮМЧҮ КАТА: {{error}}',
  err_env_googleProjectId: 'GOOGLE_TRANSLATE_PROJECT_ID чөйрө өзгөрмөсү аныкталган эмес',
  err_env_googleCredentials: 'GOOGLE_APPLICATION_CREDENTIALS чөйрө өзгөрмөсү аныкталган эмес',
  err_option_processAs_invalid: '-p / --process-as үчүн жараксыз параметр мааниси: бул параметр "текст" же "html" маанилерин гана колдойт',
  err_infileNotFound: 'киргизүү файлы же каталог табылган жок: {{ jsFile }}',
  err_cannotWriteSource: 'киргизүү булагын кайра жазуудан баш тартуу (чыгарма тилдеринде көрсөтүлгөн): {{source}}',
  err_invalidOutfile: 'күтүлгөн сырт файлда \'LANG\' болушу керек ( {{lang}} менен алмаштырылышы керек)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: күтүлгөн файл {{ file }} "экспорттун демейки" же "module.exports" менен башталышы, бирок табылган: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} жылы жараксыз json',
  err_processFile_writeFile: '*** {{lang}} үчүн сырткы файлга жазуу катасы: {{langOut}} : {{e}}',
  err_processFile_error: '*** Которуу катасы: {{e}}',
  err_processing: '*** Күтүлбөгөн ката: {{e}}',
  warn_missing_close_notranslate_tag: 'Котормодон чыккан жыйынтыкта күтүлгөн жабуу теги жок болгон. Энбелги {{ label }} , сап номери {{ lineNumber }} , сап: {{ line }}',
  info_summary: 'Google Translate аркылуу тез котормо кызматы\n Версия {{VERSION}}',
  info_description: 'Иштеп чыгуучулар үчүн курал. Хокейлизация менен колдонмоңузду локалдаштыруу тез, кызыктуу жана оңой болушу мүмкүн!\n\n === Булак ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === КЕРЕК чөйрө өзгөрмөлөрү ===\n * GOOGLE_TRANSLATE_PROJECT_ID: сиздин Google Translate долбооруңуз\n * GOOGLE_APPLICATION_CREDENTIALS: сиздин эсептик дайындарыңыз JSON файлы\n\n === ISO тил коддору ===\n ISO коддорун көрсөтүүдө (киргизүү тили же максаттуу тилдер) бул коддорду колдонуңуз:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Которуу үчүн тилдер үчүн ISO коду. Демейки {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Түрү текст же html болушу мүмкүн. Демейки - текст',
  info_option_match: 'Каталогду иштеп жатканда, ушул регекске дал келген файлдарды гана эске алыңыз',
  info_option_excludes: 'Каталогду иштетип жатканда, бул регекстерге дал келген файлдарды, алар `-m` / `--match` регексине дал келсе да, ачыктан чыгарбаңыз.',
  info_option_filter: 'Каталогду иштетүүдө: 1) бул JS файлын талап кылыңыз, ал сап параметрин алып, сапты кайтарып берүүчү "фильтр" деп аталган функцияны экспорттоо керек жана 2) бул чыпкалоо функциясын бардык чыгуу файлдарына алар жазылганга чейин колдонуңуз',
  info_option_dryRun: 'Google Translate\'ге эч кандай файлдарды жазууга же API чалууларына жол бербеңиз, бирок эмне кылынарын журналга жазыңыз',
  info_option_languages: 'Которула турган тилдер үчүн ISO коддорунун үтүр менен бөлүнгөн тизмеси',
  info_option_outfile: 'JS файлын иштетүү үчүн: бул файлга JS чыгарууну жазыңыз\n Каталогду иштетүү үчүн: бул каталогго файлдарды жазыңыз, ал жок болсо түзүлөт',
  info_option_force: 'Ар дайым жаңы котормолорду жаратып, бар болгон чыгаруу файлдарынын үстүнөн жазыңыз',
  info_option_handlebars: '{{ handlebars }} мазмуну ошол бойдон сакталышын жана которулбагандыгын текшериңиз',
  info_option_markdown: '[markdown](https://links) туура сакталганын текшериңиз, антпесе төрт бурчтуу кашаадагы шилтеменин сыпаттамасынын аягы менен кашаанын ичиндеги шилтеменин ортосунда боштук киргизилет',
  info_arg_source: 'Котормолордун булагы; JS файлы же которуу үчүн файлдардын каталогу болушу мүмкүн',
  info_filter_applied: 'Чыпка жазуудан мурун ийгиликтүү колдонулду: {{langFile}}',
  info_dryRun_key: '(кургак чуркоо) ачкыч үчүн котормо жазуу эмес: {{key}}',
  info_dryRun_file: '(кургак иштөө) файлды жазмак: {{langOut}}',
  warn_walk_readDir: 'басуу ( {{dir}} ): ката окуу: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): каталогдогу файлдарды тизмелөө аракетинде ката кетти: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): бул жол каталог эмес',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): учурдагы файлды өткөрүп жиберүү: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Файл жазылган: {{langFile}}',
  err_option_json_notFound: 'JSON файл табылган жок: {{ jsonFile }}',
  err_option_json_errorReading: 'JSON файлын окууда же талдоодо ката кетти {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Котормо тилдери көрсөтүлгөн эмес. `-l` / `--languages` колдонуңуз жана ISO тил коддорунун үтүр менен бөлүнгөн тизмесин көрсөтүңүз',
  err_option_outfile_required: 'Эч кандай чыгаруу файлы же каталогу көрсөтүлгөн эмес. Чыгуу файлын же каталогду көрсөтүү үчүн `-o` / `--outfile` колдонуңуз',
  err_noSources: 'которуу үчүн эч кандай булак файлдары берилген',
  info_option_jsonFile: 'JSON файлында көрсөтүлгөн бир нече hokey буйруктарын иштетиңиз. Эгерде JSON файлы берилбесе, буйрук учурдагы каталогдон "hokey.json" деп аталган файлды издейт',
  info_option_indexFile: 'Котормолор үчүн индекс файлын түзүңүз. Файлдын аты `.html`, `.md` же `.txt` менен аякташы керек, эгерде сиз `-A` / `--index-template` менен үлгү бербесеңиз',
  info_option_indexTemplate: 'Бул \'html\', \'markdown\', \'текст\' же сиздин руль шаблонуңузга жол болушу мүмкүн. Бул шаблон индекс файлын түзүүдө колдонулат. Мисалдар үчүн hokeylization баштапкы кодундагы демейки калыптарды караңыз',
  info_option_regular: 'Сап ресурстарын камтыган JavaScript объекттерин которуу эмес, баштапкы файлдарды кадимки файлдар катары которуңуз. `-M` / `--markdown` желеги бул желекти билдирет.',
  info_arg_sources: 'Котормолордун булагы(лары); бул бир же бир нече JavaScript файлдары же каталогдору болушу мүмкүн',
  info_jsonProcessing_start: 'JSON иштетүү конфигурациясы: {{name}}',
  err_index_singleFileMultipleSources: 'Бир индекс файлы көрсөтүлгөн, бирок бир нече киргизүү файлдары бар. Индекс үчүн файлдын ордуна каталогду көрсөтүңүз',
  err_index_targetDirAndNoTypeOrTemplate: 'Индекс үчүн максаттуу каталог көрсөтүлгөн, бирок эч кандай индекс шаблону көрсөтүлгөн эмес. Үлгү тандоо үчүн `-A` / `--indexTemplate` колдонуңуз',
  err_index_parentDirDoesNotExist: 'Индекстин башкы каталогу жок: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Файлдын аталышында кеңейтүү жок, андыктан калыптын түрүн аныктоо мүмкүн эмес: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Файлдын аталышында жараксыз кеңейтүү бар, андыктан калыптын түрүн аныктоо мүмкүн эмес: {{ file }}',
  err_index_templateLoadingError: 'Ыңгайлаштырылган шаблонду жүктөөдө ката кетти {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Ыңгайлаштырылган шаблонду түзүүдө ката кетти {{ file }} : {{ e }}',
  info_index_wroteFile: 'Ийгиликтүү индекс файлы түзүлдү: {{ indexFile }}',
  label_indexOfTranslations: 'Котормолордун индекси',
  label_findYourLanguageCode: 'Тил кодуңузду табыңыз',
  err_processing_unknown: '*** Күтүлбөгөн ката: {{e}}\n {{e.stack}}',
  warn_missingLangFile: '{{ lang }} тили үчүн эч кандай чыгаруу файлы түзүлгөн жок, андыктан ал индекстен чыгарылат',
  err_filter_loading: 'Чыпка табылган жок: {{ filter }}\n Чыпка төмөнкүлөрдүн эч биринде табылган жок: учурдагы каталогдо, ./.hokey-filters каталогунда, ${HOME}/.hokey-filters каталогунда, же камтылган чыпкалар каталогунда'
}