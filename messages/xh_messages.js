export default {
  err_fatal: 'IMPASO EFANELEKILEYO: {{error}}',
  err_env_googleProjectId: 'Utshintsho lwendalo GOOGLE_TRANSLATE_PROJECT_ID aluchazwanga',
  err_env_googleCredentials: 'Utshintsho lwendalo GOOGLE_APPLICATION_CREDENTIALS aluchazwanga',
  err_option_processAs_invalid: 'Ixabiso lokhetho elingasebenziyo lwe -p / --process-as : olu khetho luxhasa kuphela amaxabiso \'okubhaliweyo\' okanye \'html\'',
  err_infileNotFound: 'ifayile yegalelo okanye uvimba weefayili awufunyenwanga: {{ jsFile }}',
  err_cannotWriteSource: 'ukwala ukubhala ngaphezulu umthombo wegalelo (kwachazwa kwiilwimi zemveliso): {{source}}',
  err_invalidOutfile: 'ifayile elindelekileyo iqulathe \' LANG \' (iya kutshintshwa nge {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: ifayile elindelekileyo {{ file }} ukuqala \'nge-export default default\' okanye \'imodyuli.exports\' kodwa ifunyenwe: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'U-json ongasebenziyo kwi- {{file}}',
  err_processFile_writeFile: '*** Impazamo yokubhala kwifayile ye {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Impazamo kuguqulelo: {{e}}',
  err_processing: '*** Impazamo engalindelekanga: {{e}}',
  warn_missing_close_notranslate_tag: 'Isiphumo esiphuma kuguqulo silahlekile ithegi yokuvala apho bekulindelwe khona. Ileyibhile {{ label }} , inombolo yomgca {{ lineNumber }} , umgca: {{ line }}',
  info_summary: 'Inkonzo yokuguqulela ngokukhawuleza usebenzisa iToliki kaGoogle\n Inguqulelo {{VERSION}}',
  info_description: 'Isixhobo sabaphuhlisi. Nge-hokeylization, ukwenza usetyenziso lwakho lwasekhaya kunokukhawuleza, kumnandi kwaye kube lula!\n\n === Umthombo ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === EZIFUNEKAYO iiguquguquko zemo engqongileyo ===\n * GOOGLE_TRANSLATE_PROJECT_ID: iprojekthi yakho yeToliki kaGoogle\n * GOOGLE_APPLICATION_CREDENTIALS: iinkcukacha zakho JSON ifayile\n\n === Iikhowudi zolwimi ze-ISO ===\n Xa ukhankanya iikhowudi ze-ISO (nokuba lulwimi lokungenisa okanye iilwimi ekujoliswe kuzo) sebenzisa ezi khowudi:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Ikhowudi ye-ISO yeelwimi ekunokuguqulelwa kuyo. Okuhlala kukho ngu {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Isimbo sinokuba sisicatshulwa okanye i-html. Okuhlala kukho kumbhalo',
  info_option_match: 'Xa ulungisa uvimba weefayili, qwalasela kuphela iifayile ezihambelana nale regex',
  info_option_excludes: 'Xa kusetyenzwa uvimba weefayili, ungazibandakanyi ngokucacileyo iifayile ezihambelana nezi regex, nokuba zinokuthelekisa `-m` / `--match` regex.',
  info_option_filter: 'Xa kusetyenzwa uvimba weefayili: 1) ifuna le fayile ye-JS, ekufuneka ithumele ngaphandle umsebenzi ogama lingu `isihluzi` esithatha iparameter yomtya kwaye ibuyisele umtya, kwaye 2) sebenzisa lo msebenzi wokucoca kuzo zonke iifayile zemveliso phambi kokuba zibhalwe.',
  info_option_dryRun: 'Sukubhala naziphi na iifayile okanye wenze nayiphi na iminxeba ye-API ukuya kwiToliki kaGoogle, kodwa bhala ukuba bekuya kwenziwa ntoni',
  info_option_languages: 'Uluhlu olwahlulwe ngekoma lweekhowudi ze-ISO kwiilwimi ekunokuguqulelwa kuzo',
  info_option_outfile: 'Kumsebenzi wefayile ye-JS: bhala isiphumo se-JS kule fayile\n Kuqwalaselo lolawulo: bhala iifayile kolu lawulo, oluya kwenziwa ukuba alukho',
  info_option_force: 'Soloko uvelisa iinguqulelo ezintsha, ubhala ngaphezulu naziphi na iifayile zemveliso ezikhoyo',
  info_option_handlebars: 'Qinisekisa {{ handlebars }} umxholo ugcinwe njengoko unjalo kwaye UNGAguqulelwanga',
  info_option_markdown: 'Qinisekisa [markdown](https://links) zigcinwe ngokuchanekileyo, kungenjalo isithuba saziswa phakathi kwesiphelo senkcazelo yekhonkco kwizibiyeli ezisikwere kunye nekhonkco ngokwalo kwizibiyeli.',
  info_arg_source: 'Umthombo weenguqulelo; inokuba yifayile ye-JS okanye uluhlu lweefayile zokuguqulelwa',
  info_filter_applied: 'Isihluzo sisetyenziswe ngempumelelo phambi kokubhala: {{langFile}}',
  info_dryRun_key: '(ukubaleka) ukungabhali ukuguqulelwa kwesitshixo: {{key}}',
  info_dryRun_file: '(ukubaleka) ngebhale ifayile: {{langOut}}',
  warn_walk_readDir: 'hamba ( {{dir}} ): ukufunda ngemposiso: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): kwenzeke impazamo xa kuzanywa ukudwelisa iifayile kulawulo: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): lo mzila awuloluhlu',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): ukutsiba ifayile esele ikhona: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Ifayile ibhaliwe: {{langFile}}'
}