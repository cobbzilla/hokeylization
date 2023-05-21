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
  warn_missing_close_notranslate_tag: 'Úttak úr þýðingu vantaði lokunarmerki þar sem von var á slíku. Merki {{ label }} , línunúmer {{ lineNumber }} , lína: {{ line }}',
  info_summary: 'Fljótleg þýðingarþjónusta með Google Translate\n Útgáfa {{VERSION}}',
  info_description: 'Verkfæri fyrir forritara. Með hookylization getur staðsetning appsins verið fljótleg, skemmtileg og auðveld!\n\n === Heimild ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === ÁSKILDAR umhverfisbreytur ===\n * GOOGLE_TRANSLATE_PROJECT_ID: Google Translate verkefnið þitt\n * GOOGLE_APPLICATION_CREDENTIALS: JSON skráin þín með skilríkjum\n\n === ISO tungumálakóðar ===\n Þegar ISO kóðar eru tilgreindir (annaðhvort inntakstungumál eða markmál) notaðu þessa kóða:\n https://cloud.google.com/translate/docs/languages',
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
  info_processDirectory_fileWritten: 'Skráin hefur verið skrifuð: {{langFile}}',
  err_option_json_notFound: 'JSON skrá fannst ekki: {{ jsonFile }}',
  err_option_json_errorReading: 'Villa kom upp við að lesa eða þátta JSON skrána {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Engin þýðingartungumál tilgreind. Notaðu `-l` / `--languages` og tilgreindu lista með kommum aðskilinn yfir ISO tungumálakóða',
  err_option_outfile_required: 'Engin úttaksskrá eða mappa var tilgreind. Notaðu `-o` / `--outfile` til að tilgreina úttaksskrána eða möppuna',
  err_noSources: 'engar frumskrár veittar til þýðingar',
  info_option_jsonFile: 'Keyra margar hokey skipanir sem tilgreindar eru í JSON skrá. Ef engin JSON skrá er til staðar leitar skipunin að skrá sem heitir \'hokey.json\' í núverandi möppu',
  info_option_indexFile: 'Búðu til vísitöluskrá fyrir þýðingarnar. Skráarnafnið verður að enda á `.html`, `.md` eða `.txt`, nema þú gefur upp sniðmát með `-A` / `--index-template`',
  info_option_indexTemplate: 'Þetta getur verið \'html\', \'markdown\', \'texti\' eða slóð að þínu eigin stýrisniðmáti. Þetta sniðmát er notað þegar vísitöluskráin er búin til. Skoðaðu sjálfgefin sniðmát í hókeylization frumkóðanum til að fá dæmi',
  info_option_regular: 'Þýddu frumskrár sem venjulegar skrár, ekki þýða JavaScript hluti sem innihalda strengjaauðlindir. `-M` / `--markdown` fáninn gefur til kynna þennan fána.',
  info_arg_sources: 'Heimildir fyrir þýðingar; þetta getur verið ein eða fleiri JavaScript skrár eða möppur',
  info_jsonProcessing_start: 'JSON vinnslu stillingar: {{name}}',
  err_index_singleFileMultipleSources: 'Ein vísitöluskrá var tilgreind, en það eru margar inntaksskrár. Tilgreindu möppu í stað skráar fyrir vísitöluna',
  err_index_targetDirAndNoTypeOrTemplate: 'Markskrá var tilgreind fyrir vísitöluna, en ekkert vísitölusniðmát var tilgreint. Notaðu `-A` / `--indexTemplate` til að velja sniðmát',
  err_index_parentDirDoesNotExist: 'Foreldraskrá vísitölunnar er ekki til: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Skráarnafnið hefur enga framlengingu svo ekki er hægt að ákvarða sniðmátstegund: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Skráarnafnið hefur ógilda ending svo ekki er hægt að ákvarða sniðmátstegund: {{ file }}',
  err_index_templateLoadingError: 'Villa kom upp við að hlaða sérsniðna sniðmátinu {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Villa kom upp við að setja saman sérsniðna sniðmátið {{ file }} : {{ e }}',
  info_index_wroteFile: 'Tókst að búa til vísitöluskrá: {{ indexFile }}',
  label_indexOfTranslations: 'Skrá yfir þýðingar',
  label_findYourLanguageCode: 'Finndu tungumálakóðann þinn',
  err_processing_unknown: '*** Óvænt villa: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Engin úttaksskrá var búin til fyrir tungumálið {{ lang }} , þannig að hún verður útilokuð frá skránni',
  err_filter_loading: 'Sía fannst ekki: {{ filter }}\n Sían fannst ekki í neinu af: núverandi möppu, ./.hokey-filters skránni, ${HOME}/.hokey-filters skránni, né innbyggðu síaskránni'
}