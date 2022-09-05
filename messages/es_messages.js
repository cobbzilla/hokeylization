export default {
  err_fatal: 'ERROR FATAL: {{error}}',
  err_env_googleProjectId: 'Variable de entorno GOOGLE_TRANSLATE_PROJECT_ID no definida',
  err_env_googleCredentials: 'Variable de entorno GOOGLE_APPLICATION_CREDENTIALS no definida',
  err_option_json_notFound: 'Archivo JSON no encontrado: {{ jsonFile }}',
  err_option_json_errorReading: 'Se produjo un error al leer o analizar el archivo JSON {{ jsonFile }} : {{ e }}',
  err_option_processAs_invalid: 'Valor de opción no válido para -p / --process-as: esta opción solo admite valores de \'texto\' o \'html\'',
  err_option_languages_required: 'No se especifican idiomas de traducción. Use `-l` / `--languages` y especifique una lista separada por comas de códigos de idioma ISO',
  err_option_outfile_required: 'No se especificó ningún archivo o directorio de salida. Use `-o` / `--outfile` para especificar el archivo o directorio de salida',
  err_noSources: 'no se proporcionan archivos de origen para la traducción',
  err_infileNotFound: 'archivo de entrada o directorio no encontrado: {{ jsFile }}',
  err_cannotWriteSource: 'negarse a sobrescribir la fuente de entrada (se especificó en los idiomas de salida): {{source}}',
  err_invalidOutfile: 'archivo de salida esperado para contener \'LANG\' (para ser reemplazado por {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: el archivo esperado {{ file }} comenzó con \'exportar por defecto\' o \'module.exports\' pero encontró: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json inválido en {{file}}',
  err_processFile_writeFile: '*** Error al escribir en outfile para {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Error al traducir: {{e}}',
  err_processing: '*** Error inesperado: {{e}}',
  warn_missing_close_notranslate_tag: 'A la salida de la traducción le faltaba una etiqueta de cierre donde se esperaba una. Etiqueta {{ label }} , número de línea {{ lineNumber }} , línea: {{ line }}',
  info_summary: 'Servicio de traducción rápida usando Google Translate\n Versión {{VERSION}}',
  info_description: 'Una herramienta para desarrolladores. ¡Con hokeylization, localizar su aplicación puede ser rápido, divertido y fácil!\n\n === Fuente ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Variables de entorno REQUERIDAS ===\n * GOOGLE_TRANSLATE_PROJECT_ID: su proyecto de Traductor de Google\n * GOOGLE_APPLICATION_CREDENTIALS: su archivo JSON de credenciales\n\n === Códigos de idioma ISO ===\n Al especificar códigos ISO (ya sea el idioma de entrada o los idiomas de destino), utilice estos códigos:\n https://cloud.google.com/translate/docs/languages',
  info_option_jsonFile: 'Ejecute varios comandos hokey especificados en un archivo JSON. Si no se proporciona ningún archivo JSON, el comando busca un archivo llamado \'hokey.json\' en el directorio actual',
  info_option_inputLanguage: 'Código ISO para los idiomas desde los que traducir. El valor predeterminado es {{DEFAULT_LOCALE}}',
  info_option_processAs: 'El tipo puede ser texto o html. El valor predeterminado es texto',
  info_option_match: 'Al procesar un directorio, solo considere los archivos que coincidan con esta expresión regular',
  info_option_excludes: 'Al procesar un directorio, excluya explícitamente los archivos que coincidan con estas expresiones regulares, incluso si coincidirían con la expresión regular `-m` / `--match`',
  info_option_regular: 'Traduce archivos de origen como archivos normales, sin traducir objetos de JavaScript que contengan recursos de cadena. El indicador `-M` / `--markdown` implica este indicador.',
  info_option_filter: 'Al procesar un directorio: 1) requiere este archivo JavaScript, que debe exportar una función llamada "filtro" que toma un parámetro de cadena y devuelve una cadena, y 2) aplica esta función de filtro a todos los archivos de salida antes de que se escriban',
  info_option_dryRun: 'No escriba ningún archivo ni realice ninguna llamada API a Google Translate, pero registre lo que se habría hecho',
  info_option_languages: 'Lista separada por comas de códigos ISO para los idiomas a traducir',
  info_option_outfile: 'Para el procesamiento de archivos de JavaScript: escriba la salida de JavaScript en este archivo\n Para el procesamiento de directorios: escriba archivos en este directorio, que se creará si no existe',
  info_option_force: 'Genere siempre traducciones nuevas, sobrescribiendo cualquier archivo de salida existente',
  info_option_handlebars: 'Asegúrese de que el contenido de {{ handlebars }} se conserve tal cual y NO se traduzca',
  info_option_markdown: 'Procesar como un archivo de rebajas. Los bloques de código y las cadenas entre comillas graves no se traducirán',
  info_arg_sources: 'La(s) fuente(s) de las traducciones; esto puede ser uno o más archivos o directorios de JavaScript',
  info_filter_applied: 'Filtro aplicado con éxito antes de escribir: {{langFile}}',
  info_dryRun_key: '(ejecución en seco) no escribe la traducción de la clave: {{key}}',
  info_dryRun_file: '(ejecución en seco) habría escrito el archivo: {{langOut}}',
  warn_walk_readDir: 'caminar( {{dir}} ): error al leer: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): se produjo un error al intentar enumerar los archivos en el directorio: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): esta ruta no es un directorio',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): omitiendo el archivo existente: {{langFile.file}}',
  info_processDirectory_fileWritten: 'El archivo ha sido escrito: {{langFile}}',
  info_jsonProcessing_start: 'Configuración de procesamiento JSON: {{name}}'
}