export default {
  err_fatal: 'ERROR FATAL: {{error}}',
  err_env_googleProjectId: 'Tsy voafaritra ny fari-piainan\'ny tontolo iainana GOOGLE_TRANSLATE_PROJECT_ID',
  err_env_googleCredentials: 'Tsy voafaritra ny fari-piainan\'ny tontolo iainana GOOGLE_APPLICATION_CREDENTIALS',
  err_option_processAs_invalid: 'Sanda safidy tsy mety ho an\'ny -p / --process-as : ity safidy ity dia tsy manohana afa-tsy ny soatoavin\'ny \'text\' na \'html\'',
  err_infileNotFound: 'tsy hita ny rakitra na lahatahiry fampidirana: {{ jsFile }}',
  err_cannotWriteSource: 'mandà tsy hanoratana loharano fampidirana (voafaritra amin\'ny fiteny mivoaka): {{source}}',
  err_invalidOutfile: 'nantenaina fa misy \'LANG\' (hosoloina {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: vinavina {{ file }} hanomboka amin\'ny \'export default\' na \'module.exports\' saingy hita: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json tsy mety amin\'ny {{file}}',
  err_processFile_writeFile: '*** Hadisoana nanoratra tamin\'ny outfile ho an\'ny {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Hadisoana amin\'ny fandikana: {{e}}',
  err_processing: '*** Error tsy nampoizina: {{e}}',
  warn_missing_close_notranslate_tag: 'Ny vokatra avy amin\'ny fandikan-teny dia tsy misy marika famaranana izay andrasana. Label {{ label }} , laharana andalana {{ lineNumber }} , tsipika: {{ line }}',
  info_summary: 'Serivisy fandikan-teny haingana mampiasa Google Translate\n Version {{VERSION}}',
  info_description: 'Fitaovana ho an\'ny mpamorona. Miaraka amin\'ny hokeylization, mety ho haingana, mahafinaritra ary mora ny fametrahana ny fampiharana anao!\n\n === Loharano ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === FILAZANA TOKONY TSY MISY ===\n * GOOGLE_TRANSLATE_PROJECT_ID: tetikasanao amin\'ny Dikanteny Google\n * GOOGLE_APPLICATION_CREDENTIALS: rakitra JSON ny mombamomba anao\n\n === Kaody fiteny ISO ===\n Rehefa mamaritra ny kaody ISO (na fiteny fampidirana na fiteny kendrena) dia ampiasao ireto kaody ireto:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Kaody ISO ho an\'ny fiteny handikana. Default dia {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Ny karazana dia mety ho lahatsoratra na html. Default dia lahatsoratra',
  info_option_match: 'Rehefa manamboatra lahatahiry iray dia diniho ihany ny rakitra mifanaraka amin\'ity regex ity',
  info_option_excludes: 'Rehefa manamboatra lahatahiry iray dia esory mazava tsara ny rakitra mifanaraka amin\'ireo regex ireo, na dia mifanandrify amin\'ny regex `-m` / `--match` aza.',
  info_option_filter: 'Rehefa manamboatra lahatahiry iray: 1) mitaky ity rakitra JS ity, izay tsy maintsy manondrana fiasa antsoina hoe `sivana` izay maka mari-pamantarana kofehy ary mamerina tady, ary 2) ampiharo ity fiasa sivana ity amin\'ny rakitra mivoaka rehetra alohan\'ny hanoratana azy.',
  info_option_dryRun: 'Aza manoratra rakitra na manao antso API amin\'ny Google Translate, fa soraty izay mety ho natao',
  info_option_languages: 'Lisitry ny kaody ISO misaraka faingo ho an\'ny fiteny handikana azy',
  info_option_outfile: 'Ho an\'ny fanodinana rakitra JS: soraty ny vokatra JS amin\'ity rakitra ity\n Ho an\'ny fanodinana lahatahiry: manorata rakitra amin\'ity lahatahiry ity, izay hoforonina raha tsy misy izany',
  info_option_force: 'Mamorona dikanteny vaovao foana, asolo izay rakitra mivoaka efa misy',
  info_option_handlebars: 'Ataovy azo antoka fa voatahiry araka ny tokony ho izy ny atiny {{ handlebars }} ary TSY voadika',
  info_option_markdown: 'Ataovy azo antoka fa voatahiry tsara ny [markdown](https://links), raha tsy izany dia asiana habaka eo anelanelan\'ny faran\'ny famaritana rohy ao anaty fononteny efamira sy ilay rohy ao anaty fononteny.',
  info_arg_source: 'Ny loharanon\'ny fandikan-teny; Mety ho rakitra JS na lahatahiry misy rakitra hadika',
  info_filter_applied: 'Nampihatra tsara ny sivana alohan\'ny hanoratana: {{langFile}}',
  info_dryRun_key: '(mainty) tsy manoratra dikanteny ho an\'ny fanalahidy: {{key}}',
  info_dryRun_file: '(dry run) dia mety manana rakitra voasoratra: {{langOut}}',
  warn_walk_readDir: 'mandeha ( {{dir}} ): diso mamaky: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): nisy hadisoana nitranga tamin\'ny fiezahana mitanisa rakitra ao amin\'ny lahatahiry: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ity lalana ity dia tsy lahatahiry',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): mandingana ny rakitra efa misy: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Ny rakitra dia nosoratana: {{langFile}}',
  err_option_json_notFound: 'Tsy hita ny rakitra JSON: {{ jsonFile }}',
  err_option_json_errorReading: 'Nisy lesoka teo am-pamakiana na namakiana ny rakitra JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Tsy voafaritra ny fiteny fandikan-teny. Mampiasà `-l` / `--languages` ary mametraha lisitry ny kaody fiteny ISO misy faingo',
  err_option_outfile_required: 'Tsy nisy rakitra na lahatahiry nivoaka voatondro. Ampiasao ny `-o` / `--outfile` hamaritana ny rakitra na lahatahiry mivoaka',
  err_noSources: 'tsy misy rakitra loharano omena ho an\'ny fandikana',
  info_option_jsonFile: 'Manaova baiko hokey maromaro voafaritra ao anaty rakitra JSON. Raha tsy misy rakitra JSON omena, ny baiko dia mitady rakitra antsoina hoe \'hokey.json\' ao amin\'ny lahatahiry ankehitriny',
  info_option_indexFile: 'Mamorona rakitra fanondro ho an\'ny dikanteny. Ny anaran-drakitra dia tsy maintsy mifarana amin\'ny `.html`, `.md` na `.txt`, raha tsy hoe manome môdely misy `-A` / `--index-template` ianao.',
  info_option_indexTemplate: 'Ity dia mety ho \'html\', \'markdown\', \'text\', na lalana mankany amin\'ny môdelin\'ny tànanao manokana. Ity môdely ity dia ampiasaina rehefa mamorona ny rakitra fanondro. Jereo ny maodely default ao amin\'ny kaody loharano hokeylization ho ohatra',
  info_option_regular: 'Adikao ho rakitra mahazatra ny rakitra loharano, fa tsy mandika zavatra JavaScript misy loharanon-dahatra. Ny saina `-M` / `--markdown` dia midika io saina io.',
  info_arg_sources: 'Ny loharanon\'ny fandikan-teny; Mety ho rakitra na lahatahiry JavaScript iray na maromaro izany',
  info_jsonProcessing_start: 'JSON fanodinana config: {{name}}',
  err_index_singleFileMultipleSources: 'Nisy fisie fanondroana iray nofaritana, saingy misy rakitra fampidirana maromaro. Manondro lahatahiry fa tsy rakitra ho an\'ny fanondro',
  err_index_targetDirAndNoTypeOrTemplate: 'Nofaritana ny lahatahiry kendrena ho an\'ny fanondroana, saingy tsy misy môdely fanondroana voatondro. Ampiasao ny `-A` / `--indexTemplate` hisafidianana môdely',
  err_index_parentDirDoesNotExist: 'Tsy misy ny lahatahirin\'ny ray aman-dreny amin\'ny fanondroana: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Tsy misy fanitarana ny anaran-drakitra ka tsy azo faritana ny karazana môdely: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Ny anaran-drakitra dia manana fanitarana tsy mety ka tsy azo faritana ny karazana môdely: {{ file }}',
  err_index_templateLoadingError: 'Nisy hadisoana nitranga tamin\'ny fametahana ny maodely mahazatra {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Nisy hadisoana nitranga tamin\'ny fanangonana ny maodely mahazatra {{ file }} : {{ e }}',
  info_index_wroteFile: 'Nahomby ny famoronana rakitra fanondroana: {{ indexFile }}',
  label_indexOfTranslations: 'Fanondroana fandikan-teny',
  label_findYourLanguageCode: 'Tadiavo ny kaody fiteninao',
  err_processing_unknown: '*** Error tsy nampoizina: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Tsy nisy rakitra vokarina noforonina ho an\'ny fiteny {{ lang }} , noho izany dia tsy ho tafiditra ao amin\'ny fanondroana',
  err_filter_loading: 'Sivana tsy hita: {{ filter }}\n Tsy hita tao amin\'ny iray amin\'ireo ny sivana: ny lahatahiry ankehitriny, ny lahatahiry ./.hokey-filters, ny lahatahiry ${HOME}/.hokey-filters, na ny lahatahiry sivana anatiny'
}