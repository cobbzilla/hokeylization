Hokeylización
 =============
 ¿Por qué no puedo ejecutar toda mi aplicación o sitio a través de Google Translate y obtener una traducción básica en otro idioma?

 ***¡Ahora usted puede!***

 El nombre `hokeylization` es un acrónimo que significa 'localización hokey'

 Es un poco cursi porque es muy simple: envía cadenas a Google Translate

 Y es simple, pero también muy poderoso. Tiene soporte especial para documentos HTML,
 [HandlebarsJS](https://handlebarsjs.com/) plantillas,
 y [Markdown](https://daringfireball.net/projects/markdown) archivos.

 Puedes traducir:
 * un objeto JavaScript que contiene mensajes
 * cualquier número de archivos o directorios, siempre atravesando directorios recursivamente

 # Leer esto en otro idioma
 Este documento README.md ha sido traducido, utilizando la propia herramienta de hokeylización, a
 **[¡todos los idiomas admitidos por Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Estoy seguro de que no es perfecto, ¡pero espero que sea mejor que nada!

 [🇸🇦 Árabe](../ar/README.md)
 [🇧🇩 bengalí](../bn/README.md)
 [🇩🇪 Alemán](../de/README.md)
 [🇺🇸 Inglés](../en/README.md)
 [🇪🇸 Español](../es/README.md)
 [🇫🇷 Francés](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 Indonesio](../id/README.md)
 [🇮🇹 Italiano](../it/README.md)
 [🇯🇵 Japonés](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polaco](../pl/README.md)
 [🇧🇷 Portugués](../pt/README.md)
 [🇷🇺 Ruso](../ru/README.md)
 [🇰🇪 Suajili](../sw/README.md)
 [🇵🇭 Tagalo](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 Chino](../zh/README.md)


 **[📚 ... Todos los idiomas ...](../README.md)**
 ----

 ### ¿Hay algún problema con esta traducción del LÉAME?
 Esta traducción particular del [README] original (https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 puede tener fallas -- * ¡las correcciones son muy bienvenidas! * Envíe una [solicitud de extracción en GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 o si no se siente cómodo haciendo eso, [abra un problema](https://github.com/cobbzilla/hokeylization/issues)

 Cuando cree un nuevo problema de GitHub sobre una traducción, haga lo siguiente:
 * incluir la URL de la página (copiar/pegar desde la barra de direcciones del navegador)
 * incluir el texto exacto que está mal (copiar/pegar desde el navegador)
 * por favor describa lo que está mal -- ¿la traducción es incorrecta? ¿El formato está roto de alguna manera?
 * ofrezca amablemente una sugerencia de una mejor traducción, o cómo el texto debe formatearse correctamente
 * **¡Gracias!**

 # Contenidos
 * [Fuente](#Fuente)
 * [Apoyo y Financiamiento](#Apoyo-y-Financiamiento)
 * [Instalación](#Instalación)
 * [Configuración](#Configuración)
 * [Traducir un archivo de recursos de cadena de JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Traducir un directorio de archivos de texto](#Traducir-un-directorio-de-archivos-de-texto)
 * [Otras opciones](#Otras-opciones)
 * [Comandos por lotes JSON](#JSON-batch-commands)

 ## Fuente
 * [hokeylización en GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylización en npm](https://www.npmjs.com/package/hokeylization)

 ## Apoyo y Financiamiento
 Estoy tratando de ser un desarrollador profesional de software de código abierto. he estado trabajando en
 la industria del software durante muchos años, comencé empresas exitosas y las vendí a empresas públicas.
 Recientemente perdí mi trabajo, y realmente no tengo ningún otro trabajo en fila

 Así que voy a intentar escribir un software útil y ver si funciona.

 Si le gusta usar este software, me encantaría recibir incluso el
 la [contribución mensual más pequeña a través de Patreon](https://www.patreon.com/cobbzilla)

 *¡Gracias!*

 ## Instalación
 Para usar la herramienta de línea de comandos, instálala usando `npm` o `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Para usar como biblioteca, instale la versión `lite` , que es mucho más pequeña:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Luego mira la ayuda para el comando `hokey` :

    hokey --help
    hokey -h

 ¿Quiere ver la salida en su idioma o en otro idioma?

 `hokey` intenta detectar el idioma automáticamente desde las variables de entorno de su shell

 Puede forzar un idioma configurando la variable de entorno `LC_ALL` :

    LC_ALL=it hokey --help

 Tenga en cuenta que si ha instalado `hokeylization-lite` , la ayuda del comando solo está disponible en inglés

 ## Configuración
 Configure la variable de entorno `GOOGLE_TRANSLATE_PROJECT_ID` para identificar su proyecto de Google Translate

 Establezca la variable de entorno `GOOGLE_APPLICATION_CREDENTIALS` en las credenciales JSON que descargó
 después de descubrir cómo funciona la autenticación en la nube de Google (puede ser divertido)

 Si está ejecutando desde el código fuente, también puede ponerlos en un archivo `.env` en la fuente
 directorio en el que se cargarán en tiempo de ejecución a través de [dotenv](https://www.npmjs.com/package/dotenv)

 ## Traducir un archivo de recursos de cadena de JavaScript
 Su tabla de cadenas **debe** estar en un archivo JavaScript en una de estas dos formas:

 Exportación ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Exportación de CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Si este archivo se llamó `myfile.en.js` , puede traducirlo al español y al alemán con:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 El `LANG` de arriba es especial: ¡es una palabra reservada en esta herramienta!

 El `LANG` se reemplaza con el código de idioma para los archivos de salida

 Por lo tanto, el comando anterior crea los archivos:

    myfile.es.js
    myfile.de.js

 La `-l` / `--languages` es una lista separada por comas de códigos de idioma ISO
 [compatible con Google Translate](https://cloud.google.com/translate/docs/languages)

 Si el archivo de salida ya existe, se examinará para determinar qué claves ya existen.
 Las claves existentes no se traducirán. Se generarán y agregarán traducciones para las claves faltantes
 hasta el final del objeto JS. El archivo completo siempre se reescribe.

 Para forzar la retraducción de todas las claves, use la `-f` / `--force`

 ## Traducir un directorio de archivos de texto
 También puede traducir un directorio de archivos. hokeylization visitará recursivamente cada
 archivo en el directorio y ejecute su contenido a través de Google Translate, y guarde la salida
 a un archivo con el mismo nombre en un árbol de directorios separado

 Cuando el objetivo de su traducción es un directorio, este modo está habilitado

 La `-o` / `--outfile` especifica el directorio de salida

 ** GRAN ADVERTENCIA **: Al traducir directorios, ** NO ** especifique un directorio de salida
 ¡eso está dentro de su directorio de entrada! Si haces esto, podrás:
 * inducir recursividad infinita
 * aumenta tu factura de Google
 * llena tu disco
 * divertirse menos

 Aquí hay un ejemplo de lo que *no se debe hacer*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Cuando esto se ejecuta, los archivos traducidos se escriben en `templates/es` y, por lo tanto, se vuelven nuevos.
 archivos de origen para traducir, ya que están en `templates/` ; este proceso continúa
 para siempre, no lo hagas!

 #### Uso Correcto
 Bien, supongamos que tiene algunas plantillas de correo electrónico en un directorio:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Para traducir todo esto a español y alemán, ejecute:

    hokey -l es,de -o templates/email/LANG templates/email/en

 En lo anterior, `LANG` es una palabra reservada y se reemplazará con el código de idioma ISO

 Qué sucede cuando se ejecuta lo anterior:
 * Se crearán los directorios `templates/email/es` y `templates/email/de` (si no existen)
 * Todos los archivos en `templates/email/en` serán traducidos al español y al alemán
 * Los archivos de salida existentes no se regenerarán a menos que use `-f` / `--force`
 * Terminarás con una estructura de directorios y archivos idénticos dentro de `es` y `de` como los que tienes bajo `en`

 ## Otras opciones

 ### Ejecución en seco
 Pase `-n` / `--dry-run` para mostrar lo que se haría, pero en realidad no haga ninguna llamada a la API ni escriba ningún archivo

 ### Fuerza
 Pase `-f` / `--force` para regenerar siempre las traducciones, incluso si ya existen

 ### Juego
 Pase `-m` / `--match` para limitar los archivos procesados cuando se ejecuta en modo directorio

 Es posible que no siempre desee traducir *todos* los archivos de su directorio de origen a su directorio de destino

 El valor de la `-m` / `--match` es una expresión regular (¡cuidado con las reglas de comillas de shell!) que especifica
 qué archivos se deben traducir

 En caso de duda, puede combinar esta opción con `-n` / `--dry-run` para ver qué archivos se traducirían

 ### Excluye
 A veces, su `-m` coincide con demasiados archivos. Use la `-e` / `--excludes` --excludes` para excluir explícitamente
 archivos que de otro modo habrían coincidido

 Puede enumerar varias expresiones regulares, separadas por espacios

 Un uso común sería: `--excludes node_modules dist \.git build tmp`

 ### Manillares
 Las cadenas a traducir pueden contener plantillas `{{ handlebars }}` , ya sea con dos o tres llaves

 Probablemente *NO* quiera que se traduzcan las cosas dentro de esas plantillas

 Pase el `-H` / `--handlebars` , y cualquier cosa dentro de `{{ ... }}` no se traducirá

 ### Rebaja
 Markdown no es ni texto ni html, por lo que Google Translate tiene algunas dificultades con él

 El `-M` / `--markdown` permite un manejo especial para los archivos de rebajas

 Con los archivos Markdown, si no usa el `-M` , probablemente encontrará estos problemas:
 * Enlaces rotos. En la traducción, aparece un carácter de espacio después de que finaliza la descripción de un enlace de descuento (con `]` ), pero
 antes de que comience su enlace de destino (con `(` ). Esto hace que el descuento se muestre incorrectamente y el enlace
 se rompe al ver el documento.
 * Los bloques de código se traducen. El traductor de Google no sabe qué descuento considera el código y qué no.
 * Espaciado incorrecto para bloques de código sangrados. El espaciado es difícil de preservar en la traducción
 * Las cosas dentro de `backticks` se traducirán, cuando casi siempre quieres que sean valores literales

 Cuando el `-M` / `--markdown` está habilitado:
 * El patrón `](` se condensará en `](` , por lo que se arreglarán los enlaces de rebajas rotos
 * Se colocará un envoltorio "no traducir" alrededor de los bloques de código con sangría, conservando la sangría adecuada y asegurando que no se traduzcan
 * Se colocará un envoltorio "no traducir" alrededor del texto dentro de las `backticks` para garantizar que no se traduzcan

 ### Proceso-como
 Normalmente todo se procesa como texto sin formato

 Si su contenido es HTML, se alterará a menos que pase la `-p html` / `--process-as html`

 ### Filtro
 Para los aventureros: al procesar archivos en un directorio, puede pasar la `-F` / `--filter`
 para filtrar la salida antes de que se escriba en el sistema de archivos

 El valor de esta opción debe ser una ruta a un archivo JS que exporte una función llamada `filter`

 La función `filter` debe ser `async` ' porque se llamará a `await`

 Antes de que los archivos se escriban en el disco, todo el contenido del archivo se pasará a la función `filter` como una cadena

 El valor de retorno de la función `filter` es lo que realmente se escribirá en el almacenamiento

 Así, tienes control total sobre lo que finalmente se escribirá

 El script `filter` se buscará en las siguientes ubicaciones (con `.js` se agregará al filtro
 nombre, a menos que ya termine en `.js` )
 * El directorio actual
 * Un directorio llamado `.hokey-filters` dentro del directorio actual
 * Un directorio llamado `${HOME}/.hokey-filters` , donde `${HOME}` es el directorio de inicio del usuario actual
 * El [directorio de filtros] incorporado (https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Parámetros de filtro
 La cadena `filter` puede ser de varias palabras. En este caso, la primera palabra es el nombre del filtro y
 las palabras restantes se pasarán como argumentos a la función `filter`

 ### Ayuda
 Use `-h` / `--help` para mostrar ayuda

 ## Comandos por lotes JSON
 Con la `-j` `-j` / `--json` , puede ejecutar múltiples comandos `hokey` coordinados

 Por convención, este archivo se llama `hokey.json` , pero puedes nombrarlo como quieras

 Si pasa un directorio como la opción `-j` -j`, `hokey` buscará un `hokey.json` en ese directorio

 El archivo JSON debe contener un objeto. Dentro de ese objeto, sus nombres de propiedad son los mismos que
 las opciones de la línea de comandos, además de una propiedad adicional llamada `hokey`

 La propiedad `hokey` es una matriz de comandos para ejecutar. Las propiedades declaradas dentro de estos comandos
 anula cualquier declaración duplicada en el objeto externo.

 Dentro de cada objeto en la matriz `hokey` , debe especificar un `name` y los archivos de entrada y salida

 Aquí hay un ejemplo de un `hokey.json`

    {
        "inputLanguage": "en",
        "languages": "es,fr,ja", # can also be an array of strings
        "force": false,
        "match": null,
        "processAs": null,
        "excludes": ["exclude-1", "exclude-2"],
        "handlebars": false,
        "markdown": false,
        "regular": false,
        "dryRun": false,
        "filter": "theFilter.js",
        "hokey": [
          {
            "name": "locale names",
            "infile": "messages/locales_en.js",
            "outfile": "messages/locales_LANG.js",
            "handlebars": true
          },
          {
            "name": "CLI messages",
            "infile": "messages/en_messages.js",
            "outfile": "messages/LANG_messages.js",
            "handlebars": true
          },
          {
            "name": "README",
            "infile": "README.md",
            "outfile": "lang/LANG/",
            "excludes": ["lang/", "node_modules/", "\\.git/", "tmp/"],
            "filter": "relativizeMarkdownLinks lang",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Múltiples archivos de entrada
 Pase una matriz de rutas de archivo como `infiles` en lugar de una sola ruta `infile` , como en este ejemplo:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Índices
 Al traducir a muchos idiomas, `hokey` puede crear un archivo de índice que enumera todas las traducciones realizadas
 y proporciona enlaces a ellos

 *Al generar índices, solo puede tener una fuente de entrada*

 Pase la `-I` / `--index` , el valor es donde se generará el archivo de índice, que puede ser un archivo
 o un directorio. Si es un directorio, se usará un nombre de archivo predeterminado, basado en la plantilla (ver más abajo)

 Utilice `-A` / `--index-template` para determinar cómo se formatea la salida del índice. Puede especificar 'html',
 'markdown', 'texto' o la ruta del archivo a su propia plantilla [HandlebarsJS](https://handlebarsjs.com/)

 Si especifica su propia plantilla, también debe especificar un archivo (no un directorio) para `-I` / `--index`
 opción

 ## ¡Diviértete traduciendo idiomas!

</pre>
