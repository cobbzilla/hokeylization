export default {
  err_fatal: 'FATALT FEL: {{error}}',
  err_env_googleProjectId: 'Miljövariabeln GOOGLE_TRANSLATE_PROJECT_ID har inte definierats',
  err_env_googleCredentials: 'Miljövariabeln GOOGLE_APPLICATION_CREDENTIALS har inte definierats',
  err_option_processAs_invalid: 'Ogiltigt alternativvärde för -p / --process-as : det här alternativet stöder endast värden för "text" eller "html"',
  err_infileNotFound: 'indatafil eller katalog hittades inte: {{ jsFile }}',
  err_cannotWriteSource: 'vägrar att skriva över ingångskälla (specificerades i utmatningsspråk): {{source}}',
  err_invalidOutfile: 'förväntad fil att innehålla \'LANG\' (ska ersättas med {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: förväntad fil {{ file }} att börja med \'export default\' eller \'module.exports\' men hittade: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'ogiltig json i {{file}}',
  err_processFile_writeFile: '*** Det gick inte att skriva till outfilen för {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Fel vid översättning: {{e}}',
  err_processing: '*** Oväntat fel: {{e}}',
  warn_missing_close_notranslate_tag: 'Utdata från översättning saknade en avslutande tagg där en förväntades. Etikett {{ label }} , radnummer {{ lineNumber }} , rad: {{ line }}',
  info_summary: 'Snabböversättningstjänst med Google Translate\n Version {{VERSION}}',
  info_description: 'Ett verktyg för utvecklare. Med hokeylisering kan det vara snabbt, roligt och enkelt att lokalisera din app!\n\n === Källa ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === OBLIGATORISKA miljövariabler ===\n * GOOGLE_TRANSLATE_PROJECT_ID: ditt Google Translate-projekt\n * GOOGLE_APPLICATION_CREDENTIALS: dina referensuppgifter JSON-fil\n\n === ISO-språkkoder ===\n När du anger ISO-koder (antingen inmatningsspråk eller målspråk) använd dessa koder:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO-kod för språk att översätta från. Standard är {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Typ kan vara text eller html. Standard är text',
  info_option_match: 'När du bearbetar en katalog, överväg bara filer som matchar detta regex',
  info_option_excludes: 'När du bearbetar en katalog, exkludera uttryckligen filer som matchar dessa regex, även om de skulle matcha "-m" / "--match" regex',
  info_option_filter: 'När du bearbetar en katalog: 1) Kräv denna JS-fil, som måste exportera en funktion som heter `filter` som tar en strängparameter och returnerar en sträng, och 2) tillämpa denna filterfunktion på alla utdatafiler innan de skrivs',
  info_option_dryRun: 'Skriv inte några filer eller gör några API-anrop till Google Translate, utan logga vad som skulle ha gjorts',
  info_option_languages: 'Kommaseparerad lista över ISO-koder för språk att översätta till',
  info_option_outfile: 'För JS-filbehandling: skriv JS-utdata till den här filen\n För katalogbearbetning: skriv filer till den här katalogen, som kommer att skapas om den inte finns',
  info_option_force: 'Generera alltid nya översättningar och skriv över alla befintliga utdatafiler',
  info_option_handlebars: 'Se till att innehållet {{ handlebars }} bevaras som det är och INTE översätts',
  info_option_markdown: 'Se till att [markdown](https://länkar) bevaras korrekt, annars införs ett mellanslag mellan slutet av länkbeskrivningen inom hakparenteser och själva länken inom parentes',
  info_arg_source: 'Källan för översättningar; kan vara en JS-fil eller en katalog med filer att översätta',
  info_filter_applied: 'Filtret tillämpades framgångsrikt innan du skrev: {{langFile}}',
  info_dryRun_key: '(torrkörning) skriver inte översättning för nyckel: {{key}}',
  info_dryRun_file: '(torrkörning) skulle ha skrivit fil: {{langOut}}',
  warn_walk_readDir: 'gå( {{dir}} ): felläsning: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): ett fel inträffade vid försök att lista filer i katalogen: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): denna sökväg är inte en katalog',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): hoppar över befintlig fil: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Filen har skrivits: {{langFile}}',
  err_option_json_notFound: 'JSON-fil hittades inte: {{ jsonFile }}',
  err_option_json_errorReading: 'Ett fel uppstod vid läsning eller analys av JSON-filen {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Inga översättningsspråk har angetts. Använd `-l` / `--languages` och ange en kommaseparerad lista med ISO-språkkoder',
  err_option_outfile_required: 'Ingen utdatafil eller katalog har angetts. Använd `-o` / `--outfile` för att specificera utdatafilen eller katalogen',
  err_noSources: 'inga källfiler tillhandahålls för översättning',
  info_option_jsonFile: 'Kör flera hokey-kommandon som anges i en JSON-fil. Om ingen JSON-fil tillhandahålls söker kommandot efter en fil med namnet \'hokey.json\' i den aktuella katalogen',
  info_option_indexFile: 'Skapa en indexfil för översättningarna. Filnamnet måste sluta med `.html`, `.md` eller `.txt`, såvida du inte anger en mall med `-A` / `--index-template`',
  info_option_indexTemplate: 'Detta kan vara \'html\', \'markdown\', \'text\' eller en sökväg till din egen styrmall. Denna mall används när du skapar indexfilen. Titta på standardmallarna i källkoden för hokeylisering för exempel',
  info_option_regular: 'Översätt källfiler som vanliga filer, inte översätt JavaScript-objekt som innehåller strängresurser. Flaggan `-M` / `--markdown` antyder denna flagga.',
  info_arg_sources: 'Källan/källorna för översättningar; detta kan vara en eller flera JavaScript-filer eller kataloger',
  info_jsonProcessing_start: 'JSON-bearbetningskonfiguration: {{name}}',
  err_index_singleFileMultipleSources: 'En enda indexfil har angetts, men det finns flera indatafiler. Ange en katalog istället för en fil för indexet',
  err_index_targetDirAndNoTypeOrTemplate: 'En målkatalog har angetts för indexet, men ingen indexmall har angetts. Använd `-A` / `--indexTemplate` för att välja en mall',
  err_index_parentDirDoesNotExist: 'Indexets överordnade katalog finns inte: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Filnamnet har inget tillägg så en malltyp kan inte bestämmas: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Filnamnet har ett ogiltigt tillägg så en malltyp kan inte fastställas: {{ file }}',
  err_index_templateLoadingError: 'Ett fel uppstod när den anpassade mallen skulle laddas {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Ett fel uppstod när den anpassade mallen kompilerades {{ file }} : {{ e }}',
  info_index_wroteFile: 'Framgångsrikt skapad indexfil: {{ indexFile }}',
  label_indexOfTranslations: 'Index över översättningar',
  label_findYourLanguageCode: 'Hitta din språkkod',
  err_processing_unknown: '*** Oväntat fel: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Ingen utdatafil genererades för språket {{ lang }} , så den kommer att exkluderas från indexet',
  err_filter_loading: 'Filtret hittades inte: {{ filter }}\n Filtret hittades inte i någon av: den aktuella katalogen, katalogen ./.hokey-filters, katalogen ${HOME}/.hokey-filters eller katalogen för inbyggda filter'
}