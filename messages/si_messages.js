export default {
  err_fatal: 'මාරාන්තික දෝෂය: {{error}}',
  err_env_googleProjectId: 'පරිසර විචල්‍ය GOOGLE_TRANSLATE_PROJECT_ID අර්ථ දක්වා නැත',
  err_env_googleCredentials: 'පරිසර විචල්‍ය GOOGLE_APPLICATION_CREDENTIALS අර්ථ දක්වා නැත',
  err_option_processAs_invalid: '-p / --process-as සඳහා වලංගු නොවන විකල්ප අගය: මෙම විකල්පය සහාය දක්වන්නේ \'පෙළ\' හෝ \'html\' අගයන් සඳහා පමණි.',
  err_infileNotFound: 'ආදාන ගොනුව හෝ නාමාවලිය හමු නොවීය: {{ jsFile }}',
  err_cannotWriteSource: 'ආදාන මූලාශ්‍රය උඩින් ලිවීම ප්‍රතික්ෂේප කිරීම (ප්‍රතිදාන භාෂාවලින් දක්වා ඇත): {{source}}',
  err_invalidOutfile: 'අපේක්ෂිත ඇඳුම් ගොනුවේ \'LANG\' අඩංගු වේ ( {{lang}} සමඟ ප්‍රතිස්ථාපනය කිරීමට)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: {{ file }} \'අපනයන පෙරනිමි\' හෝ \'module.exports\' සමඟ ආරම්භ කිරීමට අපේක්ෂිත ගොනුව නමුත් හමු විය: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} හි වලංගු නොවන json',
  err_processFile_writeFile: '*** {{lang}} සඳහා ලිපිගොනු ලිවීමේ දෝෂයකි : {{langOut}} : {{e}}',
  err_processFile_error: '*** පරිවර්තනය කිරීමේ දෝෂය: {{e}}',
  err_processing: '*** අනපේක්ෂිත දෝෂය: {{e}}',
  info_summary: 'Google Translate භාවිතයෙන් ඉක්මන් පරිවර්තන සේවාව\n අනුවාදය {{VERSION}}',
  info_description: '=== මූලාශ්‍රය ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === අවශ්‍ය පරිසර විචල්‍ය ===\n * GOOGLE_TRANSLATE_PROJECT_ID: ඔබගේ Google පරිවර්තන ව්‍යාපෘතිය\n * GOOGLE_APPLICATION_CREDENTIALS: ඔබගේ අක්තපත්‍ර JSON ගොනුව\n\n === ISO භාෂා කේත ===\n ISO කේත සඳහන් කරන විට (ආදාන භාෂාව හෝ ඉලක්ක භාෂා) මෙම කේත භාවිතා කරන්න:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'පරිවර්තනය කිරීමට භාෂා සඳහා ISO කේතය. පෙරනිමිය {{DEFAULT_LOCALE}}',
  info_option_processAs: 'වර්ගය text හෝ html විය හැක. පෙරනිමිය පෙළ වේ',
  info_option_match: 'නාමාවලියක් සැකසීමේදී, මෙම regex වලට ගැලපෙන ගොනු පමණක් සලකා බලන්න',
  info_option_excludes: 'නාමාවලියක් සකසන විට, ඒවා `-m` / `--match` regex සමඟ ගැළපුණත්, මෙම regex වලට ගැළපෙන ගොනු පැහැදිලිවම බැහැර කරන්න.',
  info_option_filter: 'ඩිරෙක්ටරියක් සකසන විට: 1) මෙම JS ගොනුව අවශ්‍ය වේ, එය තන්තු පරාමිතියක් ගෙන තන්තුවක් ලබා දෙන `ෆිල්ටර්\' නම් ශ්‍රිතයක් අපනයනය කළ යුතුය, සහ 2) ඒවා ලිවීමට පෙර සියලුම ප්‍රතිදාන ගොනුවලට මෙම පෙරහන් ශ්‍රිතය යොදන්න.',
  info_option_dryRun: 'Google Translate වෙත කිසිදු ගොනුවක් ලිවීමට හෝ API ඇමතුම් ලබා නොගන්න, නමුත් සිදු කළ දේ සටහන් කරන්න',
  info_option_languages: 'භාෂාවලට පරිවර්තනය කිරීම සඳහා කොමාවෙන් වෙන් කළ ISO කේත ලැයිස්තුව',
  info_option_outfile: 'JS ගොනු සැකසීම සඳහා: මෙම ගොනුවට JS ප්‍රතිදානය ලියන්න\n නාමාවලි සැකසීම සඳහා: මෙම නාමාවලියට ගොනු ලියන්න, එය නොපවතියි නම් එය සාදනු ලැබේ',
  info_option_force: 'සෑම විටම නැවුම් පරිවර්තන උත්පාදනය කරන්න, පවතින ඕනෑම ප්‍රතිදාන ගොනු නැවත ලියන්න',
  info_option_handlebars: '{{ handlebars }} අන්තර්ගතය පරිවර්ථනය නොවන පරිදි සංරක්ෂණය කර ඇති බවට සහතික වන්න',
  info_option_markdown: '[markdown](https://links) නිවැරදිව සංරක්ෂණය කර ඇති බවට වග බලා ගන්න, එසේ නොමැතිනම් සම්බන්ධක විස්තරයේ අවසානය වර්ග වරහන් සහ වරහන් තුළ ඇති සබැඳිය අතර ඉඩක් හඳුන්වා දෙනු ලැබේ.',
  info_arg_source: 'පරිවර්තන සඳහා මූලාශ්රය; JS ගොනුවක් හෝ පරිවර්තනය කිරීමට ගොනු නාමාවලියක් විය හැක',
  info_filter_applied: 'ලිවීමට පෙර පෙරහන සාර්ථකව යොදන ලදී: {{langFile}}',
  info_dryRun_key: '(වියළි ධාවනය) යතුර සඳහා පරිවර්තනය ලිවීම නොවේ: {{key}}',
  info_dryRun_file: '(වියළි ධාවනය) ලියා ඇති ගොනුව: {{langOut}}',
  warn_walk_readDir: 'ඇවිදීම ( {{dir}} ): දෝෂ කියවීම: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): නාමාවලියෙහි ගොනු ලැයිස්තුගත කිරීමට උත්සාහ කිරීමේදී දෝෂයක් ඇති විය: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): මෙම මාර්ගය නාමාවලියක් නොවේ',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): පවතින ගොනුව මඟ හැරීම: {{langFile.file}}',
  info_processDirectory_fileWritten: 'ගොනුව ලියා ඇත: {{langFile}}'
}