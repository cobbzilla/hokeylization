export default {
  err_fatal: 'FATAL FEJL: {{error}}',
  err_env_googleProjectId: 'Miljøvariabel GOOGLE_TRANSLATE_PROJECT_ID ikke defineret',
  err_env_googleCredentials: 'Miljøvariablen GOOGLE_APPLICATION_CREDENTIALS er ikke defineret',
  err_option_processAs_invalid: 'Ugyldig indstillingsværdi for -p / --process-as : denne indstilling understøtter kun værdierne \'text\' eller \'html\'',
  err_infileNotFound: 'inputfil eller bibliotek ikke fundet: {{ jsFile }}',
  err_cannotWriteSource: 'nægter at overskrive inputkilde (blev angivet i outputsprog): {{source}}',
  err_invalidOutfile: 'forventet outfil at indeholde \'LANG\' (erstattes med {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: forventet fil {{ file }} til at starte med \'export default\' eller \'module.exports\' men fundet: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'ugyldig json i {{file}}',
  err_processFile_writeFile: '*** Fejl ved skrivning til outfil for {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Fejl ved oversættelse: {{e}}',
  err_processing: '*** Uventet fejl: {{e}}',
  warn_missing_close_notranslate_tag: 'Output fra oversættelse manglede et afsluttende tag, hvor et var forventet. Etiket {{ label }} , linjenummer {{ lineNumber }} , linje: {{ line }}',
  info_summary: 'Hurtig oversættelsestjeneste ved hjælp af Google Translate\n Version {{VERSION}}',
  info_description: 'Et værktøj for udviklere. Med hokeylisering kan det være hurtigt, sjovt og nemt at lokalisere din app!\n\n === Kilde ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === KRÆVE miljøvariabler ===\n * GOOGLE_TRANSLATE_PROJECT_ID: dit Google Oversæt-projekt\n * GOOGLE_APPLICATION_CREDENTIALS: dine legitimationsoplysninger JSON-fil\n\n === ISO sprogkoder ===\n Når du angiver ISO-koder (enten inputsprog eller målsprog), skal du bruge disse koder:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO-kode til sprog at oversætte fra. Standard er {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Type kan være tekst eller html. Standard er tekst',
  info_option_match: 'Når du behandler en mappe, skal du kun overveje filer, der matcher dette regex',
  info_option_excludes: 'Når du behandler en mappe, skal du eksplicit ekskludere filer, der matcher disse regexes, selvom de ville matche `-m` / `--match` regex',
  info_option_filter: 'Når du behandler en mappe: 1) kræve denne JS-fil, som skal eksportere en funktion ved navn `filter`, som tager en strengparameter og returnerer en streng, og 2) anvende denne filterfunktion på alle outputfiler, før de skrives',
  info_option_dryRun: 'Lad være med at skrive nogen filer eller foretage API-kald til Google Translate, men log, hvad der ville være blevet gjort',
  info_option_languages: 'Kommasepareret liste over ISO-koder for sprog, der skal oversættes til',
  info_option_outfile: 'For JS-filbehandling: skriv JS-output til denne fil\n Til mappebehandling: skriv filer til denne mappe, som oprettes, hvis den ikke eksisterer',
  info_option_force: 'Generer altid nye oversættelser, og overskriv eventuelle eksisterende outputfiler',
  info_option_handlebars: 'Sørg for at {{ handlebars }} indhold bevares som det er og IKKE oversættes',
  info_option_markdown: 'Sørg for at [markdown](https://links) bevares korrekt, ellers indføres et mellemrum mellem slutningen af linkbeskrivelsen i firkantede parenteser og selve linket i parentes',
  info_arg_source: 'Kilden til oversættelser; kan være en JS-fil eller en mappe med filer, der skal oversættes',
  info_filter_applied: 'Filtret blev anvendt før skrivning: {{langFile}}',
  info_dryRun_key: '(tørløb) skriver ikke oversættelse for nøgle: {{key}}',
  info_dryRun_file: '(tørløb) ville have skrevet fil: {{langOut}}',
  warn_walk_readDir: 'gåtur( {{dir}} ): fejllæsning: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): der opstod en fejl ved forsøg på at liste filer i mappen: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): denne sti er ikke en mappe',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): springer eksisterende fil over: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Filen er skrevet: {{langFile}}',
  err_option_json_notFound: 'JSON-fil blev ikke fundet: {{ jsonFile }}',
  err_option_json_errorReading: 'Der opstod en fejl ved læsning eller parsing af JSON-filen {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Ingen oversættelsessprog angivet. Brug `-l` / `--languages` og angiv en kommasepareret liste over ISO-sprogkoder',
  err_option_outfile_required: 'Ingen outputfil eller mappe blev angivet. Brug `-o` / `--outfile` til at angive outputfilen eller mappen',
  err_noSources: 'ingen kildefiler til oversættelse',
  info_option_jsonFile: 'Kør flere hokey-kommandoer angivet i en JSON-fil. Hvis der ikke er angivet nogen JSON-fil, leder kommandoen efter en fil med navnet \'hokey.json\' i den aktuelle mappe',
  info_option_indexFile: 'Generer en indeksfil til oversættelserne. Filnavnet skal slutte med `.html`, `.md` eller `.txt`, medmindre du angiver en skabelon med `-A` / `--index-template`',
  info_option_indexTemplate: 'Dette kan være \'html\', \'markdown\', \'tekst\' eller en sti til din egen styrskabelon. Denne skabelon bruges ved oprettelse af indeksfilen. Se på standardskabelonerne i kildekoden til hokeyization for eksempler',
  info_option_regular: 'Oversæt kildefiler som almindelige filer, ikke oversæt JavaScript-objekter, der indeholder strengressourcer. Flaget `-M` / `--markdown` antyder dette flag.',
  info_arg_sources: 'Kilden/kilderne til oversættelser; dette kan være en eller flere JavaScript-filer eller mapper',
  info_jsonProcessing_start: 'JSON-behandlingskonfiguration: {{name}}',
  err_index_singleFileMultipleSources: 'En enkelt indeksfil blev angivet, men der er flere inputfiler. Angiv en mappe i stedet for en fil til indekset',
  err_index_targetDirAndNoTypeOrTemplate: 'En målmappe blev angivet for indekset, men der blev ikke angivet nogen indeksskabelon. Brug `-A` / `--indexTemplate` for at vælge en skabelon',
  err_index_parentDirDoesNotExist: 'Indeksets overordnede mappe findes ikke: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Filnavnet har ingen udvidelse, så en skabelontype kan ikke bestemmes: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Filnavnet har en ugyldig udvidelse, så en skabelontype kan ikke bestemmes: {{ file }}',
  err_index_templateLoadingError: 'Der opstod en fejl under indlæsning af den tilpassede skabelon {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Der opstod en fejl ved kompilering af den tilpassede skabelon {{ file }} : {{ e }}',
  info_index_wroteFile: 'Indeksfil blev oprettet med succes: {{ indexFile }}',
  label_indexOfTranslations: 'Indeks over oversættelser',
  label_findYourLanguageCode: 'Find din sprogkode',
  err_processing_unknown: '*** Uventet fejl: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Der blev ikke genereret nogen outputfil for sprog {{ lang }} , så den vil blive udelukket fra indekset',
  err_filter_loading: 'Filter ikke fundet: {{ filter }}\n Filteret blev ikke fundet i nogen af: det aktuelle bibliotek, ./.hokey-filters-biblioteket, biblioteket ${HOME}/.hokey-filters eller biblioteket med indbyggede filtre'
}