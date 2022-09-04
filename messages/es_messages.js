export default {
  err_fatal: 'ERROR FATAL: {{error}}',
  err_env_googleProjectId: 'Variable de entorno GOOGLE_TRANSLATE_PROJECT_ID no definida',
  err_env_googleCredentials: 'Variable de entorno GOOGLE_APPLICATION_CREDENTIALS no definida',
  err_option_processAs_invalid: 'Valor de opción no válido para -p / --process-as: esta opción solo admite valores de \'texto\' o \'html\'',
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
  info_option_inputLanguage: 'Código ISO para los idiomas desde los que traducir. El valor predeterminado es {{DEFAULT_LOCALE}}',
  info_option_processAs: 'El tipo puede ser texto o html. El valor predeterminado es texto',
  info_option_match: 'Al procesar un directorio, solo considere los archivos que coincidan con esta expresión regular',
  info_option_excludes: 'Al procesar un directorio, excluya explícitamente los archivos que coincidan con estas expresiones regulares, incluso si coincidirían con la expresión regular `-m` / `--match`',
  info_option_filter: 'Al procesar un directorio: 1) requiere este archivo JS, que debe exportar una función llamada "filtro" que toma un parámetro de cadena y devuelve una cadena, y 2) aplica esta función de filtro a todos los archivos de salida antes de que se escriban',
  info_option_dryRun: 'No escriba ningún archivo ni realice ninguna llamada API a Google Translate, pero registre lo que se habría hecho',
  info_option_languages: 'Lista separada por comas de códigos ISO para los idiomas a traducir',
  info_option_outfile: 'Para el procesamiento de archivos JS: escriba la salida JS en este archivo\n Para el procesamiento de directorios: escriba archivos en este directorio, que se creará si no existe',
  info_option_force: 'Genere siempre traducciones nuevas, sobrescribiendo cualquier archivo de salida existente',
  info_option_handlebars: 'Asegúrese de que el contenido de {{ handlebars }} se conserve tal cual y NO se traduzca',
  info_option_markdown: 'Asegúrese de que [markdown](https://enlaces) se conserven correctamente; de lo contrario, se introduce un espacio entre el final de la descripción del enlace entre corchetes y el enlace mismo entre paréntesis.',
  info_arg_source: 'La fuente de las traducciones; puede ser un archivo JS o un directorio de archivos para traducir',
  info_filter_applied: 'Filtro aplicado con éxito antes de escribir: {{langFile}}',
  info_dryRun_key: '(ejecución en seco) no escribe la traducción de la clave: {{key}}',
  info_dryRun_file: '(ejecución en seco) habría escrito el archivo: {{langOut}}',
  warn_walk_readDir: 'caminar( {{dir}} ): error al leer: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): se produjo un error al intentar enumerar los archivos en el directorio: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): esta ruta no es un directorio',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): omitiendo el archivo existente: {{langFile.file}}',
  info_processDirectory_fileWritten: 'El archivo ha sido escrito: {{langFile}}'
}