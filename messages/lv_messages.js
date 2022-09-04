export default {
  err_fatal: 'FATĀLĀ KĻŪDA: {{error}}',
  err_env_googleProjectId: 'Vides mainīgais GOOGLE_TRANSLATE_PROJECT_ID nav definēts',
  err_env_googleCredentials: 'Vides mainīgais GOOGLE_APPLICATION_CREDENTIALS nav definēts',
  err_option_processAs_invalid: 'Nederīga opcijas vērtība parametram -p / --process-as : šī opcija atbalsta tikai \'text\' vai \'html\' vērtības.',
  err_infileNotFound: 'ievades fails vai direktorijs nav atrasts: {{ jsFile }}',
  err_cannotWriteSource: 'atsakās pārrakstīt ievades avotu (tika norādīts izvades valodās): {{source}}',
  err_invalidOutfile: 'paredzamais fails satur “LANG” (aizstājams ar {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: paredzēts fails {{ file }} , kas jāsākas ar “export default” vai “module.exports”, bet atrasts: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'nederīgs JSON šeit: {{file}}',
  err_processFile_writeFile: '*** Kļūda, rakstot uz {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Tulkošanas kļūda: {{e}}',
  err_processing: '*** Negaidīta kļūda: {{e}}',
  info_summary: 'Ātrs tulkošanas pakalpojums, izmantojot Google tulkotāju\n Versija {{VERSION}}',
  info_description: '=== Avots ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === OBLIGĀTI vides mainīgie ===\n * GOOGLE_TRANSLATE_PROJECT_ID: jūsu Google tulkotāja projekts\n * GOOGLE_APPLICATION_CREDENTIALS: jūsu akreditācijas datu JSON fails\n\n === ISO valodu kodi ===\n Norādot ISO kodus (vai nu ievades valodu, vai mērķa valodas), izmantojiet šos kodus:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO kods valodām, no kurām tulkot. Noklusējums ir {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Veids var būt teksts vai html. Noklusējums ir teksts',
  info_option_match: 'Apstrādājot direktoriju, ņemiet vērā tikai tos failus, kas atbilst šim regulārajam izteiksmei',
  info_option_excludes: 'Apstrādājot direktoriju, skaidri izslēdziet failus, kas atbilst šiem regulārajiem vārdiem, pat ja tie atbilstu regulārajam izteiksmei "-m" / "--match".',
  info_option_filter: 'Apstrādājot direktoriju: 1) pieprasiet šo JS failu, kuram ir jāeksportē funkcija ar nosaukumu "filtrs", kas ņem virknes parametru un atgriež virkni, un 2) izmantojiet šo filtra funkciju visiem izvades failiem pirms to rakstīšanas.',
  info_option_dryRun: 'Nerakstiet failus un neveiciet API izsaukumus Google tulkotājam, bet reģistrējiet to, kas būtu izdarīts',
  info_option_languages: 'Komatatdalīts ISO kodu saraksts valodām, kurās tulkot',
  info_option_outfile: 'JS failu apstrādei: ierakstiet JS izvadi šajā failā\n Direktoriju apstrādei: ierakstiet failus šajā direktorijā, kas tiks izveidots, ja tas neeksistē',
  info_option_force: 'Vienmēr ģenerējiet jaunus tulkojumus, pārrakstot visus esošos izvades failus',
  info_option_handlebars: 'Nodrošiniet, lai {{ handlebars }} saturs tiktu saglabāts tāds, kāds tas ir, un NAV tulkots',
  info_option_markdown: 'Pārliecinieties, vai [markdown](https://saites) ir saglabātas pareizi, pretējā gadījumā starp saites apraksta beigām kvadrātiekavās un pašu saiti iekavās tiek ievietota atstarpe.',
  info_arg_source: 'Tulkojuma avots; var būt JS fails vai tulkojamo failu direktorijs',
  info_filter_applied: 'Filtrs ir veiksmīgi lietots pirms rakstīšanas: {{langFile}}',
  info_dryRun_key: '(dry run) neraksta tulkojumu atslēgai: {{key}}',
  info_dryRun_file: '(sausā darbība) būtu uzrakstījis failu: {{langOut}}',
  warn_walk_readDir: 'staigāt ( {{dir}} ): lasīšanas kļūda: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): radās kļūda, mēģinot uzskaitīt failus direktorijā: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): šis ceļš nav direktorijs',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): esošā faila izlaišana: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Fails ir uzrakstīts: {{langFile}}'
}