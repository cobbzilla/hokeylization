export default {
  err_fatal: '致命错误： {{error}}',
  err_env_googleProjectId: '未定义环境变量 GOOGLE_TRANSLATE_PROJECT_ID',
  err_env_googleCredentials: '环境变量 GOOGLE_APPLICATION_CREDENTIALS 未定义',
  err_option_processAs_invalid: '-p / --process-as 的选项值无效：此选项仅支持 \'text\' 或 \'html\' 的值',
  err_infileNotFound: '找不到输入文件或目录： {{ jsFile }}',
  err_cannotWriteSource: '拒绝覆盖输入源（在输出语言中指定）： {{source}}',
  err_invalidOutfile: '预计输出文件将包含“LANG”（将替换为{{lang}} ）',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys：预期文件{{ file }}以“export default”或“module.exports”开头，但发现： {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}}中的 json 无效',
  err_processFile_writeFile: '*** 写入 outfile 时出错{{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** 翻译错误： {{e}}',
  err_processing: '*** 意外错误： {{e}}',
  warn_missing_close_notranslate_tag: '翻译的输出缺少一个预期的结束标记。标签{{ label }} , 行号{{ lineNumber }} , 行: {{ line }}',
  info_summary: '使用谷歌翻译的快速翻译服务\n版本{{VERSION}}',
  info_description: '开发人员的工具。通过 hokeylization，本地化您的应用程序可以变得快速、有趣和简单！\n\n === 来源 ===\n GitHub：https://github.com/cobbzilla/hokeylization\n npm：https://www.npmjs.com/package/hokeylization\n\n === 必需的环境变量 ===\n * GOOGLE_TRANSLATE_PROJECT_ID：您的 Google 翻译项目\n* GOOGLE_APPLICATION_CREDENTIALS：您的凭证 JSON 文件\n\n=== ISO 语言代码 ===\n指定 ISO 代码（输入语言或目标语言）时，请使用以下代码：\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: '要翻译的语言的 ISO 代码。默认为{{DEFAULT_LOCALE}}',
  info_option_processAs: '类型可以是文本或 html。默认为文本',
  info_option_match: '处理目录时，仅考虑与此正则表达式匹配的文件',
  info_option_excludes: '处理目录时，显式排除匹配这些正则表达式的文件，即使它们匹配 `-m` / `--match` 正则表达式',
  info_option_filter: '处理目录时：1）需要这个 JS 文件，它必须导出一个名为 `filter` 的函数，该函数接受一个字符串参数并返回一个字符串，以及 2）在写入之前将此过滤器函数应用于所有输出文件',
  info_option_dryRun: '不要写任何文件或对谷歌翻译进行任何 API 调用，但要记录会做的事情',
  info_option_languages: '要翻译成的语言的 ISO 代码的逗号分隔列表',
  info_option_outfile: '对于 JS 文件处理：将 JS 输出写入此文件\n对于目录处理：将文件写入该目录，不存在则创建',
  info_option_force: '始终生成新的翻译，覆盖任何现有的输出文件',
  info_option_handlebars: '确保{{ handlebars }}内容按原样保留而不是翻译',
  info_option_markdown: '确保正确保留 [markdown](https://links)，否则在方括号中的链接描述末尾和括号中的链接本身之间会引入一个空格',
  info_arg_source: '翻译来源；可以是 JS 文件，也可以是要翻译的文件目录',
  info_filter_applied: '写入前已成功应用过滤器： {{langFile}}',
  info_dryRun_key: '（试运行）没有为关键写翻译： {{key}}',
  info_dryRun_file: '（试运行）会写文件： {{langOut}}',
  warn_walk_readDir: 'walk( {{dir}} ): 错误读数: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): 试图列出目录中的文件时出错: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} )：此路径不是目录',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): 跳过现有文件: {{langFile.file}}',
  info_processDirectory_fileWritten: '文件已写入： {{langFile}}',
  err_option_json_notFound: '未找到 JSON 文件： {{ jsonFile }}',
  err_option_json_errorReading: '读取或解析 JSON 文件时出错{{ jsonFile }} : {{ e }}',
  err_option_languages_required: '未指定翻译语言。使用 `-l` / `--languages` 并指定以逗号分隔的 ISO 语言代码列表',
  err_option_outfile_required: '未指定输出文件或目录。使用 `-o` / `--outfile` 指定输出文件或目录',
  err_noSources: '没有提供翻译的源文件',
  info_option_jsonFile: '运行 JSON 文件中指定的多个 hokey 命令。如果没有提供 JSON 文件，该命令会在当前目录中查找名为“hokey.json”的文件',
  info_option_indexFile: '为翻译生成索引文件。文件名必须以 `.html`、`.md` 或 `.txt` 结尾，除非您提供带有 `-A` / `--index-template` 的模板',
  info_option_indexTemplate: '这可以是“html”、“markdown”、“text”或您自己的车把模板的路径。创建索引文件时使用此模板。查看 hokeyization 源代码中的默认模板以获取示例',
  info_option_regular: '将源文件翻译为常规文件，而不是翻译包含字符串资源的 JavaScript 对象。 `-M` / `--markdown` 标志暗示了这个标志。',
  info_arg_sources: '翻译的来源；这可以是一个或多个 JavaScript 文件或目录',
  info_jsonProcessing_start: 'JSON 处理配置： {{name}}',
  err_index_singleFileMultipleSources: '指定了一个索引文件，但有多个输入文件。为索引指定目录而不是文件',
  err_index_targetDirAndNoTypeOrTemplate: '为索引指定了目标目录，但未指定索引模板。使用 `-A` / `--indexTemplate` 选择模板',
  err_index_parentDirDoesNotExist: '索引的父目录不存在： {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: '文件名没有扩展名，因此无法确定模板类型： {{ file }}',
  err_cannotInvalidExtCannotDetermineType: '文件名的扩展名无效，因此无法确定模板类型： {{ file }}',
  err_index_templateLoadingError: '加载自定义模板时出错{{ file }} : {{ e }}',
  err_index_templateCompilationError: '编译自定义模板时发生错误{{ file }} : {{ e }}',
  info_index_wroteFile: '成功创建索引文件： {{ indexFile }}',
  label_indexOfTranslations: '翻译索引',
  label_findYourLanguageCode: '查找您的语言代码',
  err_processing_unknown: '*** 意外错误： {{e}}\n {{e.stack}}',
  warn_missingLangFile: '没有为语言{{ lang }}生成输出文件，因此它将被排除在索引之外',
  err_filter_loading: '未找到过滤器： {{ filter }}\n在以下任何一个目录中都找不到过滤器：当前目录、./.hokey-filters 目录、${HOME}/.hokey-filters 目录或内置过滤器目录'
}