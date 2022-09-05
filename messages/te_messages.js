export default {
  err_fatal: 'ఘోరమైన లోపం: {{error}}',
  err_env_googleProjectId: 'ఎన్విరాన్‌మెంట్ వేరియబుల్ GOOGLE_TRANSLATE_PROJECT_ID నిర్వచించబడలేదు',
  err_env_googleCredentials: 'ఎన్విరాన్‌మెంట్ వేరియబుల్ GOOGLE_APPLICATION_CREDENTIALS నిర్వచించబడలేదు',
  err_option_processAs_invalid: '-p / --process-as కోసం చెల్లని ఎంపిక విలువ: ఈ ఎంపిక \'టెక్స్ట్\' లేదా \'html\' విలువలకు మాత్రమే మద్దతు ఇస్తుంది.',
  err_infileNotFound: 'ఇన్‌పుట్ ఫైల్ లేదా డైరెక్టరీ కనుగొనబడలేదు: {{ jsFile }}',
  err_cannotWriteSource: 'ఇన్‌పుట్ మూలాన్ని ఓవర్‌రైట్ చేయడానికి నిరాకరించడం (అవుట్‌పుట్ భాషలలో పేర్కొనబడింది): {{source}}',
  err_invalidOutfile: 'ఊహించిన అవుట్‌ఫైల్ \'LANG\'ని కలిగి ఉంటుంది ( {{lang}} తో భర్తీ చేయబడుతుంది)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: ఆశించిన ఫైల్ {{ file }} \'ఎగుమతి డిఫాల్ట్\' లేదా \'module.exports\'తో ప్రారంభం అవుతుంది కానీ కనుగొనబడింది: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} లో చెల్లని json',
  err_processFile_writeFile: '*** {{lang}} కోసం అవుట్‌ఫైల్ చేయడానికి వ్రాయడంలో లోపం : {{langOut}} : {{e}}',
  err_processFile_error: '*** అనువదించడంలో లోపం: {{e}}',
  err_processing: '*** ఊహించని లోపం: {{e}}',
  warn_missing_close_notranslate_tag: 'అనువాదం నుండి అవుట్‌పుట్‌లో ఒక ముగింపు ట్యాగ్ లేదు, అక్కడ ఒకటి ఊహించబడింది. లేబుల్ {{ label }} , లైన్ నంబర్ {{ lineNumber }} , లైన్: {{ line }}',
  info_summary: 'Google అనువాదం ఉపయోగించి త్వరిత అనువాద సేవ\n వెర్షన్ {{VERSION}}',
  info_description: 'డెవలపర్‌ల కోసం ఒక సాధనం. హోకీలైజేషన్‌తో, మీ యాప్‌ని స్థానికీకరించడం వేగంగా, సరదాగా మరియు సులభంగా ఉంటుంది!\n\n === మూలం ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === అవసరమైన పర్యావరణ వేరియబుల్స్ ===\n * GOOGLE_TRANSLATE_PROJECT_ID: మీ Google అనువాదం ప్రాజెక్ట్\n * GOOGLE_APPLICATION_CREDENTIALS: మీ ఆధారాలు JSON ఫైల్\n\n === ISO భాషా కోడ్‌లు ===\n ISO కోడ్‌లను పేర్కొనేటప్పుడు (ఇన్‌పుట్ లాంగ్వేజ్ లేదా టార్గెట్ లాంగ్వేజ్) ఈ కోడ్‌లను ఉపయోగించండి:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'భాషల నుండి అనువదించడానికి ISO కోడ్. డిఫాల్ట్ {{DEFAULT_LOCALE}}',
  info_option_processAs: 'టైప్ టెక్స్ట్ లేదా html కావచ్చు. డిఫాల్ట్ టెక్స్ట్',
  info_option_match: 'డైరెక్టరీని ప్రాసెస్ చేస్తున్నప్పుడు, ఈ రీజెక్స్‌కు సరిపోలే ఫైల్‌లను మాత్రమే పరిగణించండి',
  info_option_excludes: 'డైరెక్టరీని ప్రాసెస్ చేస్తున్నప్పుడు, అవి `-m` / `--మ్యాచ్` రీజెక్స్‌తో సరిపోలినప్పటికీ, ఈ రీజెక్స్‌లకు సరిపోలే ఫైల్‌లను స్పష్టంగా మినహాయించండి',
  info_option_filter: 'డైరెక్టరీని ప్రాసెస్ చేస్తున్నప్పుడు: 1) ఈ JS ఫైల్ అవసరం, ఇది స్ట్రింగ్ పరామితిని తీసుకొని స్ట్రింగ్‌ను తిరిగి ఇచ్చే `ఫిల్టర్` అనే ఫంక్షన్‌ను తప్పనిసరిగా ఎగుమతి చేయాలి మరియు 2) ఈ ఫిల్టర్ ఫంక్షన్‌ను అన్ని అవుట్‌పుట్ ఫైల్‌లకు రాయడానికి ముందే వర్తింపజేయాలి',
  info_option_dryRun: 'Google అనువాదానికి ఏ ఫైల్‌లను వ్రాయవద్దు లేదా ఏదైనా API కాల్‌లను చేయవద్దు, కానీ ఏమి జరిగిందో లాగ్ చేయండి',
  info_option_languages: 'భాషల్లోకి అనువదించడానికి కామాతో వేరు చేయబడిన ISO కోడ్‌ల జాబితా',
  info_option_outfile: 'JS ఫైల్ ప్రాసెసింగ్ కోసం: ఈ ఫైల్‌కు JS అవుట్‌పుట్‌ని వ్రాయండి\n డైరెక్టరీ ప్రాసెసింగ్ కోసం: ఈ డైరెక్టరీకి ఫైల్‌లను వ్రాయండి, అది ఉనికిలో లేకుంటే సృష్టించబడుతుంది',
  info_option_force: 'ఇప్పటికే ఉన్న ఏవైనా అవుట్‌పుట్ ఫైల్‌లను ఓవర్‌రైట్ చేస్తూ ఎల్లప్పుడూ తాజా అనువాదాలను రూపొందించండి',
  info_option_handlebars: '{{ handlebars }} కంటెంట్ అలాగే భద్రపరచబడిందని మరియు అనువదించబడలేదని నిర్ధారించుకోండి',
  info_option_markdown: '[మార్క్‌డౌన్](https://links) సరిగ్గా భద్రపరచబడిందని నిర్ధారించుకోండి, లేకుంటే స్క్వేర్ బ్రాకెట్‌లలోని లింక్ వివరణ ముగింపు మరియు కుండలీకరణాల్లోని లింక్ మధ్య ఖాళీని ప్రవేశపెట్టండి',
  info_arg_source: 'అనువాదాల మూలం; అనువదించడానికి JS ఫైల్ లేదా ఫైల్‌ల డైరెక్టరీ కావచ్చు',
  info_filter_applied: 'వ్రాయడానికి ముందు ఫిల్టర్ విజయవంతంగా వర్తింపజేయబడింది: {{langFile}}',
  info_dryRun_key: '(డ్రై రన్) కీ కోసం అనువాదం రాయడం లేదు: {{key}}',
  info_dryRun_file: '(డ్రై రన్) వ్రాసిన ఫైల్: {{langOut}}',
  warn_walk_readDir: 'నడక ( {{dir}} ): ఎర్రర్ రీడింగ్: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): డైరెక్టరీలో ఫైల్‌లను జాబితా చేయడానికి ప్రయత్నిస్తున్నప్పుడు లోపం సంభవించింది: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ఈ మార్గం డైరెక్టరీ కాదు',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): ఇప్పటికే ఉన్న ఫైల్‌ను దాటవేయడం: {{langFile.file}}',
  info_processDirectory_fileWritten: 'ఫైల్ వ్రాయబడింది: {{langFile}}',
  err_option_json_notFound: 'JSON ఫైల్ కనుగొనబడలేదు: {{ jsonFile }}',
  err_option_json_errorReading: 'JSON ఫైల్‌ని చదవడం లేదా అన్వయించడంలో లోపం సంభవించింది {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'అనువాద భాషలు ఏవీ పేర్కొనబడలేదు. `-l` / `--languages` ఉపయోగించండి మరియు కామాతో వేరు చేయబడిన ISO భాషా కోడ్‌ల జాబితాను పేర్కొనండి',
  err_option_outfile_required: 'అవుట్‌పుట్ ఫైల్ లేదా డైరెక్టరీ పేర్కొనబడలేదు. అవుట్‌పుట్ ఫైల్ లేదా డైరెక్టరీని పేర్కొనడానికి `-o` / `--outfile` ఉపయోగించండి',
  err_noSources: 'అనువాదం కోసం సోర్స్ ఫైల్‌లు ఏవీ అందించబడలేదు',
  info_option_jsonFile: 'JSON ఫైల్‌లో పేర్కొన్న బహుళ hokey ఆదేశాలను అమలు చేయండి. JSON ఫైల్ అందించబడకపోతే, కమాండ్ ప్రస్తుత డైరెక్టరీలో \'hokey.json\' అనే ఫైల్ కోసం చూస్తుంది.',
  info_option_indexFile: 'అనువాదాల కోసం ఇండెక్స్ ఫైల్‌ను రూపొందించండి. మీరు `-A` / `--index-template`తో టెంప్లేట్‌ని అందిస్తే తప్ప, ఫైల్ పేరు తప్పనిసరిగా `.html`, `.md` లేదా `.txt`తో ముగియాలి',
  info_option_indexTemplate: 'ఇది \'html\', \'markdown\', \'text\' లేదా మీ స్వంత హ్యాండిల్‌బార్‌ల టెంప్లేట్‌కి మార్గం కావచ్చు. ఇండెక్స్ ఫైల్‌ను సృష్టించేటప్పుడు ఈ టెంప్లేట్ ఉపయోగించబడుతుంది. ఉదాహరణల కోసం హోకీలైజేషన్ సోర్స్ కోడ్‌లోని డిఫాల్ట్ టెంప్లేట్‌లను చూడండి',
  info_option_regular: 'స్ట్రింగ్ వనరులను కలిగి ఉన్న జావాస్క్రిప్ట్ ఆబ్జెక్ట్‌లను అనువదించకుండా సోర్స్ ఫైల్‌లను సాధారణ ఫైల్‌లుగా అనువదించండి. `-M` / `--markdown` ఫ్లాగ్ ఈ ఫ్లాగ్‌ని సూచిస్తుంది.',
  info_arg_sources: 'అనువాదాలకు మూలం(లు); ఇది ఒకటి లేదా అంతకంటే ఎక్కువ JavaScript ఫైల్‌లు లేదా డైరెక్టరీలు కావచ్చు',
  info_jsonProcessing_start: 'JSON ప్రాసెసింగ్ కాన్ఫిగరేషన్: {{name}}',
  err_index_singleFileMultipleSources: 'ఒకే ఇండెక్స్ ఫైల్ పేర్కొనబడింది, కానీ అనేక ఇన్‌పుట్ ఫైల్‌లు ఉన్నాయి. ఇండెక్స్ కోసం ఫైల్‌కు బదులుగా డైరెక్టరీని పేర్కొనండి',
  err_index_targetDirAndNoTypeOrTemplate: 'సూచిక కోసం లక్ష్య డైరెక్టరీ పేర్కొనబడింది, కానీ ఇండెక్స్ టెంప్లేట్ పేర్కొనబడలేదు. టెంప్లేట్‌ను ఎంచుకోవడానికి `-A` / `--indexTemplate` ఉపయోగించండి',
  err_index_parentDirDoesNotExist: 'సూచిక యొక్క పేరెంట్ డైరెక్టరీ ఉనికిలో లేదు: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'ఫైల్ పేరుకు పొడిగింపు లేదు కాబట్టి టెంప్లేట్ రకాన్ని నిర్ణయించడం సాధ్యం కాదు: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'ఫైల్ పేరు చెల్లని పొడిగింపును కలిగి ఉంది కాబట్టి టెంప్లేట్ రకాన్ని నిర్ణయించడం సాధ్యం కాదు: {{ file }}',
  err_index_templateLoadingError: 'అనుకూల టెంప్లేట్‌ను లోడ్ చేయడంలో లోపం సంభవించింది {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'అనుకూల టెంప్లేట్‌ను కంపైల్ చేయడంలో లోపం సంభవించింది {{ file }} : {{ e }}',
  info_index_wroteFile: 'ఇండెక్స్ ఫైల్ విజయవంతంగా సృష్టించబడింది: {{ indexFile }}',
  label_indexOfTranslations: 'అనువాదాల సూచిక',
  label_findYourLanguageCode: 'మీ భాషా కోడ్‌ను కనుగొనండి',
  err_processing_unknown: '*** ఊహించని లోపం: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'భాష {{ lang }} కోసం అవుట్‌పుట్ ఫైల్ ఏదీ రూపొందించబడలేదు, కనుక ఇది సూచిక నుండి మినహాయించబడుతుంది',
  err_filter_loading: 'ఫిల్టర్ కనుగొనబడలేదు: {{ filter }}\n ఫిల్టర్ దేనిలోనూ కనుగొనబడలేదు: ప్రస్తుత డైరెక్టరీ, ./.hokey-filters డైరెక్టరీ, ${HOME}/.hokey-filters డైరెక్టరీ లేదా అంతర్నిర్మిత ఫిల్టర్‌ల డైరెక్టరీ'
}