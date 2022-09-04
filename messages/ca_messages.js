export default {
  err_fatal: 'ERROR FATAL: {{error}}',
  err_env_googleProjectId: 'La variable d\'entorn GOOGLE_TRANSLATE_PROJECT_ID no està definida',
  err_env_googleCredentials: 'La variable d\'entorn GOOGLE_APPLICATION_CREDENTIALS no està definida',
  err_option_processAs_invalid: 'El valor de l\'opció no és vàlid per a -p / --process-as : aquesta opció només admet valors de "text" o "html"',
  err_infileNotFound: 'fitxer d\'entrada o directori no trobat: {{ jsFile }}',
  err_cannotWriteSource: 'negar-se a sobreescriure la font d\'entrada (es va especificar en els idiomes de sortida): {{source}}',
  err_invalidOutfile: 's\'espera que el fitxer de sortida contingui "LANG" (que es substituirà per {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: s\'espera que el fitxer {{ file }} comenci amb "export default" o "module.exports", però s\'ha trobat: {{actualPrefix}}',
  err_readMessageKeys_invalidJson: 'json no vàlid a {{file}}',
  err_processFile_writeFile: '*** Error escrivint al fitxer de sortida de {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Error en traduir: {{e}}',
  err_processing: '*** Error inesperat: {{e}}',
  info_summary: 'Servei de traducció ràpida amb Google Translate\n Versió {{VERSION}}',
  info_description: '=== Font ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Variables d\'entorn OBLIGATRES ===\n * GOOGLE_TRANSLATE_PROJECT_ID: el vostre projecte de Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS: el vostre fitxer JSON de credencials\n\n === Codis d\'idioma ISO ===\n Quan especifiqueu codis ISO (idiomes d\'entrada o idiomes de destinació), utilitzeu aquests codis:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Codi ISO per als idiomes des dels quals traduir. Per defecte és {{DEFAULT_LOCALE}}',
  info_option_processAs: 'El tipus pot ser text o html. El text per defecte és',
  info_option_match: 'Quan processeu un directori, tingueu en compte només els fitxers que coincideixen amb aquesta expressió regular',
  info_option_excludes: 'Quan processeu un directori, excloeu explícitament els fitxers que coincideixin amb aquestes execucions regulars, encara que coincideixin amb l\'expressió regular "-m" / "--match".',
  info_option_filter: 'Quan es processa un directori: 1) requereix aquest fitxer JS, que ha d\'exportar una funció anomenada "filter" que pren un paràmetre de cadena i retorna una cadena, i 2) apliqueu aquesta funció de filtre a tots els fitxers de sortida abans que s\'escriguin',
  info_option_dryRun: 'No feu que escrigui cap fitxer ni feu cap trucada a l\'API a Google Translate, sinó que registre el que s\'hauria fet',
  info_option_languages: 'Llista de codis ISO separats per comes per als idiomes als quals cal traduir',
  info_option_outfile: 'Per al processament de fitxers JS: escriviu la sortida JS en aquest fitxer\n Per al processament del directori: escriviu fitxers en aquest directori, que es crearà si no existeix',
  info_option_force: 'Genereu sempre traduccions noves, sobreescrivint els fitxers de sortida existents',
  info_option_handlebars: 'Assegureu-vos que el contingut {{ handlebars }} es conserva tal com està i NO es tradueix',
  info_option_markdown: 'Assegureu-vos que [markdown](https://links) es conserven correctament, en cas contrari s\'introdueix un espai entre el final de la descripció de l\'enllaç entre claudàtors i l\'enllaç entre parèntesis.',
  info_arg_source: 'La font de les traduccions; pot ser un fitxer JS o un directori de fitxers per traduir',
  info_filter_applied: 'El filtre s\'ha aplicat correctament abans d\'escriure: {{langFile}}',
  info_dryRun_key: '(execució en sec) no escriure la traducció de la clau: {{key}}',
  info_dryRun_file: '(execució en sec) hauria escrit el fitxer: {{langOut}}',
  warn_walk_readDir: 'caminar ( {{dir}} ): error de lectura: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): s\'ha produït un error en intentar llistar fitxers al directori: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): aquest camí no és un directori',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): saltant el fitxer existent: {{langFile.file}}',
  info_processDirectory_fileWritten: 'El fitxer ha estat escrit: {{langFile}}'
}