export default {
  err_fatal: 'ಮಾರಣಾಂತಿಕ ದೋಷ: {{error}}',
  err_env_googleProjectId: 'ಎನ್ವಿರಾನ್ಮೆಂಟ್ ವೇರಿಯೇಬಲ್ GOOGLE_TRANSLATE_PROJECT_ID ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿಲ್ಲ',
  err_env_googleCredentials: 'ಪರಿಸರ ವೇರಿಯೇಬಲ್ GOOGLE_APPLICATION_CREDENTIALS ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿಲ್ಲ',
  err_option_processAs_invalid: '-p / --process-as ಗಾಗಿ ಅಮಾನ್ಯ ಆಯ್ಕೆಯ ಮೌಲ್ಯ: ಈ ಆಯ್ಕೆಯು \'ಪಠ್ಯ\' ಅಥವಾ \'html\' ಮೌಲ್ಯಗಳನ್ನು ಮಾತ್ರ ಬೆಂಬಲಿಸುತ್ತದೆ',
  err_infileNotFound: 'ಇನ್ಪುಟ್ ಫೈಲ್ ಅಥವಾ ಡೈರೆಕ್ಟರಿ ಕಂಡುಬಂದಿಲ್ಲ: {{ jsFile }}',
  err_cannotWriteSource: 'ಇನ್‌ಪುಟ್ ಮೂಲವನ್ನು ಓವರ್‌ರೈಟ್ ಮಾಡಲು ನಿರಾಕರಿಸುವುದು (ಔಟ್‌ಪುಟ್ ಭಾಷೆಗಳಲ್ಲಿ ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿದೆ): {{source}}',
  err_invalidOutfile: 'ನಿರೀಕ್ಷಿತ ಔಟ್‌ಫೈಲ್ \'LANG\' ಅನ್ನು ಹೊಂದಿರುತ್ತದೆ ( {{lang}} ನೊಂದಿಗೆ ಬದಲಾಯಿಸಲಾಗುವುದು)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: ನಿರೀಕ್ಷಿತ ಫೈಲ್ {{ file }} \'ರಫ್ತು ಡೀಫಾಲ್ಟ್\' ಅಥವಾ \'module.exports\' ನೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಗಲಿದೆ ಆದರೆ ಕಂಡುಬಂದಿದೆ: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} ನಲ್ಲಿ ಅಮಾನ್ಯವಾದ json',
  err_processFile_writeFile: '*** {{lang}} ಗೆ ಔಟ್‌ಫೈಲ್ ಮಾಡಲು ಬರೆಯುವಲ್ಲಿ ದೋಷ: {{langOut}} : {{e}}',
  err_processFile_error: '*** ಅನುವಾದಿಸುವಲ್ಲಿ ದೋಷ: {{e}}',
  err_processing: '*** ಅನಿರೀಕ್ಷಿತ ದೋಷ: {{e}}',
  info_summary: 'Google ಅನುವಾದವನ್ನು ಬಳಸಿಕೊಂಡು ತ್ವರಿತ ಅನುವಾದ ಸೇವೆ\n ಆವೃತ್ತಿ {{VERSION}}',
  info_description: '=== ಮೂಲ ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === ಅಗತ್ಯವಿರುವ ಪರಿಸರ ವೇರಿಯಬಲ್‌ಗಳು ===\n * GOOGLE_TRANSLATE_PROJECT_ID: ನಿಮ್ಮ Google ಅನುವಾದ ಯೋಜನೆ\n * GOOGLE_APPLICATION_CREDENTIALS: ನಿಮ್ಮ ರುಜುವಾತುಗಳು JSON ಫೈಲ್\n\n === ISO ಭಾಷಾ ಸಂಕೇತಗಳು ===\n ISO ಕೋಡ್‌ಗಳನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸುವಾಗ (ಇನ್‌ಪುಟ್ ಭಾಷೆ ಅಥವಾ ಗುರಿ ಭಾಷೆಗಳು) ಈ ಕೋಡ್‌ಗಳನ್ನು ಬಳಸಿ:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'ಭಾಷಾಂತರಿಸಲು ಭಾಷೆಗಳಿಗೆ ISO ಕೋಡ್. ಡೀಫಾಲ್ಟ್ {{DEFAULT_LOCALE}}',
  info_option_processAs: 'ಟೈಪ್ ಪಠ್ಯ ಅಥವಾ html ಆಗಿರಬಹುದು. ಡೀಫಾಲ್ಟ್ ಪಠ್ಯವಾಗಿದೆ',
  info_option_match: 'ಡೈರೆಕ್ಟರಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಾಗ, ಈ ರಿಜೆಕ್ಸ್‌ಗೆ ಹೊಂದಿಕೆಯಾಗುವ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ ಪರಿಗಣಿಸಿ',
  info_option_excludes: 'ಡೈರೆಕ್ಟರಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಾಗ, ಈ ರಿಜೆಕ್ಸ್‌ಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುವ ಫೈಲ್‌ಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಹೊರಗಿಡಿ, ಅವುಗಳು `-m` / `--match` regex ಗೆ ಹೊಂದಿಕೆಯಾಗಿದ್ದರೂ ಸಹ',
  info_option_filter: 'ಡೈರೆಕ್ಟರಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಾಗ: 1) ಈ JS ಫೈಲ್ ಅಗತ್ಯವಿರುತ್ತದೆ, ಇದು ಸ್ಟ್ರಿಂಗ್ ಪ್ಯಾರಾಮೀಟರ್ ಅನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಮತ್ತು ಸ್ಟ್ರಿಂಗ್ ಅನ್ನು ಹಿಂತಿರುಗಿಸುವ `ಫಿಲ್ಟರ್\' ಹೆಸರಿನ ಕಾರ್ಯವನ್ನು ರಫ್ತು ಮಾಡಬೇಕು ಮತ್ತು 2) ಎಲ್ಲಾ ಔಟ್‌ಪುಟ್ ಫೈಲ್‌ಗಳಿಗೆ ಬರೆಯುವ ಮೊದಲು ಈ ಫಿಲ್ಟರ್ ಕಾರ್ಯವನ್ನು ಅನ್ವಯಿಸಿ',
  info_option_dryRun: 'ಯಾವುದೇ ಫೈಲ್‌ಗಳನ್ನು ಬರೆಯಬೇಡಿ ಅಥವಾ Google ಅನುವಾದಕ್ಕೆ ಯಾವುದೇ API ಕರೆಗಳನ್ನು ಮಾಡಬೇಡಿ, ಆದರೆ ಏನು ಮಾಡಬಹುದೆಂದು ಲಾಗ್ ಮಾಡಿ',
  info_option_languages: 'ಭಾಷಾಂತರಿಸಲು ಭಾಷೆಗಳಿಗಾಗಿ ISO ಕೋಡ್‌ಗಳ ಅಲ್ಪವಿರಾಮದಿಂದ ಬೇರ್ಪಡಿಸಿದ ಪಟ್ಟಿ',
  info_option_outfile: 'JS ಫೈಲ್ ಪ್ರಕ್ರಿಯೆಗಾಗಿ: ಈ ಫೈಲ್‌ಗೆ JS ಔಟ್‌ಪುಟ್ ಅನ್ನು ಬರೆಯಿರಿ\n ಡೈರೆಕ್ಟರಿ ಪ್ರಕ್ರಿಯೆಗಾಗಿ: ಈ ಡೈರೆಕ್ಟರಿಗೆ ಫೈಲ್ಗಳನ್ನು ಬರೆಯಿರಿ, ಅದು ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದಿದ್ದರೆ ಅದನ್ನು ರಚಿಸಲಾಗುತ್ತದೆ',
  info_option_force: 'ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಯಾವುದೇ ಔಟ್‌ಪುಟ್ ಫೈಲ್‌ಗಳನ್ನು ಓವರ್‌ರೈಟ್ ಮಾಡುವ ಮೂಲಕ ಯಾವಾಗಲೂ ತಾಜಾ ಅನುವಾದಗಳನ್ನು ರಚಿಸಿ',
  info_option_handlebars: '{{ handlebars }} ವಿಷಯವನ್ನು ಹಾಗೆಯೇ ಸಂರಕ್ಷಿಸಲಾಗಿದೆ ಮತ್ತು ಅನುವಾದಿಸಲಾಗಿಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ',
  info_option_markdown: '[ಮಾರ್ಕ್‌ಡೌನ್](https://links) ಅನ್ನು ಸರಿಯಾಗಿ ಸಂರಕ್ಷಿಸಲಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ, ಇಲ್ಲದಿದ್ದರೆ ಚೌಕದ ಬ್ರಾಕೆಟ್‌ಗಳಲ್ಲಿ ಲಿಂಕ್ ವಿವರಣೆಯ ಅಂತ್ಯ ಮತ್ತು ಆವರಣದಲ್ಲಿರುವ ಲಿಂಕ್ ನಡುವೆ ಜಾಗವನ್ನು ಪರಿಚಯಿಸಲಾಗುತ್ತದೆ',
  info_arg_source: 'ಅನುವಾದಗಳಿಗೆ ಮೂಲ; ಅನುವಾದಿಸಲು JS ಫೈಲ್ ಅಥವಾ ಫೈಲ್‌ಗಳ ಡೈರೆಕ್ಟರಿ ಆಗಿರಬಹುದು',
  info_filter_applied: 'ಬರೆಯುವ ಮೊದಲು ಫಿಲ್ಟರ್ ಅನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅನ್ವಯಿಸಲಾಗಿದೆ: {{langFile}}',
  info_dryRun_key: '(ಡ್ರೈ ರನ್) ಕೀಲಿಗಾಗಿ ಅನುವಾದವನ್ನು ಬರೆಯುತ್ತಿಲ್ಲ: {{key}}',
  info_dryRun_file: '(ಡ್ರೈ ರನ್) ಬರೆದ ಫೈಲ್: {{langOut}}',
  warn_walk_readDir: 'ವಾಕ್ ( {{dir}} ): ದೋಷ ಓದುವಿಕೆ: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಫೈಲ್‌ಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಲು ಪ್ರಯತ್ನಿಸುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): ಈ ಮಾರ್ಗವು ಡೈರೆಕ್ಟರಿಯಲ್ಲ',
  info_processDirectory_skippingExisting: 'processDirectory ( {{lang}} ): ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಫೈಲ್ ಅನ್ನು ಬಿಟ್ಟುಬಿಡುವುದು: {{langFile.file}}',
  info_processDirectory_fileWritten: 'ಫೈಲ್ ಅನ್ನು ಬರೆಯಲಾಗಿದೆ: {{langFile}}'
}