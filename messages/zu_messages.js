export default {
  err_fatal: 'IPHUTHA ELIBI: {{error}}',
  err_env_googleProjectId: 'Ukuhluka kwemvelo GOOGLE_TRANSLATE_PROJECT_ID akuchazwanga',
  err_env_googleCredentials: 'Ukuhluka kwemvelo GOOGLE_APPLICATION_CREDENTIALS akuchazwanga',
  err_option_processAs_invalid: 'Inani lenketho elingavumelekile le- -p / --process-as : le nketho isekela kuphela amanani \'ombhalo\' noma \'html\'',
  err_infileNotFound: 'ifayela lokufaka noma uhla lwemibhalo alutholakali: {{ jsFile }}',
  err_cannotWriteSource: 'ukwenqaba ukubhala phezu komthombo wokufakwayo (kwacaciswa ezilimini eziphumayo): {{source}}',
  err_invalidOutfile: 'okulindelekile ukuthi kuqukathe i-\'LANG\' (ezothathelwa indawo {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: ifayela elilindelekile elingu- {{ file }} ukuthi liqale ngokuthi \'ukuthekelisa okuzenzakalelayo\' noma \'i-module.exports\' kodwa kwatholakala: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'I-json engavumelekile ku- {{file}}',
  err_processFile_writeFile: '*** Iphutha ekubhaleni ku-outfile ye- {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Iphutha ekuhumusheni: {{e}}',
  err_processing: '*** Iphutha elingalindelekile: {{e}}',
  warn_missing_close_notranslate_tag: 'Okukhiphayo okuvela ekuhumusheni bekushoda umaka wokuvala lapho bekulindelwe khona. Ilebula {{ label }} , inombolo yomugqa {{ lineNumber }} , umugqa: {{ line }}',
  info_summary: 'Isevisi yokuhumusha esheshayo isebenzisa i-Google Translate\n Inguqulo {{VERSION}}',
  info_description: 'Ithuluzi lonjiniyela. Nge-hokeylization, ukwenza kwasendaweni uhlelo lwakho lokusebenza kungashesha, kujabulise futhi kube lula!\n\n === Umthombo ===\n I-GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Izinhlobonhlobo zemvelo EZIDINGEKAYO ===\n * GOOGLE_TRANSLATE_PROJECT_ID: iphrojekthi yakho ye-Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS: imininingwane yakho yefayela le-JSON\n\n === amakhodi olimi e-ISO ===\n Uma ucacisa amakhodi e-ISO (kungaba ulimi lokokufaka noma izilimi okuqondiswe kuzo) sebenzisa lawa makhodi:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Ikhodi ye-ISO yezilimi ozohumushwa isuka kuyo. Okuzenzakalelayo {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Uhlobo lungaba umbhalo noma i-html. Okuzenzakalelayo umbhalo',
  info_option_match: 'Lapho ucubungula uhla lwemibhalo, cabangela kuphela amafayela afana nale regex',
  info_option_excludes: 'Lapho ucubungula uhla lwemibhalo, khipha ngokusobala amafayela afana nalawa ma-regex, ngisho noma angafana ne-regex ethi `-m` / `---match`',
  info_option_filter: 'Lapho ucubungula uhla lwemibhalo: 1) ludinga leli fayela le-JS, okufanele likhiphe umsebenzi okuthiwa `isihlungi` esithatha ipharamitha yeyunithi yezinhlamvu bese ibuyisela uchungechunge, futhi 2) sebenzisa lo msebenzi wokuhlunga kuwo wonke amafayela okukhiphayo ngaphambi kokuba abhalwe.',
  info_option_dryRun: 'Ungabhali noma yimaphi amafayela noma wenze noma yimaphi amakholi we-API ku-Google Translate, kodwa faka lokho obekuzokwenziwa',
  info_option_languages: 'Uhlu oluhlukaniswe ngokhefana lwamakhodi e-ISO ukuze izilimi zihumusheke kuwo',
  info_option_outfile: 'Ngokucubungula ifayela le-JS: bhala okukhiphayo kwe-JS kuleli fayela\n Ngokucubungula uhla lwemibhalo: bhala amafayela kulolu hlu lwemibhalo, oluzokwakhiwa uma lungekho',
  info_option_force: 'Ngaso sonke isikhathi khiqiza ukuhumusha okusha, ubhala phezu kwanoma yimaphi amafayela okukhiphayo akhona',
  info_option_handlebars: 'Qinisekisa ukuthi {{ handlebars }} okuqukethwe kulondolozwe njengoba kunjalo futhi HHAYI kuhunyushwa',
  info_option_markdown: 'Qinisekisa ukuthi [markdown](https://links) igcinwa ngendlela efanele, ngaphandle kwalokho isikhala sethulwa phakathi kwesiphetho sencazelo yesixhumanisi kubakaki abayisikwele kanye nesixhumanisi ngokwaso kubakaki.',
  info_arg_source: 'Umthombo wokuhumusha; kungaba ifayela le-JS noma uhla lwemibhalo lwamafayela azohunyushwa',
  info_filter_applied: 'Isihlungi sisetshenziswe ngempumelelo ngaphambi kokubhala: {{langFile}}',
  info_dryRun_key: '(dry run) ukungabhali ukuhumusha ngokhiye: {{key}}',
  info_dryRun_file: '(dry run) ngabe libhaliwe ifayela: {{langOut}}',
  warn_walk_readDir: 'walk( {{dir}} ): ukufunda iphutha: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): kwenzeke iphutha ngesikhathi sizama ukufaka amafayela ohlwini lwemibhalo: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): le ndlela ayilona uhla lwemibhalo',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): ukweqa ifayela elikhona: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Ifayela libhaliwe: {{langFile}}',
  err_option_json_notFound: 'Ifayela le-JSON alitholakalanga: {{ jsonFile }}',
  err_option_json_errorReading: 'Kwenzeke iphutha kufundwa noma kudluliswa ifayela le-JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Azikho izilimi zokuhumusha ezicacisiwe. Sebenzisa `-l` / `--izilimi` futhi ucacise uhlu oluhlukaniswe ngokhefana lwamakhodi olimi e-ISO',
  err_option_outfile_required: 'Alikho ifayela eliphumayo noma uhla lwemibhalo olushiwo. Sebenzisa `-o` / `--outfile` ukuze ucacise ifayela eliphumayo noma uhla lwemibhalo',
  err_noSources: 'awekho amafayela omthombo anikeziwe ukuze ahunyushwe',
  info_option_jsonFile: 'Qalisa imiyalo eminingi ye-hokey ecaciswe kufayela le-JSON. Uma lingekho ifayela le-JSON elinikeziwe, umyalo ubheka ifayela elinegama elithi \'hokey.json\' ohlwini lwamanje',
  info_option_indexFile: 'Dala ifayela lenkomba lokuhumusha. Igama lefayela kufanele ligcine ngokuthi `.html`, `.md` noma `.txt`, ngaphandle uma unikeza isifanekiso esinokuthi `-A` / `---index-template`',
  info_option_indexTemplate: 'Lokhu kungaba \'html\', \'markdown\', \'text\', noma indlela eya kwisifanekiso sakho sezibambo. Lesi sifanekiso sisetshenziswa uma udala ifayela lenkomba. Bheka izifanekiso ezizenzakalelayo kukhodi yomthombo we-hokeylization ukuze uthole izibonelo',
  info_option_regular: 'Humusha amafayela omthombo njengamafayela avamile, hhayi ukuhumusha izinto ze-JavaScript eziqukethe izinsiza zeyunithi yezinhlamvu. Ifulegi elithi `-M` / `--markdown` lisikisela leli fulegi.',
  info_arg_sources: 'Umthombo(s) wokuhumusha; lokhu kungaba ifayela elilodwa noma amaningi e-JavaScript noma uhla lwemibhalo',
  info_jsonProcessing_start: 'I-JSON processing config: {{name}}',
  err_index_singleFileMultipleSources: 'Kucaciswe ifayela elilodwa lenkomba, kodwa kunamafayela okufaka amaningi. Cacisa uhla lwemibhalo esikhundleni sefayela lenkomba',
  err_index_targetDirAndNoTypeOrTemplate: 'Uhla lwemibhalo oluqondiwe lwacaciswa inkomba, kodwa asikho isifanekiso senkomba esishiwo. Sebenzisa `-A` / `--indexTemplate` ukuze ukhethe isifanekiso',
  err_index_parentDirDoesNotExist: 'Uhlu lwemibhalo lomzali lwenkomba alukho: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Igama lefayela alinaso isandiso ngakho-ke uhlobo lwesifanekiso alukwazi ukunqunywa: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Igama lefayela linesandiso esingavumelekile ngakho-ke uhlobo lwesifanekiso alukwazi ukunqunywa: {{ file }}',
  err_index_templateLoadingError: 'Kwenzeke iphutha ekulayisheni isifanekiso ngokwezifiso {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Kwenzeke iphutha ekuhlanganiseni isifanekiso ngokwezifiso {{ file }} : {{ e }}',
  info_index_wroteFile: 'Idale ngempumelelo ifayela lenkomba: {{ indexFile }}',
  label_indexOfTranslations: 'Inkomba yezinguqulo',
  label_findYourLanguageCode: 'Thola ikhodi yakho yolimi',
  err_processing_unknown: '*** Iphutha elingalindelekile: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Alikho ifayela lokuphumayo elakhiwe ngolimi {{ lang }} , ngakho-ke ngeke lifakwe ohlwini'
}