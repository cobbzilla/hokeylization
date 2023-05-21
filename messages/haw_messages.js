export default {
  err_fatal: 'HEMA FATAL: {{error}}',
  err_env_googleProjectId: 'ʻAʻole wehewehe ʻia ka ʻano hoʻololi kaiapuni GOOGLE_TRANSLATE_PROJECT_ID',
  err_env_googleCredentials: 'ʻAʻole wehewehe ʻia ka ʻano hoʻololi kaiapuni GOOGLE_APPLICATION_CREDENTIALS',
  err_option_processAs_invalid: 'Waiwai koho hewa ʻole no -p / --process-as : kākoʻo wale kēia koho i nā waiwai o \'text\' a i \'html\'',
  err_infileNotFound: 'ʻAʻole i loaʻa ka waihona hoʻokomo a i ʻole ka papa kuhikuhi: {{ jsFile }}',
  err_cannotWriteSource: 'hōʻole ʻana i ke kākau ʻana i ke kumu hoʻokomo (ua ʻōlelo ʻia ma nā ʻōlelo hoʻopuka): {{source}}',
  err_invalidOutfile: 'i manaʻo ʻia he waihona \'LANG\' (e pani ʻia me {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: hoʻomaka ka faila {{ file }} me ka \'export default\' a i ʻole \'module.exports\' akā loaʻa: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json hewa ʻole ma {{file}}',
  err_processFile_writeFile: '*** Ua hewa ke kākau ʻana i waho no {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Ua hewa ka unuhi ʻana: {{e}}',
  err_processing: '*** Kupa i manaʻo ʻole ʻia: {{e}}',
  warn_missing_close_notranslate_tag: 'ʻAʻole i loaʻa kahi hōʻailona pani kahi i manaʻo ʻia ai. Lepili {{ label }} , helu laina {{ lineNumber }} , laina: {{ line }}',
  info_summary: 'He lawelawe unuhi wikiwiki me ka hoʻohana ʻana i ka Unuhi Google\n Manaʻo {{VERSION}}',
  info_description: 'He mea hana no nā mea hoʻomohala. Me ka hokeylization, hiki ke wikiwiki, leʻaleʻa a maʻalahi ka hoʻokaʻawale ʻana i kāu app!\n\n === Puna ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Koi ʻia nā mea hoʻololi kaiapuni ===\n * GOOGLE_TRANSLATE_PROJECT_ID: kāu papahana Unuhi Google\n * GOOGLE_APPLICATION_CREDENTIALS: kāu waihona JSON hōʻoia\n\n === Nā code ʻōlelo ISO ===\n Ke kuhikuhi ʻana i nā code ISO (ʻo ka ʻōlelo hoʻokomo a i ʻole nā ʻōlelo i ʻimi ʻia) e hoʻohana i kēia mau code:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO no nā ʻōlelo e unuhi ai. ʻO {{DEFAULT_LOCALE}} ka paʻamau',
  info_option_processAs: 'Hiki ke kikokiko a html paha. ʻO ka paʻamau ka kikokikona',
  info_option_match: 'I ka hoʻoponopono ʻana i kahi papa kuhikuhi, e noʻonoʻo wale i nā faila e pili ana i kēia regex',
  info_option_excludes: 'I ka wā e hana ana i kahi papa kuhikuhi, e hoʻokaʻawale loa i nā faila e pili ana i kēia mau regexes, ʻoiai inā e kūlike lākou i ka `-m` / `--match` regex.',
  info_option_filter: 'I ka hana ʻana i kahi papa kuhikuhi: 1) koi i kēia faila JS, pono e hoʻokuʻu aku i kahi hana i kapa ʻia ʻo `filter` e lawe i kahi ʻāpana string a hoʻihoʻi i kahi kaula, a 2) e hoʻopili i kēia hana kānana i nā faila a pau ma mua o ka kākau ʻana.',
  info_option_dryRun: 'Mai kākau i nā faila a i ʻole kelepona API i Google Unuhi, akā e kākau i ka mea i hana ʻia',
  info_option_languages: 'Papa inoa o nā code ISO i hoʻokaʻawale ʻia i nā piko no nā ʻōlelo e unuhi ai',
  info_option_outfile: 'No ka hoʻoponopono faila JS: e kākau i ka puka JS i kēia faila\n No ka hana papa kuhikuhi: e kākau i nā faila i kēia papa kuhikuhi, e hana ʻia inā ʻaʻole ia',
  info_option_force: 'E hoʻopuka mau i nā unuhi hou, me ke kākau ʻana i nā faila i loaʻa',
  info_option_handlebars: 'E hōʻoia i ka mālama ʻia ʻana o ka maʻiʻo {{ handlebars }} a ʻaʻole unuhi ʻia',
  info_option_markdown: 'E mālama pono i ka [markdown](https://links), i ʻole e hoʻokomo ʻia kahi hakahaka ma waena o ka hopena o ka wehewehe ʻana i ka loulou ma nā bracket square a me ka loulou ponoʻī ma nā pale.',
  info_arg_source: 'Ke kumu no ka unuhi; hiki ke lilo i faila JS a i ʻole papa kuhikuhi o nā faila e unuhi',
  info_filter_applied: 'Hoʻohana pono ʻia ka kānana ma mua o ke kākau ʻana: {{langFile}}',
  info_dryRun_key: '(holo maloʻo) ʻaʻole kākau i ka unuhi no ke kī: {{key}}',
  info_dryRun_file: '(holo maloʻo) i kākau ʻia ka faila: {{langOut}}',
  warn_walk_readDir: 'hele ( {{dir}} ): hewa heluhelu: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): ua hewa ka ho\'āʻo ʻana e papa inoa i nā faila ma ka papa kuhikuhi: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ʻaʻole kēia ala he papa kuhikuhi',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): e lele ana i ka waihona i kēia manawa: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Ua kākau ʻia ka faila: {{langFile}}',
  err_option_json_notFound: 'ʻAʻole i loaʻa ka faila JSON: {{ jsonFile }}',
  err_option_json_errorReading: 'Ua hewa ka heluhelu ʻana a i ʻole ka hoʻopau ʻana i ka faila JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'ʻAʻohe ʻōlelo unuhi i kuhikuhi ʻia. E hoʻohana i ka `-l` / `--languages` a e kuhikuhi i kahi papa inoa o nā code ʻōlelo ISO i hoʻokaʻawale ʻia i ke koma.',
  err_option_outfile_required: 'ʻAʻole i kuhikuhi ʻia kahi faila a i ʻole papa kuhikuhi. E hoʻohana i ka `-o` / `--outfile` no ka wehewehe ʻana i ka faila a i ʻole ka papa kuhikuhi',
  err_noSources: 'ʻaʻohe waihona kumu no ka unuhi ʻana',
  info_option_jsonFile: 'E holo i nā kauoha hokey he nui i kuhikuhi ʻia ma kahi faila JSON. Inā ʻaʻole hāʻawi ʻia kahi faila JSON, ʻimi ke kauoha i kahi faila i kapa ʻia ʻo \'hokey.json\' i ka papa kuhikuhi o kēia manawa',
  info_option_indexFile: 'E hana i kahi waihona kuhikuhi no nā unuhi. Pono e hoʻopau ka inoa waihona me `.html`, `.md` a i ʻole .txt`, ke ʻole ʻoe e hāʻawi i kahi laʻa me `-A` / `--index-template`',
  info_option_indexTemplate: 'Hiki iā ia ke \'html\', \'markdown\', \'text\', a i ʻole he ala e hele ai i kāu hōʻailona pahu lima ponoʻī. Hoʻohana ʻia kēia mamana i ka hana ʻana i ka faila index. E nānā i nā la\'ana ma ka hokeylization source code no nā la\'ana',
  info_option_regular: 'Unuhi i nā waihona kumu e like me nā faila maʻamau, ʻaʻole ka unuhi ʻana i nā mea JavaScript i loaʻa nā kumuwaiwai string. Hōʻike ka hae `-M` / `--markdown` i kēia hae.',
  info_arg_sources: 'Ke kumu no nā unuhi; hiki kēia i hoʻokahi a ʻoi aku paha nā faila JavaScript a i ʻole nā papa kuhikuhi',
  info_jsonProcessing_start: 'Hoʻonohonoho hoʻoponopono JSON: {{name}}',
  err_index_singleFileMultipleSources: 'Ua kuhikuhi ʻia kahi faila helu hoʻokahi, akā nui nā faila hoʻokomo. E kuhikuhi i kahi papa kuhikuhi ma kahi o kahi faila no ka index',
  err_index_targetDirAndNoTypeOrTemplate: 'Ua kuhikuhi ʻia kahi papa kuhikuhi kuhikuhi no ka papa kuhikuhi, akā ʻaʻole i kuhikuhi ʻia ka laʻana kuhikuhi. E hoʻohana i ka `-A` / `--indexTemplate` no ke koho ʻana i ka laʻana',
  err_index_parentDirDoesNotExist: 'ʻAʻole i loaʻa ka papa kuhikuhi makua o ka papa kuhikuhi: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'ʻAʻohe hoʻonui ʻia ka inoa waihona no laila ʻaʻole hiki ke hoʻoholo ʻia ke ʻano hoʻohālike: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'He hoʻopaneʻe kūpono ʻole ka inoa waihona no laila ʻaʻole hiki ke hoʻoholo i ke ʻano hoʻohālike: {{ file }}',
  err_index_templateLoadingError: 'Ua hewa i ka hoʻouka ʻana i ka laʻana maʻamau {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Ua hewa i ka houluulu ana i ka la\'ana ma\'amau {{ file }} : {{ e }}',
  info_index_wroteFile: 'Ua holomua ka waihona kuhikuhi: {{ indexFile }}',
  label_indexOfTranslations: 'Papa kuhikuhi o nā unuhi',
  label_findYourLanguageCode: 'E huli i kāu code ʻōlelo',
  err_processing_unknown: '*** Kupa i manaʻo ʻole ʻia: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'ʻAʻole i hoʻokumu ʻia kahi faila no ka ʻōlelo {{ lang }} , no laila e kāpae ʻia mai ka papa kuhikuhi',
  err_filter_loading: 'ʻAʻole i loaʻa ke kānana: {{ filter }}\n ʻAʻole i loaʻa ka kānana ma kekahi o: ka papa kuhikuhi o kēia manawa, ka papa kuhikuhi ./.hokey-filters, ka papa kuhikuhi ${HOME}/.hokey-filters, a i ʻole ka papa kuhikuhi kānana i kūkulu ʻia.'
}