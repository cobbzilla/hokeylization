export default {
  err_fatal: 'VÉGZETES HIBA: {{error}}',
  err_env_googleProjectId: 'A GOOGLE_TRANSLATE_PROJECT_ID környezeti változó nincs megadva',
  err_env_googleCredentials: 'A GOOGLE_APPLICATION_CREDENTIALS környezeti változó nincs megadva',
  err_option_processAs_invalid: 'Érvénytelen a -p / --process-as paraméter értéke: ez az opció csak a "text" vagy "html" értékeit támogatja',
  err_infileNotFound: 'beviteli fájl vagy könyvtár nem található: {{ jsFile }}',
  err_cannotWriteSource: 'a bemeneti forrás felülírásának megtagadása (kimeneti nyelvekben volt megadva): {{source}}',
  err_invalidOutfile: 'a várható kimeneti fájl tartalmazni fogja a „LANG” szót (a következőre kell cserélni: {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: a várt fájl {{ file }} az "export default" vagy "module.exports" kifejezéssel kezdődik, de a talált fájl: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'érvénytelen json itt: {{file}}',
  err_processFile_writeFile: '*** Hiba történt a {{lang}} : {{langOut}} : {{e}} outfile-be írásakor',
  err_processFile_error: '*** Fordítási hiba: {{e}}',
  err_processing: '*** Váratlan hiba: {{e}}',
  warn_missing_close_notranslate_tag: 'A fordítás kimenetéből hiányzott a záró címke ott, ahol azt várták. Címke {{ label }} , sorszám {{ lineNumber }} , sor: {{ line }}',
  info_summary: 'Gyors fordítási szolgáltatás a Google Fordító segítségével\n {{VERSION}} verzió',
  info_description: 'Eszköz fejlesztőknek. A hokeylizálással az alkalmazás lokalizálása gyors, szórakoztató és egyszerű lehet!\n\n === Forrás ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === KÖTELEZŐ környezeti változók ===\n * GOOGLE_TRANSLATE_PROJECT_ID: az Ön Google Fordító-projektje\n * GOOGLE_APPLICATION_CREDENTIALS: az Ön hitelesítő adatainak JSON-fájlja\n\n === ISO nyelvkódok ===\n ISO-kódok (akár beviteli nyelv, akár célnyelv) megadásakor használja a következő kódokat:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO kód a fordítandó nyelvekhez. Az alapértelmezett {{DEFAULT_LOCALE}}',
  info_option_processAs: 'A típus szöveg vagy html lehet. Az alapértelmezett a szöveg',
  info_option_match: 'Egy könyvtár feldolgozásakor csak azokat a fájlokat vegye figyelembe, amelyek megfelelnek ennek a szabályos kifejezésnek',
  info_option_excludes: 'Egy könyvtár feldolgozásakor kifejezetten zárja ki azokat a fájlokat, amelyek megfelelnek ezeknek a reguláris kifejezéseknek, még akkor is, ha egyeznének a "-m" / "--match" reguláris kifejezéssel',
  info_option_filter: 'Könyvtár feldolgozásakor: 1) igényelje ezt a JS-fájlt, amelynek exportálnia kell egy "filter" nevű függvényt, amely egy string paramétert vesz fel és egy karakterláncot ad vissza, és 2) alkalmazza ezt a szűrőfüggvényt az összes kimeneti fájlra, mielőtt megírná őket.',
  info_option_dryRun: 'Ne írjon fájlokat vagy ne hívjon API-t a Google Fordítóba, hanem naplózza, hogy mi történt volna',
  info_option_languages: 'A lefordítandó nyelvek ISO-kódjainak vesszővel elválasztott listája',
  info_option_outfile: 'JS-fájlfeldolgozáshoz: írja be a JS-kimenetet ebbe a fájlba\n Könyvtárfeldolgozáshoz: ebbe a könyvtárba írjon fájlokat, amelyek akkor jönnek létre, ha nem létezik',
  info_option_force: 'Mindig készítsen új fordításokat, felülírva a meglévő kimeneti fájlokat',
  info_option_handlebars: 'Győződjön meg arról, hogy a {{ handlebars }} tartalmat úgy kell megőrizni, ahogy van, és NE fordítsák le',
  info_option_markdown: 'Győződjön meg arról, hogy a [markdown](https://links) helyesen van megőrizve, ellenkező esetben szóköz kerül be a szögletes zárójelben lévő linkleírás vége és a zárójelben lévő hivatkozás közé.',
  info_arg_source: 'A fordítások forrása; lehet JS-fájl vagy lefordítandó fájlok könyvtára',
  info_filter_applied: 'A szűrő sikeresen alkalmazva írás előtt: {{langFile}}',
  info_dryRun_key: '(száraz futás) nem ír fordítást a kulcshoz: {{key}}',
  info_dryRun_file: '(száraz futás) a következő fájlt írta volna: {{langOut}}',
  warn_walk_readDir: 'séta( {{dir}} ): hibaolvasás: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): hiba történt a következő könyvtárban lévő fájlok listázásakor: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ez az elérési út nem egy könyvtár',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): meglévő fájl kihagyása: {{langFile.file}}',
  info_processDirectory_fileWritten: 'A fájlt írták: {{langFile}}',
  err_option_json_notFound: 'JSON fájl nem található: {{ jsonFile }}',
  err_option_json_errorReading: 'Hiba történt a JSON-fájl olvasásakor vagy elemzésekor {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Nincsenek megadva fordítási nyelvek. Használja a "-l" / "--languages" karakterláncot, és adja meg az ISO nyelvkódok vesszővel elválasztott listáját',
  err_option_outfile_required: 'Nincs megadva kimeneti fájl vagy könyvtár. Használja a `-o` / `--outfile` paramétert a kimeneti fájl vagy könyvtár megadásához',
  err_noSources: 'nincs forrásfájl a fordításhoz',
  info_option_jsonFile: 'Futtasson több, egy JSON-fájlban megadott hokey-parancsot. Ha nincs megadva JSON-fájl, a parancs egy „hokey.json” nevű fájlt keres az aktuális könyvtárban',
  info_option_indexFile: 'Indexfájl létrehozása a fordításokhoz. A fájlnévnek ".html", ".md" vagy ".txt" karakterrel kell végződnie, hacsak nem ad meg egy sablont "-A" / "--index-template"',
  info_option_indexTemplate: 'Ez lehet „html”, „markdown”, „text” vagy egy útvonal a saját kormánysablonjához. Ez a sablon az indexfájl létrehozásakor használatos. Példákért nézze meg a hokeylization forráskód alapértelmezett sablonjait',
  info_option_regular: 'Fordítsa le a forrásfájlokat normál fájlként, ne fordítsa le a karakterlánc-erőforrásokat tartalmazó JavaScript-objektumokat. A "-M" / "--markdown" jelző ezt a jelzőt jelenti.',
  info_arg_sources: 'A fordítások forrása(i); ez lehet egy vagy több JavaScript fájl vagy könyvtár',
  info_jsonProcessing_start: 'JSON-feldolgozási konfiguráció: {{name}}',
  err_index_singleFileMultipleSources: 'Egyetlen indexfájl lett megadva, de több bemeneti fájl is van. Adjon meg egy könyvtárat az index fájl helyett',
  err_index_targetDirAndNoTypeOrTemplate: 'Meg lett adva egy célkönyvtár az indexhez, de nem lett megadva indexsablon. A `-A` / `--indexTemplate` segítségével válasszon sablont',
  err_index_parentDirDoesNotExist: 'Az index szülőkönyvtára nem létezik: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'A fájlnévnek nincs kiterjesztése, így a sablontípus nem határozható meg: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'A fájlnév kiterjesztése érvénytelen, ezért a sablontípus nem határozható meg: {{ file }}',
  err_index_templateLoadingError: 'Hiba történt az egyéni sablon betöltésekor {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Hiba történt az egyéni sablon fordítása során {{ file }} : {{ e }}',
  info_index_wroteFile: 'Az indexfájl sikeresen létrehozva: {{ indexFile }}',
  label_indexOfTranslations: 'Fordítások mutatója',
  label_findYourLanguageCode: 'Keresse meg nyelvi kódját',
  err_processing_unknown: '*** Váratlan hiba: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'A(z) {{ lang }} nyelvhez nem készült kimeneti fájl, ezért az ki lesz zárva az indexből',
  err_filter_loading: 'A szűrő nem található: {{ filter }}\n A szűrő egyikben sem található: az aktuális könyvtárban, a ./.hokey-filters könyvtárban, a ${HOME}/.hokey-filters könyvtárban, sem a beépített filters könyvtárban'
}