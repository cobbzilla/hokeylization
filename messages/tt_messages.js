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
  info_summary: 'Google Translate ярдәмендә тиз тәрҗемә хезмәте\n Вариант {{VERSION}}',
  info_description: '=== Чыганак ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === ТАЛӘП әйләнә-тирә үзгәрүләр ===\n * GOOGLE_TRANSLATE_PROJECT_ID: сезнең Google Тәрҗемә проекты\n * GOOGLE_APPLICATION_CREDENTIALS: сезнең таныклык JSON файл\n\n === ISO тел кодлары ===\n ISO кодларын күрсәткәндә (кертү теле яки максатлы телләр) бу кодларны кулланыгыз:\n https://cloud.google.com/translate/docs/languages',
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
  info_processDirectory_fileWritten: 'Файл язылган: {{langFile}}'
}