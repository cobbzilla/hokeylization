export default {
  err_fatal: 'שגיאה חמורה: {{error}}',
  err_env_googleProjectId: 'משתנה הסביבה GOOGLE_TRANSLATE_PROJECT_ID לא הוגדר',
  err_env_googleCredentials: 'משתנה הסביבה GOOGLE_APPLICATION_CREDENTIALS לא הוגדר',
  err_option_processAs_invalid: 'ערך אפשרות לא חוקי עבור -p / --process-as : אפשרות זו תומכת רק בערכים של \'טקסט\' או \'html\'',
  err_infileNotFound: 'קובץ קלט או ספריה לא נמצאו: {{ jsFile }}',
  err_cannotWriteSource: 'סירוב להחליף את מקור הקלט (צוין בשפות הפלט): {{source}}',
  err_invalidOutfile: 'קובץ outfil צפוי להכיל \'LANG\' (שיוחלף ב {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: צפוי שהקובץ {{ file }} יתחיל ב-\'export default\' או \'module.exports\' אך נמצא: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json לא חוקי ב {{file}}',
  err_processFile_writeFile: '*** שגיאה בכתיבה ל-outfile עבור {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** שגיאה בתרגום: {{e}}',
  err_processing: '*** שגיאה בלתי צפויה: {{e}}',
  warn_missing_close_notranslate_tag: 'בפלט מתרגום חסרה תג סגירה במקום בו היה צפוי. תווית {{ label }} , מספר שורה {{ lineNumber }} , שורה: {{ line }}',
  info_summary: 'שירות תרגום מהיר באמצעות Google Translate\n גרסה {{VERSION}}',
  info_description: '=== מקור ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === משתני סביבה נדרשים ===\n * GOOGLE_TRANSLATE_PROJECT_ID: פרויקט Google Translate שלך\n * GOOGLE_APPLICATION_CREDENTIALS: קובץ JSON האישורים שלך\n\n === קודי שפת ISO ===\n בעת ציון קודי ISO (שפת קלט או שפות יעד) השתמש בקודים הבאים:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'קוד ISO לשפות לתרגום. ברירת המחדל היא {{DEFAULT_LOCALE}}',
  info_option_processAs: 'הסוג יכול להיות טקסט או HTML. ברירת המחדל היא טקסט',
  info_option_match: 'בעת עיבוד ספרייה, קחו בחשבון רק קבצים התואמים את הביטוי הרגולרי הזה',
  info_option_excludes: 'בעת עיבוד ספרייה, אל תכלול במפורש קבצים התואמים את הקבצים הרגולריים האלה, גם אם הם יתאימו ל-`-m` / `--match`',
  info_option_filter: 'בעת עיבוד ספרייה: 1) דרשו את קובץ ה-JS הזה, שחייב לייצא פונקציה בשם `filter` שלוקחת פרמטר מחרוזת ומחזירה מחרוזת, ו-2) החל את פונקציית הסינון על כל קבצי הפלט לפני שהם נכתבים',
  info_option_dryRun: 'אין לכתוב קבצים או לבצע קריאות API ל-Google Translate, אלא לרשום מה היה נעשה',
  info_option_languages: 'רשימה מופרדת בפסיקים של קודי ISO לשפות לתרגום',
  info_option_outfile: 'עבור עיבוד קובץ JS: כתוב פלט JS לקובץ זה\n לעיבוד ספריות: כתוב קבצים לספרייה זו, שייווצרו אם היא לא קיימת',
  info_option_force: 'צור תמיד תרגומים חדשים, תוך החלפת קבצי פלט קיימים',
  info_option_handlebars: 'ודא שתוכן {{ handlebars }} נשמר כפי שהוא ולא מתורגם',
  info_option_markdown: 'ודא ש-[markdown](https://links) נשמר כהלכה, אחרת יופיע רווח בין סוף תיאור הקישור בסוגריים מרובעים לבין הקישור עצמו בסוגריים',
  info_arg_source: 'המקור לתרגומים; יכול להיות קובץ JS או ספריית קבצים לתרגום',
  info_filter_applied: 'מסנן הוחל בהצלחה לפני הכתיבה: {{langFile}}',
  info_dryRun_key: '(ריצה יבשה) לא כותב תרגום למפתח: {{key}}',
  info_dryRun_file: '(ריצה יבשה) היה כותב קובץ: {{langOut}}',
  warn_walk_readDir: 'ללכת ( {{dir}} ): קריאת שגיאה: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): אירעה שגיאה בניסיון לרשום קבצים בספרייה: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): נתיב זה אינו ספרייה',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): דילוג על קובץ קיים: {{langFile.file}}',
  info_processDirectory_fileWritten: 'הקובץ נכתב: {{langFile}}'
}