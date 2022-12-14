export default {
  err_fatal: 'አደገኛ ስህተት {{error}}',
  err_env_googleProjectId: 'የአካባቢ ተለዋዋጭ GOOGLE_TRANSLATE_PROJECT_ID አልተገለጸም።',
  err_env_googleCredentials: 'የአካባቢ ተለዋዋጭ GOOGLE_APPLICATION_CREDENTIALS አልተገለጸም።',
  err_option_processAs_invalid: 'ልክ ያልሆነ አማራጭ ዋጋ ለ -p / -process-as: ይህ አማራጭ የ\'text\' ወይም \'html\' እሴቶችን ብቻ ይደግፋል.',
  err_infileNotFound: 'የግቤት ፋይል ወይም ማውጫ አልተገኘም: {{ jsFile }}',
  err_cannotWriteSource: 'የግቤት ምንጭን ለመተካት ፈቃደኛ አለመሆን (በውፅዓት ቋንቋዎች ተገልጿል)፦ {{source}}',
  err_invalidOutfile: 'የሚጠበቀው የውጪ ፋይል \'LANG\' ይይዛል (በ {{lang}} የሚተካ)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys፡ የሚጠበቀው ፋይል {{ file }} በ\'ወደ ውጪ መላክ ነባሪ\' ወይም \'module.exports\' ይጀምራል ነገር ግን ተገኝቷል {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'ልክ ያልሆነ json በ {{file}} ውስጥ',
  err_processFile_writeFile: '*** ለ {{lang}} ለማስወጣት መጻፍ ላይ ስህተት: {{langOut}} : {{e}}',
  err_processFile_error: '*** የመተርጎም ስህተት፦ {{e}}',
  err_processing: '*** ያልተጠበቀ ስህተት: {{e}}',
  warn_missing_close_notranslate_tag: 'ከትርጉም የተገኘው ውጤት አንዱ የሚጠበቅበት የመዝጊያ መለያ ጠፍቷል። መለያ {{ label }} ፣ የመስመር ቁጥር {{ lineNumber }} ፣ መስመር: {{ line }}',
  info_summary: 'ጎግል ትርጉምን በመጠቀም ፈጣን የትርጉም አገልግሎት\n ስሪት {{VERSION}}',
  info_description: 'ለገንቢዎች መሣሪያ። በሆኪላይዜሽን መተግበሪያዎን አካባቢያዊ ማድረግ ፈጣን፣ አዝናኝ እና ቀላል ሊሆን ይችላል!\n\n == ምንጭ ===\n GitHub፡ https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === የሚፈለጉ የአካባቢ ተለዋዋጮች ===\n * GOOGLE_TRANSLATE_PROJECT_ID፡ የእርስዎ የጉግል ትርጉም ፕሮጀክት\n * GOOGLE_APPLICATION_CREDENTIALS፡ የእርስዎ ምስክርነቶች JSON ፋይል\n\n == ISO ቋንቋ ኮዶች ===\n የ ISO ኮዶችን (የግቤት ቋንቋ ወይም ዒላማ ቋንቋዎች) ሲገልጹ እነዚህን ኮዶች ይጠቀሙ፡-\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ከ ቋንቋዎች የሚተረጎሙ የ ISO ኮድ። ነባሪው {{DEFAULT_LOCALE}} ነው',
  info_option_processAs: 'አይነት ጽሑፍ ወይም ኤችቲኤምኤል ሊሆን ይችላል። ነባሪው ጽሑፍ ነው።',
  info_option_match: 'ማውጫን በሚሰሩበት ጊዜ፣ ከዚህ regex ጋር የሚዛመዱ ፋይሎችን ብቻ ያስቡ',
  info_option_excludes: 'ማውጫን በሚሰሩበት ጊዜ ከእነዚህ regexes ጋር የሚዛመዱ ፋይሎችን በግልፅ አያካትቱ፣ ምንም እንኳን ከ`-m`/`--match` regex ጋር የሚዛመዱ ቢሆኑም እንኳ።',
  info_option_filter: 'ማውጫ በሚሰራበት ጊዜ፡ 1) ይህን የJS ፋይል ጠይቅ፣የሕብረቁምፊ መለኪያ ወስዶ ሕብረቁምፊን የሚመልስ \'filter\' የሚባል ተግባር ወደ ውጭ መላክ አለበት፣ እና 2) ይህን የማጣሪያ ተግባር በሁሉም የውፅአት ፋይሎች ላይ ከመፃፋቸው በፊት ይተግብሩ።',
  info_option_dryRun: 'ምንም አይነት ፋይል አይጻፉ ወይም ወደ Google ትርጉም ምንም አይነት የኤፒአይ ጥሪ አያድርጉ፣ ነገር ግን ምን ይደረግ ነበር የሚለውን ይመዝገቡ',
  info_option_languages: 'ቋንቋዎች የሚተረጎሙባቸው በነጠላ ሰረዝ የተለዩ የ ISO ኮዶች ዝርዝር',
  info_option_outfile: 'ለJS ፋይል ሂደት፡ የJS ውፅዓት ወደዚህ ፋይል ይፃፉ\n ለማውጫ ሂደት፡ ፋይሎችን ወደዚህ ማውጫ ይፃፉ፣ ይህም ከሌለ የሚፈጠረው',
  info_option_force: 'ማናቸውንም የውጤት ፋይሎችን በመተካት ሁልጊዜ አዲስ ትርጉሞችን ይፍጠሩ',
  info_option_handlebars: '{{ handlebars }} ይዘት እንዳለ መጠበቁን እና እንዳልተተረጎመ ያረጋግጡ',
  info_option_markdown: '[markdown](https://links) በትክክል መቀመጡን ያረጋግጡ፣ አለበለዚያ በአገናኝ መግለጫው መጨረሻ በካሬ ቅንፎች እና በራሱ ማገናኛ መካከል ክፍተት መግባቱን ያረጋግጡ።',
  info_arg_source: 'ለትርጉሞች ምንጭ; ለመተርጎም JS ፋይል ወይም የፋይሎች ማውጫ ሊሆን ይችላል።',
  info_filter_applied: 'ከመጻፉ በፊት ማጣሪያ በተሳካ ሁኔታ ተተግብሯል {{langFile}}',
  info_dryRun_key: '(ደረቅ ሩጫ) ለቁልፍ ትርጉም {{key}}',
  info_dryRun_file: '(ደረቅ ሩጫ) የተጻፈ ፋይል ይኖረው ነበር፡- {{langOut}}',
  warn_walk_readDir: 'መራመድ ( {{dir}} ): ስህተት ማንበብ: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): በማውጫ ውስጥ ፋይሎችን ለመዘርዘር በመሞከር ላይ ስህተት ተፈጥሯል: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} )፡ ይህ መንገድ ማውጫ አይደለም።',
  info_processDirectory_skippingExisting: 'የሂደት ማውጫ ( {{lang}} )፡ ያለውን ፋይል መዝለል {{langFile.file}}',
  info_processDirectory_fileWritten: 'ፋይሉ ተጽፏል {{langFile}}',
  err_option_json_notFound: 'JSON ፋይል አልተገኘም: {{ jsonFile }}',
  err_option_json_errorReading: 'የJSON ፋይል {{ jsonFile }} በማንበብ ወይም በመተንተን ላይ ስህተት ተከስቷል: {{ e }}',
  err_option_languages_required: 'ምንም የትርጉም ቋንቋዎች አልተገለጹም። `-l` / `--ቋንቋዎች`ን ተጠቀም እና በነጠላ ሰረዝ የተለዩ የ ISO ቋንቋ ኮዶች ዝርዝር ይግለጹ',
  err_option_outfile_required: 'ምንም የውጤት ፋይል ወይም ማውጫ አልተገለጸም። የውጤት ፋይሉን ወይም ማውጫውን ለመለየት `-o` / `--outfile`ን ይጠቀሙ',
  err_noSources: 'ምንም ምንጭ ፋይሎች ለትርጉም አልተሰጡም።',
  info_option_jsonFile: 'በJSON ፋይል ውስጥ የተገለጹ በርካታ የሆኪ ትዕዛዞችን ያሂዱ። ምንም የJSON ፋይል ካልተሰጠ ትዕዛዙ አሁን ባለው ማውጫ ውስጥ \'hokey.json\' የሚባል ፋይል ይፈልጋል',
  info_option_indexFile: 'ለትርጉሞቹ የመረጃ ጠቋሚ ፋይል ይፍጠሩ። አብነት በ`-A` / `--index-template` ካላቀረብክ በስተቀር የፋይሉ ስም በ`.html`፣ `.md` ወይም `.txt` ማለቅ አለበት',
  info_option_indexTemplate: 'ይህ \'html\'፣ \'markdown\'፣ \'text\' ወይም የእራስዎ የእጅ መያዣ አብነት ዱካ ሊሆን ይችላል። ይህ አብነት የመረጃ ጠቋሚ ፋይሉን ሲፈጥር ጥቅም ላይ ይውላል. ለአብነት ያህል በሆኪላይዜሽን ምንጭ ኮድ ውስጥ ያሉትን ነባሪ አብነቶች ተመልከት',
  info_option_regular: 'የምንጭ ፋይሎችን እንደ መደበኛ ፋይሎች ይተርጉሙ፣ የሕብረቁምፊ ሃብቶችን የያዙ የጃቫስክሪፕት ነገሮችን አይተረጉሙም። የ`-M` / `---markdown` ባንዲራ ይህንን ባንዲራ ያመለክታል።',
  info_arg_sources: 'ለትርጉሞች ምንጭ (ዎች); ይህ አንድ ወይም ከዚያ በላይ የጃቫስክሪፕት ፋይሎች ወይም ማውጫዎች ሊሆን ይችላል።',
  info_jsonProcessing_start: 'JSON ማቀናበሪያ ውቅር {{name}}',
  err_index_singleFileMultipleSources: 'አንድ ነጠላ የመረጃ ጠቋሚ ፋይል ተወስኗል፣ ነገር ግን በርካታ የግቤት ፋይሎች አሉ። ለመረጃ ጠቋሚው ከፋይል ይልቅ ማውጫ ይግለጹ',
  err_index_targetDirAndNoTypeOrTemplate: 'ለመረጃ ጠቋሚው የዒላማ ማውጫ ተገልጿል፣ ነገር ግን የመረጃ ጠቋሚ አብነት አልተገለጸም። አብነት ለመምረጥ `-A` / `--indexTemplate`ን ይጠቀሙ',
  err_index_parentDirDoesNotExist: 'የመረጃ ጠቋሚው ወላጅ ማውጫ የለም {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'የፋይሉ ስም ቅጥያ የለውም ስለዚህ የአብነት አይነት ሊታወቅ አይችልም {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'የፋይል ስሙ ልክ ያልሆነ ቅጥያ ስላለው የአብነት አይነት ሊታወቅ አይችልም {{ file }}',
  err_index_templateLoadingError: 'ብጁ አብነት {{ file }} በመጫን ላይ ስህተት ተፈጥሯል: {{ e }}',
  err_index_templateCompilationError: 'ብጁ አብነት ማጠናቀር ላይ ስህተት ተፈጥሯል {{ file }} : {{ e }}',
  info_index_wroteFile: 'በተሳካ ሁኔታ የተፈጠረ የመረጃ ጠቋሚ ፋይል፡- {{ indexFile }}',
  label_indexOfTranslations: 'የትርጉም ማውጫ',
  label_findYourLanguageCode: 'የቋንቋ ኮድዎን ያግኙ',
  err_processing_unknown: '*** ያልተጠበቀ ስህተት: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'ለቋንቋ {{ lang }} ምንም የውጤት ፋይል አልተፈጠረም፣ ስለዚህ ከመረጃ ጠቋሚው ውጭ ይሆናል።',
  err_filter_loading: 'ማጣሪያ አልተገኘም: {{ filter }}\n ማጣሪያው በማናቸውም ውስጥ አልተገኘም፦ አሁን ባለው ማውጫ፣ የ./.ሆኪ-ማጣሪያዎች ማውጫ፣ የ${HOME}/.የሆኪ-ማጣሪያዎች ማውጫ ወይም አብሮገነብ የማጣሪያዎች ማውጫ'
}