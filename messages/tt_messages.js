export default {
  err_fatal: 'ATлемле хата: {{error}}',
  err_env_googleProjectId: 'Әйләнә-тирә үзгәрүчән GOOGLE_TRANSLATE_PROJECT_ID билгеләнмәгән',
  err_env_googleCredentials: 'Әйләнә-тирә үзгәрүчән GOOGLE_APPLICATION_CREDENTIALS билгеләнмәгән',
  err_option_processAs_invalid: '-P / --process-as өчен яраксыз вариант бәясе: бу параметр \'текст\' яки \'html\' кыйммәтләрен генә хуплый.',
  err_infileNotFound: 'кертү файлы яки каталог табылмады: {{ jsFile }}',
  err_cannotWriteSource: 'кертү чыганагын язудан баш тарту (чыгару телләрендә күрсәтелде): {{source}}',
  err_invalidOutfile: '\'LANG\' булырга тиеш көтелгән кием ( {{lang}} белән алыштырылырга)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: көтелгән файл {{ file }} \'default default\' яки \'module.exports\' белән башланыр, ләкин табылган: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'яраксыз json {{file}}',
  err_processFile_writeFile: '*** {{lang}} : {{langOut}} : {{e}} өчен аффилга язуда хата',
  err_processFile_error: '*** Тәрҗемә итүдә хата: {{e}}',
  err_processing: '*** Көтелмәгән хата: {{e}}',
  warn_missing_close_notranslate_tag: 'Тәрҗемәдән алынган нәтиҗәләр көтелгән ябылу билгесен югалтты. Ярлык {{ label }} , сызык саны {{ lineNumber }} , юл: {{ line }}',
  info_summary: 'Google Translate ярдәмендә тиз тәрҗемә хезмәте\n Вариант {{VERSION}}',
  info_description: 'Төзүчеләр өчен корал. Хокейлизация ярдәмендә кушымтаны локализацияләү тиз, кызыклы һәм җиңел булырга мөмкин!\n\n === Чыганак ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === ТАЛӘП әйләнә-тирә үзгәрүләр ===\n * GOOGLE_TRANSLATE_PROJECT_ID: сезнең Google Тәрҗемә проекты\n * GOOGLE_APPLICATION_CREDENTIALS: сезнең таныклык JSON файл\n\n === ISO тел кодлары ===\n ISO кодларын күрсәткәндә (кертү теле яки максатлы телләр) бу кодларны кулланыгыз:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Телләрдән тәрҗемә итү өчен ISO коды. Килешү {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Тип текст яки html булырга мөмкин. Килешү текст',
  info_option_match: 'Каталогны эшкәрткәндә, бу рекекска туры килгән файлларны гына карагыз',
  info_option_excludes: 'Каталогны эшкәрткәндә, бу рекексларга туры килгән файлларны ачыктан-ачык чыгарыгыз, хәтта алар "-m" / "--match" regex белән туры килсә дә.',
  info_option_filter: 'Каталогны эшкәрткәндә: 1) бу JS файлын таләп итегез, ул "фильтр" исемле функцияне экспортларга тиеш, ул параметрны ала һәм сызыкны кире кайтара, 2) бу фильтр функциясен язылганчы барлык чыгару файлларына кулланырга.',
  info_option_dryRun: 'Google Translate\'ка бернинди файл язмагыз яки API шалтыратмагыз, ләкин нәрсә эшләнгәнен языгыз',
  info_option_languages: 'Телләргә тәрҗемә итү өчен ISO кодларының үтемле аерылган исемлеге',
  info_option_outfile: 'JS файл эшкәртү өчен: бу файлга JS чыгаруны языгыз\n Белешмәлекне эшкәртү өчен: файлларны бу каталогка языгыз, ул булмаса барлыкка киләчәк',
  info_option_force: 'Existingәрвакыт яңа тәрҗемә ясагыз, булган файлларны яңадан языгыз',
  info_option_handlebars: '{{ handlebars }} эчтәлеге элеккечә сакланган һәм тәрҗемә ителмәгән',
  info_option_markdown: '[Markdown] (https: // сылтамалар) дөрес сакланганлыгына инаныгыз, югыйсә квадрат кашыкларда сылтама тасвирламасы ахыры белән кәрәз эчендә сылтама кертелә.',
  info_arg_source: 'Тәрҗемә чыганагы; JS файл яки тәрҗемә итү өчен файллар каталогы булырга мөмкин',
  info_filter_applied: 'Фильтр язу алдыннан уңышлы кулланылган: {{langFile}}',
  info_dryRun_key: '(коры йөгерү) ачкыч өчен тәрҗемә язмый: {{key}}',
  info_dryRun_file: '(коры йөгерү) язылган файл булыр иде: {{langOut}}',
  warn_walk_readDir: 'йөрү ( {{dir}} ): уку хата: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles ( {{dir}} ): файлларны каталогка кертергә тырышканда хата килеп чыкты: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles ( {{dir}} ): бу юл каталог түгел',
  info_processDirectory_skippingExisting: 'processDirectory ( {{lang}} ): булган файлны калдыру: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Файл язылган: {{langFile}}',
  err_option_json_notFound: 'JSON файл табылмады: {{ jsonFile }}',
  err_option_json_errorReading: 'JSON файлын уку яки анализлауда хата килеп чыкты {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Тәрҗемә телләре күрсәтелмәгән. `-L` /` --languages\'ны кулланыгыз һәм ISO тел кодларының үтем белән аерылган исемлеген күрсәтегез',
  err_option_outfile_required: 'Чыгыш файллары яки каталог күрсәтелмәгән. Чыгыш файлын яки каталогын күрсәтү өчен `-o` /` --outfile` кулланыгыз',
  err_noSources: 'тәрҗемә өчен чыганак файллары юк',
  info_option_jsonFile: 'JSON файлында күрсәтелгән берничә хоккей командаларын эшләгез. Әгәр дә JSON файллары бирелмәсә, боерык хәзерге каталогта \'hokey.json\' исемле файл эзли',
  info_option_indexFile: 'Тәрҗемәләр өчен индекс файл ясагыз. Файлның исеме ".html", ".md" яки ".txt" белән тәмамланырга тиеш, "-A" / "--index-template" белән шаблон бирмәсәгез.',
  info_option_indexTemplate: 'Бу \'html\', \'markdown\', \'text\' яки үзегезнең тоткыч шаблонына юл булырга мөмкин. Бу шаблон индекс файлын ясаганда кулланыла. Мисаллар өчен хоккейлаштыру чыганагы кодындагы килешенгән шаблоннарны карагыз',
  info_option_regular: 'Чыганак файлларын JavaScript объектларын тәрҗемә итмичә, регуляр файллар итеп тәрҗемә итегез. "-M" / "--markdown" флагы бу флагны аңлата.',
  info_arg_sources: 'Тәрҗемә өчен чыганак (лар); бу бер яки берничә JavaScript файллары яки каталоглары булырга мөмкин',
  info_jsonProcessing_start: 'JSON эшкәртү конфигурациясе: {{name}}',
  err_index_singleFileMultipleSources: 'Бер индекс файл күрсәтелде, ләкин берничә кертү файллары бар. Индекс өчен файл урынына каталогны күрсәтегез',
  err_index_targetDirAndNoTypeOrTemplate: 'Индекс өчен максатлы каталог күрсәтелде, ләкин индекс шаблоны күрсәтелмәде. Шаблон сайлау өчен `-A` /` --indexTemplate` кулланыгыз',
  err_index_parentDirDoesNotExist: 'Индексның төп каталогы юк: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Файлның исеме юк, шуңа күрә шаблон төрен билгеләргә ярамый: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Файлның исеме яраксыз киңәйтелгән, шуңа күрә шаблон төрен билгеләргә ярамый: {{ file }}',
  err_index_templateLoadingError: 'Гадәттәге шаблонны йөкләүдә хата килеп чыкты {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Гадәттәге шаблонны төзүдә хата килеп чыкты {{ file }} : {{ e }}',
  info_index_wroteFile: 'Уңышлы ясалган индекс файл: {{ indexFile }}',
  label_indexOfTranslations: 'Тәрҗемә индексы',
  label_findYourLanguageCode: 'Тел кодыгызны табыгыз',
  err_processing_unknown: '*** Көтелмәгән хата: {{e}}\n {{e.stack}}',
  warn_missingLangFile: '{{ lang }} теле өчен чыгару файллары ясалмады, шуңа күрә ул индекстан чыгарылачак',
  err_filter_loading: 'Фильтр табылмады: {{ filter }}\n Фильтр берсендә дә табылмады: хәзерге каталог, ./.hokey-filters каталогы, $ {HOME} /. Хоки-фильтрлар каталогы, яки урнаштырылган фильтрлар каталогы'
}