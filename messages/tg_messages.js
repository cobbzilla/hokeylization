export default {
  err_fatal: 'Хатои марговар: {{error}}',
  err_env_googleProjectId: 'Тағйирёбандаи муҳити зист GOOGLE_TRANSLATE_PROJECT_ID муайян нашудааст',
  err_env_googleCredentials: 'Тағйирёбандаи муҳити зист GOOGLE_APPLICATION_CREDENTIALS муайян нашудааст',
  err_option_processAs_invalid: 'Қимати опсия беэътибор барои -p / --process-as: ин хосият танҳо арзишҳои "матн" ё "html" -ро дастгирӣ мекунад',
  err_infileNotFound: 'файли воридотӣ ё директория ёфт нашуд: {{ jsFile }}',
  err_cannotWriteSource: 'рад кардани баргардонидани манбаи вуруд (бо забонҳои баромад нишон дода шудааст): {{source}}',
  err_invalidOutfile: 'файли интизоршуда дорои \'LANG\' (бо {{lang}} иваз карда мешавад)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: файли интизории {{ file }} бо \'export default\' ё \'module.exports\' оғоз мешавад, аммо ёфт шуд: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json беэътибор дар {{file}}',
  err_processFile_writeFile: '*** Хатогӣ ҳангоми навиштан ба файл барои {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Хатогӣ дар тарҷума: {{e}}',
  err_processing: '*** Хатои ғайричашмдошт: {{e}}',
  warn_missing_close_notranslate_tag: 'Баромади тарҷума теги пӯшида набуд, ки дар он ҷо интизор мерафт. Нишон {{ label }} , рақами сатр {{ lineNumber }} , сатр: {{ line }}',
  info_summary: 'Хидмати тарҷумаи зуд бо истифода аз Google Translate\n Версия {{VERSION}}',
  info_description: 'Восита барои таҳиягарон. Бо hokeylization, маҳаллисозии барномаи шумо метавонад зуд, шавқовар ва осон бошад!\n\n === Манбаъ ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Тағйирёбандаҳои муҳити зарурӣ ===\n * GOOGLE_TRANSLATE_PROJECT_ID: лоиҳаи Google Translate шумо\n * GOOGLE_APPLICATION_CREDENTIALS: файли JSON эътимодномаи шумо\n\n === Рамзҳои забони ISO ===\n Ҳангоми муайян кардани кодҳои ISO (забони вуруд ё забонҳои мавриди ҳадаф) ин рамзҳоро истифода баред:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Рамзи ISO барои забонҳо барои тарҷума аз. Пешфарз {{DEFAULT_LOCALE}} аст',
  info_option_processAs: 'Навъ метавонад матн ё html бошад. Пешфарз матн аст',
  info_option_match: 'Ҳангоми коркарди директория, танҳо файлҳоеро, ки ба ин регекс мувофиқат мекунанд, баррасӣ кунед',
  info_option_excludes: 'Ҳангоми коркарди феҳрист, файлҳоеро, ки ба ин регексҳо мувофиқат мекунанд, истисно кунед, ҳатто агар онҳо ба regex `-m` / `--match` мувофиқат кунанд',
  info_option_filter: 'Ҳангоми коркарди директория: 1) ин файли JS-ро талаб кунед, ки он бояд функсияеро бо номи `филтр` содир кунад, ки параметри сатрро мегирад ва сатрро бармегардонад ва 2) ин функсияи филтрро ба ҳамаи файлҳои баромад пеш аз навиштани онҳо татбиқ кунед',
  info_option_dryRun: 'Ба Google Translate ягон файл нависед ё ягон API занг назанед, аммо қайд кунед, ки чӣ кор карда мешуд',
  info_option_languages: 'Рӯйхати бо вергул ҷудошудаи кодҳои ISO барои забонҳо барои тарҷума',
  info_option_outfile: 'Барои коркарди файли JS: баромади JS-ро ба ин файл нависед\n Барои коркарди директория: файлҳоро ба ин директория нависед, ки дар сурати мавҷуд набудани он сохта мешаванд',
  info_option_force: 'Ҳамеша тарҷумаҳои тару тоза эҷод кунед ва баргардонидани ҳама файлҳои баромади мавҷуда',
  info_option_handlebars: 'Боварӣ ҳосил кунед, ки мундариҷаи {{ handlebars }} нигоҳ дошта мешавад ва тарҷума нашудааст',
  info_option_markdown: 'Боварӣ ҳосил кунед, ки [markdown](https://links) дуруст нигоҳ дошта мешавад, вагарна байни охири тавсифи истинод дар қавсҳои мураббаъ ва худи истинод дар қавс фосила гузошта мешавад.',
  info_arg_source: 'Сарчашмаи тарҷумаҳо; метавонад файли JS ё феҳристи файлҳо барои тарҷума бошад',
  info_filter_applied: 'Филтр пеш аз навиштан бомуваффақият татбиқ карда шуд: {{langFile}}',
  info_dryRun_key: '(давраи хушк) тарҷумаи калидро наменависад: {{key}}',
  info_dryRun_file: '(давраи хушк) метавонист файли навишт: {{langOut}}',
  warn_walk_readDir: 'роҳ рафтан ( {{dir}} ): хатои хондан: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles ( {{dir}} ): ҳангоми номбар кардани файлҳо дар директория хатогӣ рух дод: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ин роҳ директория нест',
  info_processDirectory_skippingExisting: 'processDirectory ( {{lang}} ): гузариш аз файли мавҷуда: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Файл навишта шудааст: {{langFile}}',
  err_option_json_notFound: 'Файли JSON ёфт нашуд: {{ jsonFile }}',
  err_option_json_errorReading: 'Ҳангоми хондан ё таҳлили файли JSON хатогӣ рух дод {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Ягон забонҳои тарҷума муайян нашудааст. `-l` / `--languages`-ро истифода баред ва рӯйхати рамзҳои забони ISO-ро бо вергул ҷудо кунед',
  err_option_outfile_required: 'Ягон файл ё феҳристи баромад муайян карда нашудааст. Барои муайян кардани файл ё директорияи баромад `-o` / `--outfile`-ро истифода баред',
  err_noSources: 'ягон файли манбаъ барои тарҷума пешбинӣ нашудааст',
  info_option_jsonFile: 'Фармонҳои зиёди хоккейро, ки дар файли JSON муайян шудаанд, иҷро кунед. Агар ягон файли JSON дода нашавад, фармон файлеро бо номи "hokey.json" дар феҳристи ҷорӣ ҷустуҷӯ мекунад',
  info_option_indexFile: 'Барои тарҷумаҳо файли индекс эҷод кунед. Номи файл бояд бо `.html`, `.md` ё `.txt` хотима ёбад, агар шумо қолабро бо `-A` / `--index-template` таъмин накунед',
  info_option_indexTemplate: 'Ин метавонад \'html\', \'markdown\', \'matn\' ё роҳ ба қолаби дастаки шумо бошад. Ин қолаб ҳангоми сохтани файли индекс истифода мешавад. Барои мисолҳо ба қолибҳои пешфарз дар коди сарчашмаи hokeylization нигаред',
  info_option_regular: 'Файлҳои сарчашмаро ҳамчун файлҳои муқаррарӣ тарҷума кунед, на тарҷумаи объектҳои JavaScript-ро, ки захираҳои сатр доранд. Парчами `-M`/`--markdown` ин парчамро дар назар дорад.',
  info_arg_sources: 'Манбаъ(ҳо) барои тарҷумаҳо; ин метавонад як ё якчанд файл ё директорияҳои JavaScript бошад',
  info_jsonProcessing_start: 'Танзимоти коркарди JSON: {{name}}',
  err_index_singleFileMultipleSources: 'Як файли индекс муайян карда шуд, аммо файлҳои воридотии сершумор вуҷуд доранд. Ба ҷои файл барои индекс директорияро муайян кунед',
  err_index_targetDirAndNoTypeOrTemplate: 'Феҳристи мақсаднок барои индекс муайян карда шуд, аммо ягон қолаби индекс муайян карда нашудааст. Барои интихоби қолаб `-A` / `--indexTemplate`-ро истифода баред',
  err_index_parentDirDoesNotExist: 'Феҳристи волидайни индекс вуҷуд надорад: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Номи файл васеъшавӣ надорад, бинобар ин навъи қолаб муайян карда намешавад: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Номи файл васеъшавии беэътибор дорад, бинобар ин навъи қолаб муайян карда намешавад: {{ file }}',
  err_index_templateLoadingError: 'Ҳангоми боркунии қолаби фармоишӣ хатогӣ рух дод {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Ҳангоми тартиб додани қолаби фармоишӣ хатогӣ рух дод {{ file }} : {{ e }}',
  info_index_wroteFile: 'Файли индекс бомуваффақият сохта шуд: {{ indexFile }}',
  label_indexOfTranslations: 'Индекси тарҷумаҳо',
  label_findYourLanguageCode: 'Рамзи забони худро пайдо кунед',
  err_processing_unknown: '*** Хатои ғайричашмдошт: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Ягон файли баромад барои забони {{ lang }} тавлид нашудааст, аз ин рӯ он аз индекс хориҷ карда мешавад',
  err_filter_loading: 'Филтр ёфт нашуд: {{ filter }}\n Филтр дар ҳеҷ яке аз инҳо ёфт нашуд: феҳристи ҷорӣ, феҳристи ./.hokey-filters, феҳристи ${HOME}/.hokey-filters, ва дар феҳристи филтрҳои дарунсохт'
}