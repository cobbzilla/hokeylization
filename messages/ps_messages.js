export default {
  err_fatal: 'وژونکې تېروتنه: {{error}}',
  err_env_googleProjectId: 'د چاپیریال متغیر GOOGLE_TRANSLATE_PROJECT_ID ندی تعریف شوی',
  err_env_googleCredentials: 'د چاپیریال متغیر GOOGLE_APPLICATION_CREDENTIALS ندی تعریف شوی',
  err_option_processAs_invalid: 'د -p / --process-as لپاره د ناسم انتخاب ارزښت: دا اختیار یوازې د \'متن\' یا \'html\' ارزښتونو ملاتړ کوي',
  err_infileNotFound: 'د ننوتلو فایل یا لارښود ونه موندل شو: {{ jsFile }}',
  err_cannotWriteSource: 'د آخذې سرچینې د بیا لیکلو څخه انکار (د محصول په ژبو کې مشخص شوی): {{source}}',
  err_invalidOutfile: 'تمه کیده چې د \'LANG\' ولري (د {{lang}} سره بدل شي)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: تمه کیده فایل {{ file }} د صادراتو ډیفالټ یا \'module.exports\' سره پیل شي مګر وموندل شو: {{actualPrefix}}',
  err_readMessageKeys_invalidJson: 'ناسم json په {{file}}',
  err_processFile_writeFile: '*** د {{lang}} : {{langOut}} : {{e}} لپاره آوټ فايل ته په ليکلو کې تېروتنه',
  err_processFile_error: '*** په ژباړه کې تېروتنه: {{e}}',
  err_processing: '*** ناڅاپي تېروتنه: {{e}}',
  warn_missing_close_notranslate_tag: 'د ژباړې څخه محصول د تړلو ټاګ ورک و چیرې چې تمه کیده. لیبل {{ label }} ، د کرښې شمیره {{ lineNumber }} ، کرښه: {{ line }}',
  info_summary: 'د ګوګل ژباړې په کارولو سره د ګړندي ژباړې خدمت\n نسخه {{VERSION}}',
  info_description: 'د پراختیا کونکو لپاره یوه وسیله. د هوکیلایزیشن سره ، ستاسو د اپلیکیشن ځایی کول ګړندي ، ساتیري او اسانه کیدی شي!\n\n === سرچینه ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === د اړتیا وړ چاپیریال تغیرات ===\n * GOOGLE_TRANSLATE_PROJECT_ID: ستاسو د ګوګل ژباړې پروژه\n * GOOGLE_APPLICATION_CREDENTIALS: ستاسو د اسنادو JSON فایل\n\n === د ISO ژبې کوډونه ===\n کله چې د ISO کوډونه مشخص کړئ (یا د ان پټ ژبه یا هدف ژبې) دا کوډونه وکاروئ:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'د ژبو لپاره ISO کوډ د ژباړې لپاره. ډیفالټ {{DEFAULT_LOCALE}} دی',
  info_option_processAs: 'ډول کیدای شي متن یا html وي. ډیفالټ متن دی',
  info_option_match: 'کله چې د لارښود پروسس کول، یوازې هغه فایلونه په پام کې ونیسئ چې د دې ریجیکس سره سمون لري',
  info_option_excludes: 'کله چې د لارښود پروسس کول، په ښکاره ډول هغه فایلونه لرې کړئ چې د دې ریجیکس سره سمون لري، حتی که دوی د `-m` / `--match` regex سره سمون ولري',
  info_option_filter: 'کله چې د ډایرکټر پروسس کول: 1) دې JS فایل ته اړتیا لري، کوم چې باید د \'فلټر\' په نوم فنکشن صادر کړي کوم چې د سټینګ پیرامیټر اخلي او یو تار بیرته راولي، او 2) د دې فلټر فنکشن په ټولو محصول فایلونو کې د لیکلو دمخه پلي کړئ.',
  info_option_dryRun: 'د ګوګل ژباړې ته هیڅ فایلونه مه لیکئ یا کوم API زنګونه مه کوئ، مګر لاګ کړئ چې څه به شوي وي',
  info_option_languages: 'د کوما لخوا جلا شوی د ISO کوډونو لیست چې د ژبې لپاره ژباړل کیږي',
  info_option_outfile: 'د JS فایل پروسس کولو لپاره: دې فایل ته د JS محصول ولیکئ\n د لارښود پروسس کولو لپاره: دې ډایرکټر ته فایلونه ولیکئ ، کوم چې به رامینځته شي که چیرې شتون ونلري',
  info_option_force: 'تل تازه ژباړې رامینځته کړئ ، د موجوده محصول فایلونو له سره لیکلو سره',
  info_option_handlebars: 'ډاډ ترلاسه کړئ چې د {{ handlebars }} محتويات لکه څنګه چې دي خوندي دي او ژباړل شوي ندي',
  info_option_markdown: 'ډاډ ترلاسه کړئ چې [markdown](https://links) په سمه توګه ساتل کیږي، که نه نو په مربع قوسونو کې د لینک توضیحاتو پای او لینک پخپله په قوسونو کې یو ځای معرفي کیږي',
  info_arg_source: 'د ژباړې سرچینه؛ د JS فایل یا د ژباړې لپاره د فایلونو لارښود کیدی شي',
  info_filter_applied: 'فلټر په بریالیتوب سره د لیکلو دمخه پلي شوی: {{langFile}}',
  info_dryRun_key: '(وچ چلول) د کلیدي لپاره ژباړه نه لیکي: {{key}}',
  info_dryRun_file: '(dry run) به فایل لیکلی وی: {{langOut}}',
  warn_walk_readDir: 'چل ( {{dir}} ): تېروتنه لوستل: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): په ډایرکټر کې د فایلونو لیست کولو په هڅه کې یوه تېروتنه رامنځته شوه: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): دا لاره ډایرکټر نه ده',
  info_processDirectory_skippingExisting: 'د {{lang}} {{langFile.file}}',
  info_processDirectory_fileWritten: 'دوتنه لیکل شوې ده: {{langFile}}'
}