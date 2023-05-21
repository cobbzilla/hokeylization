export default {
  err_fatal: 'KOBODNA GREŠKA: {{error}}',
  err_env_googleProjectId: 'Varijabla okruženja GOOGLE_TRANSLATE_PROJECT_ID nije definirana',
  err_env_googleCredentials: 'Varijabla okruženja GOOGLE_APPLICATION_CREDENTIALS nije definirana',
  err_option_processAs_invalid: 'Nevažeća vrijednost opcije za -p / --process-as : ova opcija podržava samo vrijednosti \'text\' ili \'html\'',
  err_infileNotFound: 'ulazna datoteka ili direktorij nije pronađen: {{ jsFile }}',
  err_cannotWriteSource: 'odbijanje prepisivanja izvora unosa (navedeno je na izlaznim jezicima): {{source}}',
  err_invalidOutfile: 'očekivani outfile sadržavati \'LANG\' (treba zamijeniti sa {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: očekivano da datoteka {{ file }} počinje sa \'export default\' ili \'module.exports\', ali je pronađeno: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'nevažeći json u {{file}}',
  err_processFile_writeFile: '*** Greška pri pisanju u outfile za {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Greška u prevodu: {{e}}',
  err_processing: '*** Neočekivana greška: {{e}}',
  warn_missing_close_notranslate_tag: 'Izlazu iz prijevoda je nedostajala završna oznaka gdje se očekivala. Oznaka {{ label }} , red broj {{ lineNumber }} , red: {{ line }}',
  info_summary: 'Usluga brzog prevođenja koristeći Google Translate\n Verzija {{VERSION}}',
  info_description: 'Alat za programere. Uz hokeilizaciju, lokalizacija vaše aplikacije može biti brza, zabavna i laka!\n\n === Izvor ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === POTREBNE varijable okruženja ===\n * GOOGLE_TRANSLATE_PROJECT_ID: vaš projekat Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS: JSON fajl vaših akreditiva\n\n === ISO kodovi jezika ===\n Prilikom navođenja ISO kodova (bilo jezika unosa ili ciljnih jezika) koristite ove kodove:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO kod za jezike sa kojih se prevodi. Zadano je {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Vrsta može biti tekst ili html. Podrazumevano je tekst',
  info_option_match: 'Kada obrađujete direktorij, uzmite u obzir samo datoteke koje odgovaraju ovom redovnom izrazu',
  info_option_excludes: 'Kada obrađujete direktorij, eksplicitno izuzmite datoteke koje odgovaraju ovim regeksima, čak i ako se podudaraju s `-m` / `--match`',
  info_option_filter: 'Prilikom obrade direktorija: 1) zahtijevajte ovu JS datoteku, koja mora izvesti funkciju pod nazivom `filter` koja uzima parametar stringa i vraća string, i 2) primijeniti ovu funkciju filtera na sve izlazne datoteke prije nego što se napišu',
  info_option_dryRun: 'Nemojte upisivati datoteke niti upućivati bilo kakve API pozive Google Translateu, već zabilježite ono što bi bilo učinjeno',
  info_option_languages: 'Lista ISO kodova razdvojenih zarezima za jezike na koje se prevodi',
  info_option_outfile: 'Za obradu JS datoteke: napišite JS izlaz u ovu datoteku\n Za obradu direktorija: upišite datoteke u ovaj direktorij, koji će se kreirati ako ne postoji',
  info_option_force: 'Uvijek generirajte svježe prijevode, prepisujući sve postojeće izlazne datoteke',
  info_option_handlebars: 'Osigurajte da je {{ handlebars }} sadržaj sačuvan kakav jeste i da NE bude preveden',
  info_option_markdown: 'Uvjerite se da je [markdown](https://links) ispravno sačuvan, inače se uvodi razmak između kraja opisa veze u uglastim zagradama i same veze u zagradama',
  info_arg_source: 'Izvor za prijevode; može biti JS datoteka ili direktorij datoteka za prevođenje',
  info_filter_applied: 'Filter je uspješno primijenjen prije pisanja: {{langFile}}',
  info_dryRun_key: '(dry run) ne piše prevod za ključ: {{key}}',
  info_dryRun_file: '(dry run) bi napisao fajl: {{langOut}}',
  warn_walk_readDir: 'hoda( {{dir}} ): greška pri čitanju: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): dogodila se greška pri pokušaju popisivanja datoteka u direktoriju: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ova putanja nije direktorij',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): preskakanje postojeće datoteke: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Fajl je napisan: {{langFile}}',
  err_option_json_notFound: 'JSON fajl nije pronađen: {{ jsonFile }}',
  err_option_json_errorReading: 'Došlo je do greške pri čitanju ili raščlanjivanju JSON datoteke {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Nisu navedeni jezici prijevoda. Koristite `-l` / `--languages` i navedite listu ISO jezičnih kodova razdvojenu zarezima',
  err_option_outfile_required: 'Nije navedena izlazna datoteka ili direktorij. Koristite `-o` / `--outfile` da navedete izlaznu datoteku ili direktorij',
  err_noSources: 'nema izvornih datoteka za prijevod',
  info_option_jsonFile: 'Pokrenite više hokey komandi navedenih u JSON datoteci. Ako nije navedena JSON datoteka, naredba traži datoteku pod nazivom \'hokey.json\' u trenutnom direktoriju',
  info_option_indexFile: 'Generirajte indeksni fajl za prevode. Ime datoteke mora završavati sa `.html`, `.md` ili `.txt`, osim ako ne dostavite predložak sa `-A` / `--index-template`',
  info_option_indexTemplate: 'To može biti \'html\', \'markdown\', \'text\' ili put do vašeg vlastitog predloška upravljača. Ovaj šablon se koristi prilikom kreiranja indeksne datoteke. Pogledajte zadane predloške u izvornom kodu hokeilizacije za primjere',
  info_option_regular: 'Prevedite izvorne datoteke kao obične datoteke, a ne prevedite JavaScript objekte koji sadrže nizove resurse. Oznaka `-M` / `--markdown` implicira ovu zastavicu.',
  info_arg_sources: 'Izvor(i) za prijevode; ovo može biti jedna ili više JavaScript datoteka ili direktorija',
  info_jsonProcessing_start: 'JSON konfiguracija obrade: {{name}}',
  err_index_singleFileMultipleSources: 'Navedena je jedna indeksna datoteka, ali postoji više ulaznih datoteka. Navedite direktorij umjesto datoteke za indeks',
  err_index_targetDirAndNoTypeOrTemplate: 'Ciljni direktorij je specificiran za indeks, ali nije specificiran predložak indeksa. Koristite `-A` / `--indexTemplate` da odaberete predložak',
  err_index_parentDirDoesNotExist: 'Roditeljski direktorij indeksa ne postoji: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Ime datoteke nema ekstenziju tako da se tip šablona ne može odrediti: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Ime datoteke ima nevažeću ekstenziju pa se tip predloška ne može odrediti: {{ file }}',
  err_index_templateLoadingError: 'Došlo je do greške pri učitavanju prilagođenog šablona {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Došlo je do greške pri sastavljanju prilagođenog predloška {{ file }} : {{ e }}',
  info_index_wroteFile: 'Uspješno kreiran indeksni fajl: {{ indexFile }}',
  label_indexOfTranslations: 'Indeks prijevoda',
  label_findYourLanguageCode: 'Pronađite kod svog jezika',
  err_processing_unknown: '*** Neočekivana greška: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Nije generirana izlazna datoteka za jezik {{ lang }} , tako da će biti isključena iz indeksa',
  err_filter_loading: 'Filter nije pronađen: {{ filter }}\n Filter nije pronađen ni u jednom od: trenutnom direktoriju, direktoriju ./.hokey-filters, direktoriju ${HOME}/.hokey-filters, niti direktoriju ugrađenih filtera'
}