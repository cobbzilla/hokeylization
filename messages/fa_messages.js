export default {
  err_fatal: 'خطای مرگبار: {{error}}',
  err_env_googleProjectId: 'متغیر محیطی GOOGLE_TRANSLATE_PROJECT_ID تعریف نشده است',
  err_env_googleCredentials: 'متغیر محیطی GOOGLE_APPLICATION_CREDENTIALS تعریف نشده است',
  err_option_processAs_invalid: 'مقدار گزینه نامعتبر برای -p / --process-as : این گزینه فقط از مقادیر \'text\' یا \'html\' پشتیبانی می کند',
  err_infileNotFound: 'فایل ورودی یا دایرکتوری یافت نشد: {{ jsFile }}',
  err_cannotWriteSource: 'امتناع از بازنویسی منبع ورودی (در زبان های خروجی مشخص شده بود): {{source}}',
  err_invalidOutfile: 'خروجی مورد انتظار حاوی "LANG" باشد (با {{lang}} جایگزین شود)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: فایل مورد انتظار {{ file }} با «صادرات پیش‌فرض» یا «module.exports» شروع می‌شود، اما پیدا شد: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json نامعتبر در {{file}}',
  err_processFile_writeFile: '*** خطا در نوشتن به outfile برای {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** خطا در ترجمه: {{e}}',
  err_processing: '*** خطای غیرمنتظره: {{e}}',
  warn_missing_close_notranslate_tag: 'خروجی ترجمه فاقد یک برچسب پایانی بود، جایی که انتظار می رفت. برچسب {{ label }} ، شماره خط {{ lineNumber }} ، خط: {{ line }}',
  info_summary: 'خدمات ترجمه سریع با استفاده از Google Translate\n نسخه {{VERSION}}',
  info_description: 'ابزاری برای توسعه دهندگان با hokeylization، بومی سازی برنامه شما می تواند سریع، سرگرم کننده و آسان باشد!\n\n === منبع ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === متغیرهای محیطی مورد نیاز ===\n * GOOGLE_TRANSLATE_PROJECT_ID: پروژه Google Translate شما\n * GOOGLE_APPLICATION_CREDENTIALS: فایل JSON اعتبار شما\n\n === کدهای زبان ISO ===\n هنگام تعیین کدهای ISO (زبان ورودی یا زبان مقصد) از این کدها استفاده کنید:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'کد ISO برای زبان هایی که می توان از آنها ترجمه کرد. پیش فرض {{DEFAULT_LOCALE}} است',
  info_option_processAs: 'نوع می تواند متن یا html باشد. پیش فرض متن است',
  info_option_match: 'هنگام پردازش دایرکتوری، فقط فایل هایی را در نظر بگیرید که با این regex مطابقت دارند',
  info_option_excludes: 'هنگام پردازش دایرکتوری، فایل‌هایی را که با این رجکس‌ها مطابقت دارند به‌صراحت حذف کنید، حتی اگر با regex «-m» / «--match» مطابقت داشته باشند.',
  info_option_filter: 'هنگام پردازش دایرکتوری: 1) به این فایل JS نیاز دارید، که باید تابعی به نام "filter" را صادر کند که یک پارامتر رشته را می گیرد و یک رشته را برمی گرداند، و 2) این تابع فیلتر را قبل از نوشتن روی همه فایل های خروجی اعمال می کند.',
  info_option_dryRun: 'از نوشتن هیچ فایل یا تماس API با Google Translate خودداری کنید، اما آنچه را که انجام می شد ثبت کنید',
  info_option_languages: 'فهرست کدهای ISO جدا شده با کاما برای زبان هایی که باید به آن ها ترجمه شوند',
  info_option_outfile: 'برای پردازش فایل JS: خروجی JS را در این فایل بنویسید\n برای پردازش دایرکتوری: فایل هایی را در این دایرکتوری بنویسید که در صورت نبود آن ایجاد می شود',
  info_option_force: 'همیشه ترجمه‌های تازه تولید کنید، فایل‌های خروجی موجود را رونویسی کنید',
  info_option_handlebars: 'اطمینان حاصل کنید که محتوای {{ handlebars }} همانطور که هست حفظ شده و ترجمه نشده است',
  info_option_markdown: 'اطمینان حاصل کنید که [markdown](https://links) به درستی حفظ شده است، در غیر این صورت یک فاصله بین انتهای توضیحات پیوند در پرانتز و خود پیوند در داخل پرانتز قرار می گیرد.',
  info_arg_source: 'منبع ترجمه؛ می تواند یک فایل JS یا فهرستی از فایل ها برای ترجمه باشد',
  info_filter_applied: 'فیلتر قبل از نوشتن با موفقیت اعمال شد: {{langFile}}',
  info_dryRun_key: '(اجرای خشک) ترجمه نکردن برای کلید: {{key}}',
  info_dryRun_file: '(اجرای خشک) فایل نوشته شده بود: {{langOut}}',
  warn_walk_readDir: 'walk( {{dir}} ): خطا در خواندن: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): خطایی در تلاش برای فهرست کردن فایل‌ها در دایرکتوری رخ داد: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): این مسیر یک دایرکتوری نیست',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): پرش از فایل موجود: {{langFile.file}}',
  info_processDirectory_fileWritten: 'فایل نوشته شده است: {{langFile}}',
  err_option_json_notFound: 'فایل JSON پیدا نشد: {{ jsonFile }}',
  err_option_json_errorReading: 'هنگام خواندن یا تجزیه فایل JSON {{ jsonFile }} خطایی روی داد: {{ e }}',
  err_option_languages_required: 'هیچ زبان ترجمه ای مشخص نشده است. از «-l» / «--languages» استفاده کنید و یک لیست از کدهای زبان ISO جدا شده با کاما را مشخص کنید.',
  err_option_outfile_required: 'هیچ فایل یا دایرکتوری خروجی مشخص نشد. از «-o» / «--outfile» برای تعیین فایل یا دایرکتوری خروجی استفاده کنید',
  err_noSources: 'هیچ فایل منبعی برای ترجمه ارائه نشده است',
  info_option_jsonFile: 'چندین دستور hokey مشخص شده در یک فایل JSON را اجرا کنید. اگر فایل JSON ارائه نشده باشد، دستور به دنبال فایلی به نام «hokey.json» در فهرست فعلی می‌گردد.',
  info_option_indexFile: 'یک فایل فهرست برای ترجمه ها ایجاد کنید. نام فایل باید به «.html»، «.md» یا «.txt» ختم شود، مگر اینکه الگویی با «-A» / «--index-template» ارائه کنید.',
  info_option_indexTemplate: 'این می تواند \'html\'، \'markdown\'، \'text\' یا مسیری به الگوی فرمان شما باشد. این الگو هنگام ایجاد فایل فهرست استفاده می شود. برای مثال به الگوهای پیش فرض در کد منبع hokeylization نگاه کنید',
  info_option_regular: 'فایل های منبع را به صورت فایل های معمولی ترجمه کنید، نه اشیاء جاوا اسکریپت حاوی منابع رشته را ترجمه کنید. پرچم `-M` / `--markdown` بر این پرچم دلالت دارد.',
  info_arg_sources: 'منبع(های) ترجمه؛ این می تواند یک یا چند فایل یا دایرکتوری جاوا اسکریپت باشد',
  info_jsonProcessing_start: 'پیکربندی پردازش JSON: {{name}}',
  err_index_singleFileMultipleSources: 'یک فایل فهرست مشخص شده بود، اما چندین فایل ورودی وجود دارد. یک دایرکتوری به جای فایل برای فهرست مشخص کنید',
  err_index_targetDirAndNoTypeOrTemplate: 'یک دایرکتوری هدف برای ایندکس مشخص شد، اما هیچ الگوی شاخصی مشخص نشد. برای انتخاب یک الگو از «-A» / «--indexTemplate» استفاده کنید',
  err_index_parentDirDoesNotExist: 'دایرکتوری والد ایندکس وجود ندارد: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'نام فایل پسوندی ندارد بنابراین نمی توان نوع قالب را تعیین کرد: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'نام فایل دارای پسوند نامعتبر است بنابراین نمی توان نوع قالب را تعیین کرد: {{ file }}',
  err_index_templateLoadingError: 'هنگام بارگیری الگوی سفارشی {{ file }} خطایی روی داد: {{ e }}',
  err_index_templateCompilationError: 'خطایی در کامپایل الگوی سفارشی {{ file }} رخ داد: {{ e }}',
  info_index_wroteFile: 'فایل فهرست با موفقیت ایجاد شد: {{ indexFile }}',
  label_indexOfTranslations: 'فهرست ترجمه ها',
  label_findYourLanguageCode: 'کد زبان خود را پیدا کنید',
  err_processing_unknown: '*** خطای غیرمنتظره: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'هیچ فایل خروجی برای زبان {{ lang }} ایجاد نشد، بنابراین از فهرست حذف خواهد شد.',
  err_filter_loading: 'فیلتر پیدا نشد: {{ filter }}\n فیلتر در هیچ یک از این موارد یافت نشد: دایرکتوری فعلی، دایرکتوری ./.hokey-filters، دایرکتوری ${HOME}/.hokey-filters، و نه دایرکتوری فیلترهای داخلی'
}