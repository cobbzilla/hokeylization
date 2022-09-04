export default {
  err_fatal: 'মারাত্মক ত্রুটি: {{error}}',
  err_env_googleProjectId: 'পরিবেশ পরিবর্তনশীল GOOGLE_TRANSLATE_PROJECT_ID সংজ্ঞায়িত করা হয়নি',
  err_env_googleCredentials: 'পরিবেশ পরিবর্তনশীল GOOGLE_APPLICATION_CREDENTIALS সংজ্ঞায়িত করা হয়নি',
  err_option_processAs_invalid: '-p / --process-as-এর জন্য অবৈধ বিকল্প মান : এই বিকল্পটি শুধুমাত্র \'টেক্সট\' বা \'html\'-এর মান সমর্থন করে',
  err_infileNotFound: 'ইনপুট ফাইল বা ডিরেক্টরি পাওয়া যায়নি: {{ jsFile }}',
  err_cannotWriteSource: 'ইনপুট উত্স ওভাররাইট করতে অস্বীকার করা (আউটপুট ভাষায় নির্দিষ্ট করা হয়েছিল): {{source}}',
  err_invalidOutfile: 'প্রত্যাশিত আউটফাইলে \'LANG\' থাকবে ( {{lang}} দিয়ে প্রতিস্থাপিত হবে)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: প্রত্যাশিত ফাইল {{ file }} \'এক্সপোর্ট ডিফল্ট\' বা \'module.exports\' দিয়ে শুরু হবে কিন্তু পাওয়া গেছে: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} এ অবৈধ json',
  err_processFile_writeFile: '*** আউটফাইলে {{lang}} : {{langOut}} : {{e}} লিখতে ত্রুটি',
  err_processFile_error: '*** অনুবাদে ত্রুটি: {{e}}',
  err_processing: '*** অপ্রত্যাশিত ত্রুটি: {{e}}',
  info_summary: 'Google অনুবাদ ব্যবহার করে দ্রুত অনুবাদ পরিষেবা\n সংস্করণ {{VERSION}}',
  info_description: '=== উৎস ===\n গিটহাব: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === প্রয়োজনীয় পরিবেশ ভেরিয়েবল ===\n * GOOGLE_TRANSLATE_PROJECT_ID: আপনার Google অনুবাদ প্রকল্প\n * GOOGLE_APPLICATION_CREDENTIALS: আপনার শংসাপত্র JSON ফাইল\n\n === ISO ভাষার কোড ===\n ISO কোডগুলি নির্দিষ্ট করার সময় (হয় ইনপুট ভাষা বা লক্ষ্য ভাষা) এই কোডগুলি ব্যবহার করুন:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ভাষা থেকে অনুবাদ করার জন্য ISO কোড। ডিফল্ট হল {{DEFAULT_LOCALE}}',
  info_option_processAs: 'টাইপ টেক্সট বা html হতে পারে। ডিফল্ট হল টেক্সট',
  info_option_match: 'একটি ডিরেক্টরি প্রক্রিয়াকরণ করার সময়, শুধুমাত্র এই regex মেলে ফাইল বিবেচনা করুন',
  info_option_excludes: 'একটি ডিরেক্টরি প্রসেস করার সময়, এই রেজেক্সের সাথে মেলে এমন ফাইলগুলিকে স্পষ্টভাবে বাদ দিন, এমনকি যদি তারা `-m` / `--match` regex এর সাথে মেলে',
  info_option_filter: 'একটি ডিরেক্টরি প্রক্রিয়াকরণের সময়: 1) এই JS ফাইলের প্রয়োজন, যা অবশ্যই `ফিল্টার` নামের একটি ফাংশন রপ্তানি করবে যা একটি স্ট্রিং প্যারামিটার নেয় এবং একটি স্ট্রিং প্রদান করে এবং 2) লেখার আগে এই ফিল্টার ফাংশনটি সমস্ত আউটপুট ফাইলগুলিতে প্রয়োগ করুন',
  info_option_dryRun: 'গুগল ট্রান্সলেটে কোনো ফাইল লিখবেন না বা কোনো API কল করবেন না, তবে কী করা হত তা লগ করুন',
  info_option_languages: 'ভাষাতে অনুবাদ করার জন্য ISO কোডগুলির কমা দ্বারা পৃথক করা তালিকা৷',
  info_option_outfile: 'JS ফাইল প্রক্রিয়াকরণের জন্য: এই ফাইলটিতে JS আউটপুট লিখুন\n ডিরেক্টরি প্রক্রিয়াকরণের জন্য: এই ডিরেক্টরিতে ফাইলগুলি লিখুন, এটি বিদ্যমান না থাকলে তৈরি করা হবে',
  info_option_force: 'যে কোনো বিদ্যমান আউটপুট ফাইল ওভাররাইট করে সর্বদা নতুন অনুবাদ তৈরি করুন',
  info_option_handlebars: 'নিশ্চিত করুন যে {{ handlebars }} বিষয়বস্তু যেমন আছে তেমনভাবে সংরক্ষণ করা হয়েছে এবং অনুবাদ করা হয়নি',
  info_option_markdown: 'নিশ্চিত করুন যে [মার্কডাউন](https://links) সঠিকভাবে সংরক্ষিত আছে, অন্যথায় বর্গাকার বন্ধনীতে লিঙ্কের বিবরণের শেষে এবং বন্ধনীতে লিঙ্কটির মধ্যে একটি স্পেস চালু করা হয়েছে',
  info_arg_source: 'অনুবাদের উৎস; একটি JS ফাইল বা অনুবাদ করার জন্য ফাইলগুলির একটি ডিরেক্টরি হতে পারে',
  info_filter_applied: 'লেখার আগে ফিল্টার সফলভাবে প্রয়োগ করা হয়েছে: {{langFile}}',
  info_dryRun_key: '(ড্রাই রান) কীর জন্য অনুবাদ লিখছেন না: {{key}}',
  info_dryRun_file: '(ড্রাই রান) ফাইল লিখতে হবে: {{langOut}}',
  warn_walk_readDir: 'হাঁটা ( {{dir}} ): ত্রুটি পড়া: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): ডিরেক্টরিতে ফাইল তালিকাভুক্ত করার চেষ্টা করার সময় একটি ত্রুটি ঘটেছে: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): এই পথটি একটি ডিরেক্টরি নয়',
  info_processDirectory_skippingExisting: 'প্রসেসডিরেক্টরি( {{lang}} ): বিদ্যমান ফাইল এড়িয়ে যাচ্ছে: {{langFile.file}}',
  info_processDirectory_fileWritten: 'ফাইলটি লেখা হয়েছে: {{langFile}}'
}