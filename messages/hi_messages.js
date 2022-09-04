export default {
  err_fatal: 'घातक त्रुटि: {{error}}',
  err_env_googleProjectId: 'पर्यावरण चर GOOGLE_TRANSLATE_PROJECT_ID परिभाषित नहीं है',
  err_env_googleCredentials: 'पर्यावरण चर GOOGLE_APPLICATION_CREDENTIALS परिभाषित नहीं है',
  err_option_processAs_invalid: '-p / --process-as के लिए अमान्य विकल्प मान: यह विकल्प केवल \'पाठ\' या \'html\' के मानों का समर्थन करता है',
  err_infileNotFound: 'इनपुट फ़ाइल या निर्देशिका नहीं मिली: {{ jsFile }}',
  err_cannotWriteSource: 'इनपुट स्रोत को अधिलेखित करने से इंकार करना (आउटपुट भाषाओं में निर्दिष्ट किया गया था): {{source}}',
  err_invalidOutfile: 'अपेक्षित आउटफाइल में \'LANG\' शामिल है ( {{lang}} के साथ प्रतिस्थापित किया जाना है)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: अपेक्षित फ़ाइल {{ file }} \'निर्यात डिफ़ॉल्ट\' या \'module.exports\' से शुरू होगी लेकिन मिली: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} में अमान्य जोंस',
  err_processFile_writeFile: '*** {{lang}} के लिए आउटफाइल को लिखने में त्रुटि: {{langOut}} : {{e}}',
  err_processFile_error: '*** अनुवाद करने में त्रुटि: {{e}}',
  err_processing: '*** अनपेक्षित त्रुटि: {{e}}',
  info_summary: 'Google अनुवाद का उपयोग करके त्वरित अनुवाद सेवा\n संस्करण {{VERSION}}',
  info_description: '=== स्रोत ===\n गिटहब: https://github.com/cobbzilla/hokeylization\n एनपीएम: https://www.npmjs.com/package/hokeylization\n\n === आवश्यक पर्यावरण चर ===\n * GOOGLE_TRANSLATE_PROJECT_ID: आपका Google अनुवाद प्रोजेक्ट\n * GOOGLE_APPLICATION_CREDENTIALS: आपके क्रेडेंशियल JSON फ़ाइल\n\n === आईएसओ भाषा कोड ===\n ISO कोड निर्दिष्ट करते समय (या तो इनपुट भाषा या लक्ष्य भाषाएँ) इन कोडों का उपयोग करें:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'भाषाओं के अनुवाद के लिए आईएसओ कोड। डिफ़ॉल्ट {{DEFAULT_LOCALE}} है',
  info_option_processAs: 'टाइप टेक्स्ट या एचटीएमएल हो सकता है। डिफ़ॉल्ट टेक्स्ट है',
  info_option_match: 'निर्देशिका को संसाधित करते समय, केवल उन फ़ाइलों पर विचार करें जो इस रेगेक्स से मेल खाती हैं',
  info_option_excludes: 'निर्देशिका को संसाधित करते समय, इन रेगेक्स से मेल खाने वाली फ़ाइलों को स्पष्ट रूप से बहिष्कृत करें, भले ही वे `-m` / `--match` रेगेक्स से मेल खाते हों',
  info_option_filter: 'निर्देशिका को संसाधित करते समय: 1) इस जेएस फ़ाइल की आवश्यकता होती है, जिसे `फ़िल्टर` नामक एक फ़ंक्शन को निर्यात करना होगा जो एक स्ट्रिंग पैरामीटर लेता है और एक स्ट्रिंग देता है, और 2) इस फ़िल्टर फ़ंक्शन को सभी आउटपुट फ़ाइलों को लिखे जाने से पहले लागू करें।',
  info_option_dryRun: 'Google अनुवाद पर कोई फ़ाइल न लिखें या कोई API कॉल न करें, लेकिन लॉग इन करें कि क्या किया जाता',
  info_option_languages: 'भाषाओं के अनुवाद के लिए आईएसओ कोड की कॉमा से अलग की गई सूची',
  info_option_outfile: 'JS फाइल प्रोसेसिंग के लिए: इस फाइल में JS आउटपुट लिखें\n निर्देशिका प्रसंस्करण के लिए: इस निर्देशिका में फ़ाइलें लिखें, जो मौजूद नहीं होने पर बनाई जाएगी',
  info_option_force: 'किसी भी मौजूदा आउटपुट फ़ाइल को अधिलेखित करते हुए, हमेशा ताज़ा अनुवाद उत्पन्न करें',
  info_option_handlebars: 'सुनिश्चित करें कि {{ handlebars }} सामग्री यथावत संरक्षित है और अनुवादित नहीं है',
  info_option_markdown: 'सुनिश्चित करें कि [markdown](https://links) सही ढंग से संरक्षित हैं, अन्यथा वर्ग कोष्ठक में लिंक विवरण के अंत और कोष्ठक में स्वयं लिंक के बीच एक स्थान पेश किया जाता है',
  info_arg_source: 'अनुवाद के लिए स्रोत; JS फ़ाइल या अनुवाद करने के लिए फ़ाइलों की निर्देशिका हो सकती है',
  info_filter_applied: 'लिखने से पहले फ़िल्टर सफलतापूर्वक लागू किया गया: {{langFile}}',
  info_dryRun_key: '(ड्राई रन) कुंजी के लिए अनुवाद नहीं लिखना: {{key}}',
  info_dryRun_file: '(ड्राई रन) में लिखित फाइल होती: {{langOut}}',
  warn_walk_readDir: 'चलना ( {{dir}} ): त्रुटि पढ़ने: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles ( {{dir}} ): निर्देशिका में फ़ाइलों को सूचीबद्ध करने का प्रयास करते समय एक त्रुटि हुई: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles ( {{dir}} ): यह पथ एक निर्देशिका नहीं है',
  info_processDirectory_skippingExisting: 'प्रक्रिया निर्देशिका ( {{lang}} ): मौजूदा फ़ाइल को छोड़ना: {{langFile.file}}',
  info_processDirectory_fileWritten: 'फ़ाइल लिखी गई है: {{langFile}}'
}