export default {
  err_fatal: 'IKOSA RY\'URUPFU: {{error}}',
  err_env_googleProjectId: 'Ibidukikije bihinduka GOOGLE_TRANSLATE_PROJECT_ID ntabwo bisobanuwe',
  err_env_googleCredentials: 'Ibidukikije bihinduka GOOGLE_APPLICATION_CREDENTIALS ntabwo bisobanuwe',
  err_option_processAs_invalid: 'Ihitamo ritemewe kuri -p / --ibikorwa-nk: iyi nzira ishyigikira gusa indangagaciro z \'inyandiko\' cyangwa \'html\'',
  err_infileNotFound: 'dosiye yinjiza cyangwa ububiko butabonetse: {{ jsFile }}',
  err_cannotWriteSource: 'kwanga kwandika hejuru yinjiza (byasobanuwe mundimi zisohoka): {{source}}',
  err_invalidOutfile: 'biteganijwe gusohoka birimo \'URURIMI\' (gusimburwa na {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'somaMessageKeys: dosiye iteganijwe {{ file }} gutangirana na \'kohereza ibicuruzwa hanze\' cyangwa \'module.ibicuruzwa\' ariko ugasanga: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json itemewe muri {{file}}',
  err_processFile_writeFile: '*** Ikosa ryo kwandika kuri {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Gusobanura amakosa: {{e}}',
  err_processing: '*** Ikosa ritunguranye: {{e}}',
  warn_missing_close_notranslate_tag: 'Ibisohoka mubisobanuro byabuze tagi yo gufunga aho umuntu yari ateganijwe. Ikirango {{ label }} , nimero y\'umurongo {{ lineNumber }} , umurongo: {{ line }}',
  info_summary: 'Serivise yubuhinduzi bwihuse ukoresheje Google Translate\n Inyandiko {{VERSION}}',
  info_description: 'Igikoresho kubateza imbere. Hamwe na hokeylisation, kwimenyekanisha porogaramu yawe irashobora kwihuta, kwishimisha kandi byoroshye!\n\n === Inkomoko ===\n GitHub: https://github.com/cobbzilla/hokeylisation\n npm: https://www.npmjs.com/package/hokeylisation\n\n === BISABWA Ibidukikije bihinduka ===\n * GOOGLE_TRANSLATE_PROJECT_ID: umushinga wawe wo guhindura Google\n * GOOGLE_APPLICATION_CREDENTIALS: ibyangombwa byawe dosiye ya JSON\n\n === Kode y\'ururimi ISO ===\n Mugihe ugaragaza kode ya ISO (ururimi rwinjiza cyangwa indimi zigenewe) koresha aya ma code:\n https://cloud.google.com/translate/docs/ururimi',
  info_option_inputLanguage: 'ISO kode yindimi zo guhindura kuva. Ibisanzwe ni {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Ubwoko bushobora kuba inyandiko cyangwa html. Mburabuzi ni inyandiko',
  info_option_match: 'Mugihe utunganya ububiko, tekereza gusa dosiye zihuye niyi regex',
  info_option_excludes: 'Mugihe utunganya ububiko, usibye neza dosiye zihuye niyi regexes, kabone niyo zaba zihuye na regex ya `-m` /` --match`',
  info_option_filter: 'Mugihe utunganya ububiko: 1) bisaba iyi dosiye ya JS, igomba kohereza mumikorere yitwa `filter` ifata umurongo wibintu hanyuma igasubiza umurongo, na 2) shyira mugikorwa cyo kuyungurura kumadosiye yose asohoka mbere yuko yandikwa',
  info_option_dryRun: 'Ntugakore kwandika dosiye iyo ari yo yose cyangwa guhamagara API kuri Google Translate, ariko andika ibyari gukorwa',
  info_option_languages: 'Urutonde rwatandukanijwe na kode ya ISO yindimi zo guhinduranya',
  info_option_outfile: 'Kubikorwa bya JS: andika JS ibisohoka muriyi dosiye\n Kubikorwa byububiko: andika dosiye kuriyi diregiteri, izaremwa niba idahari',
  info_option_force: 'Buri gihe utange ibisobanuro bishya, wandike dosiye zose zisohoka',
  info_option_handlebars: 'Menya neza ko {{ handlebars }} ibirimo bibitswe uko biri kandi NTIBISANZWE',
  info_option_markdown: 'Menya neza ko [ikimenyetso]',
  info_arg_source: 'Inkomoko y\'ubuhinduzi; irashobora kuba JS dosiye cyangwa ububiko bwamadosiye yo guhindura',
  info_filter_applied: 'Akayunguruzo gakoreshwa neza mbere yo kwandika: {{langFile}}',
  info_dryRun_key: '(kwiruka byumye) kutandika ibisobanuro kurufunguzo: {{key}}',
  info_dryRun_file: '(gukama byumye) yaba yanditse dosiye: {{langOut}}',
  warn_walk_readDir: 'kugenda ( {{dir}} ): gusoma amakosa: {{e}}',
  err_readDirFiles_mkdir: 'somaDirFiles ( {{dir}} ): habaye ikosa ugerageza gutondekanya dosiye mububiko: {{e}}',
  err_readDirFiles_notDir: 'somaDirFiles ( {{dir}} ): iyi nzira ntabwo ari ububiko',
  info_processDirectory_skippingExisting: 'inziraUbuyobozi ( {{lang}} ): gusimbuka dosiye iriho: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Dosiye yanditse: {{langFile}}',
  err_option_json_notFound: 'Idosiye ya JSON ntabwo yabonetse: {{ jsonFile }}',
  err_option_json_errorReading: 'Ikosa ryabaye gusoma cyangwa gusesengura dosiye ya JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Nta ndimi z\'ubuhinduzi zisobanuwe. Koresha `-l` /` --ururimi` hanyuma ugaragaze urutonde rwatandukanijwe na koma y\'ururimi rwa ISO',
  err_option_outfile_required: 'Nta dosiye isohoka cyangwa ububiko bwerekanwe. Koresha `-o` /` --outfile` kugirango ugaragaze dosiye isohoka cyangwa ububiko',
  err_noSources: 'nta dosiye yinkomoko yatanzwe kugirango ihindurwe',
  info_option_jsonFile: 'Koresha amategeko menshi ya hokey yerekanwe muri dosiye ya JSON. Niba nta dosiye ya JSON yatanzwe, itegeko rishakisha dosiye yitwa \'hokey.json\' mububiko bwubu',
  info_option_indexFile: 'Gukora indangagaciro ya dosiye kubisobanuro. Izina ryizina rigomba kurangirana na `.html`,` .md` cyangwa `.txt`, keretse utanze icyitegererezo hamwe na` -A` / `--index-template`',
  info_option_indexTemplate: 'Ibi birashobora kuba \'html\', \'akamenyetso\', \'inyandiko\', cyangwa inzira iganisha ku ntoki zawe bwite. Inyandikorugero ikoreshwa mugihe cyo gukora indangagaciro ya dosiye. Reba inyandikorugero isanzwe muri kode ya hokeylisation yingero',
  info_option_regular: 'Sobanura dosiye yinkomoko nkamadosiye asanzwe, ntusobanure ibintu bya JavaScript birimo ibikoresho byumugozi. Ibendera rya -M` / `--markdown` ryerekana iri bendera.',
  info_arg_sources: 'Inkomoko (y) ibisobanuro; iyi irashobora kuba imwe cyangwa nyinshi dosiye ya JavaScript cyangwa ububiko',
  info_jsonProcessing_start: 'JSON itunganya config: {{name}}',
  err_index_singleFileMultipleSources: 'Idosiye imwe yerekana indangagaciro, ariko hariho dosiye nyinshi zinjiza. Kugaragaza ububiko aho kuba dosiye yerekana urutonde',
  err_index_targetDirAndNoTypeOrTemplate: 'Ububiko bwerekanwe bwerekanwe kurutonde, ariko nta cyitegererezo cyerekanwe. Koresha `-A` /` --indexTemplate` kugirango uhitemo icyitegererezo',
  err_index_parentDirDoesNotExist: 'Ububiko bwababyeyi bwurutonde ntibubaho: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Izina ryizina ntirishobora kwaguka kuburyo ubwoko bwicyitegererezo budashobora kugenwa: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Izina ryizina rifite umugereka utemewe kuburyo ubwoko bwicyitegererezo budashobora kugenwa: {{ file }}',
  err_index_templateLoadingError: 'Ikosa ryabaye ryipakurura icyitegererezo {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Ikosa ryabaye ryerekana icyitegererezo {{ file }} : {{ e }}',
  info_index_wroteFile: 'Idosiye yakozwe neza: {{ indexFile }}',
  label_indexOfTranslations: 'Ironderero ry\'ubuhinduzi',
  label_findYourLanguageCode: 'Shakisha ururimi rwawe',
  err_processing_unknown: '*** Ikosa ritunguranye: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Nta dosiye isohoka yakozwe mururimi {{ lang }} , bityo izakurwa kurutonde',
  err_filter_loading: 'Akayunguruzo ntikaboneka: {{ filter }}\n Akayunguruzo ntikabonetse muri kimwe muri: ububiko bwubu, ./.hokey-filters ububiko, $ {URUGO} /.'
}