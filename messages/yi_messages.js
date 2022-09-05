export default {
  err_fatal: 'פאַטאַל טעות: {{error}}',
  err_env_googleProjectId: 'סוויווע וועריאַבאַל GOOGLE_TRANSLATE_PROJECT_ID איז נישט דיפיינד',
  err_env_googleCredentials: 'סוויווע וועריאַבאַל GOOGLE_APPLICATION_CREDENTIALS איז נישט דיפיינד',
  err_option_processAs_invalid: 'פאַרקריפּלט אָפּציע ווערט פֿאַר -p / --process-as: די אָפּציע שטיצט בלויז וואַלועס פון \'טעקסט\' אָדער \'html\'',
  err_infileNotFound: 'אַרייַנשרייַב טעקע אָדער וועגווייַזער ניט געפֿונען: {{ jsFile }}',
  err_cannotWriteSource: 'אָפּזאָגן צו אָווועררייט אַרייַנשרייַב מקור (איז געווען ספּעסיפיעד אין רעזולטאַט שפּראַכן): {{source}}',
  err_invalidOutfile: 'דערוואַרט אַוטפילע צו אַנטהאַלטן \'LANG\' (צו זיין ריפּלייסט מיט {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: דערוואַרט טעקע {{ file }} צו אָנהייבן מיט \'עקספּאָרט פעליקייַט\' אָדער \'module.exports\' אָבער געפֿונען: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'פאַרקריפּלט דזשסאָן אין {{file}}',
  err_processFile_writeFile: '*** טעות שרייבן צו אָוטפילע פֿאַר {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** טעות איבערזעצן: {{e}}',
  err_processing: '*** אומגעריכט טעות: {{e}}',
  warn_missing_close_notranslate_tag: 'אויסצוג פון איבערזעצונג האט געפעלט א פארמאכט קוויטל וואו מען האט ערווארטעט. פירמע {{ label }} , שורה נומער {{ lineNumber }} , שורה: {{ line }}',
  info_summary: 'שנעל איבערזעצונג דינסט ניצן Google Translate\n ווערסיע {{VERSION}}',
  info_description: 'א געצייַג פֿאַר דעוועלאָפּערס. מיט כאָקיליזאַטיאָן, לאָוקאַלייזינג דיין אַפּ קענען זיין שנעל, שפּאַס און גרינג!\n\n === מקור ===\n גיטהוב: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === פארלאנגט סוויווע וועריאַבאַלז ===\n * GOOGLE_TRANSLATE_PROJECT_ID: דיין Google Translate פּרויעקט\n * GOOGLE_APPLICATION_CREDENTIALS: דיין קראַדענטשאַלז JSON טעקע\n\n === יסאָ שפּראַך קאָודז ===\n ווען איר ספּעציפיצירן ISO קאָודז (אָדער אַרייַנשרייַב שפּראַך אָדער ציל שפּראַכן) נוצן די קאָודז:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ISO קאָד פֿאַר שפּראַכן פון איבערזעצן. פעליקייַט איז {{DEFAULT_LOCALE}}',
  info_option_processAs: 'טיפּ קענען זיין טעקסט אָדער HTML. פעליקייַט איז טעקסט',
  info_option_match: 'ווען פּראַסעסינג אַ וועגווייַזער, באַטראַכטן בלויז טעקעס וואָס גלייַכן דעם רעגעקס',
  info_option_excludes: 'ווען פּראַסעסינג אַ וועגווייַזער, בפירוש ויסשליסן טעקעס וואָס גלייַכן די רעגעקסעס, אפילו אויב זיי וואָלט גלייַכן די `-m` / `--match` רעגעקס',
  info_option_filter: 'ווען פּראַסעסינג אַ וועגווייַזער: 1) דאַרפן דעם JS טעקע, וואָס מוזן אַרויספירן אַ פֿונקציע מיטן נאָמען `פילטער` וואָס נעמט אַ שטריקל פּאַראַמעטער און קערט אַ שטריקל, און 2) צולייגן דעם פילטער פֿונקציע צו אַלע רעזולטאַט טעקעס איידער זיי זענען געשריבן',
  info_option_dryRun: 'דו זאלסט נישט שרייַבן קיין טעקעס אָדער מאַכן אַפּי קאַללס צו Google זעץ, אָבער קלאָץ וואָס וואָלט געווען געטאן',
  info_option_languages: 'קאָממאַ-געשיידט רשימה פון ISO קאָודז פֿאַר שפּראַכן צו איבערזעצן אין',
  info_option_outfile: 'פֿאַר JS טעקע פּראַסעסינג: שרייַבן JS רעזולטאַט צו דעם טעקע\n פֿאַר וועגווייַזער פּראַסעסינג: שרייַבן טעקעס צו דעם וועגווייַזער, וואָס וועט זיין באשאפן אויב עס טוט נישט עקסיסטירן',
  info_option_force: 'שטענדיק דזשענערייט פריש איבערזעצונגען, אָווועררייטינג קיין יגזיסטינג רעזולטאַט טעקעס',
  info_option_handlebars: 'פאַרזיכערן אַז {{ handlebars }} אינהאַלט איז אפגעהיט ווי עס איז און נישט איבערגעזעצט',
  info_option_markdown: 'פאַרזיכערן אַז [מאַרקדאַון] (הטטפּס: // פֿאַרבינדונגען) זענען אפגעהיט ריכטיק, אַנדערש אַ פּלאַץ איז באַקענענ צווישן די סוף פון די לינק באַשרייַבונג אין קוואַדראַט בראַקאַץ און די לינק זיך אין קלאַמערן',
  info_arg_source: 'דער מקור פֿאַר איבערזעצונגען; קענען זיין אַ JS טעקע אָדער אַ וועגווייַזער פון טעקעס צו איבערזעצן',
  info_filter_applied: 'פילטער הצלחה געווענדט איידער שרייבן: {{langFile}}',
  info_dryRun_key: '(טרוקן לויפן) נישט שרייבן איבערזעצונג פֿאַר שליסל: {{key}}',
  info_dryRun_file: '(טרוקן לויפן) וואָלט האָבן געשריבן טעקע: {{langOut}}',
  warn_walk_readDir: 'גיין ( {{dir}} ): טעות לייענען: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles ( {{dir}} ): אַ טעות איז פארגעקומען ווען טריינג צו רשימה טעקעס אין וועגווייַזער: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles ( {{dir}} ): דער דרך איז נישט אַ וועגווייַזער',
  info_processDirectory_skippingExisting: 'processDirectory ( {{lang}} ): סקיפּינג יגזיסטינג טעקע: {{langFile.file}}',
  info_processDirectory_fileWritten: 'די טעקע איז געשריבן: {{langFile}}',
  err_option_json_notFound: 'JSON טעקע ניט געפֿונען: {{ jsonFile }}',
  err_option_json_errorReading: 'א טעות איז פארגעקומען מיט לייענען אָדער פּאַרסינג די JSON טעקע {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'קיין איבערזעצונג שפראַכן ספּעציפיצירט. ניצן `-l` / `--languages` און ספּעציפיצירן אַ קאָמע-געשיידט רשימה פון ISO שפּראַך קאָודז',
  err_option_outfile_required: 'קיין רעזולטאַט טעקע אָדער וועגווייַזער איז געווען ספּעסיפיעד. ניצן `-o` / `--outfile` צו ספּעציפיצירן די רעזולטאַט טעקע אָדער וועגווייַזער',
  err_noSources: 'קיין מקור טעקעס צוגעשטעלט פֿאַר איבערזעצונג',
  info_option_jsonFile: 'לויפן קייפל האָקי קאַמאַנדז ספּעסיפיעד אין אַ JSON טעקע. אויב קיין JSON טעקע איז צוגעשטעלט, דער באַפֿעל קוקט פֿאַר אַ טעקע מיטן נאָמען \'hokey.json\' אין דעם קראַנט וועגווייַזער',
  info_option_indexFile: 'דזשענערייט אַן אינדעקס טעקע פֿאַר די איבערזעצונגען. דער טעקע נאָמען מוזן ענדיקן מיט `.html`, `.md` אָדער `.txt`, סייַדן איר צושטעלן אַ מוסטער מיט `-A` / `--index-template`',
  info_option_indexTemplate: 'דאָס קען זיין \'הטמל\', \'מאַרקדאָוון\', \'טעקסט\' אָדער אַ דרך צו דיין אייגענע כאַנדאַלבאַר מוסטער. דעם מוסטער איז געניצט ווען קריייטינג די אינדעקס טעקע. קוק אין די פעליקייַט טעמפּלאַטעס אין די האָקייליזאַטיאָן מקור קאָד פֿאַר ביישפילן',
  info_option_regular: 'איבערזעצן מקור טעקעס ווי רעגולער טעקעס, ניט איבערזעצן דזשאַוואַסקריפּט אַבדזשעקץ מיט שטריקל רעסורסן. די `-M` / `--markdown` פאָן ימפּלייז דעם פאָן.',
  info_arg_sources: 'די מקור(ס) פֿאַר איבערזעצונגען; דאָס קען זיין איינער אָדער מער דזשאַוואַסקריפּט טעקעס אָדער דירעקטעריז',
  info_jsonProcessing_start: 'דזשסאָן פּראַסעסינג קאַנפיגיעריישאַן: {{name}}',
  err_index_singleFileMultipleSources: 'א איין אינדעקס טעקע איז ספּעסיפיעד, אָבער עס זענען קייפל אַרייַנשרייַב טעקעס. ספּעציפיצירן אַ וועגווייַזער אַנשטאָט פון אַ טעקע פֿאַר די אינדעקס',
  err_index_targetDirAndNoTypeOrTemplate: 'א ציל וועגווייַזער איז געווען ספּעסיפיעד פֿאַר די אינדעקס, אָבער קיין אינדעקס מוסטער איז געווען ספּעסיפיעד. ניצן `-A` / `--indexTemplate` צו אויסקלייַבן אַ מוסטער',
  err_index_parentDirDoesNotExist: 'דער פאָטער וועגווייַזער פון די אינדעקס טוט נישט עקסיסטירן: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'דער טעקע נאָמען האט קיין פאַרלענגערונג אַזוי אַ מוסטער טיפּ קענען ניט זיין באשלאסן: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'דער טעקע נאָמען האט אַ פאַרקריפּלט פאַרלענגערונג אַזוי אַ מוסטער טיפּ קענען ניט זיין באשלאסן: {{ file }}',
  err_index_templateLoadingError: 'א טעות איז פארגעקומען אין לאָודינג די מנהג מוסטער {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'א טעות איז פארגעקומען ווען די מנהג מוסטער {{ file }} : {{ e }}',
  info_index_wroteFile: 'הצלחה באשאפן אינדעקס טעקע: {{ indexFile }}',
  label_indexOfTranslations: 'אינדעקס פון איבערזעצונגען',
  label_findYourLanguageCode: 'געפֿינען דיין שפּראַך קאָד',
  err_processing_unknown: '*** אומגעריכט טעות: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'קיין רעזולטאַט טעקע איז דזשענערייטאַד פֿאַר שפּראַך {{ lang }} , אַזוי עס וועט זיין יקסקלודיד פון די אינדעקס',
  err_filter_loading: 'פילטער ניט געפֿונען: {{ filter }}\n דער פילטער איז ניט געפונען אין קיין פון: די קראַנט וועגווייַזער, די ./.hokey-filters וועגווייַזער, די ${HOME}/.hokey-filters וועגווייַזער, אדער די געבויט-אין פילטערס וועגווייַזער'
}