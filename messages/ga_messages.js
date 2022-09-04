export default {
  err_fatal: 'EARRÁID FATAL: {{error}}',
  err_env_googleProjectId: 'Athróg timpeallachta GOOGLE_TRANSLATE_PROJECT_ID gan sainmhíniú',
  err_env_googleCredentials: 'Athróg timpeallachta GOOGLE_APPLICATION_CREDENTIALS gan sainmhíniú',
  err_option_processAs_invalid: 'Luach rogha neamhbhailí le haghaidh -p / --process-as : ní thacaíonn an rogha seo ach le luachanna \'téacs\' nó \'html\'',
  err_infileNotFound: 'comhad ionchuir nó comhadlann gan aimsiú: {{ jsFile }}',
  err_cannotWriteSource: 'ag diúltú foinse ionchuir a fhorscríobh (sonraithe sna teangacha aschuir): {{source}}',
  err_invalidOutfile: 'meastar go mbeidh \'LANG\' in eischomhad (le {{lang}} ) ina ionad',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: comhad ag súil leis {{ file }} chun tús a chur le \'export default\' nó \'module.exports\' ach fuarthas: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json neamhbhailí i {{file}}',
  err_processFile_writeFile: '*** Earráid agus é ag scríobh chuig eischomhad le haghaidh {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Earráid san aistriúchán: {{e}}',
  err_processing: '*** Earráid gan choinne: {{e}}',
  info_summary: 'Seirbhís aistriúcháin thapa ag baint úsáid as Google Translate\n Leagan {{VERSION}}',
  info_description: '=== Foinse ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Athróga timpeallachta TEASTÁIL ===\n * GOOGLE_TRANSLATE_PROJECT_ID: do thionscadal Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS : do dhintiúir comhad JSON\n\n === Cóid teanga ISO ===\n Agus cóid ISO á shonrú agat (teanga ionchuir nó sprioctheangacha) úsáid na cóid seo:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Cód ISO le haghaidh teangacha a aistriú ó. Is é {{DEFAULT_LOCALE}} an réamhshocrú',
  info_option_processAs: 'Is féidir le cineál a bheith téacs nó html. Téacs atá réamhshocraithe',
  info_option_match: 'Agus eolaire á phróiseáil agat, ná déan ach comhaid a mheaitseálann an regex seo a mheas',
  info_option_excludes: 'Agus eolaire á phróiseáil, fág amach go sainráite comhaid a mheaitseálann na regexes seo, fiú dá meaitseálann siad an regex `-m` / `--match`',
  info_option_filter: 'Agus eolaire á phróiseáil: 1) teastaíonn an comhad JS seo, a chaithfidh feidhm darb ainm `scagaire` a easpórtáil a ghlacann paraiméadar teaghrán agus a sheolann sreang ar ais, agus 2) an fheidhm scagaire seo a chur i bhfeidhm ar gach comhad aschuir sula scríobhtar iad',
  info_option_dryRun: 'Ná scríobh aon chomhad ná déan aon ghlaonna API chuig Google Translate, ach logáil isteach cad a bheadh déanta',
  info_option_languages: 'Liosta de chóid ISO scartha le camóga le haghaidh teangacha a aistriú isteach iontu',
  info_option_outfile: 'Chun comhaid JS a phróiseáil: scríobh aschur JS chuig an gcomhad seo\n Do phróiseáil eolaire: scríobh comhaid chuig an eolaire seo, a chruthófar mura bhfuil sé ann',
  info_option_force: 'Gin aistriúcháin úra i gcónaí, agus forscríobh aon chomhaid aschuir atá ann cheana féin',
  info_option_handlebars: 'Cinntigh go gcaomhnaítear ábhar {{ handlebars }} mar atá agus NACH aistrítear é',
  info_option_markdown: 'Cinntigh go gcaomhnaítear [marcáil síos](https://naisc) i gceart, nó tugtar spás isteach idir deireadh an tuairisc naisc idir lúibíní cearnacha agus an nasc féin i lúibíní',
  info_arg_source: 'An fhoinse le haghaidh aistriúcháin; a bheith ina chomhad JS nó ina eolaire comhaid le haistriú',
  info_filter_applied: 'D\'éirigh leis an scagaire a chur i bhfeidhm roimh scríobh: {{langFile}}',
  info_dryRun_key: '(rith tirim) gan aistriúchán a scríobh don eochair: {{key}}',
  info_dryRun_file: '(tirim) comhad scríofa: {{langOut}}',
  warn_walk_readDir: 'siúl( {{dir}} ): earráid ag léamh: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): tharla earráid agus comhaid á liostú san eolaire: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ní eolaire é an cosán seo',
  info_processDirectory_skippingExisting: 'eolaire próiseas( {{lang}} ): gan bacadh le comhad atá ann cheana féin: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Tá an comhad scríofa: {{langFile}}'
}