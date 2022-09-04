export default {
  err_fatal: 'FATAL VILLA: {{error}}',
  err_env_googleProjectId: 'Umhverfisbreytan GOOGLE_TRANSLATE_PROJECT_ID ekki skilgreind',
  err_env_googleCredentials: 'Umhverfisbreytan GOOGLE_APPLICATION_CREDENTIALS ekki skilgreind',
  err_option_processAs_invalid: 'Ógilt valmöguleikagildi fyrir -p / --process-as : þessi valkostur styður aðeins gildi fyrir \'text\' eða \'html\'',
  err_infileNotFound: 'inntaksskrá eða mappa fannst ekki: {{ jsFile }}',
  err_cannotWriteSource: 'neita að skrifa yfir inntaksuppsprettu (var tilgreint í úttaksmálum): {{source}}',
  err_invalidOutfile: 'búist við að útskráin innihaldi \'LANG\' (á að skipta út fyrir {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: búist við að skrá {{ file }} byrji á \'export default\' eða \'module.exports\' en fannst: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'ógildur json í {{file}}',
  err_processFile_writeFile: '*** Villa við að skrifa í útskrá fyrir {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Villa við þýðingu: {{e}}',
  err_processing: '*** Óvænt villa: {{e}}',
  info_summary: 'Fljótleg þýðingarþjónusta með Google Translate\n Útgáfa {{VERSION}}',
  info_description: '=== Heimild ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === ÁSKILDAR umhverfisbreytur ===\n * GOOGLE_TRANSLATE_PROJECT_ID: Google Translate verkefnið þitt\n * GOOGLE_APPLICATION_CREDENTIALS: JSON skráin þín með skilríkjum\n\n === ISO tungumálakóðar ===\n Þegar ISO kóðar eru tilgreindir (annaðhvort inntakstungumál eða markmál) notaðu þessa kóða:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO kóða fyrir tungumál til að þýða úr. Sjálfgefið er {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Tegund getur verið texti eða html. Sjálfgefið er texti',
  info_option_match: 'Þegar þú vinnur möppu skaltu aðeins hafa í huga skrár sem passa við þetta regex',
  info_option_excludes: 'Þegar verið er að vinna úr möppu, útilokaðu sérstaklega skrár sem passa við þessar reglur, jafnvel þó þær myndu passa við "-m" / "--match" regex',
  info_option_filter: 'Þegar þú vinnur möppu: 1) krefjast þessarar JS skrá, sem verður að flytja út fall sem heitir `filter` sem tekur strengbreytu og skilar streng, og 2) notaðu þessa filteraðgerð á allar úttaksskrár áður en þær eru skrifaðar',
  info_option_dryRun: 'Ekki skrifa neinar skrár eða hringja API símtöl í Google Translate, heldur skráðu það sem hefði verið gert',
  info_option_languages: 'Kommuaðskilinn listi yfir ISO kóða fyrir tungumál til að þýða á',
  info_option_outfile: 'Fyrir JS skráarvinnslu: skrifaðu JS úttak í þessa skrá\n Fyrir möppuvinnslu: skrifaðu skrár í þessa möppu, sem verður til ef hún er ekki til',
  info_option_force: 'Búðu til alltaf nýjar þýðingar og skrifaðu yfir allar núverandi úttaksskrár',
  info_option_handlebars: 'Gakktu úr skugga um að {{ handlebars }} efni sé varðveitt eins og það er og EKKI þýtt',
  info_option_markdown: 'Gakktu úr skugga um að [markdown](https://tenglar) sé varðveitt á réttan hátt, annars er bil á milli enda tengillýsingarinnar í hornklofa og tengilsins sjálfs innan sviga',
  info_arg_source: 'Heimild þýðinga; getur verið JS skrá eða skrá yfir skrár til að þýða',
  info_filter_applied: 'Síu tókst að beita áður en skrifað er: {{langFile}}',
  info_dryRun_key: '(þurrt) skrifa ekki þýðingu fyrir lykil: {{key}}',
  info_dryRun_file: '(þurr keyrsla) hefði skrifað skrá: {{langOut}}',
  warn_walk_readDir: 'ganga( {{dir}} ): villa við lestur: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): villa kom upp þegar reynt var að skrá skrár í möppu: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): þessi slóð er ekki mappa',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): sleppir núverandi skrá: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Skráin hefur verið skrifuð: {{langFile}}'
}