export default {
    // We do this file in ES6 style and locale_en.js in CommonJS style
    // to illustrate that hokeylization can work with either format
    err_fatal: 'FATAL ERROR: {{error}}',
    err_env_googleProjectId: 'Environment variable GOOGLE_TRANSLATE_PROJECT_ID not defined',
    err_env_googleCredentials: 'Environment variable GOOGLE_APPLICATION_CREDENTIALS not defined',
    err_option_processAs_invalid: 'Invalid option value for -p / --process-as : this option only supports values of \'text\' or \'html\'',

    err_infileNotFound: 'input file or directory not found: {{ jsFile }}',
    err_cannotWriteSource: 'refusing to overwrite input source (was specified in output languages): {{source}}',
    err_invalidOutfile: 'expected outfile to contain \'LANG\' (to be replaced with {{lang}})',

    err_readMessageKeys_invalidFileStart: 'readMessageKeys: expected file {{ file }} to start with \'export default\' or \'module.exports\' but found: {{actualPrefix}}...',
    err_readMessageKeys_invalidJson: 'invalid json in {{file}}',
    err_processFile_writeFile: '*** Error writing to outfile for {{lang}}: {{langOut}}: {{e}}',
    err_processFile_error: '*** Error translating: {{e}}',
    err_processing: '*** Unexpected error: {{e}}',

    info_summary: 'Quick translation service using Google Translate\nVersion {{VERSION}}',
    info_description: '=== Source ===\n' +
        'GitHub: https://github.com/cobbzilla/hokeylization\n' +
        'npm: https://www.npmjs.com/package/hokeylization\n\n' +
        '=== REQUIRED environment variables ===\n' +
        ' * GOOGLE_TRANSLATE_PROJECT_ID: your Google Translate project\n' +
        ' * GOOGLE_APPLICATION_CREDENTIALS: your credentials JSON file\n\n' +
        '=== ISO language codes ===\n' +
        'When specifying ISO codes (either input language or target languages) use these codes:\n' +
        'https://cloud.google.com/translate/docs/languages',
    info_option_inputLanguage: `ISO code for languages to translate from. Default is {{DEFAULT_LOCALE}}`,
    info_option_processAs: 'Type can be text or html. Default is text',
    info_option_match: 'When processing a directory, only consider files that match this regex',
    info_option_excludes: 'When processing a directory, explicitly exclude files that match these regexes, even if they would match the `-m` / `--match` regex',
    info_option_filter: 'When processing a directory: 1) require this JS file, which must export a function named `filter` which takes a string parameter and returns a string, and 2) apply this filter function to all output files before they are written',
    info_option_dryRun: 'Do not make write any files or make any API calls to Google Translate, but log what would have been done',
    info_option_languages: 'Comma-separated list of ISO codes for languages to translate into',
    info_option_outfile: 'For JS file processing: write JS output to this file\n' +
        'For directory processing: write files to this directory, which will be created if it does not exist',
    info_option_force: 'Always generate fresh translations, overwriting any existing output files',
    info_option_handlebars: 'Ensure {{ handlebars }} content is preserved as-is and NOT translated',
    info_option_markdown: 'Ensure [markdown](https://links) are preserved correctly, otherwise a space is introduced between the end of the link description in square brackets and the link itself in parentheses',
    info_arg_source: 'The source for translations; can be a JS file or a directory of files to translate',
    info_filter_applied: 'Filter successfully applied before writing: {{langFile}} ',

    info_dryRun_key: '(dry run) not writing translation for key: {{key}}',
    info_dryRun_file: '(dry run) would have written file: {{langOut}}',

    warn_walk_readDir: 'walk({{dir}}): error reading: {{e}}',
    err_readDirFiles_mkdir: 'readDirFiles({{dir}}): an error occurred trying to list files in directory: {{e}}',
    err_readDirFiles_notDir: 'readDirFiles({{dir}}): this path is not a directory',

    info_processDirectory_skippingExisting: 'processDirectory({{lang}}): skipping existing file: {{langFile.file}}',
    info_processDirectory_fileWritten: 'The file has been written: {{langFile}}'
}
