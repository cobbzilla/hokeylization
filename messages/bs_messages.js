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
  info_summary: 'Usluga brzog prevođenja koristeći Google Translate\n Verzija {{VERSION}}',
  info_description: '=== Izvor ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === POTREBNE varijable okruženja ===\n * GOOGLE_TRANSLATE_PROJECT_ID: vaš projekat Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS: JSON fajl vaših akreditiva\n\n === ISO kodovi jezika ===\n Prilikom navođenja ISO kodova (bilo jezika unosa ili ciljnih jezika) koristite ove kodove:\n https://cloud.google.com/translate/docs/languages',
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
  info_processDirectory_fileWritten: 'Fajl je napisan: {{langFile}}'
}