export default {
  err_fatal: 'घातक त्रुटि: {{error}}',
  err_env_googleProjectId: 'वातावरण चर GOOGLE_TRANSLATE_PROJECT_ID परिभाषित गरिएको छैन',
  err_env_googleCredentials: 'वातावरण चर GOOGLE_APPLICATION_CREDENTIALS परिभाषित गरिएको छैन',
  err_option_processAs_invalid: '-p / --process-as का लागि अवैध विकल्प मान : यो विकल्पले \'पाठ\' वा \'html\' को मानहरूलाई मात्र समर्थन गर्दछ',
  err_infileNotFound: 'इनपुट फाइल वा डाइरेक्टरी फेला परेन: {{ jsFile }}',
  err_cannotWriteSource: 'इनपुट स्रोत अधिलेखन गर्न अस्वीकार गर्दै (आउटपुट भाषाहरूमा निर्दिष्ट गरिएको थियो): {{source}}',
  err_invalidOutfile: 'अपेक्षित आउटफाइलमा \'LANG\' समावेश हुनेछ ( {{lang}} ले बदलिनेछ)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: अपेक्षित फाइल {{ file }} लाई \'निर्यात पूर्वनिर्धारित\' वा \'module.exports\' सँग सुरु गर्न तर फेला पर्यो: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} मा अवैध json',
  err_processFile_writeFile: '*** {{lang}} : {{langOut}} : {{e}} को लागि आउटफाइलमा लेख्दा त्रुटि भयो',
  err_processFile_error: '*** अनुवाद गर्दा त्रुटि: {{e}}',
  err_processing: '*** अनपेक्षित त्रुटि: {{e}}',
  warn_missing_close_notranslate_tag: 'अनुवादबाट आउटपुटमा समापन ट्याग हराइरहेको थियो जहाँ एउटा अपेक्षित थियो। लेबल {{ label }} , रेखा नम्बर {{ lineNumber }} , रेखा: {{ line }}',
  info_summary: 'Google अनुवादक प्रयोग गरी द्रुत अनुवाद सेवा\n संस्करण {{VERSION}}',
  info_description: 'विकासकर्ताहरूको लागि एक उपकरण। होकीलाइजेशनको साथ, तपाईंको एप स्थानीयकरण छिटो, रमाइलो र सजिलो हुन सक्छ!\n\n === स्रोत ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === आवश्यक परिवेश चर ===\n * GOOGLE_TRANSLATE_PROJECT_ID: तपाईको गुगल अनुवाद परियोजना\n * GOOGLE_APPLICATION_CREDENTIALS: तपाईको प्रमाण JSON फाइल\n\n === ISO भाषा कोडहरू ===\n आईएसओ कोडहरू निर्दिष्ट गर्दा (या त इनपुट भाषा वा लक्षित भाषाहरू) यी कोडहरू प्रयोग गर्नुहोस्:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'अनुवाद गर्न भाषाहरूको लागि ISO कोड। पूर्वनिर्धारित {{DEFAULT_LOCALE}} हो',
  info_option_processAs: 'प्रकार पाठ वा html हुन सक्छ। पूर्वनिर्धारित पाठ हो',
  info_option_match: 'डाइरेक्टरी प्रशोधन गर्दा, यो regex मेल खाने फाइलहरू मात्र विचार गर्नुहोस्',
  info_option_excludes: 'डाइरेक्टरी प्रशोधन गर्दा, स्पष्ट रूपमा यी रेगेक्सहरूसँग मेल खाने फाइलहरू बहिष्कार गर्नुहोस्, भले ही तिनीहरू `-m` / `--match` regex सँग मेल खान्छ।',
  info_option_filter: 'डाइरेक्टरी प्रशोधन गर्दा: 1) यो JS फाइल चाहिन्छ, जसले \'filter\' नामक प्रकार्य निर्यात गर्नुपर्छ जसले स्ट्रिङ प्यारामिटर लिन्छ र स्ट्रिङ फर्काउँछ, र 2) यो फिल्टर प्रकार्य सबै आउटपुट फाइलहरूमा लेख्नु अघि लागू गर्नुहोस्।',
  info_option_dryRun: 'गुगल ट्रान्सलेटमा कुनै पनि फाइलहरू लेख्न वा कुनै एपीआई कलहरू नगर्नुहोस्, तर के गरिन्थ्यो लग गर्नुहोस्',
  info_option_languages: 'भाषाहरूमा अनुवाद गर्नको लागि ISO कोडहरूको अल्पविराम-विभाजित सूची',
  info_option_outfile: 'JS फाइल प्रशोधनका लागि: यो फाइलमा JS आउटपुट लेख्नुहोस्\n डाइरेक्टरी प्रशोधनका लागि: यस डाइरेक्टरीमा फाइलहरू लेख्नुहोस्, जुन यो अवस्थित छैन भने सिर्जना गरिनेछ',
  info_option_force: 'कुनै पनि अवस्थित आउटपुट फाइलहरू अधिलेखन गर्दै, सधैं ताजा अनुवादहरू उत्पन्न गर्नुहोस्',
  info_option_handlebars: 'सुनिश्चित गर्नुहोस् कि {{ handlebars }} सामग्री यथा-जस्तै संरक्षित छ र अनुवाद गरिएको छैन',
  info_option_markdown: 'सुनिश्चित गर्नुहोस् कि [मार्कडाउन](https://links) सही तरिकाले सुरक्षित गरिएको छ, अन्यथा वर्ग कोष्ठकमा लिङ्क विवरणको अन्त्य र कोष्ठकमा लिङ्कको बीचमा खाली ठाउँ राखिएको छ।',
  info_arg_source: 'अनुवादका लागि स्रोत; JS फाइल वा अनुवाद गर्न फाइलहरूको डाइरेक्टरी हुन सक्छ',
  info_filter_applied: 'लेख्नु अघि फिल्टर सफलतापूर्वक लागू गरियो: {{langFile}}',
  info_dryRun_key: '(ड्राइ रन) कुञ्जीको लागि अनुवाद लेखिरहेको छैन: {{key}}',
  info_dryRun_file: '(dry run) ले फाइल लेखेको हुन्थ्यो: {{langOut}}',
  warn_walk_readDir: 'हिड्ने ( {{dir}} ): त्रुटि पढ्ने: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): डाइरेक्टरीमा फाइलहरू सूचीबद्ध गर्ने प्रयास गर्दा त्रुटि देखा पर्‍यो: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): यो पथ डाइरेक्टरी होइन',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): अवस्थित फाइल छोड्दै: {{langFile.file}}',
  info_processDirectory_fileWritten: 'फाइल लेखिएको छ: {{langFile}}',
  err_option_json_notFound: 'JSON फाइल फेला परेन: {{ jsonFile }}',
  err_option_json_errorReading: 'JSON फाइल पढ्दा वा पार्स गर्ने क्रममा त्रुटि भयो {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'कुनै अनुवाद भाषा निर्दिष्ट गरिएको छैन। `-l` / `--languages` प्रयोग गर्नुहोस् र ISO भाषा कोडहरूको अल्पविराम-विभाजित सूची निर्दिष्ट गर्नुहोस्',
  err_option_outfile_required: 'कुनै आउटपुट फाइल वा डाइरेक्टरी निर्दिष्ट गरिएको थिएन। आउटपुट फाइल वा डाइरेक्टरी निर्दिष्ट गर्न `-o` / `--outfile` प्रयोग गर्नुहोस्',
  err_noSources: 'अनुवादको लागि कुनै स्रोत फाइलहरू प्रदान गरिएको छैन',
  info_option_jsonFile: 'JSON फाइलमा तोकिएका धेरै hokey आदेशहरू चलाउनुहोस्। यदि कुनै JSON फाइल प्रदान गरिएको छैन भने, आदेशले हालको डाइरेक्टरीमा \'hokey.json\' नामको फाइल खोज्छ',
  info_option_indexFile: 'अनुवादहरूको लागि अनुक्रमणिका फाइल उत्पन्न गर्नुहोस्। फाइलको नाम `.html`, `.md` वा `.txt` सँग अन्त्य हुनुपर्छ, जबसम्म तपाइँ `-A` / `--index-template` सँग टेम्प्लेट आपूर्ति गर्नुहुन्छ',
  info_option_indexTemplate: 'यो \'html\', \'मार्कडाउन\', \'पाठ\', वा तपाईंको आफ्नै ह्यान्डलबार टेम्प्लेटको बाटो हुन सक्छ। यो टेम्प्लेट अनुक्रमणिका फाइल सिर्जना गर्दा प्रयोग गरिन्छ। उदाहरणका लागि hokeylization स्रोत कोडमा पूर्वनिर्धारित टेम्प्लेटहरू हेर्नुहोस्',
  info_option_regular: 'स्रोत फाइलहरूलाई नियमित फाइलहरूको रूपमा अनुवाद गर्नुहोस्, स्ट्रिङ स्रोतहरू समावेश भएका JavaScript वस्तुहरू अनुवाद नगरी। `-M` / `--markdown` झण्डाले यो झण्डालाई जनाउँछ।',
  info_arg_sources: 'अनुवादका लागि स्रोत(हरू); यो एक वा बढी JavaScript फाइल वा डाइरेक्टरी हुन सक्छ',
  info_jsonProcessing_start: 'JSON प्रशोधन कन्फिगरेसन: {{name}}',
  err_index_singleFileMultipleSources: 'एकल अनुक्रमणिका फाइल निर्दिष्ट गरिएको थियो, तर त्यहाँ धेरै इनपुट फाइलहरू छन्। अनुक्रमणिकाको लागि फाइलको सट्टा डाइरेक्टरी निर्दिष्ट गर्नुहोस्',
  err_index_targetDirAndNoTypeOrTemplate: 'अनुक्रमणिकाको लागि लक्ष्य डाइरेक्टरी निर्दिष्ट गरिएको थियो, तर कुनै पनि अनुक्रमणिका टेम्प्लेट निर्दिष्ट गरिएको थिएन। टेम्प्लेट चयन गर्न `-A` / `--indexTemplate` प्रयोग गर्नुहोस्',
  err_index_parentDirDoesNotExist: 'अनुक्रमणिकाको मूल निर्देशिका अवस्थित छैन: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'फाइलनाममा कुनै विस्तार छैन त्यसैले टेम्प्लेट प्रकार निर्धारण गर्न सकिँदैन: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'फाइलनाममा अमान्य विस्तार छ त्यसैले टेम्प्लेट प्रकार निर्धारण गर्न सकिँदैन: {{ file }}',
  err_index_templateLoadingError: 'अनुकूलन टेम्प्लेट लोड गर्दा त्रुटि भयो {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'अनुकूलन टेम्प्लेट कम्पाइल गर्दा त्रुटि भयो {{ file }} : {{ e }}',
  info_index_wroteFile: 'अनुक्रमणिका फाइल सफलतापूर्वक सिर्जना गरियो: {{ indexFile }}',
  label_indexOfTranslations: 'अनुवादको अनुक्रमणिका',
  label_findYourLanguageCode: 'आफ्नो भाषा कोड खोज्नुहोस्',
  err_processing_unknown: '*** अनपेक्षित त्रुटि: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'भाषाको लागि कुनै आउटपुट फाइल उत्पन्न भएको थिएन {{ lang }} , त्यसैले यसलाई अनुक्रमणिकाबाट बहिष्कृत गरिनेछ।',
  err_filter_loading: 'फिल्टर फेला परेन: {{ filter }}\n फिल्टर कुनै पनि मा फेला परेन: हालको डाइरेक्टरी, ./.hokey-filters डाइरेक्टरी, ${HOME}/.hokey-filters डाइरेक्टरी, न त बिल्ट-इन फिल्टर डाइरेक्टरी।'
}