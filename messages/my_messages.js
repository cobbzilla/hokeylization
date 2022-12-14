export default {
  err_fatal: 'ဆိုးရွားသောအမှား- {{error}}',
  err_env_googleProjectId: 'ပတ်ဝန်းကျင် ပြောင်းလဲနိုင်သော GOOGLE_TRANSLATE_PROJECT_ID ကို သတ်မှတ်မထားပါ။',
  err_env_googleCredentials: 'ပတ်ဝန်းကျင် ပြောင်းလဲနိုင်သော GOOGLE_APPLICATION_CREDENTIALS ကို သတ်မှတ်မထားပါ။',
  err_option_processAs_invalid: '-p / --process-as အတွက် မမှန်ကန်သော ရွေးချယ်မှုတန်ဖိုး- ဤရွေးချယ်မှုသည် \'စာသား\' သို့မဟုတ် \'html\' တန်ဖိုးများကိုသာ ပံ့ပိုးသည်',
  err_infileNotFound: 'ထည့်သွင်းဖိုင် သို့မဟုတ် လမ်းညွှန်ကို ရှာမတွေ့ပါ- {{ jsFile }}',
  err_cannotWriteSource: 'ထည့်သွင်းမှုရင်းမြစ်ကို ထပ်ရေးရန် ငြင်းဆိုခြင်း (အထွက်ဘာသာစကားများဖြင့် သတ်မှတ်ထားသည်) {{source}}',
  err_invalidOutfile: 'ဖိုင်တွင် \'LANG\' ပါဝင်ရန် မျှော်လင့်ထားသည် ( {{lang}} ဖြင့် အစားထိုးရန်)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys- \'export default\' သို့မဟုတ် \'module.exports\' ဖြင့် စတင်ရန် မျှော်လင့်ထားသော ဖိုင် {{ file }} ဖိုင်ကို တွေ့ရှိသော်လည်း- {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json မမှန်ကန်ပါ {{file}}',
  err_processFile_writeFile: '*** {{lang}} : {{langOut}} : {{e}} အတွက် ဖိုင်တွဲသို့ စာရေးရာတွင် အမှားအယွင်းရှိသည်။',
  err_processFile_error: '*** ဘာသာပြန်ရာတွင် အမှားအယွင်း: {{e}}',
  err_processing: '*** မမျှော်လင့်ထားသော အမှား- {{e}}',
  warn_missing_close_notranslate_tag: 'ဘာသာပြန်ခြင်းမှ ရလဒ်သည် မျှော်လင့်ထားသည့် အပိတ်တဂ်တစ်ခု ပျောက်ဆုံးနေပါသည်။ အညွှန်း {{ label }} ၊ လိုင်းနံပါတ် {{ lineNumber }} ၊ လိုင်း- {{ line }}',
  info_summary: 'Google Translate ကို အသုံးပြု၍ အမြန်ဘာသာပြန်ဝန်ဆောင်မှု\n ဗားရှင်း {{VERSION}}',
  info_description: 'developer များအတွက် tool တစ်ခု။ hokeylization ဖြင့်၊ သင့်အက်ပ်ကို ဒေသန္တရပြုလုပ်ခြင်းသည် မြန်ဆန်၊ ပျော်စရာနှင့် လွယ်ကူနိုင်သည်။\n\n === အရင်းအမြစ် ===\n GitHub- https://github.com/cobbzilla/hokeylization\n npm- https://www.npmjs.com/package/hokeylization\n\n === လိုအပ်သော ပတ်ဝန်းကျင် ကိန်းရှင်များ ===\n * GOOGLE_TRANSLATE_PROJECT_ID- သင်၏ Google Translate ပရောဂျက်\n * GOOGLE_APPLICATION_CREDENTIALS- သင်၏အထောက်အထားများ JSON ဖိုင်\n\n === ISO ဘာသာစကားကုဒ်များ ===\n ISO ကုဒ်များကို သတ်မှတ်သောအခါ (ထည့်သွင်းသည့်ဘာသာစကား သို့မဟုတ် ပစ်မှတ်ဘာသာစကားများ) ဤကုဒ်များကို အသုံးပြုပါ။\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ဘာသာပြန်ရန် ဘာသာစကားများအတွက် ISO ကုဒ်။ {{DEFAULT_LOCALE}}',
  info_option_processAs: 'အမျိုးအစားသည် စာသား သို့မဟုတ် html ဖြစ်နိုင်သည်။ မူရင်းမှာ စာသားဖြစ်သည်။',
  info_option_match: 'လမ်းညွှန်တစ်ခုကို လုပ်ဆောင်သောအခါ၊ ဤ regex နှင့် ကိုက်ညီသောဖိုင်များကိုသာ ထည့်သွင်းစဉ်းစားပါ။',
  info_option_excludes: 'လမ်းညွှန်တစ်ခုကို လုပ်ဆောင်သောအခါ၊ ၎င်းတို့သည် `-m` / `--match` regex နှင့် ကိုက်ညီသည့်တိုင် ဤ regexe များနှင့် ကိုက်ညီသောဖိုင်များကို ဖယ်ထုတ်ပါ',
  info_option_filter: 'လမ်းညွှန်တစ်ခုအား လုပ်ဆောင်သည့်အခါ- 1) ဤ JS ဖိုင်ကို လိုအပ်သည်၊ ၎င်းသည် string parameter ကိုယူကာ string တစ်ခုကို ပြန်ပေးသည့် `filter` ဟု အမည်ပေးထားသည့် လုပ်ဆောင်ချက်ကို ထုတ်ယူရမည်ဖြစ်ပြီး၊ 2) ၎င်းတို့မရေးသားမီ ဤ filter လုပ်ဆောင်ချက်ကို အထွက်ဖိုင်များအားလုံးတွင် အသုံးပြုပါ။',
  info_option_dryRun: 'မည်သည့်ဖိုင်မျှ မရေးပါနှင့် Google Translate သို့ API ခေါ်ဆိုမှုများ ပြုလုပ်ခြင်း မပြုပါနှင့်၊ လုပ်ဆောင်ရမည့်အရာများကို စာရင်းသွင်းပါ။',
  info_option_languages: 'ဘာသာပြန်ဆိုရန် ဘာသာစကားများအတွက် ကော်မာ-ခြားထားသော ISO ကုဒ်များစာရင်း',
  info_option_outfile: 'JS ဖိုင်ကို လုပ်ဆောင်ခြင်းအတွက်- ဤဖိုင်တွင် JS အထွက်ကို ရေးပါ။\n လမ်းညွှန်လုပ်ဆောင်ခြင်းအတွက်- ၎င်းမရှိပါက ဖန်တီးမည့် ဤလမ်းညွှန်တွင် ဖိုင်များကိုရေးပါ။',
  info_option_force: 'လက်ရှိထွက်ရှိထားသော ဖိုင်များကို အစားထိုးပြီး အသစ်သော ဘာသာပြန်ဆိုမှုများကို အမြဲဖန်တီးပါ။',
  info_option_handlebars: '{{ handlebars }} အကြောင်းအရာကို လက်ရှိအတိုင်း ထိန်းသိမ်းထားပြီး ဘာသာပြန်မထားကြောင်း သေချာပါစေ။',
  info_option_markdown: '[markdown](https://links) ကို မှန်ကန်စွာ ထိန်းသိမ်းထားကြောင်း သေချာပါစေ၊ သို့မဟုတ်ပါက စတုရန်းကွင်းစကွက်များတွင် လင့်ခ်ဖော်ပြချက်၏အဆုံးနှင့် ကွင်းကွင်းအတွင်းရှိ လင့်ခ်ကြားတွင် နေရာလွတ်တစ်ခုကို မိတ်ဆက်ပေးသည်',
  info_arg_source: 'ဘာသာပြန်များအတွက်အရင်းအမြစ်; JS ဖိုင် သို့မဟုတ် ဘာသာပြန်ရန် ဖိုင်လမ်းညွှန်တစ်ခု ဖြစ်နိုင်သည်။',
  info_filter_applied: 'မရေးမီ စစ်ထုတ်ခြင်းကို အောင်မြင်စွာ အသုံးချခဲ့သည်- {{langFile}}',
  info_dryRun_key: '(dry run) သော့အတွက် ဘာသာပြန်မရေးပါ- {{key}}',
  info_dryRun_file: '(dry run) ရေးထားသော ဖိုင် {{langOut}}',
  warn_walk_readDir: 'လမ်းလျှောက်( {{dir}} ) : အမှားဖတ်ခြင်း- {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ) : directory တွင် ဖိုင်များကို စာရင်းပြုစုရန် ကြိုးပမ်းရာတွင် အမှားအယွင်းတစ်ခု ဖြစ်ပေါ်ခဲ့သည်- {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ဤလမ်းကြောင်းသည် လမ်းညွှန်တစ်ခုမဟုတ်ပါ။',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): ရှိပြီးသားဖိုင်ကို ကျော်သွားခြင်း- {{langFile.file}}',
  info_processDirectory_fileWritten: 'ဖိုင်ကို ရေးထားသည်- {{langFile}}',
  err_option_json_notFound: 'JSON ဖိုင်ကို ရှာမတွေ့ပါ- {{ jsonFile }}',
  err_option_json_errorReading: 'JSON ဖိုင်ကို ဖတ်ခြင်း သို့မဟုတ် ခွဲခြမ်းစိတ်ဖြာရာတွင် အမှားအယွင်းတစ်ခု ဖြစ်ပေါ်ခဲ့သည် {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'ဘာသာပြန်ဘာသာစကားများကို ဖော်ပြထားခြင်းမရှိပါ။ `-l` / `--languages` ကိုသုံး၍ ISO ဘာသာစကားကုဒ်များ၏ ကော်မာ-ခြားထားသော စာရင်းကို သတ်မှတ်ပါ။',
  err_option_outfile_required: 'အထွက်ဖိုင် သို့မဟုတ် လမ်းညွှန်ကို မဖော်ပြထားပါ။ အထွက်ဖိုင် သို့မဟုတ် လမ်းညွှန်ကို သတ်မှတ်ရန် `-o` / `--outfile` ကို အသုံးပြုပါ။',
  err_noSources: 'ဘာသာပြန်ရန်အတွက် အရင်းအမြစ်ဖိုင်များ ပေးမထားပါ။',
  info_option_jsonFile: 'JSON ဖိုင်တွင် သတ်မှတ်ထားသော hokey command အများအပြားကို လုပ်ဆောင်ပါ။ JSON ဖိုင်ကို မပေးပါက၊ ကွန်မန်းသည် လက်ရှိလမ်းညွှန်တွင် \'hokey.json\' အမည်ရှိ ဖိုင်ကို ရှာဖွေသည်',
  info_option_indexFile: 'ဘာသာပြန်များအတွက် အညွှန်းဖိုင်တစ်ခု ဖန်တီးပါ။ ဖိုင်အမည်သည် `-A` / `--index-template` ဖြင့် ပုံစံပလိတ်ကို သင်မပေးပါက `.html`၊ `.md` သို့မဟုတ် `.txt` ဖြင့် အဆုံးသတ်ရပါမည်။',
  info_option_indexTemplate: '၎င်းသည် \'html\'၊ \'markdown\'၊ \'text\' သို့မဟုတ် သင့်ကိုယ်ပိုင်လက်ကိုင်ဘားတန်းပလိတ်သို့ လမ်းကြောင်းတစ်ခု ဖြစ်နိုင်သည်။ အညွှန်းဖိုင်ကို ဖန်တီးသည့်အခါ ဤပုံစံကို အသုံးပြုသည်။ ဥပမာများအတွက် hokeylization အရင်းအမြစ်ကုဒ်ရှိ မူရင်းပုံစံများကို ကြည့်ပါ။',
  info_option_regular: 'အရင်းအမြစ်ဖိုင်များကို ပုံမှန်ဖိုင်များအဖြစ် ဘာသာပြန်ပါ၊ စာကြောင်းရင်းမြစ်များပါရှိသော JavaScript အရာဝတ္ထုများကို ဘာသာပြန်ခြင်းမပြုပါ။ `-M` / `--markdown` အလံသည် ဤအလံကို ဆိုလိုသည်။',
  info_arg_sources: 'ဘာသာပြန်များအတွက် အရင်းအမြစ်(များ)၊ ၎င်းသည် တစ်ခု သို့မဟုတ် တစ်ခုထက်ပိုသော JavaScript ဖိုင်များ သို့မဟုတ် လမ်းညွှန်များ ဖြစ်နိုင်သည်။',
  info_jsonProcessing_start: 'JSON လုပ်ဆောင်နေသည့်ပုံစံ- {{name}}',
  err_index_singleFileMultipleSources: 'အညွှန်းဖိုင်တစ်ခုတည်းကို သတ်မှတ်ထားသော်လည်း ထည့်သွင်းမှုဖိုင်များစွာရှိသည်။ အညွှန်းအတွက် ဖိုင်အစား လမ်းညွှန်တစ်ခုကို သတ်မှတ်ပါ။',
  err_index_targetDirAndNoTypeOrTemplate: 'အညွှန်းအတွက် ပစ်မှတ်လမ်းညွှန်ကို သတ်မှတ်ထားသော်လည်း အညွှန်းပုံစံပုံစံကို မဖော်ပြထားပါ။ နမူနာပုံစံတစ်ခုကို ရွေးရန် `-A` / `--indexTemplate` ကိုသုံးပါ။',
  err_index_parentDirDoesNotExist: 'အညွှန်း၏ ပင်မလမ်းညွှန်တွင် မရှိပါ- {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'ဖိုင်အမည်တွင် တိုးချဲ့မှု မရှိသောကြောင့် နမူနာအမျိုးအစားကို သတ်မှတ်၍မရပါ- {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'ဖိုင်အမည်တွင် မမှန်ကန်သော တိုးချဲ့မှုတစ်ခု ရှိနေသောကြောင့် နမူနာအမျိုးအစားကို သတ်မှတ်၍မရပါ- {{ file }}',
  err_index_templateLoadingError: 'စိတ်ကြိုက်ပုံစံပုံစံကို ဖွင့်ရာတွင် အမှားအယွင်းတစ်ခု ဖြစ်ပေါ်ခဲ့သည် {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'စိတ်ကြိုက်ပုံစံပုံစံကို ပြုစုရာတွင် အမှားအယွင်းတစ်ခု ဖြစ်ပေါ်ခဲ့သည် {{ file }} : {{ e }}',
  info_index_wroteFile: 'အညွှန်းဖိုင်ကို အောင်မြင်စွာ ဖန်တီးထားသည်- {{ indexFile }}',
  label_indexOfTranslations: 'ဘာသာပြန်အညွှန်း',
  label_findYourLanguageCode: 'သင်၏ဘာသာစကားကုဒ်ကိုရှာပါ။',
  err_processing_unknown: '*** မမျှော်လင့်ထားသော အမှား- {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'ဘာသာစကား {{ lang }} အတွက် အထွက်ဖိုင်ကို ထုတ်လုပ်ထားခြင်း မရှိသောကြောင့် ၎င်းကို အညွှန်းမှ ဖယ်ထုတ်ပါမည်။',
  err_filter_loading: 'စစ်ထုတ်မှု မတွေ့ပါ- {{ filter }}\n စစ်ထုတ်ခြင်းကို မည်သည့်အရာတွင်မှ ရှာမတွေ့ပါ- လက်ရှိ လမ်းညွှန်၊ ./.hokey-filters လမ်းညွှန်၊ ${HOME}/.hokey-filters လမ်းညွှန် သို့မဟုတ် ပါ၀င်သော စစ်ထုတ်မှုလမ်းညွှန်'
}