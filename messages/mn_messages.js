export default {
  err_fatal: 'ҮХЭЛТЭЙ АЛДАА: {{error}}',
  err_env_googleProjectId: 'GOOGLE_TRANSLATE_PROJECT_ID орчны хувьсагч тодорхойлогдоогүй байна',
  err_env_googleCredentials: 'GOOGLE_APPLICATION_CREDENTIALS орчны хувьсагч тодорхойлогдоогүй байна',
  err_option_processAs_invalid: '-p / --process-as-д буруу сонголтын утга: энэ сонголт нь зөвхөн "текст" эсвэл "html" утгуудыг дэмждэг.',
  err_infileNotFound: 'оролтын файл эсвэл лавлах олдсонгүй: {{ jsFile }}',
  err_cannotWriteSource: 'оролтын эх сурвалжийг дарж бичихээс татгалзах (гаралтын хэлээр заасан): {{source}}',
  err_invalidOutfile: '\'LANG\' агуулсан байх хүлээгдэж буй гадуур файл ( {{lang}} р солино)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: хүлээгдэж буй файл {{ file }} \'export default\' эсвэл \'module.exports\' гэж эхлэх боловч олдсон: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} д хүчингүй json',
  err_processFile_writeFile: '*** {{lang}} файл руу бичихэд алдаа гарлаа: {{langOut}} : {{e}}',
  err_processFile_error: '*** Орчуулахад алдаа: {{e}}',
  err_processing: '*** Гэнэтийн алдаа: {{e}}',
  warn_missing_close_notranslate_tag: 'Орчуулгын гаралт нь хүлээгдэж буй хаалтын шошго дутуу байсан. Шошго {{ label }} , мөрийн дугаар {{ lineNumber }} , мөр: {{ line }}',
  info_summary: 'Google Translate ашиглан хурдан орчуулгын үйлчилгээ\n Хувилбар {{VERSION}}',
  info_description: 'Хөгжүүлэгчид зориулсан хэрэгсэл. Хокейлчлалын тусламжтайгаар програмаа нутагшуулах нь хурдан, хөгжилтэй, хялбар байх болно!\n\n === Эх сурвалж ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === ШААРДЛАГАТАЙ орчны хувьсагч ===\n * GOOGLE_TRANSLATE_PROJECT_ID: таны Google Translate төсөл\n * GOOGLE_APPLICATION_CREDENTIALS: таны итгэмжлэлийн JSON файл\n\n === ISO хэлний кодууд ===\n ISO кодыг (оролтын хэл эсвэл зорилтот хэл) зааж өгөхдөө дараах кодыг ашиглана уу:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Орчуулах хэлнүүдийн ISO код. Өгөгдмөл нь {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Төрөл нь текст эсвэл html байж болно. Өгөгдмөл нь текст юм',
  info_option_match: 'Лавлах боловсруулахдаа зөвхөн энэ регекстэй таарах файлуудыг анхаарч үзээрэй',
  info_option_excludes: 'Лавлах боловсруулахдаа `-m` / `--match` регекстэй таарч байсан ч эдгээр регекстэй таарч байгаа файлуудыг тодорхой хас.',
  info_option_filter: 'Лавлах боловсруулахдаа: 1) энэ JS файлыг шаардах ба энэ нь мөрийн параметрийг авч мөр буцаадаг `filter` нэртэй функцийг экспортлох ёстой, 2) энэ шүүлтүүр функцийг бичихээс өмнө бүх гаралтын файлд хэрэглээрэй.',
  info_option_dryRun: 'Google Translate руу ямар ч файл бичих эсвэл API дуудлага хийх хэрэггүй, харин юу хийх байсныг бүртгээрэй',
  info_option_languages: 'Орчуулах хэлэнд зориулсан ISO кодын таслалаар тусгаарласан жагсаалт',
  info_option_outfile: 'JS файл боловсруулахын тулд: JS гаралтыг энэ файлд бичнэ үү\n Лавлах боловсруулахад: Хэрэв энэ директор байхгүй бол үүсгэгдэх файлууд руу бичнэ үү',
  info_option_force: 'Одоо байгаа гаралтын файлуудыг дарж бичиж, үргэлж шинэ орчуулгууд үүсгээрэй',
  info_option_handlebars: '{{ handlebars }} контентыг байгаагаар нь хадгалж, орчуулаагүй эсэхийг шалгаарай',
  info_option_markdown: '[Тэмдэглэгээ](https://links) зөв хадгалагдсан эсэхийг шалгаарай, эс тэгвээс дөрвөлжин хаалтанд холбоосын тайлбарын төгсгөл болон хаалтанд байгаа холбоосын хооронд зай гарч ирнэ.',
  info_arg_source: 'Орчуулгын эх сурвалж; JS файл эсвэл орчуулах файлуудын лавлах байж болно',
  info_filter_applied: 'Бичихээс өмнө шүүлтүүрийг амжилттай ашигласан: {{langFile}}',
  info_dryRun_key: '(хуурай гүйлт) түлхүүрийн орчуулгыг бичихгүй байна: {{key}}',
  info_dryRun_file: '(хуурай гүйлт) дараах файлыг бичих байсан: {{langOut}}',
  warn_walk_readDir: 'алхах ( {{dir}} ): алдаа унших: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): директор доторх файлуудыг жагсаахад алдаа гарлаа: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): энэ зам нь лавлах биш',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): одоо байгаа файлыг алгасаж байна: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Файлыг бичсэн: {{langFile}}',
  err_option_json_notFound: 'JSON файл олдсонгүй: {{ jsonFile }}',
  err_option_json_errorReading: 'JSON файлыг унших эсвэл задлан шинжлэхэд алдаа гарлаа {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Орчуулгын хэл заагаагүй байна. `-l` / `--languages`-г ашиглаж, ISO хэлний кодын таслалаар тусгаарласан жагсаалтыг зааж өгнө үү',
  err_option_outfile_required: 'Гаралтын файл эсвэл лавлахыг зааж өгөөгүй. `-o` / `--outfile`-г ашиглан гаралтын файл эсвэл лавлахыг зааж өгнө үү',
  err_noSources: 'орчуулга хийх эх файл байхгүй',
  info_option_jsonFile: 'JSON файлд заасан олон hokey командыг ажиллуул. Хэрэв JSON файл өгөөгүй бол тушаал нь одоогийн лавлахаас \'hokey.json\' нэртэй файлыг хайна.',
  info_option_indexFile: 'Орчуулгад зориулж индекс файл үүсгэнэ үү. Хэрэв та `-A` / `--index-template` загвар нийлүүлээгүй л бол файлын нэр `.html`, `.md` эсвэл `.txt`-ээр төгсөх ёстой.',
  info_option_indexTemplate: 'Энэ нь \'html\', \'markdown\', \'текст\' эсвэл өөрийн бариулын загварт хүрэх зам байж болно. Энэ загварыг индекс файл үүсгэх үед ашигладаг. Жишээ нь hokeylization эх кодын анхдагч загваруудыг харна уу',
  info_option_regular: 'Эх файлуудыг мөрийн нөөц агуулсан JavaScript объектуудыг орчуулахгүйгээр ердийн файл болгон орчуулаарай. `-M` / `--markdown` туг нь энэ тугийг илэрхийлнэ.',
  info_arg_sources: 'Орчуулгын эх сурвалж(ууд); Энэ нь нэг буюу хэд хэдэн JavaScript файл эсвэл лавлах байж болно',
  info_jsonProcessing_start: 'JSON боловсруулах тохиргоо: {{name}}',
  err_index_singleFileMultipleSources: 'Нэг индекс файлыг зааж өгсөн боловч олон оролтын файл байна. Индексийн файлын оронд лавлахыг зааж өгнө үү',
  err_index_targetDirAndNoTypeOrTemplate: 'Индексийн хувьд зорилтот лавлахыг зааж өгсөн боловч индексийн загварыг заагаагүй байна. Загвар сонгохын тулд `-A` / `--indexTemplate`-г ашиглана уу',
  err_index_parentDirDoesNotExist: 'Индексийн эх лавлах байхгүй байна: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Файлын нэр өргөтгөлгүй тул загварын төрлийг тодорхойлох боломжгүй: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Файлын нэр буруу өргөтгөлтэй тул загварын төрлийг тодорхойлох боломжгүй: {{ file }}',
  err_index_templateLoadingError: 'Захиалгат загварыг ачаалахад алдаа гарлаа {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Захиалгат загварыг бүрдүүлэхэд алдаа гарлаа {{ file }} : {{ e }}',
  info_index_wroteFile: 'Индекс файлыг амжилттай үүсгэсэн: {{ indexFile }}',
  label_indexOfTranslations: 'Орчуулгын индекс',
  label_findYourLanguageCode: 'Хэлнийхээ кодыг олоорой',
  err_processing_unknown: '*** Гэнэтийн алдаа: {{e}}\n {{e.stack}}',
  warn_missingLangFile: '{{ lang }} хэлний хувьд гаралтын файл үүсгээгүй тул үүнийг индексээс хасах болно'
}