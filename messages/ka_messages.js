export default {
  err_fatal: 'ფატალური შეცდომა: {{error}}',
  err_env_googleProjectId: 'გარემოს ცვლადი GOOGLE_TRANSLATE_PROJECT_ID არ არის განსაზღვრული',
  err_env_googleCredentials: 'გარემოს ცვლადი GOOGLE_APPLICATION_CREDENTIALS არ არის განსაზღვრული',
  err_option_processAs_invalid: 'ოპციის არასწორი მნიშვნელობა -p / --process-as-ისთვის: ეს პარამეტრი მხარს უჭერს მხოლოდ "ტექსტის" ან "html" მნიშვნელობებს',
  err_infileNotFound: 'შეყვანის ფაილი ან დირექტორია ვერ მოიძებნა: {{ jsFile }}',
  err_cannotWriteSource: 'უარის თქმის შეყვანის წყაროს გადაწერაზე (მითითებულია გამომავალი ენებში): {{source}}',
  err_invalidOutfile: 'მოსალოდნელია outfile შეიცავდეს "LANG" (ჩანაცვლება {{lang}} ით)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: მოსალოდნელია ფაილი {{ file }} უნდა დაიწყოს "export default" ან "module.exports", მაგრამ ნაპოვნია: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'არასწორი json {{file}} ში',
  err_processFile_writeFile: '*** შეცდომით ჩაწერის შეცდომა {{lang}} ისთვის: {{langOut}} : {{e}}',
  err_processFile_error: '*** შეცდომა თარგმნისას: {{e}}',
  err_processing: '*** მოულოდნელი შეცდომა: {{e}}',
  warn_missing_close_notranslate_tag: 'თარგმანიდან გამოსავალს აკლია დახურვის ტეგი, სადაც ერთი იყო მოსალოდნელი. ეტიკეტი {{ label }} , ხაზის ნომერი {{ lineNumber }} , ხაზი: {{ line }}',
  info_summary: 'სწრაფი თარგმანის სერვისი Google Translate-ის გამოყენებით\n ვერსია {{VERSION}}',
  info_description: 'ინსტრუმენტი დეველოპერებისთვის. ჰოკეილიზაციით, თქვენი აპლიკაციის ლოკალიზაცია შეიძლება იყოს სწრაფი, სახალისო და მარტივი!\n\n === წყარო ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === გარემოს საჭირო ცვლადები ===\n * GOOGLE_TRANSLATE_PROJECT_ID: თქვენი Google Translate პროექტი\n * GOOGLE_APPLICATION_CREDENTIALS: თქვენი რწმუნებათა სიგელების JSON ფაილი\n\n === ISO ენის კოდები ===\n ISO კოდების (შეყვანის ან სამიზნე ენების) მითითებისას გამოიყენეთ ეს კოდები:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO კოდი ენების სათარგმნად. ნაგულისხმევი არის {{DEFAULT_LOCALE}}',
  info_option_processAs: 'ტიპი შეიძლება იყოს ტექსტი ან html. ნაგულისხმევი არის ტექსტი',
  info_option_match: 'დირექტორიას დამუშავებისას განიხილეთ მხოლოდ ფაილები, რომლებიც შეესაბამება ამ რეგექსს',
  info_option_excludes: 'დირექტორიას დამუშავებისას, აშკარად გამორიცხეთ ფაილები, რომლებიც ემთხვევა ამ რეგექსებს, მაშინაც კი, თუ ისინი ემთხვევა `-m` / `--match` regex-ს',
  info_option_filter: 'დირექტორიას დამუშავებისას: 1) მოითხოვეთ ეს JS ფაილი, რომელმაც უნდა გაიტანოს ფუნქცია სახელად `ფილტრი`, რომელიც იღებს სტრიქონის პარამეტრს და აბრუნებს სტრიქონს, და 2) გამოიყენეთ ეს ფილტრის ფუნქცია ყველა გამომავალ ფაილზე, სანამ ისინი დაიწერება.',
  info_option_dryRun: 'ნუ დაწერთ ფაილებს ან არ განახორციელოთ რაიმე API ზარები Google Translate-ზე, მაგრამ დაარეგისტრირეთ ის, რაც იქნებოდა გაკეთებული',
  info_option_languages: 'მძიმით გამოყოფილი ISO კოდების სია ენებისთვის, რომლებშიც უნდა ითარგმნოს',
  info_option_outfile: 'JS ფაილის დამუშავებისთვის: ჩაწერეთ JS გამომავალი ამ ფაილზე\n დირექტორიაში დამუშავებისთვის: ჩაწერეთ ფაილები ამ დირექტორიაში, რომელიც შეიქმნება თუ ის არ არსებობს',
  info_option_force: 'ყოველთვის შექმენით ახალი თარგმანები, გადაწერეთ არსებული გამომავალი ფაილები',
  info_option_handlebars: 'დარწმუნდით, რომ {{ handlebars }} შინაარსი შენარჩუნებულია ისე, როგორც არის და არ არის თარგმნილი',
  info_option_markdown: 'დარწმუნდით, რომ [markdown](https://links) სწორად არის შენახული, წინააღმდეგ შემთხვევაში კვადრატულ ფრჩხილებში ბმულის აღწერილობის ბოლოსა და ფრჩხილებში ჩადებულ ბმულს შორის დაიდება სივრცე',
  info_arg_source: 'თარგმანის წყარო; შეიძლება იყოს JS ფაილი ან სათარგმნი ფაილების დირექტორია',
  info_filter_applied: 'ფილტრი წარმატებით იქნა გამოყენებული დაწერამდე: {{langFile}}',
  info_dryRun_key: '(მშრალი გაშვება) არ წერს თარგმანი გასაღებისთვის: {{key}}',
  info_dryRun_file: '(მშრალი გაშვება) იქნებოდა დაწერილი ფაილი: {{langOut}}',
  warn_walk_readDir: 'ფეხით ( {{dir}} ): შეცდომა წაკითხვისას: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): მოხდა შეცდომა ფაილების დირექტორიაში ჩამოთვლის მცდელობისას: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ეს გზა არ არის დირექტორია',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): არსებული ფაილის გამოტოვება: {{langFile.file}}',
  info_processDirectory_fileWritten: 'ფაილი დაიწერა: {{langFile}}',
  err_option_json_notFound: 'JSON ფაილი ვერ მოიძებნა: {{ jsonFile }}',
  err_option_json_errorReading: 'JSON ფაილის წაკითხვის ან ანალიზის დროს მოხდა შეცდომა {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'თარგმანის ენები არ არის მითითებული. გამოიყენეთ `-l` / `--languages` და მიუთითეთ ISO ენის კოდების მძიმით გამოყოფილი სია',
  err_option_outfile_required: 'არ იყო მითითებული გამომავალი ფაილი ან დირექტორია. გამოიყენეთ `-o` / `--outfile` გამომავალი ფაილის ან დირექტორიას დასაზუსტებლად',
  err_noSources: 'თარგმანისთვის წყაროს ფაილები არ არის მოწოდებული',
  info_option_jsonFile: 'JSON ფაილში მითითებული რამდენიმე ჰოკეის ბრძანების გაშვება. თუ JSON ფაილი არ არის მოწოდებული, ბრძანება ეძებს ფაილს სახელად \'hokey.json\' მიმდინარე დირექტორიაში.',
  info_option_indexFile: 'შექმენით ინდექსის ფაილი თარგმანებისთვის. ფაილის სახელი უნდა დასრულდეს `.html`, `.md` ან `.txt`, თუ არ მიაწვდით შაბლონს `-A` / `--index-template`',
  info_option_indexTemplate: 'ეს შეიძლება იყოს \'html\', \'markdown\', \'ტექსტი\' ან გზა თქვენი საკუთარი სახელურის შაბლონისკენ. ეს შაბლონი გამოიყენება ინდექსის ფაილის შექმნისას. მაგალითებისთვის შეხედეთ ნაგულისხმევ შაბლონებს ჰოკეილიზაციის წყაროს კოდში',
  info_option_regular: 'თარგმნეთ საწყისი ფაილები ჩვეულებრივ ფაილებად, არა თარგმნეთ JavaScript ობიექტები, რომლებიც შეიცავს სიმებიანი რესურსებს. `-M` / `--markdown` დროშა გულისხმობს ამ დროშას.',
  info_arg_sources: 'თარგმანის წყარო(ებ)ი; ეს შეიძლება იყოს ერთი ან მეტი JavaScript ფაილი ან დირექტორია',
  info_jsonProcessing_start: 'JSON დამუშავების კონფიგურაცია: {{name}}',
  err_index_singleFileMultipleSources: 'მითითებული იყო ერთი ინდექსის ფაილი, მაგრამ არსებობს მრავალი შეყვანის ფაილი. ინდექსისთვის ფაილის ნაცვლად მიუთითეთ დირექტორია',
  err_index_targetDirAndNoTypeOrTemplate: 'ინდექსისთვის მითითებული იყო სამიზნე დირექტორია, მაგრამ ინდექსის შაბლონი არ იყო მითითებული. გამოიყენეთ `-A` / `--indexTemplate` შაბლონის ასარჩევად',
  err_index_parentDirDoesNotExist: 'ინდექსის მშობელი დირექტორია არ არსებობს: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'ფაილის სახელს არ აქვს გაფართოება, ამიტომ შაბლონის ტიპი ვერ განისაზღვრა: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'ფაილის სახელს აქვს არასწორი გაფართოება, ამიტომ შაბლონის ტიპი ვერ დადგინდება: {{ file }}',
  err_index_templateLoadingError: 'მორგებული შაბლონის ჩატვირთვისას მოხდა შეცდომა {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'მოხდა შეცდომა მორგებული შაბლონის შედგენისას {{ file }} : {{ e }}',
  info_index_wroteFile: 'წარმატებით შეიქმნა ინდექსის ფაილი: {{ indexFile }}',
  label_indexOfTranslations: 'თარგმანების ინდექსი',
  label_findYourLanguageCode: 'იპოვეთ თქვენი ენის კოდი',
  err_processing_unknown: '*** მოულოდნელი შეცდომა: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'გამომავალი ფაილი არ შეიქმნა {{ lang }} ენისთვის, ამიტომ ის გამოირიცხება ინდექსიდან',
  err_filter_loading: 'ფილტრი ვერ მოიძებნა: {{ filter }}\n ფილტრი ვერ მოიძებნა არცერთში: მიმდინარე დირექტორიაში, ./.hokey-filters დირექტორიაში, ${HOME}/.hokey-filters დირექტორიაში და არც ჩაშენებულ ფილტრების დირექტორიაში.'
}