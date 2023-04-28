Hokeylização
 =============
 Por que não consigo executar todo o meu aplicativo ou site por meio do Google Tradutor e obter uma tradução básica em outro idioma?

 ***Agora você pode!***

 O nome `hokeylization` é um portmanteau, que significa 'localização hokey'

 É um pouco piegas porque é muito simples: envia strings para o Google Translate

 E é simples, mas também muito poderoso. Possui suporte especial para documentos HTML,
 [HandlebarsJS](https://handlebarsjs.com/) modelos,
 e arquivos [Markdown](https://daringfireball.net/projects/markdown).

 Você pode traduzir:
 * um objeto JavaScript contendo mensagens
 * qualquer número de arquivos ou diretórios, sempre percorrendo os diretórios recursivamente

 # Leia isso em outro idioma
 Este documento README.md foi traduzido, usando a própria ferramenta de hokeylization, para
 **[todos os idiomas suportados pelo Google Tradutor](https://cloud.google.com/translate/docs/languages)!**

 Tenho certeza que não é perfeito, mas espero que seja melhor que nada!

 [🇸🇦 Árabe](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Alemão](../de/README.md)
 [🇧🇷 Inglês](../pt/README.md)
 [🇪🇸 Espanhol](../es/README.md)
 [🇫🇷 Francês](../fr/README.md)
 [🇹🇩 Hauçá](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonésio](../id/README.md)
 [🇮🇹 Italiano](../it/README.md)
 [🇯🇵 Japonês](../ja/README.md)
 [🇰🇷 coreano](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polonês](../pl/README.md)
 [🇧🇷 Português](../pt/README.md)
 [🇷🇺 Russo](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalo](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 chinês](../zh/README.md)


 **[📚 ... Todos os Idiomas ...](../README.md)**
 ----

 ### Existe algum problema com esta tradução do README?
 Esta tradução específica do original [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 pode estar com defeito -- *correções são muito bem-vindas!* Envie uma [solicitação de pull no GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 ou se você não se sentir à vontade para fazer isso, [abra um problema](https://github.com/cobbzilla/hokeylization/issues)

 Ao criar um novo problema no GitHub sobre uma tradução, faça:
 * inclua o URL da página (copiar/colar da barra de endereços do navegador)
 * inclua o texto exato que está errado (copiar/colar do navegador)
 * por favor descreva o que está errado -- a tradução está incorreta? a formatação está quebrada de alguma forma?
 * gentilmente oferecer uma sugestão de uma tradução melhor, ou como o texto deve ser formatado corretamente
 * **Obrigada!**

 # Conteúdo
 * [Fonte](#Fonte)
 * [Suporte e Financiamento](#Suporte-e-Financiamento)
 * [Instalação](#Instalação)
 * [Configuração](#Configuração)
 * [Traduzindo um arquivo de recurso de string JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Traduzindo um diretório de arquivos de texto](#Translating-a-directory-of-text-files)
 * [Outras opções](#Other-options)
 * [Comandos em lote JSON](#JSON-batch-commands)

 ## Fonte
 * [hokeylization no GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Apoio e Financiamento
 Estou tentando ser um desenvolvedor profissional de software de código aberto. eu tenho trabalhado em
 na indústria de software por muitos anos, criei empresas de sucesso e as vendi para empresas públicas.
 Recentemente eu perdi meu emprego, e eu realmente não tenho nenhum outro trabalho alinhado

 Então, vou tentar escrever um software útil e ver se isso funciona

 Se você gosta de usar este software, eu ficaria muito feliz em receber até mesmo o
 menor [contribuição mensal via Patreon](https://www.patreon.com/cobbzilla)

 *Obrigada!*

 ## Instalação
 Para usar a ferramenta de linha de comando, instale usando `npm` ou `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Para usar como biblioteca, instale a versão `lite` , que é bem menor:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Então veja a ajuda do comando `hokey` :

    hokey --help
    hokey -h

 Quer ver a saída em seu idioma ou em outro idioma?

 `hokey` tenta detectar o idioma automaticamente das variáveis de ambiente do seu shell

 Você pode forçar um idioma definindo a variável de ambiente `LC_ALL` :

    LC_ALL=it hokey --help

 Observe que se você instalou o `hokeylization-lite` , a ajuda do comando está disponível apenas em inglês

 ## Configurar
 Defina a variável de ambiente `GOOGLE_TRANSLATE_PROJECT_ID` para identificar seu projeto do Google Tradutor

 Defina a variável de ambiente `GOOGLE_APPLICATION_CREDENTIALS` para as credenciais JSON que você baixou
 depois de descobrir como a autenticação funciona na nuvem do Google (pode ser divertido)

 Se você estiver executando a partir do código-fonte, também poderá colocá-los em um arquivo `.env` no código-fonte
 diretório eles serão carregados em tempo de execução via [dotenv](https://www.npmjs.com/package/dotenv)

 ## Traduzindo um arquivo de recurso de string JavaScript
 Sua tabela de strings **deve** estar em um arquivo JavaScript em uma destas duas formas:

 Exportação ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Exportação CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Se este arquivo foi nomeado `myfile.en.js` , você pode traduzi-lo para espanhol e alemão com:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 O `LANG` acima é especial -- é uma palavra reservada nesta ferramenta!

 O `LANG` é substituído pelo código do idioma para os arquivos de saída

 Assim o comando acima cria os arquivos:

    myfile.es.js
    myfile.de.js

 A opção `-l` / `--languages` é uma lista separada por vírgulas de códigos de idioma ISO
 [suportado pelo Google Tradutor](https://cloud.google.com/translate/docs/languages)

 Se o arquivo de saída já existir, ele será examinado para determinar quais chaves já existem.
 As chaves existentes não serão traduzidas. Traduções para chaves ausentes serão geradas e anexadas
 ao final do objeto JS. O arquivo inteiro é sempre reescrito.

 Para forçar a retradução de todas as chaves, use a `-f` / `--force`

 ## Traduzindo um diretório de arquivos de texto
 Você também pode traduzir um diretório de arquivos. A hokeylização visitará recursivamente cada
 arquivo no diretório e execute seu conteúdo através do Google Tradutor e salve a saída
 para um arquivo com nome idêntico em uma árvore de diretórios separada

 Quando o destino da sua tradução é um diretório, este modo é ativado

 A `-o` / `--outfile` especifica o diretório de saída

 **GRANDE AVISO**: Ao traduzir diretórios, **NÃO** especifique um diretório de saída
 que está dentro do seu diretório de entrada! Se você fizer isso, você:
 * induzir recursão infinita
 * aumente sua conta do Google
 * encha seu disco
 * se divertir menos

 Aqui está um exemplo do que *não fazer*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Quando isso é executado, os arquivos traduzidos são gravados em `templates/es` e, assim, tornam-se novos
 arquivos de origem a serem traduzidos, pois estão em `templates/` -- este processo continua
 para sempre, não faça isso!

 #### Modo de usar correto
 OK, digamos que você tenha alguns modelos de email em um diretório:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Para traduzir tudo isso para espanhol e alemão, execute:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Acima, `LANG` é uma palavra reservada e será substituída pelo código de idioma ISO

 O que acontece quando o acima é executado:
 * Os diretórios `templates/email/es` e `templates/email/de` serão criados (se não existirem)
 * Todos os arquivos em `templates/email/en` serão traduzidos para espanhol e alemão
 * Os arquivos de saída existentes não serão regenerados a menos que você use `-f` / `--force`
 * Você terminará com uma estrutura de diretórios e arquivos idênticos dentro de `es` e `de` como você tem em `en`

 ## Outras opções

 ### Funcionamento a seco
 Passe `-n` / `--dry-run` para exibir o que seria feito, mas não faça nenhuma chamada de API ou escreva nenhum arquivo

 ### Força
 Passe `-f` / `--force` para sempre regenerar as traduções, mesmo que já existam

 ### Combine
 Passe `-m` / `--match` para limitar os arquivos processados ao executar no modo diretório

 Você pode nem sempre querer traduzir *todos* arquivos em seu diretório de origem para seu diretório de destino

 O valor da `-m` / `--match` é uma regex (cuidado com as regras de citação do shell!) que especifica
 quais arquivos devem ser traduzidos

 Em caso de dúvida, você pode combinar esta opção com `-n` / `--dry-run` para ver quais arquivos seriam traduzidos

 ### Exclui
 Às vezes, seu `-m` corresponde a muitos arquivos. Use a `-e` / `--excludes` para excluir explicitamente
 arquivos que de outra forma teriam correspondido

 Você pode listar vários regexes, separados por espaços

 Um uso comum seria: `--excludes node_modules dist \.git build tmp`

 ### Guidão
 As strings a serem traduzidas podem conter templates `{{ handlebars }}` , com duas ou três chaves

 Você provavelmente *NÃO* quer que as coisas dentro desses modelos sejam traduzidas

 Passe o `-H` / `--handlebars` , e qualquer coisa dentro de `{{ ... }}` não será traduzida

 ### Marcação
 Markdown não é texto nem html, então o Google Tradutor tem algumas dificuldades com isso

 O `-M` / `--markdown` permite o tratamento especial para arquivos markdown

 Com arquivos markdown, se você não usar o `-M` , provavelmente encontrará estes problemas:
 * Links quebrados. Na tradução, um caractere de espaço aparece após o término de uma descrição de link de remarcação (com `]` ), mas
 antes de seu link de destino começar (com `(` ). Isso faz com que o markdown seja renderizado incorretamente e o link
 está quebrado ao visualizar o documento.
 * Os blocos de código são traduzidos. O tradutor do Google não sabe o que markdown considera código e o que não
 * Espaçamento incorreto para blocos de código recuados. O espaçamento é difícil de preservar na tradução
 * Coisas dentro de `backticks` serão traduzidas, quando você quase sempre quer que sejam valores literais

 Quando o `-M` / `--markdown` está ativado:
 * O padrão `](` será condensado em `](` corrigindo assim os links de markdown quebrados
 * Um wrapper "sem tradução" será colocado em torno de blocos de código recuados, preservando o recuo adequado e garantindo que eles não sejam traduzidos
 * Um wrapper "sem tradução" será colocado ao redor do texto dentro de `backticks` para garantir que eles não sejam traduzidos

 ### Processo-como
 Normalmente tudo é processado como texto simples

 Se o seu conteúdo for HTML, ele será mutilado a menos que você passe a `-p html` / `--process-as html`

 ### Filtro
 Para os aventureiros: ao processar arquivos em um diretório, você pode passar a `-F` / `--filter` --filter`
 para filtrar a saída antes de ser gravada no sistema de arquivos

 O valor desta opção deve ser um caminho para um arquivo JS que exporte uma função chamada `filter`

 A função `filter` deve ser `async` porque `await` será chamado sobre ela

 Antes que os arquivos sejam gravados no disco, todo o conteúdo do arquivo será passado para a função `filter` como uma string

 O valor de retorno da função `filter` é o que realmente será gravado no armazenamento

 Assim, você tem total controle sobre o que finalmente será escrito

 O script `filter` será procurado nos seguintes locais (com `.js` será anexado ao filtro
 nome, a menos que já termine em `.js` )
 * O diretório atual
 * Um diretório chamado `.hokey-filters` dentro do diretório atual
 * Um diretório chamado `${HOME}/.hokey-filters` , onde `${HOME}` é o diretório inicial do usuário atual
 * O [diretório de filtros] integrado (https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Parâmetros de filtro
 A string `filter` pode ter várias palavras. Nesse caso, a primeira palavra é o nome do filtro e
 as palavras restantes serão passadas como argumentos para a função `filter`

 ### Ajuda
 Use `-h` / `--help` para mostrar a ajuda

 ## Comandos em lote JSON
 Com a `-j` / `--json` , você pode executar vários comandos coordenados `hokey`

 Por convenção, este arquivo é chamado `hokey.json` , mas você pode nomeá-lo como quiser

 Se você passar um diretório como a opção ` `-j` , o `hokey` procurará por um `hokey.json` nesse diretório

 O arquivo JSON deve conter um objeto. Dentro desse objeto, seus nomes de propriedade são os mesmos que
 as opções de linha de comando, mais uma propriedade adicional chamada `hokey`

 A propriedade `hokey` é um array de comandos a serem executados. As propriedades declaradas nesses comandos serão
 substituir quaisquer declarações duplicadas no objeto externo.

 Dentro de cada objeto no array `hokey` , você deve especificar um `name` e os arquivos de entrada e saída

 Aqui está um exemplo de um `hokey.json`

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

 ### Vários arquivos de entrada
 Passe uma matriz de caminhos de arquivo como `infiles` em vez de um único caminho `infile` , como neste exemplo:

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
 Ao traduzir para vários idiomas, `hokey` pode criar um arquivo de índice que lista todas as traduções feitas
 e fornece links para eles

 *Ao gerar índices, você pode ter apenas uma fonte de entrada*

 Passe a `-I` / `--index` , o valor é onde será gerado o arquivo de índice, que pode ser um arquivo
 ou um diretório. Se for um diretório, um nome de arquivo padrão será usado, com base no modelo (veja abaixo)

 Use o `-A` / `--index-template` para determinar como a saída do índice é formatada. Você pode especificar 'html',
 'markdown', 'text' ou o caminho do arquivo para o seu próprio modelo [HandlebarsJS](https://handlebarsjs.com/)

 Se você especificar seu próprio modelo, também deverá especificar um arquivo (não um diretório) para o `-I` / `--index`
 opção

 ## Divirta-se traduzindo idiomas!

</pre>
