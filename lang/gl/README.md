Hokeylización
 ==============
 Por que non podo executar toda a miña aplicación ou sitio a través do Tradutor de Google e obter unha tradución básica noutro idioma?

 ***Agora podes!***

 O nome `hokeylization` é un acrónimo, que significa "localización hokey"

 É un pouco hokey porque é moi sinxelo: envía cadeas a Google Translate

 E é sinxelo, pero tamén moi poderoso. Ten soporte especial para documentos HTML,
 [HandlebarsJS](https://handlebarsjs.com/) modelos,
 e ficheiros [Markdown](https://daringfireball.net/projects/markdown).

 Podes traducir:
 * un obxecto JavaScript que contén mensaxes
 * calquera número de ficheiros ou directorios, sempre atravesando directorios de forma recursiva

 # Le isto noutro idioma
 Este documento README.md foi traducido, mediante a propia ferramenta de hokeylization, a
 **[todos os idiomas admitidos por Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Estou seguro de que non é perfecto, pero espero que sexa mellor que nada!

 [🇸🇦 árabe](../ar/README.md)
 [🇧🇩 bengalí](../bn/README.md)
 [🇩🇪 Alemán](../de/README.md)
 [🇺🇸 inglés](../en/README.md)
 [🇪🇸 Español](../es/README.md)
 [🇫🇷 Francés](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesio](../id/README.md)
 [🇮🇹 italiano](../it/README.md)
 [🇯🇵 xaponés](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polaco](../pl/README.md)
 [🇧🇷 portugués](../pt/README.md)
 [🇷🇺 Ruso](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalo](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 vietnamita](../vi/README.md)
 [🇨🇳 Chinés](../zh/README.md)


 **[📚 ... Todos os idiomas ...](../README.md)**
 ----

 ### Hai algún problema con esta tradución do README?
 Esta tradución particular do orixinal [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 pode ser defectuoso -- *¡As correccións son moi ben recibidas!* Envía unha [solicitude de extracción en GitHub](https://github.com/cobbzilla/yuebing/pulls),
 ou se non estás cómodo facendo iso, [abre un problema](https://github.com/cobbzilla/yuebing/issues)

 Cando crees un novo problema de GitHub sobre unha tradución, fai:
 * inclúa o URL da páxina (copiar/pegar da barra de enderezos do navegador)
 * inclúa o texto exacto incorrecto (copiar/pegar desde o navegador)
 * Describe o que está mal: a tradución é incorrecta? o formato está roto dalgún xeito?
 * Ofrecer amablemente unha suxestión dunha mellor tradución, ou como o texto debe estar formateado correctamente
 * **Grazas!**

 # Contidos
 * [Fonte](#Fonte)
 * [Apoio e financiamento](#Support-and-Funding)
 * [Instalación](#Instalación)
 * [Configuración](#Configuración)
 * [Traducir un ficheiro de recursos de cadea JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Traducir un directorio de ficheiros de texto](#Translating-a-directory-of-text-files)
 * [Outras opcións](#Outras opcións)
 * [Comandos por lotes JSON](#JSON-comandos por lotes)

 ## Fonte
 * [hokeylization en GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization en npm](https://www.npmjs.com/package/hokeylization)

 ## Apoio e financiamento
 Estou tentando ser un programador profesional de software de código aberto. Estiven traballando
 da industria do software durante moitos anos, comecei empresas exitosas e vendínllas a empresas públicas.
 Recentemente perdín o meu traballo, e realmente non teño ningún outro traballo preparado

 Entón, vou tentar escribir un software útil e ver se funciona

 Agradecería sinceramente ata a máis pequena [contribución mensual a través de Patreon](https://www.patreon.com/cobbzilla)

 ## Instalación
 Para usar a ferramenta de liña de comandos, instálea usando `npm` ou `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Para usala como biblioteca, instala a versión `lite` , que é moito máis pequena:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 A continuación, busque a axuda para o comando `hokey` :

    hokey --help
    hokey -h

 Queres ver a saída no teu idioma ou noutro idioma?

 `hokey` tenta detectar o idioma automaticamente a partir das variables de ambiente do teu shell

 Podes forzar un idioma configurando a variable de ambiente `LC_ALL` :

    LC_ALL=it hokey --help

 Teña en conta que se instalou `hokeylization-lite` , a axuda dos comandos só está dispoñible en inglés

 ## Montar
 Establece a variable de ambiente `GOOGLE_TRANSLATE_PROJECT_ID` para identificar o teu proxecto de Google Translate

 Establece a variable de ambiente `GOOGLE_APPLICATION_CREDENTIALS` coas credenciais JSON que descargaches
 despois de descubrir como funciona a autenticación na nube de Google (pode ser divertido)

 Se está a executar desde o código fonte, tamén pode poñer estes nun ficheiro `.env` na fonte
 directorio que se cargarán en tempo de execución a través de [dotenv](https://www.npmjs.com/package/dotenv)

 ## Traducindo un ficheiro de recursos de cadea JavaScript
 A túa táboa de cadeas **debe** estar nun ficheiro JavaScript nunha destas dúas formas:

 Exportación ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Exportación CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Se este ficheiro se chamou `myfile.en.js` , podes traducilo ao español e ao alemán con:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 O `LANG` no anterior é especial: é unha palabra reservada nesta ferramenta!

 O `LANG` substitúese polo código de idioma para os ficheiros de saída

 Así, o comando anterior crea os ficheiros:

    myfile.es.js
    myfile.de.js

 A `-l` / `--languages` é unha lista separada por comas de códigos de idioma ISO
 [admitido por Google Translate](https://cloud.google.com/translate/docs/languages)

 Se o ficheiro de saída xa existe, examinarase para determinar que chaves xa existen.
 As claves existentes non se traducirán. Xeraranse e engadiranse traducións das claves que faltan
 ata o final do obxecto JS. Todo o ficheiro sempre se reescrito.

 Para forzar a retradución de todas as teclas, use a opción `-f` / `--force`

 ## Traducindo un directorio de ficheiros de texto
 Tamén pode traducir un directorio de ficheiros. hokeylization visitará recursivamente todos
 ficheiro no directorio e executa o seu contido a través de Google Translate e garda a saída
 a un ficheiro de nome idéntico nunha árbore de directorios separada

 Cando o destino da súa tradución é un directorio, este modo está habilitado

 A `-o` / `--outfile` especifica o directorio de saída

 **GRAN AVISO**: ao traducir directorios, **NON** especifique un directorio de saída
 que está dentro do teu directorio de entrada! Se fas isto, terás:
 * inducir recursión infinita
 * subir a túa factura de Google
 * enche o teu disco
 * divertirse menos

 Aquí tes un exemplo do que *non hai que facer*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Cando se executa, os ficheiros traducidos escríbense en `templates/es` e, polo tanto, vólvense novos
 ficheiros fonte para traducir, xa que están baixo `templates/` -- este proceso continúa
 para sempre, non o fagas!

 #### Uso correcto
 OK, digamos que tes algúns modelos de correo electrónico nun directorio:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Para traducir todo isto ao español e ao alemán, executa:

    hokey -l es,de -o templates/email/LANG templates/email/en

 No anterior, `LANG` é unha palabra reservada e substituirase polo código de idioma ISO

 Que ocorre cando se executa o anterior:
 * Crearanse os directorios `templates/email/es` e `templates/email/de` (se non existen)
 * Todos os ficheiros en `templates/email/en` serán traducidos ao español e ao alemán
 * Os ficheiros de saída existentes non se rexenerarán a menos que uses `-f` / `--force`
 * Terminarás cunha estrutura de directorios e ficheiros idénticos dentro de `es` e `de` como tes en `en`

 ## Outras opcións

 ### Carreira en seco
 Pase `-n` / `--dry-run` para mostrar o que se faría, pero non faga ningunha chamada á API nin escriba ningún ficheiro

 ### Forza
 Pase `-f` / `--force` para rexenerar sempre traducións, aínda que xa existan

 ### Partido
 Pase `-m` / `--match` para limitar os ficheiros procesados cando se executan en modo directorio

 Quizais non sempre desexes traducir *todos os* ficheiros do teu directorio de orixe ao teu directorio de destino

 O valor da opción `-m` / `--match` é unha expresión regular (coidado coas regras de citas de shell!) que especifica
 que ficheiros deben ser traducidos

 En caso de dúbida, pode combinar esta opción con `-n` / `--dry-run` para ver que ficheiros se traducirían

 ### Exclúe
 Ás veces o teu `-m` coincide con demasiados ficheiros. Use a `-e` / `--excludes` --excludes` para excluír explícitamente
 ficheiros que doutro xeito coincidirían

 Podes listar varias expresións regulares, separadas por espazos

 Un uso común sería: `--excludes node_modules dist \.git build tmp`

 ### Manillares
 As cadeas para traducir poden conter modelos de `{{ handlebars }}` , con dúas ou tres llaves

 Probablemente *NON* queiras que se traduzan o contido deses modelos

 Pase a `-H` / `--handlebars` e calquera cousa dentro de `{{ ... }}` non se traducirá

 ### Rebaixa
 Markdown non é texto nin html, polo que Google Translate ten algunhas dificultades con el

 A `-M` / `--markdown` permite un manexo especial dos ficheiros de rebaixa

 Cos ficheiros de rebaixa, se non usa a `-M` , probablemente atopará estes problemas:
 * Ligazóns rotas. Na tradución, aparece un espazo despois de que remate a descrición da ligazón de rebaixa (con `]` ) pero
 antes de que comece a súa ligazón de destino (con `(` ). Isto fai que a rebaixa se represente incorrectamente e a ligazón
 está roto ao ver o documento.
 * Os bloques de código son traducidos. O tradutor de Google non sabe o que se considera código e o que non
 * Espazamento incorrecto para bloques de código sangrado. O espazo é difícil de conservar na tradución
 * As cousas dentro de `backticks` traduciranse, cando case sempre queres que sexan valores literais

 Cando a `-M` / `--markdown` está activada:
 * O patrón `](` condensarase en `](` , corrixindo así as ligazóns de rebaixa rotas
 * Colocarase un envoltorio "sen tradución" ao redor dos bloques de código con sangría, preservando a sangría adecuada e garantindo que non se traduzan
 * Colocarase un envoltorio "sen traducir" ao redor do texto dentro de `backticks` para garantir que non se traduzan

 ### Proceso-como
 Normalmente todo se procesa como texto plano

 Se o teu contido é HTML, destrozarase a menos que pases a opción `-p html` / `--process-as html`

 ### Filtro
 Para os aventureiros: ao procesar ficheiros nun directorio, pode pasar a opción `-F` / `--filter`
 para filtrar a saída antes de que se escriba no sistema de ficheiros

 O valor desta opción debe ser unha ruta a un ficheiro JS que exporte unha función chamada `filter`

 A función `filter` debe ser `async` porque se chamará `await`

 Antes de escribir os ficheiros no disco, todo o contido do ficheiro pasará á función `filter` como unha cadea

 O valor de retorno da función `filter` é o que realmente se escribirá no almacenamento

 Así, tes control total sobre o que finalmente se escribirá

 ### Axuda
 Use `-h` / `--help` para mostrar a axuda

 ## Comandos por lotes JSON
 Coa opción `-j` / `--json` , pode executar varios comandos `hokey` coordinados

 Por convención, este ficheiro chámase `hokey.json` , pero podes poñerlle o nome que queiras

 Se pasas un directorio como a opción ` `-j` , `hokey` buscará un `hokey.json` nese directorio

 O ficheiro JSON debe conter un obxecto. Dentro dese obxecto, os seus nomes de propiedade son os mesmos que
 as opcións da liña de comandos, ademais dunha propiedade adicional chamada `hokey`

 A propiedade `hokey` é unha matriz de comandos para executar. As propiedades declaradas dentro destes comandos serán
 anular calquera declaración duplicada no obxecto externo.

 Dentro de cada obxecto da matriz `hokey` , debes especificar un `name` e os ficheiros de entrada e saída

 Aquí tes un exemplo de `hokey.json`

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
            "filter": "util/filterReadme.js",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Múltiples ficheiros de entrada
 Pase unha matriz de rutas de ficheiros como `infiles` en lugar dunha única ruta `infile` , como neste exemplo:

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
 Cando traduce a moitos idiomas, `hokey` pode crear un ficheiro de índice que enumera todas as traducións feitas
 e ofrece ligazóns a eles

 *Ao xerar índices, só podes ter unha fonte de entrada*

 Pase a `-I` / `--index` , o valor é onde se xerará o ficheiro de índice, que pode ser un ficheiro
 ou un directorio. Se é un directorio, empregarase un nome de ficheiro predeterminado, baseado no modelo (ver a continuación)

 Use o `-A` / `--index-template` para determinar como se formatea a saída do índice. Podes especificar 'html',
 'markdown', 'text' ou a ruta do ficheiro ao teu propio modelo [HandlebarsJS](https://handlebarsjs.com/)

 Se especifica o seu propio modelo, tamén debe especificar un ficheiro (non un directorio) para o `-I` / `--index`
 opción

 ## Pasa un rato divertido traducindo idiomas!

</pre>
