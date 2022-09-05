export default {
  err_fatal: 'ÖNEMLİ HATA: {{error}}',
  err_env_googleProjectId: 'GOOGLE_TRANSLATE_PROJECT_ID ortam değişkeni tanımlanmadı',
  err_env_googleCredentials: 'GOOGLE_APPLICATION_CREDENTIALS ortam değişkeni tanımlanmadı',
  err_option_processAs_invalid: '-p / --process-as için geçersiz seçenek değeri: bu seçenek yalnızca \'metin\' veya \'html\' değerlerini destekler',
  err_infileNotFound: 'girdi dosyası veya dizin bulunamadı: {{ jsFile }}',
  err_cannotWriteSource: 'giriş kaynağının üzerine yazmayı reddetme (çıkış dillerinde belirtildi): {{source}}',
  err_invalidOutfile: '\'LANG\' içermesi beklenen dış dosya ( {{lang}} ile değiştirilecek)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: {{ file }} dosyasının \'dışa aktarma varsayılanı\' veya \'module.exports\' ile başlaması bekleniyor ancak bulundu: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} içinde geçersiz json',
  err_processFile_writeFile: '*** {{lang}} : {{langOut}} : {{e}} için dosyaya yazma hatası',
  err_processFile_error: '*** Çevirme hatası: {{e}}',
  err_processing: '*** Beklenmeyen hata: {{e}}',
  warn_missing_close_notranslate_tag: 'Çeviri çıktısının beklendiği yerde bir kapanış etiketi eksikti. Etiket {{ label }} , satır numarası {{ lineNumber }} , satır: {{ line }}',
  info_summary: 'Google Çeviri kullanarak hızlı çeviri hizmeti\n Sürüm {{VERSION}}',
  info_description: 'Geliştiriciler için bir araç. Hokeylization ile uygulamanızı yerelleştirmek hızlı, eğlenceli ve kolay olabilir!\n\n === Kaynak ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === GEREKLİ ortam değişkenleri ===\n * GOOGLE_TRANSLATE_PROJECT_ID: Google Çeviri projeniz\n * GOOGLE_APPLICATION_CREDENTIALS: kimlik bilgileriniz JSON dosyanız\n\n === ISO dil kodları ===\n ISO kodlarını (giriş dili veya hedef diller) belirlerken şu kodları kullanın:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Çeviri yapılacak diller için ISO kodu. Varsayılan {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Tür, metin veya html olabilir. Varsayılan metindir',
  info_option_match: 'Bir dizini işlerken, yalnızca bu normal ifadeyle eşleşen dosyaları göz önünde bulundurun',
  info_option_excludes: 'Bir dizini işlerken, "-m" / "--match" normal ifadesiyle eşleşseler bile, bu normal ifadelerle eşleşen dosyaları açıkça hariç tutun',
  info_option_filter: 'Bir dizini işlerken: 1) bir dize parametresi alan ve bir dize döndüren \'filter\' adlı bir işlevi dışa aktarması gereken bu JS dosyasını gerektirir ve 2) bu filtre işlevini, yazılmadan önce tüm çıktı dosyalarına uygular.',
  info_option_dryRun: 'Google Translate\'e herhangi bir dosya yazmayın veya herhangi bir API çağrısı yapmayın, ancak yapılacakları günlüğe kaydedin',
  info_option_languages: 'Çevrilecek diller için virgülle ayrılmış ISO kodlarının listesi',
  info_option_outfile: 'JS dosyası işleme için: JS çıktısını bu dosyaya yazın\n Dizin işleme için: mevcut değilse oluşturulacak olan bu dizine dosyalar yazın',
  info_option_force: 'Mevcut çıktı dosyalarının üzerine yazarak her zaman yeni çeviriler oluşturun',
  info_option_handlebars: '{{ handlebars }} içeriğin olduğu gibi korunduğundan ve çevrilmediğinden emin olun',
  info_option_markdown: '[Markdown](https://links) doğru şekilde korunduğundan emin olun, aksi takdirde köşeli parantez içindeki bağlantı açıklamasının sonu ile parantez içindeki bağlantının kendisi arasında bir boşluk bırakılır',
  info_arg_source: 'Çeviriler için kaynak; bir JS dosyası veya çevrilecek bir dosya dizini olabilir',
  info_filter_applied: 'Yazmadan önce filtre başarıyla uygulandı: {{langFile}}',
  info_dryRun_key: '(kuru çalışma) anahtar için çeviri yazmıyor: {{key}}',
  info_dryRun_file: '(kuru çalışma) şu dosyayı yazardı: {{langOut}}',
  warn_walk_readDir: 'yürüyüş( {{dir}} ): okuma hatası: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): dizindeki dosyaları listelemeye çalışırken bir hata oluştu: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): bu yol bir dizin değil',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): mevcut dosyayı atlayarak: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Dosya yazılmıştır: {{langFile}}',
  err_option_json_notFound: 'JSON dosyası bulunamadı: {{ jsonFile }}',
  err_option_json_errorReading: 'JSON dosyası okunurken veya ayrıştırılırken bir hata oluştu {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Çeviri dili belirtilmedi. `-l` / `--languages` kullanın ve virgülle ayrılmış bir ISO dil kodları listesi belirtin',
  err_option_outfile_required: 'Çıktı dosyası veya dizin belirtilmedi. Çıktı dosyasını veya dizini belirtmek için `-o` / `--outfile` kullanın',
  err_noSources: 'çeviri için kaynak dosya sağlanmadı',
  info_option_jsonFile: 'Bir JSON dosyasında belirtilen birden çok hokey komutunu çalıştırın. Herhangi bir JSON dosyası sağlanmadıysa komut, geçerli dizinde \'hokey.json\' adlı bir dosya arar.',
  info_option_indexFile: 'Çeviriler için bir dizin dosyası oluşturun. "-A" / "--index-template" içeren bir şablon sağlamadığınız sürece dosya adı ".html", ".md" veya ".txt" ile bitmelidir.',
  info_option_indexTemplate: 'Bu, \'html\', \'markdown\', \'text\' veya kendi gidon şablonunuzun yolu olabilir. Bu şablon, dizin dosyası oluşturulurken kullanılır. Örnekler için hokeylization kaynak kodundaki varsayılan şablonlara bakın',
  info_option_regular: 'Kaynak dosyaları, dize kaynakları içeren JavaScript nesnelerini çevirmeden, normal dosyalar olarak çevirin. \'-M\' / \'--markdown\' bayrağı bu bayrağı ifade eder.',
  info_arg_sources: 'Çeviriler için kaynak(lar); bu bir veya daha fazla JavaScript dosyası veya dizini olabilir',
  info_jsonProcessing_start: 'JSON işleme yapılandırması: {{name}}',
  err_index_singleFileMultipleSources: 'Tek bir dizin dosyası belirtildi, ancak birden çok girdi dosyası var. Dizin için dosya yerine dizin belirtin',
  err_index_targetDirAndNoTypeOrTemplate: 'Dizin için bir hedef dizin belirtildi, ancak dizin şablonu belirtilmedi. Bir şablon seçmek için `-A` / `--indexTemplate` kullanın',
  err_index_parentDirDoesNotExist: 'Dizinin üst dizini mevcut değil: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Dosya adının uzantısı yoktur, bu nedenle bir şablon türü belirlenemez: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Dosya adı geçersiz bir uzantıya sahip, dolayısıyla bir şablon türü belirlenemiyor: {{ file }}',
  err_index_templateLoadingError: 'Özel şablon yüklenirken bir hata oluştu {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Özel şablon derlenirken bir hata oluştu {{ file }} : {{ e }}',
  info_index_wroteFile: 'Başarıyla oluşturulan dizin dosyası: {{ indexFile }}',
  label_indexOfTranslations: 'Çeviri dizini',
  label_findYourLanguageCode: 'Dil kodunuzu bulun',
  err_processing_unknown: '*** Beklenmeyen hata: {{e}}\n {{e.stack}}',
  warn_missingLangFile: '{{ lang }} dili için çıktı dosyası oluşturulmadı, bu nedenle dizinden hariç tutulacak'
}