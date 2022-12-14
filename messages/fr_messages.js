export default {
  err_fatal: 'ERREUR FATALE : {{error}}',
  err_env_googleProjectId: 'Variable d\'environnement GOOGLE_TRANSLATE_PROJECT_ID non définie',
  err_env_googleCredentials: 'Variable d\'environnement GOOGLE_APPLICATION_CREDENTIALS non définie',
  err_option_processAs_invalid: 'Valeur d\'option invalide pour -p / --process-as : cette option ne prend en charge que les valeurs \'text\' ou \'html\'',
  err_infileNotFound: 'fichier d\'entrée ou répertoire introuvable : {{ jsFile }}',
  err_cannotWriteSource: 'refus d\'écraser la source d\'entrée (a été spécifié dans les langues de sortie): {{source}}',
  err_invalidOutfile: 'le fichier de sortie attendu devrait contenir \'LANG\' (à remplacer par {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys : le fichier attendu {{ file }} doit commencer par \'export default\' ou \'module.exports\' mais trouvé : {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json invalide dans {{file}}',
  err_processFile_writeFile: '*** Erreur d\'écriture dans le fichier de sortie pour {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Erreur de traduction : {{e}}',
  err_processing: '*** Erreur inattendue : {{e}}',
  warn_missing_close_notranslate_tag: 'La sortie de la traduction manquait d\'une balise de fermeture là où elle était attendue. Libellé {{ label }} , numéro de ligne {{ lineNumber }} , ligne : {{ line }}',
  info_summary: 'Service de traduction rapide avec Google Translate\n Modèle {{VERSION}}',
  info_description: 'Un outil pour les développeurs. Avec Hokeylization, la localisation de votre application peut être rapide, amusante et facile !\n\n === Origine ===\n GitHub : https://github.com/cobbzilla/hokeylization\n npm : https://www.npmjs.com/package/hokeylization\n\n === Variables d\'environnement OBLIGATOIRES ===\n * GOOGLE_TRANSLATE_PROJECT_ID : votre projet Google Traduction\n * GOOGLE_APPLICATION_CREDENTIALS : votre fichier JSON d\'informations d\'identification\n\n === Codes de langue ISO ===\n Lorsque vous spécifiez des codes ISO (langue d\'entrée ou langues cibles), utilisez ces codes :\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Code ISO pour les langues à traduire. La valeur par défaut est {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Le type peut être texte ou html. La valeur par défaut est le texte',
  info_option_match: 'Lors du traitement d\'un répertoire, ne considérez que les fichiers qui correspondent à cette expression régulière',
  info_option_excludes: 'Lors du traitement d\'un répertoire, excluez explicitement les fichiers qui correspondent à ces expressions régulières, même s\'ils correspondraient à l\'expression régulière `-m` / `--match`',
  info_option_filter: 'Lors du traitement d\'un répertoire : 1) exigez ce fichier JS, qui doit exporter une fonction nommée `filter` qui prend un paramètre de chaîne et renvoie une chaîne, et 2) appliquez cette fonction de filtre à tous les fichiers de sortie avant qu\'ils ne soient écrits',
  info_option_dryRun: 'Ne faites écrire aucun fichier ou n\'effectuez aucun appel d\'API à Google Translate, mais enregistrez ce qui aurait été fait',
  info_option_languages: 'Liste séparée par des virgules des codes ISO pour les langues à traduire',
  info_option_outfile: 'Pour le traitement du fichier JS : écrivez la sortie JS dans ce fichier\n Pour le traitement des répertoires : écrivez des fichiers dans ce répertoire, qui sera créé s\'il n\'existe pas',
  info_option_force: 'Générez toujours de nouvelles traductions, en écrasant tous les fichiers de sortie existants',
  info_option_handlebars: 'Assurez-vous que le contenu de {{ handlebars }} est conservé tel quel et NON traduit',
  info_option_markdown: 'Assurez-vous que [markdown](https://links) sont conservés correctement, sinon un espace est introduit entre la fin de la description du lien entre crochets et le lien lui-même entre parenthèses',
  info_arg_source: 'La source des traductions ; peut être un fichier JS ou un répertoire de fichiers à traduire',
  info_filter_applied: 'Filtre appliqué avec succès avant d\'écrire : {{langFile}}',
  info_dryRun_key: '(essai à blanc) ne pas écrire de traduction pour la clé : {{key}}',
  info_dryRun_file: '(essai à blanc) aurait écrit le fichier : {{langOut}}',
  warn_walk_readDir: 'marche( {{dir}} ) : erreur de lecture : {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ) : une erreur s\'est produite lors de la tentative de liste des fichiers dans le répertoire : {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ce chemin n\'est pas un répertoire',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): ignorer le fichier existant : {{langFile.file}}',
  info_processDirectory_fileWritten: 'Le fichier a été écrit : {{langFile}}',
  err_option_json_notFound: 'Fichier JSON introuvable : {{ jsonFile }}',
  err_option_json_errorReading: 'Une erreur s\'est produite lors de la lecture ou de l\'analyse du fichier JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Aucune langue de traduction spécifiée. Utilisez `-l` / `--languages` et spécifiez une liste de codes de langue ISO séparés par des virgules',
  err_option_outfile_required: 'Aucun fichier ou répertoire de sortie n\'a été spécifié. Utilisez `-o` / `--outfile` pour spécifier le fichier ou le répertoire de sortie',
  err_noSources: 'aucun fichier source fourni pour la traduction',
  info_option_jsonFile: 'Exécutez plusieurs commandes hokey spécifiées dans un fichier JSON. Si aucun fichier JSON n\'est fourni, la commande recherche un fichier nommé \'hokey.json\' dans le répertoire courant',
  info_option_indexFile: 'Générez un fichier d\'index pour les traductions. Le nom du fichier doit se terminer par `.html`, `.md` ou `.txt`, sauf si vous fournissez un modèle avec `-A` / `--index-template`',
  info_option_indexTemplate: 'Cela peut être \'html\', \'markdown\', \'text\' ou un chemin vers votre propre modèle de guidon. Ce modèle est utilisé lors de la création du fichier d\'index. Regardez les modèles par défaut dans le code source d\'hokeyylization pour des exemples',
  info_option_regular: 'Traduisez les fichiers source en fichiers normaux, sans traduire les objets JavaScript contenant des ressources de chaîne. Le drapeau `-M` / `--markdown` implique ce drapeau.',
  info_arg_sources: 'La ou les sources des traductions ; cela peut être un ou plusieurs fichiers ou répertoires JavaScript',
  info_jsonProcessing_start: 'Configuration de traitement JSON : {{name}}',
  err_index_singleFileMultipleSources: 'Un seul fichier d\'index a été spécifié, mais il existe plusieurs fichiers d\'entrée. Spécifiez un répertoire au lieu d\'un fichier pour l\'index',
  err_index_targetDirAndNoTypeOrTemplate: 'Un répertoire cible a été spécifié pour l\'index, mais aucun modèle d\'index n\'a été spécifié. Utilisez `-A` / `--indexTemplate` pour sélectionner un modèle',
  err_index_parentDirDoesNotExist: 'Le répertoire parent de l\'index n\'existe pas : {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Le nom de fichier n\'a pas d\'extension, donc un type de modèle ne peut pas être déterminé : {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Le nom de fichier a une extension non valide, donc un type de modèle ne peut pas être déterminé : {{ file }}',
  err_index_templateLoadingError: 'Une erreur s\'est produite lors du chargement du modèle personnalisé {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Une erreur s\'est produite lors de la compilation du modèle personnalisé {{ file }} : {{ e }}',
  info_index_wroteFile: 'Fichier d\'index créé avec succès : {{ indexFile }}',
  label_indexOfTranslations: 'Index des traductions',
  label_findYourLanguageCode: 'Trouvez votre code de langue',
  err_processing_unknown: '*** Erreur inattendue : {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Aucun fichier de sortie n\'a été généré pour la langue {{ lang }} , il sera donc exclu de l\'index',
  err_filter_loading: 'Filtre introuvable : {{ filter }}\n Le filtre n\'a été trouvé dans aucun des éléments suivants : le répertoire courant, le répertoire ./.hokey-filters, le répertoire ${HOME}/.hokey-filters, ni le répertoire des filtres intégrés'
}