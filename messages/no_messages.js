export default {
  err_fatal: 'FATAL FEIL: {{error}}',
  err_env_googleProjectId: 'Miljøvariabel GOOGLE_TRANSLATE_PROJECT_ID ikke definert',
  err_env_googleCredentials: 'Miljøvariabelen GOOGLE_APPLICATION_CREDENTIALS er ikke definert',
  err_option_processAs_invalid: 'Ugyldig alternativverdi for -p / --process-as : dette alternativet støtter bare verdiene for \'text\' eller \'html\'',
  err_infileNotFound: 'inndatafil eller katalog ikke funnet: {{ jsFile }}',
  err_cannotWriteSource: 'nekter å overskrive inndatakilde (ble spesifisert i utdataspråk): {{source}}',
  err_invalidOutfile: 'forventet at outfilen inneholder \'LANG\' (erstattes med {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: forventet fil {{ file }} til å starte med \'export default\' eller \'module.exports\' men funnet: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'ugyldig json i {{file}}',
  err_processFile_writeFile: '*** Feil ved skriving til utfil for {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Feil ved oversettelse: {{e}}',
  err_processing: '*** Uventet feil: {{e}}',
  warn_missing_close_notranslate_tag: 'Utdata fra oversettelse manglet en avsluttende kode der en var forventet. Etikett {{ label }} , linjenummer {{ lineNumber }} , linje: {{ line }}',
  info_summary: 'Rask oversettelsestjeneste ved hjelp av Google Translate\n Versjon {{VERSION}}',
  info_description: 'Et verktøy for utviklere. Med hokeylisering kan det være raskt, morsomt og enkelt å lokalisere appen din!\n\n === Kilde ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === NØDVENDIGE miljøvariabler ===\n * GOOGLE_TRANSLATE_PROJECT_ID: Google Translate-prosjektet ditt\n * GOOGLE_APPLICATION_CREDENTIALS: legitimasjonen din JSON-fil\n\n === ISO språkkoder ===\n Når du spesifiserer ISO-koder (enten inndataspråk eller målspråk), bruk disse kodene:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO-kode for språk å oversette fra. Standard er {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Type kan være tekst eller html. Standard er tekst',
  info_option_match: 'Når du behandler en katalog, bør du bare vurdere filer som samsvarer med dette regulære uttrykket',
  info_option_excludes: 'Når du behandler en katalog, ekskluder du eksplisitt filer som samsvarer med disse regexene, selv om de ville samsvare med `-m` / `--match` regex',
  info_option_filter: 'Når du behandler en katalog: 1) kreve denne JS-filen, som må eksportere en funksjon kalt `filter` som tar en strengparameter og returnerer en streng, og 2) bruk denne filterfunksjonen på alle utdatafiler før de skrives',
  info_option_dryRun: 'Ikke skriv filer eller foreta API-kall til Google Translate, men logg hva som ville blitt gjort',
  info_option_languages: 'Kommaseparert liste over ISO-koder for språk å oversette til',
  info_option_outfile: 'For JS-filbehandling: skriv JS-utdata til denne filen\n For katalogbehandling: skriv filer til denne katalogen, som vil bli opprettet hvis den ikke eksisterer',
  info_option_force: 'Generer alltid nye oversettelser, og overskriv eventuelle eksisterende utdatafiler',
  info_option_handlebars: 'Sørg for at innholdet {{ handlebars }} bevares som det er og IKKE oversettes',
  info_option_markdown: 'Sørg for at [markdown](https://links) blir bevart riktig, ellers introduseres et mellomrom mellom slutten av lenkebeskrivelsen i hakeparenteser og selve lenken i parentes',
  info_arg_source: 'Kilden for oversettelser; kan være en JS-fil eller en katalog med filer som skal oversettes',
  info_filter_applied: 'Filter ble brukt før skriving: {{langFile}}',
  info_dryRun_key: '(tørrløp) skriver ikke oversettelse for nøkkel: {{key}}',
  info_dryRun_file: '(tørrkjøring) ville ha skrevet fil: {{langOut}}',
  warn_walk_readDir: 'gå( {{dir}} ): feillesing: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): det oppstod en feil ved forsøk på å liste filer i katalogen: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): denne banen er ikke en katalog',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): hopper over eksisterende fil: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Filen er skrevet: {{langFile}}',
  err_option_json_notFound: 'JSON-fil ikke funnet: {{ jsonFile }}',
  err_option_json_errorReading: 'Det oppstod en feil ved lesing eller analyse av JSON-filen {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Ingen oversettelsesspråk er spesifisert. Bruk `-l` / `--languages` og spesifiser en kommaseparert liste over ISO-språkkoder',
  err_option_outfile_required: 'Ingen utdatafil eller katalog ble spesifisert. Bruk `-o` / `--outfile` for å spesifisere utdatafilen eller katalogen',
  err_noSources: 'ingen kildefiler levert for oversettelse',
  info_option_jsonFile: 'Kjør flere hokey-kommandoer spesifisert i en JSON-fil. Hvis ingen JSON-fil er oppgitt, ser kommandoen etter en fil kalt \'hokey.json\' i gjeldende katalog',
  info_option_indexFile: 'Generer en indeksfil for oversettelsene. Filnavnet må slutte med `.html`, `.md` eller `.txt`, med mindre du oppgir en mal med `-A` / `--index-template`',
  info_option_indexTemplate: 'Dette kan være \'html\', \'markdown\', \'tekst\' eller en sti til din egen styremal. Denne malen brukes når du oppretter indeksfilen. Se på standardmalene i kildekoden for hookeylisering for eksempler',
  info_option_regular: 'Oversett kildefiler som vanlige filer, ikke oversett JavaScript-objekter som inneholder strengressurser. `-M` / `--markdown`-flagget innebærer dette flagget.',
  info_arg_sources: 'Kilden(e) for oversettelser; dette kan være én eller flere JavaScript-filer eller kataloger',
  info_jsonProcessing_start: 'JSON-behandlingskonfigurasjon: {{name}}',
  err_index_singleFileMultipleSources: 'En enkelt indeksfil ble spesifisert, men det er flere inndatafiler. Angi en katalog i stedet for en fil for indeksen',
  err_index_targetDirAndNoTypeOrTemplate: 'En målkatalog ble spesifisert for indeksen, men ingen indeksmal ble spesifisert. Bruk `-A` / `--indexTemplate` for å velge en mal',
  err_index_parentDirDoesNotExist: 'Den overordnede katalogen til indeksen eksisterer ikke: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Filnavnet har ingen filtype, så en maltype kan ikke bestemmes: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Filnavnet har en ugyldig filtype, så en maltype kan ikke bestemmes: {{ file }}',
  err_index_templateLoadingError: 'Det oppsto en feil ved lasting av den egendefinerte malen {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Det oppstod en feil ved kompilering av den egendefinerte malen {{ file }} : {{ e }}',
  info_index_wroteFile: 'Vellykket opprettet indeksfil: {{ indexFile }}',
  label_indexOfTranslations: 'Indeks over oversettelser',
  label_findYourLanguageCode: 'Finn språkkoden din',
  err_processing_unknown: '*** Uventet feil: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Ingen utdatafil ble generert for språk {{ lang }} , så den vil bli ekskludert fra indeksen'
}