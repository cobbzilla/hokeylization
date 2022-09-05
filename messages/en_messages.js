export default {
    // We do this file in ES6 style and locale_en.js in CommonJS style
    // to illustrate that hokeylization can work with either format
    err_fatal: 'FATAL ERROR: {{error}}',
    err_env_googleProjectId: 'Environment variable GOOGLE_TRANSLATE_PROJECT_ID not defined',
    err_env_googleCredentials: 'Environment variable GOOGLE_APPLICATION_CREDENTIALS not defined',
    err_option_json_notFound: 'JSON file not found: {{ jsonFile }}',
    err_option_json_errorReading: 'An error occurred reading or parsing the JSON file {{ jsonFile }}: {{ e }}',
    err_option_processAs_invalid: 'Invalid option value for -p / --process-as : this option only supports values of \'text\' or \'html\'',
    err_option_languages_required: 'No translation languages specified. Use `-l` / `--languages` and specify a comma-separated list of ISO language codes',
    err_option_outfile_required: 'No output file or directory was specified. Use `-o` / `--outfile` to specify the output file or directory',

    err_noSources: 'no source files provided for translation',
    err_infileNotFound: 'input file or directory not found: {{ jsFile }}',
    err_cannotWriteSource: 'refusing to overwrite input source (was specified in output languages): {{source}}',
    err_invalidOutfile: 'expected outfile to contain \'LANG\' (to be replaced with {{lang}})',

    err_readMessageKeys_invalidFileStart: 'readMessageKeys: expected file {{ file }} to start with \'export default\' or \'module.exports\' but found: {{actualPrefix}}...',
    err_readMessageKeys_invalidJson: 'invalid json in {{file}}',
    err_processFile_writeFile: '*** Error writing to outfile for {{lang}}: {{langOut}}: {{e}}',
    err_processFile_error: '*** Error translating: {{e}}',
    err_processing: '*** Unexpected error: {{e}}',
    err_processing_unknown: '*** Unexpected error: {{e}}\n{{e.stack}}',
    warn_missing_close_notranslate_tag: 'Output from translation was missing a closing tag where one was expected. Label {{ label }}, line number {{ lineNumber }}, line: {{ line }}',

    info_summary: 'Quick translation service using Google Translate\nVersion {{VERSION}}',
    info_description: 'A tool for developers. With hokeylization, localizing your app can be fast, fun and easy!\n\n' +
        '=== Source ===\n' +
        'GitHub: https://github.com/cobbzilla/hokeylization\n' +
        'npm: https://www.npmjs.com/package/hokeylization\n\n' +
        '=== REQUIRED environment variables ===\n' +
        ' * GOOGLE_TRANSLATE_PROJECT_ID: your Google Translate project\n' +
        ' * GOOGLE_APPLICATION_CREDENTIALS: your credentials JSON file\n\n' +
        '=== ISO language codes ===\n' +
        'When specifying ISO codes (either input language or target languages) use these codes:\n' +
        'https://cloud.google.com/translate/docs/languages',
    info_option_jsonFile: 'Run multiple hokey commands specified in a JSON file. If no JSON file is provided, the command looks for a file named \'hokey.json\' in the current directory',
    info_option_indexFile: 'Generate an index file for the translations. The filename must end with `.html`, `.md` or `.txt`, unless you supply a template with `-A` / `--index-template`',
    info_option_indexTemplate: 'This can be \'html\', \'markdown\', \'text\', or a path to your own handlebars template. This template is used when creating the index file. Look at the default templates in the hokeylization source code for examples',
    info_option_inputLanguage: 'ISO code for languages to translate from. Default is {{DEFAULT_LOCALE}}',
    info_option_processAs: 'Type can be text or html. Default is text',
    info_option_match: 'When processing a directory, only consider files that match this regex',
    info_option_excludes: 'When processing a directory, explicitly exclude files that match these regexes, even if they would match the `-m` / `--match` regex',
    info_option_regular: 'Translate source files as regular files, not translating JavaScript objects containing string resources. The `-M` / `--markdown` flag implies this flag.',
    info_option_filter: 'When processing a directory: 1) require this JavaScript file, which must export a function named `filter` which takes a string parameter and returns a string, and 2) apply this filter function to all output files before they are written',
    info_option_dryRun: 'Do not make write any files or make any API calls to Google Translate, but log what would have been done',
    info_option_languages: 'Comma-separated list of ISO codes for languages to translate into',
    info_option_outfile: 'For JavaScript file processing: write JavaScript output to this file\n' +
        'For directory processing: write files to this directory, which will be created if it does not exist',
    info_option_force: 'Always generate fresh translations, overwriting any existing output files',
    info_option_handlebars: 'Ensure {{ handlebars }} content is preserved as-is and NOT translated',
    info_option_markdown: 'Process as a markdown file. Code blocks and backtick-quoted strings will not be translated',
    info_arg_sources: 'The source(s) for translations; this can be one or more JavaScript files or directories',
    info_filter_applied: 'Filter successfully applied before writing: {{langFile}} ',
    err_filter_loading: 'Filter not found: {{ filter }}\nThe filter was not found in any of: the current directory, the ./.hokey-filters directory, the ${HOME}/.hokey-filters directory, nor the built-in filters directory',

    info_dryRun_key: '(dry run) not writing translation for key: {{key}}',
    info_dryRun_file: '(dry run) would have written file: {{langOut}}',

    warn_walk_readDir: 'walk({{dir}}): error reading: {{e}}',
    err_readDirFiles_mkdir: 'readDirFiles({{dir}}): an error occurred trying to list files in directory: {{e}}',
    err_readDirFiles_notDir: 'readDirFiles({{dir}}): this path is not a directory',

    info_processDirectory_skippingExisting: 'processDirectory({{lang}}): skipping existing file: {{langFile.file}}',
    info_processDirectory_fileWritten: 'The file has been written: {{langFile}}',
    info_jsonProcessing_start: 'JSON processing config: {{name}}',
    err_index_singleFileMultipleSources: 'A single index file was specified, but there are multiple input files. Specify a directory instead of a file for the index',
    err_index_targetDirAndNoTypeOrTemplate: 'A target directory was specified for the index, but no index template was specified. Use `-A` / `--indexTemplate` to select a template',
    err_index_parentDirDoesNotExist: 'The parent directory of the index does not exist: {{ parentDir }}',
    err_cannotNoExtCannotDetermineType: 'The filename has no extension so a template type cannot be determined: {{ file }}',
    err_cannotInvalidExtCannotDetermineType: 'The filename has an invalid extension so a template type cannot be determined: {{ file }}',
    err_index_templateLoadingError: 'An error occurred loading the custom template {{ file }}: {{ e }}',
    err_index_templateCompilationError: 'An error occurred compiling the custom template {{ file }}: {{ e }}',
    warn_missingLangFile: 'No output file was generated for language {{ lang }}, so it will be excluded from the index',
    info_index_wroteFile: 'Successfully created index file: {{ indexFile }}',
    label_indexOfTranslations: 'Index of translations',
    label_findYourLanguageCode: 'Find your language code'
}
