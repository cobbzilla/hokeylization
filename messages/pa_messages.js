export default {
  err_fatal: 'ਘਾਤਕ ਗਲਤੀ: {{error}}',
  err_env_googleProjectId: 'ਵਾਤਾਵਰਣ ਵੇਰੀਏਬਲ GOOGLE_TRANSLATE_PROJECT_ID ਪਰਿਭਾਸ਼ਿਤ ਨਹੀਂ ਹੈ',
  err_env_googleCredentials: 'ਵਾਤਾਵਰਣ ਵੇਰੀਏਬਲ GOOGLE_APPLICATION_CREDENTIALS ਪਰਿਭਾਸ਼ਿਤ ਨਹੀਂ ਹੈ',
  err_option_processAs_invalid: '-p / --process-as ਲਈ ਅਵੈਧ ਵਿਕਲਪ ਮੁੱਲ : ਇਹ ਵਿਕਲਪ ਸਿਰਫ \'ਟੈਕਸਟ\' ਜਾਂ \'html\' ਦੇ ਮੁੱਲਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ',
  err_infileNotFound: 'ਇਨਪੁਟ ਫਾਈਲ ਜਾਂ ਡਾਇਰੈਕਟਰੀ ਨਹੀਂ ਮਿਲੀ: {{ jsFile }}',
  err_cannotWriteSource: 'ਇਨਪੁਟ ਸਰੋਤ ਨੂੰ ਓਵਰਰਾਈਟ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਕਰਨਾ (ਆਉਟਪੁੱਟ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਨਿਰਧਾਰਤ ਕੀਤਾ ਗਿਆ ਸੀ): {{source}}',
  err_invalidOutfile: 'ਉਮੀਦ ਕੀਤੀ ਆਉਟਫਾਈਲ ਵਿੱਚ \'LANG\' ( {{lang}} ਨਾਲ ਬਦਲਿਆ ਜਾਣਾ)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: ਉਮੀਦ ਕੀਤੀ ਫਾਈਲ {{ file }} \'ਐਕਸਪੋਰਟ ਡਿਫੌਲਟ\' ਜਾਂ \'module.exports\' ਨਾਲ ਸ਼ੁਰੂ ਹੋਵੇਗੀ ਪਰ ਮਿਲੀ: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} ਵਿੱਚ ਅਵੈਧ json',
  err_processFile_writeFile: '*** {{lang}} : {{langOut}} : {{e}} ਲਈ ਆਉਟਫਾਇਲ ਵਿੱਚ ਲਿਖਣ ਵਿੱਚ ਗਲਤੀ',
  err_processFile_error: '*** ਅਨੁਵਾਦ ਕਰਨ ਵਿੱਚ ਗਲਤੀ: {{e}}',
  err_processing: '*** ਅਚਾਨਕ ਗਲਤੀ: {{e}}',
  warn_missing_close_notranslate_tag: 'ਅਨੁਵਾਦ ਤੋਂ ਆਉਟਪੁੱਟ ਵਿੱਚ ਇੱਕ ਕਲੋਜ਼ਿੰਗ ਟੈਗ ਮੌਜੂਦ ਨਹੀਂ ਸੀ ਜਿੱਥੇ ਇੱਕ ਦੀ ਉਮੀਦ ਕੀਤੀ ਜਾਂਦੀ ਸੀ। ਲੇਬਲ {{ label }} , ਲਾਈਨ ਨੰਬਰ {{ lineNumber }} , ਲਾਈਨ: {{ line }}',
  info_summary: 'Google ਅਨੁਵਾਦ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ ਤਤਕਾਲ ਅਨੁਵਾਦ ਸੇਵਾ\n ਸੰਸਕਰਣ {{VERSION}}',
  info_description: 'ਡਿਵੈਲਪਰਾਂ ਲਈ ਇੱਕ ਸਾਧਨ। ਹੋਕੀਲਾਈਜ਼ੇਸ਼ਨ ਦੇ ਨਾਲ, ਤੁਹਾਡੀ ਐਪ ਦਾ ਸਥਾਨੀਕਰਨ ਤੇਜ਼, ਮਜ਼ੇਦਾਰ ਅਤੇ ਆਸਾਨ ਹੋ ਸਕਦਾ ਹੈ!\n\n === ਸਰੋਤ ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === ਲੋੜੀਂਦੇ ਵਾਤਾਵਰਣ ਵੇਰੀਏਬਲ ===\n * GOOGLE_TRANSLATE_PROJECT_ID: ਤੁਹਾਡਾ Google ਅਨੁਵਾਦ ਪ੍ਰੋਜੈਕਟ\n * GOOGLE_APPLICATION_CREDENTIALS: ਤੁਹਾਡੇ ਪ੍ਰਮਾਣ ਪੱਤਰ JSON ਫਾਈਲ\n\n === ISO ਭਾਸ਼ਾ ਕੋਡ ===\n ISO ਕੋਡ ਨਿਰਧਾਰਤ ਕਰਦੇ ਸਮੇਂ (ਜਾਂ ਤਾਂ ਇਨਪੁਟ ਭਾਸ਼ਾ ਜਾਂ ਟੀਚਾ ਭਾਸ਼ਾਵਾਂ) ਇਹਨਾਂ ਕੋਡਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ਭਾਸ਼ਾਵਾਂ ਤੋਂ ਅਨੁਵਾਦ ਕਰਨ ਲਈ ISO ਕੋਡ। ਡਿਫੌਲਟ {{DEFAULT_LOCALE}} ਹੈ',
  info_option_processAs: 'ਟਾਈਪ ਟੈਕਸਟ ਜਾਂ html ਹੋ ਸਕਦਾ ਹੈ। ਪੂਰਵ-ਨਿਰਧਾਰਤ ਟੈਕਸਟ ਹੈ',
  info_option_match: 'ਇੱਕ ਡਾਇਰੈਕਟਰੀ ਦੀ ਪ੍ਰਕਿਰਿਆ ਕਰਦੇ ਸਮੇਂ, ਸਿਰਫ਼ ਉਹਨਾਂ ਫ਼ਾਈਲਾਂ \'ਤੇ ਵਿਚਾਰ ਕਰੋ ਜੋ ਇਸ regex ਨਾਲ ਮੇਲ ਖਾਂਦੀਆਂ ਹਨ',
  info_option_excludes: 'ਇੱਕ ਡਾਇਰੈਕਟਰੀ ਦੀ ਪ੍ਰਕਿਰਿਆ ਕਰਦੇ ਸਮੇਂ, ਇਹਨਾਂ ਰੇਗੈਕਸਾਂ ਨਾਲ ਮੇਲ ਖਾਂਦੀਆਂ ਫਾਈਲਾਂ ਨੂੰ ਸਪਸ਼ਟ ਤੌਰ \'ਤੇ ਬਾਹਰ ਕੱਢੋ, ਭਾਵੇਂ ਉਹ `-m` / `--match` regex ਨਾਲ ਮੇਲ ਖਾਂਦੀਆਂ ਹੋਣ।',
  info_option_filter: 'ਇੱਕ ਡਾਇਰੈਕਟਰੀ ਨੂੰ ਪ੍ਰੋਸੈਸ ਕਰਦੇ ਸਮੇਂ: 1) ਇਸ JS ਫਾਈਲ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਜਿਸ ਨੂੰ \'ਫਿਲਟਰ\' ਨਾਮਕ ਇੱਕ ਫੰਕਸ਼ਨ ਨਿਰਯਾਤ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ ਜੋ ਇੱਕ ਸਟ੍ਰਿੰਗ ਪੈਰਾਮੀਟਰ ਲੈਂਦਾ ਹੈ ਅਤੇ ਇੱਕ ਸਟ੍ਰਿੰਗ ਵਾਪਸ ਕਰਦਾ ਹੈ, ਅਤੇ 2) ਇਸ ਫਿਲਟਰ ਫੰਕਸ਼ਨ ਨੂੰ ਸਾਰੀਆਂ ਆਉਟਪੁੱਟ ਫਾਈਲਾਂ ਦੇ ਲਿਖਣ ਤੋਂ ਪਹਿਲਾਂ ਲਾਗੂ ਕਰੋ',
  info_option_dryRun: 'ਗੂਗਲ ਟ੍ਰਾਂਸਲੇਟ \'ਤੇ ਕੋਈ ਫਾਈਲਾਂ ਨਾ ਲਿਖੋ ਜਾਂ ਕੋਈ API ਕਾਲ ਨਾ ਕਰੋ, ਪਰ ਲੌਗ ਕਰੋ ਜੋ ਕੀਤਾ ਗਿਆ ਸੀ',
  info_option_languages: 'ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਅਨੁਵਾਦ ਕਰਨ ਲਈ ISO ਕੋਡਾਂ ਦੀ ਕੌਮੇ ਨਾਲ ਵੱਖ ਕੀਤੀ ਸੂਚੀ',
  info_option_outfile: 'ਜੇਐਸ ਫਾਈਲ ਪ੍ਰੋਸੈਸਿੰਗ ਲਈ: ਇਸ ਫਾਈਲ ਵਿੱਚ ਜੇਐਸ ਆਉਟਪੁੱਟ ਲਿਖੋ\n ਡਾਇਰੈਕਟਰੀ ਪ੍ਰੋਸੈਸਿੰਗ ਲਈ: ਇਸ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਫਾਈਲਾਂ ਲਿਖੋ, ਜੋ ਕਿ ਬਣਾਈ ਜਾਵੇਗੀ ਜੇਕਰ ਇਹ ਮੌਜੂਦ ਨਹੀਂ ਹੈ',
  info_option_force: 'ਕਿਸੇ ਵੀ ਮੌਜੂਦਾ ਆਉਟਪੁੱਟ ਫਾਈਲਾਂ ਨੂੰ ਓਵਰਰਾਈਟ ਕਰਦੇ ਹੋਏ, ਹਮੇਸ਼ਾਂ ਨਵੇਂ ਅਨੁਵਾਦ ਤਿਆਰ ਕਰੋ',
  info_option_handlebars: 'ਇਹ ਸੁਨਿਸ਼ਚਿਤ ਕਰੋ ਕਿ {{ handlebars }} ਸਮੱਗਰੀ ਨੂੰ ਇਸ ਤਰ੍ਹਾਂ ਸੁਰੱਖਿਅਤ ਰੱਖਿਆ ਗਿਆ ਹੈ ਅਤੇ ਅਨੁਵਾਦ ਨਹੀਂ ਕੀਤਾ ਗਿਆ ਹੈ',
  info_option_markdown: 'ਯਕੀਨੀ ਬਣਾਓ ਕਿ [ਮਾਰਕਡਾਊਨ](https://links) ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਸੁਰੱਖਿਅਤ ਰੱਖਿਆ ਗਿਆ ਹੈ, ਨਹੀਂ ਤਾਂ ਵਰਗ ਬਰੈਕਟਾਂ ਵਿੱਚ ਲਿੰਕ ਵਰਣਨ ਦੇ ਅੰਤ ਅਤੇ ਬਰੈਕਟਾਂ ਵਿੱਚ ਲਿੰਕ ਦੇ ਵਿਚਕਾਰ ਇੱਕ ਸਪੇਸ ਪੇਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ',
  info_arg_source: 'ਅਨੁਵਾਦ ਲਈ ਸਰੋਤ; JS ਫ਼ਾਈਲ ਜਾਂ ਅਨੁਵਾਦ ਕਰਨ ਲਈ ਫ਼ਾਈਲਾਂ ਦੀ ਡਾਇਰੈਕਟਰੀ ਹੋ ਸਕਦੀ ਹੈ',
  info_filter_applied: 'ਫਿਲਟਰ ਲਿਖਣ ਤੋਂ ਪਹਿਲਾਂ ਸਫਲਤਾਪੂਰਵਕ ਲਾਗੂ ਕੀਤਾ ਗਿਆ: {{langFile}}',
  info_dryRun_key: '(ਡਰਾਈ ਰਨ) ਕੁੰਜੀ ਲਈ ਅਨੁਵਾਦ ਨਹੀਂ ਲਿਖ ਰਿਹਾ: {{key}}',
  info_dryRun_file: '(ਡਰਾਈ ਰਨ) ਨੇ ਫਾਈਲ ਲਿਖੀ ਹੋਵੇਗੀ: {{langOut}}',
  warn_walk_readDir: 'ਵਾਕ ( {{dir}} ): ਤਰੁੱਟੀ ਪੜ੍ਹਨ: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਫਾਈਲਾਂ ਨੂੰ ਸੂਚੀਬੱਧ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਵਿੱਚ ਇੱਕ ਤਰੁੱਟੀ ਆਈ ਹੈ: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ਇਹ ਮਾਰਗ ਇੱਕ ਡਾਇਰੈਕਟਰੀ ਨਹੀਂ ਹੈ',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): ਮੌਜੂਦਾ ਫਾਈਲ ਨੂੰ ਛੱਡਣਾ: {{langFile.file}}',
  info_processDirectory_fileWritten: 'ਫਾਈਲ ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ ਹੈ: {{langFile}}',
  err_option_json_notFound: 'JSON ਫ਼ਾਈਲ ਨਹੀਂ ਮਿਲੀ: {{ jsonFile }}',
  err_option_json_errorReading: 'JSON ਫਾਈਲ ਨੂੰ ਪੜ੍ਹਨ ਜਾਂ ਪਾਰਸ ਕਰਨ ਵਿੱਚ ਇੱਕ ਤਰੁੱਟੀ ਉਤਪੰਨ ਹੋਈ {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'ਕੋਈ ਅਨੁਵਾਦ ਭਾਸ਼ਾਵਾਂ ਨਿਰਧਾਰਤ ਨਹੀਂ ਕੀਤੀਆਂ ਗਈਆਂ ਹਨ। `-l` / `--languages` ਦੀ ਵਰਤੋਂ ਕਰੋ ਅਤੇ ISO ਭਾਸ਼ਾ ਕੋਡਾਂ ਦੀ ਕੌਮੇ ਨਾਲ ਵੱਖ ਕੀਤੀ ਸੂਚੀ ਦਿਓ',
  err_option_outfile_required: 'ਕੋਈ ਆਉਟਪੁੱਟ ਫਾਈਲ ਜਾਂ ਡਾਇਰੈਕਟਰੀ ਨਹੀਂ ਦਿੱਤੀ ਗਈ ਸੀ। ਆਉਟਪੁੱਟ ਫਾਈਲ ਜਾਂ ਡਾਇਰੈਕਟਰੀ ਨੂੰ ਨਿਸ਼ਚਿਤ ਕਰਨ ਲਈ `-o` / `--outfile` ਦੀ ਵਰਤੋਂ ਕਰੋ',
  err_noSources: 'ਅਨੁਵਾਦ ਲਈ ਕੋਈ ਸਰੋਤ ਫਾਈਲਾਂ ਪ੍ਰਦਾਨ ਨਹੀਂ ਕੀਤੀਆਂ ਗਈਆਂ',
  info_option_jsonFile: 'ਇੱਕ JSON ਫਾਈਲ ਵਿੱਚ ਨਿਰਦਿਸ਼ਟ ਕਈ ਹੋਕੀ ਕਮਾਂਡਾਂ ਚਲਾਓ। ਜੇਕਰ ਕੋਈ JSON ਫਾਈਲ ਪ੍ਰਦਾਨ ਨਹੀਂ ਕੀਤੀ ਜਾਂਦੀ, ਤਾਂ ਕਮਾਂਡ ਮੌਜੂਦਾ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ \'hokey.json\' ਨਾਮ ਦੀ ਇੱਕ ਫਾਈਲ ਲੱਭਦੀ ਹੈ',
  info_option_indexFile: 'ਅਨੁਵਾਦਾਂ ਲਈ ਇੱਕ ਇੰਡੈਕਸ ਫਾਈਲ ਤਿਆਰ ਕਰੋ। ਫਾਈਲ ਦਾ ਨਾਮ `.html`, `.md` ਜਾਂ `.txt` ਨਾਲ ਖਤਮ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ, ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ `-A` / `--ਇੰਡੈਕਸ-ਟੈਂਪਲੇਟ` ਵਾਲਾ ਟੈਮਪਲੇਟ ਸਪਲਾਈ ਨਹੀਂ ਕਰਦੇ',
  info_option_indexTemplate: 'ਇਹ \'html\', \'ਮਾਰਕਡਾਊਨ\', \'ਟੈਕਸਟ\', ਜਾਂ ਤੁਹਾਡੇ ਆਪਣੇ ਹੈਂਡਲਬਾਰ ਟੈਂਪਲੇਟ ਦਾ ਮਾਰਗ ਹੋ ਸਕਦਾ ਹੈ। ਇਹ ਟੈਮਪਲੇਟ ਇੰਡੈਕਸ ਫਾਈਲ ਬਣਾਉਣ ਵੇਲੇ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਉਦਾਹਰਨਾਂ ਲਈ ਹੋਕੀਲਾਈਜ਼ੇਸ਼ਨ ਸੋਰਸ ਕੋਡ ਵਿੱਚ ਡਿਫੌਲਟ ਟੈਂਪਲੇਟ ਦੇਖੋ',
  info_option_regular: 'ਸਰੋਤ ਫਾਈਲਾਂ ਨੂੰ ਨਿਯਮਤ ਫਾਈਲਾਂ ਦੇ ਰੂਪ ਵਿੱਚ ਅਨੁਵਾਦ ਕਰੋ, ਸਟ੍ਰਿੰਗ ਸਰੋਤਾਂ ਵਾਲੀਆਂ JavaScript ਵਸਤੂਆਂ ਦਾ ਅਨੁਵਾਦ ਨਾ ਕਰੋ। `-M` / `--ਮਾਰਕਡਾਊਨ` ਫਲੈਗ ਇਸ ਝੰਡੇ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।',
  info_arg_sources: 'ਅਨੁਵਾਦਾਂ ਲਈ ਸਰੋਤ; ਇਹ ਇੱਕ ਜਾਂ ਵੱਧ JavaScript ਫਾਈਲਾਂ ਜਾਂ ਡਾਇਰੈਕਟਰੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹਨ',
  info_jsonProcessing_start: 'JSON ਪ੍ਰੋਸੈਸਿੰਗ ਸੰਰਚਨਾ: {{name}}',
  err_index_singleFileMultipleSources: 'ਇੱਕ ਸਿੰਗਲ ਇੰਡੈਕਸ ਫਾਈਲ ਨਿਰਧਾਰਤ ਕੀਤੀ ਗਈ ਸੀ, ਪਰ ਕਈ ਇਨਪੁਟ ਫਾਈਲਾਂ ਹਨ। ਸੂਚਕਾਂਕ ਲਈ ਇੱਕ ਫਾਈਲ ਦੀ ਬਜਾਏ ਇੱਕ ਡਾਇਰੈਕਟਰੀ ਦਿਓ',
  err_index_targetDirAndNoTypeOrTemplate: 'ਇੰਡੈਕਸ ਲਈ ਇੱਕ ਟੀਚਾ ਡਾਇਰੈਕਟਰੀ ਨਿਰਧਾਰਤ ਕੀਤੀ ਗਈ ਸੀ, ਪਰ ਕੋਈ ਇੰਡੈਕਸ ਟੈਮਪਲੇਟ ਨਹੀਂ ਦਿੱਤਾ ਗਿਆ ਸੀ। ਇੱਕ ਟੈਮਪਲੇਟ ਚੁਣਨ ਲਈ `-A` / `--indexTemplate` ਦੀ ਵਰਤੋਂ ਕਰੋ',
  err_index_parentDirDoesNotExist: 'ਸੂਚਕਾਂਕ ਦੀ ਮੂਲ ਡਾਇਰੈਕਟਰੀ ਮੌਜੂਦ ਨਹੀਂ ਹੈ: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'ਫਾਈਲ ਨਾਮ ਦਾ ਕੋਈ ਐਕਸਟੈਂਸ਼ਨ ਨਹੀਂ ਹੈ ਇਸਲਈ ਟੈਮਪਲੇਟ ਕਿਸਮ ਨਿਰਧਾਰਤ ਨਹੀਂ ਕੀਤੀ ਜਾ ਸਕਦੀ: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'ਫਾਈਲ ਨਾਮ ਵਿੱਚ ਇੱਕ ਅਵੈਧ ਐਕਸਟੈਂਸ਼ਨ ਹੈ ਇਸਲਈ ਇੱਕ ਟੈਮਪਲੇਟ ਕਿਸਮ ਨਿਰਧਾਰਤ ਨਹੀਂ ਕੀਤੀ ਜਾ ਸਕਦੀ: {{ file }}',
  err_index_templateLoadingError: 'ਕਸਟਮ ਟੈਂਪਲੇਟ ਨੂੰ ਲੋਡ ਕਰਨ ਦੌਰਾਨ ਇੱਕ ਤਰੁੱਟੀ ਉਤਪੰਨ ਹੋਈ {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'ਕਸਟਮ ਟੈਂਪਲੇਟ ਨੂੰ ਕੰਪਾਇਲ ਕਰਨ ਵਿੱਚ ਇੱਕ ਤਰੁੱਟੀ ਆਈ ਹੈ {{ file }} : {{ e }}',
  info_index_wroteFile: 'ਇੰਡੈਕਸ ਫਾਈਲ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਈ ਗਈ: {{ indexFile }}',
  label_indexOfTranslations: 'ਅਨੁਵਾਦਾਂ ਦਾ ਸੂਚਕਾਂਕ',
  label_findYourLanguageCode: 'ਆਪਣਾ ਭਾਸ਼ਾ ਕੋਡ ਲੱਭੋ',
  err_processing_unknown: '*** ਅਚਾਨਕ ਗਲਤੀ: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'ਭਾਸ਼ਾ ਲਈ ਕੋਈ ਆਉਟਪੁੱਟ ਫਾਈਲ ਨਹੀਂ ਬਣਾਈ ਗਈ ਸੀ {{ lang }} , ਇਸਲਈ ਇਸਨੂੰ ਸੂਚਕਾਂਕ ਤੋਂ ਬਾਹਰ ਰੱਖਿਆ ਜਾਵੇਗਾ।',
  err_filter_loading: 'ਫਿਲਟਰ ਨਹੀਂ ਮਿਲਿਆ: {{ filter }}\n ਫਿਲਟਰ ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਵਿੱਚ ਨਹੀਂ ਮਿਲਿਆ: ਮੌਜੂਦਾ ਡਾਇਰੈਕਟਰੀ, ./.hokey-filters ਡਾਇਰੈਕਟਰੀ, ${HOME}/.hokey-filters ਡਾਇਰੈਕਟਰੀ, ਨਾ ਹੀ ਬਿਲਟ-ਇਨ ਫਿਲਟਰ ਡਾਇਰੈਕਟਰੀ।'
}